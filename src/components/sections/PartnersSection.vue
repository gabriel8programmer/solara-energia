<template>
  <div class="partners">
    <div class="container">
      <div class="partners-inner">
        <span v-for="(item, index) in partnersProof" :key="index" class="partner-badge">
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { partnersProof } from '@/data/content.js'
</script>

<style scoped>
.partners {
  padding: 32px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--white);
}

.partners-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
  color: var(--muted);
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.02em;
}

.partner-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color var(--transition-fast), transform var(--transition-fast);
}

.partner-badge:hover {
  color: var(--blue);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .partners-inner {
    gap: 22px;
    font-size: 13.5px;
  }
}
</style>
