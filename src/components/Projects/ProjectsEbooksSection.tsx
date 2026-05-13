import type { RefObject } from "react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { ProjectsCarouselDots } from "./ProjectsCarouselDots";
import { formatDate } from "./Projects.helpers";
import { urls } from "@/lib/urls";
import type { EbookItem } from "./Projects.types";

type ProjectsEbooksSectionProps = {
  pages: EbookItem[][];
  currentPage: number;
  carouselRef: RefObject<HTMLDivElement>;
  onScroll: () => void;
  onDotSelect: (page: number) => void;
  ebookCoverMap: Record<string, string>;
  ebookCoverErrorMap: Record<string, boolean>;
};

function EbookCard({ ebook, cover, hasError }: { ebook: EbookItem; cover?: string; hasError?: boolean }) {
  return (
    <Card className="shadow-soft hover:shadow-medium transition-smooth group flex flex-col h-full w-full min-w-0 overflow-hidden">
      <CardContent className="p-0 flex-1">
        <div className="flex h-full flex-col">
          <div className="flex w-full items-center justify-center overflow-hidden bg-transparent" style={{ aspectRatio: "3 / 4" }}>
            {cover ? (
              <img src={cover} alt={`Capa do ebook ${ebook.title}`} className="h-full w-full object-contain object-center" />
            ) : hasError ? (
              <div className="flex h-full w-full items-center justify-center bg-transparent text-foreground/60 dark:text-white/60">
                Capa indisponível
              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-transparent text-foreground/50 dark:text-white/50 text-sm">
                Gerando capa...
              </div>
            )}
          </div>

          <div className="p-6 flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h4 className="font-semibold text-foreground dark:text-white text-lg leading-tight">{ebook.title}</h4>
            </div>

            <p className="text-foreground/80 dark:text-white/90 text-sm mb-4 leading-relaxed flex-1">{ebook.description}</p>

            <div className="mb-4 flex items-center gap-2 text-xs text-foreground/70 dark:text-white/70">
              <span className="font-medium">Publicado em</span>
              <span>{formatDate(ebook.publishedAt)}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {ebook.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs cursor-pointer">
                  #{tag}
                </Badge>
              ))}
            </div>

            <div className="mt-auto flex gap-2 items-center">
              <Button variant="ghost" size="sm" href={ebook.publicationUrl ?? urls.linkedin} target="_blank">
                Ver no LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProjectsEbooksSection({
  pages,
  currentPage,
  carouselRef,
  onScroll,
  onDotSelect,
  ebookCoverMap,
  ebookCoverErrorMap,
}: ProjectsEbooksSectionProps) {
  return (
    <div className="mt-16 mb-8">
      <h3 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">Ebooks publicados</h3>
      <p className="text-foreground/80 dark:text-white/90 mb-3 text-lg max-w-2xl">
        Ebooks sobre tecnologias e desenvolvimento de sistemas publicados no LinkedIn.
      </p>

      <div
        ref={carouselRef}
        onScroll={onScroll}
        className="flex gap-0 overflow-x-auto overflow-y-hidden pb-3 pr-2 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {pages.map((page, pageIndex) => (
          <div key={`ebook-page-${pageIndex}`} className="w-full shrink-0 flex-none snap-start">
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
