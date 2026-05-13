import type { CarouselLayout } from "./Projects.types";

export function chunkItems<T>(items: T[], size: number) {
  if (size <= 0) return [items];

  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

export function getCarouselLayout(width: number): CarouselLayout {
  if (width >= 1024) {
    return { featuredItemsPerPage: 2, githubItemsPerPage: 3 };
  }

  if (width >= 640) {
    return { featuredItemsPerPage: 2, githubItemsPerPage: 2 };
  }

  return { featuredItemsPerPage: 1, githubItemsPerPage: 1 };
}

export function formatDate(value?: string | null) {
  if (!value) return "Atualização indisponível";

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

export function normalizeGitHubUrl(url: string) {
  if (!url) return url;

  try {
    const githubBlob = /https:\/\/github.com\/(.+?)\/blob\/(.+?)\/(.+)/i.exec(url);
    if (githubBlob) {
      const ownerRepo = githubBlob[1];
      const sha = githubBlob[2];
      const path = githubBlob[3];
      return `https://raw.githubusercontent.com/${ownerRepo}/${sha}/${path}`;
    }
  } catch {
    return url;
  }

  return url;
}
