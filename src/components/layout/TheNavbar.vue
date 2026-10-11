<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
    <div class="container nav-container">
      <!-- Logo do App -->
      <AppLogo href="#" size="md" />

      <!-- Menu Desktop -->
      <nav class="nav-menu" aria-label="Navegação Principal">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Ações do Header -->
      <div class="nav-actions">
        <BaseButton href="#orcamento" variant="outline" size="sm" class="action-ghost">
          Fale conosco
        </BaseButton>

        <BaseButton href="#orcamento" variant="primary" size="sm">
          Simular economia
          <template #append>
            <svg class="cta-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </template>
        </BaseButton>

        <!-- Botão Hambúrguer Mobile -->
        <button
          type="button"
          class="hamburger"
          :class="{ 'is-active': isMobileMenuOpen }"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Abrir ou fechar menu"
          @click="toggleMobileMenu"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer / Menu Dropdown -->
    <Transition name="drawer">
      <div v-if="isMobileMenuOpen" class="mobile-drawer" role="dialog" aria-modal="true">
        <div class="mobile-drawer-content">
          <nav class="mobile-nav" aria-label="Navegação Mobile">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="mobile-link"
              @click="closeMobileMenu"
            >
              {{ link.label }}
            </a>
          </nav>

          <div class="mobile-actions">
            <BaseButton href="#orcamento" variant="primary" block @click="closeMobileMenu">
              Simular economia
            </BaseButton>
            <BaseButton href="#orcamento" variant="outline" block @click="closeMobileMenu">
              Fale conosco
            </BaseButton>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AppLogo from '@/components/common/AppLogo.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { navLinks } from '@/data/content.js'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  updateBodyScroll()
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
  updateBodyScroll()
}

function updateBodyScroll() {
  if (typeof document !== 'undefined') {
    if (isMobileMenuOpen.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(251, 252, 254, 0.88);
  backdrop-filter: saturate(180%) blur(14px);
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  border-bottom: 1px solid var(--line);
  transition: background var(--transition-fast), box-shadow var(--transition-fast);
}

.site-header.is-scrolled {
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 4px 20px rgba(11, 42, 91, 0.05);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
  gap: 24px;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 32px;
  font-size: 15px;
  font-weight: 500;
  color: var(--ink);
}

.nav-link {
  position: relative;
  padding: 6px 0;
  transition: color var(--transition-fast);
}

.nav-link:hover {
  color: var(--blue-2);
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: var(--yellow-dark);
  border-radius: 2px;
  transition: width var(--transition-normal);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cta-arrow {
  transition: transform var(--transition-fast);
}

.btn:hover .cta-arrow {
  transform: translateX(3px);
}

/* Hambúrguer */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: #ffffff;
  cursor: pointer;
  padding: 0;
  transition: background var(--transition-fast), border-color var(--transition-fast);
}

.hamburger .bar {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--blue);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.2s ease;
}

.hamburger.is-active .bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.is-active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active .bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Drawer Mobile */
.mobile-drawer {
  position: fixed;
  top: var(--header-height);
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(11, 42, 91, 0.45);
  backdrop-filter: blur(4px);
  z-index: 99;
}

.mobile-drawer-content {
  background: #ffffff;
  padding: 24px;
  border-bottom: 1px solid var(--line);
  box-shadow: 0 16px 36px rgba(11, 42, 91, 0.12);
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mobile-link {
  font-size: 17px;
  font-weight: 600;
  color: var(--blue);
  padding: 8px 0;
  border-bottom: 1px solid var(--line);
}

.mobile-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Transições Drawer */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.25s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

/* Responsividade */
@media (max-width: 900px) {
  .nav-menu {
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .nav-menu,
  .action-ghost {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
</style>
