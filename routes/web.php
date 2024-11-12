<?php

use App\Events\UserJoinedGame;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/join-game', function () {
    event(new UserJoinedGame('A user has joined the game!'));
    return Inertia::render('Hacked');
});


require __DIR__.'/auth.php';
