<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('admin', function () {
    return view('administration');
});


Route::view('admin/{any}', 'administration')->where('any', '.*');
Route::view('{any}', 'welcome')->where('any', '.*');
