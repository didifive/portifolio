import Head from "next/head";
import { siteConfig } from "@/lib/metadata";

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  schema?: object;
}

export function SEOHead({
  title,
  description = siteConfig.description,
  path = "",
  image = "/og-image",
  noIndex = false,
  schema,
}: SEOHeadProps) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const canonicalUrl = `${siteConfig.url}${path}`;
  const imageUrl = image.startsWith("http")
    ? image
    : `${siteConfig.url}${image}`;

  return (
    <Head>
      {/* Título e descrição básicos */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />

      {/* URL canônica */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Meta tags de idioma */}
      <meta httpEquiv="content-language" content="pt-BR" />
      <meta name="language" content="Portuguese" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={pageTitle} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Cards
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content={siteConfig.author.twitter} />
      <meta name="twitter:site" content={siteConfig.author.twitter} /> */}

      {/* Meta tags adicionais */}
      <meta name="author" content={siteConfig.author.name} />
      <meta name="creator" content={siteConfig.author.name} />
      <meta name="publisher" content={siteConfig.author.name} />
      <meta name="keywords" content={siteConfig.keywords.join(", ")} />

      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      )}

      {/* Links alternativos */}
      <link rel="alternate" hrefLang="pt-BR" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Schema.org structured data */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2),
          }}
        />
      )}

      {/* Preconnect para melhor performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Favicon e ícones */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />

      {/* Theme color */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />

      {/* Viewport otimizado */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {/* Verificação de proprietário (você deve adicionar seus códigos) */}
      <meta name="google-site-verification" content="" />
      <meta name="msvalidate.01" content="" />

      {/* DNS prefetch para recursos externos */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </Head>
  );
}
