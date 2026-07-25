<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->text('deskripsi')->nullable();
            $table->enum('kategori', [
                'pengajian', 'rapat', 'phbi', 'kajian_akbar', 
                'sosial', 'olahraga', 'lainnya'
            ]);
            $table->dateTime('tanggal_mulai');
            $table->dateTime('tanggal_selesai')->nullable();
            $table->string('lokasi')->nullable();
            $table->string('penanggung_jawab')->nullable();
            $table->decimal('anggaran', 15, 2)->nullable();
            $table->string('poster')->nullable();
            $table->enum('status', ['draft', 'dijadwalkan', 'berlangsung', 'selesai', 'dibatalkan'])->default('draft');
            $table->boolean('is_public')->default(true);
            $table->foreignId('created_by')->constrained('users')->cascadeOnDelete();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activities');
    }
};
