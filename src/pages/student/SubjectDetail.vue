<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { FileText, Video, Presentation, Paperclip, Megaphone } from 'lucide-vue-next'

import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
import Skeleton from '@/components/ui/Skeleton.vue'
import GradesLineChart from '@/components/charts/GradesLineChart.vue'
import { useStudentStore } from '@/stores/student'

const route = useRoute()
const student = useStudentStore()

onMounted(() => {
  if (!student.subjects.length) student.fetchSubjects()
})

const subject = computed(() => student.subjects.find((s) => s.id === route.params.id))

const tabs = ['Visão Geral', 'Materiais', 'Atividades', 'Notas', 'Comunicações']
const activeTab = ref('Visão Geral')

const materials = [
  { id: 1, tipo: 'pdf', nome: 'Apostila — Capítulo 4' },
  { id: 2, tipo: 'video', nome: 'Aula gravada — Revisão' },
  { id: 3, tipo: 'slide', nome: 'Slides — Introdução ao tema' }
]
const materialIcon = { pdf: FileText, video: Video, slide: Presentation }

const activities = [
  { id: 1, titulo: 'Lista de exercícios 3', status: 'Concluída', prazo: '15/08' },
  { id: 2, titulo: 'Trabalho em grupo', status: 'Em andamento', prazo: '24/08' },
  { id: 3, titulo: 'Prova bimestral', status: 'Pendente', prazo: '23/08' }
]
const activityTone = { Concluída: 'success', 'Em andamento': 'warning', Pendente: 'danger' }

const gradesHistory = [
  { periodo: '1º Bimestre', nota: 8.2 },
  { periodo: '2º Bimestre', nota: 8.5 },
  { periodo: '3º Bimestre', nota: 8.9 }
]

const communications = [
  { id: 1, autor: 'Professor', titulo: 'Material de revisão disponível', horario: 'Há 5 horas' },
  { id: 2, autor: 'Professor', titulo: 'Prova remarcada para sexta-feira', horario: 'Ontem' }
]
</script>

<template>
  <div>
    <template v-if="!subject">
      <Skeleton height="2rem" width="40%" />
      <Skeleton height="12rem" class="mt-4" />
    </template>

    <template v-else>
      <div class="mb-6">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-ink-900">{{ subject.nome }}</h1>
        <p class="text-ink-500 mt-1">{{ subject.professor }} · Média {{ subject.media.toFixed(1) }} · Frequência {{ subject.frequencia }}%</p>
      </div>

      <!-- Navegação por abas -->
      <div class="flex items-center gap-1 border-b border-border mb-6 overflow-x-auto scrollbar-thin">
        <button
          v-for="tab in tabs"
          :key="tab"
          class="px-4 py-2.5 text-sm font-semibold whitespace-nowrap border-b-2 -mb-px transition-soft"
          :class="activeTab === tab ? 'border-primary-600 text-primary-600' : 'border-transparent text-ink-500 hover:text-ink-900'"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Visão Geral -->
      <div v-if="activeTab === 'Visão Geral'" class="space-y-4">
        <div class="grid sm:grid-cols-2 gap-4">
          <Card>
            <p class="text-sm text-ink-500 mb-1">Média atual</p>
            <p class="text-3xl font-extrabold text-ink-900">{{ subject.media.toFixed(1) }}</p>
          </Card>
          <Card>
            <p class="text-sm text-ink-500 mb-1">Frequência</p>
            <p class="text-3xl font-extrabold text-ink-900">{{ subject.frequencia }}%</p>
          </Card>
        </div>
        <Card>
          <template #header>
            <h3 class="font-bold">Desempenho no bimestre</h3>
          </template>
          <GradesLineChart :data="{ labels: gradesHistory.map((g) => g.periodo), datasets: [{ label: subject.nome, data: gradesHistory.map((g) => g.nota) }] }" />
        </Card>
      </div>

      <!-- Materiais -->
      <div v-else-if="activeTab === 'Materiais'" class="space-y-3">
        <Card v-for="m in materials" :key="m.id" :padded="true" class="flex items-center gap-3 !flex-row">
          <div class="w-10 h-10 rounded-control bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
            <component :is="materialIcon[m.tipo]" class="w-5 h-5" />
          </div>
          <p class="text-sm font-medium text-ink-900">{{ m.nome }}</p>
        </Card>
      </div>

      <!-- Atividades -->
      <div v-else-if="activeTab === 'Atividades'" class="space-y-3">
        <Card v-for="a in activities" :key="a.id" class="flex items-center justify-between !flex-row">
          <div>
            <p class="text-sm font-semibold text-ink-900">{{ a.titulo }}</p>
            <p class="text-xs text-ink-500 mt-0.5">Prazo: {{ a.prazo }}</p>
          </div>
          <Badge :tone="activityTone[a.status]">{{ a.status }}</Badge>
        </Card>
      </div>

      <!-- Notas -->
      <div v-else-if="activeTab === 'Notas'">
        <Card :padded="false">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-border text-left text-ink-500">
                <th class="py-3 px-5 font-semibold">Período</th>
                <th class="py-3 px-5 font-semibold">Nota</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="g in gradesHistory" :key="g.periodo" class="border-b border-border last:border-0">
                <td class="py-3 px-5 text-ink-700">{{ g.periodo }}</td>
                <td class="py-3 px-5 font-bold text-ink-900">{{ g.nota.toFixed(1) }}</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>

      <!-- Comunicações -->
      <div v-else-if="activeTab === 'Comunicações'" class="space-y-3">
        <Card v-for="c in communications" :key="c.id" class="!flex-row items-start gap-3 flex">
          <div class="w-9 h-9 rounded-control bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
            <Megaphone class="w-4 h-4" />
          </div>
          <div class="flex-1">
            <div class="flex items-center justify-between gap-2">
              <p class="text-sm font-semibold text-ink-900">{{ c.titulo }}</p>
              <span class="text-xs text-ink-500 shrink-0">{{ c.horario }}</span>
            </div>
            <p class="text-xs text-ink-500 mt-0.5">{{ c.autor }}</p>
          </div>
          <Paperclip class="w-4 h-4 text-ink-400 shrink-0" />
        </Card>
      </div>
    </template>
  </div>
</template>
