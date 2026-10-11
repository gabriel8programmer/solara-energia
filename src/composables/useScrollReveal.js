import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(selector = '.reveal', threshold = 0.12) {
  let observer = null

  onMounted(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold,
      rootMargin: '0px 0px -40px 0px'
    })

    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => observer.observe(el))
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })
}
