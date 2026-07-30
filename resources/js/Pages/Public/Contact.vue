<script setup>
import { ref } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import PublicLayout from '@/Layouts/PublicLayout.vue';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  contact_info: Object,
  social_media: Object,
  pengurus: Array,
});

const form = useForm({
  nama: '',
  email: '',
  subjek: '',
  pesan: '',
});

const submitContact = () => {
  form.post(route('public.contact.store'), {
    onSuccess: () => {
      form.reset();
    },
  });
};
</script>

<template>
  <PublicLayout>
    <Head title="Kontak Kami - Baitul Hikmah" />

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary to-primary-light text-white py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
        <p class="text-lg opacity-90 max-w-2xl mx-auto">Kami siap melayani pertanyaan dan kebutuhan Anda</p>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 -mt-10 relative z-10 pb-16">
      
      <div class="grid md:grid-cols-2 gap-8">
        
        <!-- Contact Information -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h2>
          
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPinIcon class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-800 mb-1">Alamat</h3>
                <p class="text-gray-600">{{ contact_info?.alamat || '-' }}</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <PhoneIcon class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-800 mb-1">Telepon / WhatsApp</h3>
                <p class="text-gray-600">{{ contact_info?.no_hp || '-' }}</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <EnvelopeIcon class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-800 mb-1">Email</h3>
                <p class="text-gray-600">{{ contact_info?.email || '-' }}</p>
              </div>
            </div>
          </div>

          <!-- Pengurus -->
          <div class="mt-8 pt-8 border-t">
            <h3 class="font-semibold text-gray-800 mb-4">Pengurus Ta'mir</h3>
            <div class="space-y-3">
              <div v-for="(p, index) in pengurus" :key="index" class="flex justify-between items-center pb-2 border-b last:border-0">
                <div>
                  <p class="font-medium text-gray-800">{{ p.jabatan }}</p>
                  <p class="text-sm text-gray-600">{{ p.nama }}</p>
                </div>
                <a v-if="p.no_hp" :href="'https://wa.me/' + p.no_hp" target="_blank" class="text-primary hover:text-primary-light text-sm font-medium">Hubungi</a>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="mt-8 pt-8 border-t">
            <h3 class="font-semibold text-gray-800 mb-4">Ikuti Kami di Media Sosial</h3>
            <div class="flex gap-3">
              <a v-if="social_media?.facebook" :href="social_media.facebook" target="_blank" class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition">FB</a>
              <a v-if="social_media?.instagram" :href="social_media.instagram" target="_blank" class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition">IG</a>
              <a v-if="social_media?.youtube" :href="social_media.youtube" target="_blank" class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition">YT</a>
              <a v-if="social_media?.tiktok" :href="social_media.tiktok" target="_blank" class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition">TT</a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h2>
          
          <form @submit.prevent="submitContact" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap *</label>
              <input 
                v-model="form.nama" 
                type="text" 
                required 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                placeholder="Masukkan nama Anda"
              />
              <span v-if="form.errors.nama" class="text-red-500 text-xs">{{ form.errors.nama }}</span>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input 
                v-model="form.email" 
                type="email" 
                required 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                placeholder="nama@email.com"
              />
              <span v-if="form.errors.email" class="text-red-500 text-xs">{{ form.errors.email }}</span>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Subjek *</label>
              <input 
                v-model="form.subjek" 
                type="text" 
                required 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                placeholder="Subjek pesan Anda"
              />
              <span v-if="form.errors.subjek" class="text-red-500 text-xs">{{ form.errors.subjek }}</span>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Pesan *</label>
              <textarea 
                v-model="form.pesan" 
                rows="5" 
                required 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none"
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
              <span v-if="form.errors.pesan" class="text-red-500 text-xs">{{ form.errors.pesan }}</span>
            </div>

            <button 
              type="submit" 
              :disabled="form.processing" 
              class="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50"
            >
              {{ form.processing ? 'Mengirim...' : 'Kirim Pesan' }}
            </button>
          </form>
        </div>

      </div>

      <!-- Map Section (Optional) -->
      <div class="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="p-6 border-b">
          <h2 class="text-2xl font-bold text-gray-800">Lokasi Kami</h2>
        </div>
        <div class="h-96 bg-gray-200 flex items-center justify-center">
          <div class="text-center text-gray-500">
            <MapPinIcon class="w-16 h-16 mx-auto mb-4 text-primary" />
            <p class="text-lg font-medium">Google Maps akan ditampilkan di sini</p>
            <p class="text-sm">Jl. Mawar No. 10, Bandung</p>
          </div>
        </div>
      </div>

    </div>
  </PublicLayout>
</template>