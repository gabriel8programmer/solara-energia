<template>
  <div class="app-root">
    <!-- Header / Barra de Navegação -->
    <TheNavbar />

    <!-- Conteúdo Principal Semântico -->
    <main id="main-content">
      <!-- 1. Hero com destaque e estatísticas -->
      <HeroSection />

      <!-- 2. Barra de Credibilidade / Parceiros -->
      <PartnersSection />

      <!-- 3. Benefícios do Investimento Solar -->
      <BenefitsSection />

      <!-- 4. Como Funciona (Etapas) -->
      <HowItWorksSection />

      <!-- 5. Soluções e Modalidades de Atendimento -->
      <ServicesSection />

      <!-- 6. Diferenciais e Engenharia Própria -->
      <DifferentialsSection />

      <!-- 7. Números de Impacto e Resultados -->
      <StatsSection />

      <!-- 8. Perguntas Frequentes (FAQ) -->
      <FaqSection />

      <!-- 9. Simulador e Orçamento Gratuito -->
      <QuoteCalculatorSection @form-submitted="onQuoteSubmitted" />
    </main>

    <!-- Rodapé -->
    <TheFooter />

    <!-- Notificação Flutuante de Sucesso -->
    <ToastNotification
      v-model="showToast"
      :title="toastTitle"
      :message="toastMessage"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheNavbar from '@/components/layout/TheNavbar.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import PartnersSection from '@/components/sections/PartnersSection.vue'
import BenefitsSection from '@/components/sections/BenefitsSection.vue'
import HowItWorksSection from '@/components/sections/HowItWorksSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import DifferentialsSection from '@/components/sections/DifferentialsSection.vue'
import StatsSection from '@/components/sections/StatsSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import QuoteCalculatorSection from '@/components/sections/QuoteCalculatorSection.vue'
import ToastNotification from '@/components/common/ToastNotification.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

// Inicializa a animação de scroll reveal em elementos .reveal
useScrollReveal('.reveal')

// Estado do Toast Notification
const showToast = ref(false)
const toastTitle = ref('')
const toastMessage = ref('')

function onQuoteSubmitted(payload) {
  toastTitle.value = `Obrigado, ${payload.nome}!`
  toastMessage.value = `Sua simulação para economia estimada de até R$ ${payload.monthlySavings?.toLocaleString('pt-BR')}/mês foi recebida com sucesso.`
  showToast.value = true
}
</script>

<style scoped>
.app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#main-content {
  flex: 1;
}
</style>
