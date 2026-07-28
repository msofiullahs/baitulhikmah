<template>
    <AdminLayout title="Social Media">
        <div class="space-y-6">
            <!-- Header -->
            <div class="border-b pb-4">
                <h1 class="text-2xl font-bold text-gray-900">Pengaturan Social Media</h1>
                <p class="text-gray-600 mt-1">Kelola link dan integrasi sosial media masjid</p>
            </div>

            <!-- Form -->
            <form @submit.prevent="submitForm" class="bg-white rounded-lg shadow p-6 space-y-6">
                <!-- Main Social Media -->
                <div class="border-b pb-4">
                    <h3 class="text-lg font-medium mb-4">Social Media Utama</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">
                                <i class="fab fa-facebook text-blue-600 mr-2"></i>Facebook
                            </label>
                            <input v-model="form.facebook" type="url" placeholder="https://facebook.com/namamasjid" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">
                                <i class="fab fa-instagram text-pink-600 mr-2"></i>Instagram
                            </label>
                            <input v-model="form.instagram" type="url" placeholder="https://instagram.com/namamasjid" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">
                                <i class="fab fa-twitter text-blue-400 mr-2"></i>Twitter/X
                            </label>
                            <input v-model="form.twitter" type="url" placeholder="https://twitter.com/namamasjid" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">
                                <i class="fab fa-youtube text-red-600 mr-2"></i>YouTube
                            </label>
                            <input v-model="form.youtube" type="url" placeholder="https://youtube.com/@namamasjid" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">
                                <i class="fab fa-tiktok text-gray-800 mr-2"></i>TikTok
                            </label>
                            <input v-model="form.tiktok" type="url" placeholder="https://tiktok.com/@namamasjid" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">
                                <i class="fab fa-whatsapp text-green-600 mr-2"></i>WhatsApp Group
                            </label>
                            <input v-model="form.whatsapp_group" type="url" placeholder="https://chat.whatsapp.com/..." 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                    </div>
                </div>

                <!-- Additional Links -->
                <div class="border-b pb-4">
                    <h3 class="text-lg font-medium mb-4">Link Tambahan</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Website Resmi</label>
                            <input v-model="form.website" type="url" placeholder="https://masjidcontoh.com" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Telegram Channel</label>
                            <input v-model="form.telegram" type="url" placeholder="https://t.me/namachannel" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">LinkedIn</label>
                            <input v-model="form.linkedin" type="url" placeholder="https://linkedin.com/company/namamasjid" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Google Maps Link</label>
                            <input v-model="form.google_maps" type="url" placeholder="https://maps.google.com/..." 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                    </div>
                </div>

                <!-- Broadcast Settings -->
                <div class="border-b pb-4">
                    <h3 class="text-lg font-medium mb-4">Pengaturan Broadcast</h3>
                    <div class="space-y-4">
                        <div>
                            <label class="flex items-center">
                                <input v-model="form.enable_wa_broadcast" type="checkbox" 
                                       class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                                <span class="ml-2 text-sm text-gray-700">Aktifkan Broadcast WhatsApp untuk Pengumuman</span>
                            </label>
                        </div>
                        <div>
                            <label class="flex items-center">
                                <input v-model="form.enable_email_broadcast" type="checkbox" 
                                       class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                                <span class="ml-2 text-sm text-gray-700">Aktifkan Broadcast Email untuk Pengumuman</span>
                            </label>
                        </div>
                        <div>
                            <label class="flex items-center">
                                <input v-model="form.auto_post_facebook" type="checkbox" 
                                       class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                                <span class="ml-2 text-sm text-gray-700">Auto-post pengumuman ke Facebook</span>
                            </label>
                        </div>
                        <div>
                            <label class="flex items-center">
                                <input v-model="form.auto_post_instagram" type="checkbox" 
                                       class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                                <span class="ml-2 text-sm text-gray-700">Auto-post pengumuman ke Instagram</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- API Keys -->
                <div>
                    <h3 class="text-lg font-medium mb-4">API Integration (Opsional)</h3>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Facebook Page Access Token</label>
                            <input v-model="form.fb_access_token" type="password" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Instagram Basic Display Token</label>
                            <input v-model="form.ig_access_token" type="password" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">YouTube API Key</label>
                            <input v-model="form.yt_api_key" type="password" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                    </div>
                </div>

                <!-- Preview -->
                <div class="bg-gray-50 rounded-lg p-4">
                    <h3 class="text-lg font-medium mb-4">Preview Footer Website</h3>
                    <div class="flex flex-wrap gap-4">
                        <a v-if="form.facebook" :href="form.facebook" target="_blank" class="text-blue-600 hover:text-blue-800">
                            <i class="fab fa-facebook fa-lg"></i>
                        </a>
                        <a v-if="form.instagram" :href="form.instagram" target="_blank" class="text-pink-600 hover:text-pink-800">
                            <i class="fab fa-instagram fa-lg"></i>
                        </a>
                        <a v-if="form.twitter" :href="form.twitter" target="_blank" class="text-blue-400 hover:text-blue-600">
                            <i class="fab fa-twitter fa-lg"></i>
                        </a>
                        <a v-if="form.youtube" :href="form.youtube" target="_blank" class="text-red-600 hover:text-red-800">
                            <i class="fab fa-youtube fa-lg"></i>
                        </a>
                        <a v-if="form.tiktok" :href="form.tiktok" target="_blank" class="text-gray-800 hover:text-gray-600">
                            <i class="fab fa-tiktok fa-lg"></i>
                        </a>
                        <a v-if="form.whatsapp_group" :href="form.whatsapp_group" target="_blank" class="text-green-600 hover:text-green-800">
                            <i class="fab fa-whatsapp fa-lg"></i>
                        </a>
                    </div>
                </div>

                <!-- Actions -->
                <div class="flex justify-end space-x-3 pt-6 border-t">
                    <button type="button" @click="resetForm" class="btn-secondary">Reset</button>
                    <button type="submit" class="btn-primary">Simpan Social Media</button>
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
    facebook: props.settings?.facebook || '',
    instagram: props.settings?.instagram || '',
    twitter: props.settings?.twitter || '',
    youtube: props.settings?.youtube || '',
    tiktok: props.settings?.tiktok || '',
    whatsapp_group: props.settings?.whatsapp_group || '',
    website: props.settings?.website || '',
    telegram: props.settings?.telegram || '',
    linkedin: props.settings?.linkedin || '',
    google_maps: props.settings?.google_maps || '',
    enable_wa_broadcast: props.settings?.enable_wa_broadcast || false,
    enable_email_broadcast: props.settings?.enable_email_broadcast || false,
    auto_post_facebook: props.settings?.auto_post_facebook || false,
    auto_post_instagram: props.settings?.auto_post_instagram || false,
    fb_access_token: props.settings?.fb_access_token || '',
    ig_access_token: props.settings?.ig_access_token || '',
    yt_api_key: props.settings?.yt_api_key || '',
});

const submitForm = () => {
    router.post(route('settings.social.update'), form.value, {
        onSuccess: () => {
            // Show success message
        },
    });
};

const resetForm = () => {
    form.value = {
        facebook: props.settings?.facebook || '',
        instagram: props.settings?.instagram || '',
        twitter: props.settings?.twitter || '',
        youtube: props.settings?.youtube || '',
        tiktok: props.settings?.tiktok || '',
        whatsapp_group: props.settings?.whatsapp_group || '',
        website: props.settings?.website || '',
        telegram: props.settings?.telegram || '',
        linkedin: props.settings?.linkedin || '',
        google_maps: props.settings?.google_maps || '',
        enable_wa_broadcast: props.settings?.enable_wa_broadcast || false,
        enable_email_broadcast: props.settings?.enable_email_broadcast || false,
        auto_post_facebook: props.settings?.auto_post_facebook || false,
        auto_post_instagram: props.settings?.auto_post_instagram || false,
        fb_access_token: props.settings?.fb_access_token || '',
        ig_access_token: props.settings?.ig_access_token || '',
        yt_api_key: props.settings?.yt_api_key || '',
    };
};
</script>
