<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\KriteriaController;
use App\Http\Controllers\SubKriteriaKontroller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/data-dashboard/view', [KriteriaController::class, 'view']);
Route::post('/kriteria/store', [KriteriaController::class, 'store']);
Route::post('/kriteria/update/{id}', [KriteriaController::class, 'update']);
Route::post('/kriteria/delete/{id}', [KriteriaController::class, 'delete']);
Route::post('/sub-kriteria/view', [SubKriteriaKontroller::class, 'view']);
Route::post('/sub-kriteria/store', [SubKriteriaKontroller::class, 'store']);
Route::post('/sub-kriteria/update/{id}', [SubKriteriaKontroller::class, 'update']);
Route::post('/sub-kriteria/delete/{id}', [SubKriteriaKontroller::class, 'delete']);
