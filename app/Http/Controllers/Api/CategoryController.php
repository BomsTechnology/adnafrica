<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CategoryResource::collection(Category::where('parent', '=', null)->orderBy('id', 'desc')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryRequest $request)
    {
        $data = $request->validated();

        if ($request->file('image')) {
            $filename = '/uploads/category/' . time() . '.' . $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
        } else {
            $filename = null;
        }

        $category = Category::create([
            'name' => $data['name'],
            'parent' => $data['parent'] == 'null' ? null : $data['parent'],
            'image' => $filename,
        ]);

        return new CategoryResource($category);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        dd($request->name);
        $request->validate([
            "name" => "required|string",
        ]);

        if ($request->file('image')) {
            $filename = '/uploads/category/' . time() . '.' . $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
        } else {
            $filename = $request->image;
        }

        $category->update(
            [
                'name' => $request->name,
                'parent' => $request->parent == 'null' ? null : $request->parent,
                'image' => $filename,
            ]
        );

        return new CategoryResource($category);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $categories
     * @return \Illuminate\Http\Response
     */
    public function destroy(string $categories)
    {
        $categories = json_decode($categories);

        foreach ($categories as  $item) {
            $category = Category::find($item);
            if ($category->image != NULL) {
                if (File::exists(public_path(substr($category->image, 1, null)))) {
                    File::delete(public_path(substr($category->image, 1, null)));
                }
            }
            $category->delete();
        }

        return response()->noContent();
    }
}
