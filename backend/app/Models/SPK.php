<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SPK extends Model
{
    use HasFactory;
    protected $table = 'tb_spk';
    public function mhs()
    {
        return $this->belongsTo(Mhs::class);
    }
    public function kriteria()
    {
        return $this->belongsTo(Kriteria::class);
    }
}
