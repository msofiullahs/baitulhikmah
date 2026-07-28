<script setup>
defineProps({
  title: String,
  value: [String, Number],
  icon: Object,
  color: { type: String, default: 'primary' },
  trend: { type: String, default: null },
});

const colorClasses = {
  primary: 'bg-primary text-white',
  green: 'bg-green-500 text-white',
  red: 'bg-red-500 text-white',
  amber: 'bg-amber-500 text-white',
  blue: 'bg-blue-500 text-white',
};
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm p-6 border-l-4" :class="`border-${color}-500`">
    <div class="flex items-start justify-between">
      <div>
        <p class="text-sm text-gray-500 font-medium">{{ title }}</p>
        <p class="text-2xl font-bold text-gray-800 mt-1">{{ value }}</p>
        <p v-if="trend" class="text-xs text-gray-500 mt-1">{{ trend }}</p>
      </div>
      <div v-if="icon" :class="[colorClasses[color], 'w-12 h-12 rounded-lg flex items-center justify-center']">
        <component :is="icon" class="w-6 h-6" />
      </div>
    </div>
  </div>
</template>