<script setup>
defineProps({
  width: { type: String, default: '100%' },
  height: { type: String, default: '1rem' },
  rounded: { type: String, default: '0.5rem' }
})
</script>

<template>
  <div
    class="bg-ink-900/5 animate-pulse"
    :style="{ width, height, borderRadius: rounded }"
  />
</template>
