<template>
    <AdminLayout title="Undangan">
        <div class="space-y-6">
            <!-- Header -->
            <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold text-gray-900">Kelola Undangan</h1>
                <button @click="showModal = true" class="btn-primary">
                    <i class="fas fa-plus mr-2"></i>Buat Undangan Baru
                </button>
            </div>

            <!-- Stats Cards -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="bg-white rounded-lg shadow p-4">
                    <div class="text-sm text-gray-500">Total Undangan</div>
                    <div class="text-2xl font-bold text-blue-600">{{ invitations.total }}</div>
                </div>
                <div class="bg-white rounded-lg shadow p-4">
                    <div class="text-sm text-gray-500">Terkirim</div>
                    <div class="text-2xl font-bold text-green-600">{{ countByStatus('terkirim') }}</div>
                </div>
                <div class="bg-white rounded-lg shadow p-4">
                    <div class="text-sm text-gray-500">Draft</div>
                    <div class="text-2xl font-bold text-yellow-600">{{ countByStatus('draft') }}</div>
                </div>
                <div class="bg-white rounded-lg shadow p-4">
                    <div class="text-sm text-gray-500">Selesai</div>
                    <div class="text-2xl font-bold text-gray-600">{{ countByStatus('selesai') }}</div>
                </div>
            </div>

            <!-- Search & Filter -->
            <div class="bg-white rounded-lg shadow p-4">
                <div class="flex gap-4 flex-wrap">
                    <input v-model="search" type="text" placeholder="Cari judul undangan..." 
                           class="flex-1 min-w-[200px] px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"/>
                    <select v-model="filterTemplate" class="px-4 py-2 border rounded-lg">
                        <option value="">Semua Template</option>
                        <option value="Pengajian Rutin">Pengajian Rutin</option>
                        <option value="Maulid/Isra Mi'raj">Maulid/Isra Mi'raj</option>
                        <option value="Rapat Ta'mir">Rapat Ta'mir</option>
                        <option value="Halal Bihalal">Halal Bihalal</option>
                        <option value="Kajian Akbar">Kajian Akbar</option>
                        <option value="Pernikahan">Pernikahan</option>
                    </select>
                    <select v-model="filterStatus" class="px-4 py-2 border rounded-lg">
                        <option value="">Semua Status</option>
                        <option value="draft">Draft</option>
                        <option value="terkirim">Terkirim</option>
                        <option value="selesai">Selesai</option>
                    </select>
                </div>
            </div>

            <!-- Table -->
            <div class="bg-white rounded-lg shadow overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">No. Undangan</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Judul Acara</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Template</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tanggal Acara</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Jumlah Penerima</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="inv in filteredInvitations" :key="inv.id">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-mono">{{ inv.no_undangan }}</td>
                            <td class="px-6 py-4">{{ inv.judul_acara }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">
                                    {{ inv.template }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ formatDate(inv.tanggal_acara) }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ inv.jumlah_penerima || 0 }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span :class="getStatusClass(inv.status)" class="px-2 py-1 text-xs rounded-full">
                                    {{ inv.status }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                <button @click="previewInvitation(inv)" class="text-blue-600 hover:text-blue-900" title="Preview">
                                    <i class="fas fa-eye"></i>
                                </button>
                                <button @click="downloadPdf(inv)" class="text-green-600 hover:text-green-900" title="Download PDF">
                                    <i class="fas fa-file-pdf"></i>
                                </button>
                                <button @click="sendWhatsapp(inv)" class="text-emerald-600 hover:text-emerald-900" title="Kirim WA">
                                    <i class="fab fa-whatsapp"></i>
                                </button>
                                <button @click="editInvitation(inv)" class="text-yellow-600 hover:text-yellow-900" title="Edit">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button @click="deleteInvitation(inv.id)" class="text-red-600 hover:text-red-900" title="Hapus">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <Pagination :links="invitations.links" />

            <!-- Modal Form -->
            <Modal :show="showModal" @close="showModal = false" max-width="2xl">
                <form @submit.prevent="submitForm" class="p-6 space-y-4">
                    <h2 class="text-xl font-bold">{{ isEditing ? 'Edit' : 'Buat' }} Undangan</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Template</label>
                            <select v-model="form.template_id" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                                <option value="">Pilih Template</option>
                                <option v-for="tpl in templates" :key="tpl.id" :value="tpl.id">{{ tpl.nama }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">No. Undangan</label>
                            <input v-model="form.no_undangan" type="text" :placeholder="'UND-' + new Date().toISOString().slice(0,10).replace(/-/g,'') + '-XXX'" 
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Judul Acara</label>
                        <input v-model="form.judul_acara" type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Deskripsi</label>
                        <textarea v-model="form.deskripsi" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Tanggal & Waktu</label>
                            <input v-model="form.tanggal_acara" type="datetime-local" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Lokasi</label>
                            <input v-model="form.lokasi" type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Pembicara/Narasumber</label>
                            <input v-model="form.pembicara" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Dress Code</label>
                            <input v-model="form.dress_code" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Kontak Person</label>
                        <input v-model="form.kontak" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Daftar Penerima (satu nama per baris)</label>
                        <textarea v-model="form.receiver_names" rows="6" placeholder="Ahmad&#10;Fatimah&#10;Ibrahim&#10;Khadijah" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                        <p class="text-xs text-gray-500 mt-1">Import dari Excel dapat dilakukan setelah undangan dibuat</p>
                    </div>

                    <div class="flex justify-end gap-3 pt-4">
                        <button type="button" @click="showModal = false" class="btn-secondary">Batal</button>
                        <button type="submit" class="btn-primary">{{ isEditing ? 'Update' : 'Buat' }} Undangan</button>
                    </div>
                </form>
            </Modal>

            <!-- Preview Modal -->
            <Modal :show="showPreview" @close="showPreview = false" max-width="2xl">
                <div class="p-6">
                    <h2 class="text-xl font-bold mb-4">Preview Undangan</h2>
                    <div class="border rounded-lg p-6 bg-gradient-to-br from-blue-50 to-purple-50">
                        <div class="text-center mb-4">
                            <img :src="masjid.logo" alt="Logo Masjid" class="h-16 mx-auto mb-2"/>
                            <h3 class="text-lg font-bold">{{ masjid.nama }}</h3>
                            <p class="text-sm text-gray-600">{{ masjid.alamat }}</p>
                        </div>
                        <div class="bg-white rounded-lg p-6 shadow-inner">
                            <h4 class="text-xl font-bold text-center mb-2">{{ previewData.judul_acara }}</h4>
                            <p class="text-center text-gray-600 mb-4">{{ previewData.deskripsi }}</p>
                            <div class="space-y-2 text-sm">
                                <p><strong>📅 Tanggal:</strong> {{ formatDate(previewData.tanggal_acara) }}</p>
                                <p><strong>📍 Lokasi:</strong> {{ previewData.lokasi }}</p>
                                <p v-if="previewData.pembicara"><strong>🎤 Pembicara:</strong> {{ previewData.pembicara }}</p>
                                <p v-if="previewData.dress_code"><strong>👔 Dress Code:</strong> {{ previewData.dress_code }}</p>
                                <p v-if="previewData.kontak"><strong>📞 Kontak:</strong> {{ previewData.kontak }}</p>
                            </div>
                            <div class="mt-4 text-center">
                                <div class="inline-block bg-gray-200 p-2 rounded">
                                    <div class="w-24 h-24 bg-gray-400 flex items-center justify-center text-xs text-white">QR Code</div>
                                </div>
                                <p class="text-xs text-gray-500 mt-1">Scan untuk konfirmasi kehadiran</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end gap-3 mt-4">
                        <button type="button" @click="showPreview = false" class="btn-secondary">Tutup</button>
                        <button type="button" @click="generatePdf" class="btn-primary">
                            <i class="fas fa-file-pdf mr-2"></i>Generate PDF
                        </button>
                    </div>
                </div>
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
    invitations: Object,
    masjid: Object,
    templates: Array,
});

