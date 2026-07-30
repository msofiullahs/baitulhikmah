<?php

use App\Http\Controllers\UserController;
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
use App\Http\Controllers\RoleManagementController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\Reports\ReportController;
use App\Http\Controllers\AssetCategoryController;
use App\Http\Controllers\ZiswafCategoryController;
use App\Http\Controllers\TransactionCategoryController;

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
    Route::put('jumah/khatib/{khatib}', [JumahController::class, 'updateKhatib'])->name('jumah.khatib.update');
    Route::delete('jumah/khatib/{khatib}', [JumahController::class, 'destroyKhatib'])->name('jumah.khatib.destroy');
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

    // Route::get('reports', function () {
    //     return Inertia::render('Reports/Index');
    // })->name('reports.index');

    // Super Admin Routes
    Route::middleware(['can:manage-settings'])->group(function () {
        Route::get('/settings', [SettingsController::class, 'index'])->name('settings.index');
        Route::post('/settings', [SettingsController::class, 'update'])->name('settings.update');
        Route::get('/settings/general', [SettingsController::class, 'general'])->name('settings.general');
        Route::post('/settings/general', [SettingsController::class, 'updateGeneral'])->name('settings.general.update');
        Route::get('/settings/finance', [SettingsController::class, 'finance'])->name('settings.finance');
        Route::post('/settings/finance/kasbox', [SettingsController::class, 'saveKasBox'])->name('settings.finance.kasbox');
        Route::post('/settings/finance/approval', [SettingsController::class, 'saveApproval'])->name('settings.finance.approval');
        Route::post('/settings/finance/payment', [SettingsController::class, 'savePayment'])->name('settings.finance.payment');
        Route::post('/settings/finance/whatsapp', [SettingsController::class, 'saveWhatsApp'])->name('settings.finance.whatsapp');
        Route::get('/settings/masjid', [SettingsController::class, 'masjid'])->name('settings.masjid');
        Route::get('/settings/social', [SettingsController::class, 'social'])->name('settings.social');
    });

    // Asset Category CRUD
    Route::resource('asset-categories', App\Http\Controllers\AssetCategoryController::class);
    
    // Ziswaf Category CRUD
    Route::resource('ziswaf-categories', App\Http\Controllers\ZiswafCategoryController::class);
    
    // Transaction Category CRUD
    Route::resource('transaction-categories', TransactionCategoryController::class);

    Route::middleware(['can:manage-roles'])->group(function () {
        Route::get('/roles', [RoleManagementController::class, 'roles'])->name('roles.index');
        Route::post('/roles', [RoleManagementController::class, 'storeRole'])->name('roles.store');
        Route::put('/roles/{role}', [RoleManagementController::class, 'updateRole'])->name('roles.update');
        Route::delete('/roles/{role}', [RoleManagementController::class, 'destroyRole'])->name('roles.destroy');
        Route::post('/roles/clone/{role}', [RoleManagementController::class, 'cloneRole'])->name('roles.clone');
        Route::post('/roles/{role}/permissions', [RoleManagementController::class, 'addPermission'])->name('roles.permissions.add');
        Route::delete('/roles/{role}/permissions/{permission}', [RoleManagementController::class, 'removePermission'])->name('roles.permissions.remove');
        
        Route::get('/permissions', [RoleManagementController::class, 'permissions'])->name('permissions.index');
        Route::post('/permissions', [RoleManagementController::class, 'storePermission'])->name('permissions.store');
        Route::put('/permissions/{permission}', [RoleManagementController::class, 'updatePermission'])->name('permissions.update');
        Route::delete('/permissions/{permission}', [RoleManagementController::class, 'destroyPermission'])->name('permissions.destroy');
    });

    // User Management (Ketua & Super Admin)
    Route::middleware(['can:manage-users'])->group(function () {
        Route::resource('users', UserController::class);
    });

    // Reports
    Route::prefix('reports')->name('reports.')->group(function () {
        Route::get('/', [ReportController::class, 'index'])->name('index');
        Route::get('/finance', [ReportController::class, 'finance'])->name('finance');
        Route::get('/jamaah', [ReportController::class, 'jamaah'])->name('jamaah');
        Route::get('/activities', [ReportController::class, 'activities'])->name('activities');
        Route::get('/ziswaf', [ReportController::class, 'ziswaf'])->name('ziswaf');
        Route::get('/assets', [ReportController::class, 'assets'])->name('assets');
    });
});
