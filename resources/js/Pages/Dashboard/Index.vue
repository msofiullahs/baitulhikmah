<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { Head } from '@inertiajs/vue3';
import {
  CurrencyDollarIcon, ArrowTrendingUpIcon,
  ArrowTrendingDownIcon, UsersIcon
} from '@heroicons/vue/24/outline';
import StatCard from '@/Components/StatCard.vue';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar } from 'vue-chartjs';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const props = defineProps({
  stats: Object,
  recent_transactions: Array,
  upcoming_activities: Array,
  chart_data: Object,
});

const formatRupiah = (num) => 'Rp ' + Number(num).toLocaleString('id-ID');

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Grafik Keuangan 2026' },
  },
};

const chartData = {
  labels: props.chart_data.labels,
  datasets: [
    {
      label: 'Pemasukan',
      backgroundColor: '#10b981',
      data: props.chart_data.labels.map((_, i) => props.chart_data.pemasukan[i + 1] || 0),
    },
    {
      label: 'Pengeluaran',
      backgroundColor: '#ef4444',
      data: props.chart_data.labels.map((_, i) => props.chart_data.pengeluaran[i + 1] || 0),
    },
  ],
};
</script>

<template>
  <AdminLayout>
    <Head title="Dashboard" />

    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Dashboard</h1>
      <p class="text-gray-500 text-sm">Ringkasan kondisi masjid hari ini</p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard title="Total Jamaah Aktif" :value="stats.total_jamaah" :icon="UsersIcon" color="primary" />
      <StatCard title="Saldo Kas" :value="formatRupiah(stats.saldo_kas)" :icon="CurrencyDollarIcon" color="blue" />
      <StatCard title="Pemasukan Bulan Ini" :value="formatRupiah(stats.pemasukan_bulan_ini)" :icon="ArrowTrendingUpIcon" color="green" />
      <StatCard title="Pengeluaran Bulan Ini" :value="formatRupiah(stats.pengeluaran_bulan_ini)" :icon="ArrowTrendingDownIcon" color="red" />
    </div>

    <!-- Chart & Recent Transactions -->
    <div class="grid lg:grid-cols-3 gap-6 mb-8">
      <div class="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
        <h2 class="font-bold text-lg mb-4">Grafik Keuangan</h2>
        <div class="h-80">
          <Bar :data="chartData" :options="chartOptions" />
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="font-bold text-lg mb-4">Kegiatan Mendatang</h2>
        <div v-if="upcoming_activities.length" class="space-y-3">
          <div v-for="act in upcoming_activities" :key="act.id" class="border-l-4 border-primary pl-3 py-2">
            <p class="font-semibold text-gray-800 text-sm">{{ act.nama }}</p>
            <p class="text-xs text-gray-500">{{ act.tanggal_mulai }}</p>
            <p class="text-xs text-gray-500">{{ act.lokasi }}</p>
          </div>
        </div>
        <p v-else class="text-gray-500 text-sm">Tidak ada kegiatan mendatang</p>
      </div>
    </div>

    <!-- Recent Transactions -->
    <div class="bg-white rounded-xl shadow-sm p-6">
      <h2 class="font-bold text-lg mb-4">Transaksi Terbaru</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th class="px-4 py-3 text-left">No. Transaksi</th>
              <th class="px-4 py-3 text-left">Tanggal</th>
              <th class="px-4 py-3 text-left">Kategori</th>
              <th class="px-4 py-3 text-left">Keterangan</th>
              <th class="px-4 py-3 text-right">Jumlah</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr v-for="trx in recent_transactions" :key="trx.id" class="hover:bg-gray-50">
              <td class="px-4 py-3 font-mono text-xs">{{ trx.no_transaksi }}</td>
              <td class="px-4 py-3">{{ trx.tanggal }}</td>
              <td class="px-4 py-3">
                <span class="px-2 py-1 rounded-full text-xs font-semibold" :class="trx.category?.tipe === 'pemasukan' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
                  {{ trx.category?.nama }}
                </span>
              </td>
              <td class="px-4 py-3 text-gray-700">{{ trx.keterangan }}</td>
              <td class="px-4 py-3 text-right font-semibold" :class="trx.jenis === 'pemasukan' ? 'text-green-600' : 'text-red-600'">
                {{ trx.jenis === 'pemasukan' ? '+' : '-' }} {{ formatRupiah(trx.jumlah) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AdminLayout>
</template>