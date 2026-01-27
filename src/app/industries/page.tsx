"use client";

import { useState } from "react";
import { Factory, Truck, Database, Globe } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

type IndustryKey = 'Agriculture' | 'Logistics' | 'Critical Facilities' | 'Heavy Transport';

export default function IndustriesPage() {
    const [activeTab, setActiveTab] = useState<IndustryKey>('Agriculture');

    const ind = {
        'Agriculture': {
            icon: Factory,
            stat: '100%',
            benefit: 'Diesel replaced by onsite biomass-to-H2.',
            text: 'Turn winery or crop waste into energy independence. Secure your facility against grid outages with your own fuel supply.'
        },
        'Logistics': {
            icon: Truck,
            stat: '< 5 min',
            benefit: 'Refueling time vs. 8hr battery charging.',
            text: 'Keep your forklifts and heavy vehicles moving 24/7 with rapid onsite H2 fueling stations. No more battery swapping rooms.'
        },
        'Critical Facilities': {
            icon: Database,
            stat: '99.98%',
            benefit: 'Backup power uptime with zero noise.',
            text: 'Ideal for hospitals and data centers requiring mission-critical power without toxic diesel emissions or loud generators.'
        },
        'Heavy Transport': {
            icon: Globe,
            stat: '400+ mi',
            benefit: 'Range achieved with high payload capacity.',
            text: 'Long-haul decarbonization for heavy-duty trucking and public transport municipal agencies. Replaces diesel 1:1.'
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
                            title="Industrial Fit."
                            description="We understand the unique operational constraints of your environment."
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
                                    Request {activeTab} Whitepaper
                                </button>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
