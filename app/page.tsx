import { Hero } from "@/components/site/hero";
import { AboutSection } from "@/components/site/about-section";
import { ProjectsSection } from "@/components/site/projects-section";
import { ExperienceSection } from "@/components/site/experience-section";
import { ContactSection } from "@/components/site/contact-section";
import { PageShell, Section } from "@/components/site/page-shell";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PageShell wide>
        <Section id="about" label="About">
          <AboutSection />
        </Section>
        <Section id="projects" label="Selected work" alt>
          <ProjectsSection home />
        </Section>
        <Section id="experience" label="Experience">
          <ExperienceSection />
        </Section>
        <Section id="contact" label="Say hello" alt>
          <ContactSection />
        </Section>
      </PageShell>
    </>
  );
}
