import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Heading font - Bold, industrial, trustworthy
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

// Body font - Modern, warm, readable
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

// Data font - Technical precision
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
  weight: ['400', '600'],
});

export const metadata: Metadata = {
  title: "Rockwell H2 | Green Hydrogen Systems for Farms & Warehouses",
  description: "Turn your renewable energy into reliable hydrogen fuel. Earn $3/kg in federal tax credits with our turnkey hydrogen production systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${plusJakarta.variable} ${ibmPlexMono.variable} font-sans antialiased flex flex-col min-h-screen bg-white text-slate-700`}
      >
        <Navbar />
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
