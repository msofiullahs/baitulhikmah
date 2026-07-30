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
const modalOpen = ref(false);
const editingItem = ref(null);

const form = useForm({
  nama: '',
});

const openCreateModal = () => {
  form.reset();
  editingItem.value = null;
  modalOpen.value = true;
};

const openEdit = (item) => {
  editingItem.value = item;
  form.nama = item.nama;
  modalOpen.value = true;
};

const submit = () => {
  if (editingItem.value) {
    form.put(route('asset-categories.update', editingItem.value.id), {
      onSuccess: () => { modalOpen.value = false; form.reset(); editingItem.value = null; },
    });
  } else {
    form.post(route('asset-categories.store'), {
      onSuccess: () => { modalOpen.value = false; form.reset(); },
    });
  }
};

const deleteItem = (item) => {
  if (confirm(`Hapus ${item.nama}?`)) {
    router.delete(route('asset-categories.destroy', item.id));
  }
};

const doSearch = () => {
  router.get(route('asset-categories.index'), { search: search.value }, { preserveState: true });
};
</script>

<template>
  <AdminLayout>
    <Head title="Kategori Aset" />

    <div class="mb-6 flex justify-between items-center">
      <div class="flex items-center gap-4">
        <Link :href="route('assets.index')" class="text-gray-500 hover:text-primary transition flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali
        </Link>
        <div>
          <h1 class="text-2xl font-bold text-gray-800">Kategori Aset</h1>
          <p class="text-gray-500 text-sm">Manajemen kategori aset masjid</p>
        </div>
      </div>
      <button @click="openCreateModal" class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md">
        <PlusIcon class="w-5 h-5" /> Tambah Kategori
      </button>
    </div>

    <!-- Filter -->
    <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div class="flex gap-3">
        <div class="flex-1 relative">
          <MagnifyingGlassIcon class="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input v-model="search" @keyup.enter="doSearch" type="text" placeholder="Cari kategori..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
        </div>
        <button @click="doSearch" class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light">Cari</button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th class="px-6 py-3 text-left">Nama Kategori</th>
            <th class="px-6 py-3 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="item in items.data" :key="item.id" class="hover:bg-gray-50">
            <td class="px-6 py-4">{{ item.nama }}</td>
            <td class="px-6 py-4 text-center">
              <button @click="openEdit(item)" class="text-gray-400 hover:text-primary mx-1"><PencilIcon class="w-5 h-5 inline" /></button>
              <button @click="deleteItem(item)" class="text-gray-400 hover:text-red-600 mx-1"><TrashIcon class="w-5 h-5 inline" /></button>
            </td>
          </tr>
          <tr v-if="!items.data.length">
            <td colspan="2" class="px-6 py-12 text-center text-gray-500">Tidak ada data</td>
          </tr>
        </tbody>
      </table>
      <div class="px-6 py-4 border-t">
        <Pagination :links="items.links" />
      </div>
    </div>

    <!-- Modal -->
    <Modal :show="modalOpen" :title="editingItem ? 'Edit Kategori Aset' : 'Tambah Kategori Aset'" @close="modalOpen = false">
      <form @submit.prevent="submit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nama Kategori</label>
          <input v-model="form.nama" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Elektronik, Furniture, Kendaraan, dll">
          <span v-if="form.errors.nama" class="text-red-500 text-xs">{{ form.errors.nama }}</span>
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
