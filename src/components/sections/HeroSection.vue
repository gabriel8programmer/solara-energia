<template>
  <section class="hero">
    <div class="container hero-grid">
      <!-- Conteúdo Textual -->
      <div class="hero-content reveal">
        <span class="eyebrow">
          <span class="dot"></span>
          Energia solar para residências e empresas
        </span>

        <h1 class="hero-title">
          Reduza até <span class="highlight">95% da sua conta</span> de luz com energia solar.
        </h1>

        <p class="hero-lead">
          A Solara Energia projeta, instala e homologa sistemas fotovoltaicos sob medida — do telhado da sua casa à sua empresa. Sem burocracia, com garantia e retorno garantido em até 4 anos.
        </p>

        <div class="hero-ctas">
          <BaseButton href="#orcamento" variant="primary" size="lg">
            Simular minha economia
            <template #append>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </template>
          </BaseButton>

          <BaseButton href="#como-funciona" variant="outline" size="lg">
            Ver como funciona
          </BaseButton>
        </div>

        <!-- Indicadores de Confiança -->
        <div class="hero-trust">
          <div v-for="(stat, index) in heroStats" :key="index" class="trust-item">
            <span class="trust-num">{{ stat.value }}</span>
            <span class="trust-lbl">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <!-- Visual com Card Flutuante -->
      <div class="hero-visual reveal">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
          alt="Painéis solares fotovoltaicos instalados em telhado residencial moderno"
          width="600"
          height="630"
          loading="eager"
          decoding="async"
        />

        <div class="hero-card">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#F0A500" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <div class="card-txt">
            <strong>Economia média de R$ 780/mês</strong>
            <small>em residências de médio porte*</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '@/components/common/BaseButton.vue'
import { heroStats } from '@/data/content.js'
</script>

<style scoped>
.hero {
  padding: 72px 0 96px;
  background:
    radial-gradient(1200px 500px at 90% -10%, rgba(255, 201, 60, 0.20), transparent 60%),
    radial-gradient(900px 500px at -10% 20%, rgba(18, 64, 138, 0.10), transparent 60%),
    var(--bg);
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;
}

.hero-title {
  font-size: clamp(34px, 4.6vw, 56px);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 22px;
}

.hero-title .highlight {
  background: linear-gradient(180deg, transparent 62%, rgba(255, 201, 60, 0.55) 62%);
  padding: 0 4px;
  display: inline;
}

.hero-lead {
  font-size: 18px;
  color: var(--muted);
  margin-bottom: 34px;
  max-width: 540px;
  line-height: 1.65;
}

.hero-ctas {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.hero-trust {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  padding-top: 28px;
  border-top: 1px solid var(--line);
}

.trust-item {
  display: flex;
  flex-direction: column;
}

.trust-num {
  font-family: var(--font-head);
  font-size: 24px;
  font-weight: 800;
  color: var(--blue);
  line-height: 1.1;
}

.trust-lbl {
  font-size: 13px;
  color: var(--muted);
  margin-top: 3px;
}

.hero-visual {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  aspect-ratio: 4 / 4.2;
}

.hero-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.hero-visual:hover img {
  transform: scale(1.03);
}

.hero-visual::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(11, 42, 91, 0.5) 100%);
  pointer-events: none;
}

.hero-card {
  position: absolute;
  left: 20px;
  bottom: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(12px);
  border-radius: 18px;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  z-index: 2;
  box-shadow: var(--shadow);
  border: 1px solid rgba(255, 255, 255, 0.7);
  animation: float 4s ease-in-out infinite alternate;
}

@keyframes float {
  0% { transform: translateY(0px); }
  100% { transform: translateY(-6px); }
}

.card-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: var(--yellow-soft);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.card-icon svg {
  width: 24px;
  height: 24px;
}

.card-txt {
  font-size: 14px;
  line-height: 1.35;
}

.card-txt strong {
  display: block;
  color: var(--blue);
  font-family: var(--font-head);
  font-size: 15px;
  font-weight: 700;
}

.card-txt small {
  color: var(--muted);
  display: block;
  font-size: 12px;
}

@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .hero-visual {
    aspect-ratio: 4 / 3.2;
    max-width: 680px;
    margin: 0 auto;
    width: 100%;
  }
}

@media (max-width: 720px) {
  .hero {
    padding: 44px 0 64px;
  }
  .hero-ctas {
    flex-direction: column;
  }
  .hero-trust {
    gap: 20px;
  }
  .hero-card {
    padding: 14px 16px;
    left: 14px;
    right: 14px;
    bottom: 14px;
  }
}
</style>
