import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { siteData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { HeroReveal } from "@/components/site/reveal";
import { PageShell } from "@/components/site/page-shell";
import { AmbientMesh } from "@/components/site/ambient-mesh";

const roles = ["Frontend engineer", "Poet", "Bibliophile", "🇳🇵"];

export function Hero() {
  const [firstName, ...rest] = siteData.hero.name.split(" ");
  const lastName = rest.join(" ");
  const years = new Date().getFullYear() - siteData.careerStartYear;
  const intro = siteData.hero.intro.replace("{years}", String(years));

  return (
    <div className="hero-scene relative -mt-[4.5rem] min-h-[100svh] overflow-hidden pt-[4.5rem]">
      <div className="grid-fade absolute inset-0 opacity-[0.25]" aria-hidden />
      <AmbientMesh />

      <PageShell wide className="relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-center py-20">
        <div className="max-w-4xl">
          <HeroReveal delay={0}>
            <p className="font-mono text-sm text-muted-foreground">
              {siteData.hero.greeting}
            </p>
          </HeroReveal>

          <HeroReveal delay={0.06}>
            <h1 className="mt-5 font-serif text-[clamp(3rem,10vw,6.5rem)] leading-[0.95] font-medium tracking-tight">
              <span className="block">{firstName}</span>
              <span className="text-gradient">{lastName}</span>
            </h1>
          </HeroReveal>

          <HeroReveal delay={0.14}>
            <div className="mt-8 flex flex-wrap gap-2">
              {roles.map((role) => (
                <span key={role} className="pill">
                  {role}
                </span>
              ))}
            </div>
          </HeroReveal>

          <HeroReveal delay={0.22}>
            <p className="mt-10 max-w-xl font-serif text-lg leading-relaxed text-muted-foreground md:text-xl">
              {intro}
            </p>
          </HeroReveal>

          <HeroReveal delay={0.3}>
            <p className="mt-6 max-w-lg border-l-2 border-primary/60 pl-5 font-serif text-xl italic leading-snug text-foreground md:text-2xl">
              {siteData.hero.tagline}
            </p>
          </HeroReveal>

          <HeroReveal delay={0.38}>
            <div className="mt-12 flex flex-wrap items-center gap-5">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link
                  href={siteData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteData.hero.resumeCta}
                </Link>
              </Button>
              <Link
                href="#about"
                className="group flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                Explore
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </Link>
            </div>
          </HeroReveal>
        </div>
      </PageShell>
    </div>
  );
}
