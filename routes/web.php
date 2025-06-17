<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\AdminManageController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Admin\PermissionController;

Route::get('/test', function () {
    abort(403, 'Forbidden test');
});
Route::get('/', [LoginController::class,'signin'])->name('signin');
Route::post('/signin/post', [LoginController::class,'signinPost'])->name('signin.post');
Route::get('/signup', [RegisterController::class,'signup'])->name('signup');
Route::post('/signup/create', [RegisterController::class,'create'])->name('signup.create');


Route::prefix('admin')->middleware('adminauth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('admin.dashboard');
    Route::get('/logout', [DashboardController::class, 'logout'])->name('admin.logout');
    Route::get('/users/list', [DashboardController::class, 'dashboard'])->name('admin.users.list');




    Route::prefix('role-permissions')->group(function () {
        
            Route::prefix('permissions')->group(function () {
                Route::get('/', [PermissionController::class,'index'])->name('permissions.index');
                Route::get('/getData', [PermissionController::class, 'getData'])->name('permissions.getData');
                Route::get('/create', [PermissionController::class, 'create'])->name('permissions.create');
                Route::post('/store', [PermissionController::class, 'store'])->name('permissions.store');
                Route::get('/edit/{permission}', [PermissionController::class, 'edit'])->name('permissions.edit');
                Route::patch('/update/{permission}', [PermissionController::class, 'update'])->name('permissions.update');
                Route::delete('/delete/{permission}', [PermissionController::class, 'destroy'])->name('permissions.destroy');
            });

            Route::prefix('roles')->group(function () {
                Route::get('/', [RoleController::class,'index'])->name('roles.index');
                Route::get('/getData', [RoleController::class, 'getData'])->name('roles.getData');
                Route::get('/create', [RoleController::class, 'create'])->name('roles.create');
                Route::post('/store', [RoleController::class, 'store'])->name('roles.store');
                Route::get('/edit/{role}', [RoleController::class, 'edit'])->name('roles.edit');
                Route::patch('/update/{role}', [RoleController::class, 'update'])->name('roles.update');
                Route::delete('/delete/{role}', [RoleController::class, 'destroy'])->name('roles.destroy');
            });


            Route::prefix('admins')->group(function () {
                Route::get('/', [AdminManageController::class,'index'])->name('admins.index');
                Route::get('/getData', [AdminManageController::class, 'getData'])->name('admins.getData');
                Route::get('/create', [AdminManageController::class, 'create'])->name('admins.create');
                Route::post('/store', [AdminManageController::class, 'store'])->name('admins.store');
                Route::get('/edit/{admin}', [AdminManageController::class, 'edit'])->name('admins.edit');
                Route::patch('/update/{admin}', [AdminManageController::class, 'update'])->name('admins.update');
                Route::delete('/delete/{admin}', [AdminManageController::class, 'destroy'])->name('admins.destroy');
            });
    });
});
