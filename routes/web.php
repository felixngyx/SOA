<?php

use App\Http\Controllers\Shopify\OauthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Login',[
        'title' => 'Welcome to Inertia.js!',
    ]);
});

Route::post('/login',[OauthController::class,'install'])->name('login');
Route::get('/callback',[OauthController::class,'callback'])->name('callback');
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard',[
        'title' => 'Welcome to Inertia.js!',
    ]);
})->name('dashboard');