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
        Schema::create('assets', function (Blueprint $table) {
            $table->id();
            $table->string('kode_aset', 30)->unique(); // AST-0001
            $table->string('nama');
            $table->foreignId('category_id')->constrained('asset_categories')->cascadeOnDelete();
            $table->text('deskripsi')->nullable();
            $table->string('merk')->nullable();
            $table->string('model')->nullable();
            $table->integer('jumlah')->default(1);
            $table->date('tanggal_perolehan');
            $table->decimal('harga_perolehan', 15, 2)->default(0);
            $table->decimal('nilai_sisa', 15, 2)->default(0);
            $table->integer('umur_ekonomis_tahun')->nullable();
            $table->enum('kondisi', ['baik', 'rusak_ringan', 'rusak_berat', 'dihapuskan'])->default('baik');
            $table->string('lokasi')->nullable(); // Ruang utama, Kantor, dll
            $table->string('foto')->nullable();
            $table->string('qr_code')->nullable(); // path gambar QR
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assets');
    }
};
