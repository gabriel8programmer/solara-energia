<template>
  <section id="diferenciais" class="diffs-section">
    <div class="container diffs-grid">
      <!-- Coluna da Esquerda: Textos e Diferenciais -->
      <div class="diffs-info reveal">
        <span class="eyebrow">
          <span class="dot"></span>
          Nossos diferenciais
        </span>

        <h2 class="diffs-title">
          Tecnologia, engenharia e suporte — do início ao fim.
        </h2>

        <p class="diffs-lead">
          Na Solara, cada projeto é tratado como único. Você tem contato direto com engenheiros, materiais com garantia estendida e monitoramento em tempo real.
        </p>

        <div class="diffs-list">
          <div
            v-for="(diff, index) in differentials"
            :key="index"
            class="diff-item"
          >
            <div class="diff-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </div>
            <div class="diff-txt">
              <h4>{{ diff.title }}</h4>
              <p>{{ diff.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Coluna da Direita: Imagem com Badge Dinâmico -->
      <div class="diffs-visual reveal">
        <img
          src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=80"
          alt="Equipe de engenheiros especializados instalando módulos fotovoltaicos"
          width="500"
          height="550"
          loading="lazy"
          decoding="async"
        />

        <div class="diffs-badge">
          <span class="status-dot"></span>
          <span class="status-txt">Sistema ativo • gerando 98%</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { differentials } from '@/data/content.js'
</script>

<style scoped>
.diffs-section {
  background: var(--bg);
}

.diffs-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 56px;
  align-items: center;
}

.diffs-title {
  font-size: clamp(28px, 3.6vw, 40px);
  margin-bottom: 20px;
}

.diffs-lead {
  color: var(--muted);
  font-size: 17px;
  line-height: 1.65;
  margin-bottom: 32px;
}

.diffs-list {
  display: grid;
  gap: 20px;
}

.diff-item {
  display: flex;
  gap: 16px;
  padding: 18px 20px;
  border-radius: 14px;
  background: var(--white);
  border: 1px solid var(--line);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.diff-item:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-sm);
}

.diff-check {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--yellow-soft);
  color: var(--yellow-dark);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.diff-check svg {
  width: 18px;
  height: 18px;
}

.diff-txt h4 {
  font-size: 16px;
  margin-bottom: 4px;
  color: var(--blue);
}

.diff-txt p {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.5;
}

.diffs-visual {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 4 / 4.4;
  box-shadow: var(--shadow-lg);
}

.diffs-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.diffs-visual:hover img {
  transform: scale(1.03);
}

.diffs-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-radius: 14px;
  padding: 12px 18px;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.25);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.4); }
  70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
  100% { box-shadow: 0 0 0 2px rgba(34, 197, 94, 0); }
}

.status-txt {
  font-size: 13.5px;
  font-weight: 700;
  color: var(--blue);
}

@media (max-width: 1024px) {
  .diffs-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .diffs-visual {
    aspect-ratio: 4 / 3.2;
    max-width: 650px;
    margin: 0 auto;
    width: 100%;
  }
}
</style>
