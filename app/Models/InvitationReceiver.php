<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InvitationReceiver extends Model
{
    protected $fillable = [
        'invitation_id', 'jamaah_id', 'nama_penerima', 'no_hp', 'email',
        'file_pdf', 'is_sent', 'sent_at', 'is_opened', 'opened_at', 'konfirmasi'
    ];

    protected $casts = ['sent_at' => 'datetime', 'opened_at' => 'datetime', 'is_sent' => 'boolean', 'is_opened' => 'boolean'];

    public function invitation(): BelongsTo { return $this->belongsTo(Invitation::class, 'invitation_id'); }
    public function jamaah(): BelongsTo { return $this->belongsTo(Jamaah::class); }
}
