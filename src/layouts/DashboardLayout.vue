<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import Header from '@/components/layout/Header.vue'
import Breadcrumb from '@/components/layout/Breadcrumb.vue'

const mobileMenuOpen = ref(false)
</script>

<template>
  <div class="flex min-h-screen bg-surface">
    <Sidebar :mobile-open="mobileMenuOpen" @close-mobile="mobileMenuOpen = false" />

    <div class="flex-1 flex flex-col min-w-0">
      <Header @open-mobile-menu="mobileMenuOpen = true" />

      <main class="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1440px] w-full mx-auto">
        <Breadcrumb />
        <router-view />
      </main>
    </div>
  </div>
</template>
