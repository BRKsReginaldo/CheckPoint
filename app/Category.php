<?php

namespace App;


use Jenssegers\Mongodb\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name', 'icon'];

    public function itens() {
	return $this->hasMany(App\Item::class);
    }
}
