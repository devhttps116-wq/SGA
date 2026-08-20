<script setup>
import { ref } from 'vue'
import {
  Sparkles,
  GraduationCap,
  BarChart3,
  Bell,
  Trophy,
  ShieldCheck,
  Users,
  CalendarCheck,
  BookOpen,
  MessageSquare,
  Zap,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Star
} from 'lucide-vue-next'

import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'

const benefits = [
  {
    icon: BarChart3,
    title: 'Tudo em um só lugar',
    text: 'Notas, frequência, atividades e comunicados reunidos em um único painel — sem planilhas soltas ou sistemas paralelos.'
  },
  {
    icon: Bell,
    title: 'Nada passa despercebido',
    text: 'Notificações inteligentes avisam alunos, professores e responsáveis sobre o que realmente importa, na hora certa.'
  },
  {
    icon: Sparkles,
    title: 'Inteligência acadêmica',
    text: 'Identifique alunos em risco, tendências de queda e oportunidades de intervenção antes que virem problema.'
  },
  {
    icon: Users,
    title: 'Feito para todos os perfis',
    text: 'Alunos, professores, responsáveis e gestores — cada um com uma experiência pensada para o seu dia a dia.'
  }
]

const features = [
  { icon: GraduationCap, title: 'Dashboards ricos', text: 'Painéis completos com gráficos, indicadores e metas por perfil de usuário.' },
  { icon: CalendarCheck, title: 'Calendário inteligente', text: 'Provas, entregas e reuniões organizados automaticamente, com filtros por categoria.' },
  { icon: BookOpen, title: 'Gestão de disciplinas', text: 'Materiais, atividades, notas e comunicados de cada matéria em um espaço próprio.' },
  { icon: MessageSquare, title: 'Comunicação escolar', text: 'Um mural moderno para avisos, mensagens e anexos entre escola, professores e famílias.' },
  { icon: Trophy, title: 'Gamificação', text: 'XP, níveis, medalhas e sequências de estudo para manter o aluno engajado.' },
  { icon: ShieldCheck, title: 'Pronto para crescer', text: 'Arquitetura preparada para integrações com Firebase, Supabase, APIs REST e app mobile.' }
]

const testimonials = [
  {
    nome: 'Marina Costa',
    cargo: 'Coordenadora Pedagógica — Colégio Nova Era',
    texto: 'Desde que adotamos o SGA+, reduzimos drasticamente o tempo gasto reunindo informações espalhadas em planilhas e grupos de mensagem.'
  },
  {
    nome: 'Rafael Duarte',
    cargo: 'Professor de Física',
    texto: 'Lançar notas e frequência ficou tão simples que sobra mais tempo para preparar aula. Os alunos também acompanham tudo sozinhos.'
  },
  {
    nome: 'Camila Rezende',
    cargo: 'Mãe de aluno do 2º ano',
    texto: 'Consigo acompanhar o desempenho do meu filho em tempo real, sem depender de reunião de pais para saber como ele está indo.'
  }
]

const faqs = [
  {
    pergunta: 'O SGA+ substitui o sistema acadêmico que já usamos?',
    resposta: 'O SGA+ foi desenhado para centralizar a experiência de alunos, professores, responsáveis e gestores, com arquitetura preparada para integrar com os sistemas e bancos de dados que a instituição já utiliza.'
  },
  {
    pergunta: 'A plataforma funciona bem no celular?',
    resposta: 'Sim. Todas as telas são responsivas, com menu adaptado para dispositivos móveis, tablets e desktop.'
  },
  {
    pergunta: 'Como funciona a Inteligência Acadêmica?',
    resposta: 'O painel de Inteligência Acadêmica reúne sinais como queda de notas, excesso de faltas e recomendações de intervenção para apoiar decisões pedagógicas.'
  },
  {
    pergunta: 'É possível testar antes de contratar?',
    resposta: 'Sim, é só solicitar uma demonstração e nossa equipe apresenta a plataforma configurada para o perfil da sua instituição.'
  }
]

const openFaq = ref(0)
function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? -1 : i
}
</script>

