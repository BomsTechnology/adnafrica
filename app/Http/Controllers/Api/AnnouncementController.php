<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AnnouncementRequest;
use App\Http\Resources\AnnouncementResource;
use App\Models\Announcement;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image as ImageInt;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return AnnouncementResource::collection(Announcement::latest()->get());
    }

    /**
     * save images
     * 
     * @param array $images
     * @param string $title
     * @param int $adsId
     * @param $user
     * @return void
     */
    public function saveImages(array $images, string $title, int $adsId, $user)
    {

        foreach ($images as $image) {
            $filename = "/uploads/ads/{$user->id}_{$user->firstname}/" . str_replace(" ", "_", strtolower($title)) . '_' . time() . '.' . $image->extension();
            Storage::disk('public')->put($filename, fopen($image, 'r+'));

            $imagePath = public_path($filename);
            $img = ImageInt::make($imagePath)->resize(1000, 700, function ($constraint) {
                $constraint->aspectRatio();
            });
            $img->text('Adnafrica', 80, 50, function ($font) {
                $font->file(public_path('fonts/Montserrat-Bold.ttf'));
                $font->size(18);
                $font->color('#576574');
                $font->align('center');
                $font->valign('bottom');
                $font->angle(0);
            });
            $img->save($imagePath);
            Image::create([
                "path" => $filename,
                "announcement_id" => $adsId
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\AnnouncementRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AnnouncementRequest $request)
    {
        $data = $request->validated();
        $user = json_decode($request->user);
        $ads =  Announcement::create([
            "title" => $data["title"],
            "description" => $data["description"],
            "price" => $data["price"],
            "type" => $data["type"],
            "status" => $data["status"],
            "currency_id" => $data["currency_id"],
            "country_id" => $data["country_id"],
            "city_id" => $data["city_id"],
            "category_id" => $data["category_id"],
            "user_id" => $user->id,
        ]);
        $this->saveImages($request->images, $data['title'], $ads->id, $user);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Announcement  $announcement
     * @return \Illuminate\Http\Response
     */
    public function show(Announcement $announcement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\AnnouncementRequest  $request
     * @param  \App\Models\Announcement  $announcement
     * @return \Illuminate\Http\Response
     */
    public function update(AnnouncementRequest $request, Announcement $announcement)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Announcement  $announcement
     * @return \Illuminate\Http\Response
     */
    public function destroy(Announcement $announcement)
    {
        //
    }
}
