"use client";

import Link from 'next/link';
import { useRef } from 'react';
import {
    Leaf,
    Battery,
    Zap,
    Shield,
    Clock,
    ArrowRight,
    Factory,
    Truck,
    Building2,
    Cpu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HUDLabel } from "@/components/ui/HUDLabel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn, StaggerChildren, FadeInItem } from "@/components/ui/FadeIn";

export default function SolutionsPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-white">

            {/* ========== HERO ========== */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.12)_1px,transparent_0)] bg-[length:32px_32px]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-end">
                        <div>
                            <FadeIn direction="up">
                                <SectionHeader
                                    subtitle="Sector Applications"
                                    title="Industrial Decarbonization."
                                    description="On-site hydrogen infrastructure designed for heavy-duty operations, logistics, and grid-scale energy storage."
                                />
                            </FadeIn>

                            <FadeIn direction="up" delay={0.2} className="flex gap-4">
                                <Link href="/contact">
                                    <Button className="h-12 px-8 bg-slate-950 text-white hover:bg-emerald-600">Start Assessment</Button>
                                </Link>
                                <Link href="/technology">
                                    <Button variant="outline" className="h-12 px-8">Deep Dive Technology</Button>
                                </Link>
                            </FadeIn>
                        </div>

                        <div className="hidden lg:block">
                            <div className="bg-white border border-slate-200 shadow-2xl p-10 transform translate-y-12">
                                <HUDLabel color="blue">Efficiency Metrics</HUDLabel>
                                <div className="grid grid-cols-2 gap-8 mt-6">
                                    <div>
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">Fuel Payback</div>
                                        <div className="text-3xl font-bold text-slate-950">2.4 Yrs</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">Carbon Reduction</div>
                                        <div className="text-3xl font-bold text-slate-950">100%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== VERTICALS GRID ========== */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* LOGISTICS */}
                        <SolutionCard
                            icon={<Truck className="text-cyan-500" />}
                            title="Material Handling & Logistics"
                            desc="Fast-fueling hydrogen solutions for forklift fleets and yard tractors. Increase uptime with 3-minute refueling compared to 8-hour battery charges."
                            features={["3-Min Refuel Time", "Constant Power Output", "Zero Floor Space for Chargers"]}
                        />

                        {/* AGRICULTURE */}
                        <SolutionCard
                            icon={<Leaf className="text-emerald-500" />}
                            title="Agriculture & Biomass"
                            desc="Convert agricultural waste into clean hydrogen and biochar. Create a localized fuel loop that lowers operating costs for tractors and irrigation pumps."
                            features={["Waste-to-Fuel Loop", "Carbon Negative Biochar", "Energy Independence"]}
                        />

                        {/* BACKUP POWER */}
                        <SolutionCard
                            icon={<Building2 className="text-slate-950" />}
                            title="Mission Critical Backup"
                            desc="Replace diesel generators with localized hydrogen storage and fuel cells. Indefinite energy storage with zero degradation and zero emission standby."
                            features={["Zero Latency Dispatch", "Indefinite Storage", "ASME & UL Compliant"]}
                        />

                        {/* GRID SERVICES */}
                        <SolutionCard
                            icon={<Cpu className="text-blue-600" />}
                            title="Microgrids & Grid-Edge"
                            desc="Stabilize intermittent renewables by storing excess solar and wind as hydrogen. Peak shave and provide grid services with modular energy blocks."
                            features={["Load Balancing", "Renewable Stacking", "Automated Telemetry"]}
                        />

                        {/* INDUSTRIAL HEAT */}
                        <SolutionCard
                            icon={<Factory className="text-orange-500" />}
                            title="Industrial Heat & Feedstock"
                            desc="Decarbonize high-heat processes and chemical manufacturing. High-purity hydrogen delivery for steel, cement, and chemical verticals."
                            features={["99.999% Purity", "High-Flow Delivery", "On-site Generation"]}
                        />

                        {/* GOV & MUNICIPAL */}
                        <SolutionCard
                            icon={<Shield className="text-slate-500" />}
                            title="Government & Infrastructure"
                            desc="Resilient fuel infrastructure for public transit and municipal fleets. Modular units deployable in 20' ISO footprints with minimal site prep."
                            features={["Rapid Site Setup", "Public Transit Kits", "Federal 45V Compliant"]}
                        />

                    </div>
                </div>
            </section>

            {/* ========== TECH STRIP ========== */}
            <section className="bg-slate-950 py-24 text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="h-full w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,white_21px)]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl">
                            <HUDLabel color="emerald">The Platform Advantage</HUDLabel>
                            <h2 className="text-4xl font-bold tracking-tighter mb-6">Built to be Bulletproof.</h2>
                            <p className="text-slate-400 leading-relaxed">
                                Rockwell H2 systems are designed for 24/7 industrial uptime. We don't just sell equipment; we sell engineering results. Every module is monitored, maintained, and optimized by our remote response team.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 w-full md:w-auto">
                            <div className="p-6 border border-white/10 bg-white/5">
                                <div className="text-3xl font-bold text-emerald-400">99.5%</div>
                                <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mt-2">Target Uptime</div>
                            </div>
                            <div className="p-6 border border-white/10 bg-white/5">
                                <div className="text-3xl font-bold text-blue-400">12 Wks</div>
                                <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mt-2">Deployment</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

function SolutionCard({ icon, title, desc, features }: { icon: React.ReactNode, title: string, desc: string, features: string[] }) {
    return (
        <FadeIn direction="up" className="group h-full">
            <div className="bg-white border border-slate-100 p-8 h-full flex flex-col hover:border-slate-950 hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-slate-950 group-hover:text-white transition-all">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-4 tracking-tight">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                    {desc}
                </p>
                <ul className="space-y-3 pt-6 border-t border-slate-50">
                    {features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-slate-400">
                            <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                            {f}
                        </li>
                    ))}
                </ul>
            </div>
        </FadeIn>
    );
}
