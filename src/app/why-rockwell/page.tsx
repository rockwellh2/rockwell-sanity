"use client";

import Link from "next/link";
import { Users, ShieldCheck, Settings, Phone, History, FileCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HUDLabel } from "@/components/ui/HUDLabel";
import { FadeIn } from "@/components/ui/FadeIn";

// New Components
import { HeritageTimeline } from "@/components/about/HeritageTimeline";
import { CertificationGrid } from "@/components/about/CertificationGrid";
import { EngineerProfile } from "@/components/about/EngineerProfile";

export default function WhyRockwellPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-slate-50">
            {/* HERO */}
            <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden bg-white border-b border-slate-200">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <div className="container mx-auto px-6 relative z-10">
                    <FadeIn>
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 mb-6">
                                <History size={14} className="text-slate-500" />
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                                    Est. 1994
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-slate-950">
                                Generational <br />
                                <span className="text-emerald-600">Engineering.</span>
                            </h1>
                            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
                                We aren't a startup selling a render. We are a family-owned engineering firm with 30 years of industrial deployment experience.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* TIMELINE SECTION */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4">
                            <div className="sticky top-32">
                                <SectionHeader
                                    subtitle="Our Lineage"
                                    title="Built to Last."
                                    description="We watched the 'Green Energy' boom bring a lot of promises and very little hardware. So we built Rockwell H2 to be different."
                                />
                                <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-sm">
                                    <h4 className="font-bold text-slate-900 mb-2">The Rockwell Standard</h4>
                                    <p className="text-sm text-slate-500">
                                        Every system we deploy is backed by our generational promise: we will service it, we will maintain it, and we will ensure it runs for decades.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <HeritageTimeline />
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM SECTION */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="mb-12 flex items-end justify-between">
                        <div>
                            <HUDLabel color="emerald">Command Staff</HUDLabel>
                            <h3 className="text-3xl font-bold text-slate-900 mt-4">Operational Leadership.</h3>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <EngineerProfile
                            name="Brad Rockwell"
                            role="Principal Engineer"
                            id="ENG-001"
                            phone="(714) 305-3300"
                        />
                        <EngineerProfile
                            name="Nick Rockwell"
                            role="Operations Director"
                            id="OPS-001"
                            phone="(510) 960-0261"
                        />
                        {/* Placeholder for future expansion */}
                        <div className="bg-slate-100 border border-dashed border-slate-300 flex items-center justify-center p-8 opacity-50">
                            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                                Field Units Deployed
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CERTIFICATIONS */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-noise opacity-10" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5">
                            <h3 className="text-3xl font-bold mb-6">Compliance is Verification.</h3>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Hydrogen systems require rigorous adherence to safety codes. We don't cut corners on compliance. We define the standard.
                            </p>
                            <div className="flex gap-4">
                                <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest rounded-sm">
                                    Zero Safety Incidents
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <CertificationGrid />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
