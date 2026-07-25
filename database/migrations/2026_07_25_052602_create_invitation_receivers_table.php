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
        Schema::create('invitation_receivers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('invitation_id')->constrained()->cascadeOnDelete();
            $table->string('nama_penerima');
            $table->string('no_hp')->nullable();
            $table->string('email')->nullable();
            $table->string('file_pdf')->nullable(); // path PDF yang di-generate
            $table->boolean('is_sent')->default(false);
            $table->timestamp('sent_at')->nullable();
            $table->boolean('is_opened')->default(false);
            $table->timestamp('opened_at')->nullable();
            $table->enum('konfirmasi', ['hadir', 'tidak_hadir', 'belum'])->default('belum');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invitation_receivers');
    }
};
