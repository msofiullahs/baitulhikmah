<script setup>
import { ref } from 'vue';
import { router, Link, Head, useForm } from '@inertiajs/vue3';
import { PlusIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon, BanknotesIcon, UserGroupIcon } from '@heroicons/vue/24/outline';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Modal from '@/Components/Modal.vue';
import Pagination from '@/Components/Pagination.vue';

const props = defineProps({
  donations: Object,
  categories: Array,
  cashboxes: Array,
});

const search = ref('');
const kategoriFilter = ref('');
const modalOpen = ref(false);
const editMode = ref(false);
const currentDonation = ref(null);

const form = useForm({
  jenis_ziswaf_id: '',
  nama_donatur: '',
  no_hp_donatur: '',
  jumlah: '',
  tanggal: new Date().toISOString().split('T')[0],
  metode: 'tunai',
  kas_box_id: '',
  is_anonymous: false,
  catatan: '',
});

const submit = () => {
  if (editMode.value && currentDonation.value) {
    form.post(route('ziswaf.donations.update', currentDonation.value.id), {
      onSuccess: () => { closeModal(); },
    });
  } else {
    form.post(route('ziswaf.donations.store'), {
      onSuccess: () => { closeModal(); },
    });
  }
};

const closeModal = () => {
  modalOpen.value = false;
  editMode.value = false;
  currentDonation.value = null;
  form.reset();
};

const deleteItem = (item) => {
  if (confirm(`Hapus donasi dari ${item.nama_donatur || 'Anonim'}?`)) {
    router.delete(route('ziswaf.donations.destroy', item.id));
  }
};

const filterDonations = () => {
  router.get(route('ziswaf.donations.index'), { 
    search: search.value, 
    jenis_ziswaf_id: kategoriFilter.value 
  }, { preserveState: true });
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
};

const metodeBadge = (metode) => {
  const badges = {
    tunai: 'bg-green-100 text-green-800',
    transfer: 'bg-blue-100 text-blue-800',
    qris: 'bg-purple-100 text-purple-800',
  };
  const labels = { tunai: 'Tunai', transfer: 'Transfer', qris: 'QRIS' };
  return `<span class="px-2 py-1 rounded-full text-xs font-medium ${badges[metode] || badges.tunai}">${labels[metode] || metode}</span>`;
};

const ziswafLabel = (category) => {
  const labels = {
    zakat_fitrah: 'Zakat Fitrah',
    zakat_maal: 'Zakat Maal',
    infaq: 'Infaq',
    sedekah: 'Sedekah',
    wakaf: 'Wakaf',
  };
  return category?.nama || labels[category?.kode] || '-';
};
</script>

