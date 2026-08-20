<script setup>
import { Search, Bell, Menu } from 'lucide-vue-next'
import Avatar from '@/components/ui/Avatar.vue'
import { useAuthStore } from '@/stores/auth'

defineEmits(['open-mobile-menu'])
const auth = useAuthStore()
</script>

<template>
  <header class="h-16 sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-border flex items-center gap-4 px-4 sm:px-6">
    <button class="lg:hidden text-ink-500" @click="$emit('open-mobile-menu')">
      <Menu class="w-6 h-6" />
    </button>

    <div class="hidden sm:flex items-center gap-2 flex-1 max-w-md bg-ink-900/[0.03] rounded-control px-3 py-2">
      <Search class="w-4 h-4 text-ink-500" />
      <input
        type="text"
        placeholder="Buscar disciplinas, atividades, comunicados..."
        class="bg-transparent outline-none text-sm w-full placeholder:text-ink-500"
      />
    </div>

    <div class="flex-1 sm:flex-none" />

    <button class="relative text-ink-500 hover:text-ink-900 transition-soft">
      <Bell class="w-5 h-5" />
      <span class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-danger text-white text-[10px] flex items-center justify-center font-bold">
        3
      </span>
    </button>

    <router-link to="/aluno/perfil" class="flex items-center gap-2">
      <Avatar :src="auth.user.avatarUrl" :initials="auth.initials" size="sm" />
      <div class="hidden md:block text-left leading-tight">
        <p class="text-sm font-semibold text-ink-900">{{ auth.user.firstName }}</p>
        <p class="text-xs text-ink-500">{{ auth.user.turma }}</p>
      </div>
    </router-link>
  </header>
</template>
