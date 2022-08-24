<?php

namespace App\Http\Resources;

use App\Models\Announcement;
use App\Models\Category;
use App\Models\City;
use App\Models\Country;
use App\Models\Currency;
use App\Models\Image;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class AnnouncementResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "title" => $this->title,
            "slug" => $this->slug,
            "description" => $this->description,
            "price" => $this->price,
            "type" => $this->type,
            "status" => $this->status,
            "currency" => new CurrencyResource(Currency::find($this->currency_id)),
            "country" => new CountryResource(Country::find($this->country_id)),
            "city" => new CityResource(City::find($this->city_id)),
            "user" => new UserResource(User::find($this->user_id)),
            "category" => new CategoryResource(Category::find($this->category_id)),
            'date' => $this->created_at,
            "images" =>  ImageResource::collection(Image::where('announcement_id', $this->id)->get())
        ];
    }
}
