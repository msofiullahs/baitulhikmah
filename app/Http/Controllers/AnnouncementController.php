<?php
namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AnnouncementController extends Controller
{
    public function index(Request $request)
    {
        $query = Announcement::with('creator')->latest();
        if ($request->filled('search')) {
            $query->where('judul', 'like', '%'.$request->input('search').'%');
        }
        if ($request->filled('tipe')) {
            $query->where('tipe', $request->input('tipe'));
        }

        return Inertia::render('Announcements/Index', [
            'announcements' => $query->paginate(15)->withQueryString(),
            'filters' => $request->only('search', 'tipe'),
        ]);
    }

    public function store(Request $request)
    {
        Announcement::create($this->announcementData($request) + [
            'created_by' => Auth::id(),
            'status' => 'published',
            'published_at' => now(),
        ]);

        return back()->with('success', 'Pengumuman berhasil dipublikasikan.');
    }

    public function update(Request $request, Announcement $announcement)
    {
        $announcement->update($this->announcementData($request));

        return back()->with('success', 'Pengumuman berhasil diperbarui.');
    }

    private function announcementData(Request $request): array
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'isi' => 'required|string',
            'tipe' => 'required|in:umum,urgent,info_sholat',
            'is_running_text' => 'boolean',
            'send_whatsapp' => 'boolean',
            'send_email' => 'boolean',
            'gambar' => 'nullable|image|max:2048',
        ]);

        unset($validated['gambar']);
        if ($request->hasFile('gambar')) {
            $path = $request->file('gambar')->store('announcements', 'public');
            if ($path === false) {
                throw ValidationException::withMessages(['gambar' => 'Gambar gagal diunggah.']);
            }
            $validated['gambar'] = $path;
        }

        return $validated;
    }

    public function destroy(Announcement $announcement)
    {
        $announcement->delete();
        return back()->with('success', 'Pengumuman berhasil dihapus.');
    }
}