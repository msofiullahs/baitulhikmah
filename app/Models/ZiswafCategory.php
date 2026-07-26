<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ZiswafCategory extends Model
{
    protected $fillable = ['nama', 'kategori', 'deskripsi', 'nisab', 'persentase'];

    protected $casts = ['nisab' => 'decimal:2', 'persentase' => 'decimal:2'];

    public function donations(): HasMany { return $this->hasMany(Donation::class, 'ziswaf_category_id'); }
    public function distributions(): HasMany { return $this->hasMany(ZiswafDistribution::class, 'ziswaf_category_id'); }
}
