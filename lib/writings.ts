import fs from "node:fs";
import path from "node:path";
import type { Writing, WritingType, WritingsCopy } from "@/lib/types";

export const writingsCopy: WritingsCopy = {
  title: "Things I've Written",
  subtitle:
    "Poems, notes, and stray thoughts — the words I didn't put in a pull request.",
  emptyMessage: "Nothing here yet. Check back when the ink dries.",
  previewBanner:
    "Preview only — this section is hidden from navigation until you flip NEXT_PUBLIC_WRITINGS_PUBLIC.",
};

/**
 * Writings live as markdown files in content/writings/.
 *
 * To add one: create content/writings/<slug>.md —
 *
 *   ---
 *   title: मेरो नयाँ कविता
 *   excerpt: The teaser shown on the /writings list page.
 *   type: poetry            (poetry | essay | note)
 *   publishedAt: 2026-07-20 (newest shows first)
 *   language: ne            (en | ne | mixed — optional)
 *   published: true         (false = draft, hidden everywhere)
 *   ---
 *   First line of the poem,
 *   second line,
 *
 *   next stanza after a blank line.
 *
 * The filename (minus .md) is the slug and the URL.
 */
const CONTENT_DIR = path.join(process.cwd(), "content", "writings");

function parseWritingFile(filename: string): Writing | null {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf8");
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return null;

  const meta: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    meta[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
  }

  // Body: everything after the frontmatter, minus leading/trailing blank
  // lines. Interior blank lines are stanza breaks and are preserved.
  const bodyLines = raw.slice(match[0].length).split(/\r?\n/);
  while (bodyLines.length && bodyLines[0].trim() === "") bodyLines.shift();
  while (bodyLines.length && bodyLines[bodyLines.length - 1].trim() === "")
    bodyLines.pop();

  const slug = filename.replace(/\.md$/, "");
  return {
    id: meta.id ?? slug,
    slug,
    title: meta.title ?? slug,
    excerpt: meta.excerpt ?? "",
    body: bodyLines,
    type: (meta.type as WritingType) ?? "note",
    publishedAt: meta.publishedAt ?? "1970-01-01",
    ...(meta.language
      ? { language: meta.language as Writing["language"] }
      : {}),
    published: meta.published !== "false",
  };
}

function loadWritings(): Writing[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"))
    .map(parseWritingFile)
    .filter((w): w is Writing => w !== null);
}

export async function getWritings(): Promise<Writing[]> {
  return loadWritings()
    .filter((w) => w.published)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export async function getWritingBySlug(
  slug: string
): Promise<Writing | undefined> {
  const writings = await getWritings();
  return writings.find((w) => w.slug === slug);
}

export async function getWritingSlugs(): Promise<string[]> {
  const writings = await getWritings();
  return writings.map((w) => w.slug);
}
