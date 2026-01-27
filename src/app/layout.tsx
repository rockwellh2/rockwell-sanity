import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google"; // Changed font imports
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundController } from "@/components/effects/BackgroundController";

// Body font - Clean, readable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

// Heading font - Premium, geometric
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

// Tech font - HUD, Data, Specs
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Rockwell H2 | Industrial Hydrogen Infrastructure",
  description: "Modular, on-site hydrogen production and storage systems for industrial resilience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        <BackgroundController />
        {/* Contrast Overlay - Subtle tint to ensure text readability */}
        <div className="fixed inset-0 bg-slate-50/60 -z-10 pointer-events-none mix-blend-multiply" />
        <Navbar />
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
