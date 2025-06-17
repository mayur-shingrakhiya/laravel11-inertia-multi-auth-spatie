<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function dashboard()  {
        $data['pageName'] = 'Dashboard';
        return Inertia::render('Dashboard/Index',$data);
    }


    public function logout(Request $request) {
        Auth::guard('admin')->logout();
        $request->session()->invalidate(); 
        $request->session()->regenerateToken();
        return redirect()->route('signin');
    }
}
