import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { getClient } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'
import { ClientLayout } from '@/components/layout/ClientLayout'
import { draftMode } from 'next/headers'
import PreviewOverlay from '@/components/PreviewOverlay'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
})

// TODO: Update these values for your project
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'My Website', // TODO: Update site name
    template: '%s | My Website'
  },
  description: 'A modern website built with Next.js and Sanity CMS.', // TODO: Update description
  keywords: ['website', 'next.js', 'sanity', 'cms'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'My Website',
    description: 'A modern website built with Next.js and Sanity CMS.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'My Website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'My Website',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Website',
    description: 'A modern website built with Next.js and Sanity CMS.',
    images: ['/og-image.png'],
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
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const draft = await draftMode()
  const settings = await getClient(draft.isEnabled).fetch(siteSettingsQuery)

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans selection:bg-yellow-200 selection:text-black`}
      >
        <ClientLayout announcement={settings?.announcement}>
          {children}
        </ClientLayout>
        <PreviewOverlay />
      </body>
    </html>
  )
}
