"use client";

import { useState } from "react";
import { Factory, Truck, Database, Globe } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

type IndustryKey = "Food & Agriculture" | "Logistics" | "Critical Infrastructure" | "Ports & Heavy Transport";

export default function IndustriesPage() {
    const [activeTab, setActiveTab] = useState<IndustryKey>("Logistics");

    const ind = {
        "Food & Agriculture": {
            icon: Factory,
            stat: "$3.00/kg",
            benefit: "IRA credits + onsite renewables.",
            text: "Convert solar or biogas into fuel for tractors, refrigeration, and processing loads. Replace diesel and stabilize operating costs season to season."
        },
        "Logistics": {
            icon: Truck,
            stat: "3 min",
            benefit: "Refuel time vs. 8hr charging.",
            text: "Keep forklifts and yard trucks moving with rapid onsite H2 fueling. No battery swap rooms, no performance drop‑off, full shift uptime."
        },
        "Critical Infrastructure": {
            icon: Database,
            stat: "99.99%",
            benefit: "Redundant backup power.",
            text: "Hospitals, data centers, and municipal facilities get weeks of silent, emissions‑free backup with long‑duration storage."
        },
        "Ports & Heavy Transport": {
            icon: Globe,
            stat: "400+ mi",
            benefit: "Range with full payload.",
            text: "Decarbonize drayage, port equipment, and heavy transport with high‑throughput fueling and scalable onsite production."
        }
    };

    const ActiveIcon = ind[activeTab].icon;

    return (
        <div className="flex flex-col w-full overflow-hidden">
            <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <FadeIn>
                            <SectionHeader
                                subtitle="Market Verticals"
                                title="Operational Fit."
                                description="Built for environments where uptime, throughput, and compliance are non‑negotiable."
                            />
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="flex flex-wrap gap-2 mb-12">
                            {Object.keys(ind).map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setActiveTab(t as IndustryKey)}
                                    className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest border transition-all ${activeTab === t ? 'bg-slate-950 text-white border-slate-950' : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'}`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>

                        <div className="bg-white border border-slate-200 p-12 shadow-xl flex flex-col md:flex-row gap-16 items-center">
                            <div className="md:w-1/3">
                                <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-8">
                                    <ActiveIcon size={40} strokeWidth={1} />
                                </div>
                                <div className="text-5xl font-black tracking-tighter text-slate-950 mb-2">{ind[activeTab].stat}</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-emerald-600">{ind[activeTab].benefit}</div>
                            </div>
                            <div className="md:w-2/3">
                                <h3 className="text-3xl font-bold mb-6 tracking-tight text-slate-950">{activeTab} Focus</h3>
                                <p className="text-xl text-slate-500 leading-relaxed">{ind[activeTab].text}</p>
                                <button className="mt-10 px-8 py-3 bg-slate-50 text-slate-950 font-bold uppercase tracking-widest text-[10px] border border-slate-100 hover:bg-slate-100 transition-all">
                                    Request {activeTab} Brief
                                </button>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
