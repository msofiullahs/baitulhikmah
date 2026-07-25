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
        Schema::create('category_jamaahs', function (Blueprint $table) {
            $table->id();
            $table->string('nama'); // Remaja, Bapak-bapak, Ibu-ibu, Lansia, Pengurus
            $table->string('warna', 7)->default('#0d5c3e');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('category_jamaahs');
    }
};
