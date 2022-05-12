<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Training extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'image',
        'day',
        'start_time',    
        'end_time', 
        'category_id',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function formers()
    {
        return $this->belongsToMany(Former::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
