<script setup>
import { ref, computed } from 'vue';
import { router, Link, Head, useForm } from '@inertiajs/vue3';
import { PlusIcon, MagnifyingGlassIcon, EyeIcon, PencilIcon, TrashIcon, XMarkIcon, CogIcon } from '@heroicons/vue/24/outline';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Modal from '@/Components/Modal.vue';
import Pagination from '@/Components/Pagination.vue';

const props = defineProps({
  transactions: Object,
  cashboxes: Array,
  categories: Array,
  stats: Object,
  filters: Object,
});

const formatRupiah = (num) => 'Rp ' + Number(num).toLocaleString('id-ID');
const search = ref(props.filters.search || '');
const modalOpen = ref(false);
const editMode = ref(false);
const editingItem = ref(null);

// Form untuk tambah/edit
const form = useForm({
  cashbox_id: '',
  category_id: '',
  jenis: 'pemasukan',
  jumlah: '',
  tanggal: new Date().toISOString().split('T')[0],
  keterangan: '',
  bukti: null,
  metode: 'tunai',
  jamaah_id: null,
});

const openCreate = () => {
  editMode.value = false;
  editingItem.value = null;
  form.reset();
  form.jenis = 'pemasukan';
  form.tanggal = new Date().toISOString().split('T')[0];
  modalOpen.value = true;
};

const openEdit = (trx) => {
  editMode.value = true;
  editingItem.value = trx;
  form.cashbox_id = trx.cashbox.id;
  form.category_id = trx.category.id;
  form.jenis = trx.jenis;
  form.jumlah = trx.jumlah;
  form.tanggal = trx.tanggal;
  form.keterangan = trx.keterangan;
  form.metode = trx.metode;
  modalOpen.value = true;
};

const submit = () => {
  if (editMode.value) {
    form.post(route('transactions.update', editingItem.value.id), {
      onSuccess: () => { modalOpen.value = false; form.reset(); },
    });
  } else {
    form.post(route('transactions.store'), {
      onSuccess: () => { modalOpen.value = false; form.reset(); },
    });
  }
};

const deleteItem = (trx) => {
  if (confirm(`Hapus transaksi ${trx.no_transaksi}?`)) {
    router.delete(route('transactions.destroy', trx.id));
  }
};

const applyFilter = () => {
  router.get(route('transactions.index'), { search: search.value }, { preserveState: true, preserveScroll: true });
};

const filteredCategories = computed(() => {
  return props.categories.filter(c => c.tipe === form.jenis);
});
</script>

