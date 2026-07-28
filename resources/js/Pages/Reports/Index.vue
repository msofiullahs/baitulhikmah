<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { DocumentTextIcon, CurrencyDollarIcon, UserGroupIcon, CalendarDaysIcon, GiftIcon, BuildingLibraryIcon } from '@heroicons/vue/24/outline';

defineProps({
  summary: Object,
});

const reportMenus = [
  {
    name: 'Laporan Keuangan',
    description: 'Pemasukan, pengeluaran, dan neraca keuangan',
    icon: CurrencyDollarIcon,
    route: 'reports.finance',
    color: 'bg-green-500'
  },
  {
    name: 'Laporan Jamaah',
    description: 'Data demografi dan statistik jamaah',
    icon: UserGroupIcon,
    route: 'reports.jamaah',
    color: 'bg-blue-500'
  },
  {
    name: 'Laporan Kegiatan',
    description: 'Aktivitas dan event masjid',
    icon: CalendarDaysIcon,
    route: 'reports.activities',
    color: 'bg-purple-500'
  },
  {
    name: 'Laporan ZISWAF',
    description: 'Zakat, infaq, sedekah, dan wakaf',
    icon: GiftIcon,
    route: 'reports.ziswaf',
    color: 'bg-yellow-500'
  },
  {
    name: 'Laporan Aset',
    description: 'Inventaris dan nilai buku aset',
    icon: BuildingLibraryIcon,
    route: 'reports.assets',
    color: 'bg-gray-500'
  }
];
</script>

<template>
  <AdminLayout>
    <Head title="Laporan" />

    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Laporan</h1>
      <p class="text-gray-500 text-sm">Pusat laporan dan analisis data masjid</p>
    </div>

    <!-- Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      <div class="bg-white rounded-xl shadow-sm p-4">
        <div class="text-sm text-gray-500 mb-1">Total Jamaah Aktif</div>
        <div class="text-2xl font-bold text-gray-800">{{ summary?.total_jamaah || 0 }}</div>
      </div>
      <div class="bg-white rounded-xl shadow-sm p-4">
        <div class="text-sm text-gray-500 mb-1">Kegiatan Bulan Ini</div>
        <div class="text-2xl font-bold text-gray-800">{{ summary?.total_kegiatan || 0 }}</div>
      </div>
      <div class="bg-white rounded-xl shadow-sm p-4">
        <div class="text-sm text-gray-500 mb-1">Pemasukan Bulan Ini</div>
        <div class="text-lg font-bold text-green-600">Rp {{ (summary?.pemasukan_bulan_ini || 0).toLocaleString('id-ID') }}</div>
      </div>
      <div class="bg-white rounded-xl shadow-sm p-4">
        <div class="text-sm text-gray-500 mb-1">Pengeluaran Bulan Ini</div>
        <div class="text-lg font-bold text-red-600">Rp {{ (summary?.pengeluaran_bulan_ini || 0).toLocaleString('id-ID') }}</div>
      </div>
      <div class="bg-white rounded-xl shadow-sm p-4">
        <div class="text-sm text-gray-500 mb-1">Total Donasi</div>
        <div class="text-lg font-bold text-blue-600">Rp {{ (summary?.total_donasi || 0).toLocaleString('id-ID') }}</div>
      </div>
    </div>

    <!-- Report Menu Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link v-for="menu in reportMenus" :key="menu.name" :route="menu.route" class="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
        <div class="flex items-start gap-4">
          <div :class="`${menu.color} p-3 rounded-lg`">
            <component :is="menu.icon" class="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 class="font-semibold text-gray-800 text-lg">{{ menu.name }}</h3>
            <p class="text-gray-500 text-sm mt-1">{{ menu.description }}</p>
            <span class="inline-block mt-3 text-primary text-sm font-medium hover:underline">Buka Laporan &rarr;</span>
          </div>
        </div>
      </Link>
    </div>
  </AdminLayout>
</template>
