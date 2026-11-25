<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class PublicContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Public/Contact', [
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
