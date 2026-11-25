<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import PasswordInput from '@/Components/PasswordInput.vue';
import InputError from '@/Components/InputError.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const props = defineProps({
    roles: Array,
    user: Object,
});

const title = props.user ? 'Edit User' : 'Tambah User Baru';
const form = useForm({
    name: props.user?.name ?? '',
    username: props.user?.username ?? '',
    email: props.user?.email ?? '',
    password: '',
    password_confirmation: '',
    role: props.user?.roles[0]?.name ?? '',
    is_active: props.user?.is_active ?? true,
});

const submit = () => {
    if (props.user) {
        form.put(route('users.update', props.user.id));
    } else {
        form.post(route('users.store'));
    }
};
</script>

<template>
    <Head :title="title" />

    <AdminLayout>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="flex justify-between items-center mb-6">
                    <div>
                        <h1 class="text-2xl font-bold text-gray-900">{{ title }}</h1>

                    </div>
                </div>

                <div class="bg-white rounded-lg shadow p-6">
                    <form @submit.prevent="submit">
                        <div class="space-y-4">
                            <div>
                                <InputLabel for="name" value="Nama Lengkap" />
                                <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus />
                                <InputError :message="form.errors.name" class="mt-2" />
                            </div>

                            <div>
                                <InputLabel for="username" value="Username" />
                                <TextInput id="username" type="text" class="mt-1 block w-full" v-model="form.username" required />
                                <InputError :message="form.errors.username" class="mt-2" />
                            </div>

                            <div>
                                <InputLabel for="email" value="Email (Opsional)" />
                                <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" />
                                <InputError :message="form.errors.email" class="mt-2" />
                            </div>

                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <InputLabel for="password" :value="user ? 'Password baru (opsional)' : 'Password'" />
                                    <PasswordInput id="password" v-model="form.password" class="mt-1 block w-full" :required="!user" />
                                    <InputError :message="form.errors.password" class="mt-2" />
                                </div>
                                <div>
                                    <InputLabel for="password_confirmation" value="Konfirmasi Password" />
                                    <PasswordInput id="password_confirmation" v-model="form.password_confirmation" class="mt-1 block w-full" :required="!user" />
                                </div>
                            </div>

                            <div>
                                <InputLabel for="role" value="Role" />
                                <select id="role" v-model="form.role" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" required>
                                    <option value="">Pilih Role</option>
                                    <option v-for="role in roles" :key="role.id" :value="role.name">{{ role.name }}</option>
                                </select>
                                <InputError :message="form.errors.role" class="mt-2" />
                            </div>
                            <label v-if="user" class="flex items-center gap-2 text-sm">
                                <input v-model="form.is_active" type="checkbox" />
                                Akun aktif
                            </label>
                        </div>

                        <div class="mt-6 flex justify-end space-x-3">
                            <Link :href="route('users.index')" class="rounded-md border px-4 py-2 text-sm font-semibold">Batal</Link>
                            <PrimaryButton :disabled="form.processing">Simpan</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
