import { useRouter } from "next/router";
import { siteConfig } from "@/lib/metadata";

interface SEOData {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
  schema?: object;
}

export function useSEO() {
  const router = useRouter();

  const generateSEO = (data: SEOData = {}) => {
    const path = router.asPath;
    const canonicalUrl = `${siteConfig.url}${path}`;
    
    return {
      title: data.title ? `${data.title} | ${siteConfig.name}` : siteConfig.title,
      description: data.description || siteConfig.description,
      canonical: canonicalUrl,
      openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: canonicalUrl,
        title: data.title ? `${data.title} | ${siteConfig.name}` : siteConfig.title,
        description: data.description || siteConfig.description,
        siteName: siteConfig.name,
        images: [
          {
            url: data.image ? `${siteConfig.url}${data.image}` : `${siteConfig.url}/og-image`,
            width: 1200,
            height: 630,
            alt: data.title || siteConfig.title,
          },
        ],
      },
      // twitter: {
      //   card: 'summary_large_image',
      //   title: data.title ? `${data.title} | ${siteConfig.name}` : siteConfig.title,
      //   description: data.description || siteConfig.description,
      //   creator: siteConfig.author.linkedin,
      //   images: [data.image ? `${siteConfig.url}${data.image}` : `${siteConfig.url}/og-image`],
      // },
      robots: data.noIndex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
      keywords: data.keywords ? [...siteConfig.keywords, ...data.keywords].join(', ') : siteConfig.keywords.join(', '),
      additionalMetaTags: [
        {
          name: 'author',
          content: siteConfig.author.name,
        },
        {
          name: 'creator',
          content: siteConfig.author.name,
        },
        {
          name: 'publisher',
          content: siteConfig.author.name,
        },
        {
          httpEquiv: 'content-language',
          content: 'pt-BR',
        },
        {
          name: 'language',
          content: 'Portuguese',
        },
      ],
      additionalLinkTags: [
        {
          rel: 'canonical',
          href: canonicalUrl,
        },
        {
          rel: 'alternate',
          hrefLang: 'pt-BR',
          href: canonicalUrl,
        },
        {
          rel: 'alternate',
          hrefLang: 'x-default',
          href: canonicalUrl,
        },
      ],
    };
  };

  const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `${siteConfig.url}${item.url}`
      }))
    };
  };

  const generateArticleSchema = (article: {
    title: string;
    description: string;
    publishedDate: string;
    modifiedDate?: string;
    image?: string;
    tags?: string[];
  }) => {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.description,
      "author": {
        "@type": "Person",
        "name": siteConfig.author.name,
        "url": siteConfig.url
      },
      "publisher": {
        "@type": "Person",
        "name": siteConfig.author.name
      },
      "datePublished": article.publishedDate,
      "dateModified": article.modifiedDate || article.publishedDate,
      "image": article.image ? `${siteConfig.url}${article.image}` : `${siteConfig.url}/og-image`,
      "url": `${siteConfig.url}${router.asPath}`,
      "keywords": article.tags?.join(', ') || siteConfig.keywords.join(', ')
    };
  };

  return {
    generateSEO,
    generateBreadcrumbSchema,
    generateArticleSchema,
    siteConfig
  };
}
