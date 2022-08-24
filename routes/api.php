<?php

use App\Http\Controllers\Api\AnnouncementController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CityController;
use App\Http\Controllers\Api\CountryController;
use App\Http\Controllers\Api\CurrencyController;
use App\Http\Controllers\Api\UserController;

Route::post("/register", [AuthController::class, 'register']);
Route::post("/send-verification-email", [AuthController::class, 'sendVerificationEmail']);
Route::post("/send-verification-sms", [AuthController::class, 'sendVerificationSms']);
Route::post("/login", [AuthController::class, 'login']);
Route::post("/login-admin", [AuthController::class, 'login_admin']);

Route::get('/categories', [CategoryController::class, 'index']);

Route::get('/announcements', [AnnouncementController::class, 'index']);
Route::get('/announcements/{announcement}', [AnnouncementController::class, 'show']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/announcements-user/{user}', [AnnouncementController::class, 'byUser']);
    Route::post('/announcements', [AnnouncementController::class, 'store']);
    Route::put('/announcements/{announcement}', [AnnouncementController::class, 'update']);
    Route::delete('/announcements/{announcement}', [AnnouncementController::class, 'destroy']);

    Route::post('/categories', [CategoryController::class, 'store']);
    Route::put('/categories/{category}', [CategoryController::class, 'update']);
    Route::delete('/categories/{categories}', [CategoryController::class, 'destroy']);

    Route::apiResource('/users', UserController::class);

    Route::apiResource('/currencies', CurrencyController::class);

    Route::apiResource('/countries', CountryController::class);

    Route::apiResource('/cities', CityController::class);

    Route::post("/logout", [AuthController::class, 'logout']);
});
