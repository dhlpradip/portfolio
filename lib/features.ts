/**
 * Feature flags. Flip NEXT_PUBLIC_WRITINGS_PUBLIC=true in .env.local
 * when writings are ready to appear in navigation and search engines.
 */
export const features = {
  writingsPublic: process.env.NEXT_PUBLIC_WRITINGS_PUBLIC === "true",
} as const;
