<script setup>
import { Hammer } from 'lucide-vue-next'

defineProps({
  title: { type: String, default: 'Em construção' },
  description: { type: String, default: 'Esta área do SGA+ está sendo desenvolvida e chega em breve.' }
})
</script>

<template>
  <div class="flex flex-col items-center justify-center text-center py-20 px-4">
    <div class="w-16 h-16 rounded-card bg-primary-100 text-primary-600 flex items-center justify-center mb-5">
      <Hammer class="w-7 h-7" />
    </div>
    <h2 class="text-xl font-bold text-ink-900">{{ title }}</h2>
    <p class="text-ink-500 mt-2 max-w-md">{{ description }}</p>
  </div>
</template>
