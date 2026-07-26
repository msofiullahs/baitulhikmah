<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cashbox extends Model
{
    protected $fillable = ['nama', 'kode', 'deskripsi', 'saldo_awal', 'is_active'];

    protected $casts = ['saldo_awal' => 'decimal:2', 'is_active' => 'boolean'];

    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class, 'cashbox_id');
    }

    public function donations(): HasMany
    {
        return $this->hasMany(Donation::class, 'cashbox_id');
    }

    public function jumahSummaries(): HasMany
    {
        return $this->hasMany(JumahSummary::class, 'cashbox_id');
    }
}