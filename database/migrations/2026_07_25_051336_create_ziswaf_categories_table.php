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
        Schema::create('ziswaf_categories', function (Blueprint $table) {
            $table->id();
            $table->string('nama'); // Zakat Fitrah, Zakat Maal, Infaq, Sedekah, Wakaf
            $table->enum('kategori', ['zakat', 'infaq', 'sedekah', 'wakaf']);
            $table->text('deskripsi')->nullable();
            $table->decimal('nisab')->nullable(); // untuk zakat maal
            $table->decimal('persentase')->nullable(); // 2.5% untuk zakat maal
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ziswaf_categories');
    }
};
