<script setup>
import { ref } from 'vue';
import { Head, router } from '@inertiajs/vue3';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import { GiftIcon, PrinterIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  donations: Object,
  summary: Object,
  filters: Object,
});

const startDate = ref(props.filters?.startDate || '');
const endDate = ref(props.filters?.endDate || '');
const type = ref(props.filters?.type || 'all');

const filterReports = () => {
  router.get(route('reports.ziswaf'), {
    start_date: startDate.value,
    end_date: endDate.value,
    type: type.value,
  }, { preserveState: true });
};

const printReport = () => {
  window.print();
};
</script>

<template>
  <AdminLayout>
    <Head title="Laporan ZISWAF" />

    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Laporan ZISWAF</h1>
        <p class="text-gray-500 text-sm">Zakat, Infaq, Sedekah, dan Wakaf</p>
      </div>
      <div class="flex gap-2">
        <SecondaryButton @click="printReport">
          <PrinterIcon class="w-5 h-5 mr-2 inline" /> Cetak
        </SecondaryButton>
      </div>
    </div>

    <!-- Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
      <div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-yellow-500">
        <div class="text-sm text-gray-500 mb-1">Total Donasi</div>
        <div class="text-lg font-bold text-gray-800">Rp {{ (summary?.total || 0).toLocaleString('id-ID') }}</div>
      </div>
      <div v-for="item in summary?.by_type" :key="item.jenis" class="bg-white rounded-xl shadow-sm p-4 border-l-4" :class="{
        'border-green-500': item.jenis === 'zakat_fitrah',
        'border-blue-500': item.jenis === 'zakat_maal',
        'border-purple-500': item.jenis === 'infaq',
        'border-pink-500': item.jenis === 'sedekah',
        'border-indigo-500': item.jenis === 'wakaf'
      }">
        <div class="text-sm text-gray-500 mb-1 capitalize">{{ item.jenis.replace('_', ' ') }}</div>
        <div class="text-lg font-bold text-gray-800">Rp {{ (item.total || 0).toLocaleString('id-ID') }}</div>
        <div class="text-xs text-gray-400">{{ item.count }} transaksi</div>
      </div>
    </div>

    <!-- Monthly Trend -->
    <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h3 class="font-semibold text-gray-800 mb-4">Tren Donasi Bulanan</h3>
      <div class="space-y-3">
        <div v-for="item in summary?.by_month" :key="item.month" class="flex items-center justify-between">
          <span class="text-gray-600">{{ new Date(item.month + '-01').toLocaleDateString('id-ID', { year: 'numeric', month: 'long' }) }}</span>
          <div class="flex items-center gap-3">
            <div class="w-64 bg-gray-200 rounded-full h-3">
              <div class="bg-yellow-500 h-3 rounded-full" :style="{ width: `${(item.total / Math.max(...summary.by_month.map(m => m.total))) * 100}%` }"></div>
            </div>
            <span class="font-semibold text-gray-800 w-32 text-right">Rp {{ (item.total || 0).toLocaleString('id-ID') }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Tanggal Mulai</label>
          <input v-model="startDate" type="date" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Tanggal Akhir</label>
          <input v-model="endDate" type="date" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Jenis ZISWAF</label>
          <select v-model="type" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
            <option value="all">Semua</option>
            <option value="zakat_fitrah">Zakat Fitrah</option>
            <option value="zakat_maal">Zakat Maal</option>
            <option value="infaq">Infaq</option>
            <option value="sedekah">Sedekah</option>
            <option value="wakaf">Wakaf</option>
          </select>
        </div>
      </div>
      <div class="mt-3 flex justify-end">
        <PrimaryButton @click="filterReports">Filter</PrimaryButton>
      </div>
    </div>

    <!-- Donations Table -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th class="px-4 py-3 text-left">Tanggal</th>
            <th class="px-4 py-3 text-left">Jenis</th>
            <th class="px-4 py-3 text-left">Donatur</th>
            <th class="px-4 py-3 text-left">Metode</th>
            <th class="px-4 py-3 text-right">Jumlah</th>
            <th class="px-4 py-3 text-center">Keterangan</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="donation in donations.data" :key="donation.id" class="hover:bg-gray-50">
            <td class="px-4 py-3">{{ new Date(donation.tanggal).toLocaleDateString('id-ID') }}</td>
            <td class="px-4 py-3">
              <span :class="{
                'bg-green-100 text-green-800': donation.jenis === 'zakat_fitrah',
                'bg-blue-100 text-blue-800': donation.jenis === 'zakat_maal',
                'bg-purple-100 text-purple-800': donation.jenis === 'infaq',
                'bg-pink-100 text-pink-800': donation.jenis === 'sedekah',
                'bg-indigo-100 text-indigo-800': donation.jenis === 'wakaf'
              }" class="px-2 py-1 text-xs rounded capitalize">
                {{ donation.jenis.replace('_', ' ') }}
              </span>
            </td>
            <td class="px-4 py-3">
              <div v-if="donation.is_anonymous" class="text-gray-400 italic">Anonim</div>
              <div v-else>
                <div class="font-medium">{{ donation.nama_donatur || '-' }}</div>
                <div class="text-xs text-gray-500">{{ donation.no_hp_donatur || '-' }}</div>
              </div>
            </td>
            <td class="px-4 py-3 capitalize">{{ donation.metode || 'tunai' }}</td>
            <td class="px-4 py-3 text-right font-semibold text-green-600">+ Rp {{ (donation.jumlah || 0).toLocaleString('id-ID') }}</td>
            <td class="px-4 py-3 text-center text-sm">{{ donation.catatan || '-' }}</td>
          </tr>
          <tr v-if="!donations.data || donations.data.length === 0">
            <td colspan="6" class="px-4 py-12 text-center text-gray-500">
              <GiftIcon class="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>Tidak ada data donasi</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="px-4 py-3 border-t">
        <Pagination :links="donations.links" />
      </div>
    </div>
  </AdminLayout>
</template>

<style scoped>
@media print {
  .no-print { display: none !important; }
}
</style>
