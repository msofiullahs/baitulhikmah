<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\SholatSchedule;
use App\Models\Activity;
use App\Models\JumahSchedule;
use App\Models\Khatib;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class PublicScheduleController extends Controller
{
    /**
     * Jadwal Sholat (7 hari ke depan)
     */
    public function sholat()
    {
        $schedules = SholatSchedule::where('tanggal', '>=', Carbon::today())
            ->where('tanggal', '<=', Carbon::today()->addDays(6))
            ->orderBy('tanggal')
            ->get();

        return Inertia::render('Public/Schedule/Sholat', [
            'schedules' => $schedules->map(fn($s) => [
                'tanggal' => $s->tanggal->translatedFormat('l, d F Y'),
                'tanggal_short' => $s->tanggal->translatedFormat('D, d M'),
                'is_today' => $s->tanggal->isToday(),
                'subuh' => $s->subuh,
                'dzuhur' => $s->dzuhur,
                'ashar' => $s->ashar,
                'maghrib' => $s->maghrib,
                'isya' => $s->isya,
            ]),
        ]);
    }

    /**
     * Jadwal Pengajian & Kegiatan
     */
    public function pengajian(Request $request)
    {
        $query = Activity::where('is_public', true)
            ->where('status', 'dijadwalkan')
            ->where('tanggal_mulai', '>=', now());

        // Filter kategori
        if ($request->filled('kategori')) {
            $query->where('kategori', $request->kategori);
        }

        $activities = $query->orderBy('tanggal_mulai')->paginate(12);

        return Inertia::render('Public/Schedule/Pengajian', [
            'activities' => $activities->map(fn($a) => [
                'id' => $a->id,
                'nama' => $a->nama,
                'deskripsi' => $a->deskripsi,
                'kategori' => $a->kategori,
                'tanggal' => $a->tanggal_mulai->translatedFormat('l, d F Y'),
                'waktu' => $a->tanggal_mulai->format('H:i') . ' WIB',
                'lokasi' => $a->lokasi,
                'penanggung_jawab' => $a->penanggung_jawab,
                'poster' => $a->poster ? asset('storage/' . $a->poster) : null,
            ]),
            'filters' => [
                'kategori' => $request->kategori,
                'kategori_list' => [
                    'pengajian' => 'Pengajian Rutin',
                    'kajian_akbar' => 'Kajian Akbar',
                    'phbi' => 'Peringatan Hari Besar Islam',
                    'rapat' => 'Rapat',
                    'sosial' => 'Kegiatan Sosial',
                ],
            ],
        ]);
    }

    /**
     * Jadwal Khatib Jumat (3 bulan ke depan)
     */
    public function jumat()
    {
        $schedules = JumahSchedule::with(['khatib', 'imam', 'muadzin'])
            ->where('tanggal_jumat', '>=', Carbon::today())
            ->where('tanggal_jumat', '<=', Carbon::today()->addMonths(3))
            ->where('status', 'terjadwal')
            ->orderBy('tanggal_jumat')
            ->get();

        return Inertia::render('Public/Schedule/Jumat', [
            'schedules' => $schedules->map(fn($s) => [
                'tanggal' => $s->tanggal_jumat->translatedFormat('l, d F Y'),
                'tanggal_short' => $s->tanggal_jumat->translatedFormat('d M Y'),
                'tema' => $s->tema,
                'judul_khutbah' => $s->judul_khutbah,
                'khatib' => $s->khatib ? [
                    'nama' => trim($s->khatib->gelar . ' ' . $s->khatib->nama),
                    'spesialisasi' => $s->khatib->spesialisasi,
                ] : null,
                'imam' => $s->imam ? trim($s->imam->gelar . ' ' . $s->imam->nama) : null,
                'muadzin' => $s->muadzin ? trim($s->muadzin->gelar . ' ' . $s->muadzin->nama) : null,
            ]),
        ]);
    }
}