<script setup>
import { ref } from 'vue';
import { router, Link, Head, useForm } from '@inertiajs/vue3';
import { PlusIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Modal from '@/Components/Modal.vue';
import Pagination from '@/Components/Pagination.vue';

const props = defineProps({
  // Ganti dengan props sesuai modul
  items: Object,
  filters: Object,
});

const search = ref(props.filters?.search || '');
const modalOpen = ref(false);
const editingItem = ref(null);

const form = useForm({
  // Sesuaikan field
  nama: '',
});

const openEdit = (item) => {
  editingItem.value = item;
  form.nama = item.nama;
  modalOpen.value = true;
};

const submit = () => {
  if (editingItem.value) {
    form.put(route('jumah.khatib.update', editingItem.value.id), {
      onSuccess: () => { modalOpen.value = false; form.reset(); editingItem.value = null; },
    });
  } else {
    form.post(route('jumah.khatib.store'), {
      onSuccess: () => { modalOpen.value = false; form.reset(); },
    });
  }
};

const deleteItem = (item) => {
  if (confirm(`Hapus ${item.nama}?`)) {
    router.delete(route('jumah.khatib.destroy', item.id));
  }
};
</script>

<template>
  <AdminLayout>
    <Head title="[Nama Modul]" />

    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">[Nama Modul]</h1>
        <p class="text-gray-500 text-sm">[Deskripsi singkat]</p>
      </div>
      <button @click="modalOpen = true" class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md">
        <PlusIcon class="w-5 h-5" /> Tambah
      </button>
    </div>

    <!-- Filter -->
    <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div class="flex gap-3">
        <div class="flex-1 relative">
          <MagnifyingGlassIcon class="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input v-model="search" @keyup.enter="router.get(route('[module].index'), { search }, { preserveState: true })" type="text" placeholder="Cari..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
        </div>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th class="px-6 py-3 text-left">Nama</th>
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
    <Modal :show="modalOpen" title="Tambah [Item]" @close="modalOpen = false">
      <form @submit.prevent="submit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nama</label>
          <input v-model="form.nama" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
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