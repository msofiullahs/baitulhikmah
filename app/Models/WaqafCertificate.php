<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class WaqafCertificate extends Model
{
    protected $fillable = ['no_sertifikat', 'donation_id', 'nama_wakif', 'aset_wakaf', 'keterangan_aset', 'file_sertifikat'];

    public function donation(): BelongsTo { return $this->belongsTo(Donation::class, 'donation_id'); }
}
