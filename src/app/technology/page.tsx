"use client";

import Link from "next/link";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { HUDLabel } from "@/components/ui/HUDLabel";
import { TechSystemMap } from "@/components/technology/TechSystemMap";

export default function TechnologyPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-white">

            {/* 1. TECHNICAL HERO */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="absolute inset-0 bg-grid-pattern opacity-40" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        {/* Left: Headline */}
                        <div className="lg:col-span-7">
                            <HUDLabel color="emerald" className="mb-6">System Architecture</HUDLabel>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-950 mb-6 leading-[0.9]">
                                The Hardware.
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-10">
                                A modular, containerized platform designed for rapid deployment and industrial reliability.
                                Scalable from pilot to gigawatt-scale.
                            </p>
                            <div className="flex gap-4">
                                <Link href="/contact">
                                    <Button className="h-14 px-8 bg-slate-950 text-white hover:bg-emerald-600 text-xs font-bold uppercase tracking-[0.2em] rounded-sm shadow-xl transition-all">
                                        Configure System
                                    </Button>
                                </Link>
                                <Button variant="outline" className="h-14 px-8 border-slate-300 text-slate-600 bg-white hover:text-slate-950 text-xs font-bold uppercase tracking-[0.2em] rounded-sm">
                                    Download Specs
                                </Button>
                            </div>
                        </div>

                        {/* Right: Platform Snapshot Card */}
                        <div className="lg:col-span-5">
                            <div className="blueprint-card p-8 bg-white shadow-2xl">
                                <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400">Platform Snapshot</span>
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                </div>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600 text-sm font-medium">Daily Capacity</span>
                                        <span className="font-mono text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">200 - 5,000 kg</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600 text-sm font-medium">Output Pressure</span>
                                        <span className="font-mono text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">350 / 700 bar</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600 text-sm font-medium">Purity</span>
                                        <span className="font-mono text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">99.999% (SAE J2719)</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600 text-sm font-medium">Footprint</span>
                                        <span className="font-mono text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">Standard ISO High-Cube</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PERFORMANCE STRIP */}
            <div className="bg-slate-950 py-12 border-b border-slate-800">
                <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center md:text-left">
                        <div className="text-3xl font-bold text-white mb-1">97%</div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">System Availability</div>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="text-3xl font-bold text-white mb-1">&lt;3 min</div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Refuel Time</div>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="text-3xl font-bold text-white mb-1">Zero</div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Scope 1 Emissions</div>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="text-3xl font-bold text-white mb-1">20 Yr</div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Design Life</div>
                    </div>
                </div>
            </div>

            {/* 3. SYSTEM MAP (Radial) */}
            <TechSystemMap />

            {/* 4. SPECS TABLE */}
            <section id="specs" className="bg-white py-24">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="mb-10 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Technical Specifications.</h3>
                        <p className="text-slate-500">Detailed baseline performance metrics for the Series-A PowerPod.</p>
                    </div>

                    <div className="bg-white border-y-2 border-slate-950 overflow-hidden">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-slate-950 font-mono text-[10px] uppercase tracking-widest">
                                <tr>
                                    <th className="py-4 pl-4 md:pl-8">Metric</th>
                                    <th className="py-4">Value</th>
                                    <th className="py-4 pr-4 md:pr-8 text-right hidden md:table-cell">Standard</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 font-mono text-xs md:text-sm">
                                <tr className="group hover:bg-emerald-50/50 transition-colors">
                                    <td className="py-5 pl-4 md:pl-8 font-bold text-slate-700">Production Rate</td>
                                    <td className="py-5 font-bold text-slate-900">200 - 500 kg/day</td>
                                    <td className="py-5 pr-4 md:pr-8 text-right text-slate-400 hidden md:table-cell">ISO Rated</td>
                                </tr>
                                <tr className="group hover:bg-emerald-50/50 transition-colors">
                                    <td className="py-5 pl-4 md:pl-8 font-bold text-slate-700">Water Consumption</td>
                                    <td className="py-5 font-bold text-slate-900">1.8 gal / kg H2</td>
                                    <td className="py-5 pr-4 md:pr-8 text-right text-slate-400 hidden md:table-cell">Potable Input</td>
                                </tr>
                                <tr className="group hover:bg-emerald-50/50 transition-colors">
                                    <td className="py-5 pl-4 md:pl-8 font-bold text-slate-700">Stack Efficiency</td>
                                    <td className="py-5 font-bold text-slate-900">48 kWh / kg</td>
                                    <td className="py-5 pr-4 md:pr-8 text-right text-slate-400 hidden md:table-cell">System LHV</td>
                                </tr>
                                <tr className="group hover:bg-emerald-50/50 transition-colors">
                                    <td className="py-5 pl-4 md:pl-8 font-bold text-slate-700">Ambient Op. Temp</td>
                                    <td className="py-5 font-bold text-slate-900">-20°C to +45°C</td>
                                    <td className="py-5 pr-4 md:pr-8 text-right text-slate-400 hidden md:table-cell">IEC 60068</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Button variant="outline" className="gap-2 border-slate-300 text-slate-600 hover:text-slate-950 hover:border-slate-950">
                            <Download size={16} />
                            Download Full Engineering Sheet (PDF)
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
