<template>
    <AdminLayout title="Template Undangan">
        <div class="space-y-6">
            <!-- Header -->
            <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold text-gray-900">Kelola Template Undangan</h1>
                <button @click="showModal = true" class="btn-primary">
                    <i class="fas fa-plus mr-2"></i>Tambah Template Baru
                </button>
            </div>

            <!-- Stats Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white rounded-lg shadow p-4">
                    <div class="text-sm text-gray-500">Total Template</div>
                    <div class="text-2xl font-bold text-blue-600">{{ templates.length }}</div>
                </div>
                <div class="bg-white rounded-lg shadow p-4">
                    <div class="text-sm text-gray-500">Template Aktif</div>
                    <div class="text-2xl font-bold text-green-600">{{ templates.filter(t => t.is_active).length }}</div>
                </div>
                <div class="bg-white rounded-lg shadow p-4">
                    <div class="text-sm text-gray-500">Kategori Tersedia</div>
                    <div class="text-2xl font-bold text-purple-600">{{ uniqueCategories.length }}</div>
                </div>
            </div>

            <!-- Filter by Category -->
            <div class="bg-white rounded-lg shadow p-4">
                <div class="flex gap-4 flex-wrap">
                    <input v-model="search" type="text" placeholder="Cari template..." 
                           class="flex-1 min-w-[200px] px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"/>
                    <select v-model="filterCategory" class="px-4 py-2 border rounded-lg">
                        <option value="">Semua Kategori</option>
                        <option v-for="cat in uniqueCategories" :key="cat" :value="cat">{{ cat }}</option>
                    </select>
                </div>
            </div>

            <!-- Table -->
            <div class="bg-white rounded-lg shadow overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama Template</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kategori</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Warna Tema</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Preview</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="tpl in filteredTemplates" :key="tpl.id">
                            <td class="px-6 py-4">
                                <div class="font-medium text-gray-900">{{ tpl.nama }}</div>
                                <div class="text-sm text-gray-500 truncate max-w-xs">{{ tpl.deskripsi }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">
                                    {{ tpl.kategori }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div v-if="tpl.warna_tema" class="flex items-center gap-2">
                                    <div class="w-6 h-6 rounded border" :style="{ backgroundColor: tpl.warna_tema }"></div>
                                    <span class="text-sm text-gray-600">{{ tpl.warna_tema }}</span>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <img v-if="tpl.preview_image" :src="`/storage/${tpl.preview_image}`" :alt="tpl.nama" 
                                     class="h-16 w-24 object-cover rounded border"/>
                                <span v-else class="text-gray-400 text-sm">Tidak ada preview</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span :class="getStatusClass(tpl.is_active)" class="px-2 py-1 text-xs rounded-full">
                                    {{ tpl.is_active ? 'Aktif' : 'Nonaktif' }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                <button @click="toggleActive(tpl)" :title="tpl.is_active ? 'Nonaktifkan' : 'Aktifkan'"
                                        class="text-blue-600 hover:text-blue-900">
                                    <i :class="tpl.is_active ? 'fas fa-toggle-on' : 'fas fa-toggle-off'"></i>
                                </button>
                                <button @click="editTemplate(tpl)" class="text-yellow-600 hover:text-yellow-900" title="Edit">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button @click="deleteTemplate(tpl.id)" class="text-red-600 hover:text-red-900" title="Hapus">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr v-if="filteredTemplates.length === 0">
                            <td colspan="6" class="px-6 py-8 text-center text-gray-500">
                                Tidak ada template yang ditemukan
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Modal Form -->
            <Modal :show="showModal" @close="showModal = false" max-width="2xl">
                <form @submit.prevent="submitForm" class="p-6 space-y-4">
                    <h2 class="text-xl font-bold">{{ isEditing ? 'Edit' : 'Tambah' }} Template Undangan</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Nama Template <span class="text-red-500">*</span></label>
                            <input v-model="form.nama" type="text" required 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Kategori <span class="text-red-500">*</span></label>
                            <select v-model="form.kategori" required 
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                                <option value="">Pilih Kategori</option>
                                <option value="Pengajian Rutin">Pengajian Rutin</option>
                                <option value="Maulid/Isra Mi'raj">Maulid/Isra Mi'raj</option>
                                <option value="Rapat Ta'mir">Rapat Ta'mir</option>
                                <option value="Halal Bihalal">Halal Bihalal</option>
                                <option value="Kajian Akbar">Kajian Akbar</option>
                                <option value="Pernikahan">Pernikahan</option>
                                <option value="Khitanan">Khitanan</option>
                                <option value="Tahlilan">Tahlilan</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Deskripsi</label>
                        <textarea v-model="form.deskripsi" rows="3" 
                                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Warna Tema</label>
                            <div class="flex gap-2 mt-1">
                                <input v-model="form.warna_tema" type="color" 
                                       class="h-10 w-16 rounded border cursor-pointer"/>
                                <input v-model="form.warna_tema" type="text" placeholder="#000000"
                                       class="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Status</label>
                            <div class="mt-2">
                                <label class="inline-flex items-center">
                                    <input v-model="form.is_active" type="checkbox" 
                                           class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
                                    <span class="ml-2 text-sm text-gray-700">Aktif</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Preview Image</label>
                            <input type="file" @change="handlePreviewImage" accept="image/*"
                                   class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                            <p class="text-xs text-gray-500 mt-1">JPEG, PNG, GIF (max 2MB)</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">File Template</label>
                            <input type="file" @change="handleFileTemplate" accept=".pdf,.doc,.docx"
                                   class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                            <p class="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (max 5MB)</p>
                        </div>
                    </div>

                    <div class="flex justify-end gap-3 pt-4">
                        <button type="button" @click="showModal = false" class="btn-secondary">Batal</button>
                        <button type="submit" class="btn-primary">{{ isEditing ? 'Update' : 'Simpan' }} Template</button>
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
import Modal from '@/Components/Modal.vue';

const props = defineProps({
    templates: Array,
});

const showModal = ref(false);
const search = ref('');
const filterCategory = ref('');
const isEditing = ref(false);
const editingId = ref(null);

const form = ref({
    nama: '',
    kategori: '',
    deskripsi: '',
    warna_tema: '#4F46E5',
    is_active: true,
    preview_image: null,
    file_template: null,
});

const uniqueCategories = computed(() => {
    const categories = new Set(props.templates.map(t => t.kategori));
    return Array.from(categories);
});

const filteredTemplates = computed(() => {
    let data = props.templates || [];
    
    if (search.value) {
        data = data.filter(tpl => 
            tpl.nama.toLowerCase().includes(search.value.toLowerCase()) ||
            tpl.deskripsi?.toLowerCase().includes(search.value.toLowerCase())
        );
    }
    
    if (filterCategory.value) {
        data = data.filter(tpl => tpl.kategori === filterCategory.value);
    }
    
    return data;
});

const getStatusClass = (isActive) => {
    return isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
};

const resetForm = () => {
    form.value = {
        nama: '',
        kategori: '',
        deskripsi: '',
        warna_tema: '#4F46E5',
        is_active: true,
        preview_image: null,
        file_template: null,
    };
    isEditing.value = false;
    editingId.value = null;
};

const handlePreviewImage = (event) => {
    form.value.preview_image = event.target.files[0];
};

const handleFileTemplate = (event) => {
    form.value.file_template = event.target.files[0];
};

const submitForm = () => {
    const formData = new FormData();
    formData.append('nama', form.value.nama);
    formData.append('kategori', form.value.kategori);
    formData.append('deskripsi', form.value.deskripsi || '');
    formData.append('warna_tema', form.value.warna_tema || '');
    formData.append('is_active', form.value.is_active);
    
    if (form.value.preview_image) {
        formData.append('preview_image', form.value.preview_image);
    }
    if (form.value.file_template) {
        formData.append('file_template', form.value.file_template);
    }

    if (isEditing.value) {
        formData.append('_method', 'PUT');
        router.post(route('invitation-templates.update', editingId.value), formData, {
            onSuccess: () => {
                showModal.value = false;
                resetForm();
            },
        });
    } else {
        router.post(route('invitation-templates.store'), formData, {
            onSuccess: () => {
                showModal.value = false;
                resetForm();
            },
        });
    }
};

const editTemplate = (tpl) => {
    form.value = {
        nama: tpl.nama,
        kategori: tpl.kategori,
        deskripsi: tpl.deskripsi || '',
        warna_tema: tpl.warna_tema || '#4F46E5',
        is_active: tpl.is_active,
        preview_image: null,
        file_template: null,
    };
    isEditing.value = true;
    editingId.value = tpl.id;
    showModal.value = true;
};

const toggleActive = (tpl) => {
    router.post(route('invitation-templates.toggle-active', tpl.id), {}, {
        preserveScroll: true,
    });
};

const deleteTemplate = (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus template ini?')) {
        router.delete(route('invitation-templates.destroy', id));
    }
};
</script>
