<?php

namespace App;


use Jenssegers\Mongodb\Eloquent\Model;

class Travel extends Model
{
    protected $fillable = [
        'category_id',
        'destiny',
        'date',
        'user_id'
    ];

    protected static function boot()
    {
        parent::boot();

        static::created(function($model) {
           $model->bag()->create();
        });
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function bag()
    {
        return $this->hasOne(Bag::class);
    }
}
