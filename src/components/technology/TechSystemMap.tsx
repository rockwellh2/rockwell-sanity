"use client";

import { Factory, Cylinder, Zap, Truck, Database } from "lucide-react";

export function TechSystemMap() {
    return (
        <section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-600 mb-2 block">
                        Architecture
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-950">
                        The PowerPod Platform.
                    </h2>
                </div>

                <div className="relative flex justify-center items-center min-h-[600px]">
                    {/* CONNECTOR LINES (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ maxHeight: '600px' }}>
                        {/* Center to Top (Electrolyzer) */}
                        <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                        {/* Center to Right (Storage) */}
                        <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                        {/* Center to Bottom (Fueling) */}
                        <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                        {/* Center to Left (Power) */}
                        <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                    </svg>

                    {/* CORE NODE */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-48 h-48 bg-slate-950 rounded-full flex flex-col items-center justify-center border-4 border-slate-200 shadow-2xl relative">
                            <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-ping opacity-20" />
                            <Database className="text-cyan-500 mb-3" size={40} />
                            <h3 className="text-white font-bold text-lg">Core Control</h3>
                            <span className="text-[10px] font-mono uppercase text-slate-500 mt-1">AI Logistics</span>
                        </div>
                    </div>

                    {/* PERIPHERAL NODES */}

                    {/* Top: Electrolyzer */}
                    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 z-10 w-64">
                        <TechCard
                            icon={Zap}
                            title="PowerPack"
                            label="Electrolyzer"
                            desc="PEM Stack Array"
                            specs="200kW - 1MW"
                        />
                    </div>

                    {/* Right: Storage */}
                    <div className="absolute top-1/2 right-[5%] -translate-y-1/2 z-10 w-64 hidden md:block">
                        <TechCard
                            icon={Cylinder}
                            title="PowerBank"
                            label="Storage"
                            desc="500bar Containment"
                            specs="300kg - 1000kg"
                        />
                    </div>

                    {/* Bottom: Dispensing */}
                    <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-10 w-64">
                        <TechCard
                            icon={Truck}
                            title="FuelModule"
                            label="Dispensing"
                            desc="J2601 Compliant"
                            specs="350 / 700 Bar"
                        />
                    </div>

                    {/* Left: Power */}
                    <div className="absolute top-1/2 left-[5%] -translate-y-1/2 z-10 w-64 hidden md:block">
                        <TechCard
                            icon={Factory}
                            title="PowerGen"
                            label="Re-Electrification"
                            desc="Fuel Cell Backup"
                            specs="100kW - 500kW"
                        />
                    </div>
                </div>

                {/* Mobile Fallback Grid (Visible on small screens only) */}
                <div className="md:hidden grid grid-cols-1 gap-4 mt-8">
                    <TechCard icon={Cylinder} title="PowerBank" label="Storage" desc="500bar Containment" specs="300kg+" />
                    <TechCard icon={Factory} title="PowerGen" label="Power" desc="FC Backup" specs="100kW+" />
                </div>
            </div>
        </section>
    );
}

function TechCard({ icon: Icon, title, label, desc, specs }: any) {
    return (
        <div className="blueprint-card p-6 flex flex-col items-center text-center bg-white group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 transition-colors">
                <Icon size={24} className="text-slate-700 group-hover:text-cyan-600" />
            </div>
            <span className="font-mono text-[10px] uppercase font-bold text-cyan-600 tracking-widest mb-1">{label}</span>
            <h4 className="text-xl font-bold text-slate-950 mb-2">{title}</h4>
            <div className="text-xs text-slate-500 mb-3">{desc}</div>
            <div className="hud-chip">{specs}</div>
        </div>
    )
}
