<script setup>
defineProps({
  value: { type: Number, required: true }, // 0-100
  tone: { type: String, default: 'primary' },
  showLabel: { type: Boolean, default: false }
})
</script>

<template>
  <div>
    <div v-if="showLabel" class="flex justify-between text-xs text-ink-500 mb-1.5">
      <span><slot /></span>
      <span class="font-semibold text-ink-900">{{ value }}%</span>
    </div>
    <div class="w-full h-2 rounded-full bg-ink-900/5 overflow-hidden">
      <div
        class="h-full rounded-full transition-all duration-500"
        :class="{
          'bg-brand-gradient': tone === 'primary',
          'bg-success': tone === 'success',
          'bg-warning': tone === 'warning',
          'bg-danger': tone === 'danger'
        }"
        :style="{ width: `${Math.min(value, 100)}%` }"
      />
    </div>
  </div>
</template>
