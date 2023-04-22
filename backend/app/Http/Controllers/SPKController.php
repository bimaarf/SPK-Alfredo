<?php

namespace App\Http\Controllers;

use App\Models\MhsKriteria;
use App\Models\SubKriteria;
use Illuminate\Http\Request;

class SPKController extends Controller
{
    public function update(Request $request)
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
