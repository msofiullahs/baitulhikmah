<script setup>
import { ref } from 'vue';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import InputError from '@/Components/InputError.vue';
import { Head, useForm } from '@inertiajs/vue3';
import Swal from 'sweetalert2';

const props = defineProps({
    permissions: Object,
});

const form = useForm({
    name: '',
    permissions: [],
});

const permissionGroups = ref(props.permissions);

const togglePermission = (permission) => {
    const index = form.permissions.indexOf(permission);
    if (index > -1) {
        form.permissions.splice(index, 1);
    } else {
        form.permissions.push(permission);
    }
};

const selectAll = (group) => {
    group.forEach(perm => {
        if (!form.permissions.includes(perm)) {
            form.permissions.push(perm);
        }
    });
};

const deselectAll = (group) => {
    form.permissions = form.permissions.filter(p => !group.includes(p));
};

const createPermission = () => {
    // Placeholder untuk fitur create permission
    Swal.fire('Info', 'Fitur create permission akan ditambahkan', 'info');
};

const submit = () => {
    if (form.permissions.length === 0) {
        Swal.fire('Error', 'Pilih minimal satu permission', 'error');
        return;
    }
    // Logic untuk create role baru bisa ditambahkan di sini
    Swal.fire('Success', 'Role berhasil dibuat', 'success');
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

                <!-- Permission Groups -->
                <div class="bg-white rounded-lg shadow overflow-hidden">
                    <div class="p-6">
                        <div v-for="(perms, group) in permissionGroups" :key="group" class="mb-8 last:mb-0">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-lg font-semibold text-gray-800 capitalize flex items-center">
                                    <i class="fas fa-shield-alt mr-2 text-blue-600"></i>
                                    {{ group }}
                                </h3>
                                <div class="space-x-2">
                                    <button 
                                        @click="selectAll(perms)"
                                        class="text-xs bg-green-100 text-green-700 px-3 py-1 rounded hover:bg-green-200"
                                    >
                                        Select All
                                    </button>
                                    <button 
                                        @click="deselectAll(perms)"
                                        class="text-xs bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200"
                                    >
                                        Deselect All
                                    </button>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                <label 
                                    v-for="perm in perms" 
                                    :key="perm"
                                    class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                                >
                                    <input
                                        type="checkbox"
                                        :value="perm"
                                        v-model="form.permissions"
                                        class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <span class="ml-3 text-sm text-gray-700">{{ perm }}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Selected Permissions Info -->
                <div class="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div class="flex items-start">
                        <i class="fas fa-info-circle text-blue-600 mt-0.5 mr-3"></i>
                        <div>
                            <h4 class="font-semibold text-blue-800 text-sm">Selected Permissions</h4>
                            <p class="text-blue-700 text-xs mt-1">
                                Total {{ form.permissions.length }} permissions selected. 
                                Gunakan checkbox di atas untuk memilih permissions untuk role baru atau existing.
                            </p>
                            <div class="flex flex-wrap gap-2 mt-3">
                                <span 
                                    v-for="perm in form.permissions" 
                                    :key="perm"
                                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                >
                                    {{ perm }}
                                    <button @click="togglePermission(perm)" class="ml-1 hover:text-blue-600">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
