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
        Schema::create('transaction_categories', function (Blueprint $table) {
            $table->id();
            $table->string('nama'); // Infaq Jumat, Listrik, Konsumsi
            $table->enum('tipe', ['pemasukan', 'pengeluaran']);
            $table->string('warna', 7)->default('#0d5c3e');
            $table->string('ikon')->nullable(); // icon name dari Heroicons
            $table->foreignId('kas_box_id')->nullable()->constrained()->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaction_categories');
    }
};
