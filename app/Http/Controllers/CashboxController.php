<?php

namespace App\Http\Controllers;

use App\Models\Cashbox;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CashboxController extends Controller
{
    public function index(Request $request)
    {
        $query = Cashbox::orderBy('nama');
        
        if ($request->filled('search')) {
            $query->where('nama', 'like', "%{$request->search}%");
        }
        
        $items = $query->paginate(15)->withQueryString();
        
        return Inertia::render('Cashbox/Index', [
            'items' => $items,
            'filters' => ['search' => $request->search],
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'kode' => 'nullable|string|max:50',
            'deskripsi' => 'nullable|string',
            'saldo_awal' => 'nullable|numeric|min:0',
            'is_active' => 'boolean',
        ]);
        
        $validated['is_active'] = $validated['is_active'] ?? true;
        Cashbox::create($validated);
        
        return back()->with('success', 'Kas box berhasil ditambahkan.');
    }

    public function update(Request $request, Cashbox $cashbox)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'kode' => 'nullable|string|max:50',
            'deskripsi' => 'nullable|string',
            'saldo_awal' => 'nullable|numeric|min:0',
            'is_active' => 'boolean',
        ]);
        
        $validated['is_active'] = $validated['is_active'] ?? true;
        $cashbox->update($validated);
        
        return back()->with('success', 'Kas box berhasil diperbarui.');
    }

    public function destroy(Cashbox $cashbox)
    {
        $cashbox->delete();
        return back()->with('success', 'Kas box berhasil dihapus.');
    }
}
