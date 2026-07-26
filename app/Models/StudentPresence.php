<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StudentPresence extends Model
{
    protected $fillable = ['student_id', 'tpq_class_id', 'tanggal', 'status', 'keterangan'];

    protected $casts = ['tanggal' => 'date'];

    public function student(): BelongsTo { return $this->belongsTo(Student::class, 'student_id'); }
    public function tpqClass(): BelongsTo { return $this->belongsTo(TpqClass::class, 'tpq_class_id'); }
}
