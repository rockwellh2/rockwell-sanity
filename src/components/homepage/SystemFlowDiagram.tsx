"use client";

import { Factory, Wind, Zap, ArrowRight, Battery, Truck, Leaf, CloudSun } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerChildren, FadeInItem } from "@/components/ui/FadeIn";

export function SystemFlowDiagram() {
    return (
        <div className="relative py-12 px-4 md:px-12">
            {/* Background Flow Line - Simplified for code */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 hidden md:block" />

            <StaggerChildren className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">

                {/* INPUTS */}
                <div className="space-y-4">
                    <FadeInItem>
                        <div className="glass-card-strong p-4 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform cursor-default">
                            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-700">
                                <Leaf className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-neutral-800">Waste / Biomass</span>
                        </div>
                    </FadeInItem>

                    <FadeInItem>
                        <div className="glass-card-strong p-4 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform cursor-default">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700">
                                <Wind className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-neutral-800">Renewable Power</span>
                        </div>
                    </FadeInItem>

                    <FadeInItem>
                        <div className="glass-card-strong p-4 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform cursor-default opacity-80">
                            <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600">
                                <Zap className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-neutral-600">Grid Connectivity</span>
                        </div>
                    </FadeInItem>
                </div>

                {/* CORE PROCESS */}
                <div className="flex flex-col items-center">
                    <ArrowRight className="text-primary/50 w-8 h-8 mb-2 rotate-90 md:rotate-0 md:hidden" />
                    <FadeInItem>
                        <div className="glass-card-strong p-8 rounded-2xl border-primary/20 shadow-primary/10 relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
                            <div className="relative z-10 text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Factory className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-2">H2 Production</h3>
                                <p className="text-sm text-neutral-500">Modular Electrolysis &<br />Thermal Conversion</p>
                            </div>
                        </div>
                    </FadeInItem>
                    <ArrowRight className="text-primary/50 w-8 h-8 mt-2 rotate-90 md:rotate-0 md:hidden" />
                </div>

                {/* OUTPUTS */}
                <div className="grid grid-cols-1 gap-4">
                    <FadeInItem>
                        <div className="glass-card-strong p-4 rounded-xl flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700">
                                <Battery className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="font-semibold text-neutral-800">Storage & Backup</div>
                                <div className="text-xs text-neutral-500">Long-duration energy</div>
                            </div>
                        </div>
                    </FadeInItem>

                    <FadeInItem>
                        <div className="glass-card-strong p-4 rounded-xl flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700">
                                <Truck className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="font-semibold text-neutral-800">Fueling</div>
                                <div className="text-xs text-neutral-500">Fleet mobility</div>
                            </div>
                        </div>
                    </FadeInItem>
                </div>

            </StaggerChildren>
        </div>
    );
}
