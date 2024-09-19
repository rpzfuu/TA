<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware; 

use App\Models\User;
use Illuminate\Support\Facades\Auth;
class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $data = [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
        ];
        if (Auth::check()) {
            $user = Auth::user()->load('karyawan.unit_usaha');


            // Just pass 'is_spi' without modifying the user model
            $data['auth']['user'] = array_merge($user->toArray(), [
                'is_spi' => $user->isSpi(),
            ]);
        }
        return $data;
    }
}