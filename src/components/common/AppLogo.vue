<template>
  <a :href="href" class="logo" :class="[sizeClass, themeClass]" :aria-label="ariaLabel">
    <span class="logo-mark">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="logo-icon"
      >
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="2.2" />
        <path
          d="M12 1.8v2.4M12 19.8v2.4M1.8 12h2.4M19.8 12h2.4M4.79 4.79l1.7 1.7M17.51 17.51l1.7 1.7M4.79 19.21l1.7-1.7M17.51 6.49l1.7-1.7"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linecap="round"
        />
        <!-- Mini painel solar interno no núcleo -->
        <path d="M10.2 12h3.6M12 10.2v3.6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
      </svg>
    </span>

    <span v-if="!compact" class="logo-text">
      Solara<small class="logo-suffix">&nbsp;Energia</small>
    </span>
  </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: '#'
  },
  theme: {
    type: String,
    default: 'default', // 'default' | 'light'
    validator: (v) => ['default', 'light'].includes(v)
  },
  size: {
    type: String,
    default: 'md', // 'sm' | 'md' | 'lg'
    validator: (v) => ['sm', 'md', 'lg'].includes(v)
  },
  compact: {
    type: Boolean,
    default: false
  }
})

const ariaLabel = computed(() => 'Solara Energia - Página Inicial')
const themeClass = computed(() => props.theme === 'light' ? 'is-light' : 'is-default')
const sizeClass = computed(() => `size-${props.size}`)
</script>

<style scoped>
.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-head);
  font-weight: 800;
  font-size: 20px;
  letter-spacing: -0.02em;
  text-decoration: none;
  transition: transform var(--transition-fast), opacity var(--transition-fast);
}

.logo:hover {
  transform: translateY(-1px);
}

.logo-mark {
  border-radius: 12px;
  background: linear-gradient(135deg, var(--yellow) 0%, var(--yellow-dark) 100%);
  display: grid;
  place-items: center;
  box-shadow: 0 6px 16px rgba(255, 201, 60, 0.45);
  position: relative;
  flex-shrink: 0;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.logo:hover .logo-mark {
  transform: rotate(5deg) scale(1.05);
  box-shadow: 0 8px 22px rgba(255, 201, 60, 0.6);
}

.logo-icon {
  width: 22px;
  height: 22px;
  color: var(--blue);
}

.logo-text {
  display: inline-flex;
  align-items: baseline;
  line-height: 1;
}

.logo-suffix {
  font-size: 0.88em;
  font-weight: 700;
  color: var(--yellow-dark);
}

/* Temas */
.is-default {
  color: var(--blue);
}

.is-light {
  color: var(--white);
}

.is-light .logo-suffix {
  color: var(--yellow);
}

/* Tamanhos */
.size-sm .logo-mark {
  width: 32px;
  height: 32px;
  border-radius: 9px;
}
.size-sm .logo-icon {
  width: 18px;
  height: 18px;
}
.size-sm {
  font-size: 17px;
}

.size-md .logo-mark {
  width: 38px;
  height: 38px;
}
.size-md .logo-icon {
  width: 22px;
  height: 22px;
}
.size-md {
  font-size: 20px;
}

.size-lg .logo-mark {
  width: 46px;
  height: 46px;
  border-radius: 14px;
}
.size-lg .logo-icon {
  width: 26px;
  height: 26px;
}
.size-lg {
  font-size: 24px;
}
</style>
