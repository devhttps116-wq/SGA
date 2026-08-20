<script setup>
import { ref } from 'vue'
import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  CheckSquare,
  Bell,
  MessageSquare,
  Trophy,
  Sparkles,
  Settings,
  ChevronsLeft,
  X
} from 'lucide-vue-next'

defineProps({
  mobileOpen: { type: Boolean, default: false }
})
const emit = defineEmits(['close-mobile'])

const collapsed = ref(false)

const navItems = [
  { label: 'Meu Painel', icon: LayoutDashboard, to: '/aluno/dashboard' },
  { label: 'Minhas Matérias', icon: BookOpen, to: '/aluno/materias' },
  { label: 'Calendário', icon: CalendarDays, to: '/aluno/calendario' },
  { label: 'Tarefas', icon: CheckSquare, to: '/aluno/tarefas' },
  { label: 'Notificações', icon: Bell, to: '/aluno/notificacoes' },
  { label: 'Comunicação', icon: MessageSquare, to: '/aluno/comunicacao' },
  { label: 'Conquistas', icon: Trophy, to: '/aluno/conquistas' },
  { label: 'Inteligência Acadêmica', icon: Sparkles, to: '/aluno/inteligencia' }
]
</script>

<template>
  <!-- Overlay mobile -->
  <div
    v-if="mobileOpen"
    class="fixed inset-0 bg-ink-900/40 z-40 lg:hidden"
    @click="emit('close-mobile')"
  />

  <aside
    class="fixed lg:sticky top-0 h-screen bg-white border-r border-border flex flex-col z-50 transition-all duration-200"
    :class="[
      collapsed ? 'w-[76px]' : 'w-[264px]',
      mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    ]"
  >
    <div class="h-16 flex items-center justify-between px-4 border-b border-border">
      <div class="flex items-center gap-2 overflow-hidden">
        <div class="w-9 h-9 rounded-control bg-brand-gradient flex items-center justify-center shrink-0">
          <Sparkles class="w-5 h-5 text-white" />
        </div>
        <span v-if="!collapsed" class="font-bold text-lg tracking-tight whitespace-nowrap">SGA+</span>
      </div>
      <button class="lg:hidden text-ink-500" @click="emit('close-mobile')">
        <X class="w-5 h-5" />
      </button>
    </div>

    <nav class="flex-1 overflow-y-auto scrollbar-thin py-4 px-3 space-y-1">
      <router-link
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="flex items-center gap-3 px-3 py-2.5 rounded-control text-sm font-medium text-ink-500 hover:bg-primary-50 hover:text-primary-700 transition-soft"
        active-class="!bg-primary-50 !text-primary-700"
      >
        <component :is="item.icon" class="w-5 h-5 shrink-0" />
        <span v-if="!collapsed" class="whitespace-nowrap">{{ item.label }}</span>
      </router-link>
    </nav>

    <div class="p-3 border-t border-border">
      <router-link
        to="/aluno/perfil"
        class="flex items-center gap-3 px-3 py-2.5 rounded-control text-sm font-medium text-ink-500 hover:bg-ink-900/5 transition-soft"
      >
        <Settings class="w-5 h-5 shrink-0" />
        <span v-if="!collapsed" class="whitespace-nowrap">Configurações</span>
      </router-link>
      <button
        class="hidden lg:flex items-center gap-3 px-3 py-2.5 mt-1 w-full rounded-control text-sm font-medium text-ink-500 hover:bg-ink-900/5 transition-soft"
        @click="collapsed = !collapsed"
      >
        <ChevronsLeft class="w-5 h-5 shrink-0 transition-transform" :class="collapsed && 'rotate-180'" />
        <span v-if="!collapsed">Recolher menu</span>
      </button>
    </div>
  </aside>
</template>
