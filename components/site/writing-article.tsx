import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Writing } from "@/lib/types";
import { WritingsPreviewBanner } from "@/components/site/writings-preview-banner";

const typeLabels: Record<Writing["type"], string> = {
  poetry: "Poetry",
  essay: "Essay",
  note: "Note",
};

type WritingArticleProps = {
  writing: Writing;
};

export function WritingArticle({ writing }: WritingArticleProps) {
  const date = new Date(writing.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article>
      <WritingsPreviewBanner />
      <Link
        href="/writings"
        className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        All writings
      </Link>
      <header className="mb-10 border-b border-border pb-10">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <span className="text-primary">{typeLabels[writing.type]}</span>
          <span aria-hidden>·</span>
          <time dateTime={writing.publishedAt}>{date}</time>
        </div>
        <h1 className="mt-6 font-serif text-4xl font-medium leading-tight md:text-5xl">
          {writing.title}
        </h1>
      </header>
      <div
        className={`max-w-2xl font-serif text-lg text-foreground/90 md:text-xl ${
          writing.type === "poetry" ? "leading-[2]" : "space-y-4 leading-[1.9]"
        }`}
      >
        {writing.body.map((paragraph, i) =>
          paragraph === "" ? (
            <div key={i} className="h-6" aria-hidden />
          ) : (
            <p key={i}>{paragraph}</p>
          )
        )}
      </div>
    </article>
  );
}
