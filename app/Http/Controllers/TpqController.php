<?php
namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\TpqClass;
use App\Models\StudentPayment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TpqController extends Controller
{
    public function studentsIndex(Request $request)
    {
        $query = Student::with('classes')->orderBy('nama');
        if ($request->filled('search')) $query->where('nama', 'like', "%{$request->search}%");

        return Inertia::render('Tpq/Students/Index', [
            'students' => $query->paginate(15)->withQueryString(),
            'classes' => TpqClass::where('is_active', true)->get(['id', 'nama']),
        ]);
    }

    public function storeStudent(Request $request)
    {
        $validated = $request->validate([
            'nis' => 'required|string|unique:students,nis',
            'nama' => 'required|string|max:255',
            'jenis_kelamin' => 'required|in:L,P',
            'nama_ortu' => 'required|string|max:255',
            'no_hp_ortu' => 'required|string|max:20',
            'tanggal_masuk' => 'required|date',
            'class_ids' => 'nullable|array',
        ]);

        $student = Student::create($validated);
        if (!empty($validated['class_ids'])) {
            $student->classes()->attach($validated['class_ids'], ['tahun_ajaran' => date('Y')]);
        }

        return back()->with('success', 'Santri berhasil ditambahkan.');
    }

    public function storePayment(Request $request)
    {
        $validated = $request->validate([
            'santri_id' => 'required|exists:students,id',
            'jumlah' => 'required|numeric|min:0',
            'keterangan' => 'required|string|max:255',
            'tanggal' => 'required|date',
            'metode' => 'required|in:tunai,transfer',
        ]);
        $validated['created_by'] = auth()->id();
        
        StudentPayment::create($validated);
        return back()->with('success', 'Pembayaran berhasil dicatat.');
    }
}