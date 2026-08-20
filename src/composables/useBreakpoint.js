import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Retorna `isMobile` reativo (true quando a viewport é menor que 1024px),
 * usado para alternar a sidebar entre modo fixo e menu hambúrguer.
 */
export function useBreakpoint(breakpointPx = 1024) {
  const isMobile = ref(window.innerWidth < breakpointPx)

  function handleResize() {
    isMobile.value = window.innerWidth < breakpointPx
  }

  onMounted(() => window.addEventListener('resize', handleResize))
  onUnmounted(() => window.removeEventListener('resize', handleResize))

  return { isMobile }
}
