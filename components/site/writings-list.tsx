import type { Writing } from "@/lib/types";
import { writingsCopy } from "@/lib/writings";
import { WritingCard } from "@/components/site/writing-card";
import { SectionHeading } from "@/components/site/page-shell";
import { WritingsPreviewBanner } from "@/components/site/writings-preview-banner";
import { Reveal } from "@/components/site/reveal";

type WritingsListProps = {
  writings: Writing[];
};

export function WritingsList({ writings }: WritingsListProps) {
  return (
    <div>
      <WritingsPreviewBanner />
      <Reveal>
        <SectionHeading
          title={writingsCopy.title}
          subtitle={writingsCopy.subtitle}
        />
      </Reveal>
      {writings.length === 0 ? (
        <p className="font-serif text-lg text-muted-foreground">
          {writingsCopy.emptyMessage}
        </p>
      ) : (
        <div className="space-y-4">
          {writings.map((writing, i) => (
            <WritingCard key={writing.id} writing={writing} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
