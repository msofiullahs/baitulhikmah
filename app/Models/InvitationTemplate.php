<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class InvitationTemplate extends Model
{
    
    protected $fillable = [
        'nama',
        'kategori',
        'deskripsi',
        'file_template',
        'preview_image',
        'warna_tema',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    public function invitations(): HasMany
    {
        return $this->hasMany(Invitation::class, 'template_id');
    }
}