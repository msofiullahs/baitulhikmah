<script setup>
import { ref } from 'vue';
import { Head, router } from '@inertiajs/vue3';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import { BuildingLibraryIcon, PrinterIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  assets: Object,
  summary: Object,
  filters: Object,
});

const condition = ref(props.filters?.condition || 'all');
const category = ref(props.filters?.category || 'all');

const filterReports = () => {
  router.get(route('reports.assets'), {
    condition: condition.value,
    category: category.value,
  }, { preserveState: true });
};

const printReport = () => {
  window.print();
};
</script>

<template>
  <AdminLayout>
    <Head title="Laporan Aset" />

    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Laporan Aset & Inventaris</h1>
        <p class="text-gray-500 text-sm">Nilai buku dan kondisi aset masjid</p>
      </div>
      <div class="flex gap-2">
        <SecondaryButton @click="printReport">
          <PrinterIcon class="w-5 h-5 mr-2 inline" /> Cetak
        </SecondaryButton>
      </div>
    </div>

    <!-- Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-gray-500">
        <div class="text-sm text-gray-500 mb-1">Total Aset</div>
        <div class="text-2xl font-bold text-gray-800">{{ summary?.total_aset || 0 }}</div>
      </div>
      <div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-green-500">
        <div class="text-sm text-gray-500 mb-1">Nilai Buku Total</div>
        <div class="text-lg font-bold text-green-600">Rp {{ (summary?.nilai_buku || 0).toLocaleString('id-ID') }}</div>
      </div>
      <div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-blue-500">
        <div class="text-sm text-gray-500 mb-1">Kondisi Baik</div>
        <div class="text-2xl font-bold text-blue-600">{{ summary?.by_condition?.find(c => c.kondisi === 'baik')?.count || 0 }}</div>
      </div>
      <div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-red-500">
        <div class="text-sm text-gray-500 mb-1">Perlu Perbaikan</div>
        <div class="text-2xl font-bold text-red-600">{{ (summary?.by_condition?.find(c => c.kondisi === 'rusak_ringan')?.count || 0) + (summary?.by_condition?.find(c => c.kondisi === 'rusak_berat')?.count || 0) }}</div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <!-- By Condition -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h3 class="font-semibold text-gray-800 mb-4">Aset Berdasarkan Kondisi</h3>
        <div class="space-y-3">
          <div v-for="item in summary?.by_condition" :key="item.kondisi" class="flex items-center justify-between">
            <span class="text-gray-600 capitalize">{{ item.kondisi.replace('_', ' ') }}</span>
            <div class="flex items-center gap-3">
              <div class="w-40 bg-gray-200 rounded-full h-2">
                <div :class="{
                  'bg-green-500': item.kondisi === 'baik',
                  'bg-yellow-500': item.kondisi === 'rusak_ringan',
                  'bg-red-500': item.kondisi === 'rusak_berat'
                }" class="h-2 rounded-full" :style="{ width: `${(item.count / summary.total_aset) * 100}%` }"></div>
              </div>
              <span class="font-semibold text-gray-800 w-12 text-right">{{ item.count }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- By Category -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h3 class="font-semibold text-gray-800 mb-4">Aset Berdasarkan Kategori</h3>
        <div class="space-y-3">
          <div v-for="item in summary?.by_category" :key="item.kategori" class="flex items-center justify-between">
            <span class="text-gray-600 capitalize">{{ item.kategori }}</span>
            <div class="flex items-center gap-3">
              <div class="w-40 bg-gray-200 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full" :style="{ width: `${(item.count / summary.total_aset) * 100}%` }"></div>
              </div>
              <span class="font-semibold text-gray-800 w-12 text-right">{{ item.count }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Kondisi</label>
          <select v-model="condition" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
            <option value="all">Semua</option>
            <option value="baik">Baik</option>
            <option value="rusak_ringan">Rusak Ringan</option>
            <option value="rusak_berat">Rusak Berat</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Kategori</label>
          <select v-model="category" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
            <option value="all">Semua</option>
            <option value="elektronik">Elektronik</option>
            <option value="furniture">Furniture</option>
            <option value="bangunan">Bangunan</option>
            <option value="kendaraan">Kendaraan</option>
            <option value="lainnya">Lainnya</option>
          </select>
        </div>
      </div>
      <div class="mt-3 flex justify-end">
        <PrimaryButton @click="filterReports">Filter</PrimaryButton>
      </div>
    </div>

    <!-- Assets Table -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th class="px-4 py-3 text-left">Kode</th>
            <th class="px-4 py-3 text-left">Nama Aset</th>
            <th class="px-4 py-3 text-left">Kategori</th>
            <th class="px-4 py-3 text-left">Lokasi</th>
            <th class="px-4 py-3 text-center">Kondisi</th>
            <th class="px-4 py-3 text-right">Nilai Buku</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="asset in assets.data" :key="asset.id" class="hover:bg-gray-50">
            <td class="px-4 py-3 font-mono text-xs">{{ asset.kode_aset }}</td>
            <td class="px-4 py-3 font-medium">{{ asset.nama }}</td>
            <td class="px-4 py-3">
              <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded capitalize">{{ asset.kategori }}</span>
            </td>
            <td class="px-4 py-3">{{ asset.lokasi || '-' }}</td>
            <td class="px-4 py-3 text-center">
              <span :class="{
                'bg-green-100 text-green-800': asset.kondisi === 'baik',
                'bg-yellow-100 text-yellow-800': asset.kondisi === 'rusak_ringan',
                'bg-red-100 text-red-800': asset.kondisi === 'rusak_berat'
              }" class="px-2 py-1 text-xs rounded capitalize">
                {{ asset.kondisi.replace('_', ' ') }}
              </span>
            </td>
            <td class="px-4 py-3 text-right font-semibold">Rp {{ (asset.nilai_sisa || 0).toLocaleString('id-ID') }}</td>
          </tr>
          <tr v-if="!assets.data || assets.data.length === 0">
            <td colspan="6" class="px-4 py-12 text-center text-gray-500">
              <BuildingLibraryIcon class="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>Tidak ada data aset</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="px-4 py-3 border-t">
        <Pagination :links="assets.links" />
      </div>
    </div>
  </AdminLayout>
</template>

<style scoped>
@media print {
  .no-print { display: none !important; }
}
</style>
