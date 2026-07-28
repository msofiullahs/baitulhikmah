<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class PublicContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Public/Contact', [
            'contact_info' => [
                'nama' => config('app.name', 'Masjid Baitul Hikmah'),
                'alamat' => config('masjid.alamat'),
                'no_hp' => config('masjid.no_hp'),
                'email' => config('masjid.email'),
                'maps_embed_url' => config('masjid.maps_embed_url'),
                'maps_url' => config('masjid.maps_url'),
            ],
            'social_media' => [
                'facebook' => config('masjid.facebook'),
                'instagram' => config('masjid.instagram'),
                'youtube' => config('masjid.youtube'),
                'tiktok' => config('masjid.tiktok'),
            ],
            'pengurus' => [
                [
                    'jabatan' => 'Ketua Ta\'mir',
                    'nama' => config('masjid.ketua.nama'),
                    'no_hp' => config('masjid.ketua.no_hp'),
                ],
                [
                    'jabatan' => 'Sekretaris',
                    'nama' => config('masjid.sekretaris.nama'),
                    'no_hp' => config('masjid.sekretaris.no_hp'),
                ],
                [
                    'jabatan' => 'Bendahara',
                    'nama' => config('masjid.bendahara.nama'),
                    'no_hp' => config('masjid.bendahara.no_hp'),
                ],
            ],
        ]);
    }
}
