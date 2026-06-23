import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell, Section } from "@/components/site/page-shell";
import { WritingArticle } from "@/components/site/writing-article";
import { features } from "@/lib/features";
import { getWritingBySlug, getWritingSlugs } from "@/lib/writings";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getWritingSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const writing = await getWritingBySlug(slug);

  if (!writing) {
    return { title: "Not found" };
  }

  return {
    title: writing.title,
    description: writing.excerpt,
    ...(features.writingsPublic
      ? {}
      : { robots: { index: false, follow: false } }),
  };
}

export default async function WritingPage({ params }: PageProps) {
  const { slug } = await params;
  const writing = await getWritingBySlug(slug);

  if (!writing) {
    notFound();
  }

  return (
    <PageShell>
      <Section label="Writings">
        <WritingArticle writing={writing} />
      </Section>
    </PageShell>
  );
}
