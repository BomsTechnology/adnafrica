<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    use HasFactory;

    protected $fillable = [
        'name',
        'parent',
        'image',
        'is_top'
    ];

    protected $casts = [
        'is_top' => 'boolean'
    ];

    public function announcements()
    {
        return $this->hasMany(Announcement::class);
    }
}
