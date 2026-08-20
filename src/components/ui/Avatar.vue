<script setup>
defineProps({
  src: { type: String, default: null },
  initials: { type: String, default: '?' },
  size: { type: String, default: 'md' } // sm | md | lg
})
</script>

<template>
  <div
    class="rounded-full flex items-center justify-center overflow-hidden bg-brand-gradient text-white font-semibold shrink-0"
    :class="{
      'w-8 h-8 text-xs': size === 'sm',
      'w-11 h-11 text-sm': size === 'md',
      'w-16 h-16 text-lg': size === 'lg'
    }"
  >
    <img v-if="src" :src="src" class="w-full h-full object-cover" alt="Avatar" />
    <span v-else>{{ initials }}</span>
  </div>
</template>
