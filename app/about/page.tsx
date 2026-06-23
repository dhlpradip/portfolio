import type { Metadata } from "next";
import { DetailedAbout } from "@/components/site/detailed-about";
import { PageShell, Section } from "@/components/site/page-shell";
import { siteData } from "@/lib/data";

export const metadata: Metadata = {
  title: siteData.aboutHeading,
  description: siteData.siteMeta.description,
};

export default function AboutPage() {
  return (
    <PageShell wide>
      <Section label="About">
        <DetailedAbout />
      </Section>
    </PageShell>
  );
}
