"use client";

import { motion } from "framer-motion";

export function FacilityComparison() {
    return (
        <div className="w-full bg-white border border-slate-200 p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-cyan-500" />

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Text Context */}
                <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                        Facility Footprint
                    </h4>
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">
                        Reclaim Your Square Footage.
                    </h3>
                    <div className="prose prose-slate text-slate-500 mb-8">
                        <p>
                            Battery rooms are dead space. They require 24/7 HVAC, acid containment, and massive square footage for charging racks.
                        </p>
                        <p>
                            Rockwell H2 dispensers sit outdoors or at the dock door. You gain back valuable warehouse real estate for inventory.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100">
                            <span className="font-bold text-slate-900">Battery Room (50 trucks)</span>
                            <span className="font-mono font-bold text-red-500">~2,500 sq ft</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-cyan-50 border border-cyan-100">
                            <span className="font-bold text-slate-900">H2 Dispensing Pad</span>
                            <span className="font-mono font-bold text-cyan-600">~200 sq ft</span>
                        </div>
                    </div>
                </div>

                {/* Visual Diagram */}
                <div className="relative bg-slate-100 border border-slate-200 min-h-[300px] p-8 flex items-center justify-center">
                    {/* Grid Background */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-50" />

                    <div className="relative w-full aspect-square max-w-[300px] border-2 border-dashed border-slate-300 bg-white/50 flex flex-col items-center justify-center text-center p-4">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Battery Room Footprint</span>
                        <div className="w-full h-full bg-red-500/10 absolute inset-0 animate-pulse" />

                        {/* H2 Footprint Overlay */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                            viewport={{ once: true }}
                            className="absolute bottom-4 right-4 w-16 h-16 bg-cyan-500 border-2 border-cyan-600 shadow-xl flex items-center justify-center z-10"
                        >
                            <span className="text-[10px] font-bold text-white text-center leading-tight">H2<br />Pad</span>
                        </motion.div>
                    </div>

                    {/* Scale Label */}
                    <div className="absolute bottom-4 left-8 text-[10px] font-mono text-slate-400">
                        SCALE: 1:100 Comparison
                    </div>
                </div>
            </div>
        </div>
    );
}
