<script setup>
import { ref } from 'vue';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import InputError from '@/Components/InputError.vue';
import Modal from '@/Components/Modal.vue';
import { Head, useForm, router } from '@inertiajs/vue3';

const props = defineProps({
    permissions: Array,
});

const showPermissionModal = ref(false);
const editingPermission = ref(null);

const form = useForm({
    name: '',
    display_name: '',
    description: '',
});

const createPermission = () => {
    editingPermission.value = null;
    form.name = '';
    form.display_name = '';
    form.description = '';
    showPermissionModal.value = true;
};

const editPermission = (permission) => {
    editingPermission.value = permission;
    form.name = permission.name;
    form.display_name = permission.display_name || '';
    form.description = permission.description || '';
    showPermissionModal.value = true;
};

const deletePermission = (permission) => {
    if (confirm(`Apakah Anda yakin ingin menghapus permission "${permission.name}"?`)) {
        router.delete(route('permissions.destroy', permission.id));
    }
};

const submit = () => {
    if (editingPermission.value) {
        router.put(route('permissions.update', editingPermission.value.id), form, {
            onSuccess: () => {
                showPermissionModal.value = false;
                resetForm();
            },
        });
    } else {
        router.post(route('permissions.store'), form, {
            onSuccess: () => {
                showPermissionModal.value = false;
                resetForm();
            },
        });
    }
};

const resetForm = () => {
    form.name = '';
    form.display_name = '';
    form.description = '';
    editingPermission.value = null;
};
</script>

<template>
    <Head title="Manajemen Permissions" />

    <AdminLayout>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <!-- Header -->
                <div class="flex justify-between items-center mb-6">
                    <div>
                        <h1 class="text-2xl font-bold text-gray-900">Manajemen Permissions</h1>
                        <p class="text-sm text-gray-600 mt-1">Kelola daftar permissions sistem</p>
                    </div>
                    <PrimaryButton @click="createPermission">
                        <i class="fas fa-plus mr-2"></i>Tambah Permission
                    </PrimaryButton>
                </div>

                <!-- Permissions Grid -->
                <div class="bg-white rounded-lg shadow overflow-hidden">
                    <div class="p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div 
                                v-for="permission in permissions" 
                                :key="permission.id" 
                                class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                            >
                                <div class="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 class="font-semibold text-gray-800">{{ permission.display_name || permission.name }}</h3>
                                        <p class="text-xs text-gray-500">{{ permission.name }}</p>
                                    </div>
                                    <div class="flex space-x-2">
                                        <button 
                                            @click="editPermission(permission)" 
                                            class="text-blue-600 hover:text-blue-900"
                                        >
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button 
                                            @click="deletePermission(permission)" 
                                            class="text-red-600 hover:text-red-900"
                                        >
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                                <p v-if="permission.description" class="text-sm text-gray-600 mt-2">
                                    {{ permission.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Permission Modal -->
        <Modal :show="showPermissionModal" @close="showPermissionModal = false" max-width="lg">
            <form @submit.prevent="submit" class="p-6 space-y-4">
                <h2 class="text-xl font-bold">{{ editingPermission ? 'Edit' : 'Tambah' }} Permission</h2>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700">Nama Permission</label>
                    <input 
                        v-model="form.name" 
                        type="text" 
                        required 
                        placeholder="contoh: transactions.create"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    <InputError :message="form.errors.name" class="mt-2" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700">Display Name</label>
                    <input 
                        v-model="form.display_name" 
                        type="text" 
                        placeholder="contoh: Buat Transaksi"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    <InputError :message="form.errors.display_name" class="mt-2" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700">Deskripsi</label>
                    <textarea 
                        v-model="form.description" 
                        rows="3" 
                        placeholder="Deskripsi permission..."
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    ></textarea>
                    <InputError :message="form.errors.description" class="mt-2" />
                </div>

                <div class="flex justify-end gap-3 pt-4">
                    <button type="button" @click="showPermissionModal = false" class="btn-secondary">Batal</button>
                    <button type="submit" class="btn-primary" :disabled="form.processing">
                        {{ editingPermission ? 'Update' : 'Simpan' }}
                    </button>
                </div>
            </form>
        </Modal>
    </AdminLayout>
</template>
