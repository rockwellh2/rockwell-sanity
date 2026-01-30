import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ScrollProgress } from "@/components/scroll-progress";

// User Requested Font: Raleway
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    default: "Rockwell H2 | Green Hydrogen Systems for Farms & Warehouses",
    template: "%s | Rockwell H2",
  },
  description: "Turn your renewable energy into reliable hydrogen fuel. Earn $3/kg in federal tax credits with our turnkey hydrogen production systems.",
  keywords: ["hydrogen", "green hydrogen", "fuel cells", "renewable energy", "tax credits", "45V", "ITC", "farms", "warehouses", "hydrogen production"],
  authors: [{ name: "Rockwell H2" }],
  creator: "Rockwell H2",
  publisher: "Rockwell H2",
  metadataBase: new URL("https://rockwellh2.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rockwellh2.com",
    siteName: "Rockwell H2",
    title: "Rockwell H2 | Green Hydrogen Systems for Farms & Warehouses",
    description: "Turn your renewable energy into reliable hydrogen fuel. Earn $3/kg in federal tax credits with our turnkey hydrogen production systems.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rockwell H2 - Green Hydrogen Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rockwell H2 | Green Hydrogen Systems for Farms & Warehouses",
    description: "Turn your renewable energy into reliable hydrogen fuel. Earn $3/kg in federal tax credits.",
    images: ["/og-image.jpg"],
    creator: "@rockwellh2",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${raleway.variable} font-raleway antialiased flex flex-col min-h-screen bg-white text-slate-900`}
      >
        <ScrollProgress />
        <Navbar />
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
