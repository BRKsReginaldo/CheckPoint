<?php

namespace App\Http\Controllers;

use App\Http\Resources\ItensResource;
use App\Item;
use App\Travel;

class ItensController extends Controller
{
    public function category($category)
    {
        return ItensResource::collection(Item::where('category_id', $category)->orWhere('general', true)->get());
    }

    public function toggleStatus($item, Travel $travel, $status)
    {
        $travel->bag->pull('item_status', ['id' => $item]);
        $travel->bag->push('item_status', ['id' => $item, 'status' => $status ? 'complete' : 'incomplete']);

        return response(['data' => $travel->load(['bag', 'category'])]);
    }
}
