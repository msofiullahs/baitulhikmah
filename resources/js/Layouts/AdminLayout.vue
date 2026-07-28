<script setup>
import { ref, computed } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import {
  HomeIcon, CurrencyDollarIcon, CubeTransparentIcon,
  EnvelopeIcon, CalendarIcon, UsersIcon, BookOpenIcon,
  SpeakerphoneIcon, MegaphoneIcon, Bars3Icon, XMarkIcon,
  UserCircleIcon, BellIcon, ChevronDownIcon
} from '@heroicons/vue/24/outline';
import FlashMessage from '@/Components/FlashMessage.vue';

const page = usePage();
const sidebarOpen = ref(false);

const navigation = [
  { name: 'Dashboard', href: 'dashboard', icon: HomeIcon },
  { name: 'Arus Kas', href: 'transactions.index', icon: CurrencyDollarIcon },
  { name: 'Inventaris', href: 'assets.index', icon: CubeTransparentIcon },
  { name: 'Undangan', href: 'invitations.index', icon: EnvelopeIcon },
  { name: 'Kegiatan', href: 'activities.index', icon: CalendarIcon },
  { name: 'Jamaah', href: 'jamaah.index', icon: UsersIcon },
  { name: 'TPQ', href: 'tpq.students.index', icon: BookOpenIcon },
  { name: 'ZISWAF', href: 'ziswaf.donations.index', icon: CurrencyDollarIcon },
  { name: 'Jadwal Jumat', href: 'jumah.index', icon: CalendarIcon },
  { name: 'Pengumuman', href: 'announcements.index', icon: MegaphoneIcon },
];

const userMenuOpen = ref(false);
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Mobile Sidebar Overlay -->
    <div v-if="sidebarOpen" class="fixed inset-0 z-40 lg:hidden" @click="sidebarOpen = false">
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
    </div>

    <!-- Sidebar -->
    <aside :class="[
      'fixed inset-y-0 left-0 z-50 w-64 bg-primary text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
      sidebarOpen ? 'translate-x-0' : '-translate-x-full'
    ]">
      <div class="flex items-center justify-between h-16 px-6 bg-primary-dark border-b border-white/10">
        <Link :href="route('dashboard')" class="flex items-center gap-3">
          <div class="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-sm">BH</div>
          <span class="font-bold text-lg tracking-wide">BAITUL HIKMAH</span>
        </Link>
        <button @click="sidebarOpen = false" class="lg:hidden text-white">
          <XMarkIcon class="w-6 h-6" />
        </button>
      </div>

      <nav class="px-4 py-6 space-y-1">
        <Link
          v-for="item in navigation"
          :key="item.name"
          :href="route(item.href)"
          :class="[
            'flex items-center gap-3 px-4 py-3 rounded-lg transition text-sm font-medium',
            route().current(item.href) || route().current(item.href + '.*')
              ? 'bg-accent text-primary'
              : 'text-gray-300 hover:bg-primary-light hover:text-white'
          ]"
        >
          <component :is="item.icon" class="w-5 h-5" />
          {{ item.name }}
        </Link>
      </nav>

      <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
        <Link :href="route('public.home')" target="_blank" class="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:text-white">
          <HomeIcon class="w-4 h-4" />
          Lihat Website Publik
        </Link>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="lg:pl-64 flex flex-col min-h-screen">
      <!-- Top Navbar -->
      <header class="bg-white shadow-sm sticky top-0 z-30">
        <div class="flex items-center justify-between h-16 px-4 lg:px-8">
          <button @click="sidebarOpen = true" class="lg:hidden text-gray-500">
            <Bars3Icon class="w-6 h-6" />
          </button>

          <div class="flex-1"></div>

          <div class="flex items-center gap-4">
            <button class="p-2 text-gray-400 hover:text-gray-600 relative">
              <BellIcon class="w-6 h-6" />
              <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div class="relative">
              <button @click="userMenuOpen = !userMenuOpen" class="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                <UserCircleIcon class="w-8 h-8 text-gray-400" />
                <span class="hidden md:block">{{ page.props.auth.user.name }}</span>
                <ChevronDownIcon class="w-4 h-4" />
              </button>

              <div v-if="userMenuOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border">
                <Link :href="route('profile.edit')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil</Link>
                <Link :href="route('logout')" method="post" as="button" class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 p-4 lg:p-8">
        <FlashMessage />
        <slot />
      </main>
    </div>
  </div>
</template>