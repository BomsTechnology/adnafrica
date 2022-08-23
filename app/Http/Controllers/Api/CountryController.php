<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CountryRequest;
use App\Http\Resources\CountryResource;
use Illuminate\Support\Facades\File;
use App\Models\Country;
use Illuminate\Support\Facades\Storage;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CountryResource::collection(Country::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\CountryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CountryRequest $request)
    {

        $data = $request->validated();

        if ($request->file('image')) {
            $filename = '/uploads/country/' . time() . '.' . $request->file('image')->extension();
            Storage::disk('public')->put($filename, fopen($request->file('image'), 'r+'));
        } else {
            $filename = null;
        }

        $country = Country::create([
            "name" => $data['name'],
            "image" => $filename
        ]);
        return new CountryResource($country);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function show(Country $country)
    {
        return new CountryResource($country);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\CountryRequest  $request
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function update(CountryRequest $request, Country $country)
    {
        $request->validate([
            "name" => "required|string",
        ]);

        if ($request->file('image')) {
            if ($country->image != NULL) {
                if (File::exists(public_path(substr($country->image, 1, null)))) {
                    File::delete(public_path(substr($country->image, 1, null)));
                }
            }
            $filename = '/uploads/country/' . time() . '.' . $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
        } else {
            $filename = $request->image;
        }


        $country->update([
            'name' => $request->name,
            'image' => $filename,
        ]);
        return new CountryResource($country);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  string $countries
     * @return \Illuminate\Http\Response
     */
    public function destroy(string $countries)
    {
        $countries = json_decode($countries);
        foreach ($countries as  $item) {
            $country = Country::find($item);
            if ($country->image != NULL) {
                if (File::exists(public_path(substr($country->image, 1, null)))) {
                    File::delete(public_path(substr($country->image, 1, null)));
                }
            }
            $country->delete();
        }
        return response()->noContent();
    }
}
