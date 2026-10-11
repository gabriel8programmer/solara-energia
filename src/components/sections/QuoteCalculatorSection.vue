<template>
  <section id="orcamento" class="quote-section">
    <div class="container quote-grid">
      <!-- Coluna Esquerda: Proposta de Valor & Simulador Dinâmico -->
      <div class="quote-info reveal">
        <span class="eyebrow on-dark">
          <span class="dot"></span>
          Orçamento gratuito
        </span>

        <h2 class="quote-title">
          Descubra em 2 minutos quanto você pode economizar.
        </h2>

        <p class="quote-lead">
          Preencha o formulário e receba uma simulação personalizada com base na sua conta de luz. Sem compromisso, sem enrolação.
        </p>

        <!-- Perks / Vantagens -->
        <ul class="quote-perks">
          <li v-for="(perk, index) in quotePerks" :key="index">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
            <span>{{ perk }}</span>
          </li>
        </ul>

        <!-- Painel de Prévia da Economia Interativa -->
        <div class="estimate-preview-box">
          <div class="preview-header">
            <span class="preview-badge">Estimativa ao Vivo</span>
            <span class="preview-category">{{ form.valorConta }}</span>
          </div>

          <div class="preview-numbers">
            <div class="preview-item">
              <span class="preview-val">R$ {{ currentEstimate.monthlySavings.toLocaleString('pt-BR') }}</span>
              <span class="preview-lbl">Economia média / mês</span>
            </div>
            <div class="preview-item">
              <span class="preview-val">R$ {{ yearlySavings.toLocaleString('pt-BR') }}</span>
              <span class="preview-lbl">Economia anual estimada</span>
            </div>
            <div class="preview-item">
              <span class="preview-val">~{{ currentEstimate.panels }} placas</span>
              <span class="preview-lbl">Módulos sugeridos</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Coluna Direita: Formulário de Simulação -->
      <div class="form-card reveal">
        <h3 class="form-title">Solicite sua simulação</h3>
        <p class="form-sub">Responderemos em até 1 dia útil com sua proposta personalizada.</p>

        <form @submit.prevent="handleSubmit" novalidate>
          <div class="form-row">
            <div class="field">
              <label for="nome">Nome completo *</label>
              <input
                id="nome"
                v-model="form.nome"
                type="text"
                placeholder="Como podemos te chamar?"
                required
                :class="{ 'is-invalid': touched.nome && !form.nome }"
                @blur="touched.nome = true"
              />
              <span v-if="touched.nome && !form.nome" class="field-error">Por favor, informe seu nome</span>
            </div>

            <div class="field">
              <label for="tel">WhatsApp *</label>
              <input
                id="tel"
                v-model="form.tel"
                type="tel"
                placeholder="(11) 99999-9999"
                required
                :class="{ 'is-invalid': touched.tel && !form.tel }"
                @blur="touched.tel = true"
              />
              <span v-if="touched.tel && !form.tel" class="field-error">Por favor, informe seu telefone</span>
            </div>
          </div>

          <div class="form-row">
            <div class="field">
              <label for="email">E-mail *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="seu@email.com"
                required
                :class="{ 'is-invalid': touched.email && (!form.email || !isValidEmail) }"
                @blur="touched.email = true"
              />
              <span v-if="touched.email && (!form.email || !isValidEmail)" class="field-error">E-mail válido é obrigatório</span>
            </div>

            <div class="field">
              <label for="valor">Valor médio da conta de luz *</label>
              <select
                id="valor"
                v-model="form.valorConta"
                required
                @change="onRangeChange"
              >
                <option value="Até R$ 300">Até R$ 300</option>
                <option value="R$ 300 a R$ 600">R$ 300 a R$ 600</option>
                <option value="R$ 600 a R$ 1.200">R$ 600 a R$ 1.200</option>
                <option value="R$ 1.200 a R$ 3.000">R$ 1.200 a R$ 3.000</option>
                <option value="Acima de R$ 3.000">Acima de R$ 3.000</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label for="tipo">Tipo de imóvel *</label>
            <select id="tipo" v-model="form.tipoImovel" required>
              <option value="Residência">Residência</option>
              <option value="Comércio">Comércio</option>
              <option value="Pequena indústria">Pequena indústria</option>
              <option value="Propriedade rural">Propriedade rural</option>
            </select>
          </div>

          <div class="field">
            <label for="msg">Mensagem (opcional)</label>
            <textarea
              id="msg"
              v-model="form.mensagem"
              placeholder="Conte um pouco sobre seu projeto ou cidade..."
            ></textarea>
          </div>

          <BaseButton
            type="submit"
            variant="primary"
            block
            size="lg"
            :loading="isSubmitting"
          >
            Quero minha simulação
            <template #append>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </template>
          </BaseButton>

          <p class="form-note">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            Seus dados estão protegidos. Não enviamos spam.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { quotePerks } from '@/data/content.js'
