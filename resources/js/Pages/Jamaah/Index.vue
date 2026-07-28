<script setup>
import { ref } from 'vue';
import { router, Head, useForm } from '@inertiajs/vue3';
import { PlusIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon, UserIcon, PhoneIcon, MapPinIcon } from '@heroicons/vue/24/outline';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Modal from '@/Components/Modal.vue';
import Pagination from '@/Components/Pagination.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import InputError from '@/Components/InputError.vue';

const props = defineProps({
  jamaahs: Object,
  categories: Array,
  filters: Object,
});

const search = ref(props.filters?.search || '');
const modalOpen = ref(false);
const editMode = ref(false);
const selectedJamaah = ref(null);

const form = useForm({
  nama: '',
  nik: '',
  jenis_kelamin: 'L',
  tanggal_lahir: '',
  alamat: '',
  rt: '',
  rw: '',
  kelurahan: '',
  kecamatan: '',
  kota: '',
  no_hp: '',
  email: '',
  pekerjaan: '',
  status: 'aktif',
  catatan: '',
  category_ids: [],
  foto: null,
});

const openCreateModal = () => {
  editMode.value = false;
  selectedJamaah.value = null;
  form.reset();
  form.category_ids = [];
  modalOpen.value = true;
};

const openEditModal = (jamaah) => {
  editMode.value = true;
  selectedJamaah.value = jamaah;
  form.nama = jamaah.nama;
  form.nik = jamaah.nik || '';
  form.jenis_kelamin = jamaah.jenis_kelamin;
  form.tanggal_lahir = jamaah.tanggal_lahir ? new Date(jamaah.tanggal_lahir).toISOString().split('T')[0] : '';
  form.alamat = jamaah.alamat || '';
  form.rt = jamaah.rt || '';
  form.rw = jamaah.rw || '';
  form.kelurahan = jamaah.kelurahan || '';
  form.kecamatan = jamaah.kecamatan || '';
  form.kota = jamaah.kota || '';
  form.no_hp = jamaah.no_hp || '';
  form.email = jamaah.email || '';
  form.pekerjaan = jamaah.pekerjaan || '';
  form.status = jamaah.status || 'aktif';
  form.catatan = jamaah.catatan || '';
  form.category_ids = jamaah.categories ? jamaah.categories.map(c => c.id) : [];
  modalOpen.value = true;
};

const submit = () => {
  if (editMode.value && selectedJamaah.value) {
    form.post(route('jamaah.update', selectedJamaah.value.id), {
      onSuccess: () => { modalOpen.value = false; form.reset(); },
      onError: () => {},
    });
  } else {
    form.post(route('jamaah.store'), {
      onSuccess: () => { modalOpen.value = false; form.reset(); },
      onError: () => {},
    });
  }
};

const deleteItem = (jamaah) => {
  if (confirm(`Apakah Anda yakin ingin menghapus jamaah ${jamaah.nama}?`)) {
    router.delete(route('jamaah.destroy', jamaah.id));
  }
};

const searchJamaah = () => {
  router.get(route('jamaah.index'), { search: search.value }, { preserveState: true });
};
</script>

