import type { Metadata } from "next";
import { ContactForm } from "@/components/site/contact-form";
import { PageShell, Section } from "@/components/site/page-shell";
import { siteData } from "@/lib/data";

export const metadata: Metadata = {
  title: siteData.contactHeading,
  description: siteData.contactSubheading,
};

export default function ContactPage() {
  return (
    <PageShell>
      <Section label="Say hello" alt>
        <ContactForm />
      </Section>
    </PageShell>
  );
}
