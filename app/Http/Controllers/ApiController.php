<?php

namespace App\Http\Controllers;

use Carbon\Carbon;

use App\Models\HRIS\UnitUsaha;
use App\Models\HRIS\Bagian;
use App\Models\HRIS\Karyawan;

use App\Models\TindakAudit\Bidang;

use App\Models\TindakAudit\Temuan;
use App\Models\TindakAudit\TemuanHistory;
use App\Models\TindakAudit\Rekomendasi;
use App\Models\TindakAudit\RekomendasiHistory;
use App\Models\TindakAudit\Notifikasi;

use App\Services\WhatsAppService;

use Illuminate\Http\Request;

class ApiController extends Controller
{    
    public function index(Request $request)
    {
        $data="Welcome to API";
        WhatsAppService::sendMessage(1, $data);
        return $data;
    }

    function getBagianCode($name) {
        $list_bagian = [
            [
                "name" => "BAGIAN TANAMAN",
                "code" => "4TAN"
            ],
            [
                "name" => "BAGIAN TEKNIK & PENGOLAHAN",
                "code" => "4TEP"
            ],
            [
                "name" => "BAGIAN SEKRETARIAT & HUKUM",
                "code" => "4SKH"
            ],
            [
                "name" => "BAGIAN SDM & SISTEM MANAJEMEN",
                "code" => "4SDM"
            ],
            [
                "name" => "BAGIAN AKUNTANSI DAN KEUANGAN",
                "code" => "4AKN"
            ],
            [
                "name" => "BAGIAN PENGADAAN & TEKNOLOGI INFORMASI",
                "code" => "4PTI"
            ]
        ];
    
        foreach ($list_bagian as $bagian) {
            if (strcasecmp($bagian['name'], $name) == 0) {
                return $bagian['code'];
            }
        }
        
        return null;
    }
    
    // public function createTemuanHistory($action, $temuan_id){
    //     try{
    //         $temuan = Temuan::find($temuan_id);
    //         if($action == "open"){
    //             $temuan->status = "Terbuka";
    //         } else if($action == "close"){
    //             $temuan->status = "Tertutup";
    //         }
    //         $temuan->save();
    //         return response()->json([
    //            'success' => true,
    //            'message' => 'Berhasil Membuat History',
    //             'data' => $temuan
    //         ], 200);
    //     }catch (\Exception $e) {}
    // }

    public function getUnit()
    {
        try {
            $data = UnitUsaha::with(['bagian.sub_bagian'])
            ->where('is_active', true)
            ->get();
                return response()->json([
                'success' => true,
                'message' => 'Berhasil mengambil data Unit',
                'data' => $data
            ], 200);
    
        } catch (\Exception $e) {
            return response()->json([
                'success' => false, 
                'message' => 'Gagal mengambil data Unit: '. $e->getMessage(),
                'data' => null
            ], 500);
        }
    }
    
