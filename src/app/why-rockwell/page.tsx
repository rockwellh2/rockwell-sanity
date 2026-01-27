"use client";

import Link from "next/link";
import { Users, ShieldCheck, Settings, Phone } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HUDLabel } from "@/components/ui/HUDLabel";
import { FadeIn } from "@/components/ui/FadeIn";

const TeamCard = ({ name, role, phone }: { name: string, role: string, phone: string }) => (
    <div className="bg-white border border-slate-200 p-8 hover:border-emerald-500 transition-all group">
        <div className="w-12 h-12 bg-slate-950 text-white flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
            <Users size={24} />
        </div>
        <h4 className="text-xl font-bold mb-1 text-slate-950">{name}</h4>
        <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-6">{role}</p>
        <a href={`tel:${phone.replace(/\D/g, '')}`} className="text-sm font-mono font-bold text-slate-400 hover:text-slate-950 transition-colors flex items-center gap-2">
            <Phone size={14} /> {phone}
        </a>
    </div>
);

const ValueCard = ({ title, desc }: { title: string, desc: string }) => (
    <div className="p-10 bg-white border border-slate-100 relative group overflow-hidden hover:shadow-lg transition-all">
        <div className="absolute top-0 left-0 w-1 h-0 bg-emerald-500 group-hover:h-full transition-all duration-700" />
        <h4 className="font-bold text-xl mb-4 text-slate-950">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
);

export default function WhyRockwellPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            {/* HERO */}
            <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <FadeIn>
                        <SectionHeader
                            subtitle="Generational Engineering"
                            title="30 Years of Innovation."
                            description="Rockwell H2 Systems is a family-owned engineering firm built on the standard of industrial reliability. We aren't a startup. We're a builder."
                        />
                    </FadeIn>
                </div>
            </section>

            {/* STORY & TEAM */}
            <section className="bg-slate-50 border-y border-slate-200 py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-slate-200" />
                            <h3 className="text-4xl font-bold tracking-tight mb-8 text-slate-950">Engineering Lineage.</h3>
                            <div className="space-y-6 text-slate-500 text-lg leading-relaxed mb-8">
                                <p>
                                    Founded by Brad and Nick Rockwell, we've spent decades in the industrial engineering sector.
                                </p>
                                <p>
                                    We watched the "Green Energy" boom bring a lot of promises and very little hardware. We saw companies selling renderings instead of reactors.
                                </p>
                                <p>
                                    So we built Rockwell H2 to be different. We don't care about venture capital hype cycles. We care about building infrastructure that lasts for 25+ years in harsh conditions.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-sm font-bold text-slate-950">
                                    <ShieldCheck className="text-emerald-500" /> ASME & ISO Certified Design
                                </div>
                                <div className="flex items-center gap-4 text-sm font-bold text-slate-950">
                                    <Users className="text-emerald-500" /> Veteran Deployment Teams
                                </div>
                                <div className="flex items-center gap-4 text-sm font-bold text-slate-950">
                                    <Settings className="text-emerald-500" /> Proprietary Resilience Controllers
                                </div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <TeamCard name="Brad Rockwell" role="Principal Engineer" phone="(714) 305-3300" />
                            <TeamCard name="Nick Rockwell" role="Operations Director" phone="(510) 960-0261" />
                        </div>
                    </div>

                    <div className="mb-12">
                        <HUDLabel color="emerald">Core Principles</HUDLabel>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        <ValueCard title="Integrity First" desc="We give you honest ROI modeling, including potential risks and infrastructure requirements. If hydrogen isn't right for you, we'll tell you." />
                        <ValueCard title="Practical Innovation" desc="We focus on deployment-ready technology, not experimental lab-bench prototypes. Our gear runs in the mud, rain, and heat." />
                        <ValueCard title="Generational Value" desc="We build systems for the long haul. Our goal is to make your facility energy independent for the next generation of ownership." />
                    </div>
                </div>
            </section>
        </div>
    );
}
