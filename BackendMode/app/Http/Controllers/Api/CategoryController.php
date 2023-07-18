<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

class CategoryController extends Controller
{
    //
    public function index(Request $request)
    {
        $categories = Category::get();
        if (sizeof($categories) > 0) {
            return response()->json(['status' => 'success', 'categories' => $categories]);
        } else {
            return response()->json(['status' => 'error', 'categories' => []]);
        }
    }

    public function store(Request $request)
    {
        Category::create([
            'category_name' => $request->category_name
        ]);
        return response()->json(['status' => 'success']);
    }

    public function delete(Request $request)
    {
        $dlt = Category::where('category_id', $request->id)->first();
        $dlt->delete();
        return response()->json(['status' => 'success']);
    }
}
