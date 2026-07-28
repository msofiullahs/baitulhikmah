<?php

namespace App\Http\Controllers;

use App\Models\TransactionCategory;
use App\Models\Cashbox;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionCategoryController extends Controller
{
    public function index(Request $request)
    {
        $query = TransactionCategory::with('cashbox')->orderBy('nama');
        
        if ($request->filled('search')) {
            $query->where('nama', 'like', "%{$request->search}%");
        }
        
        if ($request->filled('tipe')) {
            $query->where('tipe', $request->tipe);
        }
        
        $items = $query->paginate(15)->withQueryString();
        
        return Inertia::render('TransactionCategory/Index', [
            'items' => $items,
            'filters' => ['search' => $request->search, 'tipe' => $request->tipe],
            'cashboxes' => Cashbox::where('is_active', true)->get(['id', 'nama']),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'tipe' => 'required|in:pemasukan,pengeluaran',
            'warna' => 'nullable|string|max:20',
            'ikon' => 'nullable|string|max:50',
            'kas_box_id' => 'nullable|exists:cashboxes,id',
        ]);
        
        TransactionCategory::create($validated);
        
        return back()->with('success', 'Kategori transaksi berhasil ditambahkan.');
    }

    public function update(Request $request, TransactionCategory $transactionCategory)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'tipe' => 'required|in:pemasukan,pengeluaran',
            'warna' => 'nullable|string|max:20',
            'ikon' => 'nullable|string|max:50',
            'kas_box_id' => 'nullable|exists:cashboxes,id',
        ]);
        
        $transactionCategory->update($validated);
        
        return back()->with('success', 'Kategori transaksi berhasil diperbarui.');
    }

    public function destroy(TransactionCategory $transactionCategory)
    {
        $transactionCategory->delete();
        return back()->with('success', 'Kategori transaksi berhasil dihapus.');
    }
}
