<?php
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Product;
 
class ProductController extends Controller{

	/**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // When performing on todo, must check the api_token as authenticated user
		// $this->middleware('auth');
    }
	
	public function getAll()
	{
		$products = Product::all();
		return response()->json($products);
	}
	
	public function getProductDetail($productId)
	{
		return response()->json(Product::find($productId));
	}
}
?>