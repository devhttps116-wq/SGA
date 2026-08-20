<script setup>
import { Megaphone, FileText } from 'lucide-vue-next'
import Badge from '@/components/ui/Badge.vue'

defineProps({
  announcement: { type: Object, required: true }
})
</script>

<template>
  <div class="flex gap-3 py-3 border-b border-border last:border-0">
    <div class="w-9 h-9 rounded-control bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
      <component :is="announcement.categoria === 'material' ? FileText : Megaphone" class="w-4 h-4" />
    </div>
    <div class="flex-1 min-w-0">
      <div class="flex items-center justify-between gap-2">
        <p class="text-sm font-semibold text-ink-900 truncate">{{ announcement.titulo }}</p>
        <span class="text-xs text-ink-500 shrink-0">{{ announcement.horario }}</span>
      </div>
      <p class="text-xs text-ink-500 mt-0.5">{{ announcement.autor }}</p>
      <p class="text-sm text-ink-500 mt-1">{{ announcement.resumo }}</p>
    </div>
  </div>
</template>
