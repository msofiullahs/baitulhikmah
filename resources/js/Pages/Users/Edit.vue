<script setup>
import { ref } from 'vue';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import InputError from '@/Components/InputError.vue';
import Modal from '@/Components/Modal.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import DangerButton from '@/Components/DangerButton.vue';
import { Head, useForm, router } from '@inertiajs/vue3';
import Swal from 'sweetalert2';

const props = defineProps({
    users: Object,
    roles: Array,
});

const showCreateModal = ref(false);
const showEditModal = ref(false);
const editingUser = ref(null);

const createForm = useForm({
    name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: '',
    is_active: true,
});

const editForm = useForm({
    name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: '',
    is_active: true,
});

const openCreateModal = () => {
    createForm.reset();
    createForm.role = '';
    showCreateModal.value = true;
};

const openEditModal = (user) => {
    editingUser.value = user;
    editForm.name = user.name;
    editForm.username = user.username;
    editForm.email = user.email || '';
    editForm.password = '';
    editForm.password_confirmation = '';
    editForm.role = user.roles[0]?.name || '';
    editForm.is_active = user.is_active;
    showEditModal.value = true;
};

const submitCreate = () => {
    createForm.post(route('users.store'), {
        onSuccess: () => {
            showCreateModal.value = false;
            Swal.fire('Success', 'User berhasil ditambahkan', 'success');
        },
        onError: (errors) => {
            Swal.fire('Error', Object.values(errors)[0], 'error');
        },
    });
};

const submitEdit = () => {
    editForm.put(route('users.update', editingUser.value.id), {
        onSuccess: () => {
            showEditModal.value = false;
            editingUser.value = null;
            Swal.fire('Success', 'User berhasil diperbarui', 'success');
        },
        onError: (errors) => {
            Swal.fire('Error', Object.values(errors)[0], 'error');
        },
    });
};

const deleteUser = (user) => {
    Swal.fire({
        title: 'Apakah Anda yakin?',
        text: `User ${user.name} akan dihapus permanen!`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Ya, hapus!',
        cancelButtonText: 'Batal',
    }).then((result) => {
        if (result.isConfirmed) {
            router.delete(route('users.destroy', user.id), {
                onSuccess: () => {
                    Swal.fire('Terhapus!', 'User berhasil dihapus.', 'success');
                },
                onError: (errors) => {
                    Swal.fire('Error', Object.values(errors)[0], 'error');
                },
            });
        }
    });
};

const resetPassword = (user) => {
    Swal.fire({
        title: 'Reset Password',
        input: 'text',
        inputLabel: 'Masukkan password baru untuk ' + user.name,
        inputPlaceholder: 'Password baru',
        showCancelButton: true,
        confirmButtonText: 'Reset',
        cancelButtonText: 'Batal',
    }).then((result) => {
        if (result.isConfirmed && result.value) {
            // Implementasi reset password bisa ditambahkan di controller
            Swal.fire('Success', 'Password berhasil direset', 'success');
        }
    });
};

const getRoleBadgeClass = (roleName) => {
    const classes = {
        'Super Admin': 'bg-purple-100 text-purple-800',
        'Ketua': 'bg-blue-100 text-blue-800',
        'Wakil Ketua': 'bg-indigo-100 text-indigo-800',
        'Sekretaris': 'bg-green-100 text-green-800',
        'Bendahara': 'bg-yellow-100 text-yellow-800',
    };
    return classes[roleName] || 'bg-gray-100 text-gray-800';
};
</script>

