"use client";

import { motion } from "framer-motion";
import { Sun, Zap, Cylinder, Truck, ArrowRight, Factory } from "lucide-react";

export function SystemFlow() {
    const steps = [
        {
            id: "input",
            icon: Sun,
            label: "Input",
            sub: "Renwable Energy",
            color: "text-sky-500",
            bg: "bg-sky-500/10",
            border: "border-sky-500/20"
        },
        {
            id: "process",
            icon: Zap,
            label: "Electrolysis",
            sub: "H2 Production",
            color: "text-cyan-500",
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/20"
        },
        {
            id: "storage",
            icon: Cylinder,
            label: "Storage",
            sub: "500bar Containment",
            color: "text-indigo-500",
            bg: "bg-indigo-500/10",
            border: "border-indigo-500/20"
        },
        {
            id: "output",
            icon: Truck,
            label: "Offtake",
            sub: "Fueling / Power",
            color: "text-slate-500",
            bg: "bg-slate-500/10",
            border: "border-slate-500/20"
        }
    ];

    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-20">
            {/* Title */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-4">
                    The Ecosystem.
                </h2>
                <p className="text-slate-500 max-w-xl mx-auto">
                    An integrated value chain from renewable electrons to molecular fuel.
                </p>
            </div>

            {/* Flow Diagram */}
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10" />

                {steps.map((step, index) => (
                    <div key={step.id} className="relative flex flex-col items-center text-center group">
                        {/* Connector Arrow (Mobile) */}
                        {index < steps.length - 1 && (
                            <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-slate-300">
                                <ArrowRight size={16} className="rotate-90" />
                            </div>
                        )}

                        {/* Icon Node */}
                        <div className={`w-24 h-24 rounded-2xl ${step.bg} ${step.border} border-2 flex items-center justify-center mb-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg bg-white relative z-10`}>
                            <step.icon size={32} className={step.color} />

                            {/* Node Pulse */}
                            <div className={`absolute inset-0 rounded-2xl ${step.bg} opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500`} style={{ animationDuration: '2s' }} />
                        </div>

                        {/* Connector Arrow (Desktop Hover) */}
                        {index < steps.length - 1 && (
                            <div className="hidden md:block absolute top-10 -right-4 text-slate-200 z-0">
                                <ArrowRight size={24} />
                            </div>
                        )}

                        {/* Labels */}
                        <h3 className="font-bold text-slate-900 mb-1">{step.label}</h3>
                        <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-1 rounded-sm">
                            {step.sub}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
