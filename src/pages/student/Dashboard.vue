<script setup>
import { onMounted, computed } from 'vue'
import {
  GraduationCap,
  CalendarCheck,
  ClipboardList,
  Clock3,
  Flame,
  Award,
  Star,
  CalendarDays,
  ArrowRight
} from 'lucide-vue-next'

import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import ProgressBar from '@/components/ui/ProgressBar.vue'
import Skeleton from '@/components/ui/Skeleton.vue'
import StatCard from '@/components/cards/StatCard.vue'
import AnnouncementCard from '@/components/cards/AnnouncementCard.vue'
import GradesLineChart from '@/components/charts/GradesLineChart.vue'
import AttendanceChart from '@/components/charts/AttendanceChart.vue'

import { useAuthStore } from '@/stores/auth'
import { useStudentStore } from '@/stores/student'

const auth = useAuthStore()
const student = useStudentStore()

onMounted(() => {
  student.fetchDashboard()
})

const eventTypeTone = {
  prova: 'danger',
  trabalho: 'warning',
  reuniao: 'primary'
}

const greeting = computed(() => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Bom dia'
  if (hour < 18) return 'Boa tarde'
  return 'Boa noite'
})
</script>

<template>
  <div class="space-y-6">
    <!-- Saudação -->
    <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
      <div>
        <h1 class="text-2xl sm:text-3xl font-extrabold">{{ greeting }}, {{ auth.user.firstName }} 👋</h1>
        <p class="text-ink-500 mt-1">Aqui está um resumo do seu desempenho em {{ auth.user.turma }}.</p>
      </div>
      <Button variant="secondary" :icon="CalendarDays">Ver calendário completo</Button>
    </div>

    <!-- 4 cards principais -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <template v-if="student.loading">
        <Card v-for="i in 4" :key="i"><Skeleton height="80px" /></Card>
      </template>
      <template v-else>
        <StatCard
          label="Média Geral"
          :value="student.stats.mediaGeral.valor.toFixed(1)"
          :icon="GraduationCap"
          tone="primary"
          :variacao="student.stats.mediaGeral.variacao"
          :periodo="student.stats.mediaGeral.periodo"
        />
        <StatCard
          label="Frequência"
          :value="student.stats.frequencia.valor"
          suffix="%"
          :icon="CalendarCheck"
          tone="success"
          :variacao="student.stats.frequencia.variacao"
          :periodo="student.stats.frequencia.periodo"
        />
        <StatCard
          label="Atividades Pendentes"
          :value="student.stats.atividadesPendentes.valor"
          :icon="ClipboardList"
          tone="warning"
          :variacao="student.stats.atividadesPendentes.variacao"
          :periodo="student.stats.atividadesPendentes.periodo"
        />
        <StatCard
          label="Próxima Avaliação"
          :value="student.stats.proximaAvaliacao.disciplina"
          :icon="Clock3"
          tone="danger"
        >
        </StatCard>
      </template>
    </div>

    <!-- Gráficos -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card>
        <template #header>
          <div>
            <h3 class="font-bold">Evolução das Notas</h3>
            <p class="text-sm text-ink-500">Últimos 7 meses</p>
          </div>
        </template>
        <Skeleton v-if="student.loading" height="18rem" />
        <GradesLineChart v-else :data="student.grades" />
      </Card>

      <Card>
        <template #header>
          <div>
            <h3 class="font-bold">Frequência</h3>
            <p class="text-sm text-ink-500">Percentual de presença mensal</p>
          </div>
        </template>
        <Skeleton v-if="student.loading" height="18rem" />
        <AttendanceChart v-else :labels="student.attendance.labels" :data="student.attendance.data" />
      </Card>
    </div>

    <!-- Calendário + Provas + Entregas -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card>
        <template #header>
          <h3 class="font-bold">Calendário Inteligente</h3>
          <router-link to="/aluno/calendario" class="text-primary-600 text-sm font-semibold flex items-center gap-1 hover:gap-1.5 transition-soft">
            Ver tudo <ArrowRight class="w-3.5 h-3.5" />
          </router-link>
        </template>
        <div class="space-y-3">
          <Skeleton v-if="student.loading" v-for="i in 4" :key="i" height="3rem" />
          <div v-else v-for="event in student.calendarPreview" :key="event.id" class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-control bg-primary-50 flex flex-col items-center justify-center shrink-0 leading-none">
              <span class="text-xs font-bold text-primary-600">{{ event.dia }}</span>
              <span class="text-[10px] text-primary-600 uppercase">{{ event.mes }}</span>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-ink-900 truncate">{{ event.titulo }}</p>
              <Badge :tone="eventTypeTone[event.tipo]" class="mt-1">{{ event.tipo }}</Badge>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <template #header>
          <h3 class="font-bold">Próximas Provas</h3>
        </template>
        <div class="space-y-4">
          <Skeleton v-if="student.loading" v-for="i in 3" :key="i" height="2.5rem" />
          <div v-else v-for="exam in student.exams" :key="exam.id" class="flex items-start justify-between gap-2">
            <div>
              <p class="text-sm font-semibold text-ink-900">{{ exam.disciplina }}</p>
              <p class="text-xs text-ink-500">{{ exam.tema }} · {{ exam.professor }}</p>
            </div>
            <div class="text-right shrink-0">
              <p class="text-sm font-bold text-ink-900">{{ exam.data }}</p>
              <p class="text-xs text-ink-500">{{ exam.hora }}</p>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <template #header>
          <h3 class="font-bold">Próximas Entregas</h3>
        </template>
        <div class="space-y-4">
          <Skeleton v-if="student.loading" v-for="i in 3" :key="i" height="2.5rem" />
          <div v-else v-for="item in student.deliveries" :key="item.id" class="flex items-start justify-between gap-2">
            <div>
              <p class="text-sm font-semibold text-ink-900">{{ item.titulo }}</p>
              <p class="text-xs text-ink-500">{{ item.disciplina }}</p>
            </div>
            <Badge :tone="item.status === 'pendente' ? 'warning' : 'primary'">
              {{ item.status === 'pendente' ? 'Pendente' : 'Em andamento' }}
            </Badge>
          </div>
        </div>
      </Card>
    </div>

    <!-- Comunicados + Gamificação + Progresso do semestre -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card class="lg:col-span-2">
        <template #header>
          <h3 class="font-bold">Comunicados Recentes</h3>
          <router-link to="/aluno/comunicacao" class="text-primary-600 text-sm font-semibold flex items-center gap-1 hover:gap-1.5 transition-soft">
            Ver tudo <ArrowRight class="w-3.5 h-3.5" />
          </router-link>
        </template>
        <div v-if="student.loading" class="space-y-3">
          <Skeleton v-for="i in 3" :key="i" height="3.5rem" />
        </div>
        <div v-else>
          <AnnouncementCard v-for="item in student.announcements" :key="item.id" :announcement="item" />
        </div>
      </Card>

      <div class="space-y-4">
        <Card class="bg-brand-gradient text-white !border-0">
          <div class="flex items-center justify-between mb-3">
            <div>
              <p class="text-sm opacity-80">Nível {{ student.achievements?.nivel }}</p>
              <p class="text-2xl font-extrabold">{{ student.achievements?.xpAtual }} XP</p>
            </div>
            <div class="flex items-center gap-1 bg-white/15 rounded-control px-2.5 py-1.5 text-sm font-semibold">
              <Flame class="w-4 h-4" /> {{ student.achievements?.sequenciaDias }} dias
            </div>
          </div>
          <ProgressBar
            v-if="student.achievements"
            :value="(student.achievements.xpAtual / student.achievements.xpProximoNivel) * 100"
            tone="primary"
            class="[&>div]:bg-white [&>div]:bg-none"
          />
          <p class="text-xs opacity-80 mt-2">
            Faltam {{ student.achievements ? student.achievements.xpProximoNivel - student.achievements.xpAtual : 0 }} XP para o próximo nível
          </p>
        </Card>

        <Card>
          <template #header>
            <h3 class="font-bold text-sm">Progresso do Semestre</h3>
          </template>
          <ProgressBar
            v-if="student.semesterProgress"
            :value="student.semesterProgress.percentual"
            show-label
          >
            {{ student.semesterProgress.bimestreAtual }}º de {{ student.semesterProgress.totalBimestres }} bimestres
          </ProgressBar>
          <p v-if="student.semesterProgress" class="text-xs text-ink-500 mt-2">
            {{ student.semesterProgress.diasRestantes }} dias até o encerramento do bimestre
          </p>
        </Card>
      </div>
    </div>

    <!-- Ranking de conquistas -->
    <Card>
      <template #header>
        <h3 class="font-bold">Ranking de Conquistas</h3>
        <router-link to="/aluno/conquistas" class="text-primary-600 text-sm font-semibold flex items-center gap-1 hover:gap-1.5 transition-soft">
          Ver todas <ArrowRight class="w-3.5 h-3.5" />
        </router-link>
      </template>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p class="text-sm font-semibold text-ink-500 mb-3">Top da turma</p>
          <div class="space-y-2">
            <div
              v-for="pos in student.achievements?.ranking"
              :key="pos.posicao"
              class="flex items-center gap-3 py-1.5"
              :class="pos.voce && 'bg-primary-50 rounded-control px-2 -mx-2'"
            >
              <span class="w-6 text-sm font-bold text-ink-500">{{ pos.posicao }}º</span>
              <span class="flex-1 text-sm font-medium text-ink-900">{{ pos.nome }}</span>
              <span class="text-sm font-bold text-primary-600">{{ pos.xp }} XP</span>
            </div>
          </div>
        </div>
        <div>
          <p class="text-sm font-semibold text-ink-500 mb-3">Medalhas recentes</p>
          <div class="space-y-3">
            <div v-for="medal in student.achievements?.medalhasRecentes" :key="medal.id" class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-control bg-warning/10 text-warning flex items-center justify-center shrink-0">
                <component :is="medal.icone === 'star' ? Star : (medal.icone === 'flame' ? Flame : Award)" class="w-5 h-5" />
              </div>
              <div>
                <p class="text-sm font-semibold text-ink-900">{{ medal.nome }}</p>
                <p class="text-xs text-ink-500">{{ medal.descricao }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>