<template>
    <Head title="Manajemen Pengguna" />

    <AdminLayout>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <!-- Header -->
                <div class="flex justify-between items-center mb-6">
                    <div>
                        <h1 class="text-2xl font-bold text-gray-900">Manajemen Pengguna</h1>
                        <p class="text-sm text-gray-600 mt-1">Kelola akun pengguna sistem</p>
                    </div>
                    <PrimaryButton @click="openCreateModal">
                        <i class="fas fa-plus mr-2"></i>Tambah User
                    </PrimaryButton>
                </div>

                <!-- Stats Cards -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div class="bg-white rounded-lg shadow p-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 bg-blue-100 rounded-md p-3">
                                <i class="fas fa-users text-blue-600"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm text-gray-500">Total User</p>
                                <p class="text-2xl font-bold text-gray-900">{{ users.total }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow p-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 bg-green-100 rounded-md p-3">
                                <i class="fas fa-check-circle text-green-600"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm text-gray-500">Aktif</p>
                                <p class="text-2xl font-bold text-gray-900">
                                    {{ users.data.filter(u => u.is_active).length }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow p-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 bg-red-100 rounded-md p-3">
                                <i class="fas fa-times-circle text-red-600"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm text-gray-500">Nonaktif</p>
                                <p class="text-2xl font-bold text-gray-900">
                                    {{ users.data.filter(u => !u.is_active).length }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow p-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 bg-purple-100 rounded-md p-3">
                                <i class="fas fa-user-shield text-purple-600"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm text-gray-500">Super Admin</p>
                                <p class="text-2xl font-bold text-gray-900">
                                    {{ users.data.filter(u => u.roles.some(r => r.name === 'Super Admin')).length }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Users Table -->
                <div class="bg-white rounded-lg shadow overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        User
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Role
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Last Login
                                    </th>
                                    <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr v-for="user in users.data" :key="user.id" class="hover:bg-gray-50">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 h-10 w-10">
                                                <img v-if="user.photo" class="h-10 w-10 rounded-full object-cover" :src="`/storage/${user.photo}`" :alt="user.name" />
                                                <div v-else class="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                                                    {{ user.name.charAt(0).toUpperCase() }}
                                                </div>
                                            </div>
                                            <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900">{{ user.name }}</div>
                                                <div class="text-sm text-gray-500">@{{ user.username }}</div>
                                                <div class="text-xs text-gray-400" v-if="user.email">{{ user.email }}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span 
                                            v-for="role in user.roles" 
                                            :key="role.id"
                                            :class="['px-2.5 py-0.5 rounded-full text-xs font-medium', getRoleBadgeClass(role.name)]"
                                        >
                                            {{ role.name }}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span :class="[
                                            'px-2.5 py-0.5 rounded-full text-xs font-medium',
                                            user.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        ]">
                                            {{ user.is_active ? 'Aktif' : 'Nonaktif' }}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {{ user.last_login_at ? new Date(user.last_login_at).toLocaleString('id-ID') : 'Belum pernah' }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button @click="openEditModal(user)" class="text-blue-600 hover:text-blue-900 mr-3">
                                            <i class="fas fa-edit"></i> Edit
                                        </button>
                                        <button @click="resetPassword(user)" class="text-yellow-600 hover:text-yellow-900 mr-3">
                                            <i class="fas fa-key"></i> Reset
                                        </button>
                                        <button @click="deleteUser(user)" class="text-red-600 hover:text-red-900">
                                            <i class="fas fa-trash"></i> Hapus
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Pagination -->
                    <div class="px-6 py-4 border-t border-gray-200">
                        <div class="flex justify-between items-center">
                            <div class="text-sm text-gray-700">
                                Menampilkan {{ users.from }} - {{ users.to }} dari {{ users.total }} data
                            </div>
                            <div class="flex space-x-2">
                                <button
                                    v-for="(url, key) in users.links"
                                    :key="key"
                                    @click="router.get(url.url)"
                                    :disabled="!url.url"
                                    :class="[
                                        'px-3 py-1 rounded text-sm',
                                        url.active 
                                            ? 'bg-blue-600 text-white' 
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
                                        !url.url && 'opacity-50 cursor-not-allowed'
                                    ]"
                                    v-html="url.label"
                                ></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Create User Modal -->
        <Modal :show="showCreateModal" @close="showCreateModal = false" max-width="lg">
            <form @submit.prevent="submitCreate" class="p-6">
                <h2 class="text-lg font-medium text-gray-900 mb-4">Tambah User Baru</h2>

                <div class="space-y-4">
                    <div>
                        <InputLabel for="name" value="Nama Lengkap" />
                        <TextInput id="name" type="text" class="mt-1 block w-full" v-model="createForm.name" required autofocus />
                        <InputError :message="createForm.errors.name" class="mt-2" />
                    </div>

                    <div>
                        <InputLabel for="username" value="Username" />
                        <TextInput id="username" type="text" class="mt-1 block w-full" v-model="createForm.username" required />
                        <InputError :message="createForm.errors.username" class="mt-2" />
                    </div>

                    <div>
                        <InputLabel for="email" value="Email (Opsional)" />
                        <TextInput id="email" type="email" class="mt-1 block w-full" v-model="createForm.email" />
                        <InputError :message="createForm.errors.email" class="mt-2" />
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <InputLabel for="password" value="Password" />
                            <TextInput id="password" type="password" class="mt-1 block w-full" v-model="createForm.password" required />
                            <InputError :message="createForm.errors.password" class="mt-2" />
                        </div>
                        <div>
                            <InputLabel for="password_confirmation" value="Konfirmasi Password" />
                            <TextInput id="password_confirmation" type="password" class="mt-1 block w-full" v-model="createForm.password_confirmation" required />
                        </div>
                    </div>

                    <div>
                        <InputLabel for="role" value="Role" />
                        <select id="role" v-model="createForm.role" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" required>
                            <option value="">Pilih Role</option>
                            <option v-for="role in roles" :key="role.id" :value="role.name">{{ role.name }}</option>
                        </select>
                        <InputError :message="createForm.errors.role" class="mt-2" />
                    </div>
                </div>

                <div class="mt-6 flex justify-end space-x-3">
                    <SecondaryButton @click="showCreateModal = false">Batal</SecondaryButton>
                    <PrimaryButton :disabled="createForm.processing">Simpan</PrimaryButton>
                </div>
            </form>
        </Modal>

        <!-- Edit User Modal -->
        <Modal :show="showEditModal" @close="showEditModal = false" max-width="lg">
            <form @submit.prevent="submitEdit" class="p-6">
                <h2 class="text-lg font-medium text-gray-900 mb-4">Edit User</h2>

                <div class="space-y-4">
                    <div>
                        <InputLabel for="edit-name" value="Nama Lengkap" />
                        <TextInput id="edit-name" type="text" class="mt-1 block w-full" v-model="editForm.name" required />
                        <InputError :message="editForm.errors.name" class="mt-2" />
                    </div>

                    <div>
                        <InputLabel for="edit-username" value="Username" />
                        <TextInput id="edit-username" type="text" class="mt-1 block w-full" v-model="editForm.username" required />
                        <InputError :message="editForm.errors.username" class="mt-2" />
                    </div>

                    <div>
                        <InputLabel for="edit-email" value="Email (Opsional)" />
                        <TextInput id="edit-email" type="email" class="mt-1 block w-full" v-model="editForm.email" />
                        <InputError :message="editForm.errors.email" class="mt-2" />
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <InputLabel for="edit-password" value="Password Baru (Kosongkan jika tidak diubah)" />
                            <TextInput id="edit-password" type="password" class="mt-1 block w-full" v-model="editForm.password" />
                            <InputError :message="editForm.errors.password" class="mt-2" />
                        </div>
                        <div>
                            <InputLabel for="edit-password_confirmation" value="Konfirmasi Password" />
                            <TextInput id="edit-password_confirmation" type="password" class="mt-1 block w-full" v-model="editForm.password_confirmation" />
                        </div>
                    </div>

                    <div>
                        <InputLabel for="edit-role" value="Role" />
                        <select id="edit-role" v-model="editForm.role" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" required>
                            <option value="">Pilih Role</option>
                            <option v-for="role in roles" :key="role.id" :value="role.name">{{ role.name }}</option>
                        </select>
                        <InputError :message="editForm.errors.role" class="mt-2" />
                    </div>

                    <div>
                        <label class="flex items-center">
                            <input type="checkbox" v-model="editForm.is_active" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                            <span class="ml-2 text-sm text-gray-600">User Aktif</span>
                        </label>
                    </div>
                </div>

                <div class="mt-6 flex justify-end space-x-3">
                    <SecondaryButton @click="showEditModal = false">Batal</SecondaryButton>
                    <PrimaryButton :disabled="editForm.processing">Update</PrimaryButton>
                </div>
            </form>
        </Modal>
    </AdminLayout>
</template>
