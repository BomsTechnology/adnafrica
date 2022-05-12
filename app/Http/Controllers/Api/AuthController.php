<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Detail;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){
        $fields = $request->validate([
            'firstname' =>'required|string',
            'lastname'=>'nullable|string',
            'type' =>'required|string',
            'phone' =>'required|string',
            'email'=>'required|string|email|unique:users,email',
            'password' =>'required|min:8|confirmed'
        ]);

        $user = User::create([
            'firstname'=>$fields['firstname'],
            'lastname'=>$fields['lastname'],
            'type'=>$fields['type'],
            'email'=>$fields['email'],
            'phone'=>$fields['phone'],
            'password'=>Hash::make($fields['password']),
        ]);

        event(new Registered($user));

        $response = [
            'status'=>true,
            'message'=>'registered successfully!',
        ];
        return response($response,201);
    }

    public function login(Request $request){
        $fields = $request->validate([
            'email'=>'required|string|email',
            'password' =>'required'
        ]);
        //check email
        $user = User::where('email',$fields['email'])->first();
        //check password
        if(!$user || !Hash::check($fields['password'],$user->password)){
            return response(['status'=>false,'message'=>'invalid email or password'],401);
        }

        //create token
        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'status'=>true,
            'message'=>'Login successful!',
            'data' =>[
                'user'=>$user,
                'token'=>$token
            ]
        ];
        return response($response,201);
    }

    public function login_admin(Request $request){
        $fields = $request->validate([
            'email'=>'required|string|email',
            'password' =>'required'
        ]);
        //check email
        $admin = User::where([['email' , '=', $fields['email']], ['type', '=', 'admin']])->first();
        //check password
        if(!$admin || !Hash::check($fields['password'],$admin->password)){
            return response(['status'=>false,'message'=>'invalid email or password'],401);
        }

        //create token
        $token = $admin->createToken('myapptoken')->plainTextToken;

        $response = [
            'status'=>true,
            'message'=>'Login successful!',
            'data' =>[
                'user'=>$admin,
                'token'=>$token
            ]
        ];
        return response($response,201);
    }

    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();

        $response = [
            'status'=>true,
            'message'=>'Logout successfully',
        ];
        return response($response,201);
    }

}
