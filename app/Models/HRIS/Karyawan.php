<?php

namespace App\Models\HRIS;

use App\Models\User;
use App\Models\HRIS\UnitUsaha;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Karyawan extends Model
{
    use HasFactory;

    protected $table = 'hris.karyawan';

    public function unit_usaha()
    {
        return $this->hasOne(UnitUsaha::class, 'kode_unit', 'kode_unit');
    }

    public function user()
    {
        return $this->hasOne(User::class, 'nik', 'nik');
    }

}