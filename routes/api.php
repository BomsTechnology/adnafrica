<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;

Route::post("/register", [AuthController::class, 'register']);
Route::post("/send-verification-email", [AuthController::class, 'sendVerificationEmail']);
Route::post("/send-verification-sms", [AuthController::class, 'sendVerificationSms']);
Route::post("/login", [AuthController::class, 'login']);
Route::post("/login-admin", [AuthController::class, 'login_admin']);

Route::get('/categories', [CategoryController::class, 'index']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/category', [CategoryController::class, 'store']);
    Route::post("/logout", [AuthController::class, 'logout']);
});
