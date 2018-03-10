<?php

namespace App;


use Jenssegers\Mongodb\Eloquent\Model;

class Item extends Model
{
    protected $fillable = ['name', 'general'];
}
