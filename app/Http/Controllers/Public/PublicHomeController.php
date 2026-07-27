<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\Activity;
use App\Models\JumahSchedule;
use App\Models\SholatSchedule;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class PublicHomeController extends Controller
{
    public function index()
    {
        $today = Carbon::today();

        return Inertia::render('Public/Home', [
            // Profil Masjid (bisa dari settings table atau hardcode)
            'masjid_profile' => [
                'nama' => config('app.name', 'Masjid Baitul Hikmah'),
                'alamat' => config('masjid.alamat', 'Jl. Contoh No. 123'),
                'no_hp' => config('masjid.no_hp', '08123456789'),
                'email' => config('masjid.email', 'info@baitulhikmah.id'),
                'facebook' => config('masjid.facebook'),
                'instagram' => config('masjid.instagram'),
                'youtube' => config('masjid.youtube'),
            ],

            // Jadwal Sholat Hari Ini
            'jadwal_sholat' => SholatSchedule::where('tanggal', $today)->first(),

            // Pengumuman Terbaru (max 3)
            'announcements' => Announcement::where('status', 'published')
                ->where(function ($q) use ($today) {
                    $q->whereNull('expired_at')
                      ->orWhere('expired_at', '>=', $today);
                })
                ->orderBy('published_at', 'desc')
                ->limit(3)
                ->get(['id', 'judul', 'isi', 'gambar', 'tipe', 'published_at']),

            // Kegiatan Mendatang (7 hari ke depan)
            'upcoming_activities' => Activity::where('tanggal_mulai', '>=', now())
                ->where('tanggal_mulai', '<=', now()->addDays(7))
                ->where('is_public', true)
                ->where('status', 'dijadwalkan')
                ->orderBy('tanggal_mulai')
                ->limit(5)
                ->get(['id', 'nama', 'deskripsi', 'tanggal_mulai', 'lokasi', 'poster']),

            // Jadwal Khatib Jumat Berikutnya
            'next_jumat' => JumahSchedule::with(['khatib', 'imam', 'muadzin'])
                ->where('tanggal_jumat', '>=', $today)
                ->where('status', 'terjadwal')
                ->orderBy('tanggal_jumat')
                ->first(),

            // Highlight Keuangan Bulan Ini (agregat, tanpa detail)
            'finance_highlight' => [
                'bulan' => Carbon::now()->translatedFormat('F Y'),
                'total_pemasukan' => Transaction::where('jenis', 'pemasukan')
                    ->where('status', 'approved')
                    ->where('is_public', true)
                    ->whereMonth('tanggal', Carbon::now()->month)
                    ->whereYear('tanggal', Carbon::now()->year)
                    ->sum('jumlah'),
                'total_pengeluaran' => Transaction::where('jenis', 'pengeluaran')
                    ->where('status', 'approved')
                    ->where('is_public', true)
                    ->whereMonth('tanggal', Carbon::now()->month)
                    ->whereYear('tanggal', Carbon::now()->year)
                    ->sum('jumlah'),
            ],
        ]);
    }
}