<script setup>
import { ref, computed } from 'vue';
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    modelValue: String,
    placeholder: String,
    required: Boolean,
    autocomplete: String,
});

defineEmits(['update:modelValue']);

const showPassword = ref(false);

const inputType = computed(() => {
    return showPassword.value ? 'text' : 'password';
});

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};
</script>

<template>
    <div class="relative">
        <input
            :type="inputType"
            class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full pr-10"
            :value="modelValue"
            :placeholder="placeholder"
            :required="required"
            :autocomplete="autocomplete"
            @input="$emit('update:modelValue', $event.target.value)"
        >
        <button
            type="button"
            @click="togglePasswordVisibility"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            tabindex="-1"
        >
            <EyeSlashIcon v-if="showPassword" class="h-5 w-5" />
            <EyeIcon v-else class="h-5 w-5" />
        </button>
    </div>
</template>
