"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
    Zap,
    Battery,
    Fuel,
    CheckCircle,
    ArrowRight,
    Box,
    Factory
} from "lucide-react";

// ============================================================
// PLATFORM PAGE - Modular System Overview
// ============================================================

export default function PlatformPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-white">

            {/* ============================================================
          1. HERO SECTION
          ============================================================ */}
            <section className="relative bg-slate-50 pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-grid-pattern"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <SectionHeader
                        subtitle="Modular Infrastructure"
                        title="Produce, Store & Dispatch Hydrogen."
                        description="PowerPod is a modular, containerized platform that scales from pilot deployments to multi‑megawatt sites. Each block is pre‑tested and serviceable in the field."
                        className="mx-auto text-center items-center flex flex-col"
                    />

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/contact" className="btn-cta inline-flex items-center gap-2">
                            Request Platform Quote <ArrowRight size={18} />
                        </Link>
                        <Link href="#specs" className="btn-secondary">
                            View Specifications
                        </Link>
                    </div>
                </div>
            </section>

            {/* ============================================================
          2. PRODUCT MODULES GRID
          ============================================================ */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="heading-section text-center mb-4">Core System Modules</h2>
                    <p className="text-center text-body mb-16 max-w-2xl mx-auto">
                        Four integrated blocks turn electricity into hydrogen and back into usable energy.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <ProductCard
                            name="PowerPack"
                            tagline="Electrolyzers"
                            icon={<Zap className="text-orange-500" />}
                            specs="200kW / 500kW Variants"
                            description="High‑efficiency PEM stacks designed for 24/7 production. Converts water and power into ultra‑pure hydrogen."
                            features={[
                                "90-225 kg/day production",
                                "99.999% purity output",
                                "Dynamic load following"
                            ]}
                            color="orange"
                        />
                        <ProductCard
                            name="PowerBank"
                            tagline="H2 Storage"
                            icon={<Battery className="text-blue-500" />}
                            specs="300kg+ Capacity"
                            description="Low‑pressure containment arrays with multi‑stage compression and monitoring. Stores energy indefinitely."
                            features={[
                                "Zero storage degradation",
                                "Multi‑stage compression",
                                "Continuous monitoring"
                            ]}
                            color="blue"
                        />
                        <ProductCard
                            name="PowerOnDemand"
                            tagline="Fuel Cells"
                            icon={<Factory className="text-green-600" />}
                            specs="60kW / 300kW Output"
                            description="Fuel cell units that convert stored hydrogen back to electricity instantly. Ideal for backup or grid services."
                            features={[
                                "Instant dispatch",
                                "Zero emissions",
                                "Grid‑independent mode"
                            ]}
                            color="green"
                        />
                        <ProductCard
                            name="Fueling Module"
                            tagline="Dispensing"
                            icon={<Fuel className="text-slate-700" />}
                            specs="350 / 700 Bar"
                            description="Industrial‑grade dispensing for onsite fleets and equipment. A forklift refuels in 3 minutes."
                            features={[
                                "3‑minute refuel",
                                "Fleet‑ready interfaces",
                                "NFPA 2 compliant"
                            ]}
                            color="slate"
                        />
                    </div>
                </div>
            </section>

            {/* ============================================================
          3. SPECS TABLE
          ============================================================ */}
            <section id="specs" className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="heading-section text-center mb-4">Technical Specifications</h2>
                    <p className="text-center text-body mb-12">
                        All modules ship in standard 20' ISO containers for rapid delivery and installation.
                    </p>

                    <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="border-b-2 border-slate-900">
                                <tr className="text-xs font-bold uppercase tracking-widest text-slate-500">
                                    <th className="pb-4 pt-2 pl-4">Metric</th>
                                    <th className="pb-4 pt-2">Value</th>
                                    <th className="pb-4 pt-2">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <SpecRow metric="H2 Production" value="90 - 225 kg/day" notes="Variable load" />
                                <SpecRow metric="Purity" value="99.999%" notes="ISO 14687-2" />
                                <SpecRow metric="Water Input" value="~2 gal/kg H2" notes="Deionized" />
                                <SpecRow metric="Temp Range" value="-20°C to +50°C" notes="All climates" />
                                <SpecRow metric="Footprint" value="20' ISO Container" notes="Modular, stackable" />
                                <SpecRow metric="Installation" value="Days, not months" notes="Turnkey deployment" />
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                            Request Full Datasheets <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ============================================================
          4. HOW THEY WORK TOGETHER
          ============================================================ */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="heading-section text-center mb-4">Closed‑Loop Operation</h2>
                    <p className="text-center text-body mb-16 max-w-2xl mx-auto">
                        A full system loop from renewable input to fuel in the tank or power on demand.
                    </p>

                    <div className="relative">
                        {/* Flow Diagram */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10">
                            <FlowStep
                                step="1"
                                title="Energy In"
                                description="Solar, wind, or grid power feeds PowerPack"
                                color="orange"
                            />
                            <FlowStep
                                step="2"
                                title="Electrolysis"
                                description="Water splits into hydrogen and oxygen"
                                color="blue"
                            />
                            <FlowStep
                                step="3"
                                title="Storage"
                                description="Compressed H2 stores in PowerBank"
                                color="green"
                            />
                            <FlowStep
                                step="4"
                                title="Dispatch"
                                description="Fuel fleets or generate backup power"
                                color="slate"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
          4.5 SCALABILITY
          ============================================================ */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="heading-section text-center mb-4">Modular Scalability</h2>
                    <p className="text-center text-body mb-16 max-w-2xl mx-auto">
                        Start with a single PowerPod, expand to MW-class installations. Each container is self-contained and field-serviceable.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-xl border border-slate-200 text-center card-hover">
                            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">Pilot</div>
                            <div className="text-4xl font-bold text-cyan-600 mb-2">1 Pod</div>
                            <p className="text-sm text-slate-600 mb-4">30 kg H₂/day</p>
                            <div className="bg-slate-50 rounded-lg p-3 font-mono text-xs text-slate-500">
                                ~20 forklifts/shift
                            </div>
                        </div>

                        <div className="bg-cyan-900 text-white p-8 rounded-xl text-center card-hover">
                            <div className="text-xs font-mono uppercase tracking-widest text-emerald-300 mb-2">Commercial</div>
                            <div className="text-4xl font-bold mb-2">3–5 Pods</div>
                            <p className="text-sm text-emerald-200 mb-4">90–150 kg H₂/day</p>
                            <div className="bg-emerald-800 rounded-lg p-3 font-mono text-xs text-emerald-300">
                                Full fleet + backup power
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-xl border border-slate-200 text-center card-hover">
                            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">Industrial</div>
                            <div className="text-4xl font-bold text-slate-900 mb-2">MW-Class</div>
                            <p className="text-sm text-slate-600 mb-4">500+ kg H₂/day</p>
                            <div className="bg-slate-50 rounded-lg p-3 font-mono text-xs text-slate-500">
                                Multi-site deployments
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-8">
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1">Install Time</p>
                                <p className="text-2xl font-bold text-cyan-600">12–16 Weeks</p>
                            </div>
                            <div>
                                <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1">Field Service</p>
                                <p className="text-2xl font-bold text-cyan-600">24/7 Remote</p>
                            </div>
                            <div>
                                <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1">Warranty</p>
                                <p className="text-2xl font-bold text-cyan-600">5-Year Standard</p>
                            </div>
                            <div>
                                <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1">Lifecycle</p>
                                <p className="text-2xl font-bold text-cyan-600">20+ Years</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
          4.7 SYSTEMS INTEGRATION
          ============================================================ */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="heading-section text-center mb-4">Control & Integration</h2>
                    <p className="text-center text-body mb-16 max-w-2xl mx-auto">
                        Industrial-grade PLCs and SCADA monitoring ensure safe, autonomous operation. Integrate with your existing BMS and EMS.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-900 text-white p-8 rounded-xl">
                            <h3 className="text-xl font-bold mb-6">Control System</h3>
                            <ul className="space-y-4">
                                {[
                                    "Industrial PLC (Allen-Bradley / Siemens)",
                                    "SCADA touchscreen HMI",
                                    "Remote monitoring via cellular/ethernet",
                                    "Automated safety interlocks",
                                    "OPC-UA and Modbus protocols"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <CheckCircle size={16} className="text-cyan-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Grid & Utility Integration</h3>
                            <ul className="space-y-4">
                                {[
                                    "480V 3-phase interconnection",
                                    "Automatic transfer switching (ATS)",
                                    "Demand response ready",
                                    "Net metering compatible",
                                    "UL 1741 / IEEE 1547 compliant"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle size={16} className="text-cyan-600" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
          5. FINAL CTA
          ============================================================ */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Ready to size a system for your site?
                    </h2>
                    <p className="text-slate-400 text-lg mb-10">
                        We will run a preliminary analysis and show how PowerPod integrates with your load profile.
                    </p>
                    <Link href="/contact" className="btn-cta inline-flex items-center gap-2 text-lg">
                        Request Free Feasibility Review <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

        </div>
    );
}

// ============================================================
// SUB-COMPONENTS
// ============================================================

interface ProductCardProps {
    name: string;
    tagline: string;
    icon: React.ReactNode;
    specs: string;
    description: string;
    features: string[];
    color: "orange" | "blue" | "green" | "slate";
}

function ProductCard({ name, tagline, icon, specs, description, features, color }: ProductCardProps) {
    const colorClasses = {
        orange: "bg-orange-50 border-orange-200",
        blue: "bg-blue-50 border-blue-200",
        green: "bg-green-50 border-green-200",
        slate: "bg-slate-50 border-slate-200",
    };

    return (
        <div className={`p-8 rounded-xl border-2 ${colorClasses[color]} card-hover`}>
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                    {icon}
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{tagline}</p>
                    <h3 className="text-2xl font-bold text-slate-900">{name}</h3>
                </div>
            </div>

            <p className="text-sm font-mono text-green-600 mb-4">{specs}</p>

            <p className="text-slate-600 mb-6">{description}</p>

            <ul className="space-y-2">
                {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle size={14} className="text-green-500" />
                        {f}
                    </li>
                ))}
            </ul>
        </div>
    );
}

interface SpecRowProps {
    metric: string;
    value: string;
    notes: string;
}

function SpecRow({ metric, value, notes }: SpecRowProps) {
    return (
        <tr className="group hover:bg-slate-50 transition-colors">
            <td className="py-4 pl-4 font-bold text-slate-900">{metric}</td>
            <td className="py-4 text-green-600 font-medium">{value}</td>
            <td className="py-4 text-slate-400 text-sm">{notes}</td>
        </tr>
    );
}

interface FlowStepProps {
    step: string;
    title: string;
    description: string;
    color: "orange" | "blue" | "green" | "slate";
}

function FlowStep({ step, title, description, color }: FlowStepProps) {
    const bgColors = {
        orange: "bg-orange-100",
        blue: "bg-blue-100",
        green: "bg-green-100",
        slate: "bg-slate-100",
    };
    const textColors = {
        orange: "text-orange-600",
        blue: "text-blue-600",
        green: "text-green-600",
        slate: "text-slate-600",
    };

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center card-hover">
            <div className={`w-10 h-10 ${bgColors[color]} ${textColors[color]} rounded-full flex items-center justify-center font-bold mx-auto mb-4`}>
                {step}
            </div>
            <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
            <p className="text-sm text-slate-500">{description}</p>
        </div>
    );
}
