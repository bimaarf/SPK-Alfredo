<?php

namespace App\Http\Controllers;

use App\Models\Mhs;
use App\Models\SPK;
use Illuminate\Http\Request;

class SPkController extends Controller
{
    public function update(Request $request, $id)
    {
        $_mhs = Mhs::find($id);
        foreach ($_mhs as $mhs)
        {
            $_spk   = new SPK();
            $_spk->mhs_id = $mhs->id;
        }
    }
}
