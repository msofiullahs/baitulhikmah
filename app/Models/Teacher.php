<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Teacher extends Model
{
    
    protected $fillable = [
        'nama',
        'jenis_kelamin',
        'no_hp',
        'foto',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    public function classes(): BelongsToMany
    {
        return $this->belongsToMany(TpqClass::class, 'teacher_class', 'teacher_id', 'tpq_class_id')
                    ->withPivot('mata_pelajaran')
                    ->withTimestamps();
    }
}