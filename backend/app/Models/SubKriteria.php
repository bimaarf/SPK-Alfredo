<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubKriteria extends Model
{
    use HasFactory;
    protected $table = "tb_sub_kriteria";
    protected $fillable = ['kriteria_id', 'nama_sub_kriteria', 'nilai'];

    public function kriteria()
    {
        return $this->belongsTo(Kriteria::class);
    }
}
