<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Coluna da Marca -->
        <div class="footer-brand">
          <AppLogo href="#" theme="light" size="md" />
          <p class="brand-desc">
            Energia solar de verdade, feita por quem entende. Projetos residenciais, comerciais e industriais em todo o Brasil.
          </p>

          <!-- Redes Sociais -->
          <div class="footer-social" aria-label="Redes sociais da Solara Energia">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga-nos no Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/>
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Curta nossa página no Facebook"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conecte-se conosco no LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Coluna Empresa -->
        <div class="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#beneficios">Sobre a Solara</a></li>
            <li><a href="#servicos">Soluções</a></li>
            <li><a href="#diferenciais">Diferenciais</a></li>
            <li><a href="#como-funciona">Processo de Instalação</a></li>
          </ul>
        </div>

        <!-- Coluna Suporte -->
        <div class="footer-col">
          <h4>Suporte</h4>
          <ul>
            <li><a href="#faq">Central de dúvidas</a></li>
            <li><a href="#orcamento">Solicitar orçamento</a></li>
            <li><a href="#orcamento">Simulador de Economia</a></li>
            <li><a href="#orcamento">Canal de Atendimento</a></li>
          </ul>
        </div>

        <!-- Coluna Contato -->
        <div class="footer-col">
          <h4>Contato</h4>
          <ul class="contact-list">
            <li>
              <strong>Telefone:</strong>
              <a :href="`tel:${siteInfo.phone.replace(/\D/g, '')}`">{{ siteInfo.phone }}</a>
            </li>
            <li>
              <strong>E-mail:</strong>
              <a :href="`mailto:${siteInfo.email}`">{{ siteInfo.email }}</a>
            </li>
            <li>
              <strong>Endereço:</strong>
              <span>{{ siteInfo.address }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Barra Inferior -->
      <div class="footer-bottom">
        <span>© {{ siteInfo.year }} {{ siteInfo.name }}. Todos os direitos reservados. CNPJ {{ siteInfo.cnpj }}.</span>
        <div class="legal-links">
          <a href="#">Política de Privacidade</a>
          <span class="sep">·</span>
          <a href="#">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import AppLogo from '@/components/common/AppLogo.vue'
import { siteInfo } from '@/data/content.js'
</script>

<style scoped>
.site-footer {
  background: var(--blue-dark);
  color: rgba(255, 255, 255, 0.72);
  padding: 68px 0 32px;
  font-size: 14.5px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.brand-desc {
  max-width: 330px;
  margin: 18px 0 22px;
  line-height: 1.6;
}

.footer-social {
  display: flex;
  gap: 12px;
}

.footer-social a {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.07);
  display: grid;
  place-items: center;
  color: #ffffff;
  transition: all var(--transition-fast);
}

.footer-social a:hover {
  background: var(--yellow);
  color: var(--blue);
  transform: translateY(-2px);
}

.footer-social svg {
  width: 18px;
  height: 18px;
}

.footer-col h4 {
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 18px;
}

.footer-col ul {
  display: grid;
  gap: 12px;
}

.footer-col a {
  color: rgba(255, 255, 255, 0.72);
  transition: color var(--transition-fast);
}

.footer-col a:hover {
  color: var(--yellow);
}

.contact-list li {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contact-list strong {
  color: rgba(255, 255, 255, 0.9);
  font-size: 13px;
}

.footer-bottom {
  padding-top: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.5);
}

.legal-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legal-links a {
  color: inherit;
}

.legal-links a:hover {
  color: var(--yellow);
}

.sep {
  opacity: 0.6;
}

/* Responsividade */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 36px;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-bottom: 32px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
}
</style>
