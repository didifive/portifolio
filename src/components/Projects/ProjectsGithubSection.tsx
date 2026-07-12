import type { RefObject } from "react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { FiGithub } from "react-icons/fi";
import { ProjectsCarouselDots } from "./ProjectsCarouselDots";
import type { GithubProject } from "./Projects.types";
import { useTranslations } from "next-intl";

type ProjectsGithubSectionProps = {
  pages: GithubProject[][];
  currentPage: number;
  carouselRef: RefObject<HTMLDivElement | null>;
  onScroll: () => void;
  onDotSelect: (page: number) => void;
  loading: boolean;
  error: string | null;
  totalProjects: number;
};

function GithubProjectCard({ project, emoji }: Readonly<{ project: GithubProject; emoji: string }>) {
  const topicsLimit = 5;

  return (
    <Card className="shadow-soft hover:shadow-medium transition-smooth group flex flex-col h-full w-full min-w-0">
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl">{emoji}</div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" href={project.html_url} target="_blank">
              <FiGithub className="h-4 w-4 text-foreground/70 dark:text-white/80" />
            </Button>
          </div>
        </div>
        <h4 className="font-semibold mb-2 text-foreground dark:text-white">{project.name}</h4>
        <p className="text-foreground/80 dark:text-white/90 text-sm mb-4 leading-relaxed flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.languages && project.languages.length > 0 && (
            <>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.languages.map((lang) => (
                  <Badge key={lang} variant="secondary" className="text-xs cursor-pointer">
                    💻 {lang}
                  </Badge>
                ))}
              </div>
              <div className="w-full h-0 my-0" />
            </>
          )}
          <Badge variant="secondary" className="text-xs cursor-pointer">
            ⭐ {project.stargazers_count}
          </Badge>
          {project.forks_count > 0 && (
            <Badge variant="secondary" className="text-xs cursor-pointer">
              🍴 {project.forks_count}
            </Badge>
          )}
          {project.topics && project.topics.length > 0 && (
            <>
              {project.topics.slice(0, topicsLimit).map((topic) => (
                <Badge key={topic} variant="outline" className="text-xs cursor-pointer">
                  #{topic}
                </Badge>
              ))}
              {project.topics.length > topicsLimit && (
                <Badge variant="outline" className="text-xs cursor-pointer">
                  +{project.topics.length - topicsLimit}
                </Badge>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function GithubErrorCard() {
  return (
    <Card className="shadow-soft hover:shadow-medium transition-smooth group flex flex-col h-full w-full min-w-0">
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl">💻</div>
        </div>
        <h4 className="font-semibold mb-2 text-foreground dark:text-white">Projeto Indisponível</h4>
        <p className="text-foreground/80 dark:text-white/90 text-sm mb-4 leading-relaxed flex-1">
          Não foi possível carregar os projetos do GitHub no momento. Tente novamente mais tarde.
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          <Badge variant="secondary" className="text-xs cursor-pointer">
            ⭐ --
          </Badge>
          <Badge variant="secondary" className="text-xs cursor-pointer">
            🍴 --
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProjectsGithubSection({
  pages,
  currentPage,
  carouselRef,
  onScroll,
  onDotSelect,
  loading,
  error,
  totalProjects,
}: Readonly<ProjectsGithubSectionProps>) {
  const t = useTranslations("projects");
  const githubTitle = t("github.title");
  const githubDescription = t("github.description", { totalProjects });
  const emojis = ["💻", "🛠️", "📦", "🚀", "🔧", "🌐"];

  return (
    <div className="mt-16 mb-8">
      <h3 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">{githubTitle}</h3>
      <p className="text-foreground/80 dark:text-white/90 mb-3 text-lg max-w-2xl">
        {githubDescription}
      </p>
      {loading && <p>Carregando projetos do GitHub...</p>}

      <div
        ref={carouselRef}
        onScroll={onScroll}
        className="flex gap-0 overflow-x-auto overflow-y-hidden pb-3 pr-2 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {error ? (
          <div className="w-full shrink-0 flex-none snap-start">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <GithubErrorCard />
            </div>
          </div>
        ) : (
          pages.map((page, pageIndex) => (
            <div key={`github-page-${pageIndex}`} className="w-full shrink-0 flex-none snap-start">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {page.map((project, idx) => (
                  <GithubProjectCard key={project.id} project={project} emoji={emojis[idx % emojis.length]} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      <ProjectsCarouselDots pageCount={pages.length} currentPage={currentPage} onSelect={onDotSelect} ariaLabelPrefix="projetos GitHub" />
    </div>
  );
}
