<script setup>
import { useRoute } from 'vue-router'
import { ChevronRight } from 'lucide-vue-next'

const route = useRoute()
</script>

<template>
  <nav v-if="route.meta.breadcrumb" class="flex items-center gap-1.5 text-sm text-ink-500 mb-6">
    <span
      v-for="(item, i) in route.meta.breadcrumb"
      :key="item"
      class="flex items-center gap-1.5"
    >
      <span :class="i === route.meta.breadcrumb.length - 1 && 'text-ink-900 font-semibold'">
        {{ item }}
      </span>
      <ChevronRight v-if="i < route.meta.breadcrumb.length - 1" class="w-3.5 h-3.5" />
    </span>
  </nav>
</template>
