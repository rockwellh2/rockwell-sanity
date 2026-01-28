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
                    <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                        <Leaf size={12} /> Real-World Applications
                    </div>

                    <h1 className="heading-hero mb-6 max-w-4xl mx-auto">
                        Hydrogen Solutions for <span className="text-green-600">Your Industry</span>
                    </h1>

                    <p className="text-body max-w-2xl mx-auto mb-10">
                        From warehouse fleets to agricultural equipment to backup power, our systems are designed for real operating conditions.
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
                            <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
                                <Truck size={20} />
                                <span className="font-bold uppercase tracking-widest text-xs">Logistics & Warehousing</span>
                            </div>

                            <h2 className="heading-section mb-6">Hydrogen Forklifts</h2>

                            <p className="text-body mb-8">
                                Replace lead-acid battery downtime with 3-minute hydrogen refueling. Keep your forklift fleet running 24/7 with zero emissions and constant power output.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                <BenefitItem icon={<Clock />} text="3-minute refuel time" />
                                <BenefitItem icon={<Zap />} text="Constant full power" />
                                <BenefitItem icon={<Shield />} text="No battery room needed" />
                                <BenefitItem icon={<Leaf />} text="Zero emissions" />
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                                <p className="text-green-800 font-bold mb-2">The Bottom Line</p>
                                <p className="text-green-700">
                                    A fleet of 20 hydrogen forklifts can save <strong>$150,000+/year</strong> in labor and battery costs compared to lead-acid.
                                </p>
                            </div>

                            <Link href="/incentives" className="btn-primary inline-flex items-center gap-2">
                                Calculate Your Fleet Savings <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="bg-white p-2 rounded-2xl shadow-xl -rotate-1">
                                <div className="bg-slate-200 rounded-xl overflow-hidden aspect-[4/3] relative">
                                    <Image
                                        src="/images/hero/LindeForklift.png"
                                        alt="Hydrogen forklift refueling"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="blob-blue w-48 h-48 -bottom-10 -right-10 animate-blob"></div>
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
                                <div className="bg-slate-200 rounded-xl overflow-hidden aspect-[4/3] relative">
                                    <Image
                                        src="https://images.unsplash.com/photo-1592860882379-3c35b757f5c5?q=80&w=800&auto=format&fit=crop"
                                        alt="Tractor in agricultural field"
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                            </div>
                            <div className="blob-green w-48 h-48 -top-10 -left-10 animate-blob animation-delay-2000"></div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 text-orange-600 mb-4">
                                <Tractor size={20} />
                                <span className="font-bold uppercase tracking-widest text-xs">Agriculture</span>
                            </div>

                            <h2 className="heading-section mb-6">Farm Equipment</h2>

                            <p className="text-body mb-8">
                                Eliminate your dependence on diesel with on-site hydrogen production. Turn your solar panels into fuel for tractors, harvesters, and utility vehicles.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                <BenefitItem icon={<Fuel />} text="Eliminate 40,000+ gal diesel/year" />
                                <BenefitItem icon={<Leaf />} text="100% renewable fuel" />
                                <BenefitItem icon={<Shield />} text="On-site fueling independence" />
                                <BenefitItem icon={<Zap />} text="Non-toxic, safe storage" />
                            </div>

                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
                                <p className="text-orange-800 font-bold mb-2">The Bottom Line</p>
                                <p className="text-orange-700">
                                    A medium farm can save <strong>$200,000/year</strong> in diesel costs while earning <strong>$3/kg</strong> in federal tax credits.
                                </p>
                            </div>

                            <Link href="/incentives" className="btn-primary inline-flex items-center gap-2">
                                See Farm ROI Calculator <ArrowRight size={18} />
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
                            <div className="inline-flex items-center gap-2 text-green-600 mb-4">
                                <BatteryCharging size={20} />
                                <span className="font-bold uppercase tracking-widest text-xs">Backup & Resilience</span>
                            </div>

                            <h2 className="heading-section mb-6">Reliable Backup Power</h2>

                            <p className="text-body mb-8">
                                Protect your cold storage, production lines, and critical systems from grid outages. Hydrogen provides weeks of backup capacity with zero degradation.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                <BenefitItem icon={<Shield />} text="Protect cold storage" />
                                <BenefitItem icon={<Clock />} text="Weeks of capacity" />
                                <BenefitItem icon={<Zap />} text="Zero degradation over time" />
                                <BenefitItem icon={<Leaf />} text="Clean backup power" />
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                                <p className="text-green-800 font-bold mb-2">The Bottom Line</p>
                                <p className="text-green-700">
                                    Unlike diesel generators, hydrogen fuel cells produce <strong>zero emissions</strong> and store energy for <strong>months</strong> without degradation.
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
                                        src="https://images.unsplash.com/photo-1565514020128-4033cc359648?q=80&w=800&auto=format&fit=crop"
                                        alt="Industrial facility with backup power"
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                            </div>
                            <div className="blob-orange w-48 h-48 -bottom-10 -right-10 animate-blob animation-delay-4000"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
          5. COMPARISON TABLE
          ============================================================ */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="heading-section text-center mb-4">Hydrogen vs. The Alternatives</h2>
                    <p className="text-center text-body mb-12">
                        See how hydrogen stacks up against batteries and diesel.
                    </p>

                    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg">
                        <table className="w-full text-left">
                            <thead className="border-b-2 border-slate-900 bg-slate-50">
                                <tr className="text-xs font-bold uppercase tracking-widest text-slate-500">
                                    <th className="py-4 px-6">Feature</th>
                                    <th className="py-4 px-4 text-green-600">Hydrogen</th>
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
                                    hydrogen="Months (no loss)"
                                    battery="Days (degrades)"
                                    diesel="Months"
                                />
                                <CompareRow
                                    feature="Emissions"
                                    hydrogen="Zero"
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
