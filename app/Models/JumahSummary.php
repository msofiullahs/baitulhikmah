<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\{BelongsTo};

class JumahSummary extends Model
{
    protected $fillable = ['tanggal_jumat', 'cashbox_id', 'total_infaq', 'jumlah_amplop', 'catatan', 'created_by'];

    protected $casts = ['tanggal_jumat' => 'date', 'total_infaq' => 'decimal:2'];

    public function cashbox(): BelongsTo { return $this->belongsTo(Cashbox::class, 'cashbox_id'); }
    public function creator(): BelongsTo { return $this->belongsTo(User::class, 'created_by'); }
}
