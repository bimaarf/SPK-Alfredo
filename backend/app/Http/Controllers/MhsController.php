<?php

namespace App\Http\Controllers;

use App\Models\Kriteria;
use App\Models\Mhs;
use App\Models\MhsKriteria;
use Illuminate\Http\Request;

class MhsController extends Controller
{
    public function view()
    {
        // $_mhs =  Mhs::join('tb_mhs_kriteria', 'tb_mhs_kriteria.mhs_id', 'tb_mhs.id')
        //             ->get(['tb_mhs.*', 'tb_mhs_kriteria.kriteria_id', 'tb_mhs_kriteria.sub_kriteria_id']);
        $_mhs           = Mhs::all();
        $_mhs_kriteria  = MhsKriteria::join('tb_kriteria', 'tb_mhs_kriteria.kriteria_id', 'tb_kriteria.id')
                        ->get(['tb_mhs_kriteria.*', 'tb_kriteria.nama_kriteria']);
        return array($_mhs, $_mhs_kriteria);
    }
    public function store(Request $request)
    {
        $_kriteria      = Kriteria::all();
        $__mhs          = new Mhs();
        $__mhs->nama    = $request->nama;
        $__mhs->save();
        foreach($_kriteria as $kriteria)
        {
            $_mhs_kriteria  = new MhsKriteria();
            $_mhs_kriteria->mhs_id              = $__mhs->id;
            $_mhs_kriteria->kriteria_id         = $kriteria->id;
            $_mhs_kriteria->nama_sub_kriteria   = "-";
            $_mhs_kriteria->save();
        }
        return response()->json([
            'status' => 200,
            'message' => 'Success!'
        ]);
    }
}
