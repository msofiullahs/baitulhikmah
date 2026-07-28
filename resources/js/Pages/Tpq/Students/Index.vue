<script setup>
import { ref } from 'vue';
import { router, Link, Head, useForm } from '@inertiajs/vue3';
import { PlusIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon, AcademicCapIcon } from '@heroicons/vue/24/outline';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Modal from '@/Components/Modal.vue';
import Pagination from '@/Components/Pagination.vue';

const props = defineProps({
  students: Object,
  classes: Array,
});

const search = ref('');
const modalOpen = ref(false);
const editMode = ref(false);
const currentStudent = ref(null);

const form = useForm({
  nis: '',
  nama: '',
  jenis_kelamin: 'L',
  tanggal_lahir: '',
  nama_ortu: '',
  no_hp_ortu: '',
  alamat: '',
  tanggal_masuk: new Date().toISOString().split('T')[0],
  class_ids: [],
});

const submit = () => {
  if (editMode.value && currentStudent.value) {
    form.post(route('tpq.students.update', currentStudent.value.id), {
      onSuccess: () => { closeModal(); },
    });
  } else {
    form.post(route('tpq.students.store'), {
      onSuccess: () => { closeModal(); },
    });
  }
};

const closeModal = () => {
  modalOpen.value = false;
  editMode.value = false;
  currentStudent.value = null;
  form.reset();
};

const deleteItem = (item) => {
  if (confirm(`Hapus santri "${item.nama}"?`)) {
    router.delete(route('tpq.students.destroy', item.id));
  }
};

const filterStudents = () => {
  router.get(route('tpq.students.index'), { search: search.value }, { preserveState: true });
};

const genderBadge = (gender) => {
  return gender === 'L' 
    ? '<span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Laki-laki</span>'
    : '<span class="px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-xs font-medium">Perempuan</span>';
};

const statusBadge = (status) => {
  const badges = {
    aktif: 'bg-green-100 text-green-800',
    lulus: 'bg-blue-100 text-blue-800',
    pindah: 'bg-yellow-100 text-yellow-800',
    nonaktif: 'bg-gray-100 text-gray-800',
  };
  const labels = { aktif: 'Aktif', lulus: 'Lulus', pindah: 'Pindah', nonaktif: 'Nonaktif' };
  return `<span class="px-2 py-1 rounded-full text-xs font-medium ${badges[status] || badges.aktif}">${labels[status] || status}</span>`;
};
</script>

<template>
  <AdminLayout>
    <Head title="TPQ - Santri" />

    <!-- Header -->
    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Data Santri TPQ</h1>
        <p class="text-gray-500 text-sm">Kelola data santri, kelas, dan pembayaran SPP</p>
      </div>
      <button @click="modalOpen = true; editMode = false; form.reset()" class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md">
        <PlusIcon class="w-5 h-5" /> Tambah Santri
      </button>
    </div>

    <!-- Filter -->
    <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div class="flex gap-3">
        <div class="flex-1 relative">
          <MagnifyingGlassIcon class="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input v-model="search" @keyup.enter="filterStudents" type="text" placeholder="Cari nama santri..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
        </div>
        <button @click="filterStudents" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition">Cari</button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th class="px-6 py-3 text-left">NIS</th>
            <th class="px-6 py-3 text-left">Nama Santri</th>
            <th class="px-6 py-3 text-center">L/P</th>
            <th class="px-6 py-3 text-left">Nama Orang Tua</th>
            <th class="px-6 py-3 text-left">No. HP</th>
            <th class="px-6 py-3 text-center">Kelas</th>
            <th class="px-6 py-3 text-center">Status</th>
            <th class="px-6 py-3 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="item in students.data" :key="item.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 font-mono text-xs">{{ item.nis }}</td>
            <td class="px-6 py-4">
              <div class="font-medium">{{ item.nama }}</div>
              <div class="text-xs text-gray-500">{{ item.alamat || '-' }}</div>
            </td>
            <td class="px-6 py-4 text-center" v-html="genderBadge(item.jenis_kelamin)"></td>
            <td class="px-6 py-4">{{ item.nama_ortu }}</td>
            <td class="px-6 py-4">{{ item.no_hp_ortu }}</td>
            <td class="px-6 py-4 text-center text-xs">
              <span v-if="item.classes?.length">{{ item.classes.map(c => c.nama).join(', ') }}</span>
              <span v-else class="text-gray-400">-</span>
            </td>
            <td class="px-6 py-4 text-center" v-html="statusBadge(item.status || 'aktif')"></td>
            <td class="px-6 py-4 text-center">
              <button @click="deleteItem(item)" class="text-gray-400 hover:text-red-600 mx-1" title="Hapus"><TrashIcon class="w-5 h-5 inline" /></button>
            </td>
          </tr>
          <tr v-if="!students.data.length">
            <td colspan="8" class="px-6 py-12 text-center text-gray-500">Tidak ada data santri</td>
          </tr>
        </tbody>
      </table>
      <div class="px-6 py-4 border-t">
        <Pagination :links="students.links" />
      </div>
    </div>

    <!-- Modal Form -->
    <Modal :show="modalOpen" title="Tambah Santri Baru" @close="closeModal">
      <form @submit.prevent="submit" class="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">NIS <span class="text-red-500">*</span></label>
            <input v-model="form.nis" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Nomor Induk Santri">
            <span v-if="form.errors.nis" class="text-red-500 text-xs">{{ form.errors.nis }}</span>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Kelamin <span class="text-red-500">*</span></label>
            <select v-model="form.jenis_kelamin" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap <span class="text-red-500">*</span></label>
          <input v-model="form.nama" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
          <span v-if="form.errors.nama" class="text-red-500 text-xs">{{ form.errors.nama }}</span>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Lahir</label>
            <input v-model="form.tanggal_lahir" type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Masuk <span class="text-red-500">*</span></label>
            <input v-model="form.tanggal_masuk" type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            <span v-if="form.errors.tanggal_masuk" class="text-red-500 text-xs">{{ form.errors.tanggal_masuk }}</span>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nama Orang Tua <span class="text-red-500">*</span></label>
          <input v-model="form.nama_ortu" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
          <span v-if="form.errors.nama_ortu" class="text-red-500 text-xs">{{ form.errors.nama_ortu }}</span>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">No. HP Orang Tua <span class="text-red-500">*</span></label>
          <input v-model="form.no_hp_ortu" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
          <span v-if="form.errors.no_hp_ortu" class="text-red-500 text-xs">{{ form.errors.no_hp_ortu }}</span>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Alamat</label>
          <textarea v-model="form.alamat" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Kelas (Multi-select)</label>
          <select v-model="form.class_ids" multiple class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none h-32">
            <option v-for="cls in classes" :key="cls.id" :value="cls.id">{{ cls.nama }}</option>
          </select>
          <p class="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd untuk pilih beberapa kelas</p>
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
