<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Sparkles, Mail, Lock, Eye, EyeOff, GraduationCap, BarChart3, Bell } from 'lucide-vue-next'

import Button from '@/components/ui/Button.vue'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()

const email = ref('beatriz.andrade@colegiosgaplus.com.br')
const password = ref('12345')
const showPassword = ref(false)
const rememberMe = ref(true)
const loading = ref(false)

async function handleSubmit() {
  loading.value = true
  await auth.login({ email: email.value, password: password.value })
  loading.value = false
  router.push('/aluno/dashboard')
}
</script>

<template>
  <div class="min-h-screen grid lg:grid-cols-2 bg-surface">
    <!-- Lado esquerdo — ilustração -->
    <div class="hidden lg:flex relative overflow-hidden bg-brand-gradient items-center justify-center p-12">
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div class="absolute -bottom-32 -right-16 w-96 h-96 bg-primary-300/30 rounded-full blur-3xl" />
      <div class="absolute inset-0 opacity-[0.07]" style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 28px 28px;" />

      <div class="relative z-10 max-w-md text-white">
        <div class="flex items-center gap-2 mb-10">
          <div class="w-10 h-10 rounded-control bg-white/15 flex items-center justify-center">
            <Sparkles class="w-5 h-5" />
          </div>
          <span class="font-bold text-xl tracking-tight">SGA+</span>
        </div>

        <h2 class="text-3xl font-extrabold leading-tight mb-4">
          Toda a vida acadêmica, organizada em um só lugar.
        </h2>
        <p class="opacity-85">
          Notas, frequência, atividades e comunicados — tudo em um ambiente moderno e inteligente, feito para escolas de verdade.
        </p>

        <div class="space-y-4 mt-10">
          <div class="flex items-center gap-3 bg-white/10 rounded-control px-4 py-3 backdrop-blur-sm">
            <GraduationCap class="w-5 h-5 shrink-0" />
            <span class="text-sm font-medium">Dashboards ricos para cada perfil</span>
          </div>
          <div class="flex items-center gap-3 bg-white/10 rounded-control px-4 py-3 backdrop-blur-sm">
            <BarChart3 class="w-5 h-5 shrink-0" />
            <span class="text-sm font-medium">Acompanhamento em tempo real</span>
          </div>
          <div class="flex items-center gap-3 bg-white/10 rounded-control px-4 py-3 backdrop-blur-sm">
            <Bell class="w-5 h-5 shrink-0" />
            <span class="text-sm font-medium">Notificações inteligentes</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Lado direito — formulário -->
    <div class="flex items-center justify-center p-6 sm:p-12">
      <div class="w-full max-w-sm">
        <div class="flex items-center gap-2 mb-8 lg:hidden">
          <div class="w-9 h-9 rounded-control bg-brand-gradient flex items-center justify-center">
            <Sparkles class="w-5 h-5 text-white" />
          </div>
          <span class="font-bold text-lg tracking-tight">SGA+</span>
        </div>

        <h1 class="text-2xl font-extrabold text-ink-900">Bem-vindo de volta</h1>
        <p class="text-ink-500 mt-1.5 mb-8">Entre com sua conta para acessar seu painel.</p>

        <form class="space-y-4" @submit.prevent="handleSubmit">
          <div>
            <label class="text-sm font-medium text-ink-700 mb-1.5 block">E-mail</label>
            <div class="relative">
              <Mail class="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                v-model="email"
                type="email"
                required
                placeholder="seu@email.com"
                class="w-full pl-10 pr-4 py-2.5 rounded-control border border-border text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-soft"
              />
            </div>
          </div>

          <div>
            <label class="text-sm font-medium text-ink-700 mb-1.5 block">Senha</label>
            <div class="relative">
              <Lock class="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                required
                placeholder="••••••••"
                class="w-full pl-10 pr-10 py-2.5 rounded-control border border-border text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-soft"
              />
              <button type="button" class="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-400" @click="showPassword = !showPassword">
                <component :is="showPassword ? EyeOff : Eye" class="w-4 h-4" />
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center gap-2 text-ink-500 cursor-pointer select-none">
              <input v-model="rememberMe" type="checkbox" class="rounded border-border text-primary-600 focus:ring-primary-200" />
              Lembrar-me
            </label>
            <a href="#" class="text-primary-600 font-semibold hover:text-primary-700 transition-soft">Esqueci minha senha</a>
          </div>

          <Button type="submit" variant="primary" size="lg" class="w-full" :loading="loading">Entrar</Button>
        </form>

        <div class="flex items-center gap-3 my-6">
          <div class="flex-1 h-px bg-border" />
          <span class="text-xs text-ink-500">ou continue com</span>
          <div class="flex-1 h-px bg-border" />
        </div>

        <div class="grid grid-cols-2 gap-3">
          <button class="flex items-center justify-center gap-2 py-2.5 rounded-control border border-border text-sm font-semibold text-ink-700 hover:bg-ink-900/5 transition-soft">
            Google
          </button>
          <button class="flex items-center justify-center gap-2 py-2.5 rounded-control border border-border text-sm font-semibold text-ink-700 hover:bg-ink-900/5 transition-soft">
            Microsoft
          </button>
        </div>

        <p class="text-center text-sm text-ink-500 mt-8">
          Ainda não tem uma conta?
          <a href="#" class="text-primary-600 font-semibold hover:text-primary-700 transition-soft">Solicitar demonstração</a>
        </p>
      </div>
    </div>
  </div>
</template>
