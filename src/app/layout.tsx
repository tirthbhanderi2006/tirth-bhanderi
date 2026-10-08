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
  title: "Tirth Bhanderi | AI & ML Engineer",
  description: "Portfolio of Tirth Bhanderi, AI & ML Engineering student and full-stack developer.",
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
      className={`${geistSans.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
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
