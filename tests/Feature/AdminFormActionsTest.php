<?php

namespace Tests\Feature;

use App\Models\Announcement;
use App\Models\Cashbox;
use App\Models\Donation;
use App\Models\Mustahiq;
use App\Models\Setting;
use App\Models\Student;
use App\Models\TpqClass;
use App\Models\User;
use App\Models\ZiswafCategory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia as Assert;
use Spatie\Permission\Models\Permission;
use Tests\TestCase;

class AdminFormActionsTest extends TestCase
{
    use RefreshDatabase;

    public function test_social_settings_share_mosque_links_and_keep_credentials_private(): void
    {
        $user = User::factory()->create();
        $user->givePermissionTo(Permission::findOrCreate('manage-settings', 'web'));
        $this->actingAs($user);

        $facebook = 'https://www.facebook.com/masjid';
        $this->post(route('settings.social.update'), [
            'facebook' => $facebook,
            'enable_email_broadcast' => true,
            'fb_access_token' => 'test-token',
        ])->assertSessionHasNoErrors();

        $this->post(route('settings.social.update'), [
            'enable_email_broadcast' => false,
            'fb_access_token' => null,
        ])->assertSessionHasNoErrors();

        $this->assertSame('test-token', Crypt::decryptString(Setting::get('social.fb_access_token')));
        $this->get(route('settings.social'))->assertInertia(fn (Assert $page) => $page
            ->where('settings.facebook', $facebook)
            ->where('settings.enable_email_broadcast', false)
            ->missing('settings.fb_access_token'));
        $this->get(route('settings.masjid'))->assertInertia(fn (Assert $page) => $page
            ->where('settings.facebook', $facebook));
        $this->get(route('public.contact'))->assertInertia(fn (Assert $page) => $page
            ->where('mosqueProfile.facebook', $facebook));
    }

    public function test_tpq_saves_student_details_classes_and_payments(): void
    {
        $this->actingAs(User::factory()->create());
        $class = TpqClass::create(['nama' => 'Kelas A', 'hari' => 'senin', 'jam_mulai' => '15:00', 'jam_selesai' => '16:00']);
        $studentData = [
            'nis' => 'TPQ-01',
            'nama' => 'Santri Uji',
            'jenis_kelamin' => 'P',
            'tanggal_lahir' => '2017-06-01',
            'tanggal_masuk' => '2026-11-01',
            'nama_ortu' => 'Wali Santri',
            'no_hp_ortu' => '08123456789',
            'alamat' => 'Jalan Uji',
            'class_ids' => [$class->id],
        ];

        $this->post(route('tpq.students.store'), $studentData)->assertSessionHasNoErrors();
        $student = Student::firstOrFail();
        $this->assertSame('Jalan Uji', $student->alamat);
        $this->assertSame('2017-06-01', $student->tanggal_lahir->toDateString());
        $this->assertDatabaseHas('student_class', ['student_id' => $student->id, 'tpq_class_id' => $class->id]);

        $this->put(route('tpq.students.update', $student), array_replace($studentData, [
            'nama' => 'Santri Baru',
            'class_ids' => [],
        ]))->assertSessionHasNoErrors();
        $this->assertSame('Santri Baru', $student->fresh()->nama);
        $this->assertDatabaseCount('student_class', 0);

        $this->post(route('tpq.payments.store'), [
            'santri_id' => $student->id,
            'jumlah' => 25000,
            'keterangan' => 'SPP',
            'tanggal' => '2026-11-25',
            'metode' => 'tunai',
        ])->assertSessionHasNoErrors();
        $this->assertDatabaseHas('student_payments', ['student_id' => $student->id, 'jumlah' => 25000]);
        $this->delete(route('tpq.students.destroy', $student))->assertSessionHas('error');
        $this->assertModelExists($student);

        $this->post(route('tpq.students.store'), array_replace($studentData, ['nis' => 'TPQ-02']))
            ->assertSessionHasNoErrors();
        $other = Student::where('nis', 'TPQ-02')->firstOrFail();
        $this->delete(route('tpq.students.destroy', $other))->assertSessionHas('success');
        $this->assertModelMissing($other);
    }

