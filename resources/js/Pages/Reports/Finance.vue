<script setup>
import { ref } from 'vue';
import { Head, router } from '@inertiajs/vue3';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import { DownloadIcon, PrinterIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  transactions: Object,
  summary: Object,
  filters: Object,
  categories: Array,
});

const startDate = ref(props.filters?.startDate || '');
const endDate = ref(props.filters?.endDate || '');
const type = ref(props.filters?.type || 'all');
const category = ref(props.filters?.category || 'all');
const kasBox = ref(props.filters?.kas_box || 'all');

const filterReports = () => {
  router.get(route('reports.finance'), {
    start_date: startDate.value,
    end_date: endDate.value,
    type: type.value,
    category: category.value,
    kas_box: kasBox.value,
  }, { preserveState: true });
};

const exportToExcel = () => {
  // TODO: Implement Excel export
  alert('Fitur export Excel akan segera hadir');
};

const printReport = () => {
  window.print();
};
</script>

<template>
  <AdminLayout>
    <Head title="Laporan Keuangan" />

    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Laporan Keuangan</h1>
        <p class="text-gray-500 text-sm">Analisis pemasukan dan pengeluaran masjid</p>
      </div>
      <div class="flex gap-2">
        <SecondaryButton @click="exportToExcel">
          <DownloadIcon class="w-5 h-5 mr-2 inline" /> Export Excel
        </SecondaryButton>
        <PrimaryButton @click="printReport">
          <PrinterIcon class="w-5 h-5 mr-2 inline" /> Cetak
        </PrimaryButton>
      </div>
    </div>

    <!-- Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="bg-green-50 rounded-xl p-4 border border-green-200">
        <div class="text-sm text-green-600 mb-1">Total Pemasukan</div>
        <div class="text-2xl font-bold text-green-700">Rp {{ (summary?.total_pemasukan || 0).toLocaleString('id-ID') }}</div>
      </div>
      <div class="bg-red-50 rounded-xl p-4 border border-red-200">
        <div class="text-sm text-red-600 mb-1">Total Pengeluaran</div>
        <div class="text-2xl font-bold text-red-700">Rp {{ (summary?.total_pengeluaran || 0).toLocaleString('id-ID') }}</div>
      </div>
      <div :class="summary?.saldo >= 0 ? 'bg-blue-50 border-blue-200' : 'bg-orange-50 border-orange-200'" class="rounded-xl p-4 border">
        <div :class="summary?.saldo >= 0 ? 'text-blue-600' : 'text-orange-600'" class="text-sm mb-1">Saldo</div>
        <div :class="summary?.saldo >= 0 ? 'text-blue-700' : 'text-orange-700'" class="text-2xl font-bold">Rp {{ (summary?.saldo || 0).toLocaleString('id-ID') }}</div>
      </div>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-3">
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Tanggal Mulai</label>
          <input v-model="startDate" type="date" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Tanggal Akhir</label>
          <input v-model="endDate" type="date" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Jenis</label>
          <select v-model="type" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
            <option value="all">Semua</option>
            <option value="pemasukan">Pemasukan</option>
            <option value="pengeluaran">Pengeluaran</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Kategori</label>
          <select v-model="category" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
            <option value="all">Semua</option>
            <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.nama }}</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Kas Box</label>
          <select v-model="kasBox" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
            <option value="all">Semua</option>
            <option value="umum">Kas Umum</option>
            <option value="tpq">Kas TPQ</option>
            <option value="pembangunan">Kas Pembangunan</option>
          </select>
        </div>
      </div>
      <div class="mt-3 flex justify-end">
        <PrimaryButton @click="filterReports">Filter</PrimaryButton>
      </div>
    </div>

    <!-- Transactions Table -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th class="px-4 py-3 text-left">Tanggal</th>
            <th class="px-4 py-3 text-left">No. Transaksi</th>
            <th class="px-4 py-3 text-left">Keterangan</th>
            <th class="px-4 py-3 text-left">Kategori</th>
            <th class="px-4 py-3 text-center">Kas Box</th>
            <th class="px-4 py-3 text-right">Jumlah</th>
            <th class="px-4 py-3 text-center">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="trx in transactions.data" :key="trx.id" class="hover:bg-gray-50">
            <td class="px-4 py-3">{{ new Date(trx.tanggal).toLocaleDateString('id-ID') }}</td>
            <td class="px-4 py-3 font-mono text-xs">{{ trx.no_transaksi }}</td>
            <td class="px-4 py-3">{{ trx.keterangan }}</td>
            <td class="px-4 py-3">
              <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{{ trx.category?.nama || '-' }}</span>
            </td>
            <td class="px-4 py-3 text-center">
              <span :class="{
                'bg-blue-100 text-blue-800': trx.kas_box === 'umum',
                'bg-green-100 text-green-800': trx.kas_box === 'tpq',
                'bg-purple-100 text-purple-800': trx.kas_box === 'pembangunan'
              }" class="px-2 py-1 text-xs rounded">
                {{ trx.kas_box }}
              </span>
            </td>
            <td class="px-4 py-3 text-right font-semibold" :class="trx.jenis === 'pemasukan' ? 'text-green-600' : 'text-red-600'">
              {{ trx.jenis === 'pemasukan' ? '+' : '-' }} Rp {{ trx.jumlah.toLocaleString('id-ID') }}
            </td>
            <td class="px-4 py-3 text-center">
              <span :class="{
                'bg-green-100 text-green-800': trx.status === 'approved',
                'bg-yellow-100 text-yellow-800': trx.status === 'pending',
                'bg-red-100 text-red-800': trx.status === 'rejected'
              }" class="px-2 py-1 text-xs rounded">
                {{ trx.status }}
              </span>
            </td>
          </tr>
          <tr v-if="!transactions.data || transactions.data.length === 0">
            <td colspan="7" class="px-4 py-12 text-center text-gray-500">Tidak ada data transaksi</td>
          </tr>
        </tbody>
      </table>
      <div class="px-4 py-3 border-t">
        <Pagination :links="transactions.links" />
      </div>
    </div>
  </AdminLayout>
</template>

<style scoped>
@media print {
  .no-print { display: none !important; }
}
</style>
