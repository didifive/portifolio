import { siteConfig } from "@/lib/metadata";

interface StructuredDataProps {
  type?: "person" | "website" | "article";
  data?: Record<string, unknown>;
}

export function StructuredData({
  type = "person",
  data = {},
}: StructuredDataProps) {
  const generatePersonSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/avatar-img.jpg`,
    sameAs: [
      siteConfig.author.linkedin,
      siteConfig.author.github,
      `https://twitter.com/${siteConfig.author.twitter.replace("@", "")}`,
    ],
    jobTitle: "Desenvolvedor Full Stack",
    worksFor: {
      "@type": "Organization",
      name: "Freelancer",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Full Stack Development",
      "Web Development",
      "Frontend Development",
      "Backend Development",
    ],
    description: siteConfig.description,
    email: siteConfig.author.email,
    ...data,
  });

  const generateWebsiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    inLanguage: "pt-BR",
    copyrightYear: new Date().getFullYear(),
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    ...data,
  });

  const generateArticleSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title || siteConfig.title,
    description: data.description || siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    datePublished: data.datePublished || new Date().toISOString(),
    dateModified: data.dateModified || new Date().toISOString(),
    image: data.image || `${siteConfig.url}/og-image.jpg`,
    url: data.url || siteConfig.url,
    ...data,
  });

  const getSchema = () => {
    switch (type) {
      case "website":
        return generateWebsiteSchema();
      case "article":
        return generateArticleSchema();
      case "person":
      default:
        return generatePersonSchema();
    }
  };

  const schema = getSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2),
      }}
    />
  );
}

// Componente combinado para a página principal
export function HomeStructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/avatar-img.jpg`,
    sameAs: [
      siteConfig.author.linkedin,
      siteConfig.author.github,
      `https://twitter.com/${siteConfig.author.twitter.replace("@", "")}`,
    ],
    jobTitle: "Desenvolvedor Full Stack",
    worksFor: {
      "@type": "Organization",
      name: "Freelancer",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Full Stack Development",
    ],
    description: siteConfig.description,
    email: siteConfig.author.email,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    inLanguage: "pt-BR",
    copyrightYear: new Date().getFullYear(),
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${siteConfig.author.name} - Portfolio`,
    description:
      "Portfolio profissional apresentando projetos e experiências em desenvolvimento web",
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    url: siteConfig.url,
    dateCreated: "2024-01-01",
    inLanguage: "pt-BR",
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [personSchema, websiteSchema, portfolioSchema],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(combinedSchema, null, 2),
      }}
    />
  );
}
