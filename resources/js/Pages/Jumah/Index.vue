<script setup>
import { ref } from 'vue';
import { router, Link, Head, useForm } from '@inertiajs/vue3';
import { PlusIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon, CalendarIcon, UserGroupIcon } from '@heroicons/vue/24/outline';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Modal from '@/Components/Modal.vue';
import Pagination from '@/Components/Pagination.vue';

const props = defineProps({
  items: Object,
  schedules: Object,
  khatibs: Array,
  filters: Object,
});

const search = ref(props.filters?.search || '');
const modalOpen = ref(false);
const scheduleModalOpen = ref(false);
const editingItem = ref(null);
const activeTab = ref('khatib');

const form = useForm({
  nama: '',
  gelar: '',
  no_hp: '',
  spesialisasi: '',
  tipe: 'internal',
});

const scheduleForm = useForm({
  tanggal_jumat: '',
  khatib_id: '',
  imam_id: '',
  muadzin_id: '',
  tema: '',
});

const openCreateModal = () => {
  form.reset();
  form.tipe = 'internal';
  editingItem.value = null;
  modalOpen.value = true;
};

const openEdit = (item) => {
  editingItem.value = item;
  form.nama = item.nama;
  form.gelar = item.gelar;
  form.no_hp = item.no_hp;
  form.spesialisasi = item.spesialisasi;
  form.tipe = item.tipe;
  modalOpen.value = true;
};

