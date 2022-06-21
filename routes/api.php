<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

Route::post("/register", [AuthController::class, 'register']);
Route::post("/send-verification-email", [AuthController::class, 'sendVerificationEmail']);
Route::post("/send-verification-sms", [AuthController::class, 'sendVerificationSms']);
Route::post("/login", [AuthController::class, 'login']);
Route::post("/login-admin", [AuthController::class, 'login_admin']);

Route::group(['middleware' => ['auth:sanctum']], function () {

    Route::post("/logout", [AuthController::class, 'logout']);
});
