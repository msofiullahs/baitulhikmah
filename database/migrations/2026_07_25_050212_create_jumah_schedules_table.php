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
        Schema::create('jumah_schedules', function (Blueprint $table) {
            $table->id();
            $table->date('tanggal_jumat');
            $table->foreignId('khatib_id')->constrained()->cascadeOnDelete();
            $table->string('tema')->nullable();
            $table->string('judul_khutbah')->nullable();
            $table->foreignId('imam_id')->nullable()->constrained('khatibs')->nullOnDelete();
            $table->foreignId('muadzin_id')->nullable()->constrained('khatibs')->nullOnDelete();
            $table->enum('status', ['terjadwal', 'selesai', 'dibatalkan'])->default('terjadwal');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jumah_schedules');
    }
};
