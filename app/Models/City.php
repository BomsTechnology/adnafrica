<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'country_id'
    ];

    public function announcements()
    {
        return $this->hasMany(Announcement::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}
