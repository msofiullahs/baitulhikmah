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
        Schema::create('invitation_templates', function (Blueprint $table) {
            $table->id();
            $table->string('nama'); // Undangan Pengajian, Maulid, dll
            $table->enum('kategori', [
                'pengajian', 'rapat', 'phbi', 'maulid', 
                'nikahan', 'halal_bihalal', 'kajian_akbar'
            ]);
            $table->text('deskripsi')->nullable();
            $table->string('file_template')->nullable(); // path blade template
            $table->string('preview_image')->nullable();
            $table->string('warna_tema', 7)->default('#0d5c3e');
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invitation_templates');
    }
};
