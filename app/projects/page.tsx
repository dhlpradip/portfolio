import type { Metadata } from "next";
import { ProjectsSection } from "@/components/site/projects-section";
import { PageShell, Section } from "@/components/site/page-shell";
import { siteData } from "@/lib/data";

export const metadata: Metadata = {
  title: siteData.projectsHeading,
  description: siteData.projectsSubheading,
};

export default function ProjectsPage() {
  return (
    <PageShell wide>
      <Section label="Selected work" alt>
        <ProjectsSection />
      </Section>
    </PageShell>
  );
}
