<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ItemsController;


// Profile routes
// Halaman utama
Route::get('/', [ProfileController::class, 'indexProfiles'])->name('home');
Route::get('/profiles', [ProfileController::class, 'indexProfiles'])->name('profiles.indexProfiles');
Route::post('/profiles', [ProfileController::class, 'storeProfiles'])->name('profiles.storeProfiles');
// Route::delete('/profiles/{id}', [ProfileController::class, 'destroy'])->name('profiles.destroy');
Route::get('/profiles/clear', [ProfileController::class, 'clearProfiles'])->name('profiles.clear');

// Counter route
Route::view('/counter', 'experiments.counter')->name('counter');

// Items routes
Route::get('/items', [ItemsController::class, 'indexItems'])->name('items.indexItems');
Route::post('/items', [ItemsController::class, 'storeItems'])->name('items.storeItems');
// Route::delete('/items/{id}', [ItemsController::class, 'destroy'])->name('items.destroy');
Route::get('/items/clear', [ItemsController::class, 'clearItems'])->name('items.clear');