import type { Metadata } from "next";
import { ExperienceSection } from "@/components/site/experience-section";
import { PageShell, Section } from "@/components/site/page-shell";
import { siteData } from "@/lib/data";

export const metadata: Metadata = {
  title: siteData.experienceHeading,
  description: siteData.siteMeta.description,
};

export default function ExperiencePage() {
  return (
    <PageShell wide>
      <Section label="Experience">
        <ExperienceSection />
      </Section>
    </PageShell>
  );
}
