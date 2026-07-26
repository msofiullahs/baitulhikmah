<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\{BelongsTo, HasMany};

class Asset extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'kode_aset', 'nama', 'category_id', 'deskripsi', 'merk', 'model', 'jumlah',
        'tanggal_perolehan', 'harga_perolehan', 'nilai_sisa', 'umur_ekonomis_tahun',
        'kondisi', 'lokasi', 'foto', 'qr_code'
    ];

    protected $casts = ['tanggal_perolehan' => 'date', 'harga_perolehan' => 'decimal:2', 'nilai_sisa' => 'decimal:2'];

    public function category(): BelongsTo { return $this->belongsTo(AssetCategory::class, 'category_id'); }
    public function maintenances(): HasMany { return $this->hasMany(AssetMaintenance::class, 'asset_id'); }
}