const showModal = ref(false);
const showPreview = ref(false);
const search = ref('');
const filterTemplate = ref('');
const filterStatus = ref('');
const isEditing = ref(false);
const editingId = ref(null);
const previewData = ref({});

const form = ref({
    no_undangan: '',
    template_id: '',
    judul_acara: '',
    deskripsi: '',
    tanggal_acara: '',
    lokasi: '',
    pembicara: '',
    dress_code: '',
    kontak: '',
    receiver_names: '',
});

const filteredInvitations = computed(() => {
    let data = props.invitations.data || [];
    
    if (search.value) {
        data = data.filter(inv => inv.judul_acara.toLowerCase().includes(search.value.toLowerCase()));
    }
    
    if (filterTemplate.value) {
        data = data.filter(inv => inv.template === filterTemplate.value);
    }
    
    if (filterStatus.value) {
        data = data.filter(inv => inv.status === filterStatus.value);
    }
    
    return data;
});

const countByStatus = (status) => {
    return (props.invitations.data || []).filter(inv => inv.status === status).length;
};

const getStatusClass = (status) => {
    const classes = {
        draft: 'bg-yellow-100 text-yellow-800',
        terkirim: 'bg-green-100 text-green-800',
        selesai: 'bg-gray-100 text-gray-800',
    };
    return classes[status] || 'bg-gray-100 text-gray-800';
};

