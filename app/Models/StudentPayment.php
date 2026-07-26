<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StudentPayment extends Model
{
    protected $fillable = ['student_id', 'tanggal', 'jumlah', 'keterangan', 'metode', 'created_by'];

    protected $casts = ['tanggal' => 'date', 'jumlah' => 'decimal:2'];

    public function student(): BelongsTo { return $this->belongsTo(Student::class, 'student_id'); }
    public function creator(): BelongsTo { return $this->belongsTo(User::class, 'created_by'); }
}
