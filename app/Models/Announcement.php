<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Announcement extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'judul', 'isi', 'gambar', 'tipe', 'is_running_text', 'status',
        'published_at', 'expired_at', 'send_whatsapp', 'send_email', 'send_push', 'created_by'
    ];

    protected $casts = [
        'published_at' => 'datetime', 'expired_at' => 'datetime',
        'is_running_text' => 'boolean', 'send_whatsapp' => 'boolean',
        'send_email' => 'boolean', 'send_push' => 'boolean'
    ];

    public function creator(): BelongsTo { return $this->belongsTo(User::class, 'created_by'); }
}