<template>
  <div class="bg-surface">
    <!-- Navbar -->
    <header class="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-border">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-9 h-9 rounded-control bg-brand-gradient flex items-center justify-center">
            <Sparkles class="w-5 h-5 text-white" />
          </div>
          <router-link to="/">
            <span class="font-bold text-lg tracking-tight">SGA+</span>
          </router-link>
        </div>
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-ink-500">
          <a href="#beneficios" class="hover:text-ink-900 transition-soft">Benefícios</a>
          <a href="#funcionalidades" class="hover:text-ink-900 transition-soft">Funcionalidades</a>
          <a href="#depoimentos" class="hover:text-ink-900 transition-soft">Depoimentos</a>
          <a href="#faq" class="hover:text-ink-900 transition-soft">FAQ</a>
        </nav>
        <div class="flex items-center gap-2">
          <router-link to="/login">
            <Button variant="ghost" size="sm">Entrar</Button>
          </router-link>
          <router-link to="/login">
            <Button variant="primary" size="sm">Solicitar Demonstração</Button>
          </router-link>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-50 to-surface -z-10" />
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge tone="primary" class="mb-5">Sistema de Gerenciamento Acadêmico Inteligente</Badge>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-ink-900 leading-tight tracking-tight">
            A vida acadêmica da sua escola, <span class="text-primary-600">organizada em um só lugar.</span>
          </h1>
          <p class="text-ink-500 text-lg mt-5 max-w-lg">
            Notas, frequência, atividades e comunicados de alunos, professores, responsáveis e gestores — reunidos em um ambiente moderno, intuitivo e inteligente.
          </p>
          <div class="flex flex-wrap items-center gap-3 mt-8">
            <router-link to="/login">
              <Button variant="primary" size="lg" :icon="ArrowRight" icon-position="right">Entrar</Button>
            </router-link>
            <router-link to="/login">
              <Button variant="secondary" size="lg">Solicitar Demonstração</Button>
            </router-link>
          </div>
          <div class="flex items-center gap-6 mt-10 text-sm text-ink-500">
            <div class="flex items-center gap-1.5"><CheckCircle2 class="w-4 h-4 text-success" /> Sem cartão de crédito</div>
            <div class="flex items-center gap-1.5"><CheckCircle2 class="w-4 h-4 text-success" /> Setup em minutos</div>
          </div>
        </div>

        <!-- Mockup do dashboard -->
        <div class="relative">
          <div class="absolute -inset-6 bg-primary-200/40 blur-3xl rounded-full -z-10" />
          <Card class="!p-4 shadow-elevated">
            <div class="flex items-center justify-between mb-4">
              <div>
                <p class="text-xs text-ink-500">Bom dia, Beatriz 👋</p>
                <p class="text-sm font-bold text-ink-900">Resumo do seu desempenho</p>
              </div>
              <div class="w-8 h-8 rounded-full bg-brand-gradient" />
            </div>
            <div class="grid grid-cols-2 gap-3 mb-4">
              <div class="bg-primary-50 rounded-control p-3">
                <p class="text-xs text-ink-500">Média Geral</p>
                <p class="text-xl font-extrabold text-primary-700">8.7</p>
              </div>
              <div class="bg-success/10 rounded-control p-3">
                <p class="text-xs text-ink-500">Frequência</p>
                <p class="text-xl font-extrabold text-success">96%</p>
              </div>
            </div>
            <div class="h-28 rounded-control bg-gradient-to-t from-primary-100 to-transparent border border-border flex items-end gap-1.5 p-3">
              <div v-for="h in [40, 55, 48, 65, 72, 60, 80]" :key="h" class="flex-1 bg-brand-gradient rounded-t-md" :style="{ height: `${h}%` }" />
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- Benefícios -->
    <section id="beneficios" class="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-3xl font-extrabold text-ink-900">Feito para resolver o caos acadêmico</h2>
        <p class="text-ink-500 mt-3">Informações espalhadas, comunicados perdidos e dificuldade em acompanhar o desempenho — o SGA+ resolve tudo isso.</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card v-for="b in benefits" :key="b.title" hover>
          <div class="w-11 h-11 rounded-control bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
            <component :is="b.icon" class="w-5 h-5" />
          </div>
          <h3 class="font-bold text-ink-900 mb-1.5">{{ b.title }}</h3>
          <p class="text-sm text-ink-500">{{ b.text }}</p>
        </Card>
      </div>
    </section>

    <!-- Funcionalidades -->
    <section id="funcionalidades" class="bg-white border-y border-border">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-3xl font-extrabold text-ink-900">Uma plataforma completa</h2>
          <p class="text-ink-500 mt-3">Tudo que alunos, professores, responsáveis e gestores precisam no dia a dia escolar.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card v-for="f in features" :key="f.title" hover>
            <div class="w-11 h-11 rounded-control bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
              <component :is="f.icon" class="w-5 h-5" />
            </div>
            <h3 class="font-bold text-ink-900 mb-1.5">{{ f.title }}</h3>
            <p class="text-sm text-ink-500">{{ f.text }}</p>
          </Card>
        </div>
      </div>
    </section>

    <!-- Gamificação -->
    <section class="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
      <Card class="!p-8 sm:!p-12 bg-brand-gradient text-white !border-0 overflow-hidden relative">
        <div class="grid lg:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <Badge tone="neutral" class="!bg-white/15 !text-white mb-4">Gamificação</Badge>
            <h2 class="text-3xl font-extrabold">Estudar também pode ser uma jornada de conquistas</h2>
            <p class="opacity-90 mt-3 max-w-md">
              XP, níveis, medalhas, sequência de estudos e metas mantêm o aluno engajado e motivado a evoluir todos os dias.
            </p>
          </div>
          <div class="flex flex-wrap gap-3">
            <div class="bg-white/15 rounded-control px-4 py-3 flex items-center gap-2 text-sm font-semibold">
              <Zap class="w-4 h-4" /> Nível 12 · 3.420 XP
            </div>
            <div class="bg-white/15 rounded-control px-4 py-3 flex items-center gap-2 text-sm font-semibold">
              <Trophy class="w-4 h-4" /> 18 dias de sequência
            </div>
            <div class="bg-white/15 rounded-control px-4 py-3 flex items-center gap-2 text-sm font-semibold">
              <Star class="w-4 h-4" /> 12 medalhas desbloqueadas
            </div>
          </div>
        </div>
      </Card>
    </section>

    <!-- Depoimentos -->
    <section id="depoimentos" class="bg-white border-y border-border">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-3xl font-extrabold text-ink-900">Quem usa, recomenda</h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card v-for="t in testimonials" :key="t.nome">
            <div class="flex gap-1 text-warning mb-3">
              <Star v-for="n in 5" :key="n" class="w-4 h-4 fill-current" />
            </div>
            <p class="text-sm text-ink-700">"{{ t.texto }}"</p>
            <div class="flex items-center gap-3 mt-5">
              <div class="w-9 h-9 rounded-full bg-brand-gradient flex items-center justify-center text-white text-xs font-bold shrink-0">
                {{ t.nome.split(' ').slice(0, 2).map((n) => n[0]).join('') }}
              </div>
              <div>
                <p class="text-sm font-semibold text-ink-900">{{ t.nome }}</p>
                <p class="text-xs text-ink-500">{{ t.cargo }}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="max-w-[800px] mx-auto px-4 sm:px-6 py-20">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-extrabold text-ink-900">Perguntas frequentes</h2>
      </div>
      <div class="space-y-3">
        <Card v-for="(f, i) in faqs" :key="f.pergunta" :padded="false" class="!p-0 overflow-hidden">
          <button class="w-full flex items-center justify-between gap-4 p-5 text-left" @click="toggleFaq(i)">
            <span class="font-semibold text-ink-900">{{ f.pergunta }}</span>
            <ChevronDown class="w-5 h-5 text-ink-500 shrink-0 transition-transform" :class="openFaq === i && 'rotate-180'" />
          </button>
          <div v-show="openFaq === i" class="px-5 pb-5 text-sm text-ink-500">{{ f.resposta }}</div>
        </Card>
      </div>
    </section>

    <!-- CTA final -->
    <section class="max-w-[1200px] mx-auto px-4 sm:px-6 pb-20">
      <Card class="!p-10 text-center bg-primary-50 !border-primary-100">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-ink-900">Pronto para organizar a vida acadêmica da sua instituição?</h2>
        <p class="text-ink-500 mt-2">Comece agora e veja o SGA+ em ação.</p>
        <div class="flex flex-wrap items-center justify-center gap-3 mt-6">
          <router-link to="/login">
            <Button variant="primary" size="lg" :icon="ArrowRight" icon-position="right">Solicitar Demonstração</Button>
          </router-link>
        </div>
      </Card>
    </section>

    <!-- Footer -->
    <footer class="bg-white border-t border-border">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <div class="w-8 h-8 rounded-control bg-brand-gradient flex items-center justify-center">
              <Sparkles class="w-4 h-4 text-white" />
            </div>
            <span class="font-bold">SGA+</span>
          </div>
          <p class="text-sm text-ink-500">Sistema de Gerenciamento Acadêmico Inteligente para escolas e instituições de ensino.</p>
        </div>
        <div>
          <p class="font-semibold text-sm text-ink-900 mb-3">Produto</p>
          <ul class="space-y-2 text-sm text-ink-500">
            <li><a href="#beneficios" class="hover:text-ink-900 transition-soft">Benefícios</a></li>
            <li><a href="#funcionalidades" class="hover:text-ink-900 transition-soft">Funcionalidades</a></li>
            <li><a href="#faq" class="hover:text-ink-900 transition-soft">FAQ</a></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-sm text-ink-900 mb-3">Instituição</p>
          <ul class="space-y-2 text-sm text-ink-500">
            <li><a href="#" class="hover:text-ink-900 transition-soft">Sobre nós</a></li>
            <li><a href="#" class="hover:text-ink-900 transition-soft">Contato</a></li>
            <li><a href="#" class="hover:text-ink-900 transition-soft">Carreiras</a></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-sm text-ink-900 mb-3">Legal</p>
          <ul class="space-y-2 text-sm text-ink-500">
            <li><a href="#" class="hover:text-ink-900 transition-soft">Termos de uso</a></li>
            <li><a href="#" class="hover:text-ink-900 transition-soft">Privacidade</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-border py-5 text-center text-xs text-ink-500">
        © 2026 SGA+. Todos os direitos reservados.
      </div>
    </footer>
  </div>
</template>
