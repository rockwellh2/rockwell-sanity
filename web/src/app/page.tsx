import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to our website. Built with Next.js and Sanity CMS.',
}

export default async function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
              Welcome to Your Website
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8">
              A modern, fast, and flexible website template built with Next.js 16 and Sanity CMS.
              Perfect for businesses, portfolios, and content-driven sites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
              >
                Learn More
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                View Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif">
            Template Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Sanity CMS"
              description="Powerful headless CMS for managing your content with real-time collaboration and preview."
            />
            <FeatureCard
              title="Next.js 16"
              description="The latest version of Next.js with App Router, Server Components, and optimized performance."
            />
            <FeatureCard
              title="Tailwind CSS"
              description="Utility-first CSS framework for rapid UI development with full customization support."
            />
            <FeatureCard
              title="TypeScript"
              description="Full TypeScript support for type-safe development and better developer experience."
            />
            <FeatureCard
              title="Netlify Ready"
              description="Pre-configured for Netlify deployment with edge functions and automatic builds."
            />
            <FeatureCard
              title="SEO Optimized"
              description="Built-in SEO best practices with meta tags, Open Graph, and structured data support."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Clone this template, connect your Sanity project, and start building your website today.
          </p>
          <a
            href="https://github.com/RBG-WebDesign/website-maker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  )
}
