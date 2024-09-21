<?php

namespace App\Models\TindakAudit;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rekomendasi extends Model
{
    use HasFactory;

    protected $table = 'tindakaudit.rekomendasi';

    protected $fillable = [
        'temuan_id',
        'rekomendasi',
        'status',
        'alasan',
        'created_at',
        'updated_at',
        'tindak_lanjut',
        'bukti',
    ];

    public function temuan(){
        return $this->hasOne(Temuan::class, 'id', 'temuan_id');
    }
    
    public function rekomendasi_history()
    {
        return $this->hasMany(RekomendasiHistory::class, 'rekomendasi_id', 'id');
    }
}