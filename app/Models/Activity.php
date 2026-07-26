<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\{BelongsTo, BelongsToMany};

class Activity extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'nama', 'deskripsi', 'kategori', 'tanggal_mulai', 'tanggal_selesai',
        'lokasi', 'penanggung_jawab', 'anggaran', 'poster', 'status', 'is_public', 'created_by'
    ];

    protected $casts = [
        'tanggal_mulai' => 'datetime', 'tanggal_selesai' => 'datetime',
        'anggaran' => 'decimal:2', 'is_public' => 'boolean'
    ];

    public function creator(): BelongsTo { return $this->belongsTo(User::class, 'created_by'); }
    
    public function members(): BelongsToMany
    {
        return $this->belongsToMany(Jamaah::class, 'activity_members')->withPivot('status_kehadiran')->withTimestamps();
    }
}
