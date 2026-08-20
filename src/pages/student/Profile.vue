<script setup>
import { ref } from 'vue'
import { User, Lock, Bell, Globe, ShieldCheck, Camera } from 'lucide-vue-next'

import Card from '@/components/ui/Card.vue'
import Button from '@/components/ui/Button.vue'
import Avatar from '@/components/ui/Avatar.vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

const sections = [
  { id: 'dados', label: 'Dados pessoais', icon: User },
  { id: 'senha', label: 'Senha', icon: Lock },
  { id: 'notificacoes', label: 'Notificações', icon: Bell },
  { id: 'idioma', label: 'Idioma', icon: Globe },
  { id: 'seguranca', label: 'Segurança', icon: ShieldCheck }
]
const activeSection = ref('dados')

const notifPrefs = ref({
  notas: true,
  faltas: true,
  provas: true,
  comunicados: false,
  mensagens: true
})
</script>

<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl sm:text-3xl font-extrabold text-ink-900">Meu Perfil</h1>
      <p class="text-ink-500 mt-1">Gerencie seus dados pessoais, senha e preferências.</p>
    </div>

    <div class="grid lg:grid-cols-[240px_1fr] gap-6">
      <!-- Navegação lateral -->
      <div class="space-y-1">
        <button
          v-for="s in sections"
          :key="s.id"
          class="w-full flex items-center gap-3 px-3 py-2.5 rounded-control text-sm font-medium text-left transition-soft"
          :class="activeSection === s.id ? 'bg-primary-50 text-primary-700' : 'text-ink-500 hover:bg-ink-900/5'"
          @click="activeSection = s.id"
        >
          <component :is="s.icon" class="w-4 h-4 shrink-0" />
          {{ s.label }}
        </button>
      </div>

      <div>
        <!-- Dados pessoais -->
        <Card v-if="activeSection === 'dados'">
          <div class="flex items-center gap-4 mb-6">
            <div class="relative">
              <Avatar :src="auth.user.avatarUrl" :initials="auth.initials" size="lg" />
              <button class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-border flex items-center justify-center shadow-soft">
                <Camera class="w-3 h-3 text-ink-500" />
              </button>
            </div>
            <div>
              <p class="font-bold text-ink-900">{{ auth.user.name }}</p>
              <p class="text-sm text-ink-500">{{ auth.user.turma }}</p>
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="text-sm font-medium text-ink-700 mb-1.5 block">Nome completo</label>
              <input :value="auth.user.name" type="text" class="w-full px-3.5 py-2.5 rounded-control border border-border text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-soft" />
            </div>
            <div>
              <label class="text-sm font-medium text-ink-700 mb-1.5 block">E-mail</label>
              <input :value="auth.user.email" type="email" class="w-full px-3.5 py-2.5 rounded-control border border-border text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-soft" />
            </div>
            <div>
              <label class="text-sm font-medium text-ink-700 mb-1.5 block">Turma</label>
              <input :value="auth.user.turma" type="text" disabled class="w-full px-3.5 py-2.5 rounded-control border border-border bg-ink-900/[0.03] text-sm text-ink-500 outline-none" />
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <Button variant="primary">Salvar alterações</Button>
          </div>
        </Card>

        <!-- Senha -->
        <Card v-else-if="activeSection === 'senha'">
          <div class="space-y-4 max-w-sm">
            <div>
              <label class="text-sm font-medium text-ink-700 mb-1.5 block">Senha atual</label>
              <input type="password" class="w-full px-3.5 py-2.5 rounded-control border border-border text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-soft" />
            </div>
            <div>
              <label class="text-sm font-medium text-ink-700 mb-1.5 block">Nova senha</label>
              <input type="password" class="w-full px-3.5 py-2.5 rounded-control border border-border text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-soft" />
            </div>
            <div>
              <label class="text-sm font-medium text-ink-700 mb-1.5 block">Confirmar nova senha</label>
              <input type="password" class="w-full px-3.5 py-2.5 rounded-control border border-border text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-soft" />
            </div>
          </div>
          <div class="flex justify-end mt-6">
            <Button variant="primary">Atualizar senha</Button>
          </div>
        </Card>

        <!-- Notificações -->
        <Card v-else-if="activeSection === 'notificacoes'">
          <div class="space-y-4">
            <label v-for="(_, key) in notifPrefs" :key="key" class="flex items-center justify-between py-2 border-b border-border last:border-0 cursor-pointer">
              <span class="text-sm font-medium text-ink-900 capitalize">{{ key }}</span>
              <input v-model="notifPrefs[key]" type="checkbox" class="w-4 h-4 rounded border-border text-primary-600 focus:ring-primary-200" />
            </label>
          </div>
        </Card>

        <!-- Idioma -->
        <Card v-else-if="activeSection === 'idioma'">
          <label class="text-sm font-medium text-ink-700 mb-1.5 block">Idioma da plataforma</label>
          <select class="w-full sm:w-64 px-3.5 py-2.5 rounded-control border border-border text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-soft">
            <option>Português (Brasil)</option>
            <option>English</option>
            <option>Español</option>
          </select>
        </Card>

        <!-- Segurança -->
        <Card v-else-if="activeSection === 'seguranca'">
          <div class="flex items-center justify-between py-2">
            <div>
              <p class="text-sm font-semibold text-ink-900">Autenticação em duas etapas</p>
              <p class="text-xs text-ink-500 mt-0.5">Adicione uma camada extra de segurança à sua conta.</p>
            </div>
            <Button variant="secondary" size="sm">Ativar</Button>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>
