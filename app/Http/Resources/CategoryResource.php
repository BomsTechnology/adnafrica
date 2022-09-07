<?php

namespace App\Http\Resources;

use App\Models\Announcement;
use App\Models\Category;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
            'id' => $this->id,
            'name' => $this->name,
            'parent' => $this->parent,
            'image' => $this->image,
            'is_top' => $this->is_top,
            'nb_ads' => Announcement::where('category_id', $this->parent)->get(),
            'children' =>  Category::where('parent', '=', $this->id)->orderBy('id', 'desc')->get(),
        ];
    }
}
