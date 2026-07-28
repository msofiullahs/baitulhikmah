<script setup>
import { ref } from 'vue';
import { Head, router } from '@inertiajs/vue3';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import { UserGroupIcon, DownloadIcon, PrinterIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  jamaahs: Object,
  demographics: Object,
  filters: Object,
  categories: Array,
});

const status = ref(props.filters?.status || 'all');
const gender = ref(props.filters?.gender || 'all');
const category = ref(props.filters?.category || 'all');

const filterReports = () => {
  router.get(route('reports.jamaah'), {
    status: status.value,
    gender: gender.value,
    category: category.value,
  }, { preserveState: true });
};

const printReport = () => {
  window.print();
};
</script>

<template>
  <AdminLayout>
    <Head title="Laporan Jamaah" />

    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Laporan Jamaah</h1>
        <p class="text-gray-500 text-sm">Data demografi dan statistik jamaah masjid</p>
      </div>
      <div class="flex gap-2">
        <SecondaryButton @click="printReport">
          <PrinterIcon class="w-5 h-5 mr-2 inline" /> Cetak
        </SecondaryButton>
      </div>
    </div>

    <!-- Demographics Summary -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-blue-500">
        <div class="text-sm text-gray-500 mb-1">Total Jamaah</div>
        <div class="text-2xl font-bold text-gray-800">{{ demographics?.total || 0 }}</div>
      </div>
      <div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-green-500">
        <div class="text-sm text-gray-500 mb-1">Jamaah Aktif</div>
        <div class="text-2xl font-bold text-green-600">{{ demographics?.aktif || 0 }}</div>
      </div>
      <div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-indigo-500">
        <div class="text-sm text-gray-500 mb-1">Laki-laki</div>
        <div class="text-2xl font-bold text-indigo-600">{{ demographics?.laki_laki || 0 }}</div>
      </div>
      <div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-pink-500">
        <div class="text-sm text-gray-500 mb-1">Perempuan</div>
        <div class="text-2xl font-bold text-pink-600">{{ demographics?.perempuan || 0 }}</div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <!-- By Status -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h3 class="font-semibold text-gray-800 mb-4">Distribusi Berdasarkan Status</h3>
        <div class="space-y-3">
          <div v-for="item in demographics?.by_status" :key="item.status" class="flex items-center justify-between">
            <span class="text-gray-600 capitalize">{{ item.status }}</span>
            <div class="flex items-center gap-3">
              <div class="w-48 bg-gray-200 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full" :style="{ width: `${(item.count / demographics.total) * 100}%` }"></div>
              </div>
              <span class="font-semibold text-gray-800 w-12 text-right">{{ item.count }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- By Category -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h3 class="font-semibold text-gray-800 mb-4">Distribusi Berdasarkan Kategori</h3>
        <div class="space-y-3">
          <div v-for="item in demographics?.by_category" :key="item.nama" class="flex items-center justify-between">
            <span class="text-gray-600">{{ item.nama }}</span>
            <div class="flex items-center gap-3">
              <div class="w-48 bg-gray-200 rounded-full h-2">
                <div class="bg-green-500 h-2 rounded-full" :style="{ width: `${(item.count / demographics.total) * 100}%` }"></div>
              </div>
              <span class="font-semibold text-gray-800 w-12 text-right">{{ item.count }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Status</label>
          <select v-model="status" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
            <option value="all">Semua</option>
            <option value="aktif">Aktif</option>
            <option value="pindah">Pindah</option>
            <option value="meninggal">Meninggal</option>
            <option value="nonaktif">Nonaktif</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Jenis Kelamin</label>
          <select v-model="gender" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
            <option value="all">Semua</option>
            <option value="L">Laki-laki</option>
            <option value="P">Perempuan</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Kategori</label>
          <select v-model="category" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
            <option value="all">Semua</option>
            <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.nama }}</option>
          </select>
        </div>
      </div>
      <div class="mt-3 flex justify-end">
        <PrimaryButton @click="filterReports">Filter</PrimaryButton>
      </div>
    </div>

    <!-- Data Table -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th class="px-4 py-3 text-left">Nama</th>
            <th class="px-4 py-3 text-left">Jenis Kelamin</th>
            <th class="px-4 py-3 text-left">Status</th>
            <th class="px-4 py-3 text-left">Kontak</th>
            <th class="px-4 py-3 text-left">Kategori</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="jamaah in jamaahs.data" :key="jamaah.id" class="hover:bg-gray-50">
            <td class="px-4 py-3 font-medium">{{ jamaah.nama }}</td>
            <td class="px-4 py-3">{{ jamaah.jenis_kelamin === 'L' ? 'Laki-laki' : 'Perempuan' }}</td>
            <td class="px-4 py-3">
              <span :class="{
                'bg-green-100 text-green-800': jamaah.status === 'aktif',
                'bg-yellow-100 text-yellow-800': jamaah.status === 'pindah',
                'bg-gray-100 text-gray-800': jamaah.status === 'meninggal',
                'bg-red-100 text-red-800': jamaah.status === 'nonaktif'
              }" class="px-2 py-1 text-xs rounded">
                {{ jamaah.status }}
              </span>
            </td>
            <td class="px-4 py-3">
              <div class="text-sm">{{ jamaah.no_hp || '-' }}</div>
              <div class="text-xs text-gray-500">{{ jamaah.email || '-' }}</div>
            </td>
            <td class="px-4 py-3">
              <div class="flex flex-wrap gap-1">
                <span v-for="cat in jamaah.categories" :key="cat.id" class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                  {{ cat.nama }}
                </span>
                <span v-if="!jamaah.categories || jamaah.categories.length === 0" class="text-gray-400">-</span>
              </div>
            </td>
          </tr>
          <tr v-if="!jamaahs.data || jamaahs.data.length === 0">
            <td colspan="5" class="px-4 py-12 text-center text-gray-500">
              <UserGroupIcon class="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>Tidak ada data jamaah</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="px-4 py-3 border-t">
        <Pagination :links="jamaahs.links" />
      </div>
    </div>
  </AdminLayout>
</template>

<style scoped>
@media print {
  .no-print { display: none !important; }
}
</style>
