import { Star, GitFork } from "lucide-react";
import { AiOutlineGithub } from "react-icons/ai";
import { siteData } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeading } from "@/components/site/page-shell";

type GithubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

async function fetchRepos(): Promise<GithubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${siteData.githubUsername}/repos?sort=pushed&per_page=100`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 86400 },
      }
    );
    if (!response.ok) return [];
    const repos = (await response.json()) as GithubRepo[];
    // API order is already most-recently-pushed first.
    return repos.filter((repo) => !repo.fork && !repo.archived).slice(0, 6);
  } catch {
    return [];
  }
}

export async function GithubRepos() {
  const repos = await fetchRepos();
  if (repos.length === 0) return null;

  return (
    <Section label="Open source">
      <Reveal>
        <SectionHeading
          title="Fresh from GitHub"
          subtitle="What I've been pushing lately — pulled straight from the GitHub API, refreshed daily."
        />
      </Reveal>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo, i) => (
          <Reveal key={repo.name} delay={i * 0.06}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="flex items-center gap-2 font-mono text-sm font-medium">
                <AiOutlineGithub className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="truncate transition-colors group-hover:text-primary">
                  {repo.name}
                </span>
              </div>
              {repo.description && (
                <p className="mt-3 line-clamp-3 font-body text-sm leading-relaxed text-muted-foreground">
                  {repo.description}
                </p>
              )}
              <div className="mt-auto flex items-center gap-4 pt-4 font-mono text-xs text-muted-foreground">
                {repo.language && <span>{repo.language}</span>}
                <span className="inline-flex items-center gap-1">
                  <Star className="h-3.5 w-3.5" aria-hidden />
                  {repo.stargazers_count}
                </span>
                <span className="inline-flex items-center gap-1">
                  <GitFork className="h-3.5 w-3.5" aria-hidden />
                  {repo.forks_count}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-10">
          <a
            href={`https://github.com/${siteData.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-widest text-primary"
          >
            More on GitHub
            <span
              className="transition-transform group-hover:translate-x-1"
              aria-hidden
            >
              →
            </span>
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
