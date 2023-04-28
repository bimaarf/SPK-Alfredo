<?php

namespace App\Http\Controllers;

use App\Models\Kriteria;
use App\Models\Mhs;
use App\Models\MhsKriteria;
use App\Models\SubKriteria;
use Illuminate\Http\Request;

class SPKController extends Controller
{
    public function matriksKeputusan()
    {
        $__kriteria                 = Kriteria::all();
        $__mahasiswa                = Mhs::all();
        $__mhs_sub_kriteria                = Mhs::join('tb_mhs_kriteria', 'tb_mhs_kriteria.mhs_id', 'tb_mhs.id')
                                    ->join('tb_sub_kriteria', 'tb_sub_kriteria.nama_sub_kriteria', 'tb_mhs_kriteria.nama_sub_kriteria')
                                    ->join('tb_kriteria', 'tb_kriteria.id', 'tb_sub_kriteria.kriteria_id')
                                    ->get(['tb_mhs_kriteria.*', 'tb_mhs.nama', 'tb_sub_kriteria.nilai', 'tb_kriteria.nama_kriteria', 'tb_kriteria.bobot', 'tb_kriteria.kode_kriteria']);


        return array($__kriteria, $__mahasiswa, $__mhs_sub_kriteria);
    }

    public function update(Request $request)
    {
        $__mhs_kriteria_check       = MhsKriteria::where('nama_sub_kriteria', $request->nama_sub_kriteria)
                                                ->where('mhs_id', $request->mhs_id)
                                                ->get();
        if (count($__mhs_kriteria_check) === 0)
        {

            $__find_kriteria_id         = SubKriteria::where('nama_sub_kriteria', $request->nama_sub_kriteria)->first();
            $___mhs_kriteria            = MhsKriteria::where('kriteria_id', $__find_kriteria_id->kriteria_id)
            ->where('mhs_id', $request->mhs_id)->first();
            $___mhs_kriteria->nama_sub_kriteria = $request->nama_sub_kriteria;
            $___mhs_kriteria->update();
            return response()->json([
                'status' => 200,
                'message' => 'success!'
            ], 200);
        }

    }
}