const formatDate = (date) => {
    if (!date) return '-';
    return new Date(date).toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

const resetForm = () => {
    form.value = {
        no_undangan: 'UND-' + new Date().toISOString().slice(0,10).replace(/-/g,'') + '-',
        template_id: '',
        judul_acara: '',
        deskripsi: '',
        tanggal_acara: '',
        lokasi: '',
        pembicara: '',
        dress_code: '',
        kontak: '',
        receiver_names: '',
    };
    isEditing.value = false;
    editingId.value = null;
};

const submitForm = () => {
    // Parse receiver_names menjadi array of objects
    let receiversArray = [];
    if (form.value.receiver_names) {
        const names = form.value.receiver_names.split('\n').filter(n => n.trim());
        receiversArray = names.map(name => ({
            nama: name.trim(),
            jamaah_id: null,
            no_hp: null,
            email: null,
        }));
    }
    
    const formData = {
        ...form.value,
        receiver_names: JSON.stringify(receiversArray),
    };

    if (isEditing.value) {
        router.put(route('invitations.update', editingId.value), formData, {
            onSuccess: () => {
                showModal.value = false;
                resetForm();
            },
        });
    } else {
        router.post(route('invitations.store'), formData, {
            onSuccess: () => {
                showModal.value = false;
                resetForm();
            },
        });
    }
};

const previewInvitation = (inv) => {
    previewData.value = inv;
    showPreview.value = true;
};

const editInvitation = (inv) => {
    form.value = {
        no_undangan: inv.no_undangan,
        template_id: inv.template_id || '',
        judul_acara: inv.judul_acara,
        deskripsi: inv.deskripsi || '',
        tanggal_acara: inv.tanggal_acara ? inv.tanggal_acara.slice(0, 16) : '',
        lokasi: inv.lokasi,
        pembicara: inv.pembicara || '',
        dress_code: inv.dress_code || '',
        kontak: inv.kontak || '',
        receiver_names: '',
    };
    isEditing.value = true;
    editingId.value = inv.id;
    showModal.value = true;
};

const deleteInvitation = (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus undangan ini?')) {
        router.delete(route('invitations.destroy', id));
    }
};

const downloadPdf = (inv) => {
    router.get(route('invitations.pdf', inv.id), {}, {
        responseType: 'blob',
        onSuccess: (response) => {
            const url = window.URL.createObjectURL(new Blob([response]));
            const link = document.createElement('a');
            link.href = url;
            link.download = `${inv.no_undangan}.pdf`;
            link.click();
        },
    });
};

const sendWhatsapp = (inv) => {
    // Implement WhatsApp sending logic
    alert('Fitur kirim WhatsApp akan diimplementasikan dengan WhatsApp API');
};

const generatePdf = () => {
    alert('Generate PDF bulk akan membuat ZIP file berisi semua undangan');
};
</script>
