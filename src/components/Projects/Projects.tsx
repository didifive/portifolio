"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { FiGithub } from "react-icons/fi";
import { Badge } from "../ui/Badge";

const projectLimit = 6;

type GithubProject = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  languages: string[];
  topics: string[];
  fork: boolean;
};

export const Projects = () => {
  const GITHUB_USERNAME = "didifive";
  const [projects, setProjects] = useState<GithubProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
        if (!res.ok) throw new Error("Erro ao buscar projetos do GitHub");
        const data: any[] = await res.json();
        const filtered = data
          .filter(p => !p.fork)
          .sort((a, b) => {
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }
            return b.forks_count - a.forks_count;
          })
          .slice(0, projectLimit);

        // Buscar linguagens e topics para cada projeto
        const enrichedProjects: GithubProject[] = await Promise.all(
          filtered.map(async (repo) => {
            // Linguagens
            let languages: string[] = [];
            try {
              const langRes = await fetch(repo.languages_url);
              if (langRes.ok) {
                const langData = await langRes.json();
                languages = Object.keys(langData);
              }
            } catch {}

            // Topics
            let topics: string[] = [];
            try {
              const topicRes = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/topics`, {
                headers: {
                  Accept: "application/vnd.github.mercy-preview+json"
                }
              });
              if (topicRes.ok) {
                const topicData = await topicRes.json();
                topics = topicData.names || [];
              }
            } catch {}

            return {
              ...repo,
              languages,
              topics,
            };
          })
        );
        setProjects(enrichedProjects);
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
              projects.map((project) => (
                <Card key={project.id} className="shadow-soft hover:shadow-medium transition-smooth group flex flex-col h-full">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl">💻</div>
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
                      <Badge variant="secondary" className="text-xs cursor-pointer">
                        🍴 {project.forks_count}
                      </Badge>
                      {/* Tags (topics) - até 5, resto +N */}
                      {project.topics && project.topics.length > 0 && (
                        <>
                          {project.topics.slice(0, 5).map(topic => (
                            <Badge key={topic} variant="outline" className="text-xs cursor-pointer">
                              #{topic}
                            </Badge>
                          ))}
                          {project.topics.length > 5 && (
                            <Badge variant="outline" className="text-xs cursor-pointer">
                              +{project.topics.length - 5}
                            </Badge>
                          )}
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))
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
