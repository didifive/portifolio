<div align="center">

# Portfólio - Luis Zancanela

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)
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

O projeto foi desenvolvido como uma oportunidade de demonstrar conhecimento em tecnologias modernas como Next.js 15, React 19, TypeScript e Tailwind CSS, aplicando os melhores padrões de desenvolvimento web, performance e acessibilidade. Para configurações rápidas, consulte o [RESEND.md](docs/RESEND.md).

### 🎯 Objetivos do Projeto

- Apresentar um portfólio profissional e responsivo
- Demonstrar habilidades com tecnologias modernas do mercado
- Facilitar o contato através de formulário de mensagens
- Implementar boas práticas de SEO e acessibilidade
- Otimizar performance e experiência do usuário

---

## ✨ Características

- ⚡ **Framework Moderno**: Construído com Next.js 15 e React 19
- 🎨 **Design Profissional**: Interface moderna e responsiva com Tailwind CSS
- 🌙 **Tema Dinâmico**: Alternância entre modo claro e escuro
- 📧 **Formulário Integrado**: Envio de emails automático com Resend
- 🚀 **Performance Otimizada**: Build optimizado e carregamento rápido
- ♿ **Acessibilidade**: Componentes WCAG 2.1 AA compliant
- 📱 **Responsivo**: Funciona perfeitamente em todos os dispositivos
- 🔍 **SEO Otimizado**: Meta tags estruturadas e schema markup
- 🎯 **UX Focado**: Animações suaves e micro-interações
- 📊 **Análise Integrada**: Métricas de desempenho monitoradas

---

## 🛠️ Tecnologias

### Tecnologias Principais
- **[Next.js](https://nextjs.org/)** (v15.5.2) - Framework React com App Router
- **[React](https://reactjs.org/)** (v19.1.0) - Biblioteca para UI
- **[TypeScript](https://www.typescriptlang.org/)** (v5) - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** (v3.4) - Framework CSS utility-first

### Bibliotecas Adicionais
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis
- **[React Email](https://react.email/)** - Templates de email
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de schema
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Sistema de temas
- **[Resend](https://resend.com/)** - Serviço de envio de emails

### Ferramentas de Desenvolvimento
- **[ESLint](https://eslint.org/)** - Análise estática de código
- **[Jest](https://jestjs.io/)** - Framework de testes
- **[TypeScript](https://www.typescriptlang.org/)** - Verificação de tipos

---

## 🏗️ Arquitetura

### Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── api/               # API Routes
│   │   ├── send-email/    # Endpoint para envio de emails
│   │   ├── test-resend/   # Teste da integração Resend
│   │   └── github/        # Integração com GitHub
│   ├── og-image/          # Geração de Open Graph images
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página principal
│   ├── robots.ts          # Meta tags de robots
│   └── sitemap.ts         # Mapa do site
├── components/            # Componentes React
│   ├── About/            # Seção sobre
│   ├── Contact/          # Formulário de contato
│   ├── Experience/       # Experiência profissional
│   ├── Footer/           # Rodapé
│   ├── Header/           # Cabeçalho/navegação
│   ├── Hero/             # Seção principal
│   ├── Projects/         # Projetos realizados
│   ├── Main/             # Layout principal
│   ├── Section/          # Componente de seção
│   ├── ThemeToggle/      # Alternador de tema
│   ├── providers/        # Providers (tema, etc.)
│   ├── OptimizedImage.tsx  # Componente de imagem otimizada
│   ├── SEOHead.tsx        # Cabeçalho com SEO
│   ├── StructuredData.tsx # Schema markup
│   └── ui/               # Componentes base de UI
│       ├── Badge/
│       ├── Button/
│       ├── Card/
│       ├── Form/
│       ├── Input/
│       ├── Label/
│       ├── Textarea/
│       ├── Toast/
│       └── Toaster/
├── emails/               # Templates de email
│   ├── confirmation-email.tsx
│   └── contact-form-email.tsx
├── hooks/                # Custom hooks
│   ├── use-toast.ts
│   ├── useActiveSection.ts
│   └── useSEO.ts
├── lib/                  # Utilitários e configurações
│   ├── appConfig.ts
│   ├── metadata.ts
│   ├── urls.ts
│   └── utils.ts
└── public/              # Arquivos estáticos
```

### Componentes Principais

- **Hero**: Seção de apresentação principal com foto e informações
- **About**: Histórico pessoal e profissional
- **Experience**: Trajetória profissional e habilidades técnicas
- **Projects**: Showcase de projetos destacados
- **Contact**: Formulário funcional de contato
- **Footer**: Links sociais e informações de rodapé
- **ThemeToggle**: Sistema de alternância entre temas

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
