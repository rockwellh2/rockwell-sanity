"use client";

import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HUDLabel } from "@/components/ui/HUDLabel";
import { ProductModule } from "@/components/ui/ProductModule";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

export default function TechnologyPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);

    return (
        <div className="flex flex-col w-full overflow-hidden">
            {/* HER0 */}
            <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <FadeIn>
                        <SectionHeader
                            subtitle="Modular Infrastructure"
                            title="The Hardware."
                            description="Deep dive into the specific modules that make up the PowerPod platform. Scalable, containerized, and built for industry."
                        />
                    </FadeIn>
                </div>
            </section>

            {/* PRODUCT MODULES */}
            <section className="bg-slate-50 border-y border-slate-200 py-20 relative overflow-hidden">
                <div ref={containerRef} className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-4 gap-6 mb-20 relative">
                        {/* Beams connecting the modules */}
                        <div className="hidden lg:block">
                            <AnimatedBeam
                                containerRef={containerRef}
                                fromRef={div1Ref}
                                toRef={div2Ref}
                                duration={3}
                            />
                            <AnimatedBeam
                                containerRef={containerRef}
                                fromRef={div2Ref}
                                toRef={div3Ref}
                                duration={3}
                            />
                            <AnimatedBeam
                                containerRef={containerRef}
                                fromRef={div3Ref}
                                toRef={div4Ref}
                                duration={3}
                            />
                        </div>

                        <FadeIn delay={0.1}>
                            <div ref={div1Ref} className="relative z-10 h-full bg-white">
                                <ProductModule
                                    name="PowerPack"
                                    tag="Electrolyzers"
                                    specs="200kW / 500kW Variants"
                                    desc="High-efficiency proton exchange membrane (PEM) stacks designed for 24/7 industrial production. Turns water and power into gas."
                                />
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div ref={div2Ref} className="relative z-10 h-full bg-white">
                                <ProductModule
                                    name="PowerBank"
                                    tag="H2 Storage"
                                    specs="300kg+ Capacity"
                                    desc="Safe, low-pressure containment arrays with multi-stage compression and monitoring. Stores energy indefinitely without degradation."
                                />
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div ref={div3Ref} className="relative z-10 h-full bg-white">
                                <ProductModule
                                    name="PowerOnDemand"
                                    tag="Fuel Cells"
                                    specs="60kW / 300kW Output"
                                    desc="Modular fuel cell units that convert stored hydrogen back to electricity with zero latency. Seamless backup power."
                                />
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <div ref={div4Ref} className="relative z-10 h-full bg-white">
                                <ProductModule
                                    name="Fueling Module"
                                    tag="Dispensing"
                                    specs="350 / 700 Bar"
                                    desc="Industrial-grade dispensing systems for onsite heavy-duty fleets and equipment. Fill a forklift in 3 minutes."
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* SPECS TABLE */}
            <section id="specs" className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <HUDLabel color="slate">System Specification Sheet</HUDLabel>

                    <div className="bg-white border border-slate-200 p-8 md:p-12 overflow-x-auto shadow-xl mt-8">
                        <table className="w-full text-left font-mono text-xs uppercase tracking-widest text-slate-500">
                            <thead className="border-b-2 border-slate-950 text-slate-950">
                                <tr>
                                    <th className="pb-4 pt-2 pl-4">Metric</th>
                                    <th className="pb-4 pt-2">Standard Unit</th>
                                    <th className="pb-4 pt-2">Operational Range</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="group hover:bg-slate-50 transition-colors">
                                    <td className="py-4 pl-4 font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">H2 Production</td>
                                    <td className="py-4 text-emerald-600">90 - 225 kg/day</td>
                                    <td className="py-4 text-slate-400">Variable Load</td>
                                </tr>
                                <tr className="group hover:bg-slate-50 transition-colors">
                                    <td className="py-4 pl-4 font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Purity</td>
                                    <td className="py-4 text-emerald-600">99.999%</td>
                                    <td className="py-4 text-slate-400">ISO 14687-2</td>
                                </tr>
                                <tr className="group hover:bg-slate-50 transition-colors">
                                    <td className="py-4 pl-4 font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Water Input</td>
                                    <td className="py-4 text-emerald-600">Deionized</td>
                                    <td className="py-4 text-slate-400">~2 gal/kg H2</td>
                                </tr>
                                <tr className="group hover:bg-slate-50 transition-colors">
                                    <td className="py-4 pl-4 font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Pressure Output</td>
                                    <td className="py-4 text-emerald-600">30 Bar</td>
                                    <td className="py-4 text-slate-400">Compressible to 700 Bar</td>
                                </tr>
                                <tr className="group hover:bg-slate-50 transition-colors">
                                    <td className="py-4 pl-4 font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Footprint</td>
                                    <td className="py-4 text-emerald-600">20' ISO Container</td>
                                    <td className="py-4 text-slate-400">Modular Stackable</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/contact">
                            <Button className="h-14 px-10 bg-slate-950 text-white hover:bg-emerald-600 text-xs font-bold uppercase tracking-[0.2em] rounded-none shadow-xl transition-all">
                                Request Engineering Drawings
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
