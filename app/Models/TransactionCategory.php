<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\{BelongsTo, HasMany};

class TransactionCategory extends Model
{
    protected $fillable = ['nama', 'tipe', 'warna', 'ikon', 'kas_box_id'];

    public function cashbox(): BelongsTo
    {
        return $this->belongsTo(Cashbox::class, 'kas_box_id');
    }

    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class, 'kategori_id');
    }
}
