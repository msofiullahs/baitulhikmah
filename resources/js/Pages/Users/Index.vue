<script setup>
import { ref } from 'vue';
import { router, Link, Head, useForm } from '@inertiajs/vue3';
import { PlusIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon, UserCircleIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Modal from '@/Components/Modal.vue';
import Pagination from '@/Components/Pagination.vue';

const props = defineProps({
  users: Object,
  filters: Object,
});

const search = ref(props.filters?.search || '');
const roleFilter = ref(props.filters?.role || '');
const modalOpen = ref(false);
const editMode = ref(false);
const currentUser = ref(null);

const form = useForm({
  name: '',
  username: '',
  email: '',
  password: '',
  password_confirmation: '',
  role: '',
  phone: '',
  is_active: true,
});

const openEdit = (user) => {
  editMode.value = true;
  currentUser.value = user;
  form.name = user.name;
  form.username = user.username;
  form.email = user.email || '';
  form.phone = user.phone || '';
  form.role = user.roles[0]?.name || '';
  form.is_active = user.is_active;
  modalOpen.value = true;
};

const submit = () => {
  if (editMode.value && currentUser.value) {
    form.post(route('users.update', currentUser.value.id), {
      onSuccess: () => { closeModal(); },
    });
  } else {
    form.post(route('users.store'), {
      onSuccess: () => { closeModal(); },
    });
  }
};

const closeModal = () => {
  modalOpen.value = false;
  editMode.value = false;
  currentUser.value = null;
  form.reset();
};

const deleteItem = (item) => {
  if (confirm(`Hapus user "${item.name}"?`)) {
    router.delete(route('users.destroy', item.id));
  }
};

const filterUsers = () => {
  router.get(route('users.index'), { 
    search: search.value, 
    role: roleFilter.value 
  }, { preserveState: true });
};

const roleBadge = (roles) => {
  if (!roles || roles.length === 0) return '<span class="text-gray-400">-</span>';
  return roles.map(r => `<span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">${r.name}</span>`).join(' ');
};

const statusBadge = (isActive) => {
  return isActive 
    ? '<span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Aktif</span>'
    : '<span class="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Nonaktif</span>';
};
</script>

<template>
  <AdminLayout>
    <Head title="Manajemen Pengguna" />

    <!-- Header -->
    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Manajemen Pengguna</h1>
        <p class="text-gray-500 text-sm">Kelola user, role, dan permissions</p>
      </div>
      <button @click="modalOpen = true; editMode = false; form.reset()" class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md">
        <PlusIcon class="w-5 h-5" /> Tambah User
      </button>
    </div>

    <!-- Filter -->
    <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div class="flex gap-3 flex-wrap">
        <div class="flex-1 min-w-[200px] relative">
          <MagnifyingGlassIcon class="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input v-model="search" @keyup.enter="filterUsers" type="text" placeholder="Cari nama atau username..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
        </div>
        <select v-model="roleFilter" @change="filterUsers" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
          <option value="">Semua Role</option>
          <option value="Super Admin">Super Admin</option>
          <option value="Ketua Ta'mir">Ketua Ta'mir</option>
          <option value="Wakil Ketua">Wakil Ketua</option>
          <option value="Sekretaris">Sekretaris</option>
          <option value="Bendahara">Bendahara</option>
          <option value="Sie Pendidikan">Sie Pendidikan</option>
          <option value="Sie Peribadatan">Sie Peribadatan</option>
          <option value="Sie Sarpras">Sie Sarpras</option>
          <option value="Sie Keamanan">Sie Keamanan</option>
          <option value="Sie Kebersihan">Sie Kebersihan</option>
          <option value="Sie Humas">Sie Humas</option>
          <option value="Sie Kemudaan">Sie Kemudaan</option>
          <option value="Sie Perempuan">Sie Perempuan</option>
        </select>
        <button @click="filterUsers" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition">Filter</button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th class="px-6 py-3 text-left">User</th>
            <th class="px-6 py-3 text-left">Username</th>
            <th class="px-6 py-3 text-left">Role</th>
            <th class="px-6 py-3 text-center">Status</th>
            <th class="px-6 py-3 text-center">Last Login</th>
            <th class="px-6 py-3 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="user in users.data" :key="user.id" class="hover:bg-gray-50">
            <td class="px-6 py-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-primary-light text-white flex items-center justify-center font-bold">
                  {{ user.name.charAt(0).toUpperCase() }}
                </div>
                <div>
                  <div class="font-medium">{{ user.name }}</div>
                  <div class="text-xs text-gray-500">{{ user.email || '-' }}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 font-mono text-xs">{{ user.username }}</td>
            <td class="px-6 py-4" v-html="roleBadge(user.roles)"></td>
            <td class="px-6 py-4 text-center" v-html="statusBadge(user.is_active)"></td>
            <td class="px-6 py-4 text-center text-xs">
              <div v-if="user.last_login_at">{{ new Date(user.last_login_at).toLocaleDateString('id-ID') }}</div>
              <div v-else class="text-gray-400">Belum pernah</div>
            </td>
            <td class="px-6 py-4 text-center">
              <button @click="openEdit(user)" class="text-gray-400 hover:text-primary mx-1" title="Edit"><PencilIcon class="w-5 h-5 inline" /></button>
              <button @click="deleteItem(user)" class="text-gray-400 hover:text-red-600 mx-1" title="Hapus"><TrashIcon class="w-5 h-5 inline" /></button>
            </td>
          </tr>
          <tr v-if="!users.data.length">
            <td colspan="6" class="px-6 py-12 text-center text-gray-500">Tidak ada data user</td>
          </tr>
        </tbody>
      </table>
      <div class="px-6 py-4 border-t">
        <Pagination :links="users.links" />
      </div>
    </div>

    <!-- Modal Form -->
    <Modal :show="modalOpen" :title="editMode ? 'Edit User' : 'Tambah User Baru'" @close="closeModal">
      <form @submit.prevent="submit" class="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap <span class="text-red-500">*</span></label>
          <input v-model="form.name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Ahmad Fulan">
          <span v-if="form.errors.name" class="text-red-500 text-xs">{{ form.errors.name }}</span>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Username <span class="text-red-500">*</span></label>
          <input v-model="form.username" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Untuk login">
          <span v-if="form.errors.username" class="text-red-500 text-xs">{{ form.errors.username }}</span>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email (Opsional)</label>
            <input v-model="form.email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            <span v-if="form.errors.email" class="text-red-500 text-xs">{{ form.errors.email }}</span>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">No. HP</label>
            <input v-model="form.phone" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Role <span class="text-red-500">*</span></label>
          <select v-model="form.role" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            <option value="">Pilih Role</option>
            <option value="Ketua Ta'mir">Ketua Ta'mir</option>
            <option value="Wakil Ketua">Wakil Ketua</option>
            <option value="Sekretaris">Sekretaris</option>
            <option value="Bendahara">Bendahara</option>
            <option value="Sie Pendidikan">Sie Pendidikan</option>
            <option value="Sie Peribadatan">Sie Peribadatan</option>
            <option value="Sie Sarpras">Sie Sarpras</option>
            <option value="Sie Keamanan">Sie Keamanan</option>
            <option value="Sie Kebersihan">Sie Kebersihan</option>
            <option value="Sie Humas">Sie Humas</option>
            <option value="Sie Kemudaan">Sie Kemudaan</option>
            <option value="Sie Perempuan">Sie Perempuan</option>
          </select>
          <span v-if="form.errors.role" class="text-red-500 text-xs">{{ form.errors.role }}</span>
        </div>

        <div v-if="!editMode">
          <label class="block text-sm font-medium text-gray-700 mb-1">Password <span class="text-red-500">*</span></label>
          <input v-model="form.password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
          <span v-if="form.errors.password" class="text-red-500 text-xs">{{ form.errors.password }}</span>
        </div>

        <div v-if="!editMode">
          <label class="block text-sm font-medium text-gray-700 mb-1">Konfirmasi Password <span class="text-red-500">*</span></label>
          <input v-model="form.password_confirmation" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
        </div>

        <div v-if="editMode" class="border-t pt-4">
          <label class="flex items-center gap-2">
            <input v-model="form.is_active" type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary">
            <span class="text-sm text-gray-700">User Aktif</span>
          </label>
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
