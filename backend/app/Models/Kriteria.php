<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kriteria extends Model
{
    use HasFactory;
    protected $table = "tb_kriteria";
    public function kriteria()
    {
        return $this->hasMany(SubKriteria::class);
    }
}