<template>
  <AdminLayout>
    <Head title="ZISWAF - Donasi" />

    <!-- Header -->
    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Donasi ZISWAF</h1>
        <p class="text-gray-500 text-sm">Kelola zakat, infaq, sedekah, dan wakaf</p>
      </div>
      <button @click="modalOpen = true; editMode = false; form.reset()" class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md">
        <PlusIcon class="w-5 h-5" /> Catat Donasi
      </button>
    </div>

    <!-- Filter -->
    <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div class="flex gap-3 flex-wrap">
        <div class="flex-1 min-w-[200px] relative">
          <MagnifyingGlassIcon class="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input v-model="search" @keyup.enter="filterDonations" type="text" placeholder="Cari nama donatur..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
        </div>
        <select v-model="kategoriFilter" @change="filterDonations" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
          <option value="">Semua Jenis</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ ziswafLabel(cat) }}</option>
        </select>
        <button @click="filterDonations" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition">Filter</button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th class="px-6 py-3 text-left">No. Donasi</th>
            <th class="px-6 py-3 text-left">Donatur</th>
            <th class="px-6 py-3 text-left">Jenis</th>
            <th class="px-6 py-3 text-right">Jumlah</th>
            <th class="px-6 py-3 text-center">Metode</th>
            <th class="px-6 py-3 text-center">Kas Box</th>
            <th class="px-6 py-3 text-center">Tanggal</th>
            <th class="px-6 py-3 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="item in donations.data" :key="item.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 font-mono text-xs">{{ item.no_donasi }}</td>
            <td class="px-6 py-4">
              <div class="font-medium">{{ item.is_anonymous ? 'Anonim' : (item.nama_donatur || '-') }}</div>
              <div class="text-xs text-gray-500">{{ item.no_hp_donatur || '-' }}</div>
            </td>
            <td class="px-6 py-4">{{ ziswafLabel(item.category) }}</td>
            <td class="px-6 py-4 text-right font-medium">{{ formatCurrency(item.jumlah) }}</td>
            <td class="px-6 py-4 text-center" v-html="metodeBadge(item.metode)"></td>
            <td class="px-6 py-4 text-center text-xs">{{ item.cashbox?.nama || '-' }}</td>
            <td class="px-6 py-4 text-center text-xs">{{ new Date(item.tanggal).toLocaleDateString('id-ID') }}</td>
            <td class="px-6 py-4 text-center">
              <button @click="deleteItem(item)" class="text-gray-400 hover:text-red-600 mx-1" title="Hapus"><TrashIcon class="w-5 h-5 inline" /></button>
            </td>
          </tr>
          <tr v-if="!donations.data.length">
            <td colspan="8" class="px-6 py-12 text-center text-gray-500">Tidak ada data donasi</td>
          </tr>
        </tbody>
      </table>
      <div class="px-6 py-4 border-t">
        <Pagination :links="donations.links" />
      </div>
    </div>

    <!-- Modal Form -->
    <Modal :show="modalOpen" title="Catat Donasi Baru" @close="closeModal">
      <form @submit.prevent="submit" class="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Jenis ZISWAF <span class="text-red-500">*</span></label>
          <select v-model="form.jenis_ziswaf_id" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            <option value="">Pilih Jenis</option>
            <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ ziswafLabel(cat) }}</option>
          </select>
          <span v-if="form.errors.jenis_ziswaf_id" class="text-red-500 text-xs">{{ form.errors.jenis_ziswaf_id }}</span>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nama Donatur</label>
            <input v-model="form.nama_donatur" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Kosongkan jika anonim">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">No. HP</label>
            <input v-model="form.no_hp_donatur" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
          </div>
        </div>

        <label class="flex items-center gap-2">
          <input v-model="form.is_anonymous" type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary">
          <span class="text-sm text-gray-700">Donasi Anonim (nama tidak ditampilkan)</span>
        </label>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Jumlah (Rp) <span class="text-red-500">*</span></label>
            <input v-model="form.jumlah" type="number" min="0" step="0.01" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            <span v-if="form.errors.jumlah" class="text-red-500 text-xs">{{ form.errors.jumlah }}</span>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal <span class="text-red-500">*</span></label>
            <input v-model="form.tanggal" type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            <span v-if="form.errors.tanggal" class="text-red-500 text-xs">{{ form.errors.tanggal }}</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Metode Pembayaran <span class="text-red-500">*</span></label>
            <select v-model="form.metode" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
              <option value="tunai">Tunai</option>
              <option value="transfer">Transfer Bank</option>
              <option value="qris">QRIS</option>
            </select>
            <span v-if="form.errors.metode" class="text-red-500 text-xs">{{ form.errors.metode }}</span>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Kas Box Tujuan <span class="text-red-500">*</span></label>
            <select v-model="form.kas_box_id" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
              <option value="">Pilih Kas Box</option>
              <option v-for="box in cashboxes" :key="box.id" :value="box.id">{{ box.nama }}</option>
            </select>
            <span v-if="form.errors.kas_box_id" class="text-red-500 text-xs">{{ form.errors.kas_box_id }}</span>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Catatan</label>
          <textarea v-model="form.catatan" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"></textarea>
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
