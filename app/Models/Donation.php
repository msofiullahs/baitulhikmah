<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\{BelongsTo, HasOne};

class Donation extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'no_donasi', 'ziswaf_category_id', 'jamaah_id', 'nama_donatur', 'no_hp_donatur',
        'jumlah', 'jenis_harta', 'jumlah_jiwa', 'tanggal', 'metode', 'bukti_transfer',
        'is_anonymous', 'catatan', 'cashbox_id', 'created_by'
    ];

    protected $casts = ['tanggal' => 'date', 'jumlah' => 'decimal:2', 'is_anonymous' => 'boolean'];

    public function category(): BelongsTo { return $this->belongsTo(ZiswafCategory::class, 'ziswaf_category_id'); }
    public function jamaah(): BelongsTo { return $this->belongsTo(Jamaah::class); }
    public function cashbox(): BelongsTo { return $this->belongsTo(Cashbox::class, 'cashbox_id'); }
    public function creator(): BelongsTo { return $this->belongsTo(User::class, 'created_by'); }
    
    public function waqafCertificate(): HasOne
    {
        return $this->hasOne(WaqafCertificate::class, 'donation_id');
    }
}
