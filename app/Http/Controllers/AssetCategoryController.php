<?php

namespace App\Http\Controllers;

use App\Models\AssetCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AssetCategoryController extends Controller
{
    public function index(Request $request)
    {
        $query = AssetCategory::orderBy('nama');
        
        if ($request->filled('search')) {
            $query->where('nama', 'like', "%{$request->search}%");
        }
        
        $items = $query->paginate(15)->withQueryString();
        
        return Inertia::render('AssetCategory/Index', [
            'items' => $items,
            'filters' => ['search' => $request->search],
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
        ]);
        
        AssetCategory::create($validated);
        
        return back()->with('success', 'Kategori aset berhasil ditambahkan.');
    }

    public function update(Request $request, AssetCategory $assetCategory)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
        ]);
        
        $assetCategory->update($validated);
        
        return back()->with('success', 'Kategori aset berhasil diperbarui.');
    }

    public function destroy(AssetCategory $assetCategory)
    {
        $assetCategory->delete();
        return back()->with('success', 'Kategori aset berhasil dihapus.');
    }
}