<template>
  <AdminLayout>
    <Head title="Arus Kas" />

    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Manajemen Arus Kas</h1>
        <p class="text-gray-500 text-sm">Pencatatan pemasukan dan pengeluaran</p>
      </div>
      <div class="flex gap-2">
        <Link :href="route('transaction-categories.index')" class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md">
          <CogIcon class="w-5 h-5" />
          Kelola Kategori
        </Link>
        <button @click="openCreate" class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md">
          <PlusIcon class="w-5 h-5" />
          Tambah Transaksi
        </button>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary">
        <p class="text-sm text-gray-500 font-medium">Total Saldo Kas</p>
        <p class="text-2xl font-bold text-gray-800 mt-1">{{ formatRupiah(stats.total_saldo) }}</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
        <p class="text-sm text-gray-500 font-medium">Pemasukan Bulan Ini</p>
        <p class="text-2xl font-bold text-green-600 mt-1">+ {{ formatRupiah(stats.pemasukan_bulan_ini) }}</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
        <p class="text-sm text-gray-500 font-medium">Pengeluaran Bulan Ini</p>
        <p class="text-2xl font-bold text-red-600 mt-1">- {{ formatRupiah(stats.pengeluaran_bulan_ini) }}</p>
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div class="flex flex-col md:flex-row gap-3">
        <div class="flex-1 relative">
          <MagnifyingGlassIcon class="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input v-model="search" @keyup.enter="applyFilter" type="text" placeholder="Cari transaksi..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none">
        </div>
        <button @click="applyFilter" class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-light transition">Cari</button>
        <button @click="search = ''; applyFilter()" class="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition">Reset</button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead class="bg-gray-50 text-gray-600 text-sm uppercase tracking-wider">
            <tr>
              <th class="px-6 py-4 font-semibold">No. Transaksi</th>
              <th class="px-6 py-4 font-semibold">Tanggal</th>
              <th class="px-6 py-4 font-semibold">Kategori</th>
              <th class="px-6 py-4 font-semibold">Kas Box</th>
              <th class="px-6 py-4 font-semibold">Keterangan</th>
              <th class="px-6 py-4 font-semibold text-right">Jumlah</th>
              <th class="px-6 py-4 font-semibold text-center">Status</th>
              <th class="px-6 py-4 font-semibold text-center">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 text-sm">
            <tr v-for="trx in transactions.data" :key="trx.id" class="hover:bg-gray-50 transition">
              <td class="px-6 py-4 font-mono text-gray-600 text-xs">{{ trx.no_transaksi }}</td>
              <td class="px-6 py-4">{{ trx.tanggal }}</td>
              <td class="px-6 py-4">
                <span class="px-2 py-1 rounded-full text-xs font-semibold" :class="trx.category?.tipe === 'pemasukan' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
                  {{ trx.category?.nama }}
                </span>
              </td>
              <td class="px-6 py-4 text-gray-700">{{ trx.cashbox?.nama }}</td>
              <td class="px-6 py-4 text-gray-700 max-w-xs truncate">{{ trx.keterangan }}</td>
              <td class="px-6 py-4 text-right font-semibold" :class="trx.jenis === 'pemasukan' ? 'text-green-600' : 'text-red-600'">
                {{ trx.jenis === 'pemasukan' ? '+' : '-' }} {{ formatRupiah(trx.jumlah) }}
              </td>
              <td class="px-6 py-4 text-center">
                <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs capitalize">{{ trx.status }}</span>
              </td>
              <td class="px-6 py-4 text-center">
                <div class="flex justify-center gap-2">
                  <button @click="openEdit(trx)" class="text-gray-400 hover:text-primary" title="Edit"><PencilIcon class="w-5 h-5" /></button>
                  <button @click="deleteItem(trx)" class="text-gray-400 hover:text-red-600" title="Hapus"><TrashIcon class="w-5 h-5" /></button>
                </div>
              </td>
            </tr>
            <tr v-if="transactions.data.length === 0">
              <td colspan="8" class="px-6 py-12 text-center text-gray-500">Tidak ada data transaksi</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="px-6 py-4 border-t">
        <Pagination :links="transactions.links" />
      </div>
    </div>

    <!-- Modal Form -->
    <Modal :show="modalOpen" :title="editMode ? 'Edit Transaksi' : 'Tambah Transaksi Baru'" @close="modalOpen = false">
      <form @submit.prevent="submit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Transaksi</label>
          <div class="flex gap-4">
            <label class="flex items-center gap-2 cursor-pointer">
              <input v-model="form.jenis" type="radio" value="pemasukan" class="text-primary focus:ring-primary">
              <span class="text-sm">Pemasukan</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input v-model="form.jenis" type="radio" value="pengeluaran" class="text-primary focus:ring-primary">
              <span class="text-sm">Pengeluaran</span>
            </label>
          </div>
          <span v-if="form.errors.jenis" class="text-red-500 text-xs">{{ form.errors.jenis }}</span>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Kas Box</label>
            <select v-model="form.cashbox_id" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
              <option value="">-- Pilih --</option>
              <option v-for="box in cashboxes" :key="box.id" :value="box.id">{{ box.nama }}</option>
            </select>
            <span v-if="form.errors.cashbox_id" class="text-red-500 text-xs">{{ form.errors.cashbox_id }}</span>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
            <select v-model="form.category_id" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
              <option value="">-- Pilih --</option>
              <option v-for="cat in filteredCategories" :key="cat.id" :value="cat.id">{{ cat.nama }}</option>
            </select>
            <span v-if="form.errors.category_id" class="text-red-500 text-xs">{{ form.errors.category_id }}</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal</label>
            <input v-model="form.tanggal" type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            <span v-if="form.errors.tanggal" class="text-red-500 text-xs">{{ form.errors.tanggal }}</span>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Jumlah (Rp)</label>
            <input v-model="form.jumlah" type="number" placeholder="0" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            <span v-if="form.errors.jumlah" class="text-red-500 text-xs">{{ form.errors.jumlah }}</span>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Metode</label>
          <select v-model="form.metode" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            <option value="tunai">Tunai</option>
            <option value="transfer">Transfer</option>
            <option value="qris">QRIS</option>
            <option value="lainnya">Lainnya</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Keterangan</label>
          <textarea v-model="form.keterangan" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Detail transaksi..."></textarea>
          <span v-if="form.errors.keterangan" class="text-red-500 text-xs">{{ form.errors.keterangan }}</span>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Bukti (opsional)</label>
          <input type="file" @input="form.bukti = $event.target.files[0]" class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-light">
          <span v-if="form.errors.bukti" class="text-red-500 text-xs">{{ form.errors.bukti }}</span>
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