import { useCalculator } from '@/composables/useCalculator.js'

const emit = defineEmits(['form-submitted'])

const { selectedRange, currentEstimate, yearlySavings } = useCalculator()

const form = reactive({
  nome: '',
  tel: '',
  email: '',
  valorConta: 'R$ 600 a R$ 1.200',
  tipoImovel: 'Residência',
  mensagem: ''
})

const touched = reactive({
  nome: false,
  tel: false,
  email: false
})

const isSubmitting = ref(false)

const isValidEmail = computed(() => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
})

function onRangeChange() {
  selectedRange.value = form.valorConta
}

async function handleSubmit() {
  touched.nome = true
  touched.tel = true
  touched.email = true

  if (!form.nome || !form.tel || !form.email || !isValidEmail.value) {
    return
  }

  isSubmitting.value = true

  // Simulação de envio para API com feedback
  await new Promise((resolve) => setTimeout(resolve, 800))

  isSubmitting.value = false

  emit('form-submitted', {
    ...form,
    monthlySavings: currentEstimate.value.monthlySavings
  })

  // Reset do formulário
  form.nome = ''
  form.tel = ''
  form.email = ''
  form.mensagem = ''
  touched.nome = false
  touched.tel = false
  touched.email = false
}
</script>

<style scoped>
.quote-section {
  background:
    radial-gradient(800px 400px at 10% 10%, rgba(255, 201, 60, 0.16), transparent 60%),
    var(--blue);
  color: var(--white);
  padding: 96px 0;
}

.quote-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 56px;
  align-items: start;
}

.quote-title {
  color: var(--white);
  font-size: clamp(28px, 3.6vw, 42px);
  margin-bottom: 18px;
}

.quote-lead {
  color: rgba(255, 255, 255, 0.78);
  font-size: 17px;
  margin-bottom: 32px;
  line-height: 1.6;
}

.quote-perks {
  display: grid;
  gap: 16px;
  margin-bottom: 36px;
}

.quote-perks li {
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 15px;
}

.quote-perks li svg {
  width: 20px;
  height: 20px;
  color: var(--yellow);
  flex-shrink: 0;
}

/* Caixa de Prévia de Estimativa */
.estimate-preview-box {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 201, 60, 0.35);
  border-radius: var(--radius);
  padding: 22px;
  backdrop-filter: blur(8px);
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.preview-badge {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--yellow);
}

.preview-category {
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
}

.preview-numbers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.preview-item {
  display: flex;
  flex-direction: column;
}

.preview-val {
  font-family: var(--font-head);
  font-size: 20px;
  font-weight: 800;
  color: var(--yellow);
}

.preview-lbl {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 2px;
}

/* Card do Formulário */
.form-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 38px 34px;
  box-shadow: var(--shadow-lg);
  color: var(--ink);
}

.form-title {
  font-size: 24px;
  margin-bottom: 6px;
  color: var(--blue);
}

.form-sub {
  color: var(--muted);
  font-size: 14.5px;
  margin-bottom: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}

.field label {
  font-size: 13px;
  font-weight: 600;
  color: var(--blue);
}

.field input,
.field select,
.field textarea {
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: #F8FAFD;
  font-family: inherit;
  font-size: 14.5px;
  color: var(--ink);
  outline: none;
  transition: border-color var(--transition-fast), background var(--transition-fast), box-shadow var(--transition-fast);
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  border-color: var(--yellow);
  background: var(--white);
  box-shadow: 0 0 0 4px rgba(255, 201, 60, 0.2);
}

.field input.is-invalid {
  border-color: #EF4444;
  background: #FEF2F2;
}

.field-error {
  font-size: 11.5px;
  color: #DC2626;
  font-weight: 500;
}

.field textarea {
  resize: vertical;
  min-height: 90px;
}

.form-note {
  font-size: 12.5px;
  color: var(--muted);
  text-align: center;
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

@media (max-width: 1024px) {
  .quote-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  .form-card {
    padding: 26px 20px;
  }
  .preview-numbers {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}
</style>
