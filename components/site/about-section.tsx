import Image from "next/image";
import Link from "next/link";
import AboutImage from "@/public/about.jpg";
import { siteData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

export function AboutSection() {
  return (
    <Reveal>
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-5">
          <div className="absolute -bottom-4 -right-4 h-full w-full border border-primary/40" aria-hidden />
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-card">
            <Image
              src={AboutImage}
              alt="About Pradeep Dahal"
              fill
              className="object-cover contrast-[1.05] saturate-[0.9]"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
        <div className="space-y-6 lg:col-span-7 lg:pl-6">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            {siteData.aboutHeading}
          </h2>
          <div className="space-y-4 font-body text-base leading-[1.8] text-muted-foreground md:text-lg">
            {siteData.about.previewParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/projects">See my work</Link>
            </Button>
            <Button asChild className="rounded-full">
              <Link href="/about">Know me more</Link>
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
