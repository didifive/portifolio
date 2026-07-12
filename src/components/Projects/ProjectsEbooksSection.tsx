"use client";

import type { RefObject } from "react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { ProjectsCarouselDots } from "./ProjectsCarouselDots";
import { formatDate } from "./Projects.helpers";
import { urls } from "@/lib/urls";
import type { EbookCoverErrorMap, EbookCoverMap, EbookItem } from "./Projects.types";
import { useTranslations } from "next-intl";

type ProjectsEbooksSectionProps = Readonly<{
  pages: EbookItem[][];
  currentPage: number;
  carouselRef: RefObject<HTMLDivElement | null>;
  onScroll: () => void;
  onDotSelect: (page: number) => void;
}>;

function EbookCard({ ebook, cover, hasError }: Readonly<{ ebook: EbookItem; cover?: string; hasError?: boolean }>) {
  const t = useTranslations("projects");
  const publishedOn = t("ebooks.labels.publishedOn");
  const viewOnLinkedIn = t("ebooks.labels.viewOnLinkedIn");
  let coverContent: React.ReactNode;

  if (cover) {
    coverContent = <img src={cover} alt={`Capa do ebook ${ebook.title}`} className="h-full w-full object-contain object-center" />;
  } else if (hasError) {
    coverContent = <div className="flex h-full w-full items-center justify-center bg-transparent text-foreground/60 dark:text-white/60">Capa indisponível</div>;
  } else {
    coverContent = <div className="flex h-full w-full items-center justify-center bg-transparent text-foreground/50 dark:text-white/50 text-sm">Gerando capa...</div>;
  }

  return (
    <Card className="shadow-soft hover:shadow-medium transition-smooth group flex flex-col h-full w-full min-w-0 overflow-hidden">
      <CardContent className="p-0 flex-1">
        <div className="flex h-full flex-col">
          <div className="aspect-[3/4] flex w-full items-center justify-center overflow-hidden bg-transparent">
            {coverContent}
          </div>

          <div className="p-6 flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h4 className="font-semibold text-foreground dark:text-white text-lg leading-tight">{ebook.title}</h4>
            </div>

            <p className="text-foreground/80 dark:text-white/90 text-sm mb-4 leading-relaxed flex-1">{ebook.description}</p>

            <div className="mb-4 flex items-center gap-2 text-xs text-foreground/70 dark:text-white/70">
              <span className="font-medium">{publishedOn}</span>
              <span>{formatDate(ebook.publishedAt)}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {ebook.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mt-auto flex gap-2 items-center">
              <Button variant="ghost" size="sm" href={ebook.publicationUrl ?? urls.linkedin} target="_blank">
                {viewOnLinkedIn}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProjectsEbooksSection({ pages, currentPage, carouselRef, onScroll, onDotSelect }: ProjectsEbooksSectionProps) {
  const t = useTranslations("projects");
  const title = t("ebooks.title");
  const description = t("ebooks.description");
  
  const ebookCoverMap = pages.flat().reduce<EbookCoverMap>((accumulator, ebook) => {
    if (ebook.imageUrl) {
      accumulator[ebook.id] = ebook.imageUrl;
    }

    return accumulator;
  }, {});

  const ebookCoverErrorMap: EbookCoverErrorMap = {};

  return (
    <div className="mt-16 mb-8">
      <h3 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">{title}</h3>
      <p className="text-foreground/80 dark:text-white/90 mb-3 text-lg max-w-2xl">
        {description}
      </p>

      <div
        ref={carouselRef}
        onScroll={onScroll}
        className="flex gap-0 overflow-x-auto overflow-y-hidden pb-3 pr-2 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {pages.map((page) => (
          <div key={`ebook-page-${page.map((ebook) => ebook.id).join("-")}`} className="w-full shrink-0 flex-none snap-start">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {page.map((ebook) => (
                <EbookCard
                  key={ebook.id}
                  ebook={ebook}
                  cover={ebookCoverMap[ebook.id]}
                  hasError={ebookCoverErrorMap[ebook.id]}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <ProjectsCarouselDots pageCount={pages.length} currentPage={currentPage} onSelect={onDotSelect} ariaLabelPrefix="ebooks publicados" />
    </div>
  );
}
