"use client";

import { useRef } from "react";
import { Zap, CircleDollarSign, Factory, TrendingUp, Sun, Wind, Plug } from "lucide-react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { FadeIn, FadeInItem } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ValueChain() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Input Refs
    const inputGridRef = useRef<HTMLDivElement>(null);
    const inputRERef = useRef<HTMLDivElement>(null);

    // Core System Ref
    const systemRef = useRef<HTMLDivElement>(null);

    // Output Refs
    const outputFuelRef = useRef<HTMLDivElement>(null);
    const outputCreditRef = useRef<HTMLDivElement>(null);
    const outputGridRevRef = useRef<HTMLDivElement>(null);

    return (
        <Section className="bg-white py-32 overflow-hidden">
            <div className="container mx-auto px-6">
                <SectionHeader
                    subtitle="The Ecosystem"
                    title="Revenue Engine."
                    description="Turn energy liabilities into profit centers using our integrated value chain."
                />

                <div
                    ref={containerRef}
                    className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 items-center p-4 lg:p-12 mt-12 bg-slate-50 border border-slate-100 rounded-3xl"
                >
                    {/* BEAMS: Inputs -> System */}
                    {/* Renewables -> System (Base + Pulse) */}
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={inputRERef}
                        toRef={systemRef}
                        duration={3}
                        pathColor="#e2e8f0"
                        gradientStartColor="#059669"
                        gradientStopColor="#34d399"
                        pathWidth={3}
                        curvature={-20}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={inputRERef}
                        toRef={systemRef}
                        duration={1.5} // Fast pulse
                        pathColor="transparent"
                        gradientStartColor="#ffffff" // White hot pulse
                        gradientStopColor="#34d399"
                        pathWidth={3}
                        curvature={-20}
                        delay={0.5}
                    />

                    {/* Grid -> System (Base + Pulse) */}
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={inputGridRef}
                        toRef={systemRef}
                        duration={3}
                        pathColor="#e2e8f0"
                        gradientStartColor="#0284c7"
                        gradientStopColor="#38bdf8"
                        pathWidth={3}
                        curvature={20}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={inputGridRef}
                        toRef={systemRef}
                        duration={1.5}
                        pathColor="transparent"
                        gradientStartColor="#ffffff"
                        gradientStopColor="#38bdf8"
                        pathWidth={3}
                        curvature={20}
                        delay={1.5}
                    />

                    {/* BEAMS: System -> Outputs */}
                    {/* Fuel Output */}
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={systemRef}
                        toRef={outputFuelRef}
                        duration={3}
                        pathColor="#e2e8f0"
                        gradientStartColor="#10b981"
                        gradientStopColor="#10b981"
                        pathWidth={3}
                        curvature={-20}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={systemRef}
                        toRef={outputFuelRef}
                        duration={1.5}
                        pathColor="transparent"
                        gradientStartColor="#ffffff"
                        gradientStopColor="#10b981"
                        pathWidth={3}
                        curvature={-20}
                        delay={0.2}
                    />

                    {/* Credit Output */}
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={systemRef}
                        toRef={outputCreditRef}
                        duration={3}
                        pathColor="#e2e8f0"
                        gradientStartColor="#10b981"
                        gradientStopColor="#ffd700"
                        pathWidth={3}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={systemRef}
                        toRef={outputCreditRef}
                        duration={1.5}
                        pathColor="transparent"
                        gradientStartColor="#ffffff"
                        gradientStopColor="#ffd700"
                        pathWidth={3}
                        delay={0.7}
                    />

                    {/* Grid Rev Output */}
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={systemRef}
                        toRef={outputGridRevRef}
                        duration={3}
                        pathColor="#e2e8f0"
                        gradientStartColor="#0ea5e9"
                        gradientStopColor="#10b981"
                        pathWidth={3}
                        curvature={20}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={systemRef}
                        toRef={outputGridRevRef}
                        duration={1.5}
                        pathColor="transparent"
                        gradientStartColor="#ffffff"
                        gradientStopColor="#10b981"
                        pathWidth={3}
                        curvature={20}
                        delay={1.2}
                    />


                    {/* COLUMN 1: INPUTS */}
                    <div className="flex flex-col gap-8 justify-center h-full relative z-10">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 text-center mb-4">Inputs</h4>

                        {/* Renewable Energy Node */}
                        <div ref={inputRERef} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center gap-4 hover:border-cyan-500 transition-colors w-full group">
                            <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-cyan-500 transition-colors">
                                <Sun size={20} className="text-cyan-600 group-hover:text-white" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">Renewables</div>
                                <div className="text-xs text-slate-500">Zero Marginal Cost</div>
                            </div>
                        </div>

                        {/* Grid Power Node */}
                        <div ref={inputGridRef} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center gap-4 hover:border-sky-500 transition-colors w-full group">
                            <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-sky-500 transition-colors">
                                <Plug size={20} className="text-sky-600 group-hover:text-white" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">Grid Connection</div>
                                <div className="text-xs text-slate-500">Arbitrage Power</div>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 2: SYSTEM */}
                    <div className="flex flex-col justify-center items-center h-full relative z-10">
                        <div ref={systemRef} className="relative w-full aspect-square max-w-[280px] bg-slate-950 rounded-full flex items-col justify-center items-center shadow-2xl border-4 border-slate-800 p-8 text-center group">
                            {/* Glowing Pulse Ring */}
                            <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-ping opacity-20" />

                            <div className="relative z-10">
                                <Factory size={48} className="text-cyan-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">PowerPod</h3>
                                <p className="text-xs text-slate-400 uppercase tracking-widest font-mono">Core Engine</p>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 3: OUTPUTS */}
                    <div className="flex flex-col gap-6 justify-center h-full relative z-10">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 text-center mb-4">Financial Outputs</h4>

                        {/* H2 Fuel Node */}
                        <div ref={outputFuelRef} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center gap-4 hover:border-cyan-500 transition-colors w-full group">
                            <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-cyan-500 transition-colors">
                                <FuelIcon />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">Diesel Replacement</div>
                                <div className="text-xs text-slate-500">Fuel Savings</div>
                            </div>
                        </div>

                        {/* Tax Credits Node */}
                        <div ref={outputCreditRef} className="p-4 bg-white border-2 border-cyan-100 rounded-xl shadow-md flex items-center gap-4 hover:border-cyan-500 transition-colors w-full group transform scale-105">
                            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-cyan-600 transition-colors">
                                <CircleDollarSign size={20} className="text-cyan-700 group-hover:text-white" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">Tax Credits (IRA)</div>
                                <div className="text-xs text-cyan-600 font-bold">$3.00/kg (PTC)</div>
                            </div>
                        </div>

                        {/* Grid Revenue Node */}
                        <div ref={outputGridRevRef} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center gap-4 hover:border-sky-500 transition-colors w-full group">
                            <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-sky-500 transition-colors">
                                <TrendingUp size={20} className="text-sky-600 group-hover:text-white" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">Grid Revenue</div>
                                <div className="text-xs text-slate-500">Demand Response</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </Section>
    );
}

function FuelIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 group-hover:text-white"><path d="M3 22v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" /><path d="M5 12V7a2 2 0 0 1 2-2h1" /><path d="M22 22H2" /><path d="M10 2h4" /><path d="M12 2v5" /></svg>
    )
}
