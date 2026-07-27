<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class PublicAnnouncementController extends Controller
{
    public function index(Request $request)
    {
        $query = Announcement::where('status', 'published')
            ->where(function ($q) {
                $q->whereNull('expired_at')
                  ->orWhere('expired_at', '>=', Carbon::today());
            });

        if ($request->filled('tipe')) {
            $query->where('tipe', $request->tipe);
        }

        $announcements = $query->orderBy('published_at', 'desc')->paginate(12);

        return Inertia::render('Public/Announcements/Index', [
            'announcements' => $announcements->map(fn($a) => [
                'id' => $a->id,
                'judul' => $a->judul,
                'isi' => $a->isi,
                'tipe' => $a->tipe,
                'gambar' => $a->gambar ? asset('storage/' . $a->gambar) : null,
                'published_at' => $a->published_at->translatedFormat('d F Y'),
                'is_urgent' => $a->tipe === 'urgent',
            ]),
            'filters' => [
                'tipe' => $request->tipe,
                'tipe_list' => [
                    'umum' => 'Pengumuman Umum',
                    'urgent' => 'Penting / Mendesak',
                    'info_sholat' => 'Info Sholat',
                ],
            ],
        ]);
    }

    public function show(Announcement $announcement)
    {
        // Validasi bahwa pengumuman masih aktif
        if ($announcement->status !== 'published') {
            abort(404);
        }

        if ($announcement->expired_at && $announcement->expired_at->isPast()) {
            abort(404);
        }

        return Inertia::render('Public/Announcements/Show', [
            'announcement' => [
                'id' => $announcement->id,
                'judul' => $announcement->judul,
                'isi' => $announcement->isi,
                'tipe' => $announcement->tipe,
                'gambar' => $announcement->gambar ? asset('storage/' . $announcement->gambar) : null,
                'published_at' => $announcement->published_at->translatedFormat('d F Y, H:i'),
            ],
        ]);
    }
}