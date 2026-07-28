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
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Nama Masjid -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Nama Masjid</label>
                        <input v-model="form.nama_masjid" type="text" required 
                               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>

                    <!-- Nama Ta'mir -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Nama Ta'mir/Pengurus</label>
                        <input v-model="form.nama_tamir" type="text" 
                               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700">Alamat Lengkap</label>
                    <textarea v-model="form.alamat" rows="3" required 
                              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Kota/Kabupaten -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Kota/Kabupaten</label>
                        <input v-model="form.kota" type="text" required 
                               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>

                    <!-- Provinsi -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Provinsi</label>
                        <input v-model="form.provinsi" type="text" required 
                               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>

                    <!-- Kode Pos -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Kode Pos</label>
                        <input v-model="form.kode_pos" type="text" 
                               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- No. Telepon -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700">No. Telepon</label>
                        <input v-model="form.no_telepon" type="text" 
                               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>

                    <!-- Email -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Email</label>
                        <input v-model="form.email" type="email" 
                               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>
                </div>

                <!-- Logo Masjid -->
                <div>
                    <label class="block text-sm font-medium text-gray-700">Logo Masjid</label>
                    <div class="mt-1 flex items-center space-x-4">
                        <img v-if="form.logo_url" :src="form.logo_url" alt="Logo" class="h-20 w-20 object-contain"/>
                        <input type="file" @change="handleLogoUpload" accept="image/*" 
                               class="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">Format: PNG, JPG. Ukuran max: 2MB</p>
                </div>

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
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Kota (untuk jadwal sholat)</label>
                            <input v-model="form.kota_sholat" type="text" placeholder="Contoh: Jakarta" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                            <p class="text-xs text-gray-500 mt-1">Nama kota sesuai API myquran.com</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Atau Koordinat</label>
                            <div class="grid grid-cols-2 gap-2">
                                <input v-model="form.latitude" type="text" placeholder="Latitude (-6.2088)" 
                                       class="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                                <input v-model="form.longitude" type="text" placeholder="Longitude (106.8456)" 
                                       class="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                            </div>
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

                <!-- Actions -->
                <div class="flex justify-end space-x-3 pt-6 border-t">
                    <button type="button" @click="resetForm" class="btn-secondary">Reset</button>
                    <button type="submit" class="btn-primary">Simpan Pengaturan</button>
                </div>
            </form>
        </div>
    </AdminLayout>
</template>

<script setup>
import { ref } from 'vue';
import { router } from '@inertiajs/vue3';
import AdminLayout from '@/Layouts/AdminLayout.vue';

const props = defineProps({
    settings: Object,
});

const form = ref({
    nama_masjid: props.settings?.nama_masjid || '',
    nama_tamir: props.settings?.nama_tamir || '',
    alamat: props.settings?.alamat || '',
    kota: props.settings?.kota || '',
    provinsi: props.settings?.provinsi || '',
    kode_pos: props.settings?.kode_pos || '',
    no_telepon: props.settings?.no_telepon || '',
    email: props.settings?.email || '',
    logo_url: props.settings?.logo_url || '',
    kop_surat: props.settings?.kop_surat || '',
    kota_sholat: props.settings?.kota_sholat || '',
    latitude: props.settings?.latitude || '',
    longitude: props.settings?.longitude || '',
    warna_tema: props.settings?.warna_tema || '#3B82F6',
});

const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        // Handle file upload logic here
        console.log('Logo uploaded:', file.name);
    }
};

const submitForm = () => {
    router.post(route('settings.general.update'), form.value, {
        onSuccess: () => {
            // Show success message
        },
    });
};

const resetForm = () => {
    form.value = {
        nama_masjid: props.settings?.nama_masjid || '',
        nama_tamir: props.settings?.nama_tamir || '',
        alamat: props.settings?.alamat || '',
        kota: props.settings?.kota || '',
        provinsi: props.settings?.provinsi || '',
        kode_pos: props.settings?.kode_pos || '',
        no_telepon: props.settings?.no_telepon || '',
        email: props.settings?.email || '',
        logo_url: props.settings?.logo_url || '',
        kop_surat: props.settings?.kop_surat || '',
        kota_sholat: props.settings?.kota_sholat || '',
        latitude: props.settings?.latitude || '',
        longitude: props.settings?.longitude || '',
        warna_tema: props.settings?.warna_tema || '#3B82F6',
    };
};
</script>
