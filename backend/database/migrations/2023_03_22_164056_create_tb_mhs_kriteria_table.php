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
        Schema::create('tb_mhs_kriteria', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('mhs_id')->nullable();
            $table->foreign('mhs_id')->references('id')->on('tb_mhs');
            $table->unsignedBigInteger('kriteria_id')->nullable();
            $table->foreign('kriteria_id')->references('id')->on('tb_kriteria');
            $table->string('nama_sub_kriteria')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_mhs_kriteria');
    }
};
