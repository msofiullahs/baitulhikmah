<script setup>
import { ref, computed } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import {
  HomeIcon, CurrencyDollarIcon, CubeTransparentIcon,
  EnvelopeIcon, CalendarIcon, UsersIcon, BookOpenIcon,
  MegaphoneIcon, Bars3Icon, XMarkIcon,
  UserCircleIcon, BellIcon, ChevronDownIcon,
  DocumentChartBarIcon, UserGroupIcon, CogIcon, ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/vue/24/outline';
import FlashMessage from '@/Components/FlashMessage.vue';

const page = usePage();
const sidebarOpen = ref(false);

const userRole = computed(() => page.props.auth.user.roles?.[0]?.name || 'User');
const isSuperAdmin = computed(() => userRole.value === 'Super Admin');

// Semua menu yang tersedia
const allMenus = [
  { name: 'Dashboard', href: 'dashboard', icon: HomeIcon, roles: ['all'] },
  { name: 'Arus Kas', href: 'transactions.index', icon: CurrencyDollarIcon, roles: ['Ketua', 'Wakil Ketua', 'Bendahara', 'Sie Sarana Prasarana'] },
  { name: 'Kas Box', href: 'cashboxes.index', icon: CubeTransparentIcon, roles: ['Ketua', 'Wakil Ketua', 'Bendahara', 'Sie Sarana Prasarana'] },
  { name: 'Inventaris', href: 'assets.index', icon: CubeTransparentIcon, roles: ['Ketua', 'Wakil Ketua', 'Bendahara', 'Sie Sarana Prasarana', 'Sie Kebersihan'] },
  { name: 'Undangan', href: 'invitations.index', icon: EnvelopeIcon, roles: ['Ketua', 'Wakil Ketua', 'Sekretaris', 'Sie Peribadatan & Dakwah', 'Sie Humas & Kemasyarakatan', 'Sie Kemudaan dan Remaja Masjid', 'Sie Pemberdayaan Perempuan'] },
  { name: 'Template Undangan', href: 'invitation-templates.index', icon: DocumentChartBarIcon, roles: ['Ketua', 'Wakil Ketua', 'Sekretaris', 'Sie Peribadatan & Dakwah', 'Sie Humas & Kemasyarakatan', 'Sie Kemudaan dan Remaja Masjid', 'Sie Pemberdayaan Perempuan'] },
  { name: 'Kegiatan', href: 'activities.index', icon: CalendarIcon, roles: ['all'] },
  { name: 'Jamaah', href: 'jamaah.index', icon: UsersIcon, roles: ['Ketua', 'Wakil Ketua', 'Sekretaris', 'Sie Humas & Kemasyarakatan', 'Sie Kemudaan dan Remaja Masjid', 'Sie Pemberdayaan Perempuan'] },
  { name: 'TPQ', href: 'tpq.students.index', icon: BookOpenIcon, roles: ['Ketua', 'Wakil Ketua', 'Sie Pendidikan'] },
  { name: 'ZISWAF', href: 'ziswaf.donations.index', icon: CurrencyDollarIcon, roles: ['Ketua', 'Wakil Ketua', 'Bendahara'] },
  { name: 'Jadwal Jumat', href: 'jumah.index', icon: CalendarIcon, roles: ['Ketua', 'Wakil Ketua', 'Sekretaris', 'Sie Peribadatan & Dakwah'] },
  { name: 'Pengumuman', href: 'announcements.index', icon: MegaphoneIcon, roles: ['all'] },
  // { name: 'Laporan', href: 'reports.index', icon: DocumentChartBarIcon, roles: ['Ketua', 'Wakil Ketua', 'Sekretaris', 'Bendahara'] },
  { name: 'Pengguna', href: 'users.index', icon: UserGroupIcon, roles: ['Ketua', 'Super Admin'] },
  { name: 'Pengaturan', href: 'settings.index', icon: CogIcon, roles: ['Super Admin'] },
  { name: 'Roles & Permissions', href: 'roles.index', icon: ShieldCheckIcon, roles: ['Super Admin'] },
];

// Filter menu berdasarkan role
const navigation = computed(() => {
  if (isSuperAdmin.value) {
    // Super Admin melihat SEMUA menu
    return allMenus;
  }

  return allMenus.filter(menu => {
    return menu.roles.includes('all') || menu.roles.includes(userRole.value);
  });
});

const userMenuOpen = ref(false);
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex">
    <!-- Mobile Sidebar Overlay -->
    <div v-if="sidebarOpen" class="fixed inset-0 z-40 lg:hidden" @click="sidebarOpen = false">
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
    </div>

    <!-- Sidebar -->
    <aside 
      :class="[
        'fixed inset-y-0 left-0 z-50 w-64 flex flex-col transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
        isSuperAdmin ? 'bg-gray-900' : 'bg-[#0d5c3e]',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
      class="text-white"
    >
      <!-- Header Sidebar -->
      <div 
        :class="[
          'flex items-center justify-between h-16 px-6 border-b border-white/10 flex-shrink-0',
          isSuperAdmin ? 'bg-gray-950' : 'bg-[#0a4a32]'
        ]"
      >
        <Link :href="route('dashboard')" class="flex items-center gap-3">
          <div 
            :class="[
              'w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm',
              isSuperAdmin ? 'bg-red-500 text-white' : 'bg-[#c9a96e] text-[#0d5c3e]'
            ]"
          >
            {{ isSuperAdmin ? 'SA' : 'BH' }}
          </div>
          <div>
            <span class="font-bold text-lg tracking-wide block leading-tight">Baitul Hikmah</span>
            <span 
              :class="[
                'text-xs',
                isSuperAdmin ? 'text-red-400' : 'text-gray-300'
              ]"
            >
              {{ userRole }}
            </span>
          </div>
        </Link>
        <button @click="sidebarOpen = false" class="lg:hidden text-white">
          <XMarkIcon class="w-6 h-6" />
        </button>
      </div>

      <!-- Navigation Menu -->
      <nav class="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        <Link
          v-for="item in navigation"
          :key="item.name"
          :href="route(item.href)"
          :class="[
            'flex items-center gap-3 px-4 py-3 rounded-lg transition text-sm font-medium',
            route().current(item.href) || route().current(item.href + '.*')
              ? (isSuperAdmin ? 'bg-red-500 text-white' : 'bg-[#c9a96e] text-[#0d5c3e]')
              : 'text-gray-300 hover:bg-white/10 hover:text-white'
          ]"
        >
          <component :is="item.icon" class="w-5 h-5" />
          {{ item.name }}
        </Link>
      </nav>

      <!-- Footer Sidebar (Lihat Website Publik) -->
      <div class="p-4 border-t border-white/10 flex-shrink-0">
        <Link 
          :href="route('public.home')" 
          target="_blank" 
          class="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition"
        >
          <GlobeAltIcon class="w-4 h-4" />
          Lihat Website Publik
        </Link>
      </div>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col min-h-screen">
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
              <button 
                @click="userMenuOpen = !userMenuOpen" 
                class="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <UserCircleIcon class="w-8 h-8 text-gray-400" />
                <div class="text-left hidden md:block">
                  <div class="font-semibold">{{ page.props.auth.user.name }}</div>
                  <div :class="['text-xs', isSuperAdmin ? 'text-red-500' : 'text-gray-500']">
                    {{ userRole }}
                  </div>
                </div>
                <ChevronDownIcon class="w-4 h-4" />
              </button>

              <div v-if="userMenuOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border">
                <Link 
                  :href="route('profile.edit')" 
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profil
                </Link>
                <Link 
                  v-if="isSuperAdmin" 
                  :href="route('settings.index')" 
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Pengaturan
                </Link>
                <Link 
                  :href="route('logout')" 
                  method="post" 
                  as="button" 
                  class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </Link>
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