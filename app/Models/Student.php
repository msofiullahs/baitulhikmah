<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\{BelongsToMany, HasMany};

class Student extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'nis', 'nama', 'jenis_kelamin', 'tanggal_lahir', 'nama_ortu', 
        'no_hp_ortu', 'alamat', 'foto', 'status', 'tanggal_masuk'
    ];

    protected $casts = ['tanggal_lahir' => 'date', 'tanggal_masuk' => 'date'];

    public function classes(): BelongsToMany
    {
        return $this->belongsToMany(TpqClass::class, 'student_class')->withPivot('tahun_ajaran')->withTimestamps();
    }

    public function presences(): HasMany
    {
        return $this->hasMany(StudentPrecense::class); // *Sesuai nama migration
    }

    public function payments(): HasMany
    {
        return $this->hasMany(StudentPayment::class);
    }
}
