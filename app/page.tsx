import { Hero } from "@/components/site/hero";
import { AboutSection } from "@/components/site/about-section";
import { ProjectsSection } from "@/components/site/projects-section";
import { ExperienceSection } from "@/components/site/experience-section";
import { ContactSection } from "@/components/site/contact-section";
import { PageShell, Section } from "@/components/site/page-shell";
import { ImpactStrip } from "@/components/site/impact-strip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ImpactStrip />
      </div>
      <PageShell wide>
        <Section id="projects" label="Selected work">
          <ProjectsSection home />
        </Section>
        <Section id="experience" label="Experience" alt>
          <ExperienceSection />
        </Section>
        <Section id="about" label="About">
          <AboutSection />
        </Section>
        <Section id="contact" label="Say hello" alt>
          <ContactSection />
        </Section>
      </PageShell>
    </>
  );
}
