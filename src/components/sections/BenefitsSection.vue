<template>
  <section id="beneficios" class="benefits">
    <div class="container">
      <SectionHeader
        eyebrow="Por que investir em solar"
        title="Economia real, todos os meses, por décadas."
        subtitle="A energia solar deixou de ser tendência para se tornar o investimento com o melhor retorno do mercado brasileiro."
      />

      <div class="benefits-grid">
        <article
          v-for="benefit in benefits"
          :key="benefit.id"
          class="benefit-card reveal"
        >
          <div class="benefit-icon">
            <!-- Ícones SVG específicos para cada benefício -->
            <svg v-if="benefit.icon === 'dollar'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>

            <svg v-else-if="benefit.icon === 'clock'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 12a9 9 0 1 0 9-9"/><path d="M3 3v9h9"/>
            </svg>

            <svg v-else-if="benefit.icon === 'leaf'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
              <path d="M2 21c0-3 1.85-5.36 5.08-6"/>
            </svg>

            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/>
            </svg>
          </div>

          <h3 class="benefit-title">{{ benefit.title }}</h3>
          <p class="benefit-desc">{{ benefit.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/common/SectionHeader.vue'
import { benefits } from '@/data/content.js'
</script>

<style scoped>
.benefits {
  background: var(--white);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.benefit-card {
  padding: 32px 24px;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  background: var(--white);
  transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
  display: flex;
  flex-direction: column;
}

.benefit-card:hover {
  transform: translateY(-5px);
  border-color: transparent;
  box-shadow: var(--shadow);
}

.benefit-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--blue-soft);
  color: var(--blue-2);
  display: grid;
  place-items: center;
  margin-bottom: 20px;
  transition: background var(--transition-fast), color var(--transition-fast);
}

.benefit-card:hover .benefit-icon {
  background: var(--yellow-soft);
  color: var(--yellow-dark);
}

.benefit-icon svg {
  width: 26px;
  height: 26px;
}

.benefit-title {
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--blue);
}

.benefit-desc {
  font-size: 14.5px;
  color: var(--muted);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 600px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>
