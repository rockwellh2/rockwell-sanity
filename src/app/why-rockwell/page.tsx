"use client";

import Link from "next/link";
import { Users, Shield, History, ArrowRight, Phone, Award, Wrench } from "lucide-react";

// ============================================================
// ABOUT / WHY ROCKWELL PAGE - "The Conversion Machine" Design
// Build trust with company story and team profiles
// ============================================================

export default function WhyRockwellPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-white">

            {/* ============================================================
          1. HERO SECTION
          ============================================================ */}
            <section className="relative bg-slate-50 pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-grid-pattern"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                        <History size={12} /> Family-Owned Since 1994
                    </div>

                    <h1 className="heading-hero mb-6">
                        Built by <span className="text-green-600">Industrial Engineers.</span>
                    </h1>

                    <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
                        Rockwell H2 is a family-owned engineering firm with 30 years of industrial deployment experience. We build systems that run, get serviced, and scale with your operation.
                    </p>

                    <Link href="/contact" className="btn-cta inline-flex items-center gap-2">
                        Talk to the Engineering Team <ArrowRight size={18} />
                    </Link>
                    </div>
                </div>
            </section>

            {/* ============================================================
          2. THE ROCKWELL DIFFERENCE
          ============================================================ */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="heading-section text-center mb-4">Why Rockwell?</h2>
                    <p className="text-center text-body mb-16 max-w-2xl mx-auto">
                        Built for real uptime: field-serviceable hardware, audit-ready compliance, and long-term support.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <DifferentiatorCard
                            icon={<History className="text-blue-600" />}
                            title="30 Years Experience"
                            description="Industrial systems since 1994, from controls to field deployments. Built for harsh environments and real duty cycles."
                        />
                        <DifferentiatorCard
                            icon={<Shield className="text-green-600" />}
                            title="Zero Safety Incidents"
                            description="Safety-first design with redundant containment, monitoring, and audit trails across every deployment."
                        />
                        <DifferentiatorCard
                            icon={<Wrench className="text-orange-500" />}
                            title="Turnkey Installation"
                            description="We install, commission, and train. No hand-offs, no gaps, and no guessing at go-live."
                        />
                    </div>
                </div>
            </section>

            {/* ============================================================
          3. OUR STORY (TIMELINE)
          ============================================================ */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="heading-section text-center mb-4">Our Lineage</h2>
                    <p className="text-center text-body mb-16 max-w-2xl mx-auto">
                        We watched the market flood with promises and little hardware. We built Rockwell H2 to deploy systems that operate for decades.
                    </p>

                    <div className="space-y-8">
                        <TimelineItem
                            year="1994"
                            title="Rockwell Engineering Founded"
                            description="Rockwell Engineering launches with a focus on industrial controls and power integration."
                        />
                        <TimelineItem
                            year="2010"
                            title="First Hydrogen Projects"
                            description="First hydrogen pilots for industrial storage and fueling applications."
                        />
                        <TimelineItem
                            year="2018"
                            title="PowerPod Concept"
                            description="Prototype of containerized production, compression, and storage modules."
                        />
                        <TimelineItem
                            year="2022"
                            title="IRA Changes the Game"
                            description="IRA incentives accelerate demand. We expand manufacturing and deployment capacity."
                        />
                        <TimelineItem
                            year="2024"
                            title="Rockwell H2 Launches"
                            description="Dedicated hydrogen division launches with turnkey deployments and service programs."
                        />
                    </div>
                </div>
            </section>

            {/* ============================================================
          4. TEAM SECTION
          ============================================================ */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="heading-section text-center mb-4">Meet the Team</h2>
                    <p className="text-center text-body mb-16 max-w-2xl mx-auto">
                        When you call, you get an engineer. No gatekeepers, no sales decks.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <TeamCard
                            name="Brad Rockwell"
                            role="Principal Engineer"
                            phone="(714) 305-3300"
                            bio="30+ years in industrial systems. Brad designs and deploys infrastructure built for high uptime."
                        />
                        <TeamCard
                            name="Nick Rockwell"
                            role="Operations Director"
                            phone="(510) 960-0261"
                            bio="Oversees deployment and service. Nick ensures every system runs at peak performance in the field."
                        />
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-slate-500 mb-6">
                            Questions? Call us directly. We answer our own phones.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="tel:714-305-3300" className="btn-secondary inline-flex items-center gap-2">
                                <Phone size={16} /> (714) 305-3300
                            </a>
                            <a href="tel:510-960-0261" className="btn-secondary inline-flex items-center gap-2">
                                <Phone size={16} /> (510) 960-0261
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
          5. CERTIFICATIONS
          ============================================================ */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Compliance is Engineering.</h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Hydrogen systems demand rigorous adherence to safety codes. We design for compliance from day one with audit-ready documentation.
                            </p>

                            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 font-bold px-4 py-2 rounded-lg">
                                <Shield size={16} /> Zero Safety Incidents
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <CertBadge title="NFPA 2" description="Hydrogen Technologies Code" />
                            <CertBadge title="ISO 14687-2" description="Hydrogen Fuel Purity" />
                            <CertBadge title="45V Compliant" description="IRA Tax Credit Ready" />
                            <CertBadge title="UL Listed" description="Component Certification" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
          6. FINAL CTA
          ============================================================ */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                        Ready to talk to an engineer?
                    </h2>
                    <p className="text-slate-600 text-lg mb-10">
                        No sales pitch. Just a straight conversation about whether hydrogen fits your operation.
                    </p>
                    <Link href="/contact" className="btn-cta inline-flex items-center gap-2 text-lg">
                        Schedule a Call <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

        </div>
    );
}

// ============================================================
// SUB-COMPONENTS
// ============================================================

interface DifferentiatorCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function DifferentiatorCard({ icon, title, description }: DifferentiatorCardProps) {
    return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 card-hover">
            <div className="p-3 bg-white rounded-lg shadow-sm w-fit mb-6">{icon}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600">{description}</p>
        </div>
    );
}

interface TimelineItemProps {
    year: string;
    title: string;
    description: string;
}

function TimelineItem({ year, title, description }: TimelineItemProps) {
    return (
        <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-20 text-right">
                <span className="font-mono font-bold text-green-600 text-lg">{year}</span>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
            </div>
            <div className="pb-8">
                <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
                <p className="text-slate-600 text-sm">{description}</p>
            </div>
        </div>
    );
}

interface TeamCardProps {
    name: string;
    role: string;
    phone: string;
    bio: string;
}

function TeamCard({ name, role, phone, bio }: TeamCardProps) {
    return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
            <div className="w-20 h-20 bg-slate-300 rounded-full mb-6 flex items-center justify-center">
                <Users size={32} className="text-slate-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">{name}</h3>
            <p className="text-green-600 font-medium mb-4">{role}</p>
            <p className="text-slate-600 mb-6">{bio}</p>
            <a href={`tel:${phone.replace(/\D/g, '')}`} className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-green-600 transition-colors">
                <Phone size={16} /> {phone}
            </a>
        </div>
    );
}

interface CertBadgeProps {
    title: string;
    description: string;
}

function CertBadge({ title, description }: CertBadgeProps) {
    return (
        <div className="bg-white/10 border border-white/20 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
                <Award size={16} className="text-green-400" />
                <span className="font-bold text-white">{title}</span>
            </div>
            <p className="text-sm text-slate-400">{description}</p>
        </div>
    );
}
