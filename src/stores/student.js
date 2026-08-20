import { defineStore } from 'pinia'
import {
  statsSummary,
  gradesEvolution,
  attendanceByMonth,
  upcomingExams,
  upcomingDeliveries,
  announcements,
  achievements,
  semesterProgress,
  calendarPreview,
  subjects
} from '@/utils/mockData'

/**
 * Store com todos os dados exibidos no Dashboard do Aluno.
 * `fetchDashboard()` hoje só popula o state a partir de mocks;
 * futuramente deve chamar `services/api.js` (GET /aluno/dashboard)
 * e substituir os imports de mockData.
 */
export const useStudentStore = defineStore('student', {
  state: () => ({
    loading: false,
    stats: null,
    grades: null,
    attendance: null,
    exams: [],
    deliveries: [],
    announcements: [],
    achievements: null,
    semesterProgress: null,
    calendarPreview: [],
    subjects: [],
    subjectsLoading: false
  }),
  actions: {
    async fetchDashboard() {
      this.loading = true
      // Simula latência de rede para o skeleton loading ser visível.
      await new Promise((resolve) => setTimeout(resolve, 350))

      this.stats = statsSummary
      this.grades = gradesEvolution
      this.attendance = attendanceByMonth
      this.exams = upcomingExams
      this.deliveries = upcomingDeliveries
      this.announcements = announcements
      this.achievements = achievements
      this.semesterProgress = semesterProgress
      this.calendarPreview = calendarPreview

      this.loading = false
    },
    async fetchSubjects() {
      this.subjectsLoading = true
      await new Promise((resolve) => setTimeout(resolve, 300))
      this.subjects = subjects
      this.subjectsLoading = false
    }
  }
})