    public function test_ziswaf_saves_edits_and_deletes_donations(): void
    {
        $this->actingAs(User::factory()->create());
        $category = ZiswafCategory::create(['nama' => 'Zakat', 'kategori' => 'zakat']);
        $cashbox = Cashbox::create(['nama' => 'Kas Zakat', 'kode' => 'ZAKAT']);
        $data = [
            'ziswaf_category_id' => $category->id,
            'cashbox_id' => $cashbox->id,
            'jumlah' => 50000,
            'tanggal' => '2026-11-25',
            'metode' => 'tunai',
            'nama_donatur' => 'Donatur Uji',
            'catatan' => 'Catatan donasi',
        ];

        $this->post(route('ziswaf.donations.store'), $data)->assertSessionHasNoErrors();
        $donation = Donation::firstOrFail();
        $this->get(route('ziswaf.donations.index', ['ziswaf_category_id' => $category->id, 'search' => 'Donatur']))
            ->assertInertia(fn (Assert $page) => $page->has('donations.data', 1));
        $this->put(route('ziswaf.donations.update', $donation), array_replace($data, ['jumlah' => 75000]))
            ->assertSessionHasNoErrors();
        $this->assertDatabaseHas('donations', ['id' => $donation->id, 'jumlah' => 75000, 'catatan' => 'Catatan donasi']);

        $this->delete(route('ziswaf.donations.destroy', $donation))->assertSessionHas('success');
        $this->assertSoftDeleted($donation);
    }

    public function test_ziswaf_saves_mustahiq_notes_and_protects_distribution_history(): void
    {
        $this->actingAs(User::factory()->create());
        $category = ZiswafCategory::create(['nama' => 'Zakat', 'kategori' => 'zakat']);
        $data = [
            'nama' => 'Penerima Uji',
            'kategori' => 'fakir',
            'alamat' => 'Jalan Uji',
            'catatan' => 'Catatan uji',
            'status' => 'aktif',
        ];

        $this->post(route('mustahiq.store'), $data)->assertSessionHasNoErrors();
        $mustahiq = Mustahiq::firstOrFail();
        $this->put(route('mustahiq.update', $mustahiq), array_replace($data, ['status' => 'tidak_aktif']))
            ->assertSessionHasNoErrors();
        $this->assertDatabaseHas('mustahiqs', ['id' => $mustahiq->id, 'status' => 'tidak_aktif', 'catatan' => 'Catatan uji']);
        $this->post(route('ziswaf.distributions.store'), [
            'mustahiq_id' => $mustahiq->id,
            'ziswaf_category_id' => $category->id,
            'jumlah' => 25000,
            'tanggal' => '2026-11-25',
        ])->assertSessionHasNoErrors();
        $this->assertDatabaseHas('ziswaf_distributions', ['mustahiq_id' => $mustahiq->id, 'ziswaf_category_id' => $category->id]);
        $this->delete(route('mustahiq.destroy', $mustahiq))->assertSessionHas('error');
        $this->assertModelExists($mustahiq);

        $this->post(route('mustahiq.store'), array_replace($data, ['nama' => 'Penerima Lain']))
            ->assertSessionHasNoErrors();
        $other = Mustahiq::where('nama', 'Penerima Lain')->firstOrFail();
        $this->delete(route('mustahiq.destroy', $other))->assertSessionHas('success');
        $this->assertModelMissing($other);
    }

    public function test_announcement_edit_keeps_the_image_unless_replaced(): void
    {
        $this->actingAs(User::factory()->create());
        $disk = Storage::fake('public');
        $data = ['judul' => 'Pengumuman Uji', 'isi' => 'Isi uji', 'tipe' => 'umum', 'send_email' => true];
        $this->post(route('announcements.store'), $data + ['gambar' => UploadedFile::fake()->image('first.png')])
            ->assertSessionHasNoErrors();
        $announcement = Announcement::firstOrFail();
        $firstPath = $announcement->gambar;

        $this->put(route('announcements.update', $announcement), array_replace($data, ['judul' => 'Judul baru']))
            ->assertSessionHasNoErrors();
        $this->assertSame($firstPath, $announcement->fresh()->gambar);

        $this->post(route('announcements.update', $announcement), $data + [
            '_method' => 'PUT',
            'gambar' => UploadedFile::fake()->image('replacement.png'),
        ])->assertSessionHasNoErrors();

        $updated = $announcement->fresh();
        $this->assertNotSame($firstPath, $updated->gambar);
        $this->assertTrue($updated->send_email);
        $disk->assertExists($updated->gambar);
    }
}
