import type { RefObject } from "react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { ProjectsCarouselDots } from "./ProjectsCarouselDots";
import type { FeaturedProject } from "./Projects.types";
import { formatDate } from "./Projects.helpers";
import { useLocale, useTranslations } from "next-intl";

type ProjectsFeaturedSectionProps = {
  pages: FeaturedProject[][];
  currentPage: number;
  carouselRef: RefObject<HTMLDivElement | null>;
  onScroll: () => void;
  onDotSelect: (page: number) => void;
};

function FeaturedProjectCard({ project }: Readonly<{ project: FeaturedProject }>) {
  const t = useTranslations("projects");
  const locale = useLocale();
  return (
    <Card className="shadow-soft hover:shadow-medium transition-smooth group flex flex-col h-full w-full min-w-0">
      <CardContent className="p-0 flex-1">
        <div className="flex flex-col h-auto">
          {project.image ? (
            <a href={project.href} target="_blank" rel="noreferrer" className="block w-full row-span-1">
              <div 
                className="w-full aspect-[16/9] flex items-center justify-center bg-gray-900 dark:bg-gray-800 overflow-hidden"
                style={{ backgroundColor: project.backgroundColor || "transparent" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain object-center"
                  style={{ objectPosition: "center center" }}
                />
              </div>
            </a>
          ) : (
            <div className="w-full aspect-[16/9] bg-gray-100 dark:bg-gray-800" />
          )}

          <div className="p-6 flex-1 row-span-1 flex flex-col">
            <h4 className="font-semibold mb-2 text-foreground dark:text-white">{project.title}</h4>
            <div className="text-[0.3rem] text-foreground/70 dark:text-white/70 mb-2">
              <a
                href={project.href} 
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary dark:hover:text-emerald-400 transition-smooth text-sm cursor-pointer"
              >
                https://{new URL(project.href).hostname}
              </a>
            </div>
            <p className="text-foreground/80 dark:text-white/90 text-sm mb-4 leading-relaxed flex-1">{project.description}</p>
            <div className="text-[10px] text-foreground/70 dark:text-white/70 mb-2">
              {project.publishedAt && (
                <span>{t("highlighted.labels.publishedOn")} {formatDate(project.publishedAt, locale)}</span>
              )}
              {project.publishedAt && project.updatedAt && (
                <span> • </span>
              )}
              {project.updatedAt && (
                <span>{t("highlighted.labels.updatedOn")} {formatDate(project.updatedAt, locale)}</span>
              )}
            </div>
            <div className="mt-auto flex gap-2 items-center">
              <Badge variant="secondary" className="text-xs">
                {project.badge}
              </Badge>
              <Button variant="ghost" size="sm" href={project.href} target="_blank">
                {t("highlighted.labels.visitSite")}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProjectsFeaturedSection({ pages, currentPage, carouselRef, onScroll, onDotSelect }: Readonly<ProjectsFeaturedSectionProps>) {
  const t = useTranslations("projects");
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">{t("highlighted.title")}</h3>
      <div
        ref={carouselRef}
        onScroll={onScroll}
        className="flex gap-0 overflow-x-auto overflow-y-hidden pb-3 pr-2 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {pages.map((page, pageIndex) => (
          <div key={`featured-page-${pageIndex}`} className="w-full shrink-0 flex-none snap-start">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {page.map((project) => (
                <FeaturedProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <ProjectsCarouselDots
        pageCount={pages.length}
        currentPage={currentPage}
        onSelect={onDotSelect}
        ariaLabelPrefix="destaque"
      />
    </div>
  );
}
