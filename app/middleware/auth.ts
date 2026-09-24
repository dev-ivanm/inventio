import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()

  if (import.meta.client && !authStore.user) {
    authStore.initAuth()
  }

  // Ti umno a ruta ket /auth/login
  if (!authStore.isAuthenticated && to.path !== '/auth/login') {
    return navigateTo('/auth/login')
  }

  if (authStore.isAuthenticated && to.path === '/auth/login') {
    return navigateTo('/')
  }
})