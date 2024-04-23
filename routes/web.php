<?php

use App\Http\Controllers\TicketController;
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

Route::get('/', [ TicketController::class, 'HomePage'] );
Route::get('/detail/{id}', [ TicketController::class, 'DetailPage'] );
Route::get('/checkout', [ TicketController::class, 'CheckoutPage'] )->name('checkout');
Route::get('/payment-method', [ TicketController::class, 'PaymentMethod'] )->name('payment-method');
Route::get('/payment', [ TicketController::class, 'Payment'] )->name('payment');
Route::match(['get', 'post'],'/payment/finish',[ TicketController::class, 'ThankyouPage'])->name('payment-finish');