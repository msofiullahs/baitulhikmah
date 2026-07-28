<script setup>
import { ref } from 'vue';
import { Head, router } from '@inertiajs/vue3';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import { CalendarDaysIcon, PrinterIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  activities: Object,
  summary: Object,
  filters: Object,
});

const startDate = ref(props.filters?.startDate || '');
const endDate = ref(props.filters?.endDate || '');
const category = ref(props.filters?.category || 'all');
const status = ref(props.filters?.status || 'all');

const filterReports = () => {
  router.get(route('reports.activities'), {
    start_date: startDate.value,
    end_date: endDate.value,
    category: category.value,
    status: status.value,
  }, { preserveState: true });
};

const printReport = () => {
  window.print();
};
</script>

<template>
  <AdminLayout>
    <Head title="Laporan Kegiatan" />

    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Laporan Kegiatan</h1>
        <p class="text-gray-500 text-sm">Analisis aktivitas dan event masjid</p>
      </div>
      <div class="flex gap-2">
        <SecondaryButton @click="printReport">
          <PrinterIcon class="w-5 h-5 mr-2 inline" /> Cetak
        </SecondaryButton>
      </div>
    </div>

    <!-- Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-purple-500">
        <div class="text-sm text-gray-500 mb-1">Total Kegiatan</div>
        <div class="text-2xl font-bold text-gray-800">{{ summary?.total || 0 }}</div>
      </div>
      <div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-green-500">
        <div class="text-sm text-gray-500 mb-1">Total Anggaran</div>
        <div class="text-lg font-bold text-green-600">Rp {{ (summary?.total_anggaran || 0).toLocaleString('id-ID') }}</div>
      </div>
      <div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-blue-500">
        <div class="text-sm text-gray-500 mb-1">Rata-rata Anggaran</div>
        <div class="text-lg font-bold text-blue-600">Rp {{ summary?.total && summary.total > 0 ? Math.round(summary.total_anggaran / summary.total).toLocaleString('id-ID') : 0 }}</div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <!-- By Category -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h3 class="font-semibold text-gray-800 mb-4">Kegiatan Berdasarkan Kategori</h3>
        <div class="space-y-3">
          <div v-for="item in summary?.by_category" :key="item.kategori" class="flex items-center justify-between">
            <span class="text-gray-600 capitalize">{{ item.kategori }}</span>
            <div class="flex items-center gap-3">
              <div class="w-48 bg-gray-200 rounded-full h-2">
                <div class="bg-purple-500 h-2 rounded-full" :style="{ width: `${(item.count / summary.total) * 100}%` }"></div>
              </div>
              <span class="font-semibold text-gray-800 w-12 text-right">{{ item.count }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- By Status -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h3 class="font-semibold text-gray-800 mb-4">Kegiatan Berdasarkan Status</h3>
        <div class="space-y-3">
          <div v-for="item in summary?.by_status" :key="item.status" class="flex items-center justify-between">
            <span class="text-gray-600 capitalize">{{ item.status }}</span>
            <div class="flex items-center gap-3">
              <div class="w-48 bg-gray-200 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full" :style="{ width: `${(item.count / summary.total) * 100}%` }"></div>
              </div>
              <span class="font-semibold text-gray-800 w-12 text-right">{{ item.count }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Tanggal Mulai</label>
          <input v-model="startDate" type="date" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Tanggal Akhir</label>
          <input v-model="endDate" type="date" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Kategori</label>
          <select v-model="category" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
            <option value="all">Semua</option>
            <option value="pengajian">Pengajian</option>
            <option value="rapat">Rapat</option>
            <option value="phbi">PHBI</option>
            <option value="kajian_akbar">Kajian Akbar</option>
            <option value="sosial">Sosial</option>
            <option value="olahraga">Olahraga</option>
            <option value="lainnya">Lainnya</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Status</label>
          <select v-model="status" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
            <option value="all">Semua</option>
            <option value="draft">Draft</option>
            <option value="dijadwalkan">Dijadwalkan</option>
            <option value="berlangsung">Berlangsung</option>
            <option value="selesai">Selesai</option>
            <option value="dibatalkan">Dibatalkan</option>
          </select>
        </div>
      </div>
      <div class="mt-3 flex justify-end">
        <PrimaryButton @click="filterReports">Filter</PrimaryButton>
      </div>
    </div>

    <!-- Activities Table -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th class="px-4 py-3 text-left">Nama Kegiatan</th>
            <th class="px-4 py-3 text-left">Kategori</th>
            <th class="px-4 py-3 text-left">Tanggal</th>
            <th class="px-4 py-3 text-left">Penanggung Jawab</th>
            <th class="px-4 py-3 text-right">Anggaran</th>
            <th class="px-4 py-3 text-center">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="activity in activities.data" :key="activity.id" class="hover:bg-gray-50">
            <td class="px-4 py-3 font-medium">{{ activity.nama }}</td>
            <td class="px-4 py-3">
              <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded capitalize">{{ activity.kategori }}</span>
            </td>
            <td class="px-4 py-3">
              <div class="text-sm">{{ new Date(activity.tanggal_mulai).toLocaleDateString('id-ID') }}</div>
              <div v-if="activity.tanggal_selesai" class="text-xs text-gray-500">s/d {{ new Date(activity.tanggal_selesai).toLocaleDateString('id-ID') }}</div>
            </td>
            <td class="px-4 py-3">{{ activity.penanggung_jawab || '-' }}</td>
            <td class="px-4 py-3 text-right font-semibold">Rp {{ (activity.anggaran || 0).toLocaleString('id-ID') }}</td>
            <td class="px-4 py-3 text-center">
              <span :class="{
                'bg-gray-100 text-gray-800': activity.status === 'draft',
                'bg-blue-100 text-blue-800': activity.status === 'dijadwalkan',
                'bg-green-100 text-green-800': activity.status === 'berlangsung',
                'bg-purple-100 text-purple-800': activity.status === 'selesai',
                'bg-red-100 text-red-800': activity.status === 'dibatalkan'
              }" class="px-2 py-1 text-xs rounded capitalize">
                {{ activity.status }}
              </span>
            </td>
          </tr>
          <tr v-if="!activities.data || activities.data.length === 0">
            <td colspan="6" class="px-4 py-12 text-center text-gray-500">
              <CalendarDaysIcon class="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>Tidak ada data kegiatan</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="px-4 py-3 border-t">
        <Pagination :links="activities.links" />
      </div>
    </div>
  </AdminLayout>
</template>

<style scoped>
@media print {
  .no-print { display: none !important; }
}
</style>
