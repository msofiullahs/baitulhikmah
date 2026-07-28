<template>
    <AdminLayout title="Pengaturan Keuangan">
        <div class="space-y-6">
            <!-- Header -->
            <div class="border-b pb-4">
                <h1 class="text-2xl font-bold text-gray-900">Pengaturan Keuangan</h1>
                <p class="text-gray-600 mt-1">Konfigurasi kas box, approval threshold, dan payment gateway</p>
            </div>

            <!-- Kas Box Settings -->
            <form @submit.prevent="saveKasBoxSettings" class="bg-white rounded-lg shadow p-6 space-y-6">
                <h2 class="text-lg font-bold border-b pb-2">Kas Box (Rekening)</h2>
                
                <div class="space-y-4">
                    <div v-for="(kasbox, index) in form.kasboxes" :key="index" 
                         class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <div class="flex-1">
                            <input v-model="kasbox.nama" type="text" placeholder="Nama Kas Box" 
                                   class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div class="flex-1">
                            <input v-model="kasbox.kode" type="text" placeholder="Kode (contoh: UMUM)" 
                                   class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <label class="flex items-center">
                            <input v-model="kasbox.is_default" type="checkbox" 
                                   class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                            <span class="ml-2 text-sm text-gray-700">Default</span>
                        </label>
                        <button type="button" @click="removeKasBox(index)" class="text-red-600 hover:text-red-900">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                    
                    <button type="button" @click="addKasBox" class="btn-secondary">
                        <i class="fas fa-plus mr-2"></i>Tambah Kas Box
                    </button>
                </div>

                <div class="flex justify-end pt-4">
                    <button type="submit" class="btn-primary">Simpan Kas Box</button>
                </div>
            </form>

            <!-- Approval Threshold -->
            <form @submit.prevent="saveApprovalSettings" class="bg-white rounded-lg shadow p-6 space-y-6">
                <h2 class="text-lg font-bold border-b pb-2">Threshold Approval Transaksi</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">
                            Minimal Nominal untuk Approval (Rp)
                        </label>
                        <input v-model="form.approval_threshold" type="number" min="0" step="1000" 
                               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        <p class="text-xs text-gray-500 mt-1">Transaksi di atas nominal ini memerlukan approval dari ketua/bendahara</p>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">
                            Level Approval yang Diperlukan
                        </label>
                        <select v-model="form.approval_level" 
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                            <option value="1">1 Level (Bendahara)</option>
                            <option value="2">2 Level (Bendahara + Ketua)</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="flex items-center">
                        <input v-model="form.require_approval_for_expense" type="checkbox" 
                               class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        <span class="ml-2 text-sm text-gray-700">Wajib approval untuk pengeluaran</span>
                    </label>
                </div>

                <div class="flex justify-end pt-4">
                    <button type="submit" class="btn-primary">Simpan Approval Settings</button>
                </div>
            </form>

            <!-- Payment Gateway -->
            <form @submit.prevent="savePaymentGateway" class="bg-white rounded-lg shadow p-6 space-y-6">
                <h2 class="text-lg font-bold border-b pb-2">Payment Gateway Integration</h2>
                
                <div class="mb-4">
                    <label class="flex items-center">
                        <input v-model="form.payment_gateway_enabled" type="checkbox" 
                               class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        <span class="ml-2 text-sm font-medium text-gray-700">Aktifkan Payment Gateway</span>
                    </label>
                </div>

                <div v-if="form.payment_gateway_enabled" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Provider</label>
                        <select v-model="form.payment_provider" 
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                            <option value="midtrans">Midtrans</option>
                            <option value="xendit">Xendit</option>
                            <option value="doku">Doku</option>
                        </select>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Server Key / API Key</label>
                            <input v-model="form.payment_server_key" type="password" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Client Key</label>
                            <input v-model="form.payment_client_key" type="password" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Mode</label>
                        <div class="mt-2 flex items-center space-x-4">
                            <label class="flex items-center">
                                <input v-model="form.payment_mode" value="sandbox" type="radio" 
                                       class="text-blue-600 focus:ring-blue-500"/>
                                <span class="ml-2 text-sm text-gray-700">Sandbox (Testing)</span>
                            </label>
                            <label class="flex items-center">
                                <input v-model="form.payment_mode" value="production" type="radio" 
                                       class="text-blue-600 focus:ring-blue-500"/>
                                <span class="ml-2 text-sm text-gray-700">Production (Live)</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Payment Methods</label>
                        <div class="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2">
                            <label class="flex items-center p-2 border rounded">
                                <input v-model="form.payment_methods" value="bank_transfer" type="checkbox" 
                                       class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                                <span class="ml-2 text-sm">Bank Transfer</span>
                            </label>
                            <label class="flex items-center p-2 border rounded">
                                <input v-model="form.payment_methods" value="qris" type="checkbox" 
                                       class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                                <span class="ml-2 text-sm">QRIS</span>
                            </label>
                            <label class="flex items-center p-2 border rounded">
                                <input v-model="form.payment_methods" value="gopay" type="checkbox" 
                                       class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                                <span class="ml-2 text-sm">GoPay</span>
                            </label>
                            <label class="flex items-center p-2 border rounded">
                                <input v-model="form.payment_methods" value="shopeepay" type="checkbox" 
                                       class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                                <span class="ml-2 text-sm">ShopeePay</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end pt-4">
                    <button type="submit" class="btn-primary">Simpan Payment Gateway</button>
                </div>
            </form>

            <!-- WhatsApp API -->
            <form @submit.prevent="saveWhatsAppSettings" class="bg-white rounded-lg shadow p-6 space-y-6">
                <h2 class="text-lg font-bold border-b pb-2">WhatsApp API Settings</h2>
                
                <div class="mb-4">
                    <label class="flex items-center">
                        <input v-model="form.whatsapp_enabled" type="checkbox" 
                               class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        <span class="ml-2 text-sm font-medium text-gray-700">Aktifkan WhatsApp Broadcast</span>
                    </label>
                </div>

                <div v-if="form.whatsapp_enabled" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">API Provider</label>
                        <select v-model="form.whatsapp_provider" 
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                            <option value="fonnte">Fonnte</option>
                            <option value="watzap">Watzap</option>
                            <option value="twilio">Twilio</option>
                            <option value="custom">Custom API</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">API Token/Key</label>
                        <input v-model="form.whatsapp_token" type="password" 
                               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>
                    <div class="md:col-span-2">
                        <label class="block text-sm font-medium text-gray-700">Sender Number</label>
                        <input v-model="form.whatsapp_sender" type="text" placeholder="628xxxxxxxxxx" 
                               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>
                </div>

                <div class="flex justify-end pt-4">
                    <button type="submit" class="btn-primary">Simpan WhatsApp Settings</button>
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
    kasboxes: props.settings?.kasboxes || [{ nama: '', kode: '', is_default: false }],
    approval_threshold: props.settings?.approval_threshold || 1000000,
    approval_level: props.settings?.approval_level || '1',
    require_approval_for_expense: props.settings?.require_approval_for_expense || false,
    payment_gateway_enabled: props.settings?.payment_gateway_enabled || false,
    payment_provider: props.settings?.payment_provider || 'midtrans',
    payment_server_key: props.settings?.payment_server_key || '',
    payment_client_key: props.settings?.payment_client_key || '',
    payment_mode: props.settings?.payment_mode || 'sandbox',
    payment_methods: props.settings?.payment_methods || ['bank_transfer', 'qris'],
    whatsapp_enabled: props.settings?.whatsapp_enabled || false,
    whatsapp_provider: props.settings?.whatsapp_provider || 'fonnte',
    whatsapp_token: props.settings?.whatsapp_token || '',
    whatsapp_sender: props.settings?.whatsapp_sender || '',
});

const addKasBox = () => {
    form.value.kasboxes.push({ nama: '', kode: '', is_default: false });
};

const removeKasBox = (index) => {
    if (form.value.kasboxes.length > 1) {
        form.value.kasboxes.splice(index, 1);
    }
};

const saveKasBoxSettings = () => {
    router.post(route('settings.finance.kasbox'), { kasboxes: form.value.kasboxes }, {
        onSuccess: () => {
            // Show success message
        },
    });
};

const saveApprovalSettings = () => {
    router.post(route('settings.finance.approval'), form.value, {
        onSuccess: () => {
            // Show success message
        },
    });
};

const savePaymentGateway = () => {
    router.post(route('settings.finance.payment'), form.value, {
        onSuccess: () => {
            // Show success message
        },
    });
};

const saveWhatsAppSettings = () => {
    router.post(route('settings.finance.whatsapp'), form.value, {
        onSuccess: () => {
            // Show success message
        },
    });
};
</script>
