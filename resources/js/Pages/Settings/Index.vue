<template>
    <AdminLayout title="Pengaturan Sistem">
        <div class="space-y-6">
            <!-- Header -->
            <div class="border-b pb-4">
                <h1 class="text-2xl font-bold text-gray-900">Pengaturan Sistem</h1>
                <p class="text-gray-600 mt-1">Kelola konfigurasi dan pengaturan aplikasi</p>
            </div>

            <!-- Settings Navigation -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- General Settings -->
                <a :href="route('settings.general')" class="block bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-blue-500">
                    <div class="flex items-center space-x-4">
                        <div class="bg-blue-100 p-3 rounded-full">
                            <i class="fas fa-cog text-blue-600 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg">Umum</h3>
                            <p class="text-sm text-gray-600">Nama masjid, alamat, logo, kop surat</p>
                        </div>
                    </div>
                </a>

                <!-- Finance Settings -->
                <a :href="route('settings.finance')" class="block bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-green-500">
                    <div class="flex items-center space-x-4">
                        <div class="bg-green-100 p-3 rounded-full">
                            <i class="fas fa-money-bill-wave text-green-600 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg">Keuangan</h3>
                            <p class="text-sm text-gray-600">Kas box, threshold approval, payment gateway</p>
                        </div>
                    </div>
                </a>

                <!-- Masjid Profile -->
                <a :href="route('settings.masjid')" class="block bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-purple-500">
                    <div class="flex items-center space-x-4">
                        <div class="bg-purple-100 p-3 rounded-full">
                            <i class="fas fa-mosque text-purple-600 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg">Profil Masjid</h3>
                            <p class="text-sm text-gray-600">Informasi detail masjid & kontak</p>
                        </div>
                    </div>
                </a>

                <!-- Social Media -->
                <a :href="route('settings.social')" class="block bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-pink-500">
                    <div class="flex items-center space-x-4">
                        <div class="bg-pink-100 p-3 rounded-full">
                            <i class="fas fa-share-alt text-pink-600 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg">Social Media</h3>
                            <p class="text-sm text-gray-600">Link sosial media masjid</p>
                        </div>
                    </div>
                </a>

                <!-- Roles & Permissions -->
                <a :href="route('roles.index')" class="block bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-yellow-500">
                    <div class="flex items-center space-x-4">
                        <div class="bg-yellow-100 p-3 rounded-full">
                            <i class="fas fa-user-shield text-yellow-600 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg">Roles & Permissions</h3>
                            <p class="text-sm text-gray-600">Kelola role dan hak akses user</p>
                        </div>
                    </div>
                </a>

                <!-- Backup & Restore -->
                <a href="#" class="block bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-red-500">
                    <div class="flex items-center space-x-4">
                        <div class="bg-red-100 p-3 rounded-full">
                            <i class="fas fa-database text-red-600 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg">Backup & Restore</h3>
                            <p class="text-sm text-gray-600">Backup database & restore data</p>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Quick Stats -->
            <div class="bg-white rounded-lg shadow p-6">
                <h2 class="text-lg font-bold mb-4">Informasi Sistem</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div class="text-center p-4 bg-gray-50 rounded-lg">
                        <div class="text-2xl font-bold text-blue-600">{{ totalUsers }}</div>
                        <div class="text-sm text-gray-600">Total Pengguna</div>
                    </div>
                    <div class="text-center p-4 bg-gray-50 rounded-lg">
                        <div class="text-2xl font-bold text-green-600">{{ totalTransactions }}</div>
                        <div class="text-sm text-gray-600">Transaksi Bulan Ini</div>
                    </div>
                    <div class="text-center p-4 bg-gray-50 rounded-lg">
                        <div class="text-2xl font-bold text-purple-600">{{ totalJamaah }}</div>
                        <div class="text-sm text-gray-600">Data Jamaah</div>
                    </div>
                    <div class="text-center p-4 bg-gray-50 rounded-lg">
                        <div class="text-2xl font-bold text-orange-600">{{ systemVersion }}</div>
                        <div class="text-sm text-gray-600">Versi Sistem</div>
                    </div>
                </div>
            </div>

            <!-- System Logs -->
            <div class="bg-white rounded-lg shadow p-6">
                <h2 class="text-lg font-bold mb-4">Audit Log Terakhir</h2>
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Waktu</th>
                                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Aksi</th>
                                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Deskripsi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="log in auditLogs" :key="log.id">
                                <td class="px-4 py-2 text-sm">{{ formatDate(log.created_at) }}</td>
                                <td class="px-4 py-2 text-sm">{{ log.causer?.name || 'System' }}</td>
                                <td class="px-4 py-2 text-sm">
                                    <span class="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">{{ log.description }}</span>
                                </td>
                                <td class="px-4 py-2 text-sm text-gray-600 truncate max-w-xs">{{ log.properties?.description || '-' }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import { computed } from 'vue';
import AdminLayout from '@/Layouts/AdminLayout.vue';

const props = defineProps({
    totalUsers: Number,
    totalTransactions: Number,
    totalJamaah: Number,
    auditLogs: Array,
});

const systemVersion = '1.0.0';

const formatDate = (date) => {
    if (!date) return '-';
    return new Date(date).toLocaleString('id-ID');
};
</script>
