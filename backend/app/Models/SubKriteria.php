<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubKriteria extends Model
{
    use HasFactory;
    protected $table = "tb_sub_kriteria";
    protected $fillable = ['kriteria_id', 'nama_sub_kriteria', 'nilai'];
    protected $with = ['tb_kriteria'];

    public function kriteria()
    {
        return $this->belongsTo(Kriteria::class);
    }
    public function getKriteriaAttribute()
    {
        return $this->belongsTo(Kriteria::class);
    }
}
