import type { Metadata } from "next";


export const siteConfig = {
  name: "Maykon Sousa",
  title: "Maykon Sousa - Desenvolvedor Full Stack",
  description: "Desenvolvedor Full Stack especializado em Javascript e TypeScript. Criando soluções web modernas e eficientes com ferramentas como React, Next.js, Node.js React Native.",
  url: "https://maykonsousa.dev.br",
  keywords: [
    "desenvolvedor",
    "full stack",
    "react",
    "nextjs",
    "nodejs",
    "typescript",
    "javascript",
    "web developer",
    "frontend",
    "backend",
    "maykon sousa",
    "programador",
    "portfolio"
  ],
  author: {
    name: "Maykon Sousa",
    email: "maykon.sousa@hotmail.com",     
    twitter: "@mykesousa", 
    linkedin: "https://linkedin.com/in/maykonsousa", 
    github: "https://github.com/maykonsousa"
  },
  locale: "pt-BR",
  type: "website"
};

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "en-US": "/en"
    }
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.author.twitter,
    images: ["/og-image"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    yandex: "",
    yahoo: "",
    other: {
      me: [siteConfig.author.email, siteConfig.author.linkedin]
    }
  }
};

export function generatePageMetadata({
  title,
  description,
  path = "",
  images,
  noIndex = false
}: {
  title?: string;
  description?: string;
  path?: string;
  images?: string[];
  noIndex?: boolean;
}): Metadata {
  const pageUrl = `${siteConfig.url}${path}`;
  
  return {
    title,
    description: description || siteConfig.description,
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      url: pageUrl,
      title: title || siteConfig.title,
      description: description || siteConfig.description,
      images: images || ["/og-image"]
    },
    twitter: {
      title: title || siteConfig.title,
      description: description || siteConfig.description,
      images: images || ["/og-image"]
    },
    robots: noIndex ? {
      index: false,
      follow: false
    } : undefined
  };
}
