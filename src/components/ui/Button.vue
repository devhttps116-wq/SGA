<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary', // primary | secondary | ghost | danger
    validator: (v) => ['primary', 'secondary', 'ghost', 'danger'].includes(v)
  },
  size: {
    type: String,
    default: 'md' // sm | md | lg
  },
  icon: { type: Object, default: null }, // componente de ícone (lucide-vue-next)
  iconPosition: { type: String, default: 'left' },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
})
</script>

<template>
  <button
    :disabled="disabled || loading"
    class="inline-flex items-center justify-center gap-2 font-semibold rounded-control transition-soft select-none disabled:opacity-50 disabled:cursor-not-allowed"
    :class="[
      size === 'sm' && 'px-3 py-1.5 text-sm',
      size === 'md' && 'px-4 py-2.5 text-sm',
      size === 'lg' && 'px-5 py-3 text-base',
      variant === 'primary' && 'bg-brand-gradient text-white shadow-soft hover:shadow-elevated hover:-translate-y-0.5',
      variant === 'secondary' && 'bg-white text-primary-600 border border-border hover:border-primary-400 hover:bg-primary-50',
      variant === 'ghost' && 'bg-transparent text-ink-500 hover:bg-ink-900/5 hover:text-ink-900',
      variant === 'danger' && 'bg-danger text-white shadow-soft hover:brightness-105'
    ]"
  >
    <component v-if="icon && iconPosition === 'left' && !loading" :is="icon" class="w-4 h-4" />
    <svg v-if="loading" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
    <slot />
    <component v-if="icon && iconPosition === 'right' && !loading" :is="icon" class="w-4 h-4" />
  </button>
</template>
