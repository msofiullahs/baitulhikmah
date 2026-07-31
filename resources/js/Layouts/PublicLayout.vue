<script setup>
import { ref } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { Bars3Icon, XMarkIcon, PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/vue/24/outline';

const page = usePage();
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
          <span class="flex items-center gap-1"><MapPinIcon class="w-3 h-3" /> Jl. Mawar No. 10</span>
          <span class="flex items-center gap-1"><PhoneIcon class="w-3 h-3" /> 081234567890</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1"><EnvelopeIcon class="w-3 h-3" /> admin@baitulhikmah.id</span>
        </div>
      </div>
    </div>

    <!-- Navbar - Putih dengan shadow -->
    <nav class="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <Link :href="route('public.home')" class="flex items-center gap-3"> 
            <img src="/assets/logo-1.png" class="h-14" />
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
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-gray-700">
            <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6" />
            <XMarkIcon v-else class="w-6 h-6" />
          </button>
        </div>

        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t">
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
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="flex md:justify-between">
          <div>
            <h3 class="font-bold text-lg mb-4">Baitul Hikmah</h3>
            <p class="text-sm text-gray-300">Masjid sebagai pusat ibadah, pendidikan, dan kegiatan sosial umat Islam.</p>
          </div>
          <div class="flex gap-8">
            <div>
              <h4 class="font-semibold mb-4">Menu</h4>
              <ul class="space-y-2 text-sm text-gray-300">
                <li v-for="item in navItems"><Link :href="route(item.href)" class="hover:text-[#c9a96e] transition">{{ item.name }}</Link></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-4">Kontak</h4>
              <ul class="space-y-2 text-sm text-gray-300">
                <li>Jl. Mawar No. 10</li>
                <li>081234567890</li>
                <li>admin@baitulhikmah.id</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="border-t border-white/10 mt-8 pt-6 text-center text-sm text-gray-300">
          © 2026 Masjid Baitul Hikmah. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>