// Dados fictícios consistentes para popular o Dashboard do Aluno.
// Em produção, cada bloco abaixo corresponde a um endpoint em services/api.js.

export const statsSummary = {
  mediaGeral: { valor: 8.7, variacao: +0.3, periodo: 'vs. bimestre anterior' },
  frequencia: { valor: 96, variacao: +1.2, periodo: 'vs. bimestre anterior' },
  atividadesPendentes: { valor: 4, variacao: -2, periodo: 'vs. semana anterior' },
  proximaAvaliacao: { disciplina: 'Matemática', dias: 3, data: '23/08' }
}

export const gradesEvolution = {
  labels: ['Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
  datasets: [
    { label: 'Matemática', data: [7.2, 7.5, 7.8, 8.0, 8.4, 8.6, 8.9] },
    { label: 'Português', data: [8.0, 8.1, 7.9, 8.3, 8.5, 8.6, 8.8] },
    { label: 'Ciências', data: [6.8, 7.0, 7.4, 7.6, 8.0, 8.2, 8.5] }
  ]
}

export const attendanceByMonth = {
  labels: ['Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
  data: [98, 95, 94, 97, 96, 93, 96]
}

export const upcomingExams = [
  { id: 'ex-1', disciplina: 'Matemática', tema: 'Funções Quadráticas', data: '23/08', hora: '08:00', professor: 'João Neto' },
  { id: 'ex-2', disciplina: 'Física', tema: 'Leis de Newton', data: '27/08', hora: '10:00', professor: 'Renata Oliveira' },
  { id: 'ex-3', disciplina: 'História', tema: 'Guerra Fria', data: '02/09', hora: '08:00', professor: 'Carlos Prado' }
]

export const upcomingDeliveries = [
  { id: 'dv-1', disciplina: 'Português', titulo: 'Redação dissertativa', prazo: '21/08', status: 'pendente' },
  { id: 'dv-2', disciplina: 'Química', titulo: 'Relatório de laboratório', prazo: '24/08', status: 'em-andamento' },
  { id: 'dv-3', disciplina: 'Geografia', titulo: 'Mapa temático', prazo: '29/08', status: 'pendente' }
]

export const announcements = [
  {
    id: 'an-1',
    autor: 'Coordenação Pedagógica',
    titulo: 'Semana de provas bimestrais',
    resumo: 'Confira o calendário atualizado das avaliações do 3º bimestre.',
    horario: 'Há 2 horas',
    categoria: 'aviso'
  },
  {
    id: 'an-2',
    autor: 'Prof. Renata Oliveira · Física',
    titulo: 'Material de revisão disponível',
    resumo: 'Slides da aula sobre Leis de Newton já estão na aba de Materiais.',
    horario: 'Há 5 horas',
    categoria: 'material'
  },
  {
    id: 'an-3',
    autor: 'Secretaria',
    titulo: 'Atualização cadastral',
    resumo: 'Responsáveis devem confirmar dados de contato até 30/08.',
    horario: 'Ontem',
    categoria: 'aviso'
  }
]

export const achievements = {
  xpAtual: 3420,
  xpProximoNivel: 4000,
  nivel: 12,
  sequenciaDias: 18,
  ranking: [
    { posicao: 1, nome: 'Beatriz Andrade', xp: 3420, voce: true },
    { posicao: 2, nome: 'Lucas Farias', xp: 3310 },
    { posicao: 3, nome: 'Ana Beatriz Souza', xp: 3185 },
    { posicao: 4, nome: 'Pedro Henrique Lima', xp: 3040 }
  ],
  medalhasRecentes: [
    { id: 'md-1', nome: 'Presença Perfeita', descricao: '30 dias sem faltas', icone: 'award' },
    { id: 'md-2', nome: 'Nota Máxima', descricao: 'Tirou 10 em Física', icone: 'star' },
    { id: 'md-3', nome: 'Sequência de Ouro', descricao: '15 dias seguidos de estudo', icone: 'flame' }
  ]
}

export const semesterProgress = {
  percentual: 68,
  bimestreAtual: 3,
  totalBimestres: 4,
  diasRestantes: 42
}

export const subjects = [
  {
    id: 'mat',
    nome: 'Matemática',
    professor: 'João Neto',
    media: 8.9,
    frequencia: 96,
    progresso: 72,
    proximaAtividade: 'Prova · Funções Quadráticas · 23/08'
  },
  {
    id: 'por',
    nome: 'Português',
    professor: 'Isabela Martins',
    media: 8.8,
    frequencia: 98,
    progresso: 65,
    proximaAtividade: 'Entrega · Redação dissertativa · 21/08'
  },
  {
    id: 'cie',
    nome: 'Ciências',
    professor: 'Renata Oliveira',
    media: 8.5,
    frequencia: 94,
    progresso: 58,
    proximaAtividade: 'Aula · Leis de Newton · 25/08'
  },
  {
    id: 'his',
    nome: 'História',
    professor: 'Carlos Prado',
    media: 8.2,
    frequencia: 95,
    progresso: 70,
    proximaAtividade: 'Prova · Guerra Fria · 02/09'
  },
  {
    id: 'geo',
    nome: 'Geografia',
    professor: 'Fernanda Lima',
    media: 8.4,
    frequencia: 93,
    progresso: 61,
    proximaAtividade: 'Entrega · Mapa temático · 29/08'
  },
  {
    id: 'qui',
    nome: 'Química',
    professor: 'Marcos Vinícius',
    media: 7.9,
    frequencia: 91,
    progresso: 54,
    proximaAtividade: 'Entrega · Relatório de laboratório · 24/08'
  }
]

export const calendarPreview = [
  { id: 'cal-1', dia: 21, mes: 'Ago', titulo: 'Entrega: Redação', tipo: 'trabalho' },
  { id: 'cal-2', dia: 23, mes: 'Ago', titulo: 'Prova de Matemática', tipo: 'prova' },
  { id: 'cal-3', dia: 25, mes: 'Ago', titulo: 'Reunião de pais', tipo: 'reuniao' },
  { id: 'cal-4', dia: 27, mes: 'Ago', titulo: 'Prova de Física', tipo: 'prova' }
]
