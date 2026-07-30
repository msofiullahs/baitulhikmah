<script setup>
import { ref } from 'vue';
import { router, Link, Head, useForm } from '@inertiajs/vue3';
import { PlusIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon, QrCodeIcon, BuildingOfficeIcon, CogIcon } from '@heroicons/vue/24/outline';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Modal from '@/Components/Modal.vue';
import Pagination from '@/Components/Pagination.vue';
import StatCard from '@/Components/StatCard.vue';

const props = defineProps({
  assets: Object,
  categories: Array,
  stats: Object,
  filters: Object,
});

const search = ref(props.filters?.search || '');
const kondisiFilter = ref(props.filters?.kondisi || '');
const modalOpen = ref(false);
const editMode = ref(false);
const currentAsset = ref(null);

const form = useForm({
  category_id: '',
  nama: '',
  merk: '',
  model: '',
  jumlah: 1,
  tanggal_perolehan: new Date().toISOString().split('T')[0],
  harga_perolehan: '',
  kondisi: 'baik',
  lokasi: '',
  foto: null,
});

const openEdit = (asset) => {
  editMode.value = true;
  currentAsset.value = asset;
  form.category_id = asset.category_id;
  form.nama = asset.nama;
  form.merk = asset.merk || '';
  form.model = asset.model || '';
  form.jumlah = asset.jumlah;
  form.tanggal_perolehan = asset.tanggal_perolehan;
  form.harga_perolehan = asset.harga_perolehan;
  form.kondisi = asset.kondisi;
  form.lokasi = asset.lokasi;
  modalOpen.value = true;
};

const submit = () => {
  if (editMode.value && currentAsset.value) {
    form.post(route('assets.update', currentAsset.value.id), {
      onSuccess: () => { closeModal(); },
      onError: () => {},
    });
  } else {
    form.post(route('assets.store'), {
      onSuccess: () => { closeModal(); },
      onError: () => {},
    });
  }
};

const closeModal = () => {
  modalOpen.value = false;
  editMode.value = false;
  currentAsset.value = null;
  form.reset();
};

const deleteItem = (item) => {
  if (confirm(`Hapus aset ${item.nama}?`)) {
    router.delete(route('assets.destroy', item.id));
  }
};

const filterAssets = () => {
  router.get(route('assets.index'), { 
    search: search.value, 
    kondisi: kondisiFilter.value 
  }, { preserveState: true });
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
};

const kondisiBadge = (kondisi) => {
  const badges = {
    baik: 'bg-green-100 text-green-800',
    rusak_ringan: 'bg-yellow-100 text-yellow-800',
    rusak_berat: 'bg-red-100 text-red-800',
    dihapuskan: 'bg-gray-100 text-gray-800',
  };
  const labels = {
    baik: 'Baik',
    rusak_ringan: 'Rusak Ringan',
    rusak_berat: 'Rusak Berat',
    dihapuskan: 'Dihapuskan',
  };
  return `<span class="px-2 py-1 rounded-full text-xs font-medium ${badges[kondisi] || badges.baik}">${labels[kondisi] || kondisi}</span>`;
};
</script>

