<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class LoginController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            // Redirect authenticated admins away from login page
            new Middleware(function ($request, $next) {
                if (Auth::guard('admin')->check()) {
                    return redirect()->route('admin.dashboard');
                }
                return $next($request);
            }, only: ['signin']),
        ];
    }

    public function signin() {
        $data['pageName'] = 'Sign In';
        return Inertia::render('Auth/SignIn', $data);
    }

    public function signinPost(Request $request) {
        $validate = $request->validate([
            'email' => 'required|exists:admins,email',
            'password' => 'required|min:8',
        ]);

        if (!Auth::guard('admin')->attempt($validate)) {
            return back()->withErrors([
                'email' => 'The provided credentials do not match our records.',
            ])->onlyInput('email');
        }

        return redirect()->route('admin.dashboard');
    }
}
