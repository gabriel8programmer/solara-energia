<template>
  <section class="stats-section">
    <div class="container">
      <SectionHeader
        eyebrow="Nosso impacto"
        title="Resultados que falam por si."
        subtitle="Mais do que instalar painéis, ajudamos milhares de famílias e empresas a mudar a relação com a energia."
      />

      <div class="stats-grid">
        <div
          v-for="(item, index) in stats"
          :key="index"
          class="stat-card reveal"
        >
          <div class="stat-number">
            {{ item.value }}<span v-if="item.unit" class="stat-unit">&nbsp;{{ item.unit }}</span>
          </div>
          <p class="stat-label">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/common/SectionHeader.vue'
import { stats } from '@/data/content.js'
</script>

<style scoped>
.stats-section {
  background: linear-gradient(135deg, #F6F9FE 0%, #FFF9E8 100%);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  text-align: center;
}

.stat-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 36px 20px;
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}

.stat-number {
  font-family: var(--font-head);
  font-size: clamp(32px, 4vw, 44px);
  font-weight: 800;
  color: var(--blue);
  line-height: 1;
  margin-bottom: 12px;
}

.stat-unit {
  color: var(--yellow-dark);
  font-size: 0.85em;
}

.stat-label {
  font-size: 14.5px;
  color: var(--muted);
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
