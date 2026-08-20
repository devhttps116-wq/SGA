import { defineStore } from 'pinia'

/**
 * Store responsável pelo usuário autenticado e seu perfil ativo.
 * Nesta etapa o valor é mockado; futuramente `login()` deve chamar
 * `services/api.js` e persistir o token retornado.
 */
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      id: 'u-2201',
      name: 'Beatriz Andrade',
      firstName: 'Beatriz',
      email: 'beatriz.andrade@colegiosgaplus.com.br',
      role: 'aluno',
      avatarUrl: null,
      turma: '3º Ano B — Ensino Médio'
    },
    isAuthenticated: true
  }),
  getters: {
    initials(state) {
      return state.user.name
        .split(' ')
        .slice(0, 2)
        .map((n) => n[0])
        .join('')
        .toUpperCase()
    }
  },
  actions: {
    async login(credentials) {
      // TODO: integrar com services/api.js -> POST /auth/login
      this.isAuthenticated = true
    },
    logout() {
      this.isAuthenticated = false
    }
  }
})
