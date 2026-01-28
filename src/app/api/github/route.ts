import { NextResponse } from "next/server";

type GithubProject = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  languages_url: string;
  fork: boolean;
};

export type GithubProjectEnriched = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  languages_url: string;
  languages: string[];
  topics: string[];
  fork: boolean;
};

let cachedData: GithubProject[] | null = null;
let lastFetch = 0;
const CACHE_TTL = 10 * 60 * 1000; // 10 minutos

export async function GET() {
  const now = Date.now();
  if (cachedData && now - lastFetch < CACHE_TTL) {
    return NextResponse.json(cachedData);
  }

  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  const username = "didifive";
  const projectLimit = 6;
  const itemsPerPage = 100;

  // Busca todos os repositórios (paginado)
  let allRepos: GithubProject[] = [];
  let page = 1;
  let hasMore = true;
  while (hasMore) {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=${itemsPerPage}&page=${page}`,
      { 
        headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
              Accept: "application/json",
        },
      }
    );
    const data = await res.json();
    allRepos = allRepos.concat(data);
    hasMore = data.length === itemsPerPage;
    page++;
  }

  // Filtra, ordena e pega os principais
  const filtered = allRepos
    .filter((p) => !p.fork)
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return b.forks_count - a.forks_count;
    })
    .slice(0, projectLimit);

  // Busca linguagens e tópicos para cada projeto
  const enrichedProjects = await Promise.all(
    filtered.map(async (repo) => {
      // Linguagens
      let languages: string[] = [];
      try {
        const langRes = await fetch(repo.languages_url, {
          headers: { 
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: "application/json",
          },
        });
        if (langRes.ok) {
          const langData = await langRes.json();
          languages = Object.keys(langData);
        }
      } catch {}

      // Tópicos
      let topics: string[] = [];
      try {
        const topicRes = await fetch(
          `https://api.github.com/repos/${username}/${repo.name}/topics`,
          {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
              Accept: "application/json",
            },
          }
        );
        if (topicRes.ok) {
          const topicData = await topicRes.json();
          topics = topicData.names || [];
        }
      } catch {}

      console.log(`Enriched repo ${repo.name} with ${languages.length} languages and ${topics.length} topics`);

      return {
        id: repo.id,
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        languages_url: repo.languages_url,
        languages,
        topics,
        fork: repo.fork,
      };
    })
  );

  cachedData = enrichedProjects;
  lastFetch = now;

  return NextResponse.json(enrichedProjects);
}