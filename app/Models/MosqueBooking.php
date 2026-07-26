<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\{BelongsTo};

class MosqueBooking extends Model
{
    protected $fillable = [
        'jamaah_id', 'nama_pemesan', 'no_hp', 'acara', 'tanggal_mulai', 
        'tanggal_selesai', 'kebutuhan', 'status', 'biaya', 'approved_by'
    ];

    protected $casts = ['tanggal_mulai' => 'datetime', 'tanggal_selesai' => 'datetime', 'biaya' => 'decimal:2'];

    public function jamaah(): BelongsTo { return $this->belongsTo(Jamaah::class); }
    public function approver(): BelongsTo { return $this->belongsTo(User::class, 'approved_by'); }
}
