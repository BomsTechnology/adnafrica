<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AnnouncementRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "country_id" => "required|integer",
            "city_id" => "required|integer",
            "currency_id" => "required|integer",
            "category_id" => "required|integer",
            "status" => "required|integer",
            "title" => "required|string",
            "type" => "required|string",
            "price" => "required|integer",
            "description" => "required|string",
            "images" => "required|array",
            "user" => "required",
        ];
    }
}
