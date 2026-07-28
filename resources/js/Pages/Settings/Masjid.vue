<template>
    <AdminLayout title="Profil Masjid">
        <div class="space-y-6">
            <!-- Header -->
            <div class="border-b pb-4">
                <h1 class="text-2xl font-bold text-gray-900">Profil Masjid</h1>
                <p class="text-gray-600 mt-1">Informasi detail masjid dan kontak pengurus</p>
            </div>

            <!-- Form -->
            <form @submit.prevent="submitForm" class="bg-white rounded-lg shadow p-6 space-y-6">
                <!-- Informasi Dasar -->
                <div class="border-b pb-4">
                    <h3 class="text-lg font-medium mb-4">Informasi Dasar</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Nama Masjid</label>
                            <input v-model="form.nama_masjid" type="text" required 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Nama Ta'mir/Ketua</label>
                            <input v-model="form.nama_tamir" type="text" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700">Sejarah Singkat</label>
                        <textarea v-model="form.sejarah" rows="4" 
                                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                    </div>
                </div>

                <!-- Alamat & Lokasi -->
                <div class="border-b pb-4">
                    <h3 class="text-lg font-medium mb-4">Alamat & Lokasi</h3>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Alamat Lengkap</label>
                        <textarea v-model="form.alamat" rows="3" required 
                                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Kelurahan</label>
                            <input v-model="form.kelurahan" type="text" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Kecamatan</label>
                            <input v-model="form.kecamatan" type="text" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Kota/Kabupaten</label>
                            <input v-model="form.kota" type="text" required 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Provinsi</label>
                            <input v-model="form.provinsi" type="text" required 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Kode Pos</label>
                            <input v-model="form.kode_pos" type="text" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Latitude</label>
                            <input v-model="form.latitude" type="text" placeholder="-6.2088" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Longitude</label>
                            <input v-model="form.longitude" type="text" placeholder="106.8456" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                    </div>
                </div>

                <!-- Kontak -->
                <div class="border-b pb-4">
                    <h3 class="text-lg font-medium mb-4">Kontak</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">No. Telepon</label>
                            <input v-model="form.no_telepon" type="text" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Email</label>
                            <input v-model="form.email" type="email" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700">Website</label>
                        <input v-model="form.website" type="url" placeholder="https://masjidcontoh.com" 
                               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>
                </div>

                <!-- Social Media -->
                <div class="border-b pb-4">
                    <h3 class="text-lg font-medium mb-4">Social Media</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Facebook</label>
                            <input v-model="form.facebook" type="url" placeholder="https://facebook.com/masjid" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Instagram</label>
                            <input v-model="form.instagram" type="url" placeholder="https://instagram.com/masjid" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Twitter/X</label>
                            <input v-model="form.twitter" type="url" placeholder="https://twitter.com/masjid" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">YouTube</label>
                            <input v-model="form.youtube" type="url" placeholder="https://youtube.com/@masjid" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">TikTok</label>
                            <input v-model="form.tiktok" type="url" placeholder="https://tiktok.com/@masjid" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">WhatsApp Group</label>
                            <input v-model="form.whatsapp_group" type="url" placeholder="Link grup WhatsApp jamaah" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                    </div>
                </div>

                <!-- Logo & Foto -->
                <div>
                    <h3 class="text-lg font-medium mb-4">Logo & Foto Masjid</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Logo Masjid</label>
                            <div class="mt-1">
                                <img v-if="form.logo_url" :src="form.logo_url" alt="Logo" class="h-20 w-20 object-contain mb-2"/>
                                <input type="file" @change="handleLogoUpload" accept="image/*" 
                                       class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Foto Masjid</label>
                            <div class="mt-1">
                                <img v-if="form.foto_url" :src="form.foto_url" alt="Foto Masjid" class="h-20 w-32 object-cover mb-2"/>
                                <input type="file" @change="handleFotoUpload" accept="image/*" 
                                       class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Jam Operasional -->
                <div>
                    <h3 class="text-lg font-medium mb-4">Jam Operasional</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Buka Dari</label>
                            <input v-model="form.jam_buka" type="time" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Sampai</label>
                            <input v-model="form.jam_tutup" type="time" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                    </div>
                </div>

                <!-- Actions -->
                <div class="flex justify-end space-x-3 pt-6 border-t">
                    <button type="button" @click="resetForm" class="btn-secondary">Reset</button>
                    <button type="submit" class="btn-primary">Simpan Profil Masjid</button>
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
    sejarah: props.settings?.sejarah || '',
    alamat: props.settings?.alamat || '',
    kelurahan: props.settings?.kelurahan || '',
    kecamatan: props.settings?.kecamatan || '',
    kota: props.settings?.kota || '',
    provinsi: props.settings?.provinsi || '',
    kode_pos: props.settings?.kode_pos || '',
    latitude: props.settings?.latitude || '',
    longitude: props.settings?.longitude || '',
    no_telepon: props.settings?.no_telepon || '',
    email: props.settings?.email || '',
    website: props.settings?.website || '',
    facebook: props.settings?.facebook || '',
    instagram: props.settings?.instagram || '',
    twitter: props.settings?.twitter || '',
    youtube: props.settings?.youtube || '',
    tiktok: props.settings?.tiktok || '',
    whatsapp_group: props.settings?.whatsapp_group || '',
    logo_url: props.settings?.logo_url || '',
    foto_url: props.settings?.foto_url || '',
    jam_buka: props.settings?.jam_buka || '04:00',
    jam_tutup: props.settings?.jam_tutup || '22:00',
});

const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        console.log('Logo uploaded:', file.name);
    }
};

const handleFotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        console.log('Foto uploaded:', file.name);
    }
};

const submitForm = () => {
    router.post(route('settings.masjid.update'), form.value, {
        onSuccess: () => {
            // Show success message
        },
    });
};

const resetForm = () => {
    form.value = {
        nama_masjid: props.settings?.nama_masjid || '',
        nama_tamir: props.settings?.nama_tamir || '',
        sejarah: props.settings?.sejarah || '',
        alamat: props.settings?.alamat || '',
        kelurahan: props.settings?.kelurahan || '',
        kecamatan: props.settings?.kecamatan || '',
        kota: props.settings?.kota || '',
        provinsi: props.settings?.provinsi || '',
        kode_pos: props.settings?.kode_pos || '',
        latitude: props.settings?.latitude || '',
        longitude: props.settings?.longitude || '',
        no_telepon: props.settings?.no_telepon || '',
        email: props.settings?.email || '',
        website: props.settings?.website || '',
        facebook: props.settings?.facebook || '',
        instagram: props.settings?.instagram || '',
        twitter: props.settings?.twitter || '',
        youtube: props.settings?.youtube || '',
        tiktok: props.settings?.tiktok || '',
        whatsapp_group: props.settings?.whatsapp_group || '',
        logo_url: props.settings?.logo_url || '',
        foto_url: props.settings?.foto_url || '',
        jam_buka: props.settings?.jam_buka || '04:00',
        jam_tutup: props.settings?.jam_tutup || '22:00',
    };
};
</script>
