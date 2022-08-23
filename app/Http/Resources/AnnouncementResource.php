<?php

namespace App\Http\Resources;

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
            "description" => $this->description,
            "price" => $this->price,
            "type" => $this->type,
            "status" => $this->status,
            "currency" => new CurrencyResource($this->currency_id),
            "country" => new CountryResource($this->country_id),
            "city" => new CityResource($this->city_id),
            "user" => User::find($this->user_id),
            "category" => new CategoryResource($this->category_id),
            "images" => Image::where('announcement_id', $this->id)
        ];
    }
}
