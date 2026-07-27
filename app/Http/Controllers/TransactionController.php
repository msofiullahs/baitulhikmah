<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\Cashbox;
use App\Models\TransactionCategory;
use App\Models\Jamaah;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class TransactionController extends Controller
{
    public function index(Request $request)
    {
        $query = Transaction::with(['cashbox', 'category', 'jamaah', 'creator'])
            ->orderBy('tanggal', 'desc')
            ->orderBy('created_at', 'desc');

        // Filter pencarian
        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('no_transaksi', 'like', "%{$request->search}%")
                  ->orWhere('keterangan', 'like', "%{$request->search}%");
            });
        }

        // Filter jenis & kategori
        if ($request->filled('jenis')) $query->where('jenis', $request->jenis);
        if ($request->filled('category_id')) $query->where('category_id', $request->category_id);

        $transactions = $query->paginate(15)->withQueryString();

        // Data untuk dropdown filter di Vue
        $cashboxes = Cashbox::where('is_active', true)->get(['id', 'nama', 'kode']);
        $categories = TransactionCategory::get(['id', 'nama', 'tipe', 'warna']);

        // Statistik ringkas
        $stats = [
            'total_saldo' => Cashbox::sum('saldo_awal') + Transaction::where('jenis', 'pemasukan')->where('status', 'approved')->sum('jumlah') - Transaction::where('jenis', 'pengeluaran')->where('status', 'approved')->sum('jumlah'),
            'pemasukan_bulan_ini' => Transaction::where('jenis', 'pemasukan')->where('status', 'approved')->whereMonth('tanggal', now()->month)->sum('jumlah'),
            'pengeluaran_bulan_ini' => Transaction::where('jenis', 'pengeluaran')->where('status', 'approved')->whereMonth('tanggal', now()->month)->sum('jumlah'),
        ];

        return Inertia::render('Transactions/Index', [
            'transactions' => $transactions,
            'cashboxes' => $cashboxes,
            'categories' => $categories,
            'stats' => $stats,
            'filters' => $request->only(['search', 'jenis', 'category_id']),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'cashbox_id' => 'required|exists:cashboxes,id',
            'category_id' => 'required|exists:transaction_categories,id',
            'jenis' => 'required|in:pemasukan,pengeluaran',
            'jumlah' => 'required|numeric|min:0',
            'tanggal' => 'required|date',
            'keterangan' => 'required|string|max:500',
            'bukti' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:2048',
            'jamaah_id' => 'nullable|exists:jamaahs,id',
            'metode' => 'required|in:tunai,transfer,qris,lainnya',
        ]);

        // Handle file upload
        if ($request->hasFile('bukti')) {
            $validated['bukti'] = $request->file('bukti')->store('transactions', 'public');
        }

        $validated['no_transaksi'] = 'TRX-' . now()->format('Ymd') . '-' . strtoupper(Str::random(4));
        $validated['status'] = 'approved'; // Bisa diubah jadi 'pending' jika butuh approval workflow
        $validated['created_by'] = Auth::id();
        $validated['approved_by'] = Auth::id();
        $validated['approved_at'] = now();

        Transaction::create($validated);

        return redirect()->route('transactions.index')->with('success', 'Transaksi berhasil ditambahkan.');
    }

    public function update(Request $request, Transaction $transaction)
    {
        $validated = $request->validate([
            'cashbox_id' => 'required|exists:cashboxes,id',
            'category_id' => 'required|exists:transaction_categories,id',
            'jenis' => 'required|in:pemasukan,pengeluaran',
            'jumlah' => 'required|numeric|min:0',
            'tanggal' => 'required|date',
            'keterangan' => 'required|string|max:500',
            'bukti' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:2048',
            'metode' => 'required|in:tunai,transfer,qris,lainnya',
        ]);

        if ($request->hasFile('bukti')) {
            // Hapus file lama jika ada
            if ($transaction->bukti) {
                \Storage::disk('public')->delete($transaction->bukti);
            }
            $validated['bukti'] = $request->file('bukti')->store('transactions', 'public');
        }

        $transaction->update($validated);

        return redirect()->route('transactions.index')->with('success', 'Transaksi berhasil diperbarui.');
    }

    public function destroy(Transaction $transaction)
    {
        $transaction->delete(); // Soft delete
        return redirect()->route('transactions.index')->with('success', 'Transaksi berhasil dihapus.');
    }
}