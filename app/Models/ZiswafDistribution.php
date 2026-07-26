<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ZiswafDistribution extends Model
{
    protected $fillable = ['mustahiq_id', 'ziswaf_category_id', 'jumlah', 'tanggal', 'keterangan', 'bukti', 'created_by'];

    protected $casts = ['tanggal' => 'date', 'jumlah' => 'decimal:2'];

    public function mustahiq(): BelongsTo { return $this->belongsTo(Mustahiq::class, 'mustahiq_id'); }
    public function category(): BelongsTo { return $this->belongsTo(ZiswafCategory::class, 'ziswaf_category_id'); }
    public function creator(): BelongsTo { return $this->belongsTo(User::class, 'created_by'); }
}
