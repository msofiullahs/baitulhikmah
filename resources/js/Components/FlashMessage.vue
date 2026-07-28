<script setup>
import { ref, watch } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { XMarkIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/vue/24/outline';

const page = usePage();
const show = ref(false);
const message = ref('');
const type = ref('success');

watch(() => page.props.flash, (flash) => {
  if (flash?.success) {
    message.value = flash.success;
    type.value = 'success';
    show.value = true;
    setTimeout(() => show.value = false, 4000);
  } else if (flash?.error) {
    message.value = flash.error;
    type.value = 'error';
    show.value = true;
  }
}, { immediate: true });

const close = () => show.value = false;
</script>

<template>
  <Transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="show" class="fixed top-4 right-4 z-50 max-w-sm w-full">
      <div :class="[
        'rounded-lg shadow-lg p-4 flex items-start gap-3',
        type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
      ]">
        <CheckCircleIcon v-if="type === 'success'" class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
        <ExclamationCircleIcon v-else class="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
        <div class="flex-1">
          <p :class="type === 'success' ? 'text-green-800' : 'text-red-800'" class="text-sm font-medium">{{ message }}</p>
        </div>
        <button @click="close" class="flex-shrink-0 text-gray-400 hover:text-gray-600">
          <XMarkIcon class="w-4 h-4" />
        </button>
      </div>
    </div>
  </Transition>
</template>