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
        Schema::create('mosque_bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('jamaah_id')->nullable()->constrained()->nullOnDelete();
            $table->string('nama_pemesan');
            $table->string('no_hp');
            $table->string('acara'); // Nikahan, Haul, dll
            $table->dateTime('tanggal_mulai');
            $table->dateTime('tanggal_selesai');
            $table->text('kebutuhan')->nullable();
            $table->enum('status', ['pending', 'approved', 'rejected', 'selesai'])->default('pending');
            $table->decimal('biaya', 15, 2)->default(0);
            $table->foreignId('approved_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mosque_bookings');
    }
};
