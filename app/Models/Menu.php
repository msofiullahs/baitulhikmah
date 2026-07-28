<?php

namespace App\Models;

class Menu
{
    public static function getMenusByRole($roleName)
    {
        $menus = [
            'Dashboard' => [
                'route' => 'dashboard',
                'icon' => 'HomeIcon',
                'permissions' => ['view-dashboard'],
                'roles' => ['all'], // All roles can access
            ],
            'Arus Kas' => [
                'route' => 'transactions.index',
                'icon' => 'CurrencyDollarIcon',
                'permissions' => ['view-transactions'],
                'roles' => ['Ketua', 'Wakil Ketua', 'Bendahara', 'Sarana Prasarana'],
            ],
            'Inventaris' => [
                'route' => 'assets.index',
                'icon' => 'CubeTransparentIcon',
                'permissions' => ['view-assets'],
                'roles' => ['Ketua', 'Wakil Ketua', 'Bendahara', 'Sarana Prasarana', 'Kebersihan'],
            ],
            'Undangan' => [
                'route' => 'invitations.index',
                'icon' => 'EnvelopeIcon',
                'permissions' => ['view-invitations'],
                'roles' => ['Ketua', 'Wakil Ketua', 'Sekretaris', 'Peribadatan & Dakwah', 'Humas & Kemasyarakatan', 'Kepemudaan dan Remaja Masjid', 'Pemberdayaan Perempuan'],
            ],
            'Kegiatan' => [
                'route' => 'activities.index',
                'icon' => 'CalendarIcon',
                'permissions' => ['view-activities'],
                'roles' => ['all'],
            ],
            'Jamaah' => [
                'route' => 'jamaah.index',
                'icon' => 'UsersIcon',
                'permissions' => ['view-jamaah'],
                'roles' => ['Ketua', 'Wakil Ketua', 'Sekretaris', 'Humas & Kemasyarakatan', 'Kepemudaan dan Remaja Masjid', 'Pemberdayaan Perempuan'],
            ],
            'TPQ' => [
                'route' => 'tpq.students.index',
                'icon' => 'BookOpenIcon',
                'permissions' => ['view-tpq'],
                'roles' => ['Ketua', 'Wakil Ketua', 'Pendidikan'],
            ],
            'ZISWAF' => [
                'route' => 'ziswaf.donations.index',
                'icon' => 'CurrencyDollarIcon',
                'permissions' => ['view-ziswaf'],
                'roles' => ['Ketua', 'Wakil Ketua', 'Bendahara'],
            ],
            'Jadwal Jumat' => [
                'route' => 'jumah.index',
                'icon' => 'CalendarIcon',
                'permissions' => ['view-jumat'],
                'roles' => ['Ketua', 'Wakil Ketua', 'Sekretaris', 'Peribadatan & Dakwah'],
            ],
            'Pengumuman' => [
                'route' => 'announcements.index',
                'icon' => 'MegaphoneIcon',
                'permissions' => ['view-announcements'],
                'roles' => ['all'],
            ],
            'Laporan' => [
                'route' => 'reports.index',
                'icon' => 'DocumentReportIcon',
                'permissions' => ['view-all-reports'],
                'roles' => ['Ketua', 'Wakil Ketua', 'Sekretaris', 'Bendahara'],
            ],
            'Pengguna' => [
                'route' => 'users.index',
                'icon' => 'UserGroupIcon',
                'permissions' => ['manage-users'],
                'roles' => ['Ketua'],
            ],
        ];

        // Filter menus based on role
        if ($roleName === 'Ketua') {
            return $menus; // Ketua sees all menus
        }

        return collect($menus)->filter(function ($menu) use ($roleName) {
            return in_array('all', $menu['roles']) || in_array($roleName, $menu['roles']);
        })->all();
    }
}