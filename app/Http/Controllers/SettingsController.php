<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingsController extends Controller
{
    public function index()
    {
        // Check permission inline
        if (!auth()->user()->can('manage-settings')) {
            abort(403);
        }
        
        $settings = Setting::all()->groupBy('group');
        
        return Inertia::render('Settings/Index', [
            'settings' => $settings->map(fn($items) => $items->map(fn($item) => [
                'id' => $item->id,
                'key' => $item->key,
                'value' => $item->value,
                'type' => $item->type,
                'description' => $item->description,
            ])),
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'settings' => 'required|array',
            'settings.*.key' => 'required|string',
            'settings.*.value' => 'nullable',
        ]);

        foreach ($validated['settings'] as $setting) {
            Setting::set($setting['key'], $setting['value']);
        }

        return back()->with('success', 'Pengaturan berhasil disimpan.');
    }

    public function general()
    {
        return Inertia::render('Settings/General', [
            'settings' => Setting::group('general'),
        ]);
    }

    public function finance()
    {
        return Inertia::render('Settings/Finance', [
            'settings' => Setting::group('finance'),
        ]);
    }

    public function masjid()
    {
        return Inertia::render('Settings/Masjid', [
            'settings' => Setting::group('masjid'),
        ]);
    }

    public function social()
    {
        return Inertia::render('Settings/Social', [
            'settings' => Setting::group('social'),
        ]);
    }
}