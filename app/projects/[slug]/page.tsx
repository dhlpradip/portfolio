import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AiOutlineGithub } from "react-icons/ai";
import { PageShell } from "@/components/site/page-shell";
import { Reveal } from "@/components/site/reveal";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};
  return {
    title: `${caseStudy.title} — Case Study`,
    description: caseStudy.tagline,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  return (
    <PageShell>
      <article className="py-24 md:py-32">
        <Reveal>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            <span
              className="transition-transform group-hover:-translate-x-1"
              aria-hidden
            >
              ←
            </span>
            All projects
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <header className="mt-10">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
                {caseStudy.title}
              </h1>
              <span className="font-mono text-sm text-muted-foreground">
                {caseStudy.year}
              </span>
            </div>
            <p className="mt-5 max-w-3xl font-body text-lg leading-relaxed text-muted-foreground md:text-xl">
              {caseStudy.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {caseStudy.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={caseStudy.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider transition-colors hover:border-primary/50 hover:text-primary"
            >
              <AiOutlineGithub className="h-4 w-4" />
              View source
            </a>
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-14 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-secondary/30">
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              fill
              priority
              className="object-contain p-10"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        </Reveal>

        <div className="mt-16 space-y-14 md:mt-20">
          {caseStudy.sections.map((section, i) => (
            <Reveal key={section.heading} delay={0.05 * (i + 1)}>
              <section>
                <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="max-w-3xl font-body leading-relaxed text-muted-foreground md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <footer className="mt-20 flex flex-wrap items-center gap-6 border-t border-border pt-10">
            <a
              href={caseStudy.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-widest text-primary"
            >
              Explore the code
              <span
                className="transition-transform group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </a>
            <Link
              href="/projects"
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to all projects
            </Link>
          </footer>
        </Reveal>
      </article>
    </PageShell>
  );
}
