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
    images: [{ url: siteData.siteMeta.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    site: siteData.siteMeta.twitterHandle,
    title: siteData.siteMeta.title,
    description: siteData.siteMeta.description,
    images: [siteData.siteMeta.ogImage],
  },
  icons: { icon: "/hacked.png" },
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
