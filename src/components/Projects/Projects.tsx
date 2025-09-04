"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { FiGithub } from "react-icons/fi";
import { Badge } from "../ui/Badge";
import type { GithubProjectEnriched } from "@/app/api/github/route";

const projectLimit = 6;

export const Projects = () => {
  const GITHUB_USERNAME = "didifive";
  const [projects, setProjects] = useState<GithubProjectEnriched[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/api/github");
        if (!res.ok) throw new Error("Erro ao buscar projetos do GitHub");
        const data: GithubProjectEnriched[] = await res.json();
        setProjects(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erro desconhecido");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
              Projetos GitHub
            </h2>
            <p className="text-foreground/80 dark:text-white/90 text-lg max-w-2xl mx-auto">
              Os {projectLimit} principais projetos públicos do meu GitHub, ordenados por estrelas e forks.
            </p>
          </div>
          {loading && <p>Carregando projetos do GitHub...</p>}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {error ? (
              <Card className="shadow-soft hover:shadow-medium transition-smooth group flex flex-col h-full">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl">💻</div>
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground dark:text-white">
                    Projeto Indisponível
                  </h4>
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
            ) : (
              projects.map((project, idx) => {
                const emojis = ["💻", "🛠️", "📦", "🚀", "🔧", "🌐"];
                const emoji = emojis[idx % emojis.length];
                return (
                  <Card key={project.id} className="shadow-soft hover:shadow-medium transition-smooth group flex flex-col h-full">
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl">{emoji}</div>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            href={project.html_url}
                            target="_blank"
                          >
                            <FiGithub className="h-4 w-4 text-foreground/70 dark:text-white/80" />
                          </Button>
                        </div>
                      </div>
                      <h4 className="font-semibold mb-2 text-foreground dark:text-white">
                        {project.name}
                      </h4>
                      <p className="text-foreground/80 dark:text-white/90 text-sm mb-4 leading-relaxed flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {/* Linguagens abaixo dos badges principais */}
                        {project.languages && project.languages.length > 0 && (
                          <>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {project.languages.map(lang => (
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
                        {project.topics.length > 3 && (
                          <Badge
                            variant="secondary"
                            className="text-xs cursor-pointer"
                          >
                            +{project.topics.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
          <div className="text-center mt-12">
            <p className="text-foreground/80 dark:text-white/90 mb-6">
              Interessado em ver mais projetos ou discutir uma colaboração?
            </p>
            <Button variant="hero" size="lg" href={`https://github.com/${GITHUB_USERNAME}`} target="_blank">
              <FiGithub className="h-5 w-5 mr-2" />
              Ver Mais no GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
