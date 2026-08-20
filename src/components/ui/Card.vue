<script setup>
defineProps({
  padded: { type: Boolean, default: true },
  hover: { type: Boolean, default: false }
})
</script>

<template>
  <div
    class="bg-card rounded-card border border-border shadow-soft transition-soft"
    :class="[padded && 'p-5 sm:p-6', hover && 'hover:shadow-elevated hover:-translate-y-0.5 cursor-pointer']"
  >
    <div v-if="$slots.header" class="flex items-center justify-between mb-4">
      <slot name="header" />
    </div>
    <slot />
  </div>
</template>
