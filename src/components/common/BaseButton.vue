<template>
  <component
    :is="componentTag"
    :href="href"
    :type="isButton ? type : undefined"
    class="btn"
    :class="[
      `btn-${variant}`,
      size ? `btn-${size}` : '',
      { 'is-loading': loading, 'is-block': block }
    ]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="spinner" aria-hidden="true"></span>
    <slot name="prepend"></slot>
    <span class="btn-label"><slot></slot></span>
    <slot name="append"></slot>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // 'primary' | 'outline' | 'ghost-light'
    validator: (v) => ['primary', 'outline', 'ghost-light'].includes(v)
  },
  size: {
    type: String,
    default: 'md', // 'sm' | 'md' | 'lg'
    validator: (v) => ['sm', 'md', 'lg'].includes(v)
  },
  href: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])

const isButton = computed(() => !props.href)
const componentTag = computed(() => (props.href ? 'a' : 'button'))
</script>

<style scoped>
.btn-sm {
  padding: 10px 18px;
  font-size: 13.5px;
}

.btn-md {
  padding: 14px 26px;
  font-size: 15px;
}

.btn-lg {
  padding: 16px 32px;
  font-size: 16.5px;
}

.is-block {
  width: 100%;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  display: inline-block;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
