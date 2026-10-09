import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#eef3f8",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CallAgentix — AI voice agents for sales & support calls",
    template: "%s | CallAgentix",
  },
  description:
    "CallAgentix is a B2B AI voice-calling product website with a scripted demonstration and illustrative sales and support workflows.",
  applicationName: "CallAgentix",
  category: "Artificial intelligence",
  keywords: [
    "AI voice agents",
    "AI calling product website",
    "sales call demo",
    "customer support workflow",
    "scripted call demo",
    "CallAgentix",
  ],
  publisher: "CallAgentix",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "CallAgentix — AI voice-calling product preview",
    description:
      "Explore AI voice-calling workflows for sales and support through an interactive product website and scripted demonstration.",
    url: "/",
    siteName: "CallAgentix",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "CallAgentix AI voice sales and support" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CallAgentix — AI voice agents for sales & support",
    description:
      "Explore the CallAgentix product concept and scripted call demonstration.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/brand/callagentix-mark.svg",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-[#0a0a0a] selection:text-white`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "CallAgentix",
                  url: siteUrl,
                  logo: `${siteUrl}/brand/callagentix-mark.svg`,
                  description:
                    "AI voice-calling product website and interactive demonstration.",
                },
                {
                  "@type": "WebSite",
                  name: "CallAgentix",
                  url: siteUrl,
                  description:
                    "AI voice-calling product preview for sales and support.",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "CallAgentix",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  url: siteUrl,
                  description:
                    "Interactive website presenting AI calling workflows with a scripted visual demonstration.",
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
