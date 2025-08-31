# Guia de SEO - Portfólio Maykon Sousa

Este documento explica todas as implementações de SEO adicionadas ao projeto para melhorar a visibilidade nos mecanismos de busca.

## 🚀 Recursos Implementados

### 1. Metadata Dinâmico

- **Arquivo**: `src/lib/metadata.ts`
- **Descrição**: Configuração centralizada de metadata para todo o site
- **Recursos**:
  - Títulos dinâmicos com template
  - Descrições personalizadas
  - Keywords estratégicas
  - Configuração de autor e redes sociais

### 2. Open Graph e Twitter Cards

- **Implementação**: Configurado em `metadata.ts` e geração dinâmica de imagens
- **Recursos**:
  - Imagens de compartilhamento personalizadas (1200x630px)
  - Títulos e descrições otimizadas para redes sociais
  - Suporte completo para Twitter Cards
  - Geração dinâmica de imagens via `/og-image`

### 3. Dados Estruturados (Schema.org)

- **Arquivo**: `src/components/StructuredData.tsx`
- **Tipos implementados**:
  - Person (dados do desenvolvedor)
  - Website (informações do site)
  - CreativeWork (portfólio)
  - Article (para posts/projetos)

### 4. Sitemap e Robots.txt

- **Arquivos**: `src/app/sitemap.ts` e `src/app/robots.ts`
- **Recursos**:
  - Sitemap XML automático
  - Configuração de robots.txt
  - Prioridades e frequências de atualização
  - Cache headers otimizados

### 5. Otimização de Performance

- **Arquivo**: `src/components/OptimizedImage.tsx`
- **Recursos**:
  - Lazy loading de imagens
  - Formatos modernos (AVIF, WebP)
  - Placeholders de carregamento
  - Fallback para imagens com erro

### 6. Headers de Segurança

- **Arquivo**: `next.config.ts`
- **Headers implementados**:
  - X-Frame-Options
  - X-Content-Type-Options
  - Referrer-Policy
  - Permissions-Policy

## 📝 Como Usar

### Configurando o Site

1. **Edite as informações em `src/lib/metadata.ts`**:

   ```typescript
   export const siteConfig = {
     name: "Seu Nome",
     title: "Seu Nome - Desenvolvedor Full Stack",
     description: "Sua descrição personalizada",
     url: "https://seusite.com", // URL real do seu site
     author: {
       name: "Seu Nome",
       email: "seu@email.com",
       twitter: "@seutwitter",
       linkedin: "https://linkedin.com/in/seuperfil",
       github: "https://github.com/seuusuario",
     },
   };
   ```

2. **Atualize as URLs canônicas no layout**:
   ```tsx
   <link rel="canonical" href="https://seusite.com" />
   ```

### Usando em Páginas Específicas

```typescript
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Título da Página",
  description: "Descrição específica da página",
  path: "/pagina",
  images: ["/imagem-especifica.jpg"],
});
```

### Adicionando Dados Estruturados

```tsx
import { StructuredData } from "@/components/StructuredData";

// Em uma página de artigo/projeto
<StructuredData
  type="article"
  data={{
    title: "Título do Projeto",
    description: "Descrição do projeto",
    datePublished: "2024-01-01",
    image: "/projeto-imagem.jpg",
  }}
/>;
```

### Usando Imagens Otimizadas

```tsx
import { OptimizedImage } from "@/components/OptimizedImage";

<OptimizedImage
  src="/minha-imagem.jpg"
  alt="Descrição da imagem"
  width={800}
  height={600}
  priority={false} // true apenas para imagens above-the-fold
/>;
```

## 🔍 Verificações de SEO

### Ferramentas para Testar

1. **Google Search Console**: Verificar indexação e erros
2. **PageSpeed Insights**: Performance e Core Web Vitals
3. **Rich Results Test**: Testar dados estruturados
4. **Facebook Sharing Debugger**: Testar Open Graph
5. **Twitter Card Validator**: Testar Twitter Cards

### URLs para Verificar

- `/sitemap.xml` - Sitemap do site
- `/robots.txt` - Configuração de robots
- `/og-image` - Imagem de compartilhamento dinâmica

### Checklist de SEO

#### ✅ Básico

- [x] Títulos únicos e descritivos
- [x] Meta descriptions informativas
- [x] URLs canônicas
- [x] Estrutura de headings (H1, H2, H3)
- [x] Alt text em imagens
- [x] Sitemap XML
- [x] Robots.txt

#### ✅ Avançado

- [x] Open Graph tags
- [x] Twitter Cards
- [x] Dados estruturados Schema.org
- [x] Otimização de performance
- [x] Headers de segurança
- [x] Lazy loading de imagens

#### ✅ Técnico

- [x] Compressão GZIP/Brotli
- [x] Cache headers
- [x] Formatos de imagem modernos
- [x] Core Web Vitals otimizados

## 📊 Monitoramento

### Métricas Importantes

1. **Core Web Vitals**:
   - LCP (Largest Contentful Paint) < 2.5s
   - FID (First Input Delay) < 100ms
   - CLS (Cumulative Layout Shift) < 0.1

2. **SEO Score**:
   - Google PageSpeed Insights: 90+
   - Lighthouse SEO Score: 95+

3. **Indexação**:
   - Todas as páginas importantes indexadas
   - Sem erros de crawling
   - Rich snippets funcionando

### Próximos Passos

1. Configurar Google Analytics 4
2. Adicionar Google Search Console
3. Implementar blog/posts se necessário
4. Configurar CDN para melhor performance global
5. Adicionar monitoramento de uptime

## 🛠️ Manutenção

### Atualizações Regulares

- Revisar e atualizar keywords mensalmente
- Verificar links quebrados
- Atualizar dados estruturados conforme novos projetos
- Monitorar performance e Core Web Vitals
- Verificar indexação no Google Search Console

### Quando Adicionar Novo Conteúdo

1. Gerar metadata específico
2. Adicionar dados estruturados apropriados
3. Atualizar sitemap (automático)
4. Verificar Open Graph/Twitter Cards
5. Testar performance da nova página
