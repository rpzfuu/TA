<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\TemuanController;
use App\Http\Controllers\ValidasiController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect('/login');
});

Route::middleware('auth')->group(function () {
    //dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');

    //profile
    Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');

    //temuan
    Route::get('/temuan', [TemuanController::class, 'index'])->name('temuan.index');

    //validasi
    Route::get('/validasi', [ValidasiController::class, 'index'])->name('validasi.index');
    
    //api
    Route::prefix('api')->group(function () {
        require __DIR__.'/api.php';
    });
});

require __DIR__.'/auth.php';