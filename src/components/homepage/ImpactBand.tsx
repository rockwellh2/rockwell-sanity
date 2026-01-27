"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { NumberTicker } from "@/components/magicui/number-ticker";

export function ImpactBand() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const metrics = [
        {
            label: "Production Credit",
            value: 3.00,
            prefix: "$",
            suffix: "/kg",
            desc: "Inflation Reduction Act (45V)",
            color: "text-emerald-400"
        },
        {
            label: "CapEx Investment",
            value: 30,
            prefix: "",
            suffix: "%",
            desc: "Investment Tax Credit (ITC)",
            color: "text-emerald-400"
        },
        {
            label: "Typical Payback",
            value: 2.5,
            prefix: "< ",
            suffix: " Yrs",
            desc: "With Combined Incentives",
            color: "text-white"
        },
        {
            label: "System Uptime",
            value: 99.9,
            prefix: "",
            suffix: "%",
            desc: "Industrial Reliability",
            color: "text-white"
        }
    ];

    return (
        <section ref={ref} className="w-full bg-slate-950 py-20 border-y border-slate-800 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="font-mono text-emerald-500 text-xs font-bold uppercase tracking-widest mb-2 block">Financial Impact</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            Profitability by Design.
                        </h2>
                    </div>
                    <p className="text-slate-400 max-w-md text-sm md:text-base leading-relaxed text-right md:text-left">
                        Federal incentives have shifted the baseline. Hydrogen production is no longer a cost center—it's an asset class with rapid ROI.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((m, i) => (
                        <div key={i} className="group p-6 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-emerald-500/30 transition-all duration-300">
                            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-4 group-hover:text-emerald-500 transition-colors">
                                {m.label}
                            </div>
                            <div className={`text-5xl font-bold tracking-tighter mb-2 ${m.color}`}>
                                {m.prefix}
                                {isInView ? (
                                    <NumberTicker value={m.value} decimalPlaces={m.value % 1 !== 0 ? 1 : 0} />
                                ) : (
                                    <span>0</span>
                                )}
                                <span className="text-2xl ml-1 opacity-60 font-medium">{m.suffix}</span>
                            </div>
                            <div className="text-xs text-slate-400 font-medium border-t border-slate-800 pt-4 mt-4 group-hover:border-emerald-500/20 transition-colors">
                                {m.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
