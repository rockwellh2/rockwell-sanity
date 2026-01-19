import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About',
    description: 'Learn more about us and what we do.',
}

export default async function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                            About Us
                        </h1>
                        <p className="text-lg text-slate-300">
                            Learn more about our team, mission, and values.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-slate-600 text-lg leading-relaxed">
                                This is a template About page. Replace this content with information about your organization,
                                team, or project. You can fetch this content from Sanity CMS by creating an &quot;About&quot; document type.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-6 font-serif">Our Mission</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Add your mission statement here. This section can be made dynamic by connecting it to your Sanity CMS.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-6 font-serif">Our Values</h2>
                            <div className="grid md:grid-cols-2 gap-6 mt-8 not-prose">
                                <ValueCard title="Quality" description="We prioritize quality in everything we do." />
                                <ValueCard title="Innovation" description="We embrace new ideas and technologies." />
                                <ValueCard title="Integrity" description="We operate with honesty and transparency." />
                                <ValueCard title="Community" description="We believe in the power of collaboration." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

function ValueCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-slate-600">{description}</p>
        </div>
    )
}
