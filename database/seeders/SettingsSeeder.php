<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Setting;

class SettingsSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            // General
            ['key' => 'app_name', 'value' => 'Masjid Baitul Hikmah', 'group' => 'general', 'description' => 'Nama aplikasi'],
            ['key' => 'app_description', 'value' => 'Sistem Manajemen Masjid', 'group' => 'general', 'description' => 'Deskripsi aplikasi'],
            
            // Masjid
            ['key' => 'masjid_name', 'value' => 'Masjid Baitul Hikmah', 'group' => 'masjid', 'description' => 'Nama masjid'],
            ['key' => 'masjid_address', 'value' => 'Jl. Mawar No. 10', 'group' => 'masjid', 'description' => 'Alamat masjid'],
            ['key' => 'masjid_phone', 'value' => '081234567890', 'group' => 'masjid', 'description' => 'Nomor telepon'],
            ['key' => 'masjid_email', 'value' => 'info@baitulhikmah.id', 'group' => 'masjid', 'description' => 'Email masjid'],
            
            // Finance
            ['key' => 'default_cashbox', 'value' => '1', 'group' => 'finance', 'description' => 'ID kas box default'],
            ['key' => 'require_approval', 'value' => 'false', 'group' => 'finance', 'description' => 'Butuh approval untuk transaksi'],
            ['key' => 'approval_threshold', 'value' => '1000000', 'group' => 'finance', 'description' => 'Threshold approval (Rp)'],
            
            // Social
            ['key' => 'facebook_url', 'value' => '', 'group' => 'social', 'description' => 'URL Facebook'],
            ['key' => 'instagram_url', 'value' => '', 'group' => 'social', 'description' => 'URL Instagram'],
            ['key' => 'youtube_url', 'value' => '', 'group' => 'social', 'description' => 'URL YouTube'],
        ];

        foreach ($settings as $setting) {
            Setting::firstOrCreate(['key' => $setting['key']], $setting);
        }
    }
}