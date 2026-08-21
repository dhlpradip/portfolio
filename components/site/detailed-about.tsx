import Image from "next/image";
import AboutImage from "@/public/about-img.png";
import { siteData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/page-shell";

function EducationList() {
  return (
    <div className="divide-y divide-border">
      {siteData.education.map((item, i) => (
        <Reveal key={i} delay={i * 0.05}>
          <div className="grid gap-2 py-6 md:grid-cols-[1fr_auto] md:items-baseline">
            <div>
              <h3 className="font-display text-xl font-medium">{item.school}</h3>
              <p className="mt-1 font-body text-sm text-muted-foreground">
                {item.level}
              </p>
            </div>
            <p className="font-body text-sm tabular-nums text-primary">
              {item.duration}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function DetailedAbout() {
  return (
    <div className="space-y-20 md:space-y-28">
      <Reveal>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={AboutImage}
              alt="About Pradeep Dahal"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10" />
          </div>
          <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
            {siteData.about.fullParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            {siteData.about.multilingualLines.map((line, i) => (
              <p key={i} className="font-display text-lg text-foreground">
                {line}
              </p>
            ))}
            <p>{siteData.about.closingParagraph}</p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <SectionHeading title={siteData.about.skillsHeading} />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {siteData.capabilityGroups.map((group) => (
            <div key={group.name}>
              <h3 className="mb-5 font-body text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <SectionHeading title={siteData.about.educationHeading} />
        <EducationList />
      </Reveal>
    </div>
  );
}
