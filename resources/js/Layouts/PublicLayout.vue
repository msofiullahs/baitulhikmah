<script setup>
import { computed, ref } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { Bars3Icon, XMarkIcon, PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/vue/24/outline';

const page = usePage();
const profile = computed(() => page.props.mosqueProfile);
const mobileMenuOpen = ref(false);

const navItems = [
  { name: 'Keuangan', href: 'public.finance' },
  { name: 'Jadwal', href: 'public.schedule.pengajian' },
  { name: 'Pengumuman', href: 'public.announcements' },
  { name: 'Kontak', href: 'public.contact' },
];
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Top Bar - Warna Hijau Tua -->
    <div class="bg-[#0d5c3e] text-white text-xs py-2 hidden md:block">
      <div class="max-w-7xl mx-auto px-4 flex justify-between">
        <div class="flex items-center gap-4">
          <span v-if="profile.alamat" class="flex items-center gap-1"><MapPinIcon class="w-3 h-3" /> {{ profile.alamat }}</span>
          <span v-if="profile.no_telepon" class="flex items-center gap-1"><PhoneIcon class="w-3 h-3" /> {{ profile.no_telepon }}</span>
        </div>
        <div class="flex items-center gap-4">
          <span v-if="profile.email" class="flex items-center gap-1"><EnvelopeIcon class="w-3 h-3" /> {{ profile.email }}</span>
        </div>
      </div>
    </div>

    <!-- Navbar - Putih dengan shadow -->
    <nav class="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex h-16 items-center justify-between gap-3">
          <Link :href="route('public.home')" class="flex min-w-0 items-center">
            <img :src="profile.logo_url || '/assets/mbh-horizontal.png'" :alt="profile.nama_masjid" class="h-11 w-auto max-w-full object-contain object-left sm:h-14" />
          </Link>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center gap-1">
            <Link
              v-for="item in navItems"
              :key="item.name"
              :href="route(item.href)"
              :class="[
                'px-4 py-2 rounded-lg text-sm font-medium transition',
                route().current(item.href)
                  ? 'bg-[#0d5c3e] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              ]"
            >
              {{ item.name }}
            </Link>
            <Link :href="route('login')" class="ml-4 px-4 py-2 bg-[#c9a96e] text-[#0d5c3e] font-semibold rounded-lg hover:bg-[#b8944f] transition">
              Login Admin
            </Link>
          </div>

          <!-- Mobile Menu Button -->
          <button
            type="button"
            :aria-label="mobileMenuOpen ? 'Tutup menu' : 'Buka menu'"
            :aria-expanded="mobileMenuOpen"
            aria-controls="public-mobile-menu"
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="grid h-11 w-11 shrink-0 place-items-center rounded-md text-gray-700 md:hidden"
          >
            <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6" />
            <XMarkIcon v-else class="w-6 h-6" />
          </button>
        </div>

        <!-- Mobile Menu -->
        <div v-show="mobileMenuOpen" id="public-mobile-menu" class="md:hidden py-4 border-t">
          <Link
            v-for="item in navItems"
            :key="item.name"
            :href="route(item.href)"
            class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </Link>
          <Link :href="route('login')" class="block mt-2 px-4 py-2 bg-[#0d5c3e] text-white rounded-lg text-center font-semibold">
            Login Admin
          </Link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer - Hijau Tua -->
    <footer class="bg-[#0d5c3e] text-white mt-12">
      <div class="max-w-7xl mx-auto px-4 py-9 sm:px-6 sm:py-12">
        <div class="grid gap-y-7 md:grid-cols-2 md:gap-x-8">
          <div class="min-w-0 break-words md:max-w-sm">
            <h3 class="font-bold text-lg mb-4">{{ profile.nama_masjid }}</h3>
            <p class="text-sm text-gray-300">Masjid sebagai pusat ibadah, pendidikan, dan kegiatan sosial umat Islam.</p>
          </div>
          <div class="grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-4 sm:gap-8">
            <div>
              <h4 class="font-semibold mb-4">Menu</h4>
              <ul class="space-y-2 text-sm text-gray-300">
                <li v-for="item in navItems" :key="item.href"><Link :href="route(item.href)" class="hover:text-[#c9a96e] transition">{{ item.name }}</Link></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-4">Kontak</h4>
              <ul class="space-y-2 text-sm text-gray-300 [overflow-wrap:anywhere]">
                <li v-if="profile.alamat">{{ profile.alamat }}</li>
                <li v-if="profile.no_telepon">{{ profile.no_telepon }}</li>
                <li v-if="profile.email">{{ profile.email }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="border-t border-white/10 mt-8 pt-6 text-center text-sm text-gray-300 break-words">
          © {{ new Date().getFullYear() }} {{ profile.nama_masjid }}. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>