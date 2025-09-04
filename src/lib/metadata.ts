import type { Metadata } from "next";
import { urls } from "@/lib/urls";

export const siteConfig = {
  name: "Luis Zancanela",
  title: "Luis Zancanela - Desenvolvedor Back-End",
  description: "Desenvolvedor Back-End com Java, Spring e Apache Camel que se aventura no Front-End com Javascript e TypeScript (basicamente um Full Stack). Criando soluções modernas e eficientes em nuvem ou on-premises.",
  url: "https://zancanela.dev.br",
  keywords: [
    "desenvolvedor",
    "developer",
    "software engineer",
    "software developer",
    "back-end",
    "backend",
    "java",
    "spring",
    "apache camel",
    "microservices",
    "api",
    "apis",
    "rest",
    "restful",
    "docker",
    "cloud",
    "azure",
    "aws",
    "gcp",
    "netlify",
    "full stack",
    "react",
    "nextjs",
    "nodejs",
    "typescript",
    "javascript",
    "web developer",
    "frontend",
    "front-end",
    "luis zancanela",
    "programador",
    "portfolio"
  ],
  author: {
    name: "Luis Zancanela",
    email: urls.email,
    linkedin: urls.linkedin,
    github: urls.github
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
  themeColor: "#000000",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
  // twitter: {
  //   card: "summary_large_image",
  //   title: siteConfig.title,
  //   description: siteConfig.description,
  //   creator: siteConfig.author.linkedin,
  //   images: ["/og-image"]
  // },
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
    google: "AQJTKJUk9zqJyuLMwcbtXWx2m3UlIEUUEKZV83HR7gk",
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
    // twitter: {
    //   title: title || siteConfig.title,
    //   description: description || siteConfig.description,
    //   images: images || ["/og-image"]
    // },
    robots: noIndex ? {
      index: false,
      follow: false
    } : undefined
  };
}
