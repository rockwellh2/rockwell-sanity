"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Truck,
    Tractor,
    BatteryCharging,
    CheckCircle,
    ArrowRight,
    Clock,
    Fuel,
    Zap,
    Shield,
    Leaf
} from "lucide-react";

// ============================================================
// APPLICATIONS PAGE - "The Conversion Machine" Design
// Showcase use cases with compelling visuals
// ============================================================

export default function SolutionsPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-white">

            {/* ============================================================
          1. HERO SECTION
          ============================================================ */}
            <section className="relative bg-slate-50 pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-grid-pattern"></div>

                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                        <Leaf size={12} /> Operational Deployments
                    </div>

                    <h1 className="heading-hero mb-6 max-w-4xl mx-auto">
                        Hydrogen Solutions for <span className="text-emerald-600">Real Operations</span>
                    </h1>

                    <p className="text-body max-w-2xl mx-auto mb-10">
                        From high‑throughput warehouses to critical backup power, our systems are engineered for uptime, throughput, and compliance.
                    </p>
                </div>
            </section>

            {/* ============================================================
          2. HYDROGEN FORKLIFTS
          ============================================================ */}
            <section id="forklifts" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 text-emerald-600 mb-4">
                                <Truck size={20} />
                                <span className="font-bold uppercase tracking-widest text-xs">Logistics & Warehousing</span>
                            </div>

                            <h2 className="heading-section mb-6">High‑Throughput Fleet Fueling</h2>

                            <p className="text-body mb-8">
                                Replace lead‑acid downtime with 3‑minute hydrogen refueling. Keep forklift fleets running 24/7 with constant power and no battery rooms.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                <BenefitItem icon={<Clock />} text="3-minute refuel time" />
                                <BenefitItem icon={<Zap />} text="Constant full power" />
                                <BenefitItem icon={<Shield />} text="Eliminate battery rooms" />
                                <BenefitItem icon={<Leaf />} text="Zero point‑of‑use emissions" />
                            </div>

                            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
                                <p className="text-emerald-800 font-bold mb-2">Operational Impact</p>
                                <p className="text-emerald-700">
                                    Typical sites recover <strong>1,000+ labor hours/year</strong> by eliminating charging, swap, and battery staging.
                                </p>
                            </div>

                            <Link href="/incentives" className="btn-primary inline-flex items-center gap-2">
                                Model Fleet ROI <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="bg-white p-2 rounded-2xl shadow-xl -rotate-1">
                                <div className="bg-slate-200 rounded-xl overflow-hidden aspect-[4/3] relative">
                                    <Image
                                        src="/images/hero/06_hydro-forklift.png"
                                        alt="Hydrogen fleet refueling"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="blob-green w-48 h-48 -bottom-10 -right-10 animate-blob"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
          3. FARM EQUIPMENT
          ============================================================ */}
            <section id="farm" className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="bg-white p-2 rounded-2xl shadow-xl rotate-1">
                                <div className="bg-slate-950 text-white rounded-xl p-10 aspect-[4/3] flex flex-col justify-between">
                                    <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">On‑Site Fuel</div>
                                    <div>
                                        <div className="text-4xl font-bold">Biogas → H2</div>
                                        <div className="text-slate-400 mt-3 text-sm">Convert crop waste or digester gas into usable hydrogen for equipment and process heat.</div>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-400">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                        Closed‑loop energy
                                    </div>
                                </div>
                            </div>
                            <div className="blob-green w-48 h-48 -top-10 -left-10 animate-blob animation-delay-2000"></div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 text-emerald-600 mb-4">
                                <Tractor size={20} />
                                <span className="font-bold uppercase tracking-widest text-xs">Food & Agriculture</span>
                            </div>

                            <h2 className="heading-section mb-6">Fuel from Your Own Inputs</h2>

                            <p className="text-body mb-8">
                                Turn onsite solar, biogas, or grid power into fuel for tractors, harvesters, and processing loads. Reduce diesel exposure and stabilize seasonal costs.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                <BenefitItem icon={<Fuel />} text="Replace bulk diesel deliveries" />
                                <BenefitItem icon={<Leaf />} text="Low‑carbon fuel credits" />
                                <BenefitItem icon={<Shield />} text="On‑site fueling independence" />
                                <BenefitItem icon={<Zap />} text="Containerized safety systems" />
                            </div>

                            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
                                <p className="text-emerald-800 font-bold mb-2">Operational Impact</p>
                                <p className="text-emerald-700">
                                    Combine federal 45V credits with onsite power to drive <strong>sub‑$3/kg</strong> effective fuel costs.
                                </p>
                            </div>

                            <Link href="/incentives" className="btn-primary inline-flex items-center gap-2">
                                See Agriculture ROI <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
          4. BACKUP POWER
          ============================================================ */}
            <section id="backup" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 text-emerald-600 mb-4">
                                <BatteryCharging size={20} />
                                <span className="font-bold uppercase tracking-widest text-xs">Critical Backup</span>
                            </div>

                            <h2 className="heading-section mb-6">Long‑Duration Resilience</h2>

                            <p className="text-body mb-8">
                                Protect cold storage, process lines, and critical loads. Hydrogen stores energy for weeks with zero degradation and instant dispatch.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                <BenefitItem icon={<Shield />} text="Mission‑critical uptime" />
                                <BenefitItem icon={<Clock />} text="Weeks of stored energy" />
                                <BenefitItem icon={<Zap />} text="Instant dispatch" />
                                <BenefitItem icon={<Leaf />} text="Zero‑emission backup" />
                            </div>

                            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
                                <p className="text-emerald-800 font-bold mb-2">Operational Impact</p>
                                <p className="text-emerald-700">
                                    Maintain compliance and uptime without diesel storage, permitting, or noise constraints.
                                </p>
                            </div>

                            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                                Discuss Your Backup Needs <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="bg-white p-2 rounded-2xl shadow-xl -rotate-1">
                                <div className="bg-slate-200 rounded-xl overflow-hidden aspect-[4/3] relative">
                                    <Image
                                        src="/images/hero/HydrogenTanks.png"
                                        alt="Hydrogen storage system"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="blob-blue w-48 h-48 -bottom-10 -right-10 animate-blob animation-delay-4000"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
          5. COMPARISON TABLE
          ============================================================ */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="heading-section text-center mb-4">Hydrogen vs. Alternatives</h2>
                    <p className="text-center text-body mb-12">
                        Compare real operational performance, not just fuel price.
                    </p>

                    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg">
                        <table className="w-full text-left">
                            <thead className="border-b-2 border-slate-900 bg-slate-50">
                                <tr className="text-xs font-bold uppercase tracking-widest text-slate-500">
                                    <th className="py-4 px-6">Feature</th>
                                    <th className="py-4 px-4 text-emerald-600">Hydrogen</th>
                                    <th className="py-4 px-4">Battery</th>
                                    <th className="py-4 px-4">Diesel</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <CompareRow
                                    feature="Refuel Time"
                                    hydrogen="3 minutes"
                                    battery="4-8 hours"
                                    diesel="5 minutes"
                                />
                                <CompareRow
                                    feature="Storage Duration"
                                    hydrogen="Weeks to months"
                                    battery="Days (degrades)"
                                    diesel="Months"
                                />
                                <CompareRow
                                    feature="Emissions"
                                    hydrogen="Zero at point of use"
                                    battery="Zero (on-site)"
                                    diesel="High CO2"
                                />
                                <CompareRow
                                    feature="Space Required"
                                    hydrogen="Small footprint"
                                    battery="Large battery room"
                                    diesel="Fuel tank + ventilation"
                                />
                                <CompareRow
                                    feature="Tax Credits"
                                    hydrogen="$3/kg (45V)"
                                    battery="Limited"
                                    diesel="None"
                                />
                                <CompareRow
                                    feature="Downtime Risk"
                                    hydrogen="Minimal (3‑min refuel)"
                                    battery="High (swap/charge)"
                                    diesel="Medium (delivery)"
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ============================================================
          6. FINAL CTA
          ============================================================ */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Ready to see how hydrogen fits your operation?
                    </h2>
                    <p className="text-slate-400 text-lg mb-10">
                        We'll analyze your fleet, energy costs, and facility to give you a clear, honest feasibility assessment.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/incentives" className="btn-cta inline-flex items-center gap-2 text-lg">
                            Calculate Savings <ArrowRight size={20} />
                        </Link>
                        <Link href="/contact" className="bg-white text-slate-900 font-bold px-6 py-3 rounded-md hover:bg-slate-100 transition-colors inline-flex items-center gap-2">
                            Talk to an Engineer
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}

// ============================================================
// SUB-COMPONENTS
// ============================================================

interface BenefitItemProps {
    icon: React.ReactNode;
    text: string;
}

function BenefitItem({ icon, text }: BenefitItemProps) {
    return (
        <div className="flex items-center gap-3 text-slate-700">
            <div className="text-green-500">{icon}</div>
            <span className="text-sm font-medium">{text}</span>
        </div>
    );
}

interface CompareRowProps {
    feature: string;
    hydrogen: string;
    battery: string;
    diesel: string;
}

function CompareRow({ feature, hydrogen, battery, diesel }: CompareRowProps) {
    return (
        <tr className="hover:bg-slate-50 transition-colors">
            <td className="py-4 px-6 font-bold text-slate-900">{feature}</td>
            <td className="py-4 px-4 text-green-600 font-medium">{hydrogen}</td>
            <td className="py-4 px-4 text-slate-500">{battery}</td>
            <td className="py-4 px-4 text-slate-500">{diesel}</td>
        </tr>
    );
}
