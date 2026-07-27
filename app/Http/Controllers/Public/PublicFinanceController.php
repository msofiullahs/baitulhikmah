<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\TransactionCategory;
use App\Models\Cashbox;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class PublicFinanceController extends Controller
{
    public function index(Request $request)
    {
        $year = $request->input('year', Carbon::now()->year);
        $month = $request->input('month'); // null = semua bulan

        // === STATISTIK RINGKAS ===
        $query = Transaction::where('status', 'approved')
            ->where('is_public', true)
            ->whereYear('tanggal', $year);

        if ($month) {
            $query->whereMonth('tanggal', $month);
        }

        $stats = [
            'total_pemasukan' => (clone $query)->where('jenis', 'pemasukan')->sum('jumlah'),
            'total_pengeluaran' => (clone $query)->where('jenis', 'pengeluaran')->sum('jumlah'),
            'jumlah_transaksi' => (clone $query)->count(),
            'tahun' => $year,
            'bulan' => $month ? Carbon::create()->month($month)->translatedFormat('F') : 'Semua Bulan',
        ];
        $stats['saldo'] = $stats['total_pemasukan'] - $stats['total_pengeluaran'];

        // === GRAFIK BULANAN (12 bulan) ===
        $monthlyChart = Transaction::where('status', 'approved')
            ->where('is_public', true)
            ->whereYear('tanggal', $year)
            ->selectRaw('
                MONTH(tanggal) as month,
                SUM(CASE WHEN jenis = "pemasukan" THEN jumlah ELSE 0 END) as pemasukan,
                SUM(CASE WHEN jenis = "pengeluaran" THEN jumlah ELSE 0 END) as pengeluaran
            ')
            ->groupBy('month')
            ->orderBy('month')
            ->get()
            ->mapWithKeys(fn($item) => [
                Carbon::create()->month($item->month)->translatedFormat('M') => [
                    'pemasukan' => (float) $item->pemasukan,
                    'pengeluaran' => (float) $item->pengeluaran,
                ]
            ]);

        // === BREAKDOWN PER KATEGORI ===
        $categoriesBreakdown = Transaction::with('category')
            ->where('status', 'approved')
            ->where('is_public', true)
            ->whereYear('tanggal', $year)
            ->when($month, fn($q) => $q->whereMonth('tanggal', $month))
            ->selectRaw('category_id, jenis, SUM(jumlah) as total')
            ->groupBy('category_id', 'jenis')
            ->get()
            ->groupBy('jenis')
            ->map(fn($items) => $items->map(fn($item) => [
                'id' => $item->category_id,
                'nama' => $item->category->nama ?? 'Lainnya',
                'warna' => $item->category->warna ?? '#6b7280',
                'total' => (float) $item->total,
            ]));

        // === TRANSAKSI TERAKHIR (tanpa info sensitif) ===
        $recentTransactions = Transaction::with('category')
            ->where('status', 'approved')
            ->where('is_public', true)
            ->whereYear('tanggal', $year)
            ->when($month, fn($q) => $q->whereMonth('tanggal', $month))
            ->orderBy('tanggal', 'desc')
            ->orderBy('created_at', 'desc')
            ->limit(20)
            ->get(['id', 'no_transaksi', 'tanggal', 'jenis', 'jumlah', 'keterangan', 'category_id'])
            ->map(fn($t) => [
                'id' => $t->id,
                'no_transaksi' => $t->no_transaksi,
                'tanggal' => $t->tanggal->translatedFormat('d M Y'),
                'jenis' => $t->jenis,
                'jumlah' => (float) $t->jumlah,
                'keterangan' => $t->keterangan,
                'kategori' => [
                    'nama' => $t->category->nama ?? '-',
                    'warna' => $t->category->warna ?? '#6b7280',
                ],
            ]);

        // === DAFTAR TAHUN & BULAN UNTUK FILTER ===
        $availableYears = Transaction::where('status', 'approved')
            ->where('is_public', true)
            ->selectRaw('YEAR(tanggal) as year')
            ->distinct()
            ->orderByDesc('year')
            ->pluck('year');

        $months = collect(range(1, 12))->mapWithKeys(fn($m) => [
            $m => Carbon::create()->month($m)->translatedFormat('F')
        ]);

        return Inertia::render('Public/Finance/Index', [
            'stats' => $stats,
            'monthly_chart' => $monthlyChart,
            'categories_breakdown' => [
                'pemasukan' => $categoriesBreakdown->get('pemasukan', collect()),
                'pengeluaran' => $categoriesBreakdown->get('pengeluaran', collect()),
            ],
            'recent_transactions' => $recentTransactions,
            'filters' => [
                'years' => $availableYears,
                'months' => $months,
                'selected_year' => (int) $year,
                'selected_month' => $month ? (int) $month : null,
            ],
        ]);
    }

    /**
     * Download laporan keuangan dalam bentuk PDF
     */
    public function download(Request $request)
    {
        $year = $request->input('year', Carbon::now()->year);
        $month = $request->input('month');

        // Ambil data yang sama dengan index()
        $transactions = Transaction::with('category')
            ->where('status', 'approved')
            ->where('is_public', true)
            ->whereYear('tanggal', $year)
            ->when($month, fn($q) => $q->whereMonth('tanggal', $month))
            ->orderBy('tanggal')
            ->get();

        $pemasukan = $transactions->where('jenis', 'pemasukan')->sum('jumlah');
        $pengeluaran = $transactions->where('jenis', 'pengeluaran')->sum('jumlah');

        // Render ke PDF
        $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('public.finance.report', [
            'transactions' => $transactions,
            'pemasukan' => $pemasukan,
            'pengeluaran' => $pengeluaran,
            'saldo' => $pemasukan - $pengeluaran,
            'periode' => $month 
                ? Carbon::create()->month($month)->translatedFormat('F Y') 
                : "Tahun {$year}",
            'masjid' => config('app.name', 'Masjid Baitul Hikmah'),
            'generated_at' => Carbon::now()->translatedFormat('d F Y, H:i'),
        ]);

        $filename = 'laporan_keuangan_' . ($month ? "{$year}_{$month}" : $year) . '.pdf';
        
        return $pdf->download($filename);
    }
}