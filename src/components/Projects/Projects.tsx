"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { FiGithub } from "react-icons/fi";
import { Badge } from "../ui/Badge";
import type { GithubProjectEnriched } from "@/app/api/github/route";

export const Projects = () => {
  const GITHUB_USERNAME = "didifive";
  const [projects, setProjects] = useState<GithubProjectEnriched[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [featuredMeta, setFeaturedMeta] = useState<{ title?: string | null; description?: string | null; image?: string | null } | null>(null);

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

    // fetch featured project meta from server-side proxy
    async function fetchFeaturedMeta() {
      try {
        const resp = await fetch("/api/fetch-meta?url=https://vetorpessoal.com.br");
        if (!resp.ok) return;
        const json = await resp.json();
        if (json?.ok && json.meta) setFeaturedMeta(json.meta);
      } catch (e) {
        // ignore
      }
    }
    fetchFeaturedMeta();
  }, []);

  // Exclude featured/non-GitHub projects from the GitHub list (e.g., vetorpessoal)
  const filteredProjects = projects.filter((p) => {
    const name = (p.name || "").toLowerCase();
    const homepage = (((p as any).homepage) || "").toLowerCase();
    const html = (p.html_url || "").toLowerCase();
    if (name.includes("vetor") || homepage.includes("vetorpessoal") || html.includes("vetorpessoal")) {
      return false;
    }
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
              Projetos
            </h2>
          </div>
          {/* Featured projects */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">Projetos em destaque</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-soft hover:shadow-medium transition-smooth group flex flex-col h-full">
                <CardContent className="p-0 flex-1">
                  <div style={{ display: "grid", gridTemplateRows: "2fr 1fr", height: "100%" }}>
                    {featuredMeta?.image ? (
                      <a href="https://vetorpessoal.com.br" target="_blank" rel="noreferrer" className="block w-full row-span-1">
                        <div className="w-full h-full flex items-center justify-center bg-gray-900 dark:bg-gray-800 overflow-hidden">
                          <img
                            src={featuredMeta.image}
                            alt={featuredMeta.title || "Vetor Pessoal"}
                            className="w-full h-full object-contain object-center"
                            style={{ objectPosition: "center center" }}
                          />
                        </div>
                      </a>
                    ) : (
                      <div className="w-full h-full bg-gray-100 dark:bg-gray-800" />
                    )}

                    <div className="p-6 flex-1 row-span-1 flex flex-col">
                      <h4 className="font-semibold mb-2 text-foreground dark:text-white">
                        {featuredMeta?.title ?? "Vetor Pessoal"}
                      </h4>
                      <p className="text-foreground/80 dark:text-white/90 text-sm mb-4 leading-relaxed flex-1">
                        {featuredMeta?.description ?? "Site pessoal e portfólio - Vetor Pessoal."}
                      </p>
                      <div className="mt-auto flex gap-2 items-center">
                        <Button variant="ghost" size="sm" href="https://vetorpessoal.com.br" target="_blank">
                          Visitar
                        </Button>
                        <Badge variant="secondary" className="text-xs">Website</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">
              Projetos GitHub
            </h3>
            <p className="text-foreground/80 dark:text-white/90 mb-3 text-lg max-w-2xl">
              Os {filteredProjects.length} principais projetos públicos do meu GitHub, ordenados por estrelas e forks.
            </p>
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
              filteredProjects.map((project, idx) => {
                const emojis = ["💻", "🛠️", "📦", "🚀", "🔧", "🌐"];
                const emoji = emojis[idx % emojis.length];
                const topicsLimit = 5;
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
                        {project.forks_count > 0 && (
                          <Badge variant="secondary" className="text-xs cursor-pointer">
                            🍴 {project.forks_count}
                          </Badge>
                        )}
                        {project.topics && project.topics.length > 0 && (
                          <>
                            {project.topics.slice(0, topicsLimit).map(topic => (
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
