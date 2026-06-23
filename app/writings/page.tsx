import { PageShell, Section } from "@/components/site/page-shell";
import { WritingsList } from "@/components/site/writings-list";
import { getWritings } from "@/lib/writings";

export default async function WritingsPage() {
  const writings = await getWritings();

  return (
    <PageShell>
      <Section label="Writings">
        <WritingsList writings={writings} />
      </Section>
    </PageShell>
  );
}
