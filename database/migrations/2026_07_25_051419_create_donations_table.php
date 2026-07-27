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
        Schema::create('donations', function (Blueprint $table) {
            $table->id();
            $table->string('no_donasi', 30)->unique();
            $table->foreignId('ziswaf_category_id')->constrained()->cascadeOnDelete();
            $table->foreignId('jamaah_id')->nullable()->constrained()->nullOnDelete();
            $table->string('nama_donatur')->nullable(); // untuk donatur non-jamaah
            $table->string('no_hp_donatur')->nullable();
            $table->decimal('jumlah', 15, 2);
            $table->enum('jenis_harta', ['fitrah', 'maal', 'profesi', 'umum'])->nullable();
            $table->integer('jumlah_jiwa')->nullable(); // untuk zakat fitrah
            $table->date('tanggal');
            $table->enum('metode', ['tunai', 'transfer', 'qris'])->default('tunai');
            $table->string('bukti_transfer')->nullable();
            $table->boolean('is_anonymous')->default(false);
            $table->boolean('is_public')->default(false);
            $table->text('catatan')->nullable();
            $table->foreignId('cashbox_id')->constrained()->cascadeOnDelete();
            $table->foreignId('created_by')->constrained('users')->cascadeOnDelete();
            $table->timestamps();
            $table->softDeletes();
            $table->index(['jamaah_id', 'tanggal']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donations');
    }
};
