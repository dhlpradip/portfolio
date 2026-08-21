import { Reveal } from "@/components/site/reveal";

export function ImpactStrip() {
  return (
    <Reveal delay={0.46}>
      <div className="grid grid-cols-1 divide-y divide-border rounded-3xl border border-border bg-card/50 backdrop-blur-sm md:grid-cols-3 md:divide-x md:divide-y-0 shadow-sm">
        <div className="flex flex-col p-6 md:p-8">
          <p className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            100+
          </p>
          <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
            daily Scheduler users across civil contractors and workers
          </p>
        </div>
        <div className="flex flex-col p-6 md:p-8">
          <p className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            5 min &rarr; 3–5 sec
          </p>
          <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
            frontend-only Progress Claims optimization
          </p>
        </div>
        <div className="flex flex-col p-6 md:p-8">
          <p className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Up to 80%
          </p>
          <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
            reduction in onboarding time through reusable bulk import
          </p>
        </div>
      </div>
    </Reveal>
  );
}
