"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Fuel, Battery, DollarSign, Clock } from "lucide-react";

export function FleetSimulator() {
    const [fleetSize, setFleetSize] = useState([25]);
    const [shifts, setShifts] = useState([2]);

    // Simple ROI Logic
    // Assumption: 1 H2 fill = 3 mins vs 1 Battery Swap = 15 mins
    // Downtime saved per day = fleetSize * shifts * (15 - 3) mins
    const downtimeSavedMins = fleetSize[0] * shifts[0] * (15 - 3);
    const downtimeSavedHours = Math.round(downtimeSavedMins / 60);
    const annualHoursSaved = downtimeSavedHours * 260; // 260 working days
    // Assume $50/hr labor + opportunity cost
    const annualSavings = annualHoursSaved * 50;

    return (
        <div className="w-full bg-slate-950 border border-slate-800 p-8 rounded-sm relative overflow-hidden group">
            {/* Background Tech Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-900 to-transparent" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12">
                {/* Controls */}
                <div className="space-y-8">
                    <div>
                        <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-500 mb-2">
                            Fleet Parameters
                        </h4>
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Operational Impact Simulator
                        </h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-sm font-bold text-slate-400 mb-4">
                                <label>Fleet Size</label>
                                <span className="text-white font-mono">{fleetSize[0]} Units</span>
                            </div>
                            <Slider
                                defaultValue={[25]}
                                max={100}
                                step={5}
                                onValueChange={setFleetSize}
                                className="py-4"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between text-sm font-bold text-slate-400 mb-4">
                                <label>Daily Shifts</label>
                                <span className="text-white font-mono">{shifts[0]} Shifts</span>
                            </div>
                            <Slider
                                defaultValue={[2]}
                                max={3}
                                step={1}
                                onValueChange={setShifts}
                                className="py-4"
                            />
                        </div>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                        <div className="flex items-start gap-4">
                            <Fuel className="text-cyan-500 mt-1 shrink-0" size={20} />
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">
                                    Fueling Logic
                                </p>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    Comparing standard 3-minute H2 fill vs. 15-minute battery swap/charge cycle downtime.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Dashboard */}
                <div className="bg-slate-900/50 border border-slate-800 p-6 flex flex-col justify-center space-y-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <Clock className="text-cyan-500" size={18} />
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                                Annual Production Time Recovered
                            </span>
                        </div>
                        <div className="text-5xl font-bold text-white tracking-tighter">
                            {annualHoursSaved.toLocaleString()} <span className="text-lg text-slate-500 font-normal">hrs</span>
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-slate-800" />

                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <DollarSign className="text-cyan-500" size={18} />
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                                Est. Operational Savings
                            </span>
                        </div>
                        <div className="text-5xl font-bold text-cyan-400 tracking-tighter">
                            ${annualSavings.toLocaleString()}
                        </div>
                        <p className="text-xs text-slate-500 mt-2">
                            *Based on industry avg labor & burden rates.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
