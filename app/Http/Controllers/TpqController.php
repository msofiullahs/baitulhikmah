<?php
namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\TpqClass;
use App\Models\StudentPayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
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
        $this->saveStudent($request, new Student);

        return back()->with('success', 'Santri berhasil ditambahkan.');
    }

    public function updateStudent(Request $request, Student $student)
    {
        $this->saveStudent($request, $student);

        return back()->with('success', 'Santri berhasil diperbarui.');
    }

    public function destroyStudent(Student $student)
    {
        if ($student->payments()->exists() || $student->presences()->exists()) {
            return back()->with('error', 'Santri dengan riwayat pembayaran atau kehadiran tidak dapat dihapus.');
        }

        $student->delete();

        return back()->with('success', 'Santri berhasil dihapus.');
    }

    private function saveStudent(Request $request, Student $student): void
    {
        $nis = Rule::unique('students', 'nis');
        if ($student->exists) {
            $nis->ignore($student);
        }

        $validated = $request->validate([
            'nis' => ['required', 'string', 'max:20', $nis],
            'nama' => 'required|string|max:255',
            'jenis_kelamin' => 'required|in:L,P',
            'tanggal_lahir' => 'nullable|date',
            'nama_ortu' => 'required|string|max:255',
            'no_hp_ortu' => 'required|string|max:20',
            'alamat' => 'nullable|string|max:10000',
            'tanggal_masuk' => 'required|date',
            'class_ids' => 'sometimes|array',
            'class_ids.*' => 'required|integer|distinct|exists:tpq_classes,id',
        ]);

        DB::transaction(function () use ($student, $validated) {
            $student->fill($validated)->save();

            if (array_key_exists('class_ids', $validated)) {
                $currentIds = $student->classes()->allRelatedIds();
                $classes = collect($validated['class_ids'])->mapWithKeys(fn ($id) => [
                    $id => $currentIds->contains($id) ? [] : ['tahun_ajaran' => now()->year],
                ]);
                $student->classes()->sync($classes->all());
            }
        });
    }

    public function storePayment(Request $request)
    {
        $request->mergeIfMissing(['student_id' => $request->input('santri_id')]);
        $validated = $request->validate([
            'student_id' => 'required|exists:students,id',
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