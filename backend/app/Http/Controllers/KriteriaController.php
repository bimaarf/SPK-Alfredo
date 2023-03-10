<?php

namespace App\Http\Controllers;

use App\Models\Kriteria;
use App\Models\SubKriteria;
use Illuminate\Http\Request;

class KriteriaController extends Controller
{
    public function view()
    {
        $_kriteria      = Kriteria::all();
        $_sub_kriteria  = SubKriteria::all();
        return array($_kriteria, $_sub_kriteria);
    }
    public function store(Request $request)
    {
        $_getKriteria = Kriteria::all();
        $_countKriteria = count($_getKriteria) + 1;
        $_kriteria = new Kriteria();
        $_kriteria->nama_kriteria = $request->nama_kriteria;
        $_kriteria->kode_kriteria = 'C' . $_countKriteria;
        $_kriteria->bobot = $request->bobot;
        $_kriteria->tipe_kriteria = $request->tipe_kriteria;
        $_kriteria->save();

        return response()->json([
            'status' => 200,
            'message' => 'Added!',
        ]);
    }
    public function update(Request $request, $id)
    {
        $_kriteria = Kriteria::find($id);
        $_kriteria->nama_kriteria = $request->nama_kriteria;
        $_kriteria->bobot = $request->bobot;
        $_kriteria->tipe_kriteria = $request->tipe_kriteria;
        $_kriteria->update();
        return response()->json([
            'status' => 200,
            'message' => 'Updated!',
        ]);
    }
    public function delete($id)
    {
        $_kriteria = Kriteria::find($id);
        $_kriteria->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Update!',
        ]);
    }
}
