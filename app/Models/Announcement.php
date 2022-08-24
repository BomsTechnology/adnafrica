<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'price',
        'type',
        'status',
        'currency_id',
        'country_id',
        'city_id',
        'user_id',
        'category_id',
    ];

    public function currency()
    {
        return $this->belongsTo(Currency::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function images()
    {
        return $this->hasMany(Image::class);
    }
}
