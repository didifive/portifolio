<div align="center">

# Portfólio - Luis Zancanela

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16.3.2-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.2-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/947bcbd3-022a-4c09-84b7-06b47e1859ee/deploy-status)](https://app.netlify.com/projects/zancaneladev/deploys)

**Portfólio moderno e responsivo desenvolvido com Next.js, React e Tailwind CSS**

[Demo ao Vivo](https://zancanela.dev.br) · [Reportar Bug](https://github.com/didifive/portifolio/issues) · [Solicitar Funcionalidade](https://github.com/didifive/portifolio/issues)

</div>

---

## 📋 Tabela de Conteúdos

- [Sobre](#-sobre)
- [Características](#-características)
- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
- [Como Começar](#-como-começar)
- [Resend](#-resend)
- [Funcionalidades](#-funcionalidades)
- [Performance](#-performance)
- [Deploy](#-deploy)
- [Créditos](#-créditos)
- [Contato](#-contato)
- [Licença](#-licença)

---

## 💼 Sobre

Este é o portfólio pessoal do **Luis Zancanela**, desenvolvedor back-end com mais de 5 anos de experiência em desenvolvimento web. O site apresenta uma interface moderna e profissional, destacando as habilidades, experiências e projetos desenvolvidos ao longo da carreira.

O projeto foi desenvolvido como uma oportunidade de demonstrar conhecimento em tecnologias modernas como Next.js 16, React 19, TypeScript e Tailwind CSS, aplicando os melhores padrões de desenvolvimento web, internacionalização, performance e acessibilidade. Para configurações rápidas de email, consulte o [RESEND.md](docs/RESEND.md).

### 🎯 Objetivos do Projeto

- Apresentar um portfólio profissional, multilíngue e responsivo
- Demonstrar habilidades com tecnologias modernas do mercado
- Facilitar o contato através de formulário de mensagens integrado
- Destacar projetos ativos na web com metadados dinâmicos e e-books técnicos
- Implementar boas práticas de SEO, acessibilidade e performance
- Otimizar a experiência do usuário com micro-interações e tema adaptativo

---

## ✨ Características

- ⚡ **Framework Moderno**: Construído com Next.js 16 (Turbopack) e React 19
- 🌐 **Internacionalização (i18n)**: Suporte completo a múltiplos idiomas (`pt-BR` e `en-US`) com `next-intl`
- 🎨 **Design Profissional**: Interface moderna e responsiva com Tailwind CSS
- 🌙 **Tema Dinâmico**: Alternância fluida entre modo claro e escuro com persistência
- 🚀 **Projetos e E-books**: Carrosséis interativos com projetos em destaque, busca dinâmica de OpenGraph, e-books e repositórios GitHub
- 📧 **Formulário Integrado**: Envio automático e confirmação de emails com Resend
- ⚡ **Performance Otimizada**: Imagens sob demanda, geração estática (SSG) e build ultrarrápido
- ♿ **Acessibilidade**: Componentes baseados em Radix UI e diretrizes WCAG 2.1 AA
- 📱 **100% Responsivo**: Experiência fluida em mobile, tablets e desktops
- 🔍 **SEO Completo**: Meta tags Open Graph dinâmicas, Sitemap, Robots e dados estruturados (Schema.org / JSON-LD)

---

## 🛠️ Tecnologias

### Tecnologias Principais
- **[Next.js](https://nextjs.org/)** (v16.3.2) - Framework React com App Router e Turbopack
- **[React](https://reactjs.org/)** (v19.2.4) - Biblioteca para interfaces declarativas
- **[TypeScript](https://www.typescriptlang.org/)** (v5.9.3) - Tipagem estática robusta
- **[Tailwind CSS](https://tailwindcss.com/)** (v4.2.2) - Framework CSS utility-first moderno

### Bibliotecas Adicionais
- **[next-intl](https://next-intl.dev/)** - Internacionalização e roteamento localizado
- **[Radix UI](https://www.radix-ui.com/)** - Componentes de acessibilidade primitives
- **[React Hook Form](https://react-hook-form.com/)** & **[Zod](https://zod.dev/)** - Validação de formulários com tipagem
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de tema claro/escuro
- **[Resend](https://resend.com/)** & **[React Email](https://react.email/)** - Envio e templates de email

### Ferramentas de Desenvolvimento
- **[ESLint](https://eslint.org/)** - Análise estática de código
- **[Jest](https://jestjs.io/)** & **[Testing Library](https://testing-library.com/)** - Testes unitários e de componentes
- **[Semantic Release](https://semantic-release.gitbook.io/)** - Versionamento semântico automatizado

---

## 🏗️ Arquitetura

### Estrutura do Projeto

```
src/
├── app/                      # App Router do Next.js
│   ├── [locale]/             # Rotas localizadas (/pt-BR e /en-US)
│   │   ├── layout.tsx        # Layout específico do locale com providers
│   │   └── page.tsx          # Página principal renderizada
│   ├── api/                  # API Routes
│   │   ├── fetch-meta/       # Extração dinâmica e segura de OpenGraph (Vetor Pessoal, LegisVisão)
│   │   ├── github/           # Integração com GitHub API para projetos públicos
│   │   ├── pdf-proxy/        # Proxy com cache em memória para visualização de PDFs
│   │   ├── send-email/       # Envio de emails via Resend
│   │   └── test-resend/      # Endpoint de teste de conectividade Resend
│   ├── og-image/             # Geração de imagens Open Graph dinâmicas
│   ├── globals.css           # Estilos globais e tokens de cores
│   ├── layout.tsx            # Layout raiz da aplicação
│   ├── page.tsx              # Redirecionamento inicial de locale
│   ├── robots.ts             # Geração de robots.txt
│   └── sitemap.ts            # Geração automática de sitemap multilíngue
│
├── components/               # Componentes reutilizáveis
│   ├── About/                # Seção "Sobre"
│   ├── Contact/              # Formulário de contato funcional
│   ├── Experience/           # Linha do tempo e experiência profissional
│   ├── Footer/               # Rodapé com links e informações
│   ├── Header/               # Barra de navegação responsiva
│   ├── Hero/                 # Apresentação principal
│   ├── LanguageSwitcher/     # Seletor de idioma (pt-BR / en-US)
│   ├── Main/                 # Estrutura do layout principal
│   ├── Projects/             # Showcase (Destaques, E-books e GitHub)
│   ├── Section/              # Wrapper padronizado de seções
│   ├── ThemeToggle/          # Alternância de tema claro/escuro
│   ├── providers/            # Providers globais (NextThemes, etc.)
│   ├── OptimizedImage.tsx    # Componente de imagem otimizada
│   ├── SEOHead.tsx           # Tags de SEO
│   ├── StructuredData.tsx    # Schema.org / JSON-LD estruturado
│   └── ui/                   # Design system e componentes base (Radix/Tailwind)
│
├── emails/                   # Templates de email (React Email)
│   ├── confirmation-email.tsx
│   └── contact-form-email.tsx
│
├── hooks/                    # Hooks personalizados (use-toast, useActiveSection, etc.)
├── i18n/                     # Configuração de internacionalização (routing, request, navigation)
├── lib/                      # Utilitários, URLs centralizadas e metadados
├── messages/                 # Dicionários de tradução (pt-BR.json, en-US.json)
└── public/                   # Arquivos estáticos (imagens, ícones, bandeiras, e-books)
```

### Componentes Principais

- **Hero**: Apresentação visual de impacto com links diretos e estatísticas
- **About**: Resumo da trajetória, jornada profissional e principais competências
- **Experience**: Linha do tempo detalhada com empresas, tecnologias e responsabilidades
- **Projects**: Showcase completo dividido em:
  - *Projetos em Destaque*: Plataformas online reais (**Vetor Pessoal**, **LegisVisão**) com extração automática de OpenGraph e jogos interativos (**Jungle IR**, **Genius**).
  - *E-books Publicados*: Obras técnicas publicadas no LinkedIn sobre Java Bushidō, Kubernetes e Apache Camel.
  - *Projetos GitHub*: Repositórios públicos buscados dinamicamente via GitHub API.
- **Contact**: Formulário validado com feedback visual e envio assíncrono
- **LanguageSwitcher**: Alternância fluida de idioma entre Português e Inglês
- **ThemeToggle**: Controle dinâmico de tema claro e escuro

---

## 🚀 Como Começar

### 📋 Pré-requisitos

- **Node.js** 18+
- **npm**, **yarn**, **pnpm** ou **bun**

### ⚡ Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/didifive/portifolio.git
   cd portifolio
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure a chave do Resend**
   
   - Acesse [resend.com](https://resend.com)
   - Crie uma conta ou faça login
   - Vá para Dashboard → API Keys
   - Crie uma nova chave e copie
   - Adicione ao arquivo `.env.local`:
   ```bash
   RESEND_API_KEY=sua_chave_aqui
   ```
   
   > 💡 **Para mais detalhes**, consulte a seção [📧 Resend](#-resend) ou [📄 RESEND.md](docs/RESEND.md)

### 🏃‍♂️ Executando

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm run start

# Executar testes
npm run test

# Análise de código
npm run lint
```

Acesso [http://localhost:3000](http://localhost:3000) para ver o portfólio em ação.

### 📦 Gerenciamento de Dependências

Para manter as dependências seguras, atualizadas e evitar problemas com **dependency confusion**:

#### ✅ Procedimento Recomendado

```bash
# 1. Verificar dependências desatualizadas
npm outdated

# 2. Executar auditoria de segurança
npm audit

# 3. Corrigir vulnerabilidades automaticamente
npm audit fix

# 4. Atualizar dependências security/patch
npm update

# 5. Verificar se há conflitos
npm ls

# 6. Sincronizar lock file se necessário
npm install
```

#### 🔒 Prevenção de Dependency Confusion

**No desenvolvimento:**
1. Sempre commite o `package-lock.json`
2. Use `npm ci` em CI/CD pipelines ao invés de `npm install`
3. Configure `.npmrc` para o registry correto (se usar privado):
   ```bash
   npm config set registry https://registry.npmjs.org
   ```

**Ao reinstalar do zero:**
```bash
# Remover node_modules e lock file
rm -r node_modules package-lock.json

# Reinstalar com integridade verificada
npm install
```

**Manter segurança:**
- Execute `npm audit` regularmente
- Use versões exatas para produção quando necessário
- Revise `package.json` antes de fazer merge
- Use `npm ci` ao invés de `npm install` em CI/CD

---

## 📧 Resend

Para uma configuração rápida e simplificada do sistema de emails com Resend, consulte [📄 RESEND.md](docs/RESEND.md).

**Resumo dos 3 passos:**
1. Obtenha sua chave API em [resend.com](https://resend.com)
2. Configure `.env.local` com `RESEND_API_KEY=sua_chave`
3. Execute `npm run dev` e teste em [http://localhost:3000/#contact](http://localhost:3000/#contact)

---

## ✨ Funcionalidades

### 📧 Sistema de Email

O formulário de contato envia **dois emails automaticamente**:

1. **Para você** (`luis@zancanela.dev.br`):
   - Nome, email, assunto e mensagem do visitante
   - Reply-to configurado para resposta direta

2. **Para o visitante**:
   - Email de agradecimento personalizado
   - Seus contatos (LinkedIn, GitHub)
   - Expectativa de resposta em 24h

### 🎨 Sistema de Tema

- **Tema Claro/Escuro**: Alternância suave entre temas
- **Persistência**: Preferência do usuário salva no navegador
- **Animações Suaves**: Transições elegantes entre temas

### 🏠 Seções do Portfólio

- **Hero**: Apresentação principal com foto e informações básicas
- **Sobre**: História pessoal e profissional
- **Experiência**: Trajetória profissional e habilidades
- **Projetos**: Showcase de projetos desenvolvidos
- **Contato**: Formulário funcional de contato
- **Footer**: Links sociais e informações adicionais

---

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **Otimização de Imagens**: Imagens responsivas com Next.js Image
- **SEO Otimizado**: Meta tags estruturadas e schema markup
- **Acessibilidade**: WCAG 2.1 AA compliant
- **Performance**: First Load ideal em todas as conexões

> 📄 Para um guia completo sobre SEO, implementações e checklist, consulte [docs/SEO.md](docs/SEO.md)

---

## 🚀 Deploy

### Netlify (Atual)

Este projeto está hospedado no Netlify. Para fazer deploy:

1. Conecte o repositório GitHub ao Netlify
2. Configure as variáveis de ambiente no dashboard
3. Clique em deploy

### Outras Plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:

- **Vercel** - Recomendado para Next.js
- **Railway**
- **Digital Ocean**
- **AWS Amplify**

### 🔄 Versionamento Automático

Este projeto utiliza Semantic Release integrado ao GitHub Actions para gerar versões automaticamente sempre que há merge na branch main.
O fluxo funciona assim:
- Os commits seguem o padrão Conventional Commits (feat:, fix:, docs:, etc.).
- O GitHub Actions executa o semantic‑release após o merge.
- O semantic‑release:
  - analisa os commits
  - determina se a versão será patch, minor ou major
  - atualiza o CHANGELOG.md
  - atualiza o package.json
  - cria a tag (vX.Y.Z)
  - publica o release no GitHub

O Netlify detecta o push automático e realiza o deploy.
💡 Isso garante um fluxo de CI/CD totalmente automatizado, com versionamento consistente e releases documentados.

---

## 🙏 Créditos

### Desenvolvimento
- **Luis Zancanela** - Desenvolvedor Principal

### Inspiração e Recursos
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com/)
- [Resend](https://resend.com/)

---

## 📞 Contato

**Luis Zancanela** - Back-End Developer

- 🌐 **Site**: [zancanela.dev.br](https://zancanela.dev.br)
- 📧 **Email**: [luis@zancanela.dev.br](mailto:luis@zancanela.dev.br)
- 💼 **LinkedIn**: [linkedin.com/in/luis-zancanela](https://linkedin.com/in/luis-zancanela)
- 🐙 **GitHub**: [github.com/didifive](https://github.com/didifive)

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**Feito com ❤️ por [Luis Zancanela](https://zancanela.dev.br)**

[![GitHub](https://img.shields.io/badge/GitHub-didifive-181717?logo=github)](https://github.com/didifive)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Conectar-0A66C2?logo=linkedin)](https://linkedin.com/in/luis-zancanela)

</div>
