<script setup>
import { ref } from 'vue';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import PasswordInput from '@/Components/PasswordInput.vue';
import InputError from '@/Components/InputError.vue';
import Modal from '@/Components/Modal.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import { Head, useForm } from '@inertiajs/vue3';
import Swal from 'sweetalert2';

const props = defineProps({
    roles: Array,
});

const showCreateModal = ref(false);

const createForm = useForm({
    name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: '',
});

const openCreateModal = () => {
    createForm.reset();
    createForm.role = '';
    showCreateModal.value = true;
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
</script>

<template>
    <Head title="Tambah User Baru" />

    <AdminLayout>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="flex justify-between items-center mb-6">
                    <div>
                        <h1 class="text-2xl font-bold text-gray-900">Tambah User Baru</h1>
                        <p class="text-sm text-gray-600 mt-1">Buat akun pengguna baru untuk sistem</p>
                    </div>
                </div>

                <div class="bg-white rounded-lg shadow p-6">
                    <form @submit.prevent="submitCreate">
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
                                    <PasswordInput id="password" v-model="createForm.password" class="mt-1 block w-full" required />
                                    <InputError :message="createForm.errors.password" class="mt-2" />
                                </div>
                                <div>
                                    <InputLabel for="password_confirmation" value="Konfirmasi Password" />
                                    <PasswordInput id="password_confirmation" v-model="createForm.password_confirmation" class="mt-1 block w-full" required />
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
                            <SecondaryButton @click="$router.visit(route('users.index'))">Batal</SecondaryButton>
                            <PrimaryButton :disabled="createForm.processing">Simpan</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
