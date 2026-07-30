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

    public function updateGeneral(Request $request)
    {
        $validated = $request->validate([
            'nama_masjid' => 'required|string|max:255',
            'nama_tamir' => 'nullable|string|max:255',
            'alamat' => 'required|string',
            'kota' => 'required|string|max:255',
            'provinsi' => 'required|string|max:255',
            'kode_pos' => 'nullable|string|max:20',
            'no_telepon' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'logo_url' => 'nullable|string',
            'kop_surat' => 'nullable|string',
            'kota_sholat' => 'nullable|string|max:255',
            'latitude' => 'nullable|string|max:50',
            'longitude' => 'nullable|string|max:50',
            'warna_tema' => 'nullable|string|max:20',
        ]);

        foreach ($validated as $key => $value) {
            Setting::set("general.{$key}", $value);
        }

        return back()->with('success', 'Pengaturan umum berhasil disimpan.');
    }

    public function finance()
    {
        return Inertia::render('Settings/Finance', [
            'settings' => Setting::group('finance'),
        ]);
    }

    public function saveKasBox(Request $request)
    {
        $validated = $request->validate([
            'kasboxes' => 'required|array|min:1',
            'kasboxes.*.nama' => 'required|string|max:255',
            'kasboxes.*.kode' => 'required|string|max:50',
            'kasboxes.*.is_default' => 'boolean',
        ]);

        Setting::set('finance.kasboxes', $validated['kasboxes']);

        return back()->with('success', 'Kas Box berhasil disimpan.');
    }

    public function saveApproval(Request $request)
    {
        $validated = $request->validate([
            'approval_threshold' => 'required|numeric|min:0',
            'approval_level' => 'required|in:1,2',
            'require_approval_for_expense' => 'boolean',
        ]);

        Setting::set('finance.approval_threshold', $validated['approval_threshold']);
        Setting::set('finance.approval_level', $validated['approval_level']);
        Setting::set('finance.require_approval_for_expense', $validated['require_approval_for_expense'] ?? false);

        return back()->with('success', 'Threshold approval berhasil disimpan.');
    }

    public function savePayment(Request $request)
    {
        $validated = $request->validate([
            'payment_gateway_enabled' => 'boolean',
            'payment_provider' => 'nullable|in:midtrans,xendit,doku',
            'payment_server_key' => 'nullable|string',
            'payment_client_key' => 'nullable|string',
            'payment_mode' => 'nullable|in:sandbox,production',
            'payment_methods' => 'nullable|array',
        ]);

        foreach ($validated as $key => $value) {
            Setting::set("finance.{$key}", $value);
        }

        return back()->with('success', 'Payment Gateway berhasil disimpan.');
    }

    public function saveWhatsApp(Request $request)
    {
        $validated = $request->validate([
            'whatsapp_enabled' => 'boolean',
            'whatsapp_provider' => 'nullable|in:fonnte,watzap,twilio,custom',
            'whatsapp_token' => 'nullable|string',
            'whatsapp_sender' => 'nullable|string|max:50',
        ]);

        foreach ($validated as $key => $value) {
            Setting::set("finance.{$key}", $value);
        }

        return back()->with('success', 'WhatsApp settings berhasil disimpan.');
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