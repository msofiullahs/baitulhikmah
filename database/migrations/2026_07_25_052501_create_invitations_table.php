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
        Schema::create('invitations', function (Blueprint $table) {
            $table->id();
            $table->string('no_undangan', 30)->unique();
            $table->foreignId('template_id')->constrained('invitation_templates')->cascadeOnDelete();
            $table->string('judul_acara');
            $table->text('deskripsi')->nullable();
            $table->dateTime('tanggal_acara');
            $table->string('lokasi');
            $table->text('pembicara')->nullable();
            $table->string('pakaian')->nullable(); // Dress code
            $table->string('kontak')->nullable();
            $table->enum('status', ['draft', 'terkirim', 'selesai'])->default('draft');
            $table->foreignId('created_by')->constrained('users')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invitations');
    }
};
