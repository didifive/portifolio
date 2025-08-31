# 🚀 Portfólio - Maykon Sousa

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
</div>

<div align="center">
  <h3>✨ Portfólio moderno e responsivo para desenvolvedor fullstack ✨</h3>
  <p>Sistema completo com formulário de contato integrado, tema dark/light e design profissional</p>
</div>

---

## 📖 Sobre o Projeto

Este é o portfólio pessoal do **Maykon Sousa**, desenvolvedor fullstack com mais de 5 anos de experiência. O site apresenta uma interface moderna e profissional, destacando habilidades, experiências e projetos realizados.

### 🎯 Principais Características

- **Design Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Sistema de Temas**: Alternância entre modo claro e escuro
- **Formulário de Contato**: Integração com Resend para envio de emails
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **Performance Otimizada**: Built com Next.js 15 e Turbopack
- **Acessibilidade**: Componentes seguindo padrões ARIA

---

## 🛠️ Tecnologias Utilizadas

### 🎨 Frontend

- **Next.js 15.5.2** - Framework React com App Router
- **React 19.1.0** - Biblioteca para interfaces de usuário
- **TypeScript 5** - JavaScript com tipagem estática
- **Tailwind CSS 3.4** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis e não estilizados

### 📧 Comunicação

- **Resend** - Serviço de envio de emails
- **React Email** - Templates de email em React

### 🎭 UI/UX

- **React Icons** - Coleção de ícones populares
- **Next Themes** - Sistema de temas
- **Class Variance Authority** - Utilitário para variantes de componentes

### 📊 Análise & Qualidade

- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schema TypeScript
- **ESLint** - Análise estática de código
- **Jest** - Framework de testes

---

## 🚀 Como Executar o Projeto

### 📋 Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun

### ⚡ Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/maykonsousa.git

# 2. Entre no diretório
cd maykonsousa

# 3. Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install
```

### 🔧 Configuração do Email

Para o formulário de contato funcionar, configure o Resend:

```bash
# 1. Crie o arquivo de ambiente
cp .env.example .env.local

# 2. Adicione sua chave do Resend
echo "RESEND_API_KEY=sua_chave_aqui" >> .env.local
```

**📝 Como obter a chave:**

1. Acesse [resend.com](https://resend.com)
2. Crie uma conta gratuita
3. Vá para Dashboard → API Keys
4. Crie uma nova chave e copie

### 🏃‍♂️ Executando

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm run start

# Executar testes
npm run test

# Linting
npm run lint
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

---

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── api/               # API Routes
│   │   ├── send-email/    # Endpoint de contato
│   │   └── test-resend/   # Teste do Resend
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── About/            # Seção sobre
│   ├── Contact/          # Formulário de contato
│   ├── Experience/       # Experiência profissional
│   ├── Footer/           # Rodapé
│   ├── Header/           # Cabeçalho/navegação
│   ├── Hero/             # Seção principal
│   ├── Projects/         # Projetos realizados
│   ├── providers/        # Providers (tema, etc.)
│   └── ui/               # Componentes base
├── emails/               # Templates de email
├── hooks/                # Custom hooks
├── lib/                  # Utilitários e configurações
└── assets/               # Imagens e recursos
```

---

## ✨ Funcionalidades

### 🏠 Seções do Portfólio

- **Hero**: Apresentação principal com foto e informações básicas
- **Sobre**: História pessoal e profissional
- **Experiência**: Trajetória profissional e habilidades
- **Projetos**: Showcase de projetos desenvolvidos
- **Contato**: Formulário funcional de contato
- **Footer**: Links sociais e informações adicionais

### 📧 Sistema de Email

O formulário de contato envia **dois emails automaticamente**:

1. **Para você** (`maykon.sousa@hotmail.com`):
   - Nome, email, assunto e mensagem do visitante
   - Reply-to configurado para resposta direta

2. **Para o visitante**:
   - Email de agradecimento personalizado
   - Seus contatos (WhatsApp, LinkedIn)
   - Expectativa de resposta em 24h

### 🎨 Sistema de Design

- **Design System**: Cores, tipografia e componentes padronizados
- **Modo Escuro/Claro**: Alternância suave entre temas
- **Responsividade**: Mobile-first e adaptável
- **Animações**: Transições suaves e micro-interações

---

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **Bundle Size**: ~214kb otimizado
- **First Load**: < 2s em conexões 3G
- **SEO**: Meta tags otimizadas
- **Acessibilidade**: WCAG 2.1 AA compliant

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Configure environment variables no dashboard
```

### Outras Plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:

- **Netlify**
- **Railway**
- **Digital Ocean**
- **AWS Amplify**

---

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Análise de código
npm run test         # Executar testes
npm run test:watch   # Testes em modo watch
npm run test:coverage # Cobertura de testes
```

---

## 📞 Contato

**Maykon Sousa** - Software Engineer

- 🌐 **Site**: [maykonsousa.dev](https://maykonsousa.dev)
- 📧 **Email**: maykon.sousa@hotmail.com
- 💼 **LinkedIn**: [linkedin.com/in/maykonsousa](https://linkedin.com/in/maykonsousa)
- 📱 **WhatsApp**: [Clique aqui para conversar](https://wa.me/5511999999999)

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <p>⭐ Se este projeto te ajudou, deixe uma estrela!</p>
  <p>Desenvolvido com 💜 por <strong>Maykon Sousa</strong></p>
</div>
