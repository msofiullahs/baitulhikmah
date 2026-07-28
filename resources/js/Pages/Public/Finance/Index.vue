<script setup>
import PublicLayout from '@/Layouts/PublicLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { ref, computed } from 'vue';
import { ArrowDownTrayIcon } from '@heroicons/vue/24/outline';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement,
} from 'chart.js';
import { Bar, Doughnut } from 'vue-chartjs';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const props = defineProps({
  stats: Object,
  monthly_chart: Object,
  categories_breakdown: Object,
  recent_transactions: Array,
  filters: Object,
});

const formatRupiah = (num) => 'Rp ' + Number(num).toLocaleString('id-ID');

const selectedYear = ref(props.filters.selected_year);
const selectedMonth = ref(props.filters.selected_month);

const applyFilter = () => {
  router.get(route('public.finance'), {
    year: selectedYear.value,
    month: selectedMonth.value,
  }, { preserveState: true });
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { position: 'top' } },
};

const barChartData = computed(() => ({
  labels: Object.keys(props.monthly_chart),
  datasets: [
    { label: 'Pemasukan', backgroundColor: '#0d5c3e', data: Object.values(props.monthly_chart).map(v => v.pemasukan) },
    { label: 'Pengeluaran', backgroundColor: '#c9a96e', data: Object.values(props.monthly_chart).map(v => v.pengeluaran) },
  ],
}));

const pemasukanChart = computed(() => ({
  labels: props.categories_breakdown.pemasukan.map(c => c.nama),
  datasets: [{ data: props.categories_breakdown.pemasukan.map(c => c.total), backgroundColor: props.categories_breakdown.pemasukan.map(c => c.warna) }],
}));

const pengeluaranChart = computed(() => ({
  labels: props.categories_breakdown.pengeluaran.map(c => c.nama),
  datasets: [{ data: props.categories_breakdown.pengeluaran.map(c => c.total), backgroundColor: props.categories_breakdown.pengeluaran.map(c => c.warna) }],
}));
</script>

<template>
  <PublicLayout>
    <Head title="Laporan Keuangan - Baitul Hikmah" />

    <!-- Header - HIJAU TUA -->
    <section class="bg-[#0d5c3e] text-white py-12">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-4xl font-bold mb-2">Laporan Keuangan</h1>
        <p class="opacity-90">Transparansi pengelolaan dana masjid untuk {{ stats.bulan }} {{ stats.tahun }}</p>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 -mt-8">
      <!-- Filter -->
      <div class="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
        <div class="flex flex-col md:flex-row gap-4 items-end">
          <div class="flex-1">
            <label class="block text-sm font-medium text-gray-700 mb-1">Tahun</label>
            <select v-model="selectedYear" @change="applyFilter" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d5c3e] outline-none">
              <option v-for="y in filters.years" :key="y" :value="y">{{ y }}</option>
            </select>
          </div>
          <div class="flex-1">
            <label class="block text-sm font-medium text-gray-700 mb-1">Bulan</label>
            <select v-model="selectedMonth" @change="applyFilter" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d5c3e] outline-none">
              <option :value="null">Semua Bulan</option>
              <option v-for="(name, idx) in filters.months" :key="idx" :value="parseInt(idx)">{{ name }}</option>
            </select>
          </div>
          <Link :href="route('public.finance.download', { year: selectedYear, month: selectedMonth })" class="bg-[#c9a96e] text-[#0d5c3e] px-6 py-2 rounded-lg font-semibold hover:bg-[#b8944f] transition flex items-center gap-2">
            <ArrowDownTrayIcon class="w-5 h-5" /> Download PDF
          </Link>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#0d5c3e]">
          <p class="text-sm text-gray-500">Total Pemasukan</p>
          <p class="text-3xl font-bold text-[#0d5c3e] mt-1">{{ formatRupiah(stats.total_pemasukan) }}</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#c9a96e]">
          <p class="text-sm text-gray-500">Total Pengeluaran</p>
          <p class="text-3xl font-bold text-[#c9a96e] mt-1">{{ formatRupiah(stats.total_pengeluaran) }}</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-gray-600">
          <p class="text-sm text-gray-500">Saldo</p>
          <p class="text-3xl font-bold text-gray-700 mt-1">{{ formatRupiah(stats.saldo) }}</p>
        </div>
      </div>

      <!-- Charts -->
      <div class="grid lg:grid-cols-3 gap-6 mb-8">
        <div class="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 class="font-bold text-lg mb-4 text-gray-800">Grafik Bulanan {{ stats.tahun }}</h2>
          <div class="h-80">
            <Bar :data="barChartData" :options="chartOptions" />
          </div>
        </div>
        <div class="space-y-6">
          <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 class="font-bold text-sm text-gray-700 mb-3">Pemasukan per Kategori</h3>
            <div class="h-48">
              <Doughnut v-if="categories_breakdown.pemasukan.length" :data="pemasukanChart" :options="{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }" />
              <p v-else class="text-center text-gray-400 text-sm py-8">Tidak ada data</p>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 class="font-bold text-sm text-gray-700 mb-3">Pengeluaran per Kategori</h3>
            <div class="h-48">
              <Doughnut v-if="categories_breakdown.pengeluaran.length" :data="pengeluaranChart" :options="{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }" />
              <p v-else class="text-center text-gray-400 text-sm py-8">Tidak ada data</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Transactions -->
      <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h2 class="font-bold text-lg mb-4 text-gray-800">Riwayat Transaksi</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                <th class="px-4 py-3 text-left">Tanggal</th>
                <th class="px-4 py-3 text-left">Kategori</th>
                <th class="px-4 py-3 text-left">Keterangan</th>
                <th class="px-4 py-3 text-right">Jumlah</th>
              </tr>
            </thead>
            <tbody class="divide-y">
              <tr v-for="trx in recent_transactions" :key="trx.id" class="hover:bg-gray-50">
                <td class="px-4 py-3">{{ trx.tanggal }}</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 rounded-full text-xs font-semibold" :style="{ backgroundColor: trx.kategori.warna + '20', color: trx.kategori.warna }">
                    {{ trx.kategori.nama }}
                  </span>
                </td>
                <td class="px-4 py-3 text-gray-700">{{ trx.keterangan }}</td>
                <td class="px-4 py-3 text-right font-semibold" :class="trx.jenis === 'pemasukan' ? 'text-[#0d5c3e]' : 'text-[#c9a96e]'">
                  {{ trx.jenis === 'pemasukan' ? '+' : '-' }} {{ formatRupiah(trx.jumlah) }}
                </td>
              </tr>
              <tr v-if="recent_transactions.length === 0">
                <td colspan="4" class="px-4 py-12 text-center text-gray-500">Tidak ada transaksi pada periode ini</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </PublicLayout>
</template>