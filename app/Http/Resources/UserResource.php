<?php

namespace App\Http\Resources;

use App\Models\Announcement;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class UserResource extends JsonResource
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
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'email' => $this->email,
            'type' => $this->type,
            'phone' => $this->phone,
            'password' => $this->password,
            'status' => $this->status,
            'avatar' => $this->avatar,
            'location' => $this->location,
            'recent_search' => $this->recent_search,
            'background' => $this->background,
            'notification_phone' => $this->notification_phone,
            'notification_email' => $this->notification_email,
            'website' => $this->website,
            'facbook' => $this->facbook,
            'twitter' => $this->twitter,
            'instagram' => $this->instagram,
            'linkedin' => $this->linkedin,
            'date' => $this->created_at,
            'nbAds' => Announcement::whereUserId($this->id)->count(),
            'slug' => Str::slug("$this->firstname $this->lastname")
        ];
    }
}
