<template>
    <AdminLayout title="Pengaturan Umum">
        <div class="space-y-6">
            <!-- Header -->
            <div class="border-b pb-4">
                <h1 class="text-2xl font-bold text-gray-900">Pengaturan Umum</h1>
                <p class="text-gray-600 mt-1">Konfigurasi dasar sistem manajemen masjid</p>
            </div>

            <!-- Form -->
            <form @submit.prevent="submitForm" class="bg-white rounded-lg shadow p-6 space-y-6">
                <p class="text-sm text-gray-600">
                    Kelola identitas, alamat, kontak, logo, dan koordinat di
                    <Link :href="route('settings.masjid')" class="font-medium text-blue-700 underline">Profil Masjid</Link>.
                </p>

                <!-- Kop Surat -->
                <div>
                    <label class="block text-sm font-medium text-gray-700">Template Kop Surat</label>
                    <textarea v-model="form.kop_surat" rows="4" placeholder="Template kop surat untuk dokumen resmi..." 
                              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                    <p class="text-xs text-gray-500 mt-1">Gunakan variabel: {nama_masjid}, {alamat}, {no_telepon}, {email}</p>
                </div>

                <!-- Jadwal Sholat -->
                <div class="border-t pt-6">
                    <h3 class="text-lg font-medium mb-4">Jadwal Sholat</h3>
                    <div class="grid grid-cols-1 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Kota (untuk jadwal sholat)</label>
                            <input v-model="form.kota_sholat" type="text" placeholder="Contoh: Jakarta" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                            <p class="text-xs text-gray-500 mt-1">Nama kota sesuai API myquran.com</p>
                        </div>
                    </div>
                </div>

                <!-- Warna Tema -->
                <div class="border-t pt-6">
                    <h3 class="text-lg font-medium mb-4">Tampilan</h3>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Warna Tema Utama</label>
                        <div class="flex items-center space-x-3 mt-2">
                            <input v-model="form.warna_tema" type="color" 
                                   class="h-10 w-20 rounded-md border-gray-300 shadow-sm"/>
                            <span class="text-sm text-gray-600">{{ form.warna_tema }}</span>
                        </div>
                    </div>
                </div>

                <p v-if="$page.props.flash?.success" role="status" class="text-sm text-green-700">
                    {{ $page.props.flash.success }}
                </p>
                <ul v-if="form.hasErrors" role="alert" class="list-disc space-y-1 pl-5 text-sm text-red-700">
                    <li v-for="(error, field) in form.errors" :key="field">{{ error }}</li>
                </ul>

                <!-- Actions -->
                <div class="flex justify-end space-x-3 pt-6 border-t">
                    <button type="button" @click="resetForm" class="btn-secondary">Reset</button>
                    <button type="submit" :disabled="form.processing" class="btn-primary disabled:opacity-50">Simpan Pengaturan</button>
                </div>
            </form>
        </div>
    </AdminLayout>
</template>

<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import AdminLayout from '@/Layouts/AdminLayout.vue';

const props = defineProps({
    settings: Object,
});

const form = useForm({
    kop_surat: props.settings.kop_surat ?? '',
    kota_sholat: props.settings.kota_sholat ?? '',
    warna_tema: props.settings.warna_tema || '#3B82F6',
});

const submitForm = () => {
    form.post(route('settings.general.update'), {
        preserveScroll: true,
        onSuccess: () => form.defaults(),
    });
};

const resetForm = () => form.resetAndClearErrors();
</script>
