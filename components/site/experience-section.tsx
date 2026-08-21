"use client";

import Image from "next/image";
import { siteData } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/page-shell";

export function ExperienceSection() {
  return (
    <div>
      <Reveal>
        <SectionHeading title={siteData.experienceHeading} />
      </Reveal>
      <div className="space-y-4">
        {siteData.experience.map((item, i) => (
          <Reveal key={`${item.company}-${item.year}`} delay={i * 0.06}>
            <div
              className={`group relative grid gap-6 overflow-hidden border border-border bg-card p-6 transition-all duration-300 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8 md:p-8 ${
                item.companyLink
                  ? "cursor-pointer hover:border-primary/40 hover:bg-secondary/40"
                  : ""
              }`}
              onClick={() => {
                if (item.companyLink) {
                  window.open(item.companyLink, "_blank");
                }
              }}
              onKeyDown={(e) => {
                if (item.companyLink && (e.key === "Enter" || e.key === " ")) {
                  window.open(item.companyLink, "_blank");
                }
              }}
              role={item.companyLink ? "link" : undefined}
              tabIndex={item.companyLink ? 0 : undefined}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-primary/30 bg-background">
                <Image
                  src={item.logo}
                  alt={item.company}
                  width={44}
                  height={44}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold md:text-2xl">
                  {item.title}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-primary">
                  <span>{item.company}</span>
                  {item.location && (
                    <>
                      <span className="text-muted-foreground">&middot;</span>
                      <span className="text-muted-foreground">{item.location}</span>
                    </>
                  )}
                </div>
                {(item.desc || item.summary) && (
                  <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-muted-foreground">
                    {item.summary || item.desc}
                  </p>
                )}
                {item.bullets && item.bullets.length > 0 && (
                  <ul className="mt-3 list-inside list-disc space-y-1 font-body text-sm text-muted-foreground">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
              <p className="font-display text-sm font-bold tabular-nums text-muted-foreground md:text-right md:text-base">
                {item.year}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
