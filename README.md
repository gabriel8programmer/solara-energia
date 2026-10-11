# ☀️ Solara Energia — Aplicação Vue.js Componentizada

Aplicação web moderna, altamente responsiva e otimizada para SEO, desenvolvida em **Vue.js 3 (Composition API)** com **Vite**, baseada na interface e nos objetivos de negócio da **Solara Energia**.

---

## 🚀 Principais Características

- **Componentização Modular**: Arquitetura desacoplada dividida em componentes comuns reutilizáveis (`AppLogo`, `BaseButton`, `SectionHeader`, `ToastNotification`), layout (`TheNavbar`, `TheFooter`) e seções de domínio (`HeroSection`, `PartnersSection`, `BenefitsSection`, `HowItWorksSection`, `ServicesSection`, `DifferentialsSection`, `StatsSection`, `FaqSection`, `QuoteCalculatorSection`).
- **Identidade Visual Fictícia (Logo & Favicon)**:
  - **Favicon SVG de Alta Definição** (`public/favicon.svg`): Símbolo de sol geométrico integrado com traços de célula fotovoltaica e gradientes quentes (#FFD447 a #FFAE00) sobre base azul marinho profundo (#071A38).
  - **Componente de Logo Reutilizável** (`src/components/common/AppLogo.vue`): Suporta temas claro/escuro, tamanhos responsivos (`sm`, `md`, `lg`) e versões compactas.
  - **Assets da Marca**: `public/logo-solara.svg` e `public/og-image.svg` inclusos.
- **SEO Básico & Avançado**:
  - Metatags de título, descrição persuasiva e palavras-chave do nicho solar.
  - Canonical URL e robots configurados.
  - Open Graph e Twitter Cards completos para compartilhamento otimizado no WhatsApp, LinkedIn e redes sociais.
  - Dados estruturados **Schema.org (JSON-LD)** para `Organization` e `LocalBusiness` com avaliações, endereço e serviços.
- **Responsividade & Acessibilidade**:
  - Menu hambúrguer animado com *mobile drawer* suave e bloqueio de scroll de fundo quando aberto.
  - Grids adaptativos (Mobile: 1 coluna, Tablet: 2 colunas, Desktop: 3 ou 4 colunas).
  - Acessibilidade com tags semânticas HTML5, atributos `aria-*` e estados visíveis de foco (`:focus-visible`).
- **Interatividade & UX**:
  - **Simulador Dinâmico de Economia** (`useCalculator.js`): Calcula economia mensal, economia anual e quantidade de módulos solares em tempo real ao selecionar a faixa de conta de luz.
  - **Accordion de Perguntas Frequentes (FAQ)** fluido com transição suave.
  - **Validação de Formulário e Feedback**: Notificação toast animada ao solicitar orçamento sem recarregar a página.
  - **Scroll Reveal**: Observer de interseção nativo que revela os blocos suavemente durante a rolagem.

---

## 📁 Estrutura de Diretórios

```
solara/
├── index.html                           # Entrada HTML com SEO, Open Graph e Schema.org
├── package.json                         # Dependências e scripts npm
├── vite.config.js                       # Configuração do Vite com aliases (@/)
├── public/
│   ├── favicon.svg                      # Favicon SVG fictício moderno
│   ├── logo-solara.svg                  # Logo completa em SVG
│   └── og-image.svg                     # Imagem de pré-visualização para redes sociais
├── src/
│   ├── main.js                          # Bootstrap do Vue 3
│   ├── App.vue                          # Orquestração principal da página
│   ├── assets/
│   │   └── styles/
│   │       ├── variables.css            # Design tokens e variáveis CSS
│   │       └── main.css                 # Reset, tipografia, botões e utilitários
│   ├── composables/
│   │   ├── useCalculator.js             # Lógica reativa do simulador de economia
│   │   └── useScrollReveal.js           # Animação suave com IntersectionObserver
│   ├── data/
│   │   └── content.js                   # Centralização de dados, textos e benefícios
│   └── components/
│       ├── common/
│       │   ├── AppLogo.vue              # Componente de marca/logo estilizado
│       │   ├── BaseButton.vue           # Botão reutilizável com variantes
│       │   ├── SectionHeader.vue        # Cabeçalhos consistentes de seção
│       │   └── ToastNotification.vue    # Notificação flutuante de feedback
│       ├── layout/
│       │   ├── TheNavbar.vue            # Header fixo com mobile drawer
│       │   └── TheFooter.vue            # Rodapé institucional com links e redes
│       └── sections/
│           ├── HeroSection.vue          # Hero com estatísticas e card flutuante
│           ├── PartnersSection.vue      # Barra de credenciais e garantias
│           ├── BenefitsSection.vue      # 4 pilares de benefícios do solar
│           ├── HowItWorksSection.vue    # 4 etapas de instalação passo a passo
│           ├── ServicesSection.vue      # Grid com 6 modalidades de atendimento
│           ├── DifferentialsSection.vue # Diferenciais técnicos e engenharia
│           ├── StatsSection.vue         # Métricas de impacto ambiental e financeiro
│           ├── FaqSection.vue           # Accordion interativo de perguntas comuns
│           └── QuoteCalculatorSection.vue # Simulador e formulário de orçamento
└── solara.html                          # Arquivo HTML original de referência
```

---

## 🛠️ Como Executar

### 1. Pré-requisitos
- Node.js instalado (v18+)
- npm ou yarn

### 2. Rodar em Modo de Desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:5173` no seu navegador.

### 3. Compilar para Produção (Build)
```bash
npm run build
```
Os arquivos prontos e otimizados para produção serão gerados na pasta `dist/`.

### 4. Testar a Versão de Produção Localmente
```bash
npm run preview
```
