<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;
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
Route::post('/register', [RegisterController::class, 'register'])->name('register');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/medicogeneral', function () {
    try {
        $medicogral = User::where('userType', 'medicogral')->get();
        return Inertia::render('Medicosgenerales', [
            'medicogral' => $medicogral->toArray(),
        ]);
    } catch (\Exception $e) {
        dd($e->getMessage());
    }
})->name('medicogeneral');

Route::get('/Dentistas', function () {
    try {
        $Dentistas = User::where('userType', 'Dentistas')->get();
        return Inertia::render('Dentistas', [
            'Dentistas' => $Dentistas->toArray(),
        ]);
    } catch (\Exception $e) {
        dd($e->getMessage());
    }
})->name('Dentistas');

Route::get('/Nutriologos', function () {
    try {
        $Nutriologos = User::where('userType', 'Nutriologos')->get();
        return Inertia::render('Nutriologos', [
            'Nutriologos' => $Nutriologos->toArray(),
        ]);
    } catch (\Exception $e) {
        dd($e->getMessage());
    }
})->name('Nutriologos');

Route::get('/Psicologos', function () {
    try {
        $Psicologos = User::where('userType', 'Psicologos')->get();
        return Inertia::render('Psicologos', [
            'Psicologos' => $Psicologos->toArray(),
        ]);
    } catch (\Exception $e) {
        dd($e->getMessage());
    }
})->name('Psicologos');

Route::get('/Quiropracticos', function () {
    try {
        $Quiropracticos = User::where('userType', 'Quiropracticos')->get();
        return Inertia::render('Quiropracticos', [
            'Quiropracticos' => $Quiropracticos->toArray(),
        ]);
    } catch (\Exception $e) {
        dd($e->getMessage());
    }
})->name('Quiropracticos');

use App\Http\Controllers\Auth\RegisteredUserController;

Route::post('/guardar-informacion', [RegisteredUserController::class, 'store'])->name('guardar-informacion');







require __DIR__.'/auth.php';
