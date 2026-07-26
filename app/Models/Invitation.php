<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\{BelongsTo, HasMany};

class Invitation extends Model
{
    protected $fillable = [
        'no_undangan', 'template_id', 'judul_acara', 'deskripsi', 'tanggal_acara',
        'lokasi', 'pembicara', 'pakaian', 'kontak', 'status', 'created_by'
    ];

    protected $casts = ['tanggal_acara' => 'datetime'];

    public function template(): BelongsTo { return $this->belongsTo(InvitationTemplate::class, 'template_id'); }
    public function creator(): BelongsTo { return $this->belongsTo(User::class, 'created_by'); }
    public function receivers(): HasMany { return $this->hasMany(InvitationReceiver::class, 'invitation_id'); }
}
