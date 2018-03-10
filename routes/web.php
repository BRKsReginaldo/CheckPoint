<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();


Route::resource('travel', 'TravelController');
Route::get('itens/{category}', 'ItensController@category');
Route::post('bag/itens/{travel}', 'BagController@itens');
Route::get('/app', 'HomeController@index')->name('home');
Route::put('/itens/{item}/{travel}/toggle-status/{status}', 'ItensController@toggleStatus');