<template>
  <AdminLayout>
    <Head title="Inventaris & Aset" />

    <!-- Header -->
    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Inventaris & Aset</h1>
        <p class="text-gray-500 text-sm">Kelola aset dan inventaris masjid dengan QR code</p>
      </div>
      <div class="flex gap-2">
        <Link :href="route('asset-categories.index')" class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md">
          <CogIcon class="w-5 h-5" />
          Kelola Kategori
        </Link>
        <button @click="modalOpen = true; editMode = false; form.reset()" class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md">
          <PlusIcon class="w-5 h-5" /> Tambah Aset
        </button>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <StatCard title="Total Aset" :value="stats?.total_items || 0" icon="BuildingOfficeIcon" color="blue" />
      <StatCard title="Nilai Buku" :value="formatCurrency(stats?.total_value || 0)" icon="BanknotesIcon" color="green" />
      <StatCard title="Kondisi Baik" :value="stats?.baik || 0" icon="CheckCircleIcon" color="green" />
      <StatCard title="Perlu Perbaikan" :value="stats?.perlu_perbaikan || 0" icon="ExclamationTriangleIcon" color="red" />
    </div>

    <!-- Filter -->
    <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div class="flex gap-3 flex-wrap">
        <div class="flex-1 min-w-[200px] relative">
          <MagnifyingGlassIcon class="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input v-model="search" @keyup.enter="filterAssets" type="text" placeholder="Cari kode atau nama aset..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
        </div>
        <select v-model="kondisiFilter" @change="filterAssets" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
          <option value="">Semua Kondisi</option>
          <option value="baik">Baik</option>
          <option value="rusak_ringan">Rusak Ringan</option>
          <option value="rusak_berat">Rusak Berat</option>
          <option value="dihapuskan">Dihapuskan</option>
        </select>
        <button @click="filterAssets" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition">Filter</button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th class="px-6 py-3 text-left">Kode</th>
            <th class="px-6 py-3 text-left">Nama Aset</th>
            <th class="px-6 py-3 text-left">Kategori</th>
            <th class="px-6 py-3 text-center">Jumlah</th>
            <th class="px-6 py-3 text-right">Harga</th>
            <th class="px-6 py-3 text-center">Kondisi</th>
            <th class="px-6 py-3 text-left">Lokasi</th>
            <th class="px-6 py-3 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="asset in assets.data" :key="asset.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 font-mono text-xs">{{ asset.kode_aset }}</td>
            <td class="px-6 py-4">
              <div class="font-medium">{{ asset.nama }}</div>
              <div class="text-xs text-gray-500">{{ asset.merk }} {{ asset.model }}</div>
            </td>
            <td class="px-6 py-4">{{ asset.category?.nama || '-' }}</td>
            <td class="px-6 py-4 text-center">{{ asset.jumlah }}</td>
            <td class="px-6 py-4 text-right font-medium">{{ formatCurrency(asset.harga_perolehan) }}</td>
            <td class="px-6 py-4 text-center" v-html="kondisiBadge(asset.kondisi)"></td>
            <td class="px-6 py-4">{{ asset.lokasi }}</td>
            <td class="px-6 py-4 text-center">
              <button @click="openEdit(asset)" class="text-gray-400 hover:text-primary mx-1" title="Edit"><PencilIcon class="w-5 h-5 inline" /></button>
              <a :href="`/storage/${asset.qr_code}`" target="_blank" class="text-gray-400 hover:text-primary mx-1" title="QR Code"><QrCodeIcon class="w-5 h-5 inline" /></a>
              <button @click="deleteItem(asset)" class="text-gray-400 hover:text-red-600 mx-1" title="Hapus"><TrashIcon class="w-5 h-5 inline" /></button>
            </td>
          </tr>
          <tr v-if="!assets.data.length">
            <td colspan="8" class="px-6 py-12 text-center text-gray-500">Tidak ada data aset</td>
          </tr>
        </tbody>
      </table>
      <div class="px-6 py-4 border-t">
        <Pagination :links="assets.links" />
      </div>
    </div>

    <!-- Modal Form -->
    <Modal :show="modalOpen" :title="editMode ? 'Edit Aset' : 'Tambah Aset Baru'" @close="closeModal">
      <form @submit.prevent="submit" class="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Kategori <span class="text-red-500">*</span></label>
            <select v-model="form.category_id" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
              <option value="">Pilih Kategori</option>
              <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.nama }}</option>
            </select>
            <span v-if="form.errors.category_id" class="text-red-500 text-xs">{{ form.errors.category_id }}</span>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Kondisi <span class="text-red-500">*</span></label>
            <select v-model="form.kondisi" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
              <option value="baik">Baik</option>
              <option value="rusak_ringan">Rusak Ringan</option>
              <option value="rusak_berat">Rusak Berat</option>
              <option value="dihapuskan">Dihapuskan</option>
            </select>
            <span v-if="form.errors.kondisi" class="text-red-500 text-xs">{{ form.errors.kondisi }}</span>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nama Aset <span class="text-red-500">*</span></label>
          <input v-model="form.nama" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Proyektor Epson">
          <span v-if="form.errors.nama" class="text-red-500 text-xs">{{ form.errors.nama }}</span>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Merk</label>
            <input v-model="form.merk" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Epson">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Model</label>
            <input v-model="form.model" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: EB-X05">
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Jumlah <span class="text-red-500">*</span></label>
            <input v-model="form.jumlah" type="number" min="1" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            <span v-if="form.errors.jumlah" class="text-red-500 text-xs">{{ form.errors.jumlah }}</span>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Perolehan <span class="text-red-500">*</span></label>
            <input v-model="form.tanggal_perolehan" type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            <span v-if="form.errors.tanggal_perolehan" class="text-red-500 text-xs">{{ form.errors.tanggal_perolehan }}</span>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Harga Perolehan (Rp) <span class="text-red-500">*</span></label>
          <input v-model="form.harga_perolehan" type="number" min="0" step="0.01" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
          <span v-if="form.errors.harga_perolehan" class="text-red-500 text-xs">{{ form.errors.harga_perolehan }}</span>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Lokasi <span class="text-red-500">*</span></label>
          <input v-model="form.lokasi" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Ruang Serbaguna Lt.2">
          <span v-if="form.errors.lokasi" class="text-red-500 text-xs">{{ form.errors.lokasi }}</span>
        </div>

        <div v-if="!editMode">
          <label class="block text-sm font-medium text-gray-700 mb-1">Foto Aset</label>
          <input type="file" @input="form.foto = $event.target.files[0]" accept="image/*" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
          <span v-if="form.errors.foto" class="text-red-500 text-xs">{{ form.errors.foto }}</span>
        </div>

        <div class="flex justify-end gap-3 pt-4 border-t">
          <button type="button" @click="closeModal" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Batal</button>
          <button type="submit" :disabled="form.processing" class="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50">
            {{ form.processing ? 'Menyimpan...' : 'Simpan' }}
          </button>
        </div>
      </form>
    </Modal>
  </AdminLayout>
</template>