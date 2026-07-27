<?php
namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\Jamaah;
use App\Models\Activity;
use App\Models\Donation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index()
    {
        $currentMonth = Carbon::now()->month;
        $currentYear = Carbon::now()->year;

        return Inertia::render('Dashboard/Index', [
            'stats' => [
                'total_jamaah' => Jamaah::where('status', 'aktif')->count(),
                'saldo_kas' => Transaction::where('status', 'approved')->get()->sum(fn($t) => $t->jenis === 'pemasukan' ? $t->jumlah : -$t->jumlah),
                'pemasukan_bulan_ini' => Transaction::where('jenis', 'pemasukan')->where('status', 'approved')->whereMonth('tanggal', $currentMonth)->sum('jumlah'),
                'pengeluaran_bulan_ini' => Transaction::where('jenis', 'pengeluaran')->where('status', 'approved')->whereMonth('tanggal', $currentMonth)->sum('jumlah'),
            ],
            'recent_transactions' => Transaction::with(['category', 'cashbox'])
                ->latest('tanggal')->limit(5)->get(),
            'upcoming_activities' => Activity::where('tanggal_mulai', '>=', now())
                ->orderBy('tanggal_mulai')->limit(5)->get(['id', 'nama', 'tanggal_mulai', 'lokasi']),
            'chart_data' => [
                'labels' => ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
                'pemasukan' => Transaction::where('jenis', 'pemasukan')->whereYear('tanggal', $currentYear)
                    ->selectRaw('MONTH(tanggal) as month, SUM(jumlah) as total')->groupBy('month')->pluck('total', 'month'),
                'pengeluaran' => Transaction::where('jenis', 'pengeluaran')->whereYear('tanggal', $currentYear)
                    ->selectRaw('MONTH(tanggal) as month, SUM(jumlah) as total')->groupBy('month')->pluck('total', 'month'),
            ]
        ]);
    }
}