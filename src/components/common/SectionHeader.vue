<template>
  <div class="section-head reveal" :class="{ 'text-left': align === 'left' }">
    <span v-if="eyebrow" class="eyebrow" :class="{ 'on-dark': onDark }">
      <span class="dot"></span>
      {{ eyebrow }}
    </span>

    <component :is="tag" :style="titleStyle">
      <slot name="title">{{ title }}</slot>
    </component>

    <p v-if="subtitle || $slots.subtitle">
      <slot name="subtitle">{{ subtitle }}</slot>
    </p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  tag: {
    type: String,
    default: 'h2'
  },
  onDark: {
    type: Boolean,
    default: false
  },
  align: {
    type: String,
    default: 'center', // 'center' | 'left'
    validator: (v) => ['center', 'left'].includes(v)
  },
  titleStyle: {
    type: [Object, String],
    default: () => ({})
  }
})
</script>

<style scoped>
.text-left {
  text-align: left;
  margin-left: 0;
  margin-right: 0;
}
</style>
