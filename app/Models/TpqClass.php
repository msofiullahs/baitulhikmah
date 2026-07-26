<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class TpqClass extends Model
{
    protected $fillable = ['nama', 'deskripsi', 'hari', 'jam_mulai', 'jam_selesai', 'ruangan', 'is_active'];

    protected $casts = ['is_active' => 'boolean'];

    public function teachers(): BelongsToMany
    {
        return $this->belongsToMany(Teacher::class, 'teacher_class')->withPivot('mata_pelajaran')->withTimestamps();
    }

    public function students(): BelongsToMany
    {
        return $this->belongsToMany(Student::class, 'student_class')->withPivot('tahun_ajaran')->withTimestamps();
    }
}