const submitKhatib = () => {
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

const submitSchedule = () => {
  scheduleForm.post(route('jumah.schedule.store'), {
    onSuccess: () => { scheduleModalOpen.value = false; scheduleForm.reset(); },
  });
};

const deleteKhatib = (item) => {
  if (confirm(`Hapus ${item.nama}?`)) {
    router.delete(route('jumah.khatib.destroy', item.id));
  }
};

const deleteSchedule = (item) => {
  if (confirm(`Hapus jadwal tanggal ${item.tanggal_jumat}?`)) {
    router.delete(route('jumah.schedule.destroy', item.id));
  }
};

const doSearch = () => {
  router.get(route('jumah.index'), { search: search.value }, { preserveState: true });
};

const openScheduleModal = () => {
  scheduleForm.reset();
  scheduleModalOpen.value = true;
};
</script>

<template>
  <AdminLayout>
    <Head title="Jadwal Jumat" />

    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Jadwal Jumat</h1>
      <p class="text-gray-500 text-sm">Manajemen khatib dan jadwal shalat Jumat</p>
    </div>

    <!-- Tabs -->
    <div class="mb-6 border-b border-gray-200">
      <nav class="-mb-px flex space-x-8">
        <button @click="activeTab = 'khatib'" 
                :class="['py-4 px-1 border-b-2 font-medium text-sm', 
                         activeTab === 'khatib' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300']">
          <UserGroupIcon class="w-5 h-5 inline mr-2" />
          Daftar Khatib
        </button>
        <button @click="activeTab = 'schedule'" 
                :class="['py-4 px-1 border-b-2 font-medium text-sm', 
                         activeTab === 'schedule' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300']">
          <CalendarIcon class="w-5 h-5 inline mr-2" />
          Jadwal Jumat
        </button>
      </nav>
    </div>

    <!-- Tab Content: Khatib -->
    <div v-show="activeTab === 'khatib'">
      <div class="mb-6 flex justify-between items-center">
        <div>
          <h2 class="text-lg font-semibold text-gray-700">Data Khatib</h2>
          <p class="text-gray-500 text-sm">Kelola data khatib internal dan tamu</p>
        </div>
        <button @click="openCreateModal" class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md">
          <PlusIcon class="w-5 h-5" /> Tambah Khatib
        </button>
      </div>

      <!-- Filter -->
      <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div class="flex gap-3">
          <div class="flex-1 relative">
            <MagnifyingGlassIcon class="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
            <input v-model="search" @keyup.enter="doSearch" type="text" placeholder="Cari khatib..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
          </div>
          <button @click="doSearch" class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light">Cari</button>
        </div>
      </div>

      <!-- Table -->
      <div class="bg-white rounded-xl shadow-sm overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-gray-600 text-xs uppercase">
            <tr>
              <th class="px-6 py-3 text-left">Nama</th>
              <th class="px-6 py-3 text-left">Gelar</th>
              <th class="px-6 py-3 text-left">Tipe</th>
              <th class="px-6 py-3 text-left">Spesialisasi</th>
              <th class="px-6 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr v-for="item in items.data" :key="item.id" class="hover:bg-gray-50">
              <td class="px-6 py-4">{{ item.nama }}</td>
              <td class="px-6 py-4">{{ item.gelar || '-' }}</td>
              <td class="px-6 py-4">
                <span :class="item.tipe === 'internal' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'" 
                      class="px-2 py-1 text-xs rounded-full">
                  {{ item.tipe }}
                </span>
              </td>
              <td class="px-6 py-4">{{ item.spesialisasi || '-' }}</td>
              <td class="px-6 py-4 text-center">
                <button @click="openEdit(item)" class="text-gray-400 hover:text-primary mx-1"><PencilIcon class="w-5 h-5 inline" /></button>
                <button @click="deleteKhatib(item)" class="text-gray-400 hover:text-red-600 mx-1"><TrashIcon class="w-5 h-5 inline" /></button>
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
    </div>

    <!-- Tab Content: Schedule -->
    <div v-show="activeTab === 'schedule'">
      <div class="mb-6 flex justify-between items-center">
        <div>
          <h2 class="text-lg font-semibold text-gray-700">Jadwal Shalat Jumat</h2>
          <p class="text-gray-500 text-sm">Atur jadwal khatib, imam, dan muadzin</p>
        </div>
        <button @click="openScheduleModal" class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md">
          <PlusIcon class="w-5 h-5" /> Tambah Jadwal
        </button>
      </div>

      <!-- Table -->
      <div class="bg-white rounded-xl shadow-sm overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-gray-600 text-xs uppercase">
            <tr>
              <th class="px-6 py-3 text-left">Tanggal</th>
              <th class="px-6 py-3 text-left">Khatib</th>
              <th class="px-6 py-3 text-left">Imam</th>
              <th class="px-6 py-3 text-left">Muadzin</th>
              <th class="px-6 py-3 text-left">Tema</th>
              <th class="px-6 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr v-for="item in schedules.data" :key="item.id" class="hover:bg-gray-50">
              <td class="px-6 py-4">{{ new Date(item.tanggal_jumat).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</td>
              <td class="px-6 py-4">{{ item.khatib?.nama || '-' }}</td>
              <td class="px-6 py-4">{{ item.imam?.nama || '-' }}</td>
              <td class="px-6 py-4">{{ item.muadzin?.nama || '-' }}</td>
              <td class="px-6 py-4">{{ item.tema || '-' }}</td>
              <td class="px-6 py-4 text-center">
                <button @click="deleteSchedule(item)" class="text-gray-400 hover:text-red-600 mx-1"><TrashIcon class="w-5 h-5 inline" /></button>
              </td>
            </tr>
            <tr v-if="!schedules.data.length">
              <td colspan="6" class="px-6 py-12 text-center text-gray-500">Belum ada jadwal</td>
            </tr>
          </tbody>
        </table>
        <div class="px-6 py-4 border-t">
          <Pagination :links="schedules.links" />
        </div>
      </div>
    </div>

    <!-- Modal Khatib -->
    <Modal :show="modalOpen" :title="editingItem ? 'Edit Khatib' : 'Tambah Khatib'" @close="modalOpen = false">
      <form @submit.prevent="submitKhatib" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
          <input v-model="form.nama" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" required>
          <span v-if="form.errors.nama" class="text-red-500 text-xs">{{ form.errors.nama }}</span>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Gelar (Opsional)</label>
          <input v-model="form.gelar" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Lc., M.Ag., dll">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">No. HP</label>
          <input v-model="form.no_hp" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="08xxxxxxxxxx">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Spesialisasi</label>
          <textarea v-model="form.spesialisasi" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Bidang keahlian..."></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Tipe Khatib</label>
          <select v-model="form.tipe" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            <option value="internal">Internal Masjid</option>
            <option value="tamu">Khatib Tamu</option>
          </select>
        </div>
        <div class="flex justify-end gap-3 pt-4 border-t">
          <button type="button" @click="modalOpen = false" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Batal</button>
          <button type="submit" :disabled="form.processing" class="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50">
            {{ form.processing ? 'Menyimpan...' : 'Simpan' }}
          </button>
        </div>
      </form>
    </Modal>

    <!-- Modal Schedule -->
    <Modal :show="scheduleModalOpen" title="Tambah Jadwal Jumat" @close="scheduleModalOpen = false">
      <form @submit.prevent="submitSchedule" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Jumat</label>
          <input v-model="scheduleForm.tanggal_jumat" type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" required>
          <span v-if="scheduleForm.errors.tanggal_jumat" class="text-red-500 text-xs">{{ scheduleForm.errors.tanggal_jumat }}</span>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Khatib</label>
          <select v-model="scheduleForm.khatib_id" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" required>
            <option value="">Pilih Khatib</option>
            <option v-for="k in khatibs" :key="k.id" :value="k.id">{{ k.nama }}</option>
          </select>
          <span v-if="scheduleForm.errors.khatib_id" class="text-red-500 text-xs">{{ scheduleForm.errors.khatib_id }}</span>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Imam (Opsional)</label>
            <select v-model="scheduleForm.imam_id" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
              <option value="">Pilih Imam</option>
              <option v-for="k in khatibs" :key="k.id" :value="k.id">{{ k.nama }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Muadzin (Opsional)</label>
            <select v-model="scheduleForm.muadzin_id" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
              <option value="">Pilih Muadzin</option>
              <option v-for="k in khatibs" :key="k.id" :value="k.id">{{ k.nama }}</option>
            </select>
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Tema Khutbah (Opsional)</label>
          <input v-model="scheduleForm.tema" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Tema khutbah...">
        </div>
        <div class="flex justify-end gap-3 pt-4 border-t">
          <button type="button" @click="scheduleModalOpen = false" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Batal</button>
          <button type="submit" :disabled="scheduleForm.processing" class="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50">
            {{ scheduleForm.processing ? 'Menyimpan...' : 'Simpan' }}
          </button>
        </div>
      </form>
    </Modal>
  </AdminLayout>
</template>
