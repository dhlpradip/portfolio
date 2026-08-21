import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/site/theme-provider";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Toaster } from "@/components/ui/sonner";
import { siteData } from "@/lib/data";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.siteMeta.domain),
  title: {
    default: siteData.siteMeta.title,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.siteMeta.description,
  robots: { index: true, follow: true },
  alternates: { canonical: siteData.siteMeta.domain },
  verification: {
    google: siteData.siteMeta.googleVerifications,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteData.siteMeta.domain,
    siteName: siteData.name,
    title: siteData.siteMeta.title,
    description: siteData.siteMeta.description,
  },
  twitter: {
    card: "summary_large_image",
    site: siteData.siteMeta.twitterHandle,
    title: siteData.siteMeta.title,
    description: siteData.siteMeta.description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteData.name,
  url: siteData.siteMeta.domain,
  email: `mailto:${siteData.email}`,
  jobTitle: "Senior Frontend and Product Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Tribhuvan University, Institute of Engineering",
  },
  knowsAbout: siteData.capabilityGroups.flatMap((group) => group.skills),
  sameAs: siteData.socials.map((social) => social.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jetbrainsMono.variable} ${fraunces.variable}`}
    >
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
