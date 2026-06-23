import Link from "next/link";
import type { Writing } from "@/lib/types";
import { Reveal } from "@/components/site/reveal";

const typeLabels: Record<Writing["type"], string> = {
  poetry: "Poetry",
  essay: "Essay",
  note: "Note",
};

type WritingCardProps = {
  writing: Writing;
  index: number;
};

export function WritingCard({ writing, index }: WritingCardProps) {
  const date = new Date(writing.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Reveal delay={index * 0.06}>
      <Link
        href={`/writings/${writing.slug}`}
        className="group block border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 md:p-8"
      >
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <span className="text-primary">{typeLabels[writing.type]}</span>
          <span aria-hidden>·</span>
          <time dateTime={writing.publishedAt}>{date}</time>
          {writing.language && writing.language !== "en" && (
            <>
              <span aria-hidden>·</span>
              <span>{writing.language}</span>
            </>
          )}
        </div>
        <h2 className="mt-4 font-serif text-2xl font-medium transition-colors group-hover:text-primary md:text-3xl">
          {writing.title}
        </h2>
        <p className="mt-3 font-serif text-base leading-relaxed text-muted-foreground">
          {writing.excerpt}
        </p>
        <span className="mt-5 inline-block font-mono text-xs uppercase tracking-widest text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Read →
        </span>
      </Link>
    </Reveal>
  );
}
