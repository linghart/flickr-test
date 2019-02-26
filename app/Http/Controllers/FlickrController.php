<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
class FlickrController extends Controller
{
	public function jsonp_decode($jsonp, $assoc = false) { // PHP 5.3 adds depth as third parameter to json_decode
	    if($jsonp[0] !== '[' && $jsonp[0] !== '{') { // we have JSONP
	       $jsonp = substr($jsonp, strpos($jsonp, '('));
	    }
	    return json_decode(trim($jsonp,'();'), $assoc);
	}

    public function getFeed(Request $request)
    {

    	$url = "https://api.flickr.com/services/feeds/photos_public.gne";
    	$params = '';
    	foreach($request->params as $key => $value){
    		if($value){
    			if($params != ''){$params.='&';}
    			$params .= $key . '=' . $value;
    		}
    	}
    	$url = $params ? $url . '?' . $params : $url;
    	Log::info($url);
    	$result = $this->jsonp_decode(file_get_contents($url));
    	return response()->json($result);
    	
    }
}
