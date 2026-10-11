<template>
  <section id="servicos" class="services">
    <div class="container">
      <SectionHeader
        eyebrow="Nossas soluções"
        title="Energia solar para cada tipo de projeto."
        subtitle="Atendemos residências, comércios, indústrias e propriedades rurais com o mesmo padrão de excelência."
        onDark
      />

      <div class="services-grid">
        <article
          v-for="service in services"
          :key="service.id"
          class="service-card reveal"
        >
          <div class="service-icon">
            <!-- Ícone dinâmico por serviço -->
            <svg v-if="service.icon === 'home'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>
            </svg>

            <svg v-else-if="service.icon === 'building'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>
            </svg>

            <svg v-else-if="service.icon === 'factory'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 20h20M4 20V8l6-4v16M14 20V12l6-4v12"/>
            </svg>

            <svg v-else-if="service.icon === 'sun'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07"/>
            </svg>

            <svg v-else-if="service.icon === 'battery'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>

            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 15l2 2 4-4"/>
            </svg>
          </div>

          <span class="service-category">{{ service.category }}</span>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-desc">{{ service.description }}</p>

          <a href="#orcamento" class="service-link">
            Solicitar proposta
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/common/SectionHeader.vue'
import { services } from '@/data/content.js'
</script>

<style scoped>
.services {
  background: var(--blue);
  color: var(--white);
  padding: 96px 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.service-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius);
  padding: 34px 28px;
  transition: all var(--transition-normal);
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  background: rgba(255, 255, 255, 0.09);
  border-color: rgba(255, 201, 60, 0.5);
  transform: translateY(-5px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.25);
}

.service-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--yellow);
  color: var(--blue);
  display: grid;
  place-items: center;
  margin-bottom: 20px;
  transition: transform var(--transition-fast);
}

.service-card:hover .service-icon {
  transform: scale(1.08) rotate(3deg);
}

.service-icon svg {
  width: 26px;
  height: 26px;
}

.service-category {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--yellow);
  margin-bottom: 6px;
  display: inline-block;
}

.service-title {
  color: var(--white);
  font-size: 20px;
  margin-bottom: 10px;
}

.service-desc {
  color: rgba(255, 255, 255, 0.72);
  font-size: 14.5px;
  line-height: 1.6;
  margin-bottom: 22px;
  flex: 1;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--yellow);
  font-weight: 600;
  font-size: 14.5px;
  margin-top: auto;
}

.service-link svg {
  width: 15px;
  height: 15px;
  transition: transform var(--transition-fast);
}

.service-link:hover svg {
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 640px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
