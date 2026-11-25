<?php

namespace Tests\Feature;

use App\Models\Setting;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia as Assert;
use Spatie\Permission\Models\Permission;
use Tests\TestCase;

class MosqueSettingsTest extends TestCase
{
    use RefreshDatabase;

    public function test_general_settings_reload_and_the_profile_inherits_legacy_values(): void
    {
        $this->signInAsSettingsManager();
        Setting::set('general.nama_masjid', 'Masjid Lama');
        Setting::set('general.alamat', 'Jalan Lama');

        $this->post(route('settings.general.update'), [
            'kop_surat' => 'Kop surat baru',
            'warna_tema' => '#123456',
            'nama_masjid' => 'Should be ignored',
        ])->assertSessionHasNoErrors();

        $this->get(route('settings.general'))->assertInertia(fn (Assert $page) => $page
            ->component('Settings/General')
            ->where('settings.kop_surat', 'Kop surat baru')
            ->where('settings.warna_tema', '#123456')
            ->missing('settings.nama_masjid'));

        $this->get(route('settings.masjid'))->assertInertia(fn (Assert $page) => $page
            ->component('Settings/Masjid')
            ->where('settings.nama_masjid', 'Masjid Lama')
            ->where('settings.alamat', 'Jalan Lama'));
    }

    public function test_mosque_profile_saves_and_updates_the_public_site(): void
    {
        $this->signInAsSettingsManager();
        $disk = Storage::fake('public');
        Setting::set('general.no_telepon', '08123456789');
        $profile = [
            'nama_masjid' => 'Masjid Baru',
            'alamat' => 'Jalan Baru',
            'kota' => 'Bandung',
            'provinsi' => 'Jawa Barat',
            'no_telepon' => null,
            'email' => 'kontak@example.com',
            'facebook' => 'https://www.facebook.com/masjid',
        ];

        $this->from(route('settings.masjid'))
            ->post(route('settings.masjid.update'), $profile + [
                'logo' => UploadedFile::fake()->image('logo.png'),
            ])
            ->assertRedirect(route('settings.masjid'))
            ->assertSessionHasNoErrors()
            ->assertSessionHas('success');

        $logoUrl = Setting::get('masjid.logo_url');
        $disk->assertExists(substr($logoUrl, strlen('/storage/')));

        $this->post(route('settings.masjid.update'), $profile)
            ->assertSessionHasNoErrors();

        $this->get(route('settings.masjid'))->assertInertia(fn (Assert $page) => $page
            ->where('settings.nama_masjid', 'Masjid Baru')
            ->where('settings.no_telepon', null)
            ->where('settings.logo_url', $logoUrl));

        foreach (['public.home', 'public.contact'] as $route) {
            $this->get(route($route))->assertInertia(fn (Assert $page) => $page
                ->where('mosqueProfile.nama_masjid', 'Masjid Baru')
                ->where('mosqueProfile.alamat', 'Jalan Baru')
                ->where('mosqueProfile.no_telepon', null)
                ->where('mosqueProfile.email', 'kontak@example.com')
                ->where('mosqueProfile.facebook', 'https://www.facebook.com/masjid')
                ->where('mosqueProfile.logo_url', $logoUrl));
        }
    }

    public function test_mosque_profile_requires_permission(): void
    {
        $this->actingAs(User::factory()->create())
            ->post(route('settings.masjid.update'))
            ->assertForbidden();
    }

    public function test_mosque_profile_validates_updates(): void
    {
        $this->signInAsSettingsManager();
        $this->post(route('settings.masjid.update'), ['facebook' => 'javascript:alert(1)'])
            ->assertSessionHasErrors(['nama_masjid', 'alamat', 'kota', 'provinsi', 'facebook']);

        $this->assertDatabaseCount('settings', 0);
    }

    private function signInAsSettingsManager(): void
    {
        $user = User::factory()->create();
        $user->givePermissionTo(Permission::findOrCreate('manage-settings', 'web'));

        $this->actingAs($user, 'web');
    }
}
