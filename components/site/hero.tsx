import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { siteData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { HeroReveal } from "@/components/site/reveal";
import { PageShell } from "@/components/site/page-shell";
import { AmbientMesh } from "@/components/site/ambient-mesh";

export function Hero() {
  const intro = siteData.hero.intro;

  return (
    <div className="hero-scene relative -mt-[4.5rem] min-h-[100svh] overflow-hidden pt-[4.5rem]">
      <div className="grid-fade absolute inset-0 opacity-[0.25]" aria-hidden />
      <AmbientMesh />

      <PageShell wide className="relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-center py-20">
        <div className="max-w-4xl">
          <HeroReveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-semibold tracking-widest text-primary uppercase">
                {siteData.hero.name}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary/50"></span>
              <span className="font-mono text-sm font-medium tracking-widest text-muted-foreground">
                Kathmandu, Nepal
              </span>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.06}>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-[4rem] lg:leading-[1.1]">
              I build fast, reliable product experiences with <span className="text-gradient">React, Next.js, TypeScript,</span> and <span className="text-gradient">applied AI.</span>
            </h1>
          </HeroReveal>

          <HeroReveal delay={0.14}>
            <p className="mt-8 max-w-2xl font-serif text-lg leading-relaxed text-muted-foreground md:text-xl">
              {intro}
            </p>
          </HeroReveal>

          <HeroReveal delay={0.38}>
            <div className="mt-12 flex flex-wrap items-center gap-5">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="#projects">
                  View selected work
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link
                  href={siteData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  {siteData.hero.resumeCta}
                </Link>
              </Button>
              <Link
                href="#contact"
                className="group flex items-center gap-2 font-mono text-sm font-medium tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                Contact me
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </Link>
            </div>
          </HeroReveal>
        </div>
      </PageShell>
    </div>
  );
}
