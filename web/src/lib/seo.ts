import { Metadata } from 'next'

// SEO helper to generate consistent metadata
export function generatePageMetadata(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    page: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    siteSettings: any,
    lang: 'en' | 'es' = 'en'
): Metadata {
    const siteName = siteSettings?.siteName || 'My Website'
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    const title = page?.seo?.metaTitle || page?.title || siteName
    const description = page?.seo?.metaDescription || page?.description || ''

    return {
        title: page?.title ? `${page.title} | ${siteName}` : siteName,
        description,
        openGraph: {
            title,
            description,
            url: siteUrl,
            siteName,
            locale: lang === 'es' ? 'es_ES' : 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
    }
}
