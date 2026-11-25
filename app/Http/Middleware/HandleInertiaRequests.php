<?php

namespace App\Http\Middleware;

use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user() ? [
                    'id' => $request->user()->id,
                    'name' => $request->user()->name,
                    'username' => $request->user()->username,
                    'email' => $request->user()->email,
                    'roles' => $request->user()->roles->map(fn($role) => [
                        'id' => $role->id,
                        'name' => $role->name,
                    ]),
                ] : null,
            ],
            ...($request->routeIs('public.*') ? [
                'mosqueProfile' => fn () => array_intersect_key(Setting::mosqueProfile(), array_flip([
                    'nama_masjid', 'alamat', 'no_telepon', 'email', 'logo_url',
                    'facebook', 'instagram', 'youtube', 'tiktok',
                ])),
            ] : []),
            'flash' => [
                'success' => $request->session()->get('success'),
                'error' => $request->session()->get('error'),
            ],
        ]);
    }
}