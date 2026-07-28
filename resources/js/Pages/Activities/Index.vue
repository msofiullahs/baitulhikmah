<script setup>
import { ref, computed } from 'vue';
import { router, Link, Head, useForm } from '@inertiajs/vue3';
import { PlusIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon, EyeIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Modal from '@/Components/Modal.vue';
import Pagination from '@/Components/Pagination.vue';

const props = defineProps({
  activities: Object,
  filters: Object,
});

const formatRupiah = (num) => 'Rp ' + Number(num).toLocaleString('id-ID');
const search = ref(props.filters?.search || '');
const modalOpen = ref(false);
const editMode = ref(false);
const editingItem = ref(null);

const form = useForm({
  nama: '',
  deskripsi: '',
  kategori: 'pengajian',
  tanggal_mulai: new Date().toISOString().split('T')[0],
  tanggal_selesai: '',
  lokasi: '',
  penanggung_jawab: '',
  anggaran: '',
  poster: null,
  status: 'dijadwalkan',
  is_public: true,
});

const categories = [
  { value: 'pengajian', label: 'Pengajian' },
  { value: 'rapat', label: 'Rapat' },
  { value: 'phbi', label: 'PHBI' },
  { value: 'kajian_akbar', label: 'Kajian Akbar' },
  { value: 'sosial', label: 'Sosial' },
  { value: 'olahraga', label: 'Olahraga' },
  { value: 'lainnya', label: 'Lainnya' },
];

const statusOptions = [
  { value: 'draft', label: 'Draft' },
  { value: 'dijadwalkan', label: 'Dijadwalkan' },
  { value: 'berlangsung', label: 'Berlangsung' },
  { value: 'selesai', label: 'Selesai' },
  { value: 'dibatalkan', label: 'Dibatalkan' },
];

const openCreate = () => {
  editMode.value = false;
  editingItem.value = null;
  form.reset();
  form.tanggal_mulai = new Date().toISOString().split('T')[0];
  form.kategori = 'pengajian';
  form.status = 'dijadwalkan';
  modalOpen.value = true;
};

const openEdit = (act) => {
  editMode.value = true;
  editingItem.value = act;
  form.nama = act.nama;
  form.deskripsi = act.deskripsi;
  form.kategori = act.kategori;
  form.tanggal_mulai = act.tanggal_mulai;
  form.tanggal_selesai = act.tanggal_selesai;
  form.lokasi = act.lokasi;
  form.penanggung_jawab = act.penanggung_jawab;
  form.anggaran = act.anggaran;
  form.status = act.status;
  form.is_public = act.is_public;
  modalOpen.value = true;
};

const submit = () => {
  if (editMode.value) {
    form.post(route('activities.update', editingItem.value.id), {
      onSuccess: () => { modalOpen.value = false; form.reset(); },
    });
  } else {
    form.post(route('activities.store'), {
      onSuccess: () => { modalOpen.value = false; form.reset(); },
    });
  }
};

const deleteItem = (act) => {
  if (confirm(`Hapus kegiatan "${act.nama}"?`)) {
    router.delete(route('activities.destroy', act.id));
  }
};

const applyFilter = () => {
  router.get(route('activities.index'), { search: search.value, status: props.filters?.status }, { preserveState: true, preserveScroll: true });
};
</script>

<template>
  <AdminLayout>
    <Head title="Kegiatan" />

    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Manajemen Kegiatan</h1>
        <p class="text-gray-500 text-sm">Kelola kegiatan dan acara masjid</p>
      </div>
      <button @click="openCreate" class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md">
        <PlusIcon class="w-5 h-5" />
        Tambah Kegiatan
      </button>
    </div>

    <!-- Filter Bar -->
    <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div class="flex flex-col md:flex-row gap-3">
        <div class="flex-1 relative">
          <MagnifyingGlassIcon class="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input v-model="search" @keyup.enter="applyFilter" type="text" placeholder="Cari kegiatan..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none">
        </div>
        <select v-model="$parent.status" @change="applyFilter" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
          <option value="">Semua Status</option>
          <option v-for="opt in statusOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
        </select>
        <button @click="applyFilter" class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-light transition">Cari</button>
        <button @click="search = ''; applyFilter()" class="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition">Reset</button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-sm">
          <thead class="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider">
            <tr>
              <th class="px-6 py-4 font-semibold">Nama Kegiatan</th>
              <th class="px-6 py-4 font-semibold">Kategori</th>
              <th class="px-6 py-4 font-semibold">Tanggal</th>
              <th class="px-6 py-4 font-semibold">Lokasi</th>
              <th class="px-6 py-4 font-semibold">Penanggung Jawab</th>
              <th class="px-6 py-4 font-semibold text-center">Status</th>
              <th class="px-6 py-4 font-semibold text-center">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="act in activities.data" :key="act.id" class="hover:bg-gray-50 transition">
              <td class="px-6 py-4">
                <div class="font-semibold text-gray-800">{{ act.nama }}</div>
                <div v-if="act.deskripsi" class="text-xs text-gray-500 truncate max-w-xs">{{ act.deskripsi }}</div>
              </td>
              <td class="px-6 py-4">
                <span class="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 capitalize">{{ act.kategori.replace('_', ' ') }}</span>
              </td>
              <td class="px-6 py-4 text-gray-700">
                <div class="text-sm">{{ act.tanggal_mulai }}</div>
                <div v-if="act.tanggal_selesai" class="text-xs text-gray-500">s/d {{ act.tanggal_selesai }}</div>
              </td>
              <td class="px-6 py-4 text-gray-700">{{ act.lokasi }}</td>
              <td class="px-6 py-4 text-gray-700">{{ act.penanggung_jawab || '-' }}</td>
              <td class="px-6 py-4 text-center">
                <span class="px-2 py-1 rounded-full text-xs font-semibold capitalize"
                  :class="{
                    'bg-gray-100 text-gray-700': act.status === 'draft',
                    'bg-blue-100 text-blue-700': act.status === 'dijadwalkan',
                    'bg-green-100 text-green-700': act.status === 'berlangsung',
                    'bg-purple-100 text-purple-700': act.status === 'selesai',
                    'bg-red-100 text-red-700': act.status === 'dibatalkan'
                  }">
                  {{ act.status }}
                </span>
              </td>
              <td class="px-6 py-4 text-center">
                <div class="flex justify-center gap-2">
                  <button @click="openEdit(act)" class="text-gray-400 hover:text-primary" title="Edit"><PencilIcon class="w-5 h-5" /></button>
                  <button @click="deleteItem(act)" class="text-gray-400 hover:text-red-600" title="Hapus"><TrashIcon class="w-5 h-5" /></button>
                </div>
              </td>
            </tr>
            <tr v-if="activities.data.length === 0">
              <td colspan="7" class="px-6 py-12 text-center text-gray-500">Tidak ada data kegiatan</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="px-6 py-4 border-t">
        <Pagination :links="activities.links" />
      </div>
    </div>

    <!-- Modal Form -->
    <Modal :show="modalOpen" :title="editMode ? 'Edit Kegiatan' : 'Tambah Kegiatan Baru'" @close="modalOpen = false">
      <form @submit.prevent="submit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nama Kegiatan</label>
          <input v-model="form.nama" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Pengajian Rutin Mingguan">
          <span v-if="form.errors.nama" class="text-red-500 text-xs">{{ form.errors.nama }}</span>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
          <textarea v-model="form.deskripsi" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Deskripsi kegiatan..."></textarea>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
            <select v-model="form.kategori" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
              <option v-for="cat in categories" :key="cat.value" :value="cat.value">{{ cat.label }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select v-model="form.status" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
              <option v-for="opt in statusOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Mulai</label>
            <input v-model="form.tanggal_mulai" type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            <span v-if="form.errors.tanggal_mulai" class="text-red-500 text-xs">{{ form.errors.tanggal_mulai }}</span>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Selesai (opsional)</label>
            <input v-model="form.tanggal_selesai" type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Lokasi</label>
          <input v-model="form.lokasi" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Masjid Baitul Hikmah">
          <span v-if="form.errors.lokasi" class="text-red-500 text-xs">{{ form.errors.lokasi }}</span>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Penanggung Jawab</label>
            <input v-model="form.penanggung_jawab" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Anggaran (Rp)</label>
            <input v-model="form.anggaran" type="number" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="0">
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Poster (opsional)</label>
          <input type="file" @input="form.poster = $event.target.files[0]" class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-light">
          <span v-if="form.errors.poster" class="text-red-500 text-xs">{{ form.errors.poster }}</span>
        </div>

        <div class="flex items-center gap-2">
          <input v-model="form.is_public" type="checkbox" id="is_public" class="text-primary focus:ring-primary">
          <label for="is_public" class="text-sm text-gray-700">Tampilkan di website publik</label>
        </div>

        <div class="flex justify-end gap-3 pt-4 border-t">
          <button type="button" @click="modalOpen = false" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">Batal</button>
          <button type="submit" :disabled="form.processing" class="px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-lg transition shadow-md disabled:opacity-50">
            {{ form.processing ? 'Menyimpan...' : 'Simpan' }}
          </button>
        </div>
      </form>
    </Modal>
  </AdminLayout>
</template>