<template>
    <AdminLayout title="Mustahik ZISWAF">
        <div class="space-y-6">
            <!-- Header -->
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-4">
                    <a :href="route('ziswaf.donations.index')" class="text-gray-500 hover:text-primary transition flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Kembali
                    </a>
                    <h1 class="text-2xl font-bold text-gray-900">Data Mustahik (Penerima ZISWAF)</h1>
                </div>
                <button @click="showModal = true" class="btn-primary">
                    <i class="fas fa-plus mr-2"></i>Tambah Mustahik
                </button>
            </div>

            <!-- Stats Cards -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="bg-white rounded-lg shadow p-4">
                    <div class="text-sm text-gray-500">Total Mustahik</div>
                    <div class="text-2xl font-bold text-blue-600">{{ mustahiqs.total }}</div>
                </div>
                <div class="bg-white rounded-lg shadow p-4">
                    <div class="text-sm text-gray-500">Fakir</div>
                    <div class="text-2xl font-bold text-red-600">{{ countByCategory('Fakir') }}</div>
                </div>
                <div class="bg-white rounded-lg shadow p-4">
                    <div class="text-sm text-gray-500">Miskin</div>
                    <div class="text-2xl font-bold text-orange-600">{{ countByCategory('Miskin') }}</div>
                </div>
                <div class="bg-white rounded-lg shadow p-4">
                    <div class="text-sm text-gray-500">Asnaf Lainnya</div>
                    <div class="text-2xl font-bold text-green-600">{{ mustahiqs.total - countByCategory('Fakir') - countByCategory('Miskin') }}</div>
                </div>
            </div>

            <!-- Search & Filter -->
            <div class="bg-white rounded-lg shadow p-4">
                <div class="flex gap-4">
                    <input v-model="search" type="text" placeholder="Cari nama mustahik..." 
                           class="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"/>
                    <select v-model="filterCategory" class="px-4 py-2 border rounded-lg">
                        <option value="">Semua Kategori</option>
                        <option value="Fakir">Fakir</option>
                        <option value="Miskin">Miskin</option>
                        <option value="Amil">Amil</option>
                        <option value="Muallaf">Muallaf</option>
                        <option value="Riqab">Riqab (Budak)</option>
                        <option value="Gharimin">Gharimin (Berhutang)</option>
                        <option value="Sabilillah">Sabilillah</option>
                        <option value="Ibnu Sabil">Ibnu Sabil</option>
                    </select>
                </div>
            </div>

            <!-- Table -->
            <div class="bg-white rounded-lg shadow overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kategori (Asnaf)</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Alamat</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">No. HP</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="mustahiq in filteredMustahiqs" :key="mustahiq.id">
                            <td class="px-6 py-4 whitespace-nowrap">{{ mustahiq.nama }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                                    {{ mustahiq.kategori }}
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500">{{ mustahiq.alamat }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ mustahiq.no_hp || '-' }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span :class="mustahiq.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'" 
                                      class="px-2 py-1 text-xs rounded-full">
                                    {{ mustahiq.is_active ? 'Aktif' : 'Nonaktif' }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button @click="editMustahiq(mustahiq)" class="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                                <button @click="deleteMustahiq(mustahiq.id)" class="text-red-600 hover:text-red-900">Hapus</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <Pagination :links="mustahiqs.links" />

            <!-- Modal Form -->
            <Modal :show="showModal" @close="showModal = false" max-width="lg">
                <form @submit.prevent="submitForm" class="p-6 space-y-4">
                    <h2 class="text-xl font-bold">{{ isEditing ? 'Edit' : 'Tambah' }} Mustahik</h2>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                        <input v-model="form.nama" type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Kategori (Asnaf)</label>
                        <select v-model="form.kategori" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                            <option value="">Pilih Kategori</option>
                            <option value="Fakir">Fakir - Tidak punya harta & tenaga</option>
                            <option value="Miskin">Miskin - Punya sedikit harta</option>
                            <option value="Amil">Amil - Pengelola ZISWAF</option>
                            <option value="Muallaf">Muallaf - Baru masuk Islam</option>
                            <option value="Riqab">Riqab - Budak/Hamba Sahaya</option>
                            <option value="Gharimin">Gharimin - Orang Berhutang</option>
                            <option value="Sabilillah">Sabilillah - Pejuang di Jalan Allah</option>
                            <option value="Ibnu Sabil">Ibnu Sabil - Musafir Kehabisan Bekal</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Alamat</label>
                        <textarea v-model="form.alamat" rows="3" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">No. HP</label>
                        <input v-model="form.no_hp" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Catatan/Kondisi Khusus</label>
                        <textarea v-model="form.catatan" rows="2" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                    </div>

                    <div v-if="isEditing">
                        <label class="flex items-center">
                            <input v-model="form.is_active" type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                            <span class="ml-2 text-sm text-gray-700">Aktif</span>
                        </label>
                    </div>

                    <div class="flex justify-end gap-3 pt-4">
                        <button type="button" @click="showModal = false" class="btn-secondary">Batal</button>
                        <button type="submit" class="btn-primary">{{ isEditing ? 'Update' : 'Simpan' }}</button>
                    </div>
                </form>
            </Modal>
        </div>
    </AdminLayout>
</template>

<script setup>
import { ref, computed } from 'vue';
import { router } from '@inertiajs/vue3';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import Modal from '@/Components/Modal.vue';

const props = defineProps({
    mustahiqs: Object,
});

const showModal = ref(false);
const search = ref('');
const filterCategory = ref('');
const isEditing = ref(false);
const editingId = ref(null);

const form = ref({
    nama: '',
    kategori: '',
    alamat: '',
    no_hp: '',
    catatan: '',
    is_active: true,
});

const filteredMustahiqs = computed(() => {
    let data = props.mustahiqs.data || [];
    
    if (search.value) {
        data = data.filter(m => m.nama.toLowerCase().includes(search.value.toLowerCase()));
    }
    
    if (filterCategory.value) {
        data = data.filter(m => m.kategori === filterCategory.value);
    }
    
    return data;
});

const countByCategory = (category) => {
    return (props.mustahiqs.data || []).filter(m => m.kategori === category).length;
};

const resetForm = () => {
    form.value = {
        nama: '',
        kategori: '',
        alamat: '',
        no_hp: '',
        catatan: '',
        is_active: true,
    };
    isEditing.value = false;
    editingId.value = null;
};

const submitForm = () => {
    if (isEditing.value) {
        router.put(route('mustahiq.update', editingId.value), form.value, {
            onSuccess: () => {
                showModal.value = false;
                resetForm();
            },
        });
    } else {
        router.post(route('mustahiq.store'), form.value, {
            onSuccess: () => {
                showModal.value = false;
                resetForm();
            },
        });
    }
};

const editMustahiq = (mustahiq) => {
    form.value = {
        nama: mustahiq.nama,
        kategori: mustahiq.kategori,
        alamat: mustahiq.alamat,
        no_hp: mustahiq.no_hp || '',
        catatan: mustahiq.catatan || '',
        is_active: mustahiq.is_active,
    };
    isEditing.value = true;
    editingId.value = mustahiq.id;
    showModal.value = true;
};

const deleteMustahiq = (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus mustahik ini?')) {
        router.delete(route('mustahiq.destroy', id));
    }
};
</script>
