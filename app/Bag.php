<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class Bag extends Model
{
    protected $fillable = [
        'travel_id',
    ];

    public function travel()
    {
        return $this->belongsTo(Travel::class);
    }

    public function itens()
    {
        return $this->belongsToMany(Item::class, null, 'bags', 'itens');
    }
}
