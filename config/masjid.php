<?php
// config/masjid.php

return [
    'nama' => env('MASJID_NAMA', 'Masjid Baitul Hikmah'),
    'alamat' => env('MASJID_ALAMAT', 'Jl. Contoh No. 123, Kota'),
    'no_hp' => env('MASJID_NO_HP', '08123456789'),
    'email' => env('MASJID_EMAIL', 'info@baitulhikmah.id'),
    
    'maps_embed_url' => env('MASJID_MAPS_EMBED'),
    'maps_url' => env('MASJID_MAPS_URL'),
    
    'facebook' => env('MASJID_FACEBOOK'),
    'instagram' => env('MASJID_INSTAGRAM'),
    'youtube' => env('MASJID_YOUTUBE'),
    'tiktok' => env('MASJID_TIKTOK'),

    'ketua' => [
        'nama' => env('MASJID_KETUA_NAMA'),
        'no_hp' => env('MASJID_KETUA_HP'),
    ],
    'sekretaris' => [
        'nama' => env('MASJID_SEKRETARIS_NAMA'),
        'no_hp' => env('MASJID_SEKRETARIS_HP'),
    ],
    'bendahara' => [
        'nama' => env('MASJID_BENDAHARA_NAMA'),
        'no_hp' => env('MASJID_BENDAHARA_HP'),
    ],
];