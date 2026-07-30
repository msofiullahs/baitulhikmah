<script setup>
import { ref } from 'vue';
import { router, Link, Head, useForm } from '@inertiajs/vue3';
import { PlusIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Modal from '@/Components/Modal.vue';
import Pagination from '@/Components/Pagination.vue';

const props = defineProps({
  items: Object,
  filters: Object,
});

const search = ref(props.filters?.search || '');
const kategoriFilter = ref(props.filters?.kategori || '');
const modalOpen = ref(false);
const editingItem = ref(null);

const form = useForm({
  nama: '',
  kategori: 'zakat',
  deskripsi: '',
  nisab: null,
  persentase: null,
});

const openCreateModal = () => {
  form.reset();
  form.kategori = 'zakat';
  editingItem.value = null;
  modalOpen.value = true;
};

const openEdit = (item) => {
  editingItem.value = item;
  form.nama = item.nama;
  form.kategori = item.kategori;
  form.deskripsi = item.deskripsi;
  form.nisab = item.nisab;
  form.persentase = item.persentase;
  modalOpen.value = true;
};

const submit = () => {
  if (editingItem.value) {
    form.put(route('ziswaf-categories.update', editingItem.value.id), {
      onSuccess: () => { modalOpen.value = false; form.reset(); editingItem.value = null; },
    });
  } else {
    form.post(route('ziswaf-categories.store'), {
      onSuccess: () => { modalOpen.value = false; form.reset(); },
    });
  }
};

const deleteItem = (item) => {
  if (confirm(`Hapus ${item.nama}?`)) {
    router.delete(route('ziswaf-categories.destroy', item.id));
  }
};

const doSearch = () => {
  router.get(route('ziswaf-categories.index'), { search: search.value, kategori: kategoriFilter.value }, { preserveState: true });
};
</script>

<template>
  <AdminLayout>
    <Head title="Kategori ZISWAF" />

    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Kategori ZISWAF</h1>
        <p class="text-gray-500 text-sm">Manajemen jenis zakat, infaq, sedekah, dan wakaf</p>
      </div>
      <button @click="openCreateModal" class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md">
        <PlusIcon class="w-5 h-5" /> Tambah Kategori
      </button>
    </div>

    <!-- Filter -->
    <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div class="flex gap-3 flex-wrap">
        <div class="flex-1 relative min-w-[200px]">
          <MagnifyingGlassIcon class="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input v-model="search" @keyup.enter="doSearch" type="text" placeholder="Cari kategori..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
        </div>
        <select v-model="kategoriFilter" @change="doSearch" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
          <option value="">Semua Kategori</option>
          <option value="zakat">Zakat</option>
          <option value="infaq">Infaq</option>
          <option value="sedekah">Sedekah</option>
          <option value="wakaf">Wakaf</option>
        </select>
        <button @click="doSearch" class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light">Cari</button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th class="px-6 py-3 text-left">Nama</th>
            <th class="px-6 py-3 text-left">Kategori</th>
            <th class="px-6 py-3 text-left">Nisab</th>
            <th class="px-6 py-3 text-left">Persentase</th>
            <th class="px-6 py-3 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="item in items.data" :key="item.id" class="hover:bg-gray-50">
            <td class="px-6 py-4">{{ item.nama }}</td>
            <td class="px-6 py-4">
              <span class="px-2 py-1 text-xs rounded-full" 
                    :class="{
                      'bg-green-100 text-green-800': item.kategori === 'zakat',
                      'bg-blue-100 text-blue-800': item.kategori === 'infaq',
                      'bg-yellow-100 text-yellow-800': item.kategori === 'sedekah',
                      'bg-purple-100 text-purple-800': item.kategori === 'wakaf'
                    }">
                {{ item.kategori }}
              </span>
            </td>
            <td class="px-6 py-4">{{ item.nisab ? 'Rp ' + Number(item.nisab).toLocaleString() : '-' }}</td>
            <td class="px-6 py-4">{{ item.persentase ? item.persentase + '%' : '-' }}</td>
            <td class="px-6 py-4 text-center">
              <button @click="openEdit(item)" class="text-gray-400 hover:text-primary mx-1"><PencilIcon class="w-5 h-5 inline" /></button>
              <button @click="deleteItem(item)" class="text-gray-400 hover:text-red-600 mx-1"><TrashIcon class="w-5 h-5 inline" /></button>
            </td>
          </tr>
          <tr v-if="!items.data.length">
            <td colspan="5" class="px-6 py-12 text-center text-gray-500">Tidak ada data</td>
          </tr>
        </tbody>
      </table>
      <div class="px-6 py-4 border-t">
        <Pagination :links="items.links" />
      </div>
    </div>

    <!-- Modal -->
    <Modal :show="modalOpen" :title="editingItem ? 'Edit Kategori ZISWAF' : 'Tambah Kategori ZISWAF'" @close="modalOpen = false">
      <form @submit.prevent="submit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nama Kategori</label>
          <input v-model="form.nama" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Zakat Maal, Zakat Fitrah, dll">
          <span v-if="form.errors.nama" class="text-red-500 text-xs">{{ form.errors.nama }}</span>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Kategori</label>
          <select v-model="form.kategori" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            <option value="zakat">Zakat</option>
            <option value="infaq">Infaq</option>
            <option value="sedekah">Sedekah</option>
            <option value="wakaf">Wakaf</option>
          </select>
          <span v-if="form.errors.kategori" class="text-red-500 text-xs">{{ form.errors.kategori }}</span>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
          <textarea v-model="form.deskripsi" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Deskripsi kategori..."></textarea>
          <span v-if="form.errors.deskripsi" class="text-red-500 text-xs">{{ form.errors.deskripsi }}</span>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nisab (Opsional)</label>
            <input v-model="form.nisab" type="number" step="0.01" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="0">
            <span v-if="form.errors.nisab" class="text-red-500 text-xs">{{ form.errors.nisab }}</span>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Persentase (%)</label>
            <input v-model="form.persentase" type="number" step="0.01" min="0" max="100" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="0">
            <span v-if="form.errors.persentase" class="text-red-500 text-xs">{{ form.errors.persentase }}</span>
          </div>
        </div>
        
        <div class="flex justify-end gap-3 pt-4 border-t">
          <button type="button" @click="modalOpen = false" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Batal</button>
          <button type="submit" :disabled="form.processing" class="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50">
            {{ form.processing ? 'Menyimpan...' : 'Simpan' }}
          </button>
        </div>
      </form>
    </Modal>
  </AdminLayout>
</template>
