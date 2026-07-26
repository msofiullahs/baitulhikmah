<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SholatSchedule extends Model
{
    protected $fillable = ['tanggal', 'subuh', 'dzuhur', 'ashar', 'maghrib', 'isya'];

    protected $casts = [
        'tanggal' => 'date',
        'subuh' => 'datetime:H:i',
        'dzuhur' => 'datetime:H:i',
        'ashar' => 'datetime:H:i',
        'maghrib' => 'datetime:H:i',
        'isya' => 'datetime:H:i',
    ];
}
