<?php

namespace App\Http\Controllers;

use App\Models\Invitation;
use App\Models\InvitationTemplate;
use App\Models\Jamaah;
use App\Models\InvitationReceiver;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Barryvdh\DomPDF\Facade\Pdf; // Pastikan sudah install barryvdh/laravel-dompdf
use Illuminate\Support\Facades\Storage;
use ZipArchive;

class InvitationController extends Controller
{
    public function index(Request $request)
    {
        $query = Invitation::with(['template', 'creator', 'receivers'])
            ->orderBy('created_at', 'desc');

        if ($request->filled('search')) {
            $query->where('judul_acara', 'like', "%{$request->search}%");
        }

        $invitations = $query->paginate(10)->withQueryString();
        $templates = InvitationTemplate::where('is_active', true)->get(['id', 'nama', 'kategori', 'preview_image']);

        return Inertia::render('Invitations/Index', [
            'invitations' => $invitations,
            'templates' => $templates,
            'filters' => $request->only(['search']),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'template_id' => 'required|exists:undangan_templates,id',
            'judul_acara' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'tanggal_acara' => 'required|date',
            'lokasi' => 'required|string|max:255',
            'pembicara' => 'nullable|string|max:255',
            'pakaian' => 'nullable|string|max:255',
            'kontak' => 'nullable|string|max:255',
            'receiver_names' => 'required|string', // JSON string dari Vue (daftar nama/HP)
        ]);

        $invitation = Invitation::create([
            'no_undangan' => 'UND-' . now()->format('Ymd') . '-' . strtoupper(Str::random(4)),
            'template_id' => $validated['template_id'],
            'judul_acara' => $validated['judul_acara'],
            'deskripsi' => $validated['deskripsi'],
            'tanggal_acara' => $validated['tanggal_acara'],
            'lokasi' => $validated['lokasi'],
            'pembicara' => $validated['pembicara'],
            'pakaian' => $validated['pakaian'],
            'kontak' => $validated['kontak'],
            'status' => 'draft',
            'created_by' => Auth::id(),
        ]);

        // Parse receiver_names (format JSON dari frontend)
        $receiversData = json_decode($validated['receiver_names'], true);
        
        foreach ($receiversData as $receiver) {
            InvitationReceiver::create([
                'invitation_id' => $invitation->id,
                'jamaah_id' => $receiver['jamaah_id'] ?? null,
                'nama_penerima' => $receiver['nama'],
                'no_hp' => $receiver['no_hp'] ?? null,
                'email' => $receiver['email'] ?? null,
                'konfirmasi' => 'belum',
            ]);
        }

        return redirect()->route('invitations.index')->with('success', 'Draft undangan berhasil dibuat. Silakan generate PDF.');
    }

    /**
     * Generate PDF untuk semua penerima undangan tertentu
     */
    public function generatePdf(Invitation $invitation)
    {
        $receivers = $invitation->receivers;
        $template = $invitation->template;
        $zipFileName = 'undangan_' . $invitation->no_undangan . '.zip';
        $zipPath = storage_path('app/public/invitations/' . $zipFileName);

        // Pastikan folder ada
        if (!file_exists(dirname($zipPath))) {
            mkdir(dirname($zipPath), 0755, true);
        }

        $zip = new ZipArchive();
        if ($zip->open($zipPath, ZipArchive::CREATE | ZipArchive::OVERWRITE) !== TRUE) {
            return back()->with('error', 'Gagal membuat file ZIP.');
        }

        foreach ($receivers as $receiver) {
            // Render Blade view ke PDF
            $pdf = Pdf::loadView('invitations.pdf.template', [
                'invitation' => $invitation,
                'receiver' => $receiver,
                'template' => $template,
            ])->setPaper('a5', 'portrait');

            $pdfContent = $pdf->output();
            $fileName = str_slug($receiver->nama_penerima) . '_' . $invitation->no_undangan . '.pdf';
            
            // Tambahkan ke ZIP
            $zip->addFromString($fileName, $pdfContent);

            // Simpan path ke database
            $receiver->update([
                'file_pdf' => 'invitations/' . $invitation->no_undangan . '/' . $fileName,
                'is_sent' => false,
            ]);
            
            // Simpan file individual juga (opsional, untuk backup)
            Storage::disk('public')->put('invitations/' . $invitation->no_undangan . '/' . $fileName, $pdfContent);
        }

        $zip->close();

        return response()->download($zipPath)->deleteFileAfterSend(true);
    }

    public function destroy(Invitation $invitation)
    {
        // Hapus file PDF terkait jika perlu
        $invitation->receivers()->delete();
        $invitation->delete();
        
        return redirect()->route('invitations.index')->with('success', 'Undangan berhasil dihapus.');
    }
}