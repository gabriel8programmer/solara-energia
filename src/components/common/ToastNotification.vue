<template>
  <Transition name="toast">
    <div v-if="modelValue" class="toast-card" role="alert" aria-live="polite">
      <div class="toast-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6 9 17l-5-5"/>
        </svg>
      </div>
      <div class="toast-content">
        <h4 class="toast-title">{{ title }}</h4>
        <p class="toast-message">{{ message }}</p>
      </div>
      <button type="button" class="toast-close" @click="$emit('update:modelValue', false)" aria-label="Fechar notificação">
        &times;
      </button>
    </div>
  </Transition>
</template>

<script setup>
import { watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Solicitação enviada com sucesso!'
  },
  message: {
    type: String,
    default: 'Em breve um especialista da Solara Energia entrará em contato.'
  },
  duration: {
    type: Number,
    default: 5000
  }
})

const emit = defineEmits(['update:modelValue'])

let timer = null

watch(() => props.modelValue, (val) => {
  if (timer) clearTimeout(timer)
  if (val && props.duration > 0) {
    timer = setTimeout(() => {
      emit('update:modelValue', false)
    }, props.duration)
  }
})
</script>

<style scoped>
.toast-card {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 999;
  max-width: 420px;
  background: #ffffff;
  border-radius: var(--radius);
  padding: 16px 20px;
  box-shadow: 0 16px 40px rgba(11, 42, 91, 0.2);
  border: 1px solid var(--line);
  border-left: 5px solid var(--success);
  display: flex;
  align-items: center;
  gap: 14px;
}

.toast-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--success-soft);
  color: var(--success);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.toast-icon svg {
  width: 20px;
  height: 20px;
}

.toast-content {
  flex: 1;
}

.toast-title {
  font-size: 14.5px;
  font-weight: 700;
  color: var(--blue);
  margin-bottom: 2px;
}

.toast-message {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.4;
}

.toast-close {
  background: transparent;
  border: none;
  font-size: 22px;
  line-height: 1;
  color: var(--muted);
  cursor: pointer;
  padding: 4px;
  transition: color var(--transition-fast);
}

.toast-close:hover {
  color: var(--ink);
}

/* Transições Vue */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.toast-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.toast-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}

@media (max-width: 480px) {
  .toast-card {
    left: 16px;
    right: 16px;
    bottom: 16px;
    max-width: none;
  }
}
</style>
