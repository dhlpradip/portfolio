/**
 * Feature flags. Writings are public by default; set
 * NEXT_PUBLIC_WRITINGS_PUBLIC=false to hide the section from
 * navigation and search engines again.
 */
export const features = {
  writingsPublic: process.env.NEXT_PUBLIC_WRITINGS_PUBLIC !== "false",
} as const;
