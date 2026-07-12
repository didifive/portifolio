import type { Metadata } from "next";
import { urls } from "@/lib/urls";

export const supportedLocales = ["pt-BR", "en-US"] as const;
export type SupportedLocale = (typeof supportedLocales)[number];

export function isSupportedLocale(locale: string | undefined): locale is SupportedLocale {
  return supportedLocales.includes(locale as SupportedLocale);
}

const localeConfigs: Record<SupportedLocale, { title: string; description: string; ogLocale: string }> = {
  "pt-BR": {
    title: "Luis Zancanela - Desenvolvedor Back-End | Java, Spring, TypeScript, Azure",
    description:
      "Portfólio de Luis Zancanela, desenvolvedor back-end especializado em Java, Spring Boot, Apache Camel e TypeScript. Mais de 5 anos de experiência em desenvolvimento de soluções modernas e eficientes na nuvem.",
    ogLocale: "pt_BR",
  },
  "en-US": {
    title: "Luis Zancanela - Backend Engineer | Java, Spring, TypeScript, Azure",
    description:
      "Portfolio of Luis Zancanela, a backend engineer specializing in Java, Spring Boot, Apache Camel, and TypeScript. More than 5 years of experience building modern and efficient cloud solutions.",
    ogLocale: "en_US",
  },
};

export const siteConfig = {
  name: "Luis Zancanela",
  title: localeConfigs["pt-BR"].title,
  description: localeConfigs["pt-BR"].description,
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

export function getLocaleSiteConfig(locale: SupportedLocale) {
  return {
    ...siteConfig,
    locale,
    title: localeConfigs[locale].title,
    description: localeConfigs[locale].description,
    ogLocale: localeConfigs[locale].ogLocale,
  };
}

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
      "pt-BR": "/pt-BR",
      "en-US": "/en-US",
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
    creator: "@didifive",
    site: "@zancanela",
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
    google: "AQJTKJUk9zqJyuLMwcbtXWx2m3UlIEUUEKZV83HR7gk",
    yandex: "",
    yahoo: "",
    other: {
      me: [siteConfig.author.email, siteConfig.author.linkedin]
    }
  }
};

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    themeColor: "#000000",
  };
}

export function generatePageMetadata({
  locale = "pt-BR",
  title,
  description,
  path = "",
  images,
  noIndex = false
}: {
  locale?: SupportedLocale;
  title?: string;
  description?: string;
  path?: string;
  images?: string[];
  noIndex?: boolean;
}): Metadata {
  const safeLocale = isSupportedLocale(locale) ? locale : "pt-BR";
  const localeSiteConfig = getLocaleSiteConfig(safeLocale);
  let normalizedPath = "";
  if (path) {
    normalizedPath = path.startsWith("/") ? path : `/${path}`;
  }
  const pageUrl = `${localeSiteConfig.url}${normalizedPath}`;
  
  return {
    title: title || localeSiteConfig.title,
    description: description || localeSiteConfig.description,
    alternates: {
      canonical: pageUrl,
      languages: {
        "pt-BR": `${siteConfig.url}${normalizedPath}`,
        "en-US": `${siteConfig.url}${normalizedPath}`,
      },
    },
    openGraph: {
      url: pageUrl,
      title: title || localeSiteConfig.title,
      description: description || localeSiteConfig.description,
      locale: localeSiteConfig.ogLocale,
      alternateLocale: safeLocale === "pt-BR" ? "en_US" : "pt_BR",
      images: images || ["/og-image"]
    },
    twitter: {
      card: "summary_large_image",
      title: title || localeSiteConfig.title,
      description: description || localeSiteConfig.description,
      images: images || ["/og-image"]
    },
    robots: noIndex ? {
      index: false,
      follow: false
    } : undefined
  };
}