<template>
  <AdminLayout>
    <Head title="Data Jamaah" />

    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Data Jamaah</h1>
        <p class="text-gray-500 text-sm">Kelola data jamaah masjid</p>
      </div>
      <button @click="openCreateModal" class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md">
        <PlusIcon class="w-5 h-5" /> Tambah Jamaah
      </button>
    </div>

    <!-- Filter -->
    <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div class="flex gap-3">
        <div class="flex-1 relative">
          <MagnifyingGlassIcon class="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input 
            v-model="search" 
            @keyup.enter="searchJamaah" 
            type="text" 
            placeholder="Cari nama atau nomor HP..." 
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          >
        </div>
        <button @click="searchJamaah" class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light transition">
          Cari
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th class="px-6 py-3 text-left">Nama</th>
            <th class="px-6 py-3 text-left">Kontak</th>
            <th class="px-6 py-3 text-left">Alamat</th>
            <th class="px-6 py-3 text-center">Kategori</th>
            <th class="px-6 py-3 text-center">Status</th>
            <th class="px-6 py-3 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="item in jamaahs.data" :key="item.id" class="hover:bg-gray-50">
            <td class="px-6 py-4">
              <div class="flex items-center gap-3">
                <div v-if="item.foto" class="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                  <img :src="`/storage/${item.foto}`" :alt="item.nama" class="w-full h-full object-cover">
                </div>
                <div v-else class="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white font-semibold">
                  {{ item.nama.charAt(0).toUpperCase() }}
                </div>
                <div>
                  <div class="font-medium text-gray-900">{{ item.nama }}</div>
                  <div class="text-xs text-gray-500">{{ item.jenis_kelamin === 'L' ? 'Laki-laki' : 'Perempuan' }}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center gap-2 text-gray-600">
                <PhoneIcon class="w-4 h-4" />
                <span>{{ item.no_hp || '-' }}</span>
              </div>
              <div class="text-xs text-gray-500 mt-1">{{ item.email || '-' }}</div>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center gap-2 text-gray-600">
                <MapPinIcon class="w-4 h-4" />
                <span class="truncate max-w-xs">{{ item.alamat || '-' }}</span>
              </div>
            </td>
            <td class="px-6 py-4 text-center">
              <div class="flex flex-wrap gap-1 justify-center">
                <span v-for="cat in item.categories" :key="cat.id" class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {{ cat.nama }}
                </span>
                <span v-if="!item.categories || item.categories.length === 0" class="text-gray-400">-</span>
              </div>
            </td>
            <td class="px-6 py-4 text-center">
              <span :class="{
                'bg-green-100 text-green-800': item.status === 'aktif',
                'bg-yellow-100 text-yellow-800': item.status === 'pindah',
                'bg-gray-100 text-gray-800': item.status === 'meninggal',
                'bg-red-100 text-red-800': item.status === 'nonaktif'
              }" class="px-2 py-1 text-xs rounded-full font-medium">
                {{ item.status }}
              </span>
            </td>
            <td class="px-6 py-4 text-center">
              <button @click="openEditModal(item)" class="text-gray-400 hover:text-primary mx-1" title="Edit">
                <PencilIcon class="w-5 h-5 inline" />
              </button>
              <button @click="deleteItem(item)" class="text-gray-400 hover:text-red-600 mx-1" title="Hapus">
                <TrashIcon class="w-5 h-5 inline" />
              </button>
            </td>
          </tr>
          <tr v-if="!jamaahs.data || jamaahs.data.length === 0">
            <td colspan="6" class="px-6 py-12 text-center text-gray-500">
              <UserIcon class="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>Tidak ada data jamaah</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="px-6 py-4 border-t">
        <Pagination :links="jamaahs.links" />
      </div>
    </div>

    <!-- Modal -->
    <Modal :show="modalOpen" :title="editMode ? 'Edit Jamaah' : 'Tambah Jamaah Baru'" @close="modalOpen = false" max-width="4xl">
      <form @submit.prevent="submit" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Nama -->
          <div>
            <InputLabel for="nama" value="Nama Lengkap *" />
            <TextInput id="nama" v-model="form.nama" type="text" class="mt-1 block w-full" required />
            <InputError :message="form.errors.nama" class="mt-1" />
          </div>

          <!-- NIK -->
          <div>
            <InputLabel for="nik" value="NIK" />
            <TextInput id="nik" v-model="form.nik" type="text" class="mt-1 block w-full" />
            <InputError :message="form.errors.nik" class="mt-1" />
          </div>

          <!-- Jenis Kelamin -->
          <div>
            <InputLabel for="jenis_kelamin" value="Jenis Kelamin *" />
            <select id="jenis_kelamin" v-model="form.jenis_kelamin" class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary">
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </select>
            <InputError :message="form.errors.jenis_kelamin" class="mt-1" />
          </div>

          <!-- Tanggal Lahir -->
          <div>
            <InputLabel for="tanggal_lahir" value="Tanggal Lahir" />
            <TextInput id="tanggal_lahir" v-model="form.tanggal_lahir" type="date" class="mt-1 block w-full" />
            <InputError :message="form.errors.tanggal_lahir" class="mt-1" />
          </div>

          <!-- No HP -->
          <div>
            <InputLabel for="no_hp" value="Nomor HP" />
            <TextInput id="no_hp" v-model="form.no_hp" type="text" class="mt-1 block w-full" placeholder="08xxxxxxxxxx" />
            <InputError :message="form.errors.no_hp" class="mt-1" />
          </div>

          <!-- Email -->
          <div>
            <InputLabel for="email" value="Email" />
            <TextInput id="email" v-model="form.email" type="email" class="mt-1 block w-full" />
            <InputError :message="form.errors.email" class="mt-1" />
          </div>

          <!-- Pekerjaan -->
          <div>
            <InputLabel for="pekerjaan" value="Pekerjaan" />
            <TextInput id="pekerjaan" v-model="form.pekerjaan" type="text" class="mt-1 block w-full" />
            <InputError :message="form.errors.pekerjaan" class="mt-1" />
          </div>

          <!-- Status -->
          <div>
            <InputLabel for="status" value="Status" />
            <select id="status" v-model="form.status" class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary">
              <option value="aktif">Aktif</option>
              <option value="pindah">Pindah</option>
              <option value="meninggal">Meninggal</option>
              <option value="nonaktif">Nonaktif</option>
            </select>
            <InputError :message="form.errors.status" class="mt-1" />
          </div>
        </div>

        <!-- Alamat -->
        <div>
          <InputLabel value="Alamat Lengkap" />
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-1">
            <div class="md:col-span-2">
              <TextInput v-model="form.alamat" type="text" class="block w-full" placeholder="Nama jalan, gang, dll" />
            </div>
            <div class="grid grid-cols-2 gap-2">
              <TextInput v-model="form.rt" type="text" class="block w-full" placeholder="RT" />
              <TextInput v-model="form.rw" type="text" class="block w-full" placeholder="RW" />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
            <TextInput v-model="form.kelurahan" type="text" class="block w-full" placeholder="Kelurahan" />
            <TextInput v-model="form.kecamatan" type="text" class="block w-full" placeholder="Kecamatan" />
            <TextInput v-model="form.kota" type="text" class="block w-full" placeholder="Kota/Kabupaten" />
          </div>
          <InputError :message="form.errors.alamat" class="mt-1" />
        </div>

        <!-- Kategori -->
        <div>
          <InputLabel value="Kategori Jamaah" />
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
            <label v-for="cat in categories" :key="cat.id" class="flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="checkbox" :value="cat.id" v-model="form.category_ids" class="rounded text-primary focus:ring-primary">
              <span class="text-sm">{{ cat.nama }}</span>
            </label>
          </div>
        </div>

        <!-- Catatan -->
        <div>
          <InputLabel for="catatan" value="Catatan" />
          <textarea id="catatan" v-model="form.catatan" rows="3" class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary" placeholder="Catatan khusus..."></textarea>
          <InputError :message="form.errors.catatan" class="mt-1" />
        </div>

        <!-- Foto -->
        <div>
          <InputLabel for="foto" value="Foto Jamaah" />
          <input id="foto" type="file" @input="form.foto = $event.target.files[0]" accept="image/*" class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-light file:text-white hover:file:bg-primary" />
          <InputError :message="form.errors.foto" class="mt-1" />
          <div v-if="editMode && selectedJamaah?.foto" class="mt-2">
            <img :src="`/storage/${selectedJamaah.foto}`" alt="Foto saat ini" class="w-20 h-20 object-cover rounded-lg">
          </div>
        </div>

        <div class="flex justify-end gap-3 pt-4 border-t">
          <SecondaryButton @click="modalOpen = false">Batal</SecondaryButton>
          <PrimaryButton :disabled="form.processing">
            {{ form.processing ? 'Menyimpan...' : 'Simpan' }}
          </PrimaryButton>
        </div>
      </form>
    </Modal>
  </AdminLayout>
</template>