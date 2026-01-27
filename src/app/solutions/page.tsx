"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Truck, Factory, ChevronRight, Clock, Battery, Zap, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

// New Components
import { FleetSimulator } from "@/components/solutions/FleetSimulator";
import { FacilityComparison } from "@/components/solutions/FacilityComparison";

function SolutionsContent() {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState<'logistics' | 'industrial'>('logistics');

    useEffect(() => {
        if (window.location.hash.includes('industrial')) {
            setActiveTab('industrial');
        } else {
            setActiveTab('logistics');
        }
    }, [searchParams]);

    return (
        <div className="flex flex-col w-full overflow-hidden bg-slate-50">
            {/* Dark Mode "Command" Header */}
            <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 bg-grid-pattern-dark opacity-10" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />

                <div className="container mx-auto px-6 relative z-10">
                    <FadeIn>
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
                                    Operational Command
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white">
                                Mission Critical <br />
                                <span className="text-slate-400">Infrastructure.</span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                                Deploy modular hydrogen systems configured for high-uptime environments. From 24/7 forklift fleets to grid-scale power balancing.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Tab Controller */}
            <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="flex gap-8 overflow-x-auto no-scrollbar">
                        <button
                            onClick={() => setActiveTab('logistics')}
                            className={`py-6 text-xs font-bold uppercase tracking-[0.2em] transition-all border-b-2 flex items-center gap-3 whitespace-nowrap ${activeTab === 'logistics'
                                    ? 'border-emerald-500 text-slate-950'
                                    : 'border-transparent text-slate-400 hover:text-slate-900'
                                }`}
                        >
                            <Truck size={18} className={activeTab === 'logistics' ? 'text-emerald-500' : 'text-slate-400'} />
                            Logistics Operations
                        </button>
                        <button
                            onClick={() => setActiveTab('industrial')}
                            className={`py-6 text-xs font-bold uppercase tracking-[0.2em] transition-all border-b-2 flex items-center gap-3 whitespace-nowrap ${activeTab === 'industrial'
                                    ? 'border-sky-500 text-slate-950'
                                    : 'border-transparent text-slate-400 hover:text-slate-900'
                                }`}
                        >
                            <Factory size={18} className={activeTab === 'industrial' ? 'text-sky-500' : 'text-slate-400'} />
                            Utility & Power
                        </button>
                    </div>
                </div>
            </div>

            <section className="py-20 md:py-32">
                <div className="container mx-auto px-6">
                    {/* LOGISTICS CONTENT */}
                    {activeTab === 'logistics' && (
                        <div className="space-y-32 animate-in fade-in slide-in-from-bottom-8 duration-700">

                            {/* Value Prop + Simulator */}
                            <div className="grid lg:grid-cols-12 gap-16">
                                <div className="lg:col-span-5 space-y-8">
                                    <div className="inline-block p-2 bg-emerald-100 rounded-sm">
                                        <Truck className="text-emerald-600" size={32} />
                                    </div>
                                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
                                        Material Handling <br /> Without Limits.
                                    </h2>
                                    <p className="text-lg text-slate-500 leading-relaxed">
                                        Batteries slow you down. Lead-acid charging cycles create massive gaps in productivity, requiring expensive battery rooms and swapping stations.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 p-4 bg-white border border-slate-200 shadow-sm rounded-sm">
                                            <div className="w-10 h-10 bg-emerald-50 flex items-center justify-center rounded-full text-emerald-600 font-bold">1</div>
                                            <div className="text-sm">
                                                <span className="block font-bold text-slate-900">3-Minute Refuel</span>
                                                <span className="text-slate-500">Matches diesel workflow.</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 bg-white border border-slate-200 shadow-sm rounded-sm">
                                            <div className="w-10 h-10 bg-emerald-50 flex items-center justify-center rounded-full text-emerald-600 font-bold">2</div>
                                            <div className="text-sm">
                                                <span className="block font-bold text-slate-900">Constant Voltage</span>
                                                <span className="text-slate-500">No performance sag at end of shift.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-7">
                                    <FleetSimulator />
                                </div>
                            </div>

                            {/* Facility Comparison */}
                            <FacilityComparison />

                        </div>
                    )}

                    {/* INDUSTRIAL CONTENT */}
                    {activeTab === 'industrial' && (
                        <div className="space-y-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
                            <div className="grid lg:grid-cols-2 gap-20 items-center">
                                <div>
                                    <div className="inline-block p-2 bg-sky-100 rounded-sm mb-8">
                                        <Zap className="text-sky-600" size={32} />
                                    </div>
                                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
                                        Grid-Firming Power.
                                    </h2>
                                    <p className="text-lg text-slate-500 leading-relaxed mb-8">
                                        Variable renewable energy (VRE) destabilizes the grid. Our containerized PowerPods act as a buffer, storing excess solar/wind as hydrogen and dispatching it back as electrons when demand peaks.
                                    </p>
                                    <ul className="space-y-4 text-slate-600">
                                        <li className="flex items-center gap-3">
                                            <Activity size={18} className="text-sky-500" />
                                            <span>Frequency Regulation (Fast Response)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <Battery size={18} className="text-sky-500" />
                                            <span>Long Duration Storage (12hr - 14 Days)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <Factory size={18} className="text-sky-500" />
                                            <span>Black Start Capability</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-slate-950 p-12 text-white border border-slate-800 relative overflow-hidden rounded-xl">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
                                    <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">PowerPod Capabilities</h4>
                                    <div className="space-y-8">
                                        <div>
                                            <div className="flex justify-between mb-2 text-sm">
                                                <span className="text-slate-400">Response Time</span>
                                                <span className="font-mono text-sky-400">&lt; 100ms</span>
                                            </div>
                                            <div className="h-1 bg-slate-800 w-full"><div className="h-full w-full bg-sky-500"></div></div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2 text-sm">
                                                <span className="text-slate-400">Scalability</span>
                                                <span className="font-mono text-sky-400">200kW - 50MW</span>
                                            </div>
                                            <div className="grid grid-cols-5 gap-1">
                                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-8 bg-sky-500/20 border border-sky-500/50" />)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default function SolutionsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-950"></div>}>
            <SolutionsContent />
        </Suspense>
    );
}
