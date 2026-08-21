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
  const cardClassName = `card-shine group relative flex h-full flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 ${
    featured ? "lg:col-span-2 lg:row-span-2" : ""
  }`;
  const cardBody = (
    <>
        <div className="relative w-full shrink-0 overflow-hidden bg-secondary/30 aspect-[16/10] border-b border-border/40">
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
        <div className="flex flex-col p-6 lg:p-8 flex-1">
          {project.category && (
            <span className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {project.category.replace("-", " ")}
            </span>
          )}
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
          {project.role && (
            <p className="mt-2 font-body text-sm font-medium leading-relaxed text-foreground">
              Role: {project.role}
            </p>
          )}
          {project.stack && project.stack.length > 0 && (
             <p className="mt-3 font-mono text-xs text-muted-foreground">
               {project.stack.join(" · ")}
             </p>
          )}
          {(project.caseStudy || project.link) && (
            <span className="mt-5 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-widest text-primary transition-all group-hover:gap-3">
              {project.caseStudy ? "Read case study" : "Open project"}
              <span aria-hidden>→</span>
            </span>
          )}
        </div>
    </>
  );

  return (
    <Reveal delay={index * 0.07}>
      {project.caseStudy ? (
        <Link href={`/projects/${project.caseStudy}`} className={cardClassName}>
          {cardBody}
        </Link>
      ) : project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClassName}
        >
          {cardBody}
        </a>
      ) : (
        <div className={cardClassName}>{cardBody}</div>
      )}
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
