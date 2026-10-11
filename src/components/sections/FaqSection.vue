<template>
  <section id="faq" class="faq-section">
    <div class="container">
      <SectionHeader
        eyebrow="Perguntas frequentes"
        title="Ainda tem dúvidas? A gente responde."
        subtitle="Reunimos as perguntas mais comuns de quem está começando a investir em energia solar."
      />

      <div class="faq-list">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="faq-item reveal"
          :class="{ 'is-open': openIndex === index }"
        >
          <button
            type="button"
            class="faq-question"
            :aria-expanded="openIndex === index"
            :aria-controls="`faq-answer-${index}`"
            @click="toggleItem(index)"
          >
            <span>{{ faq.question }}</span>
            <span class="plus-icon" aria-hidden="true">+</span>
          </button>

          <div
            :id="`faq-answer-${index}`"
            class="faq-answer-wrapper"
            role="region"
            :aria-hidden="openIndex !== index"
          >
            <div class="faq-answer-inner">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import { faqs } from '@/data/content.js'

const openIndex = ref(0) // Primeiro item aberto por padrão para convite visual

function toggleItem(index) {
  if (openIndex.value === index) {
    openIndex.value = null
  } else {
    openIndex.value = index
  }
}
</script>

<style scoped>
.faq-section {
  background: var(--white);
}

.faq-list {
  max-width: 820px;
  margin: 0 auto;
  display: grid;
  gap: 14px;
}

.faq-item {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--white);
  overflow: hidden;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.faq-item.is-open {
  border-color: var(--yellow-dark);
  box-shadow: 0 8px 24px rgba(255, 201, 60, 0.18);
}

.faq-question {
  width: 100%;
  background: none;
  border: 0;
  text-align: left;
  padding: 22px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
  font-family: var(--font-head);
  font-size: 16.5px;
  font-weight: 700;
  color: var(--blue);
  transition: color var(--transition-fast);
}

.faq-question:hover {
  color: var(--blue-2);
}

.plus-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--yellow-soft);
  color: var(--yellow-dark);
  display: grid;
  place-items: center;
  flex-shrink: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), background var(--transition-fast), color var(--transition-fast);
}

.faq-item.is-open .plus-icon {
  transform: rotate(45deg);
  background: var(--yellow);
  color: var(--blue);
}

.faq-answer-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-item.is-open .faq-answer-wrapper {
  grid-template-rows: 1fr;
}

.faq-answer-inner {
  overflow: hidden;
}

.faq-answer-inner p {
  padding: 0 24px 24px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.65;
}

@media (max-width: 640px) {
  .faq-question {
    padding: 18px 18px;
    font-size: 15.5px;
  }
  .faq-answer-inner p {
    padding: 0 18px 20px;
    font-size: 14.5px;
  }
}
</style>
