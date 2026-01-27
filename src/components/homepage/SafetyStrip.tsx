"use client";

import { ShieldAlert, Eye, Server, Siren } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";

export function SafetyStrip() {
    return (
        <section className="bg-amber-400 py-12 overflow-hidden relative border-y border-amber-500">
            {/* Hazard Stripe Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)'
            }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-black text-amber-500 rounded-sm">
                                <ShieldAlert size={24} />
                            </div>
                            <span className="font-mono text-xs font-bold uppercase tracking-widest text-black/80">
                                Safety First Design
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-black leading-tight uppercase tracking-tight">
                            NFPA-2 Compliance <br /> Standard.
                        </h3>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-black/10 p-6 border border-black/10 backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-2 font-bold text-black">
                                    <Eye size={20} />
                                    <span>Optical Flame Detection</span>
                                </div>
                                <p className="text-sm text-black/70 font-medium">
                                    Multi-spectrum IR/UV sensors monitor for invisible hydrogen flames.
                                </p>
                            </div>
                            <div className="bg-black/10 p-6 border border-black/10 backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-2 font-bold text-black">
                                    <Server size={20} />
                                    <span>Auto-Shutdown (ESD)</span>
                                </div>
                                <p className="text-sm text-black/70 font-medium">
                                    Instant isolation of high-pressure storage upon leak detection.
                                </p>
                            </div>
                            <div className="bg-black/10 p-6 border border-black/10 backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-2 font-bold text-black">
                                    <Siren size={20} />
                                    <span>Active Ventilation</span>
                                </div>
                                <p className="text-sm text-black/70 font-medium">
                                    Class 1 Div 2 rated fans prevent gas accumulation in enclosures.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
