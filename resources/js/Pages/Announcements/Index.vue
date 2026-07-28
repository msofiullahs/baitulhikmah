<script setup>
import { ref } from 'vue';
import { router, Link, Head, useForm } from '@inertiajs/vue3';
import { PlusIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon, SpeakerphoneIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/vue/24/outline';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Modal from '@/Components/Modal.vue';
import Pagination from '@/Components/Pagination.vue';

const props = defineProps({
  announcements: Object,
  filters: Object,
});

const search = ref(props.filters?.search || '');
const tipeFilter = ref(props.filters?.tipe || '');
const modalOpen = ref(false);
const editMode = ref(false);
const currentAnnouncement = ref(null);

const form = useForm({
  judul: '',
  isi: '',
  tipe: 'umum',
  is_running_text: false,
  send_whatsapp: false,
  send_email: false,
  gambar: null,
});

const openEdit = (announcement) => {
  editMode.value = true;
  currentAnnouncement.value = announcement;
  form.judul = announcement.judul;
  form.isi = announcement.isi;
  form.tipe = announcement.tipe;
  form.is_running_text = announcement.is_running_text;
  form.send_whatsapp = announcement.send_whatsapp;
  form.send_email = announcement.send_email;
  modalOpen.value = true;
};

const submit = () => {
  if (editMode.value && currentAnnouncement.value) {
    form.post(route('announcements.update', currentAnnouncement.value.id), {
      onSuccess: () => { closeModal(); },
    });
  } else {
    form.post(route('announcements.store'), {
      onSuccess: () => { closeModal(); },
    });
  }
};

const closeModal = () => {
  modalOpen.value = false;
  editMode.value = false;
  currentAnnouncement.value = null;
  form.reset();
};

const deleteItem = (item) => {
  if (confirm(`Hapus pengumuman "${item.judul}"?`)) {
    router.delete(route('announcements.destroy', item.id));
  }
};

const filterAnnouncements = () => {
  router.get(route('announcements.index'), { 
    search: search.value, 
    tipe: tipeFilter.value 
  }, { preserveState: true });
};

const tipeBadge = (tipe) => {
  const badges = {
    umum: 'bg-blue-100 text-blue-800',
    urgent: 'bg-red-100 text-red-800',
    info_sholat: 'bg-green-100 text-green-800',
  };
  const labels = {
    umum: 'Umum',
    urgent: 'Urgent',
    info_sholat: 'Info Sholat',
  };
  return `<span class="px-2 py-1 rounded-full text-xs font-medium ${badges[tipe] || badges.umum}">${labels[tipe] || tipe}</span>`;
};

const statusBadge = (status) => {
  const badges = {
    draft: 'bg-gray-100 text-gray-800',
    published: 'bg-green-100 text-green-800',
    archived: 'bg-yellow-100 text-yellow-800',
  };
  const labels = {
    draft: 'Draft',
    published: 'Published',
    archived: 'Archived',
  };
  return `<span class="px-2 py-1 rounded-full text-xs font-medium ${badges[status] || badges.draft}">${labels[status] || status}</span>`;
};
</script>

<template>
  <AdminLayout>
    <Head title="Pengumuman" />

    <!-- Header -->
    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Pengumuman</h1>
        <p class="text-gray-500 text-sm">Kelola pengumuman dan broadcast ke jamaah</p>
      </div>
      <button @click="modalOpen = true; editMode = false; form.reset()" class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md">
        <PlusIcon class="w-5 h-5" /> Buat Pengumuman
      </button>
    </div>

    <!-- Filter -->
    <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div class="flex gap-3 flex-wrap">
        <div class="flex-1 min-w-[200px] relative">
          <MagnifyingGlassIcon class="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input v-model="search" @keyup.enter="filterAnnouncements" type="text" placeholder="Cari judul pengumuman..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
        </div>
        <select v-model="tipeFilter" @change="filterAnnouncements" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
          <option value="">Semua Tipe</option>
          <option value="umum">Umum</option>
          <option value="urgent">Urgent</option>
          <option value="info_sholat">Info Sholat</option>
        </select>
        <button @click="filterAnnouncements" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition">Filter</button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th class="px-6 py-3 text-left">Judul</th>
            <th class="px-6 py-3 text-center">Tipe</th>
            <th class="px-6 py-3 text-center">Status</th>
            <th class="px-6 py-3 text-center">Running Text</th>
            <th class="px-6 py-3 text-left">Dibuat Oleh</th>
            <th class="px-6 py-3 text-center">Tanggal</th>
            <th class="px-6 py-3 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="item in announcements.data" :key="item.id" class="hover:bg-gray-50">
            <td class="px-6 py-4">
              <div class="font-medium">{{ item.judul }}</div>
              <div class="text-xs text-gray-500 truncate max-w-xs">{{ item.isi.substring(0, 80) }}...</div>
            </td>
            <td class="px-6 py-4 text-center" v-html="tipeBadge(item.tipe)"></td>
            <td class="px-6 py-4 text-center" v-html="statusBadge(item.status)"></td>
            <td class="px-6 py-4 text-center">
              <span v-if="item.is_running_text" class="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">✓</span>
              <span v-else class="text-gray-400">-</span>
            </td>
            <td class="px-6 py-4">{{ item.creator?.name || '-' }}</td>
            <td class="px-6 py-4 text-center text-xs">
              <div>{{ new Date(item.created_at).toLocaleDateString('id-ID') }}</div>
            </td>
            <td class="px-6 py-4 text-center">
              <button @click="openEdit(item)" class="text-gray-400 hover:text-primary mx-1" title="Edit"><PencilIcon class="w-5 h-5 inline" /></button>
              <button @click="deleteItem(item)" class="text-gray-400 hover:text-red-600 mx-1" title="Hapus"><TrashIcon class="w-5 h-5 inline" /></button>
            </td>
          </tr>
          <tr v-if="!announcements.data.length">
            <td colspan="7" class="px-6 py-12 text-center text-gray-500">Tidak ada data pengumuman</td>
          </tr>
        </tbody>
      </table>
      <div class="px-6 py-4 border-t">
        <Pagination :links="announcements.links" />
      </div>
    </div>

    <!-- Modal Form -->
    <Modal :show="modalOpen" :title="editMode ? 'Edit Pengumuman' : 'Buat Pengumuman Baru'" @close="closeModal">
      <form @submit.prevent="submit" class="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Judul <span class="text-red-500">*</span></label>
          <input v-model="form.judul" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Pengumuman Sholat Ied">
          <span v-if="form.errors.judul" class="text-red-500 text-xs">{{ form.errors.judul }}</span>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Isi Pengumuman <span class="text-red-500">*</span></label>
          <textarea v-model="form.isi" rows="5" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Tulis isi pengumuman..."></textarea>
          <span v-if="form.errors.isi" class="text-red-500 text-xs">{{ form.errors.isi }}</span>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Tipe <span class="text-red-500">*</span></label>
            <select v-model="form.tipe" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
              <option value="umum">Umum</option>
              <option value="urgent">Urgent / Penting</option>
              <option value="info_sholat">Info Sholat</option>
            </select>
            <span v-if="form.errors.tipe" class="text-red-500 text-xs">{{ form.errors.tipe }}</span>
          </div>
          <div v-if="!editMode">
            <label class="block text-sm font-medium text-gray-700 mb-1">Gambar (Opsional)</label>
            <input type="file" @input="form.gambar = $event.target.files[0]" accept="image/*" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            <span v-if="form.errors.gambar" class="text-red-500 text-xs">{{ form.errors.gambar }}</span>
          </div>
        </div>

        <div class="border-t pt-4">
          <h4 class="text-sm font-semibold text-gray-700 mb-3">Opsi Broadcast</h4>
          <div class="space-y-2">
            <label class="flex items-center gap-2">
              <input v-model="form.is_running_text" type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary">
              <span class="text-sm text-gray-700">Tampilkan sebagai Running Text (TV Masjid)</span>
            </label>
            <label class="flex items-center gap-2">
              <input v-model="form.send_whatsapp" type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary">
              <span class="text-sm text-gray-700">Kirim via WhatsApp Broadcast</span>
            </label>
            <label class="flex items-center gap-2">
              <input v-model="form.send_email" type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary">
              <span class="text-sm text-gray-700">Kirim via Email</span>
            </label>
          </div>
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
