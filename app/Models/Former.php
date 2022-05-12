<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Former extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'type',
        'phone',    
        'image',
    ];

    public function trainings()
    {
        return $this->belongsToMany(Training::class);
    }
}
