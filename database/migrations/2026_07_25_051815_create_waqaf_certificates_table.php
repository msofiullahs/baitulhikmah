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
        Schema::create('waqaf_certificates', function (Blueprint $table) {
            $table->id();
            $table->string('no_sertifikat', 30)->unique();
            $table->foreignId('donation_id')->constrained()->cascadeOnDelete();
            $table->string('nama_wakif');
            $table->text('aset_wakaf'); // Tanah, Uang, dll
            $table->text('keterangan_aset')->nullable();
            $table->string('file_sertifikat')->nullable(); // path PDF
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('waqaf_certificates');
    }
};
