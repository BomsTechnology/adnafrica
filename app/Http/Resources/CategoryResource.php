<?php

namespace App\Http\Resources;

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
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'name' => $this->name,
            'parentId' => $this->parent,
            'parent' => $this->parent != null ? new CategoryResource(Category::find($this->parent)) : null,
            'children' =>  Category::where('parent', '=', $this->id)->orderBy('id', 'desc')->get(),
        ];
    }
}
