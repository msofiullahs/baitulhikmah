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
        Schema::create('jumah_summaries', function (Blueprint $table) {
            $table->id();
            $table->date('tanggal_jumat');
            $table->foreignId('cashbox_id')->constrained()->cascadeOnDelete();
            $table->decimal('total_infaq', 15, 2);
            $table->integer('jumlah_amplop')->default(0);
            $table->text('catatan')->nullable();
            $table->foreignId('created_by')->constrained('users')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jumah_summaries');
    }
};
