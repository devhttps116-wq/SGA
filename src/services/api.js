import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000
})

// TODO: quando a autenticação real for implementada, ler o token
// (por exemplo, de stores/auth.js) e anexá-lo aqui:
// api.interceptors.request.use((config) => {
//   const token = useAuthStore().token
//   if (token) config.headers.Authorization = `Bearer ${token}`
//   return config
// })

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Ponto central para tratamento de erros (401 -> logout, 500 -> toast, etc.)
    return Promise.reject(error)
  }
)

export default api