    public function inputTemuan(Request $request){
        try {
            $temuan = Temuan::create([
                'created_by' => $request->created_by,
                'kode_unit' => $request->kode_unit,
                'temuan' => $request->temuan,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'bidang_id' => $request->bidang_id,
                'kode_bagian' => $request->kode_bagian,
                'kode_subbagian' => $request->kode_subbagian,
                'status' => 'Draft',
            ]);
            $temuan_history = TemuanHistory::create([
                'temuan_id' => $temuan->id,
                'temuan' => $request->temuan,
                'kode_unit' => $request->kode_unit,
                'status' => 'Draft',
                'bidang_id' => $request->bidang_id,
                'kode_bagian' => $request->kode_bagian,
                'changed_by' => $request->created_by,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'keterangan' => 'Temuan Baru Dibuat',
                'action' => 'create',
            ]);
            foreach ($request->rekomendasi as $rekom) {
                $createdRekomendasi = Rekomendasi::create([
                    'temuan_id' => $temuan->id, 
                    'rekomendasi' => $rekom,
                    'status' => 'Menunggu Tindak Lanjut', 
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
    
                RekomendasiHistory::create([
                    'temuan_history_id' => $temuan_history->id, 
                    'rekomendasi' => $rekom, 
                    'status' => 'Menunggu Tindak Lanjut', 
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                    'rekomendasi_id' => $createdRekomendasi->id,
                    'action' => 'create'
                ]);
            }

            return response()->json([
                'success' => true,
                'message' => 'Berhasil Input Temuan',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal Input Temuan: '. $e->getMessage(),
            ], 500);
        }
    }

    public function deleteTemuan(Request $request){
        try {
            $temuan = Temuan::with('rekomendasi', 'temuan_history.rekomendasi_history', 'notifikasi')->findOrFail($request->id);
            foreach ($temuan->temuan_history as $temuan_history) {
                $temuan_history->rekomendasi_history()->delete();
            }
            $temuan->temuan_history()->delete();
            $temuan->rekomendasi()->delete();
            $temuan->notifikasi()->delete();
            $temuan->delete();

            return response()->json([
                'success' => true,
                'message' => 'Temuan Berhasil Dihapus'
            ]);
        } catch (\Exception $e) {
            return response()->json([
               'success' => false, 
               'message' => 'Gagal Menghapus Temuan: '. $e->getMessage()
            ], 500);
        }
    }
    
    public function deleteRekomendasi(Request $request)
    {
        try {
            $rekomendasi = Rekomendasi::with('rekomendasi_history')->findOrFail($request->id);

            foreach ($rekomendasi->rekomendasi_history as $rekomendasiHistory) {
                $rekomendasiHistory->delete();
            }

            $rekomendasi->delete();

        
            return response()->json([
                'success' => true,
                'message' => 'Rekomendasi Berhasil Dihapus'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal Menghapus Rekomendasi: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function updateTemuan(Request $request){
        try{
            $temuan = Temuan::findOrFail($request->id);
            $temuan->update([
                'temuan' => $request->temuan,
                'updated_at' => Carbon::now(),
                'kode_unit' => $request->kode_unit,
                'bidang_id' => $request->bidang_id,
                'kode_bagian' => $request->kode_bagian,
            ]);

            foreach ($request->rekomendasi as $rekom) {
                if (isset($rekom['id'])) {
                    $rekomendasi = Rekomendasi::findOrFail($rekom['id']);
                    $rekomendasi->update([
                        'temuan_id' => $temuan->id, 
                        'rekomendasi' => $rekom['rekomendasi'],
                        'updated_at' => Carbon::now(),
                    ]);
                } else {
                    Rekomendasi::create([
                        'temuan_id' => $temuan->id,
                        'rekomendasi' => $rekom['rekomendasi'],
                        'status' => $rekom['status'],
                        'created_at' => Carbon::now(),
                        'updated_at' => Carbon::now(),
                    ]);
                }
            }
    

            $temuan_history = TemuanHistory::create([
                'temuan_id' => $request->id,
                'temuan' => $request->temuan,
                'status'=>$temuan->status,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'changed_by' => $request->changed_by,
                'kode_unit'=> $request->kode_unit,
                'bidang_id' => $request->bidang_id,
                'kode_bagian' => $request->kode_bagian,
                'keterangan' => 'Temuan Diperbarui',
                'action' => 'update',
            ]);

            foreach ($request->rekomendasi as $rekom) {
                if (isset($rekom['id'])) {
                    $rekomendasi = Rekomendasi::findOrFail($rekom['id']);
                } else {
                    $rekomendasi = Rekomendasi::where('temuan_id', $temuan->id)
                                              ->where('rekomendasi', $rekom['rekomendasi'])
                                              ->first();
                }
                RekomendasiHistory::create([
                    'temuan_history_id' => $temuan_history->id,
                    'rekomendasi' => $rekomendasi->rekomendasi,
                    'status' => $rekomendasi->status,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                    'rekomendasi_id' => $rekomendasi->id,
                    'action' => 'update'
                ]);
            }
            
            return response()->json([
                'success' => true,
                'message' => 'Temuan Berhasil Diperbarui'
            ]);
        }catch(\Exception $e) {
            return response()->json([
                'success' => false, 
                'message' => 'Gagal Perbarui Temuan' . $e->getMessage()
             ], 500);
        }
    }

    public function getTemuan(Request $request){
        try {
            if($request->is_spi){
                $data = Temuan::with('rekomendasi','unit_usaha','bidang', 'bagian' ,'sub_bagian')->get();
            }else{
                if ($request->kode_unit == '4R00') {
                    $bagian = $this->getBagianCode($request->bagian);
                    $data = Temuan::with('rekomendasi', 'unit_usaha', 'bidang', 'bagian', 'sub_bagian')
                                ->where('kode_bagian', $bagian)
                                ->where('status', '!=', 'Draft')
                                ->get();
                } else {
                    $data = Temuan::with('rekomendasi', 'unit_usaha', 'bidang', 'bagian', 'sub_bagian')
                                ->where('kode_unit', $request->kode_unit)
                                ->where('status', '!=', 'Draft')
                                ->get();
                }
            }
            
            return response()->json([
                'success' => true,
                'message' => 'Berhasil mengambil data Temuan',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false, 
                'message' => 'Gagal mengambil data Temuan: '. $e->getMessage(),
                'data' => null
            ], 500);
        }
    }

    public function getTemuanValidasi(Request $request){
        try {
            if($request->is_spi){
                $data = Temuan::with('rekomendasi','unit_usaha','bidang', 'bagian' ,'sub_bagian')->where('status', '=', 'Menunggu Validasi')->orWhere('status', '=', 'Divalidasi')->get();
            }else{
                if ($request->kode_unit == '4R00') {
                    $bagian = $this->getBagianCode($request->bagian);
                    $data = Temuan::with('rekomendasi', 'unit_usaha', 'bidang', 'bagian', 'sub_bagian')
                                ->where('kode_bagian', $bagian)
                                ->where('status', '=', 'Menunggu Validasi')
                                ->orWhere('status', '=', 'Divalidasi')
                                ->get();
                } else {
                    $data = Temuan::with('rekomendasi', 'unit_usaha', 'bidang', 'bagian', 'sub_bagian')
                                ->where('kode_unit', $request->kode_unit)
                                ->where('status', '=', 'Menunggu Validasi')
                                ->orWhere('status', '=', 'Divalidasi')
                                ->get();
                }
            }
            
            return response()->json([
                'success' => true,
                'message' => 'Berhasil mengambil data Temuan',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false, 
                'message' => 'Gagal mengambil data Temuan: '. $e->getMessage(),
                'data' => null
            ], 500);
        }
    }
    
    public function countUnit(){
        try {
            $unit_usaha = UnitUsaha::where('is_active', true)->count();
            $bagian = Bagian::count();
            $total = $unit_usaha + $bagian - 1;
            return response()->json([
                'success' => true,
                'message' => 'Berhasil menghitung data Unit',
                'data' => $total
            ], 200);
    
        } catch (\Exception $e) {
            return response()->json([
                'success' => false, 
                'message' => 'Gagal menghitung data Unit: '. $e->getMessage(),
                'data' => null
            ], 500);
        }
    }

    public function countTemuan(){
        try {
            $data = Temuan::count();
            return response()->json([
                'success' => true,
                'message' => 'Berhasil menghitung data Temuan',
                'data' => $data
            ], 200);
    
        } catch (\Exception $e) {
            return response()->json([
                'success' => false, 
                'message' => 'Gagal menghitung data Temuan: '. $e->getMessage(),
                'data' => null
            ], 500);
        }
    }

    public function countRekomendasi(){
        try {
            $data = Rekomendasi::count();
            return response()->json([
                'success' => true,
                'message' => 'Berhasil menghitung data Rekomendasi',
                'data' => $data
            ], 200);
    
        } catch (\Exception $e) {
            return response()->json([
                'success' => false, 
                'message' => 'Gagal menghitung data Rekomendasi: '. $e->getMessage(),
                'data' => null
            ], 500);
        }
    }

    public function countValidasi(){
        try {
            $temuan_history = TemuanHistory::where('status', 'Divalidasi')->get();
            $data = 0;
            foreach ($temuan_history as $temuan) {
                $rekomendasi_history = RekomendasiHistory::where('temuan_history_id', $temuan->id)->count();
                $data += $rekomendasi_history;
            }
            return response()->json([
                'success' => true,
                'message' => 'Berhasil menghitung data Validasi',
                'data' => $data
            ], 200);
    
        } catch (\Exception $e) {
            return response()->json([
                'success' => false, 
                'message' => 'Gagal menghitung data Validasi: '. $e->getMessage(),
                'data' => null
            ], 500);
        }
    }

    public function getBidang()
    {
        try {
            $data = Bidang::get();
                return response()->json([
                'success' => true,
                'message' => 'Berhasil mengambil data Bidang',
                'data' => $data
            ], 200);
    
        } catch (\Exception $e) {
            return response()->json([
                'success' => false, 
                'message' => 'Gagal mengambil data Bidang: '. $e->getMessage(),
                'data' => null
            ], 500);
        }
    }
    public function getTemuanHistory(Request $request)
    {
        try {
            $temuanHistory = TemuanHistory::with('rekomendasi_history','bidang','unit_usaha','bagian','karyawan')
                ->where('temuan_id', $request->temuan_id)
                ->get();
    
            return response()->json([
                'success' => true,
                'message' => 'Berhasil Mengambil Data Temuan History',
                'data' => $temuanHistory
            ], 200);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal Mengambil Data Temuan History: ' . $e->getMessage(),
            ], 500);
        }
    }
    public function inputTindakLanjut (Request $request){
        try {
            $nik = $request->nik;
            $rekomendasiArray = $request->rekomendasi;

            if (count($rekomendasiArray) == 0) {
                throw new \Exception('Tidak ada rekomendasi yang dikirim.');
            }

            $temuanId = $rekomendasiArray[0]['temuan_id'];

            $latestTemuanHistory = TemuanHistory::where('temuan_id', $temuanId)
                ->orderBy('created_at', 'desc')
                ->first();

            if (!$latestTemuanHistory) {
                throw new \Exception('History Temuan tidak ditemukan.');
            }

            $newTemuanHistory = TemuanHistory::create([
                'temuan_id' => $temuanId,
                'temuan' => $latestTemuanHistory->temuan,
                'kode_unit' => $latestTemuanHistory->kode_unit,
                'bidang_id' => $latestTemuanHistory->bidang_id,
                'kode_bagian' => $latestTemuanHistory->kode_bagian,
                'status' => 'Menunggu Validasi', 
                'changed_by' => $nik, 
                'keterangan' => 'Input Tindak Lanjut', 
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'action' => 'tindaklanjut'
            ]);

            $temuan = Temuan::findOrFail($temuanId);
            $temuan->update([
                'status' => 'Menunggu Validasi',
                'updated_at' => Carbon::now(),
            ]);

            foreach ($rekomendasiArray as $rekom) {
                $rekomendasi = Rekomendasi::findOrFail($rekom['id']);
                $rekomendasi->update([
                    'tindak_lanjut' => $rekom['tindak_lanjut'],
                    'status' => 'Menunggu Validasi', 
                    'updated_at' => Carbon::now(),
                ]);

                RekomendasiHistory::create([
                    'temuan_history_id' => $newTemuanHistory->id,
                    'rekomendasi' => $rekomendasi->rekomendasi,
                    'status' => 'Menunggu Validasi', 
                    'tindak_lanjut' => $rekom['tindak_lanjut'], 
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                    'rekomendasi_id' => $rekomendasi->id, 
                ]);
            }
            
            $this->createNotifikasi('4R00','4SPI','tindaklanjut',$temuan->id,'Temuan Ditindaklanjut');

            if($temuan->kode_unit == '4R00'){
                $bagian = Bagian::where('code', $temuan->kode_bagian)->first();
                $bidang = Bidang::where('id', $temuan->bidang_id)->first();
                $rekomendasi = Rekomendasi::where('temuan_id',$temuan->id)->get();
                
                $message = "📢 *[Sistem Tindak Lanjut Audit]*\n\n";
                $message .= "👋 *Halo, SPI*!\n\n";
                $message .= "⚠️ *{$bagian->name} telah mengunggah bukti untuk temuan berikut:*\n\n";
                $message .= "📌 *Judul Temuan*: _{$temuan->temuan}_\n";
                $message .= "🏢 *Bidang*: _{$bidang->nama}_\n\n";
                $message .= "📋 *Rekomendasi*:\n";
                foreach($rekomendasi as $index => $rekom) {
                    $message .= "   " . ($index + 1) . ". _" . $rekom->rekomendasi . "_\n";
                }
                $message .= "\n📋 *Tindak Lanjut*:\n";
                foreach($rekomendasi as $index => $rekom) {
                    $message .= "   " . ($index + 1) . ". _" . $rekom->tindak_lanjut . "_\n";
                }
                $message .= "\n⚡ *Silakan cek bukti tersebut dan lakukan validasi jika sudah sesuai. Terima kasih!* 🙏";
            }else{
                $unit = UnitUsaha::where('kode_unit', $temuan->kode_unit)->first();
                $bidang = Bidang::where('id', $temuan->bidang_id)->first();
                $rekomendasi = Rekomendasi::where('temuan_id',$temuan->id)->get();
                
                $message = "📢 *[Sistem Tindak Lanjut Audit]*\n\n";
                $message .= "👋 *Halo, SPI*!\n\n";
                $message .= "⚠️ *Unit {$unit->nama_unit} telah mengunggah bukti untuk temuan berikut:*\n\n";
                $message .= "📌 *Judul Temuan*: _{$temuan->temuan}_\n";
                $message .= "🏢 *Bidang*: _{$bidang->nama}_\n\n";
                $message .= "📋 *Rekomendasi*:\n";
                foreach($rekomendasi as $index => $rekom) {
                    $message .= "   " . ($index + 1) . ". _" . $rekom->rekomendasi . "_\n";
                }
                $message .= "\n📋 *Tindak Lanjut*:\n";
                foreach($rekomendasi as $index => $rekom) {
                    $message .= "   " . ($index + 1) . ". _" . $rekom->tindak_lanjut . "_\n";
                }
                $message .= "\n⚡ *Silakan cek bukti tersebut dan lakukan validasi jika sudah sesuai. Terima kasih!* 🙏";
            }
            WhatsAppService::sendMessage(1, $message);
            
            return response()->json([
                'success' => true,
                'message' => 'Berhasil Input Tindak Lanjut',
            ], 200);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal Input Tindak Lanjut: ' . $e->getMessage(),
            ], 500);
        }
    }
    
    function kirimTemuan(Request $request){
        try{
            $temuan = Temuan::findOrFail($request->temuan_id);
            $temuan->update([
                'status' => 'Terbuka',
                'updated_at' => Carbon::now(),
            ]);

            $temuan_history = TemuanHistory::create([
                'temuan_id' =>  $temuan->id,
                'temuan' =>  $temuan->temuan,
                'status'=>$temuan->status,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'changed_by' => $request->changed_by,
                'kode_unit'=> $temuan->kode_unit,
                'bidang_id' => $temuan->bidang_id,
                'kode_bagian' => $temuan->kode_bagian,
                'keterangan' => 'Temuan Dikirim',
                'action' => 'send',
            ]);

            $this->createNotifikasi($temuan->kode_unit,$temuan->kode_bagian,'send',$temuan->id,'Ada Temuan Baru Di Unit Anda');

            if($temuan->kode_unit == '4R00'){
                $bagian = Bagian::where('code', $temuan->kode_bagian)->first();
                $bidang = Bidang::where('id', $temuan->bidang_id)->first();
                $rekomendasi = Rekomendasi::where('temuan_id',$temuan->id)->get();
                
                $message = "📢 *[Sistem Tindak Lanjut Audit]*\n\n";
                $message .= "👋 *Halo, {$bagian->name}*!\n\n";
                $message .= "⚠️ *Telah ditemukan temuan audit baru dari SPI*:\n\n";
                $message .= "📌 *Judul Temuan*: _{$temuan->temuan}_\n";
                $message .= "🏢 *Bidang*: _{$bidang->nama}_\n\n";
                $message .= "📋 *Rekomendasi*:\n";
                foreach($rekomendasi as $index => $rekom) {
                    $message .= "   " . ($index + 1) . ". _" . $rekom->rekomendasi . "_\n";
                }
                $message .= "\n⚡ *Mohon segera berikan tindak lanjut melalui TindakAudit*. Terima kasih! 🙏";
            }else{
                $unit = UnitUsaha::where('kode_unit', $temuan->kode_unit)->first();
                $bidang = Bidang::where('id', $temuan->bidang_id)->first();
                $rekomendasi = Rekomendasi::where('temuan_id',$temuan->id)->get();
                
                $message = "📢 *[Sistem Tindak Lanjut Audit]*\n\n";
                $message .= "👋 *Halo, {$unit->nama_unit}*!\n\n";
                $message .= "⚠️ *Telah ditemukan temuan audit baru dari SPI*:\n\n";
                $message .= "📌 *Judul Temuan*: _{$temuan->temuan}_\n";
                $message .= "🏢 *Bidang*: _{$bidang->nama}_\n\n";
                $message .= "📋 *Rekomendasi*:\n";
                foreach($rekomendasi as $index => $rekom) {
                    $message .= "   " . ($index + 1) . ". _" . $rekom->rekomendasi . "_\n";
                }
                $message .= "\n⚡ *Mohon segera berikan tindak lanjut melalui TindakAudit*. Terima kasih! 🙏";
            }
            WhatsAppService::sendMessage(1, $message);
            return response()->json([
                'success' => true,
                'message' => 'Berhasil Mengirim Temuan',
            ], 200);
        }catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal Mengirim Temuan: ' . $e->getMessage(),
            ], 500);
        }
    }

    function prosesTemuan(Request $request){
        try{
            $temuan = Temuan::findOrFail($request->temuan_id);
            $temuan->update([
                'status' => 'Sedang Diproses',
                'updated_at' => Carbon::now(),
            ]);

            $temuan_history = TemuanHistory::create([
                'temuan_id' =>  $temuan->id,
                'temuan' =>  $temuan->temuan,
                'status'=>$temuan->status,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'changed_by' => $request->changed_by,
                'kode_unit'=> $temuan->kode_unit,
                'bidang_id' => $temuan->bidang_id,
                'kode_bagian' => $temuan->kode_bagian,
                'keterangan' => 'Temuan Diproses',
                'action' => 'process',
            ]);
            $this->createNotifikasi('4R00','4SPI','process',$temuan->id,'Temuan Diproses');
            return response()->json([
                'success' => true,
                'message' => 'Berhasil Proses Temuan',
            ], 200);
        }catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal Proses Temuan: ' . $e->getMessage(),
            ], 500);
        }
    }

    function validasiTemuan(Request $request){
        try{
            $nik = $request->nik;
           
            $rekomendasiArray = $request->rekomendasi;
            
            $temuanId = $rekomendasiArray[0]['temuan_id'];

            $temuan = Temuan::findOrFail($temuanId);
            $temuan->update([
                'updated_at' => Carbon::now(),
                'status' => 'Divalidasi',
            ]);

            $temuan_history = TemuanHistory::create([
                'temuan_id' => $temuan->id,
                'temuan' => $temuan->temuan,
                'status'=>$temuan->status,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'changed_by' => $nik,
                'kode_unit'=> $temuan->kode_unit,
                'bidang_id' => $temuan->bidang_id,
                'kode_bagian' => $temuan->kode_bagian,
                'keterangan' => 'Temuan Divalidasi',
                'action' => 'validation',
            ]);

            $this->createNotifikasi($temuan->kode_unit, $temuan->kode_bagian, 'validation', $temuan->id, 'Temuan Divalidasi');

            foreach ($rekomendasiArray as $rekom) {
                $rekomendasi = Rekomendasi::findOrFail($rekom['id']);
                $rekomendasi->update([
                    'status' => $rekom['status'], 
                    'alasan' => $rekom['alasan'],
                    'updated_at' => Carbon::now(),
                ]);
                RekomendasiHistory::create([
                    'temuan_history_id' => $temuan_history->id,
                    'tindak_lanjut' => $rekom['tindak_lanjut'],
                    'rekomendasi' => $rekomendasi->rekomendasi,
                    'status' => $rekom['status'],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                    'rekomendasi_id' => $rekomendasi->id,
                    'alasan' => $rekom['alasan'],
                    'action' => 'validation'
                ]);
            }

            if($temuan->kode_unit == '4R00'){
                $bagian = Bagian::where('code', $temuan->kode_bagian)->first();
                $bidang = Bidang::where('id', $temuan->bidang_id)->first();
                $rekomendasi = Rekomendasi::where('temuan_id',$temuan->id)->get();
                
                $message = "📢 *[Sistem Tindak Lanjut Audit]*\n\n";
                $message .= "👋 *Halo, {$bagian->name}*!\n\n";
                $message .= "⚠️ *Tindak lanjut Anda untuk temuan berikut telah divalidasi oleh SPI*:\n\n";
                $message .= "📌 *Judul Temuan*: _{$temuan->temuan}_\n";
                $message .= "🏢 *Bidang*: _{$bidang->nama}_\n\n";
                $message .= "⚡ *Mohon segera dicek hasil validasi melalui TindakAudit*. Terima kasih! 🙏";
            }else{
                $unit = UnitUsaha::where('kode_unit', $temuan->kode_unit)->first();
                $bidang = Bidang::where('id', $temuan->bidang_id)->first();
                $rekomendasi = Rekomendasi::where('temuan_id',$temuan->id)->get();
                
                $message = "📢 *[Sistem Tindak Lanjut Audit]*\n\n";
                $message .= "👋 *Halo, {$unit->nama_unit}*!\n\n";
                $message .= "⚠️ *Tindak lanjut Anda untuk temuan berikut telah divalidasi oleh SPI*:\n\n";
                $message .= "📌 *Judul Temuan*: _{$temuan->temuan}_\n";
                $message .= "🏢 *Bidang*: _{$bidang->nama}_\n\n";
                $message .= "⚡ *Mohon segera dicek hasil validasi melalui TindakAudit*. Terima kasih! 🙏";
            }
            WhatsAppService::sendMessage(1, $message);
            
            return response()->json([
                'success' => true,
                'message' => 'Berhasil Validasi Temuan',
            ], 200);
        }catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal Validasi Temuan: ' . $e->getMessage(),
            ], 500);
        }
    }

    function unitCekValidasi(Request $request){
        try{
           
            $rekomendasiArray = $request->rekomendasi;
            $valid = false;
            foreach ($rekomendasiArray as $rekom) {
                $rekomendasi = Rekomendasi::findOrFail($rekom['id']);
                if($rekomendasi->status!= 'Sesuai'){
                    $valid = false;
                    break;
                }else{
                    $valid=true;
                }
            }

            $nik = $request->changed_by;
            $temuan = Temuan::findOrFail($request->temuan_id);
            
            if($valid){
                $temuan->update([
                    'updated_at' => Carbon::now(),
                    'status' => 'Selesai',
                ]);
                $temuan_history = TemuanHistory::create([
                    'temuan_id' => $temuan->id,
                    'temuan' => $temuan->temuan,
                    'status'=> $temuan->status,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                    'changed_by' => $nik,
                    'kode_unit'=> $temuan->kode_unit,
                    'bidang_id' => $temuan->bidang_id,
                    'kode_bagian' => $temuan->kode_bagian,
                    'keterangan' => 'Audit Selesai',
                    'action' => 'checked',
                ]);
            }else{
                $temuan->update([
                    'updated_at' => Carbon::now(),
                    'status' => 'Terbuka',
                ]);
                $temuan_history = TemuanHistory::create([
                    'temuan_id' => $temuan->id,
                    'temuan' => $temuan->temuan,
                    'status'=> $temuan->status,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                    'changed_by' => $nik,
                    'kode_unit'=> $temuan->kode_unit,
                    'bidang_id' => $temuan->bidang_id,
                    'kode_bagian' => $temuan->kode_bagian,
                    'keterangan' => 'Tindak Lanjut Belum Sesuai',
                    'action' => 'checked',
                ]);
            }

            return response()->json([
                'success' => true,
                'message' => 'Berhasil Konfirmasi Hasil Validasi',
            ], 200);
        }catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal Konfirmasi Hasil Validasi ' . $e->getMessage(),
            ], 500);
        }
    }

    function createNotifikasi($kode_unit, $kode_bagian, $action, $temuan_id, $message){
        try{

            $notifikasi = Notifikasi::create([
                'temuan_id' => $temuan_id,
                'kode_unit' => $kode_unit,
                'kode_bagian' => $kode_bagian,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'action' => $action,
                'message' => $message,
                'read' => false,
            ]);

            return response()->json([
               'success' => true,
               'message' => 'Berhasil Membuat Notifikasi',
            ], 200);
        }catch (\Exception $e) {
            return response()->json([
               'success' => false,
               'message' => 'Gagal Membuat Notifikasi '. $e->getMessage(),
            ], 500);
        }
    }
    
    function getNotifikasi(Request $request){
        try{
            $nik = $request->nik;

            if($request->is_spi){
                $notifikasi = Notifikasi::with('temuan')->where('kode_bagian', '4SPI')->orderBy('created_at', 'desc')->get();
            }else{
                $karyawan = Karyawan::where('nik' ,$nik)->first();

                if($karyawan->kode_unit=='4R00'){
                    $bagian = $this->getBagianCode($karyawan->sub_unit);    
                    $notifikasi = Notifikasi::with('temuan')->where('kode_bagian', $bagian)->orderBy('created_at', 'desc')->get();
                }else{
                    $notifikasi = Notifikasi::with('temuan')->where('kode_unit', $karyawan->kode_unit)->orderBy('created_at', 'desc')->get();
                }
            }
            
            $data= $notifikasi;
            return response()->json([
            'success' => true,
            'message' => 'Berhasil Mengambil Notifikasi',
            'data' => $data,
            'notification_count' => $notifikasi->where('read', false)->count(),
            ], 200);
        }catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal Mengambil Notifikasi ' . $e->getMessage(),
            ], 500);
        }
    }
    
    function readNotifikasi(Request $request){
        try{
            $notifikasi_id = $request->notifikasi_id;

            $notifikasi = Notifikasi::find($notifikasi_id);
            $notifikasi->update(['read'=>  true, 'updated_at' => Carbon::now()]);

            return response()->json([
            'success' => true,
            'message' => 'Berhasil Membaca Notifikasi',
            ], 200);
        }catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal Membaca Notifikasi ' . $e->getMessage(),
            ], 500);
        }
    }

    function readAllNotifikasi(Request $request){
        try{
            $is_spi = $request->is_spi;
            if($is_spi){
                $notifikasi = Notifikasi::where('kode_bagian', '4SPI')->where('read','false')->get();
                foreach ($notifikasi as $notif) {
                    $notif->update(['read'=>  true, 'updated_at' => Carbon::now()]);
                }
            }else{
                $kode_unit = $request->kode_unit;
                $kode_bagian = $this->getBagianCode($request->kode_bagian);

                if($kode_unit=='4R00'){
                    $notifikasi = Notifikasi::where('kode_bagian', $kode_bagian)->where('read','false')->get();
                    foreach ($notifikasi as $notif) {
                        $notif->update(['read'=>  true, 'updated_at' => Carbon::now()]);
                    }
                }else{
                    $notifikasi = Notifikasi::where('kode_unit', $kode_unit)->where('read','false')->get();
                    foreach ($notifikasi as $notif) {
                        $notif->update(['read'=>  true, 'updated_at' => Carbon::now()]);
                    }
                }
            }
            

            return response()->json([
            'success' => true,
            'message' => 'Berhasil Membaca Notifikasi',
            ], 200);
        }catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal Membaca Notifikasi ' . $e->getMessage(),
            ], 500);
        }
    }
}