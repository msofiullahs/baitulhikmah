<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ActivityMember extends Model
{
    protected $table = 'activity_members';
    protected $primaryKey = 'id';
    
    protected $fillable = [
        'activity_id',
        'jamaah_id',
        'status_kehadiran'
    ];

    protected $casts = [
        'status_kehadiran' => 'string'
    ];

    public function activity(): BelongsTo
    {
        return $this->belongsTo(Activity::class);
    }

    public function jamaah(): BelongsTo
    {
        return $this->belongsTo(Jamaah::class);
    }
}
