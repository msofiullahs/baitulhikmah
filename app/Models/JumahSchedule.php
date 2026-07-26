<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JumahSchedule extends Model
{
    protected $fillable = ['tanggal_jumat', 'khatib_id', 'tema', 'judul_khutbah', 'imam_id', 'muadzin_id', 'status'];

    protected $casts = ['tanggal_jumat' => 'date'];

    public function khatib(): BelongsTo { return $this->belongsTo(Khatib::class, 'khatib_id'); }
    public function imam(): BelongsTo { return $this->belongsTo(Khatib::class, 'imam_id'); }
    public function muadzin(): BelongsTo { return $this->belongsTo(Khatib::class, 'muadzin_id'); }
}
