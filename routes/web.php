<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\JamaahController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\AssetController;
use App\Http\Controllers\InvitationController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\JumahController;
use App\Http\Controllers\TpqController;
use App\Http\Controllers\ZiswafController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\Public\PublicHomeController;
use App\Http\Controllers\Public\PublicFinanceController;
use App\Http\Controllers\Public\PublicScheduleController;
use App\Http\Controllers\Public\PublicAnnouncementController;
use App\Http\Controllers\Public\PublicContactController;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [PublicHomeController::class, 'index'])->name('public.home');

// Laporan Keuangan Publik
Route::get('/keuangan', [PublicFinanceController::class, 'index'])->name('public.finance');
Route::get('/keuangan/download', [PublicFinanceController::class, 'download'])->name('public.finance.download');

// Jadwal
Route::get('/jadwal-sholat', [PublicScheduleController::class, 'sholat'])->name('public.schedule.sholat');
Route::get('/pengajian', [PublicScheduleController::class, 'pengajian'])->name('public.schedule.pengajian');
Route::get('/jumat', [PublicScheduleController::class, 'jumat'])->name('public.schedule.jumat');

// Pengumuman
Route::get('/pengumuman', [PublicAnnouncementController::class, 'index'])->name('public.announcements');
Route::get('/pengumuman/{announcement}', [PublicAnnouncementController::class, 'show'])->name('public.announcements.show');

// Kontak
Route::get('/kontak', [PublicContactController::class, 'index'])->name('public.contact');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->prefix('admin/')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    Route::resource('jamaah', JamaahController::class);
    Route::resource('transactions', TransactionController::class);
    Route::resource('assets', AssetController::class);
    Route::resource('activities', ActivityController::class);
    Route::resource('announcements', AnnouncementController::class);
    
    // Undangan dengan route custom untuk generate PDF
    Route::resource('invitations', InvitationController::class);
    Route::post('invitations/{invitation}/generate', [InvitationController::class, 'generatePdf'])->name('invitations.generate');

    // Jumah (Khatib & Jadwal)
    Route::get('jumah', [JumahController::class, 'index'])->name('jumah.index');
    Route::post('jumah/khatib', [JumahController::class, 'storeKhatib'])->name('jumah.khatib.store');
    Route::post('jumah/schedule', [JumahController::class, 'storeSchedule'])->name('jumah.schedule.store');
    Route::delete('jumah/schedule/{schedule}', [JumahController::class, 'destroySchedule'])->name('jumah.schedule.destroy');

    // TPQ
    Route::get('tpq/students', [TpqController::class, 'studentsIndex'])->name('tpq.students.index');
    Route::post('tpq/students', [TpqController::class, 'storeStudent'])->name('tpq.students.store');
    Route::post('tpq/payments', [TpqController::class, 'storePayment'])->name('tpq.payments.store');

    // ZISWAF
    Route::get('ziswaf/donations', [ZiswafController::class, 'donationsIndex'])->name('ziswaf.donations.index');
    Route::post('ziswaf/donations', [ZiswafController::class, 'storeDonation'])->name('ziswaf.donations.store');
    Route::get('ziswaf/mustahiq', [ZiswafController::class, 'mustahiqIndex'])->name('ziswaf.mustahiq.index');
    Route::post('ziswaf/distributions', [ZiswafController::class, 'storeDistribution'])->name('ziswaf.distributions.store');
});
