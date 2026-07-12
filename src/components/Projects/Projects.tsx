"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../ui/Button";
import { FiGithub } from "react-icons/fi";
import type { GithubProjectEnriched } from "@/app/api/github/route";
import { chunkItems, getCarouselLayout } from "./Projects.helpers";
import { ProjectsEbooksSection } from "./ProjectsEbooksSection";
import { ProjectsFeaturedSection } from "./ProjectsFeaturedSection";
import { ProjectsGithubSection } from "./ProjectsGithubSection";
import type { CarouselLayout, EbookItem, FeaturedProject } from "./Projects.types";
import { useTranslations } from "next-intl";

export const Projects = () => {
  const GITHUB_USERNAME = "didifive";
  const t = useTranslations("projects");
  const javaVersionsTags = [
    t("ebooks.items.tags.java"),
    t("ebooks.items.tags.java8"),
    t("ebooks.items.tags.java11"),
    t("ebooks.items.tags.java17"),
    t("ebooks.items.tags.java21"),
    t("ebooks.items.tags.java25"),
    t("ebooks.items.tags.evolucaoJava"),
    t("ebooks.items.tags.streamsApi"),
    t("ebooks.items.tags.records"),
    t("ebooks.items.tags.patternMatching"),
    t("ebooks.items.tags.virtualThreads"),
    t("ebooks.items.tags.backend")
  ];
  const kubernetesTags = [
    t("ebooks.items.tags.kubernetes"),
    t("ebooks.items.tags.devOps"),
    t("ebooks.items.tags.cloudComputing"),
    t("ebooks.items.tags.containers"),
    t("ebooks.items.tags.orchestration"),
    t("ebooks.items.tags.pods"),
    t("ebooks.items.tags.errorDiagostics"),
  ];
  const apacheCamelTags = [
    t("ebooks.items.tags.apacheCamel"),
    t("ebooks.items.tags.java"),
    t("ebooks.items.tags.springBoot"),
    t("ebooks.items.tags.microservices"),
    t("ebooks.items.tags.messaging"),
    t("ebooks.items.tags.activeMQ"),
    t("ebooks.items.tags.distributedArchitecture"),
    t("ebooks.items.tags.eip"),
    t("ebooks.items.tags.systemsIntegration"),
    t("ebooks.items.tags.ai"),
    t("ebooks.items.tags.backend")
  ];
  const [projects, setProjects] = useState<GithubProjectEnriched[]>([]);
  const [ebooks] = useState<EbookItem[]>([
    {
      id: "ebook-java-versions",
      title: t("ebooks.items.javaVersions.title"),
      description: t("ebooks.items.javaVersions.description"),
      pdfUrl: "https://github.com/didifive/ebook-com-ia/blob/feature/java-versions/ebook-Java-Bushido.pdf",
      imageUrl: "/ebooks/ebook-Java-Bushido.png",
      publicationUrl: "https://www.linkedin.com/posts/luis-zancanela_ebook-java-bushido-do-java-8-ao-25-ugcPost-7460482597991833600-0gqe",
      tags: javaVersionsTags,
      publishedAt: "2026-05-14",
    },
    {
      id: "ebook-kubernetes",
      title: t("ebooks.items.kubernetes.title"),
      description: t("ebooks.items.kubernetes.description"),
      pdfUrl: "https://github.com/didifive/ebook-com-ia/blob/kubernetes/ebook-A-Empresa-Dos-Deploys-Infinitos.pdf",
      imageUrl: "/ebooks/ebook-A-Empresa-Dos-Deploys-Infinitos.png",
      publicationUrl: "https://www.linkedin.com/posts/luis-zancanela_ebook-a-empresa-dos-deploys-infinitos-ugcPost-7456528397234667520-M8Z6",
      tags: kubernetesTags,
      publishedAt: "2026-05-04",
    },
    {
      id: "ebook-apache-camel",
      title: t("ebooks.items.apacheCamel.title"),
      description: t("ebooks.items.apacheCamel.description"),
      pdfUrl: "https://github.com/didifive/ebook-com-ia/blob/main/ebook-O-Despertar-do-Guerreiro-Java.pdf",
      imageUrl: "/ebooks/ebook-O-Despertar-do-Guerreiro-Java.png",
      publicationUrl: "https://www.linkedin.com/posts/luis-zancanela_ebook-o-despertar-do-guerreiro-java-activity-7337951881333256193-kBKw",
      tags: apacheCamelTags,
      publishedAt: "2025-06-09",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [featuredMeta, setFeaturedMeta] = useState<{ title?: string | null; description?: string | null; image?: string | null } | null>(null);
  const [carouselLayout, setCarouselLayout] = useState<CarouselLayout>({
    featuredItemsPerPage: 1,
    githubItemsPerPage: 1,
  });
  const [featuredCurrentPage, setFeaturedCurrentPage] = useState(0);
  const [githubCurrentPage, setGithubCurrentPage] = useState(0);
  const [ebookCurrentPage, setEbookCurrentPage] = useState(0);
  const featuredCarouselRef = useRef<HTMLDivElement>(null);
  const githubCarouselRef = useRef<HTMLDivElement>(null);
  const ebookCarouselRef = useRef<HTMLDivElement>(null);

  const publishedEbooks = useMemo(
    () =>
      ebooks.filter((ebook) => Boolean(ebook.publishedAt?.trim()) && Boolean(ebook.publicationUrl?.trim())),
    [ebooks]
  );

  const featuredProjects = useMemo<FeaturedProject[]>(
    () => [
      {
        id: "vetor-pessoal",
        title: featuredMeta?.title ?? "Vetor Pessoal",
        description: featuredMeta?.description ?? "Site pessoal e portfólio - Vetor Pessoal.",
        image: featuredMeta?.image,
        href: "https://vetorpessoal.com.br",
        badge: "Website",
      },
    ],
    [featuredMeta]
  );

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

    async function fetchFeaturedMeta() {
      try {
        const resp = await fetch("/api/fetch-meta?url=https://vetorpessoal.com.br");
        if (!resp.ok) return;
        const json = await resp.json();
        if (json?.ok && json.meta) setFeaturedMeta(json.meta);
      } catch {
        // ignore
      }
    }

    fetchProjects();
    fetchFeaturedMeta();
  }, []);

  useEffect(() => {
    const updateLayout = () => {
      setCarouselLayout(getCarouselLayout(window.innerWidth));
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const filteredProjects = projects.filter((project) => {
    const name = (project.name || "").toLowerCase();
    const homepage = (project.homepage || "").toLowerCase();
    const html = (project.html_url || "").toLowerCase();

    if (name.includes("vetor") || homepage.includes("vetorpessoal") || html.includes("vetorpessoal")) {
      return false;
    }

    return true;
  });

  const featuredPages = useMemo(() => chunkItems(featuredProjects, carouselLayout.featuredItemsPerPage), [featuredProjects, carouselLayout.featuredItemsPerPage]);
  const githubPages = useMemo(() => chunkItems(filteredProjects, carouselLayout.githubItemsPerPage), [filteredProjects, carouselLayout.githubItemsPerPage]);
  const ebookPages = useMemo(
    () => chunkItems(publishedEbooks, carouselLayout.githubItemsPerPage),
    [publishedEbooks, carouselLayout.githubItemsPerPage]
  );

  const goToCarouselPage = (ref: React.RefObject<HTMLDivElement | null>, page: number, behavior: ScrollBehavior = "smooth") => {
    const element = ref.current;
    if (!element) return;

    element.scrollTo({ left: page * element.clientWidth, behavior });
  };

  const handleCarouselScroll = (
    ref: React.RefObject<HTMLDivElement | null>,
    originalPageCount: number,
    setCurrentPage: (page: number) => void
  ) => {
    const element = ref.current;
    if (!element || originalPageCount <= 0) return;

    const pageWidth = element.clientWidth;
    if (!pageWidth) return;

    const rawPage = Math.round(element.scrollLeft / pageWidth);
    const normalizedPage = rawPage % originalPageCount;
    setCurrentPage(normalizedPage);
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">{t("title")}</h2>
          </div>

          <ProjectsFeaturedSection
            pages={featuredPages}
            currentPage={featuredCurrentPage}
            carouselRef={featuredCarouselRef}
            onScroll={() => handleCarouselScroll(featuredCarouselRef, featuredPages.length, setFeaturedCurrentPage)}
            onDotSelect={(page) => goToCarouselPage(featuredCarouselRef, page)}
          />

          <ProjectsEbooksSection
            pages={ebookPages}
            currentPage={ebookCurrentPage}
            carouselRef={ebookCarouselRef}
            onScroll={() => handleCarouselScroll(ebookCarouselRef, ebookPages.length, setEbookCurrentPage)}
            onDotSelect={(page) => goToCarouselPage(ebookCarouselRef, page)}
          />

          <ProjectsGithubSection
            pages={githubPages}
            currentPage={githubCurrentPage}
            carouselRef={githubCarouselRef}
            onScroll={() => handleCarouselScroll(githubCarouselRef, githubPages.length, setGithubCurrentPage)}
            onDotSelect={(page) => goToCarouselPage(githubCarouselRef, page)}
            loading={loading}
            error={error}
            totalProjects={filteredProjects.length}
          />

          <div className="text-center mt-12">
            <p className="text-foreground/80 dark:text-white/90 mb-6">{t("cta")}</p>
            <Button variant="hero" size="lg" href={`https://github.com/${GITHUB_USERNAME}`} target="_blank">
              <FiGithub className="h-5 w-5 mr-2" />
              {t("button")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
