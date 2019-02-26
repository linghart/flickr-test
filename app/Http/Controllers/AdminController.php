<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class AdminController extends Controller
{
	public function banUser(Request $request)
	{
		$user = User::findOrFail($request->id);
		$user->ban = true;
		$user->save();
		return ['status'=>'success'];
	}

	public function unbanUser(Request $request)
	{
		$user = User::findOrFail($request->id);
		$user->ban = false;
		$user->save();
		return ['status'=>'success'];
	}

    public function indexUsers()
    {
    	$users = User::all();
    	return $users;
    }

    public function getUser(Request $request)
    {
    	$person = User::findOrFail($request->id);
    	return $person;
    }

    public function saveUser(Request $request)
    {
	    $user = User::findOrFail($request->user['id']);
	    $user->username = $request->user['username'];
	    $user->email = $request->user['email'];
	    if ($request->password)
	      $user->password = bcrypt($request->password);

	    try {
	          $user->save();
	        return "Ok";
	    } catch (\Illuminate\Database\QueryException $exception){
	        return response()->json(['error' => $exception->errorInfo[2]], 404);
	    }
    }

}
