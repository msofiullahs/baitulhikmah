<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Transaction extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'no_transaksi', 'cashbox_id', 'category_id', 'jenis', 'jumlah',
        'tanggal', 'keterangan', 'bukti', 'jamaah_id', 'metode',
        'status', 'approved_by', 'approved_at', 'created_by'
    ];

    protected $casts = [
        'jumlah' => 'decimal:2',
        'tanggal' => 'date',
        'approved_at' => 'datetime',
    ];

    public function cashbox(): BelongsTo { return $this->belongsTo(Cashbox::class, 'cashbox_id'); }
    public function category(): BelongsTo { return $this->belongsTo(TransactionCategory::class, 'category_id'); }
    public function jamaah(): BelongsTo { return $this->belongsTo(Jamaah::class); }
    public function creator(): BelongsTo { return $this->belongsTo(User::class, 'created_by'); }
    public function approver(): BelongsTo { return $this->belongsTo(User::class, 'approved_by'); }
}
