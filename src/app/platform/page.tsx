"use client";

import Link from "next/link";
import Image from "next/image";
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
// PRODUCTS PAGE - "The Conversion Machine" Design
// Showcase PowerPod systems with warm, approachable styling
// ============================================================

export default function PlatformPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-white">

            {/* ============================================================
          1. HERO SECTION
          ============================================================ */}
            <section className="relative bg-slate-50 pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-grid-pattern"></div>

                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                        <Box size={12} /> Modular Systems
                    </div>

                    <h1 className="heading-hero mb-6 max-w-4xl mx-auto">
                        Everything You Need to <span className="text-green-600">Produce, Store & Dispense</span> Hydrogen
                    </h1>

                    <p className="text-body max-w-2xl mx-auto mb-10">
                        Our PowerPod platform is a complete, turnkey system. Each module is containerized, pre-tested, and designed to work together seamlessly.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/contact" className="btn-cta inline-flex items-center gap-2">
                            Request a Quote <ArrowRight size={18} />
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
                    <h2 className="heading-section text-center mb-4">The PowerPod System</h2>
                    <p className="text-center text-body mb-16 max-w-2xl mx-auto">
                        Four integrated modules that handle everything from electricity to fuel.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <ProductCard
                            name="PowerPack"
                            tagline="Electrolyzers"
                            icon={<Zap className="text-orange-500" />}
                            specs="200kW / 500kW Variants"
                            description="High-efficiency PEM stacks designed for 24/7 industrial production. Turns water + electricity into pure hydrogen gas."
                            features={[
                                "90-225 kg/day production",
                                "99.999% purity output",
                                "Variable load operation"
                            ]}
                            color="orange"
                        />
                        <ProductCard
                            name="PowerBank"
                            tagline="H2 Storage"
                            icon={<Battery className="text-blue-500" />}
                            specs="300kg+ Capacity"
                            description="Safe, low-pressure containment arrays with multi-stage compression and monitoring. Stores energy indefinitely."
                            features={[
                                "Zero degradation over time",
                                "Multi-stage compression",
                                "24/7 monitoring system"
                            ]}
                            color="blue"
                        />
                        <ProductCard
                            name="PowerOnDemand"
                            tagline="Fuel Cells"
                            icon={<Factory className="text-green-600" />}
                            specs="60kW / 300kW Output"
                            description="Modular fuel cell units that convert stored hydrogen back to electricity with zero latency. Seamless backup power."
                            features={[
                                "Instant power on demand",
                                "Zero emissions",
                                "Grid-independent operation"
                            ]}
                            color="green"
                        />
                        <ProductCard
                            name="Fueling Module"
                            tagline="Dispensing"
                            icon={<Fuel className="text-slate-700" />}
                            specs="350 / 700 Bar"
                            description="Industrial-grade dispensing systems for onsite heavy-duty fleets and equipment. Fill a forklift in 3 minutes."
                            features={[
                                "3-minute refuel time",
                                "Compatible with H2 forklifts",
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
                        All systems are containerized in standard 20' ISO units for easy transport and installation.
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
                                <SpecRow metric="Temp Range" value="-20°C to +50°C" notes="All climate" />
                                <SpecRow metric="Footprint" value="20' ISO Container" notes="Modular, stackable" />
                                <SpecRow metric="Installation" value="Days, not months" notes="Turnkey delivery" />
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
                    <h2 className="heading-section text-center mb-4">How It All Works Together</h2>
                    <p className="text-center text-body mb-16 max-w-2xl mx-auto">
                        A complete closed-loop system from renewable energy to fuel in the tank.
                    </p>

                    <div className="relative">
                        {/* Flow Diagram */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10">
                            <FlowStep
                                step="1"
                                title="Energy In"
                                description="Solar, wind, or grid power flows into the PowerPack"
                                color="orange"
                            />
                            <FlowStep
                                step="2"
                                title="Electrolysis"
                                description="Water is split into hydrogen and oxygen"
                                color="blue"
                            />
                            <FlowStep
                                step="3"
                                title="Storage"
                                description="Compressed H2 sits safely in the PowerBank"
                                color="green"
                            />
                            <FlowStep
                                step="4"
                                title="Dispense"
                                description="Fuel your fleet or generate backup power"
                                color="slate"
                            />
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
                        Ready to see the system specs for your site?
                    </h2>
                    <p className="text-slate-400 text-lg mb-10">
                        We'll run a preliminary analysis and show you exactly how the PowerPod would fit your operation.
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
