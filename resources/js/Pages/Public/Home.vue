<script setup>
import PublicLayout from '@/Layouts/PublicLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { ClockIcon, MapPinIcon, PhoneIcon, CalendarIcon, MegaphoneIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  masjid_profile: Object,
  jadwal_sholat: Object,
  announcements: Array,
  upcoming_activities: Array,
  next_jumat: Object,
  finance_highlight: Object,
});

const formatRupiah = (num) => 'Rp ' + Number(num).toLocaleString('id-ID');

const sholatTimes = [
  { name: 'Subuh', key: 'subuh', icon: '' },
  { name: 'Dzuhur', key: 'dzuhur', icon: '☀️' },
  { name: 'Ashar', key: 'ashar', icon: '🌤️' },
  { name: 'Maghrib', key: 'maghrib', icon: '🌇' },
  { name: 'Isya', key: 'isya', icon: '🌙' },
];
</script>

<template>
  <PublicLayout>
    <Head title="Beranda - Baitul Hikmah" />

    <!-- Hero Section - HIJAU TUA dengan pattern -->
    <section class="bg-[#0d5c3e] text-white py-20 relative overflow-hidden">
      <!-- Pattern Background -->
      <div class="absolute inset-0 opacity-5" style="background-image: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\' viewBox=\'0 0 60 60\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      
      <div class="grid grid-cols-2 max-w-7xl mx-auto px-4 relative justify-items-stretch">
        <div class="max-w-3xl">
          <h1 class="text-5xl font-bold mb-4 leading-tight">Selamat Datang di<br>Masjid Baitul Hikmah</h1>
          <p class="text-xl opacity-90 mb-8 flex items-center gap-2">
            <MapPinIcon class="w-5 h-5" /> {{ masjid_profile.alamat }}
          </p>
          <div class="flex flex-wrap gap-3">
            <Link :href="route('public.schedule.pengajian')" class="bg-[#c9a96e] text-[#0d5c3e] px-6 py-3 rounded-lg font-semibold hover:bg-[#b8944f] transition shadow-lg">
              Lihat Jadwal
            </Link>
            <Link :href="route('public.finance')" class="bg-white/10 backdrop-blur border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition">
              Laporan Keuangan
            </Link>
          </div>
        </div>
        <div class="justify-items-center md:justify-items-end">
          <img src="/assets/logo-nu-resmi.png" />
        </div>
      </div>
    </section>

    <!-- Jadwal Sholat Hari Ini -->
    <section v-if="jadwal_sholat" class="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
      <div class="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
        <div class="flex items-center gap-3 mb-6">
          <ClockIcon class="w-6 h-6 text-[#0d5c3e]" />
          <h2 class="text-xl font-bold text-gray-800">Jadwal Sholat Hari Ini</h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div v-for="sholat in sholatTimes" :key="sholat.key" class="text-center p-4 bg-gradient-to-br from-[#0d5c3e]/5 to-[#0d5c3e]/10 rounded-xl border border-[#0d5c3e]/10">
            <div class="text-2xl mb-2">{{ sholat.icon }}</div>
            <p class="text-sm text-gray-600 font-medium">{{ sholat.name }}</p>
            <p class="text-2xl font-bold text-[#0d5c3e] mt-1">{{ jadwal_sholat[sholat.key] }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Highlight Keuangan -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-gray-800">Transparansi Keuangan</h2>
        <p class="text-gray-500 mt-2">Laporan {{ finance_highlight.bulan }}</p>
      </div>
      <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div class="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#0d5c3e]">
          <p class="text-gray-500 text-sm font-medium">Total Pemasukan</p>
          <p class="text-4xl font-bold text-[#0d5c3e] mt-2">{{ formatRupiah(finance_highlight.total_pemasukan) }}</p>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#c9a96e]">
          <p class="text-gray-500 text-sm font-medium">Total Pengeluaran</p>
          <p class="text-4xl font-bold text-[#c9a96e] mt-2">{{ formatRupiah(finance_highlight.total_pengeluaran) }}</p>
        </div>
      </div>
      <div class="text-center mt-8">
        <Link :href="route('public.finance')" class="inline-flex items-center gap-2 text-[#0d5c3e] font-semibold hover:underline">
          Lihat Laporan Lengkap →
        </Link>
      </div>
    </section>

    <!-- Kegiatan Mendatang -->
    <section class="bg-gray-100 py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-between mb-8">
          <div class="flex items-center gap-3">
            <CalendarIcon class="w-6 h-6 text-[#0d5c3e]" />
            <h2 class="text-2xl font-bold text-gray-800">Kegiatan Mendatang</h2>
          </div>
          <Link :href="route('public.schedule.pengajian')" class="text-[#0d5c3e] font-semibold hover:underline text-sm">Lihat Semua →</Link>
        </div>
        <div v-if="upcoming_activities.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="act in upcoming_activities" :key="act.id" class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition border border-gray-100">
            <div class="h-40 bg-gradient-to-br from-[#0d5c3e] to-[#1a7a52] flex items-center justify-center text-white text-4xl"></div>
            <div class="p-5">
              <span class="text-xs text-[#0d5c3e] font-semibold uppercase">{{ act.kategori }}</span>
              <h3 class="font-bold text-lg text-gray-800 mt-1">{{ act.nama }}</h3>
              <p class="text-sm text-gray-500 mt-2">{{ act.tanggal_mulai }}</p>
              <p class="text-sm text-gray-500 flex items-center gap-1 mt-1"><MapPinIcon class="w-4 h-4" /> {{ act.lokasi }}</p>
            </div>
          </div>
        </div>
        <p v-else class="text-gray-500 text-center py-12">Belum ada kegiatan terjadwal</p>
      </div>
    </section>

    <!-- Jadwal Khatib Jumat -->
    <section v-if="next_jumat" class="max-w-7xl mx-auto px-4 py-16">
      <div class="bg-gradient-to-r from-[#0d5c3e] to-[#1a7a52] rounded-2xl p-8 md:p-12 text-white">
        <div class="flex items-center gap-2 mb-4">
          <MegaphoneIcon class="w-6 h-6" />
          <span class="text-sm font-semibold uppercase tracking-wider">Khatib Jumat Berikutnya</span>
        </div>
        <h2 class="text-3xl font-bold mb-2">{{ next_jumat.tanggal_jumat }}</h2>
        <p class="text-xl opacity-90 mb-6">Tema: {{ next_jumat.tema || 'Belum ditentukan' }}</p>
        <div class="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
          <div>
            <p class="text-sm opacity-75">Khatib</p>
            <p class="font-bold text-lg">{{ next_jumat.khatib?.nama || '-' }}</p>
          </div>
          <div>
            <p class="text-sm opacity-75">Imam</p>
            <p class="font-bold text-lg">{{ next_jumat.imam?.nama || '-' }}</p>
          </div>
          <div>
            <p class="text-sm opacity-75">Muadzin</p>
            <p class="font-bold text-lg">{{ next_jumat.muadzin?.nama || '-' }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pengumuman -->
    <section class="max-w-7xl mx-auto px-4 pb-16">
      <div class="flex items-center justify-between mb-8">
        <div class="flex items-center gap-3">
          <MegaphoneIcon class="w-6 h-6 text-[#0d5c3e]" />
          <h2 class="text-2xl font-bold text-gray-800">Pengumuman Terbaru</h2>
        </div>
        <Link :href="route('public.announcements')" class="text-[#0d5c3e] font-semibold hover:underline text-sm">Lihat Semua →</Link>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="ann in announcements" :key="ann.id" class="bg-white rounded-xl shadow-sm p-6 border-l-4" :class="ann.tipe === 'urgent' ? 'border-red-500' : 'border-[#0d5c3e]'">
          <span v-if="ann.tipe === 'urgent'" class="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded mb-2">PENTING</span>
          <h3 class="font-bold text-lg text-gray-800 mb-2">{{ ann.judul }}</h3>
          <p class="text-sm text-gray-600 line-clamp-3">{{ ann.isi }}</p>
          <p class="text-xs text-gray-400 mt-4">{{ ann.published_at }}</p>
        </div>
      </div>
    </section>
  </PublicLayout>
</template>