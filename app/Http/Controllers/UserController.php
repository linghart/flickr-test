<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class UserController extends Controller
{

    public function getUsers()
    {
        $user = auth()->user();
        $users = User::all()->transform(function($user){
                return [
                    'id' => $user->id,
                    'name' => $user->username,
                ];
            });
        return $users;
    }

}
