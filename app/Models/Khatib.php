<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Khatib extends Model
{
    protected $fillable = ['nama', 'gelar', 'alamat', 'no_hp', 'spesialisasi', 'tipe', 'is_active'];

    protected $casts = ['is_active' => 'boolean'];

    public function jumahSchedules(): HasMany
    {
        return $this->hasMany(JumahSchedule::class, 'khatib_id');
    }
}
