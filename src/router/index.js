import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

// NOTA: por enquanto apenas o perfil "Aluno" está implementado.
// Os demais perfis (Professor, Responsável, Gestor Escolar) seguem essa
// mesma convenção e serão adicionados nas próximas etapas, apenas
// registrando novas entradas no array `routes` abaixo (ex: /professor, /gestor...).

const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('@/pages/Landing.vue'),
    meta: { title: 'SGA+ — Sistema de Gerenciamento Acadêmico Inteligente' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login.vue'),
    meta: { title: 'Entrar' }
  },
  {
    path: '/aluno',
    component: DashboardLayout,
    meta: { role: 'aluno' },
    children: [
      {
        path: '',
        redirect: { name: 'aluno-dashboard' }
      },
      {
        path: 'dashboard',
        name: 'aluno-dashboard',
        component: () => import('@/pages/student/Dashboard.vue'),
        meta: { title: 'Meu Painel', breadcrumb: ['Início'] }
      },
      {
        path: 'materias',
        name: 'aluno-materias',
        component: () => import('@/pages/student/Subjects.vue'),
        meta: { title: 'Minhas Matérias', breadcrumb: ['Início', 'Minhas Matérias'] }
      },
      {
        path: 'materias/:id',
        name: 'aluno-materia-detalhe',
        component: () => import('@/pages/student/SubjectDetail.vue'),
        meta: { title: 'Disciplina', breadcrumb: ['Início', 'Minhas Matérias', 'Disciplina'] }
      },
      {
        path: 'calendario',
        name: 'aluno-calendario',
        component: () => import('@/pages/Placeholder.vue'),
        props: { title: 'Calendário Inteligente', description: 'Visualização por mês, semana e agenda com filtros por categoria — em desenvolvimento.' },
        meta: { title: 'Calendário', breadcrumb: ['Início', 'Calendário'] }
      },
      {
        path: 'tarefas',
        name: 'aluno-tarefas',
        component: () => import('@/pages/Placeholder.vue'),
        props: { title: 'Tarefas', description: 'Organização de tarefas por status (Pendente, Hoje, Em andamento, Concluída, Atrasada) — em desenvolvimento.' },
        meta: { title: 'Tarefas', breadcrumb: ['Início', 'Tarefas'] }
      },
      {
        path: 'notificacoes',
        name: 'aluno-notificacoes',
        component: () => import('@/pages/Placeholder.vue'),
        props: { title: 'Central de Notificações', description: 'Notificações organizadas por categoria e prioridade — em desenvolvimento.' },
        meta: { title: 'Notificações', breadcrumb: ['Início', 'Notificações'] }
      },
      {
        path: 'comunicacao',
        name: 'aluno-comunicacao',
        component: () => import('@/pages/Placeholder.vue'),
        props: { title: 'Comunicação Escolar', description: 'Mural de anúncios, mensagens e comunicados — em desenvolvimento.' },
        meta: { title: 'Comunicação', breadcrumb: ['Início', 'Comunicação'] }
      },
      {
        path: 'conquistas',
        name: 'aluno-conquistas',
        component: () => import('@/pages/Placeholder.vue'),
        props: { title: 'Conquistas', description: 'Todas as medalhas desbloqueadas e futuras — em desenvolvimento.' },
        meta: { title: 'Conquistas', breadcrumb: ['Início', 'Conquistas'] }
      },
      {
        path: 'inteligencia',
        name: 'aluno-inteligencia',
        component: () => import('@/pages/Placeholder.vue'),
        props: { title: 'Inteligência Acadêmica', description: 'Alunos em risco, tendências e recomendações de intervenção — em desenvolvimento.' },
        meta: { title: 'Inteligência Acadêmica', breadcrumb: ['Início', 'Inteligência Acadêmica'] }
      },
      {
        path: 'perfil',
        name: 'aluno-perfil',
        component: () => import('@/pages/student/Profile.vue'),
        meta: { title: 'Meu Perfil', breadcrumb: ['Início', 'Meu Perfil'] }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  if (to.meta?.title) document.title = `${to.meta.title} · SGA+`
})

export default router
