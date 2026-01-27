"use client";

import Link from "next/link";
import { CircleDollarSign, TrendingUp, ShieldCheck, FileText, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

const CreditCard = ({ title, value, desc, sub }: { title: string, value: string, desc: string, sub?: string }) => (
    <div className="bg-white border border-slate-200 p-10 hover:border-emerald-500 shadow-xl group transition-all">
        <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">{title}</h4>
        <div className="text-6xl font-black tracking-tighter text-slate-950 mb-2 group-hover:text-emerald-600 transition-colors">
            {value} <span className="text-xl font-normal text-slate-400">{sub}</span>
        </div>
        <p className="text-slate-500 text-lg leading-relaxed">{desc}</p>
    </div>
);

export default function IncentivesPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <FadeIn>
                        <SectionHeader
                            subtitle="Financial Engineering"
                            title="Turn OpEx into Assets."
                            description="The Inflation Reduction Act (IRA) has fundamentally changed the economics of hydrogen. It's no longer just green—it's profitable."
                        />
                    </FadeIn>

                    <div className="grid lg:grid-cols-2 gap-10 mb-20 fade-in animate-in slide-in-from-bottom-4 duration-700">
                        <CreditCard
                            title="Production Tax Credit (Section 45V)"
                            value="$3.00"
                            sub="/kg"
                            desc="A direct cash payment or tax credit for every kilogram of low-carbon hydrogen produced for the first 10 years of operation."
                        />
                        <CreditCard
                            title="Invitation Tax Credit (Section 48)"
                            value="30%"
                            sub="ITC"
                            desc="One-time credit against the total installed cost of the equipment, significantly reducing initial capital expenditure."
                        />
                    </div>

                    <FadeIn delay={0.2}>
                        <div className="bg-slate-950 text-white p-12 md:p-20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
                            <div className="relative z-10 grid lg:grid-cols-12 gap-16">
                                <div className="lg:col-span-12 mb-8">
                                    <h3 className="text-3xl font-bold tracking-tight mb-4">How it stacks up.</h3>
                                    <p className="text-slate-400 max-w-2xl text-lg">
                                        For a typical logistics facility using 200kg of H2 per day, the incentives can offset the entire cost of fuel production, making the effective cost of fuel near zero.
                                    </p>
                                </div>

                                <div className="lg:col-span-4 border-t border-slate-800 pt-8">
                                    <TrendingUp className="text-emerald-500 mb-6" size={32} />
                                    <h4 className="font-bold text-xl mb-2">ROI Acceleration</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">System payback periods are reduced from 7-8 years to 2-3 years with combined incentives.</p>
                                </div>
                                <div className="lg:col-span-4 border-t border-slate-800 pt-8">
                                    <ShieldCheck className="text-emerald-500 mb-6" size={32} />
                                    <h4 className="font-bold text-xl mb-2">Audit-Ready Data</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">Our PowerPods include integrated metering to verify lifecycle emissions for tax compliance.</p>
                                </div>
                                <div className="lg:col-span-4 border-t border-slate-800 pt-8">
                                    <FileText className="text-emerald-500 mb-6" size={32} />
                                    <h4 className="font-bold text-xl mb-2">LCFS Credits</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">In California? Stack LCFS credits on top of federal incentives for additional revenue.</p>
                                </div>
                            </div>

                            <div className="mt-16 flex flex-col md:flex-row gap-6">
                                <Link href="/contact">
                                    <Button className="h-16 px-10 bg-emerald-600 text-white hover:bg-white hover:text-emerald-950 text-xs font-bold uppercase tracking-[0.2em] rounded-none shadow-xl transition-all">
                                        Request ROI Calculator <ArrowRight size={16} className="ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
