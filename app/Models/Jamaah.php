<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\{BelongsTo, BelongsToMany, HasMany};

class Jamaah extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'no_kartu', 'nama', 'nik', 'jenis_kelamin', 'tanggal_lahir',
        'alamat', 'rt', 'rw', 'kelurahan', 'kecamatan', 'kota',
        'no_hp', 'email', 'pekerjaan', 'status', 'foto', 'catatan', 'created_by'
    ];

    protected $casts = ['tanggal_lahir' => 'date'];

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(CategoryJamaah::class, 'jamaah_category');
    }

    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class);
    }

    public function donations(): HasMany
    {
        return $this->hasMany(Donation::class);
    }

    public function bookings(): HasMany
    {
        return $this->hasMany(MosqueBooking::class);
    }

    public function invitationReceivers(): HasMany
    {
        return $this->hasMany(InvitationReceiver::class);
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
