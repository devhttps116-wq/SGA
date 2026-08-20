<script setup>
import { ArrowUp, ArrowDown } from 'lucide-vue-next'
import Card from '@/components/ui/Card.vue'

const props = defineProps({
  label: { type: String, required: true },
  value: { type: [String, Number], required: true },
  suffix: { type: String, default: '' },
  icon: { type: Object, required: true },
  tone: { type: String, default: 'primary' }, // primary | success | warning | danger
  variacao: { type: Number, default: null },
  periodo: { type: String, default: '' }
})
</script>

<template>
  <Card :padded="true" class="!p-5">
    <div class="flex items-start justify-between">
      <div>
        <p class="text-sm text-ink-500 font-medium mb-2">{{ label }}</p>
        <p class="text-3xl font-extrabold text-ink-900 leading-none">
          {{ value }}<span class="text-lg font-bold">{{ suffix }}</span>
        </p>
      </div>
      <div
        class="w-11 h-11 rounded-control flex items-center justify-center shrink-0"
        :class="{
          'bg-primary-100 text-primary-600': tone === 'primary',
          'bg-success/10 text-success': tone === 'success',
          'bg-warning/10 text-warning': tone === 'warning',
          'bg-danger/10 text-danger': tone === 'danger'
        }"
      >
        <component :is="icon" class="w-5 h-5" />
      </div>
    </div>

    <div v-if="variacao !== null" class="flex items-center gap-1 mt-3 text-xs font-semibold">
      <component
        :is="variacao >= 0 ? ArrowUp : ArrowDown"
        class="w-3.5 h-3.5"
        :class="variacao >= 0 ? 'text-success' : 'text-danger'"
      />
      <span :class="variacao >= 0 ? 'text-success' : 'text-danger'">
        {{ Math.abs(variacao) }}{{ suffix || '' }}
      </span>
      <span class="text-ink-500 font-normal">{{ periodo }}</span>
    </div>
  </Card>
</template>
