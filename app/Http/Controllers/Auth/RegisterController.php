<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use App\Models\Admin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function signup()
    {
        $data['pageName']= 'Sign Up';
        return Inertia::render('Auth/SignUp',$data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $validate = $request->validate([
            'firstname' => 'required|min:3',
            'lastname' => 'required|min:3',
            'email' => 'required|email|unique:admins,email',
            'password' => 'required|min:8',
        ]);
        try {
            $validate['password'] = Hash::make($validate['password']);
            Admin::create($validate);
            return redirect()->route('signin')->with('success', 'Registration successful! 🎉 Your account has been created. You can now log in using your email and password.');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', '😓 Oops! Something went wrong. We`re working on it. Please try again shortly.');
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
