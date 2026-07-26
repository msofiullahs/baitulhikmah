<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AssetMaintenance extends Model
{
    protected $fillable = ['asset_id', 'tanggal', 'jenis', 'keterangan', 'biaya', 'teknisi'];

    protected $casts = ['tanggal' => 'date', 'biaya' => 'decimal:2'];

    public function asset(): BelongsTo { return $this->belongsTo(Asset::class, 'asset_id'); }
}
