<?php

namespace App\Models\TindakAudit;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Spi extends Model
{
    use HasFactory;


    protected $table = 'tindakaudit.spi';

    protected $fillable = [
        'nik',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'nik', 'nik');
    }

}