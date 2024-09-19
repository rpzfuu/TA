<?php

namespace App\Models\TindakAudit;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\HRIS\UnitUsaha;
use App\Models\HRIS\Bagian;
use App\Models\HRIS\SubBagian;

class Temuan extends Model
{
    use HasFactory;

    protected $table = 'tindakaudit.temuan';
    
    protected $fillable = [
        'created_by',
        'temuan',
        'rekomendasi',
        'kode_unit',
        'created_at',
        'updated_at',
        'bidang_id',
        'kode_bagian',
        'kode_subbagian',
        'status',
    ];
    public function unit_usaha()
    {
        return $this->hasOne(UnitUsaha::class, 'kode_unit', 'kode_unit');
    }

    public function bidang(){
        return $this->hasOne(Bidang::class, 'id', 'bidang_id');
    }

    public function bagian()
    {
        return $this->hasOne(Bagian::class, 'code', 'kode_bagian');
    }

    public function sub_bagian()
    {
        return $this->hasOne(SubBagian::class, 'code', 'kode_subbagian');
    }

    public function temuan_history(){
        return $this->hasMany(TemuanHistory::class, 'temuan_id', 'id');
    }

    public function rekomendasi(){
        return $this->hasMany(Rekomendasi::class, 'temuan_id', 'id');
    }

    public function notifikasi(){
        return $this->hasMany(Notifikasi::class, 'temuan_id', 'id');
    }
}