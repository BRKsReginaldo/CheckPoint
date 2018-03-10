<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('categories', 'CategoryController@index');

Route::get('categories', function() {
   return \App\Category::with('itens')->get();
});

Route::post('categories', function(Request $request) {
   return \App\Category::create($request->all());
});

Route::post('item/{category}', function(\App\Category $category, Request $request) {
   return $category->itens()->create($request->all());
});