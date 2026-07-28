<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // ===== DEFINISI SEMUA PERMISSION =====
        $permissions = [
            // === CORE ===
            'view-dashboard',
            
            // === KEUANGAN ===
            'view-transactions',
            'create-transaction',
            'edit-transaction',
            'delete-transaction',
            'approve-transaction',
            'view-financial-reports',
            'force-delete-transaction', // Super Admin only
            
            // === INVENTARIS ===
            'view-assets',
            'create-asset',
            'edit-asset',
            'delete-asset',
            'manage-asset-maintenance',
            
            // === JAMAAH ===
            'view-jamaah',
            'create-jamaah',
            'edit-jamaah',
            'delete-jamaah',
            'export-jamaah',
            
            // === KEGIATAN ===
            'view-activities',
            'create-activity',
            'edit-activity',
            'delete-activity',
            'manage-bookings',
            
            // === UNDANGAN ===
            'view-invitations',
            'create-invitation',
            'edit-invitation',
            'delete-invitation',
            'generate-invitation-pdf',
            
            // === TPQ ===
            'view-tpq',
            'manage-students',
            'manage-teachers',
            'manage-classes',
            'manage-payments',
            'view-presence',
            
            // === ZISWAF ===
            'view-ziswaf',
            'manage-donations',
            'manage-mustahiq',
            'manage-distributions',
            'view-ziswaf-reports',
            
            // === JADWAL JUMAT ===
            'view-jumat',
            'manage-khatib',
            'manage-jumat-schedule',
            
            // === PENGUMUMAN ===
            'view-announcements',
            'create-announcement',
            'edit-announcement',
            'delete-announcement',
            'broadcast-announcement',
            
            // === LAPORAN ===
            'view-all-reports',
            'export-reports',
            
            // === USER MANAGEMENT (Ketua & Super Admin) ===
            'manage-users',
            
            // === SYSTEM MANAGEMENT (Super Admin ONLY) ===
            'manage-roles',
            'manage-permissions',
            'manage-settings',
            'view-audit-log',
            'manage-public-content',
            'backup-restore',
            'force-delete-any',
        ];

        // Create all permissions
        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }

        // ===== 1. SUPER ADMIN (Full System Access) =====
        $superAdmin = Role::firstOrCreate(['name' => 'Super Admin']);
        $superAdmin->syncPermissions(Permission::all());

        // ===== 2. KETUA (Full Application Access, no system config) =====
        $ketua = Role::firstOrCreate(['name' => 'Ketua']);
        $ketuaPermissions = Permission::whereNotIn('name', [
            'manage-roles',
            'manage-permissions',
            'manage-settings',
            'view-audit-log',
            'backup-restore',
            'force-delete-any',
        ])->get();
        $ketua->syncPermissions($ketuaPermissions);

        // ===== 3. WAKIL KETUA =====
        $wakil = Role::firstOrCreate(['name' => 'Wakil Ketua']);
        $wakilPermissions = Permission::whereNotIn('name', [
            'manage-users',
            'manage-roles',
            'manage-permissions',
            'manage-settings',
            'view-audit-log',
            'backup-restore',
            'force-delete-any',
        ])->get();
        $wakil->syncPermissions($wakilPermissions);

        // ===== 4. SEKRETARIS =====
        $sekretaris = Role::firstOrCreate(['name' => 'Sekretaris']);
        $sekretaris->syncPermissions([
            'view-dashboard',
            'view-activities', 'create-activity', 'edit-activity',
            'view-announcements', 'create-announcement', 'edit-announcement', 'broadcast-announcement',
            'view-invitations', 'create-invitation', 'edit-invitation', 'generate-invitation-pdf',
            'view-jamaah', 'create-jamaah', 'edit-jamaah', 'export-jamaah',
            'view-jumat', 'manage-khatib', 'manage-jumat-schedule',
            'view-all-reports', 'export-reports',
        ]);

        // ===== 5. BENDAHARA =====
        $bendahara = Role::firstOrCreate(['name' => 'Bendahara']);
        $bendahara->syncPermissions([
            'view-dashboard',
            'view-transactions', 'create-transaction', 'edit-transaction', 'approve-transaction',
            'view-financial-reports',
            'view-assets', 'create-asset', 'edit-asset', 'manage-asset-maintenance',
            'view-ziswaf', 'manage-donations', 'manage-distributions', 'view-ziswaf-reports',
            'view-all-reports', 'export-reports',
        ]);

        // ===== SEKSI-SEKSI =====
        
        // Sie Pendidikan
        $pendidikan = Role::firstOrCreate(['name' => 'Pendidikan']);
        $pendidikan->syncPermissions([
            'view-dashboard',
            'view-tpq', 'manage-students', 'manage-teachers', 'manage-classes', 'view-presence',
            'view-activities', 'create-activity',
            'view-announcements', 'create-announcement',
        ]);

        // Sie Peribadatan & Dakwah
        $peribadatan = Role::firstOrCreate(['name' => 'Peribadatan & Dakwah']);
        $peribadatan->syncPermissions([
            'view-dashboard',
            'view-jumat', 'manage-khatib', 'manage-jumat-schedule',
            'view-activities', 'create-activity', 'edit-activity',
            'view-announcements', 'create-announcement', 'broadcast-announcement',
            'view-invitations', 'create-invitation', 'generate-invitation-pdf',
        ]);

        // Sie Sarana Prasarana
        $sarpras = Role::firstOrCreate(['name' => 'Sarana Prasarana']);
        $sarpras->syncPermissions([
            'view-dashboard',
            'view-assets', 'create-asset', 'edit-asset', 'manage-asset-maintenance',
            'view-transactions', 'create-transaction',
            'manage-bookings',
            'view-activities',
        ]);

        // Sie Keamanan & Ketertiban
        $keamanan = Role::firstOrCreate(['name' => 'Keamanan & Ketertiban']);
        $keamanan->syncPermissions([
            'view-dashboard',
            'view-activities', 'manage-bookings',
            'view-jamaah',
            'view-announcements', 'create-announcement',
        ]);

        // Sie Kebersihan
        $kebersihan = Role::firstOrCreate(['name' => 'Kebersihan']);
        $kebersihan->syncPermissions([
            'view-dashboard',
            'view-assets',
            'view-activities', 'create-activity',
        ]);

        // Sie Humas & Kemasyarakatan
        $humas = Role::firstOrCreate(['name' => 'Humas & Kemasyarakatan']);
        $humas->syncPermissions([
            'view-dashboard',
            'view-jamaah', 'create-jamaah', 'edit-jamaah', 'export-jamaah',
            'view-announcements', 'create-announcement', 'edit-announcement', 'broadcast-announcement',
            'view-invitations', 'create-invitation', 'edit-invitation', 'generate-invitation-pdf',
            'view-activities', 'create-activity',
        ]);

        // Sie Kepemudaan dan Remaja Masjid
        $kemudaan = Role::firstOrCreate(['name' => 'Kepemudaan dan Remaja Masjid']);
        $kemudaan->syncPermissions([
            'view-dashboard',
            'view-activities', 'create-activity', 'edit-activity',
            'view-announcements', 'create-announcement', 'broadcast-announcement',
            'view-invitations', 'create-invitation', 'generate-invitation-pdf',
            'view-jamaah',
        ]);

        // Sie Pemberdayaan Perempuan
        $perempuan = Role::firstOrCreate(['name' => 'Pemberdayaan Perempuan']);
        $perempuan->syncPermissions([
            'view-dashboard',
            'view-activities', 'create-activity', 'edit-activity',
            'view-announcements', 'create-announcement', 'broadcast-announcement',
            'view-invitations', 'create-invitation', 'generate-invitation-pdf',
            'view-jamaah',
        ]);

        // ===== BUAT USER SUPER ADMIN DEFAULT =====
        $this->command->info('Creating default Super Admin user...');
        $superAdminUser = User::firstOrCreate(
            ['username' => 'admin'], // <-- GANTI email DENGAN username
            [
                'name' => 'Super Administrator',
                'password' => Hash::make('admin123'),
                'is_active' => true,
                // 'email' => 'superadmin@baitulhikmah.id', // Opsional, bisa dihapus atau dikosongkan
            ]
        );
        $superAdminUser->syncRoles(['Super Admin']);

        $this->command->info('Super Admin created!');
        $this->command->info('Username: admin');
        $this->command->info('Password: admin123');
    }
}