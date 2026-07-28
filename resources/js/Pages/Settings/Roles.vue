<template>
    <AdminLayout title="Roles & Permissions">
        <div class="space-y-6">
            <!-- Header -->
            <div class="border-b pb-4">
                <h1 class="text-2xl font-bold text-gray-900">Roles & Permissions</h1>
                <p class="text-gray-600 mt-1">Kelola role dan hak akses pengguna sistem</p>
            </div>

            <!-- Tabs -->
            <div class="border-b">
                <nav class="-mb-px flex space-x-8">
                    <button @click="activeTab = 'roles'" 
                            :class="activeTab === 'roles' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
                            class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                        Roles
                    </button>
                    <button @click="activeTab = 'permissions'" 
                            :class="activeTab === 'permissions' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
                            class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                        Permissions
                    </button>
                </nav>
            </div>

            <!-- Roles Tab -->
            <div v-if="activeTab === 'roles'" class="space-y-6">
                <div class="flex justify-between items-center">
                    <h2 class="text-lg font-bold">Daftar Roles</h2>
                    <button @click="showRoleModal = true" class="btn-primary">
                        <i class="fas fa-plus mr-2"></i>Tambah Role
                    </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="role in roles" :key="role.id" 
                         class="bg-white rounded-lg shadow p-6 border-l-4"
                         :class="role.name === 'Super Admin' ? 'border-red-500' : 'border-blue-500'">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="font-bold text-lg">{{ role.display_name || role.name }}</h3>
                                <p class="text-sm text-gray-500">{{ role.users_count || 0 }} pengguna</p>
                            </div>
                            <span v-if="role.name === 'Super Admin'" class="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">Default</span>
                        </div>
                        <div class="text-sm text-gray-600 mb-4">
                            <p>{{ role.description || 'Tidak ada deskripsi' }}</p>
                        </div>
                        <div class="flex justify-end space-x-2">
                            <button @click="editRole(role)" class="text-blue-600 hover:text-blue-900 text-sm">
                                <i class="fas fa-edit mr-1"></i>Edit
                            </button>
                            <button @click="cloneRole(role)" class="text-green-600 hover:text-green-900 text-sm">
                                <i class="fas fa-copy mr-1"></i>Clone
                            </button>
                            <button v-if="role.name !== 'Super Admin'" @click="deleteRole(role.id)" 
                                    class="text-red-600 hover:text-red-900 text-sm">
                                <i class="fas fa-trash mr-1"></i>Hapus
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Role Permissions Matrix -->
                <div class="bg-white rounded-lg shadow p-6">
                    <h3 class="text-lg font-bold mb-4">Matrix Permissions</h3>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Permission</th>
                                    <th v-for="role in roles" :key="role.id" 
                                        class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                                        {{ role.display_name || role.name }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr v-for="permission in permissions" :key="permission.id">
                                    <td class="px-4 py-3 text-sm font-medium">{{ permission.display_name || permission.name }}</td>
                                    <td v-for="role in roles" :key="role.id" class="px-4 py-3 text-center">
                                        <input type="checkbox" 
                                               :checked="hasPermission(role, permission)"
                                               @change="togglePermission(role, permission, $event.target.checked)"
                                               class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Permissions Tab -->
            <div v-if="activeTab === 'permissions'" class="space-y-6">
                <div class="flex justify-between items-center">
                    <h2 class="text-lg font-bold">Daftar Permissions</h2>
                    <button @click="showPermissionModal = true" class="btn-primary">
                        <i class="fas fa-plus mr-2"></i>Tambah Permission
                    </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="permission in permissions" :key="permission.id" 
                         class="bg-white rounded-lg shadow p-4">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-bold text-sm">{{ permission.display_name || permission.name }}</h3>
                                <p class="text-xs text-gray-500 mt-1">{{ permission.name }}</p>
                                <p v-if="permission.description" class="text-xs text-gray-600 mt-2">{{ permission.description }}</p>
                            </div>
                            <div class="flex space-x-2">
                                <button @click="editPermission(permission)" class="text-blue-600 hover:text-blue-900">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button @click="deletePermission(permission.id)" class="text-red-600 hover:text-red-900">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Role Modal -->
            <Modal :show="showRoleModal" @close="showRoleModal = false" max-width="lg">
                <form @submit.prevent="submitRole" class="p-6 space-y-4">
                    <h2 class="text-xl font-bold">{{ editingRole ? 'Edit' : 'Tambah' }} Role</h2>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Nama Role</label>
                        <input v-model="roleForm.name" type="text" required 
                               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Display Name</label>
                        <input v-model="roleForm.display_name" type="text" 
                               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Deskripsi</label>
                        <textarea v-model="roleForm.description" rows="3" 
                                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                    </div>

                    <div class="flex justify-end gap-3 pt-4">
                        <button type="button" @click="showRoleModal = false" class="btn-secondary">Batal</button>
                        <button type="submit" class="btn-primary">{{ editingRole ? 'Update' : 'Simpan' }}</button>
                    </div>
                </form>
            </Modal>

            <!-- Permission Modal -->
            <Modal :show="showPermissionModal" @close="showPermissionModal = false" max-width="lg">
                <form @submit.prevent="submitPermission" class="p-6 space-y-4">
                    <h2 class="text-xl font-bold">{{ editingPermission ? 'Edit' : 'Tambah' }} Permission</h2>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Nama Permission</label>
                        <input v-model="permissionForm.name" type="text" required placeholder="contoh: transactions.create"
                               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Display Name</label>
                        <input v-model="permissionForm.display_name" type="text" 
                               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Deskripsi</label>
                        <textarea v-model="permissionForm.description" rows="3" 
                                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                    </div>

                    <div class="flex justify-end gap-3 pt-4">
                        <button type="button" @click="showPermissionModal = false" class="btn-secondary">Batal</button>
                        <button type="submit" class="btn-primary">{{ editingPermission ? 'Update' : 'Simpan' }}</button>
                    </div>
                </form>
            </Modal>
        </div>
    </AdminLayout>
</template>

<script setup>
import { ref } from 'vue';
import { router } from '@inertiajs/vue3';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Modal from '@/Components/Modal.vue';

const props = defineProps({
    roles: Array,
    permissions: Array,
});

const activeTab = ref('roles');
const showRoleModal = ref(false);
const showPermissionModal = ref(false);
const editingRole = ref(null);
const editingPermission = ref(null);

const roleForm = ref({
    name: '',
    display_name: '',
    description: '',
});

const permissionForm = ref({
    name: '',
    display_name: '',
    description: '',
});

const hasPermission = (role, permission) => {
    return role.permissions?.some(p => p.id === permission.id) || false;
};

const togglePermission = (role, permission, checked) => {
    if (checked) {
        router.post(route('roles.permissions.add', role.id), { permission_id: permission.id });
    } else {
        router.delete(route('roles.permissions.remove', [role.id, permission.id]));
    }
};

const editRole = (role) => {
    roleForm.value = {
        name: role.name,
        display_name: role.display_name || '',
        description: role.description || '',
    };
    editingRole.value = role;
    showRoleModal.value = true;
};

const cloneRole = (role) => {
    if (confirm(`Clone role "${role.name}"?`)) {
        router.post(route('roles.clone', role.id));
    }
};

const deleteRole = (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus role ini?')) {
        router.delete(route('roles.destroy', id));
    }
};

