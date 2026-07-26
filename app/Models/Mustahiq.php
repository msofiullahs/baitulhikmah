<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Mustahiq extends Model
{
    protected $fillable = ['nama', 'alamat', 'no_hp', 'kategori', 'status'];

    public function distributions(): HasMany
    {
        return $this->hasMany(ZiswafDistribution::class, 'mustahiq_id');
    }
}
