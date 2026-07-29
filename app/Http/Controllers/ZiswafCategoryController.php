<?php

namespace App\Http\Controllers;

use App\Models\ZiswafCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ZiswafCategoryController extends Controller
{
    public function index(Request $request)
    {
        $query = ZiswafCategory::orderBy('nama');
        
        if ($request->filled('search')) {
            $query->where('nama', 'like', "%{$request->search}%");
        }
        
        if ($request->filled('kategori')) {
            $query->where('kategori', $request->kategori);
        }
        
        $items = $query->paginate(15)->withQueryString();
        
        return Inertia::render('ZiswafCategory/Index', [
            'items' => $items,
            'filters' => ['search' => $request->search, 'kategori' => $request->kategori],
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'kategori' => 'required|in:zakat,infaq,sedekah,wakaf',
            'deskripsi' => 'nullable|string',
            'nisab' => 'nullable|numeric|min:0',
            'persentase' => 'nullable|numeric|min:0|max:100',
        ]);
        
        ZiswafCategory::create($validated);
        
        return back()->with('success', 'Kategori ZISWAF berhasil ditambahkan.');
    }

    public function update(Request $request, ZiswafCategory $ziswafCategory)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'kategori' => 'required|in:zakat,infaq,sedekah,wakaf',
            'deskripsi' => 'nullable|string',
            'nisab' => 'nullable|numeric|min:0',
            'persentase' => 'nullable|numeric|min:0|max:100',
        ]);
        
        $ziswafCategory->update($validated);
        
        return back()->with('success', 'Kategori ZISWAF berhasil diperbarui.');
    }

    public function destroy(ZiswafCategory $ziswafCategory)
    {
        $ziswafCategory->delete();
        return back()->with('success', 'Kategori ZISWAF berhasil dihapus.');
    }
}
