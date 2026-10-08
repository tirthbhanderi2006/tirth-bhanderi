import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/ThemeProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SiteLoader } from "@/components/ui/SiteLoader";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tirth-bhanderi.vercel.app'),
  title: "Tirth Bhanderi | Software Developer & AI Enthusiast",
  description: "Portfolio of Tirth Bhanderi (Tirth Patel), BTech student and software developer from Gujarat, India. Specializing in AI/ML, full-stack, and mobile applications.",
  keywords: ["Tirth Bhanderi", "Tirth Patel", "Tirth Bhaderi", "Tirth Patel developer", "Tirth Bhanderi developer", "Tirth Patel Gujarat", "Tirth Patel software developer", "AI Engineer", "Software Developer"],
  authors: [{ name: "Tirth Bhanderi", url: "https://github.com/tirthbhanderi2006" }],
  creator: "Tirth Bhanderi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Tirth Bhanderi | Software Developer & AI Enthusiast",
    description: "Portfolio of Tirth Bhanderi (Tirth Patel), software developer and AI/ML engineering student from Gujarat, India.",
    siteName: "Tirth Bhanderi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirth Bhanderi | Software Developer & AI Enthusiast",
    description: "Portfolio of Tirth Bhanderi, software developer and AI enthusiast from Gujarat.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Tirth Bhanderi',
      alternateName: 'Tirth Patel',
      url: 'https://tirth-bhanderi.vercel.app',
      jobTitle: 'Software Developer',
      sameAs: [
        'https://github.com/tirthbhanderi2006',
        'https://www.linkedin.com/in/tirth-bhanderi-345763289/'
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Tirth Bhanderi Portfolio',
      url: 'https://tirth-bhanderi.vercel.app',
    }
  ];

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans transition-colors duration-700 ease-in-out relative">
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js" 
          strategy="beforeInteractive"
        />
        
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteLoader />
          <SmoothScroll>
            <CustomCursor />
            <ThemeToggle />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
