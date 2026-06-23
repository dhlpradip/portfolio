import type { Metadata } from "next";
import { features } from "@/lib/features";
import { writingsCopy } from "@/lib/writings";

export const metadata: Metadata = {
  title: writingsCopy.title,
  description: writingsCopy.subtitle,
  ...(features.writingsPublic
    ? {}
    : { robots: { index: false, follow: false } }),
};

export default function WritingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
