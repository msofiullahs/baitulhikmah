<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Throwable;

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
            'settings' => array_intersect_key(Setting::groupValues('general'), array_flip(['kop_surat', 'kota_sholat', 'warna_tema'])),
        ]);
    }

    public function updateGeneral(Request $request)
    {
        $validated = $request->validate([
            'kop_surat' => 'nullable|string|max:10000',
            'kota_sholat' => 'nullable|string|max:255',
            'warna_tema' => ['nullable', 'regex:/^#[0-9a-fA-F]{6}$/'],
        ]);

        DB::transaction(function () use ($validated) {
            foreach ($validated as $key => $value) {
                Setting::set("general.{$key}", $value);
            }
        });

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
            'settings' => Setting::mosqueProfile(),
        ]);
    }

    public function updateMasjid(Request $request)
    {
        $link = 'nullable|url:http,https|max:2048';
        $image = 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048';
        $validated = $request->validate([
            'nama_masjid' => 'required|string|max:255',
            'nama_tamir' => 'nullable|string|max:255',
            'sejarah' => 'nullable|string|max:10000',
            'alamat' => 'required|string|max:2000',
            'kelurahan' => 'nullable|string|max:255',
            'kecamatan' => 'nullable|string|max:255',
            'kota' => 'required|string|max:255',
            'provinsi' => 'required|string|max:255',
            'kode_pos' => 'nullable|string|max:20',
            'latitude' => 'nullable|numeric|between:-90,90',
            'longitude' => 'nullable|numeric|between:-180,180',
            'no_telepon' => 'nullable|string|max:50',
            'email' => 'nullable|email|max:255',
            'website' => $link,
            'facebook' => $link,
            'instagram' => $link,
            'twitter' => $link,
            'youtube' => $link,
            'tiktok' => $link,
            'whatsapp_group' => $link,
            'logo' => $image,
            'foto' => $image,
            'jam_buka' => 'nullable|date_format:H:i',
            'jam_tutup' => 'nullable|date_format:H:i',
        ]);

        $disk = Storage::disk('public');
        $uploads = [];

        try {
            foreach (['logo', 'foto'] as $field) {
                unset($validated[$field]);

                if ($request->hasFile($field)) {
                    $path = $request->file($field)->store('masjid', 'public');

                    if ($path === false) {
                        throw ValidationException::withMessages([$field => 'Gambar gagal diunggah.']);
                    }

                    $uploads[] = $path;
                    $validated[$field.'_url'] = '/storage/'.$path;
                }
            }

            DB::transaction(function () use ($validated) {
                foreach ($validated as $key => $value) {
                    Setting::set("masjid.{$key}", $value, 'masjid');
                }
            });
        } catch (Throwable $exception) {
            if ($uploads !== []) {
                $disk->delete($uploads);
            }
            throw $exception;
        }

        return back()->with('success', 'Profil masjid berhasil disimpan.');
    }

    public function social()
    {
        return Inertia::render('Settings/Social', [
            'settings' => Setting::group('social'),
        ]);
    }
}