const submitRole = () => {
    if (editingRole.value) {
        router.put(route('roles.update', editingRole.value.id), roleForm.value, {
            onSuccess: () => {
                showRoleModal.value = false;
                resetRoleForm();
            },
        });
    } else {
        router.post(route('roles.store'), roleForm.value, {
            onSuccess: () => {
                showRoleModal.value = false;
                resetRoleForm();
            },
        });
    }
};

const editPermission = (permission) => {
    permissionForm.value = {
        name: permission.name,
        display_name: permission.display_name || '',
        description: permission.description || '',
    };
    editingPermission.value = permission;
    showPermissionModal.value = true;
};

const deletePermission = (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus permission ini?')) {
        router.delete(route('permissions.destroy', id));
    }
};

const submitPermission = () => {
    if (editingPermission.value) {
        router.put(route('permissions.update', editingPermission.value.id), permissionForm.value, {
            onSuccess: () => {
                showPermissionModal.value = false;
                resetPermissionForm();
            },
        });
    } else {
        router.post(route('permissions.store'), permissionForm.value, {
            onSuccess: () => {
                showPermissionModal.value = false;
                resetPermissionForm();
            },
        });
    }
};

const resetRoleForm = () => {
    roleForm.value = { name: '', display_name: '', description: '' };
    editingRole.value = null;
};

const resetPermissionForm = () => {
    permissionForm.value = { name: '', display_name: '', description: '' };
    editingPermission.value = null;
};
</script>
