"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Truck, Factory, ChevronRight, Clock, Battery, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

function SolutionsContent() {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState<'logistics' | 'industrial'>('logistics');

    useEffect(() => {
        const section = searchParams.get('section'); // Not strictly used by next/link standard anchor, but good for linking state
        // Hash handling is usually client-side only, simple toggle here for demo
        if (window.location.hash.includes('industrial')) {
            setActiveTab('industrial');
        } else {
            setActiveTab('logistics');
        }
    }, [searchParams]);

    return (
        <div className="flex flex-col w-full overflow-hidden">
            <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <FadeIn>
                        <SectionHeader
                            subtitle="Industry Solutions"
                            title="Built for your Sector."
                            description="Whether you are moving pallets or powering a plant, we have a configured hydrogen system for you."
                        />
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        {/* Tab Switcher */}
                        <div className="flex flex-col md:flex-row gap-0 mb-20 border-b border-slate-200">
                            <button
                                onClick={() => setActiveTab('logistics')}
                                className={`px-12 py-6 font-black uppercase tracking-[0.2em] text-xs transition-all border-b-4 ${activeTab === 'logistics' ? 'bg-slate-50 border-emerald-500 text-slate-950' : 'bg-white border-transparent text-slate-400 hover:text-slate-900'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <Truck size={20} />
                                    Logistics & Fleets
                                </div>
                            </button>
                            <button
                                onClick={() => setActiveTab('industrial')}
                                className={`px-12 py-6 font-black uppercase tracking-[0.2em] text-xs transition-all border-b-4 ${activeTab === 'industrial' ? 'bg-slate-50 border-emerald-500 text-slate-950' : 'bg-white border-transparent text-slate-400 hover:text-slate-900'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <Factory size={20} />
                                    Industrial & Utility
                                </div>
                            </button>
                        </div>

                        {/* LOGISTICS CONTENT */}
                        {activeTab === 'logistics' && (
                            <div className="grid lg:grid-cols-2 gap-20 items-center animate-in slide-in-from-bottom-4 duration-500 fade-in">
                                <div>
                                    <h3 className="text-5xl font-bold tracking-tighter mb-8 text-slate-950">Keep Moving.</h3>
                                    <div className="prose prose-slate prose-lg text-slate-500 mb-10">
                                        <p>
                                            In high-throughput warehouses, every minute of downtime costs money. Lead-acid batteries require 8 hours to charge and cool. Hydrogen fuel cells refuel in minutes.
                                        </p>
                                    </div>

                                    <div className="space-y-6 mb-10">
                                        <div className="flex items-start gap-4 p-6 border border-slate-100 bg-emerald-50/20">
                                            <Clock className="text-emerald-600 mt-1 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-slate-900">Refuel in 3 Minutes</h4>
                                                <p className="text-sm text-slate-500">Fast-fill dispensing matches diesel speeds. One driver, one fill, back to work.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-6 border border-slate-100 bg-emerald-50/20">
                                            <Battery className="text-emerald-600 mt-1 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-slate-900">Eliminate Battery Rooms</h4>
                                                <p className="text-sm text-slate-500">Reclaim thousands of square feet of facility space previously used for charging racks.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Link href="/contact">
                                        <Button size="lg" className="bg-slate-950 uppercase tracking-widest text-xs font-bold">
                                            Request Forklift Kit Info
                                        </Button>
                                    </Link>
                                </div>

                                <div className="bg-slate-100 p-12 border border-slate-200">
                                    <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Comparison Data</h4>

                                    <div className="space-y-8">
                                        <div>
                                            <div className="flex justify-between text-sm font-bold text-slate-900 mb-2">
                                                <span>H2 Refuel Time</span>
                                                <span className="text-emerald-600">3 mins</span>
                                            </div>
                                            <div className="h-4 bg-slate-200 w-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "5%" }}
                                                    transition={{ duration: 1, ease: "easeOut" }}
                                                    viewport={{ once: true }}
                                                    className="h-full bg-emerald-500"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex justify-between text-sm font-bold text-slate-900 mb-2">
                                                <span>Battery Charge Time</span>
                                                <span className="text-red-500">480 mins (8 hrs)</span>
                                            </div>
                                            <div className="h-4 bg-slate-200 w-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "100%" }}
                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                    viewport={{ once: true }}
                                                    className="h-full bg-red-400"
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-8 border-t border-slate-200">
                                            <div className="flex items-center gap-4">
                                                <Zap className="text-emerald-500" />
                                                <p className="text-sm font-bold text-slate-900">Zero performance drop-off as fuel tank empties.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* INDUSTRIAL CONTENT */}
                        {activeTab === 'industrial' && (
                            <div className="grid lg:grid-cols-2 gap-20 items-center animate-in slide-in-from-bottom-4 duration-500 fade-in">
                                <div>
                                    <h3 className="text-5xl font-bold tracking-tighter mb-8 text-slate-950">Energy Dispatch.</h3>
                                    <div className="prose prose-slate prose-lg text-slate-500 mb-10">
                                        <p>
                                            For utilities and heavy industry, the challenge isn't generation—it's storage. Our modular PowerPods turn intermittent renewables into baseload power.
                                        </p>
                                    </div>

                                    <div className="space-y-6 mb-10">
                                        <div className="flex items-start gap-4 p-6 border border-slate-100 bg-sky-50/20">
                                            <Zap className="text-sky-600 mt-1 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-slate-900">200kW - 10MW Scalability</h4>
                                                <p className="text-sm text-slate-500">Stackable containerized units allow you to start small and expand capacity.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-6 border border-slate-100 bg-sky-50/20">
                                            <Factory className="text-sky-600 mt-1 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-slate-900">Decarbonize Heat</h4>
                                                <p className="text-sm text-slate-500">Inject hydrogen into natural gas boilers or kilns to lower facility carbon intensity.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Link href="/technology">
                                        <Button size="lg" className="bg-slate-950 uppercase tracking-widest text-xs font-bold">
                                            View Tech Specs
                                        </Button>
                                    </Link>
                                </div>

                                <div className="bg-slate-950 p-12 text-white border border-slate-800 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                                    <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">PowerPod Capabilities</h4>
                                    <ul className="space-y-6 text-sm">
                                        <li className="flex items-center gap-4">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                            <span>Long-Duration Energy Storage (LDES)</span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                            <span>Grid Frequency Regulation</span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                            <span>Emergency Backup Power (UPS)</span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                            <span>Green Ammonia Feedstock</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                    </FadeIn>
                </div>
            </section>
        </div>
    );
}

export default function SolutionsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen"></div>}>
            <SolutionsContent />
        </Suspense>
    );
}
