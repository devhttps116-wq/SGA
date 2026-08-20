<script setup>
import { onMounted } from 'vue'
import { ArrowRight, User } from 'lucide-vue-next'

import Card from '@/components/ui/Card.vue'
import Skeleton from '@/components/ui/Skeleton.vue'
import ProgressBar from '@/components/ui/ProgressBar.vue'
import { useStudentStore } from '@/stores/student'

const student = useStudentStore()

onMounted(() => {
  student.fetchSubjects()
})
</script>

<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl sm:text-3xl font-extrabold text-ink-900">Minhas Matérias</h1>
      <p class="text-ink-500 mt-1">Acompanhe médias, frequência e progresso de cada disciplina.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <template v-if="student.subjectsLoading">
        <Card v-for="i in 6" :key="i">
          <Skeleton height="1.2rem" width="60%" />
          <Skeleton height="0.9rem" width="40%" class="mt-3" />
          <Skeleton height="3rem" class="mt-4" />
        </Card>
      </template>

      <template v-else>
        <Card v-for="subject in student.subjects" :key="subject.id" hover>
          <div class="flex items-start justify-between mb-3">
            <h3 class="font-bold text-ink-900">{{ subject.nome }}</h3>
            <span class="text-lg font-extrabold text-primary-600">{{ subject.media.toFixed(1) }}</span>
          </div>

          <div class="flex items-center gap-1.5 text-sm text-ink-500 mb-4">
            <User class="w-3.5 h-3.5" />
            {{ subject.professor }}
          </div>

          <ProgressBar :value="subject.progresso" show-label>
            Progresso do conteúdo
          </ProgressBar>

          <div class="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <div>
              <p class="text-xs text-ink-500">Frequência</p>
              <p class="text-sm font-semibold text-ink-900">{{ subject.frequencia }}%</p>
            </div>
            <router-link
              :to="`/aluno/materias/${subject.id}`"
              class="text-primary-600 text-sm font-semibold flex items-center gap-1 hover:gap-1.5 transition-soft"
            >
              Abrir <ArrowRight class="w-3.5 h-3.5" />
            </router-link>
          </div>

          <p class="text-xs text-ink-500 mt-3">Próxima atividade: {{ subject.proximaAtividade }}</p>
        </Card>
      </template>
    </div>
  </div>
</template>
