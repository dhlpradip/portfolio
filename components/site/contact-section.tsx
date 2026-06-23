import Link from "next/link";
import { siteData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

export function ContactSection() {
  return (
    <Reveal>
      <div className="relative overflow-hidden border border-primary/30 bg-card p-10 md:p-14">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--glow-1),transparent_60%)]"
          aria-hidden
        />
        <div className="relative grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {siteData.contactHeading}
            </h2>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              {siteData.contactCtaText}
            </p>
          </div>
          <div className="md:text-right">
            <Button asChild size="lg" className="rounded-full px-10">
              <Link href="/contact">{siteData.contactCtaButton}</Link>
            </Button>
            <p className="mt-4 font-body text-sm text-muted-foreground">
              {siteData.email}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
