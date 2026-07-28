<script setup>
import { Link } from '@inertiajs/vue3';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  links: Array,
});
</script>

<template>
  <div v-if="links.length > 3">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div class="text-sm text-gray-600">
        <span v-for="(link, index) in links" :key="index">
          <template v-if="link.url === null">
            <span v-if="link.label.includes('Previous')" class="px-3 py-1 text-gray-400">← Prev</span>
            <span v-else-if="link.label.includes('Next')" class="px-3 py-1 text-gray-400">Next →</span>
          </template>
        </span>
      </div>

      <div class="flex gap-1">
        <template v-for="(link, index) in links" :key="index">
          <span
            v-if="link.url === null"
            :class="[
              'px-3 py-1 rounded-lg text-sm',
              link.label.includes('Previous') ? 'mr-auto' : '',
              link.label.includes('Next') ? 'ml-auto' : '',
              'text-gray-400 cursor-not-allowed'
            ]"
            v-html="link.label"
          ></span>
          <Link
            v-else
            :href="link.url"
            :class="[
              'px-3 py-1 rounded-lg text-sm transition',
              link.active
                ? 'bg-primary text-white font-semibold'
                : 'bg-white text-gray-700 hover:bg-gray-100 border'
            ]"
            preserve-state
            preserve-scroll
            v-html="link.label"
          />
        </template>
      </div>
    </div>
  </div>
</template>