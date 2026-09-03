import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  knowsAbout: [
    "Web development",
    "Software development",
    "AI solutions",
    "UI/UX design",
    "Mobile applications",
    "Cloud & deployment",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Software Development & Digital Products`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "software development agency",
    "custom software",
    "web development",
    "AI solutions",
    "mobile app development",
    "UI UX design",
    "cloud deployment",
    "SaaS development",
  ],
  authors: [{ name: "NONAME" }],
  creator: "NONAME",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Software Development & Digital Products`,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Software Development & Digital Products`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#050506",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
