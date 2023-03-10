<?php

namespace App\Http\Controllers;

use App\Models\SubKriteria;
use Illuminate\Http\Request;

class SubKriteriaKontroller extends Controller
{
    public function view(Request $request)
    {
        if($request->has('search')){
            $_sub_kriteria      = SubKriteria::where('id', $request->search)->first();
            return $_sub_kriteria;
        }
    }
    public function store(Request $request)
    {
        $items = $request->input('items');
        foreach ($items as $item) {
            $_kriteria = new SubKriteria();
            $_kriteria->kriteria_id = $item["kriteria_id"];
            $_kriteria->nama_sub_kriteria = $item["nama_sub_kriteria"];
            $_kriteria->nilai = $item["nilai"];
            $_kriteria->save();
        }
        return response()->json([
            'status' => 200,
            'message' => 'Added!',
        ]);
    }
    public function update(Request $request, $id)
    {
        $_sub = SubKriteria::find($id);
        $_sub->nama_sub_kriteria = $request->nama_sub_kriteria;
        $_sub->nilai = $request->nilai;
        $_sub->update();
        return response()->json([
            'status' => 200,
            'message' => 'Updated!',
        ]);
    }
    public function delete(Request $request, $id)
    {
        $_sub = SubKriteria::find($id);
        $_sub->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Deleted!',
        ]);
    }
}
