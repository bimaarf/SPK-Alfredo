<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MhsKriteria extends Model
{
    use HasFactory;
    protected $table = 'tb_mhs_kriteria';
    protected $fillable = ['mhs_id', 'kriteria_id', 'nama_sub_kriteria'];

    public function mhs()
    {
        return $this->belongsTo(Mhs::class);
    }
    public function kriteria()
    {
        return $this->belongsTo(Kriteria::class);
    }



}
