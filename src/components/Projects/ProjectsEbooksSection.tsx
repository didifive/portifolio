"use client";

import { useEffect, useMemo, useState } from "react";
import type { RefObject } from "react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { ProjectsCarouselDots } from "./ProjectsCarouselDots";
import { formatDate, getCachedPdfProxyUrl, normalizeGitHubUrl } from "./Projects.helpers";
import { urls } from "@/lib/urls";
import type { EbookCoverCache, EbookCoverErrorMap, EbookCoverMap, EbookItem } from "./Projects.types";

const ebookCoverCache: EbookCoverCache = new Map<string, string>();

type ProjectsEbooksSectionProps = Readonly<{
  pages: EbookItem[][];
  currentPage: number;
  carouselRef: RefObject<HTMLDivElement | null>;
  onScroll: () => void;
  onDotSelect: (page: number) => void;
}>;

type RenderEbookCoverParams = {
  ebook: EbookItem;
  pdfjs: typeof import("pdfjs-dist");
  cancelledRef: { current: boolean };
  setEbookCoverMap: React.Dispatch<React.SetStateAction<EbookCoverMap>>;
  setEbookCoverErrorMap: React.Dispatch<React.SetStateAction<EbookCoverErrorMap>>;
};

async function renderEbookCover({
  ebook,
  pdfjs,
  cancelledRef,
  setEbookCoverMap,
  setEbookCoverErrorMap,
}: RenderEbookCoverParams) {
  const normalizedPdfUrl = normalizeGitHubUrl(ebook.pdfUrl).trim();
  const cachedCover = ebookCoverCache.get(normalizedPdfUrl);

  if (cachedCover) {
    if (!cancelledRef.current) {
      setEbookCoverMap((current) => ({
        ...current,
        [ebook.id]: cachedCover,
      }));
    }

    return;
  }

  const pdfUrl = `${getCachedPdfProxyUrl(normalizedPdfUrl)}&v=${encodeURIComponent(normalizedPdfUrl)}`;

  try {
    const loadingTask = pdfjs.getDocument({
      url: pdfUrl,
      disableAutoFetch: false,
      disableStream: false,
    });
    const pdf = await loadingTask.promise;
    const firstPage = await pdf.getPage(1);
    const viewport = firstPage.getViewport({ scale: 1.6 });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!context) throw new Error("Canvas context unavailable");

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await firstPage.render({ canvas, canvasContext: context, viewport }).promise;
    const coverDataUrl = canvas.toDataURL("image/png");

    ebookCoverCache.set(normalizedPdfUrl, coverDataUrl);
    await pdf.destroy();

    if (!cancelledRef.current) {
      setEbookCoverMap((current) => ({
        ...current,
        [ebook.id]: coverDataUrl,
      }));
    }
  } catch (coverError) {
    console.warn(`Falha ao renderizar a primeira página do PDF do ebook ${ebook.id}`, coverError);
    if (!cancelledRef.current) {
      setEbookCoverErrorMap((current) => ({ ...current, [ebook.id]: true }));
    }
  }
}

function EbookCard({ ebook, cover, hasError }: Readonly<{ ebook: EbookItem; cover?: string; hasError?: boolean }>) {
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
              <span className="font-medium">Publicado em</span>
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
                Ver no LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProjectsEbooksSection({ pages, currentPage, carouselRef, onScroll, onDotSelect }: ProjectsEbooksSectionProps) {
  const [ebookCoverMap, setEbookCoverMap] = useState<EbookCoverMap>({});
  const [ebookCoverErrorMap, setEbookCoverErrorMap] = useState<EbookCoverErrorMap>({});

  const publishedEbooks = useMemo(
    () => pages.flat().filter((ebook) => Boolean(ebook.publishedAt?.trim()) && Boolean(ebook.publicationUrl?.trim())),
    [pages]
  );

  useEffect(() => {
    const cancelledRef = { current: false };

    const cachedCoverMap = publishedEbooks.reduce<EbookCoverMap>((accumulator, ebook) => {
      const normalizedPdfUrl = normalizeGitHubUrl(ebook.pdfUrl).trim();
      const cachedCover = ebookCoverCache.get(normalizedPdfUrl);

      if (cachedCover) {
        accumulator[ebook.id] = cachedCover;
      }

      return accumulator;
    }, {});

    setEbookCoverMap(cachedCoverMap);
    setEbookCoverErrorMap({});

    async function renderEbookCovers() {
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

        await Promise.all(
          publishedEbooks.map((ebook) =>
            renderEbookCover({
              ebook,
              pdfjs,
              cancelledRef,
              setEbookCoverMap,
              setEbookCoverErrorMap,
            })
          )
        );
      } catch (coverError) {
        console.warn("Falha ao carregar pdfjs-dist para ebooks", coverError);
      }
    }

    renderEbookCovers();

    return () => {
      cancelledRef.current = true;
    };
  }, [publishedEbooks]);

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
