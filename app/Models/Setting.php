<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = ['key', 'value', 'type', 'group', 'description'];

    protected $casts = [
        'value' => 'string',
    ];

    /**
     * Get setting value by key
     */
    public static function get(string $key, $default = null)
    {
        $setting = self::where('key', $key)->first();
        return $setting ? $setting->value : $default;
    }

    /**
     * Set setting value
     */
    public static function set(string $key, $value, string $group = 'general', string $description = ''): void
    {
        self::updateOrCreate(
            ['key' => $key],
            [
                'value' => is_array($value) ? json_encode($value) : $value,
                'type' => is_array($value) ? 'json' : 'string',
                'group' => $group,
                'description' => $description,
            ]
        );
    }

    public static function groupValues(string $group): array
    {
        $prefix = $group.'.';
        $stored = self::where('group', $group)
            ->orWhere('key', 'like', $prefix.'%')
            ->pluck('value', 'key')
            ->all();
        $values = $stored;

        foreach ($stored as $key => $value) {
            if (str_starts_with($key, $prefix)) {
                $values[substr($key, strlen($prefix))] = $value;
                unset($values[$key]);
            }
        }

        return $values;
    }

    public static function mosqueProfile(): array
    {
        $defaults = [
            'nama_masjid' => config('masjid.nama'),
            'alamat' => config('masjid.alamat'),
            'no_telepon' => config('masjid.no_hp'),
            'email' => config('masjid.email'),
            'facebook' => config('masjid.facebook'),
            'instagram' => config('masjid.instagram'),
            'youtube' => config('masjid.youtube'),
            'tiktok' => config('masjid.tiktok'),
            'jam_buka' => '04:00',
            'jam_tutup' => '22:00',
        ];

        $legacyFields = array_flip([
            'nama_masjid', 'nama_tamir', 'alamat', 'kota', 'provinsi', 'kode_pos',
            'no_telepon', 'email', 'logo_url', 'latitude', 'longitude',
        ]);

        return array_replace(
            $defaults,
            array_intersect_key(self::groupValues('general'), $legacyFields),
            self::groupValues('masjid'),
        );
    }

    /**
     * Get all settings by group
     */
    public static function group(string $group)
    {
        return self::where('group', $group)->pluck('value', 'key')->toArray();
    }
}