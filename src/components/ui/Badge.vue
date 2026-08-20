<script setup>
defineProps({
  tone: {
    type: String,
    default: 'neutral' // neutral | primary | success | warning | danger
  }
})
</script>

<template>
  <span
    class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
    :class="{
      'bg-ink-900/5 text-ink-500': tone === 'neutral',
      'bg-primary-100 text-primary-700': tone === 'primary',
      'bg-success/10 text-success': tone === 'success',
      'bg-warning/10 text-warning': tone === 'warning',
      'bg-danger/10 text-danger': tone === 'danger'
    }"
  >
    <slot />
  </span>
</template>
