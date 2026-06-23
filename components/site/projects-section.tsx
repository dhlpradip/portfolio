import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/lib/data";
import type { Project } from "@/lib/types";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/page-shell";

type ProjectCardProps = {
  project: Project;
  index: number;
  featured?: boolean;
};

export function ProjectCard({ project, index, featured }: ProjectCardProps) {
  return (
    <Reveal delay={index * 0.07}>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`card-shine group relative flex h-full flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 ${
          featured ? "lg:col-span-2 lg:row-span-2" : ""
        }`}
      >
        <div
          className={`relative w-full overflow-hidden bg-secondary/30 ${
            featured ? "aspect-[16/10] lg:aspect-auto lg:flex-1 lg:min-h-[280px]" : "aspect-[16/11]"
          }`}
        >
          <Image
            src={project.imgUrl}
            alt={project.title}
            fill
            className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
          />
        </div>
        <div className={`flex flex-col p-6 ${featured ? "lg:p-8" : ""}`}>
          <h3
            className={`font-display font-bold transition-colors group-hover:text-primary ${
              featured ? "text-2xl md:text-3xl" : "text-xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.desc}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-widest text-primary opacity-0 transition-all group-hover:opacity-100">
            Open project
            <span aria-hidden>→</span>
          </span>
        </div>
      </a>
    </Reveal>
  );
}

type ProjectsSectionProps = {
  home?: boolean;
};

export function ProjectsSection({ home = false }: ProjectsSectionProps) {
  const projects = home
    ? siteData.projects.slice(0, 6)
    : siteData.projects;

  return (
    <div>
      <Reveal>
        <SectionHeading
          title={siteData.projectsHeading}
          subtitle={siteData.projectsSubheading}
        />
      </Reveal>
      <div
        className={`grid gap-4 ${
          home
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            featured={home && i === 0}
          />
        ))}
      </div>
      {home && (
        <Reveal>
          <div className="mt-14 border-t border-border pt-8">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-widest text-primary"
            >
              All {siteData.projects.length} projects
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </Reveal>
      )}
    </div>
  );
}
