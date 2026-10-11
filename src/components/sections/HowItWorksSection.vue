<template>
  <section id="como-funciona" class="how-it-works">
    <div class="container">
      <SectionHeader
        eyebrow="Do orçamento à geração"
        title="Instalação simples, em 4 etapas."
        subtitle="Nossa equipe cuida de absolutamente tudo: do projeto ao 'liga o sistema'. Você só assina e economiza."
      />

      <div class="steps-grid">
        <div
          v-for="step in steps"
          :key="step.number"
          class="step-card reveal"
        >
          <span class="step-num">{{ step.number }}</span>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-desc">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/common/SectionHeader.vue'
import { steps } from '@/data/content.js'
</script>

<style scoped>
.how-it-works {
  background: var(--bg);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  position: relative;
}

.step-card {
  background: var(--white);
  padding: 32px 24px;
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  position: relative;
  border: 1px solid var(--line);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.step-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}

.step-num {
  font-family: var(--font-head);
  font-size: 32px;
  font-weight: 800;
  color: var(--yellow-dark);
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  background: linear-gradient(135deg, var(--yellow-dark) 0%, #D97706 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.step-title {
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--blue);
}

.step-desc {
  font-size: 14.5px;
  color: var(--muted);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 600px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }
}
</style>
