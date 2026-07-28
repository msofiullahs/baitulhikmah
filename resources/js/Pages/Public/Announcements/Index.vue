<script setup>
import { ref } from 'vue';
import { router, Link, Head } from '@inertiajs/vue3';
import { MagnifyingGlassIcon, CalendarIcon, MapPinIcon, ClockIcon } from '@heroicons/vue/24/outline';
import PublicLayout from '@/Layouts/PublicLayout.vue';
import Pagination from '@/Components/Pagination.vue';

const props = defineProps({
  items: Object,           // Data paginated dari controller
  filters: Object,         // Data untuk dropdown filter (jika ada)
  hero_title: String,      // Judul di bagian atas (Hero)
  hero_description: String,// Deskripsi di bagian atas
});

const search = ref(props.filters?.search || '');
const selectedCategory = ref(props.filters?.selected_category || '');

// Fungsi filter menggunakan GET request (bukan POST/Form)
const applyFilter = () => {
  router.get(route(route().current()), { 
    search: search.value, 
    category: selectedCategory.value 
  }, { 
    preserveState: true, 
    preserveScroll: true 
  });
};

const resetFilter = () => {
  search.value = '';
  selectedCategory.value = '';
  applyFilter();
};
</script>

<template>
  <PublicLayout>
    <Head :title="hero_title + ' - Baitul Hikmah'" />

    <!-- 1. Hero Section -->
    <section class="bg-gradient-to-br from-primary to-primary-light text-white py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ hero_title }}</h1>
        <p class="text-lg opacity-90 max-w-2xl mx-auto">{{ hero_description }}</p>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
      
      <!-- 2. Filter Bar -->
      <div class="bg-white rounded-xl shadow-lg p-6 mb-10">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1 relative">
            <MagnifyingGlassIcon class="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
            <input 
              v-model="search" 
              @keyup.enter="applyFilter" 
              type="text" 
              placeholder="Cari judul atau deskripsi..." 
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            >
          </div>
          
          <!-- Dropdown Filter (Opsional, hapus jika tidak perlu) -->
          <div v-if="filters?.categories" class="w-full md:w-64">
            <select 
              v-model="selectedCategory" 
              @change="applyFilter" 
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
            >
              <option value="">Semua Kategori</option>
              <option v-for="cat in filters.categories" :key="cat.id" :value="cat.id">{{ cat.nama }}</option>
            </select>
          </div>

          <button @click="resetFilter" class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium">
            Reset
          </button>
        </div>
      </div>

      <!-- 3. Content Grid (Card Layout) -->
      <div v-if="items.data.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div v-for="item in items.data" :key="item.id" class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col">
          
          <!-- Gambar/Poster (Opsional) -->
          <div v-if="item.poster || item.gambar" class="h-48 bg-gray-200 overflow-hidden">
            <img :src="item.poster || item.gambar" :alt="item.nama || item.judul" class="w-full h-full object-cover">
          </div>
          <div v-else class="h-48 bg-gradient-to-br from-primary/10 to-primary-light/10 flex items-center justify-center text-primary text-4xl">
            
          </div>

          <!-- Konten Card -->
          <div class="p-6 flex-1 flex flex-col">
            <!-- Badge Kategori -->
            <span v-if="item.kategori" class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3 w-fit uppercase tracking-wide">
              {{ item.kategori }}
            </span>

            <h3 class="font-bold text-xl text-gray-800 mb-2 line-clamp-2">{{ item.judul || item.nama }}</h3>
            
            <p class="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{{ item.deskripsi || item.isi }}</p>

            <!-- Meta Info (Tanggal, Lokasi, dll) -->
            <div class="space-y-2 text-sm text-gray-500 border-t pt-4 mt-auto">
              <p v-if="item.tanggal" class="flex items-center gap-2">
                <CalendarIcon class="w-4 h-4 text-primary" /> {{ item.tanggal }}
              </p>
              <p v-if="item.waktu" class="flex items-center gap-2">
                <ClockIcon class="w-4 h-4 text-primary" /> {{ item.waktu }}
              </p>
              <p v-if="item.lokasi" class="flex items-center gap-2">
                <MapPinIcon class="w-4 h-4 text-primary" /> {{ item.lokasi }}
              </p>
            </div>
          </div>

          <!-- Tombol Detail (Opsional) -->
          <div class="px-6 pb-6">
            <Link 
              v-if="route().has('public.announcements.show')" 
              :href="route('public.announcements.show', item.id)" 
              class="block w-full text-center py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition font-semibold text-sm"
            >
              Baca Selengkapnya
            </Link>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20 bg-white rounded-xl shadow-sm">
        <div class="text-6xl mb-4"></div>
        <h3 class="text-xl font-bold text-gray-700">Tidak ada data ditemukan</h3>
        <p class="text-gray-500 mt-2">Coba ubah kata kunci pencarian atau filter Anda.</p>
      </div>

      <!-- 4. Pagination -->
      <div v-if="items.data.length > 0" class="mb-16">
        <Pagination :links="items.links" />
      </div>

    </div>
  </PublicLayout>
</template>