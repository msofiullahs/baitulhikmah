<?php
namespace App\Http\Controllers;

use App\Models\Jamaah;
use App\Models\CategoryJamaah;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class JamaahController extends Controller
{
    public function index(Request $request)
    {
        $query = Jamaah::with('categories')->orderBy('nama');

        if ($request->filled('search')) {
            $query->where('nama', 'like', "%{$request->search}%")
                  ->orWhere('no_hp', 'like', "%{$request->search}%");
        }

        return Inertia::render('Jamaah/Index', [
            'jamaahs' => $query->paginate(15)->withQueryString(),
            'categories' => CategoryJamaah::all(),
            'filters' => $request->only(['search']),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'nik' => 'nullable|string|max:20',
            'jenis_kelamin' => 'required|in:L,P',
            'tanggal_lahir' => 'nullable|date',
            'alamat' => 'nullable|string',
            'rt' => 'nullable|string|max:10',
            'rw' => 'nullable|string|max:10',
            'kelurahan' => 'nullable|string|max:100',
            'kecamatan' => 'nullable|string|max:100',
            'kota' => 'nullable|string|max:100',
            'no_hp' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'pekerjaan' => 'nullable|string|max:100',
            'status' => 'nullable|in:aktif,pindah,meninggal,nonaktif',
            'catatan' => 'nullable|string',
            'category_ids' => 'nullable|array',
            'category_ids.*' => 'exists:category_jamaahs,id',
            'foto' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('foto')) {
            $validated['foto'] = $request->file('foto')->store('jamaah', 'public');
        }
        
        $validated['status'] = $validated['status'] ?? 'aktif';
        $validated['created_by'] = Auth::id();

        $jamaah = Jamaah::create($validated);
        if (!empty($validated['category_ids'])) {
            $jamaah->categories()->sync($validated['category_ids']);
        }

        return redirect()->route('jamaah.index')->with('success', 'Data jamaah berhasil ditambahkan.');
    }

    public function update(Request $request, Jamaah $jamaah)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'nik' => 'nullable|string|max:20',
            'jenis_kelamin' => 'required|in:L,P',
            'tanggal_lahir' => 'nullable|date',
            'alamat' => 'nullable|string',
            'rt' => 'nullable|string|max:10',
            'rw' => 'nullable|string|max:10',
            'kelurahan' => 'nullable|string|max:100',
            'kecamatan' => 'nullable|string|max:100',
            'kota' => 'nullable|string|max:100',
            'no_hp' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'pekerjaan' => 'nullable|string|max:100',
            'status' => 'required|in:aktif,pindah,meninggal,nonaktif',
            'catatan' => 'nullable|string',
            'category_ids' => 'nullable|array',
            'foto' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('foto')) {
            if ($jamaah->foto) \Storage::disk('public')->delete($jamaah->foto);
            $validated['foto'] = $request->file('foto')->store('jamaah', 'public');
        }

        $jamaah->update($validated);
        if (isset($validated['category_ids'])) {
            $jamaah->categories()->sync($validated['category_ids']);
        }

        return redirect()->route('jamaah.index')->with('success', 'Data jamaah berhasil diperbarui.');
    }

    public function destroy(Jamaah $jamaah)
    {
        $jamaah->delete();
        return redirect()->route('jamaah.index')->with('success', 'Data jamaah berhasil dihapus.');
    }
}