import type { GithubProjectEnriched } from "@/app/api/github/route";

export type CarouselLayout = {
  featuredItemsPerPage: number;
  githubItemsPerPage: number;
};

export type EbookCoverMap = Record<string, string>;

export type EbookCoverErrorMap = Record<string, boolean>;

export type EbookCoverCache = Map<string, string>;

export type EbookItem = {
  id: string;
  title: string;
  description: string;
  pdfUrl: string;
  publicationUrl?: string;
  imageUrl?: string;
  tags: string[];
  publishedAt?: string | null;
};

export type FeaturedProject = {
  id: string;
  title: string;
  description: string;
  image?: string | null;
  href: string;
  badge: string;
};

export type GithubProject = GithubProjectEnriched;
