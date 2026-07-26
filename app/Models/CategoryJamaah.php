<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class CategoryJamaah extends Model
{
    protected $fillable = ['nama', 'warna'];

    public function jamaahs(): BelongsToMany
    {
        return $this->belongsToMany(Jamaah::class, 'jamaah_category');
    }
}
