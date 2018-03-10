<?php

namespace App\Http\Controllers;

use App\Http\Resources\ItensResource;
use App\Travel;
use Illuminate\Http\Request;

class BagController extends Controller
{
    public function itens(Travel $travel, Request $request)
    {
        if (!$travel->bag()->whereIn('itens', $request->itens)->exists()) {
            $travel->bag->itens()->attach($request->itens);

            collect($request->itens)->each(function ($item) use ($travel) {
                $travel->bag->push('item_status', ['id' => $item, 'status' => 'incomplete']);
            });
        }

        return response(['data' => $travel->load(['bag', 'category'])]);
    }
}
