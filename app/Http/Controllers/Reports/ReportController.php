<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\Jamaah;
use App\Models\Activity;
use App\Models\Donation;
use App\Models\Asset;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ReportController extends Controller
{
    public function index()
    {
        return Inertia::render('Reports/Index', [
            'summary' => $this->getSummary(),
        ]);
    }

    public function finance(Request $request)
    {
        $startDate = $request->input('start_date', Carbon::now()->startOfMonth()->format('Y-m-d'));
        $endDate = $request->input('end_date', Carbon::now()->endOfMonth()->format('Y-m-d'));
        $type = $request->input('type', 'all');
        $category = $request->input('category', 'all');
        $kasBox = $request->input('kas_box', 'all');

        $query = Transaction::with(['category', 'creator'])
            ->whereBetween('tanggal', [$startDate, $endDate])
            ->orderBy('tanggal', 'desc');

        if ($type !== 'all') {
            $query->where('jenis', $type);
        }

        if ($category !== 'all') {
            $query->where('kategori_id', $category);
        }

        if ($kasBox !== 'all') {
            $query->where('kas_box', $kasBox);
        }

        $transactions = $query->paginate(50)->withQueryString();

        $summary = [
            'total_pemasukan' => (clone $query)->where('jenis', 'pemasukan')->sum('jumlah'),
            'total_pengeluaran' => (clone $query)->where('jenis', 'pengeluaran')->sum('jumlah'),
            'saldo' => 0,
        ];
        $summary['saldo'] = $summary['total_pemasukan'] - $summary['total_pengeluaran'];

        // Get categories for filter
        $categories = DB::table('transaction_categories')->get();

        return Inertia::render('Reports/Finance', [
            'transactions' => $transactions,
            'summary' => $summary,
            'filters' => compact('startDate', 'endDate', 'type', 'category', 'kasBox'),
            'categories' => $categories,
        ]);
    }

    public function jamaah(Request $request)
    {
        $status = $request->input('status', 'all');
        $gender = $request->input('gender', 'all');
        $category = $request->input('category', 'all');

        $query = Jamaah::with('categories');

        if ($status !== 'all') {
            $query->where('status', $status);
        }

        if ($gender !== 'all') {
            $query->where('jenis_kelamin', $gender);
        }

        if ($category !== 'all') {
            $query->whereHas('categories', fn($q) => $q->where('id', $category));
        }

        $jamaahs = $query->paginate(50)->withQueryString();

        $demographics = [
            'total' => Jamaah::count(),
            'aktif' => Jamaah::where('status', 'aktif')->count(),
            'laki_laki' => Jamaah::where('jenis_kelamin', 'L')->count(),
            'perempuan' => Jamaah::where('jenis_kelamin', 'P')->count(),
            'by_status' => Jamaah::selectRaw('status, COUNT(*) as count')->groupBy('status')->get(),
            'by_category' => DB::table('category_jamaahs')
                ->join('jamaah_category', 'category_jamaahs.id', '=', 'jamaah_category.category_jamaah_id')
                ->selectRaw('category_jamaahs.nama, COUNT(*) as count')
                ->groupBy('category_jamaahs.id', 'category_jamaahs.nama')
                ->get(),
        ];

        $categories = DB::table('category_jamaahs')->get();

        return Inertia::render('Reports/Jamaah', [
            'jamaahs' => $jamaahs,
            'demographics' => $demographics,
            'filters' => compact('status', 'gender', 'category'),
            'categories' => $categories,
        ]);
    }

    public function activities(Request $request)
    {
        $startDate = $request->input('start_date', Carbon::now()->startOfMonth()->format('Y-m-d'));
        $endDate = $request->input('end_date', Carbon::now()->endOfMonth()->format('Y-m-d'));
        $category = $request->input('category', 'all');
        $status = $request->input('status', 'all');

        $query = Activity::with(['creator', 'participants'])
            ->whereBetween('tanggal_mulai', [$startDate, $endDate])
            ->orderBy('tanggal_mulai', 'desc');

        if ($category !== 'all') {
            $query->where('kategori', $category);
        }

        if ($status !== 'all') {
            $query->where('status', $status);
        }

        $activities = $query->paginate(50)->withQueryString();

        $summary = [
            'total' => (clone $query)->count(),
            'total_anggaran' => (clone $query)->sum('anggaran'),
            'by_category' => Activity::selectRaw('kategori, COUNT(*) as count')
                ->whereBetween('tanggal_mulai', [$startDate, $endDate])
                ->groupBy('kategori')
                ->get(),
            'by_status' => Activity::selectRaw('status, COUNT(*) as count')
                ->whereBetween('tanggal_mulai', [$startDate, $endDate])
                ->groupBy('status')
                ->get(),
        ];

        return Inertia::render('Reports/Activities', [
            'activities' => $activities,
            'summary' => $summary,
            'filters' => compact('startDate', 'endDate', 'category', 'status'),
        ]);
    }

    public function ziswaf(Request $request)
    {
        $startDate = $request->input('start_date', Carbon::now()->startOfMonth()->format('Y-m-d'));
        $endDate = $request->input('end_date', Carbon::now()->endOfMonth()->format('Y-m-d'));
        $type = $request->input('type', 'all');

        $query = Donation::whereBetween('tanggal', [$startDate, $endDate]);

        if ($type !== 'all') {
            $query->where('jenis', $type);
        }

        $donations = $query->orderBy('tanggal', 'desc')->paginate(50)->withQueryString();

        $summary = [
            'total' => (clone $query)->sum('jumlah'),
            'by_type' => Donation::selectRaw('jenis, COUNT(*) as count, SUM(jumlah) as total')
                ->whereBetween('tanggal', [$startDate, $endDate])
                ->groupBy('jenis')
                ->get(),
            'by_month' => Donation::selectRaw('DATE_FORMAT(tanggal, "%Y-%m") as month, SUM(jumlah) as total')
                ->whereBetween('tanggal', [$startDate, $endDate])
                ->groupBy('month')
                ->orderBy('month')
                ->get(),
        ];

        return Inertia::render('Reports/Ziswaf', [
            'donations' => $donations,
            'summary' => $summary,
            'filters' => compact('startDate', 'endDate', 'type'),
        ]);
    }

    public function assets(Request $request)
    {
        $condition = $request->input('condition', 'all');
        $category = $request->input('category', 'all');

        $query = Asset::with(['maintenance']);

        if ($condition !== 'all') {
            $query->where('kondisi', $condition);
        }

        if ($category !== 'all') {
            $query->where('kategori', $category);
        }

        $assets = $query->paginate(50)->withQueryString();

        $summary = [
            'total_aset' => Asset::count(),
            'nilai_buku' => Asset::sum('nilai_sisa'),
            'by_condition' => Asset::selectRaw('kondisi, COUNT(*) as count, SUM(nilai_sisa) as value')
                ->groupBy('kondisi')
                ->get(),
            'by_category' => Asset::selectRaw('kategori, COUNT(*) as count, SUM(nilai_sisa) as value')
                ->groupBy('kategori')
                ->get(),
        ];

        return Inertia::render('Reports/Assets', [
            'assets' => $assets,
            'summary' => $summary,
            'filters' => compact('condition', 'category'),
        ]);
    }

    private function getSummary()
    {
        return [
            'total_jamaah' => Jamaah::where('status', 'aktif')->count(),
            'total_kegiatan' => Activity::where('status', 'dijadwalkan')->count(),
            'pemasukan_bulan_ini' => Transaction::where('jenis', 'pemasukan')
                ->whereMonth('tanggal', Carbon::now()->month)
                ->whereYear('tanggal', Carbon::now()->year)
                ->sum('jumlah'),
            'pengeluaran_bulan_ini' => Transaction::where('jenis', 'pengeluaran')
                ->whereMonth('tanggal', Carbon::now()->month)
                ->whereYear('tanggal', Carbon::now()->year)
                ->sum('jumlah'),
            'total_donasi' => Donation::sum('jumlah'),
        ];
    }
}
