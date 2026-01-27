"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { ChevronDown, ShieldCheck, Phone, Mail, FileText, CheckCircle2, Clock } from "lucide-react";

const FAQItem = ({ q, a }: { q: string, a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-slate-100">
            <button onClick={() => setOpen(!open)} className="w-full py-5 flex justify-between items-center text-left hover:text-emerald-600 transition-colors">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-700">{q}</span>
                <ChevronDown className={`transition-transform duration-300 text-slate-400 ${open ? 'rotate-180' : ''}`} size={16} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="pb-6 text-slate-500 text-sm leading-relaxed">{a}</p>
            </div>
        </div>
    );
};

export default function ContactPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-white">

            {/* 1. HERO */}
            <section className="relative pt-32 pb-16 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7">
                            <span className="font-mono text-emerald-600 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                                Technical Inquiry
                            </span>
                            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-950 mb-6 leading-[0.9]">
                                Let's design your system.
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-xl mb-6">
                                Reach out to our engineering team for a feasibility review. No sales pressure, just technical clarity.
                            </p>
                            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                                <ShieldCheck size={16} className="text-emerald-500" />
                                Response in 1-2 business days.
                            </div>
                        </div>

                        {/* Snapshot Card */}
                        <div className="lg:col-span-5">
                            <div className="blueprint-card p-6 bg-white">
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">What We Need</h4>
                                        <ul className="text-sm text-slate-600 space-y-1 ml-4 list-disc">
                                            <li>Daily Hydrogen Demand (kg)</li>
                                            <li>Power Availability (kW)</li>
                                            <li>Site Footprint Constraints</li>
                                        </ul>
                                    </div>
                                    <div className="w-full h-px bg-slate-100" />
                                    <div>
                                        <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">What You Get</h4>
                                        <ul className="text-sm text-slate-600 space-y-1 ml-4 list-disc">
                                            <li>Preliminary Feasibility Review</li>
                                            <li>ROI Estimate (incl. Incentives)</li>
                                            <li>Deployment Timeline</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. FORM PANEL */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="bg-white border border-slate-200 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
                        <div className="absolute top-4 right-4 font-mono text-[10px] font-black uppercase tracking-widest text-slate-200">PROTO_ID: 994-A2</div>

                        <div className="p-8 md:p-16">
                            <form className="grid lg:grid-cols-2 gap-12">
                                {/* Left Column: Contact Info */}
                                <div className="space-y-8">
                                    <h3 className="font-bold text-slate-950 text-xl border-b border-slate-100 pb-2">Contact Details</h3>

                                    <div className="space-y-6">
                                        <div>
                                            <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Full Name</label>
                                            <input className="w-full bg-slate-50 border border-slate-200 p-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm font-medium text-slate-900 placeholder:text-slate-400" placeholder="Jane Doe" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Work Email</label>
                                                <input className="w-full bg-slate-50 border border-slate-200 p-3 outline-none focus:border-emerald-500 transition-all text-sm font-medium text-slate-900 placeholder:text-slate-400" placeholder="jane@company.com" />
                                            </div>
                                            <div>
                                                <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Phone</label>
                                                <input className="w-full bg-slate-50 border border-slate-200 p-3 outline-none focus:border-emerald-500 transition-all text-sm font-medium text-slate-900 placeholder:text-slate-400" placeholder="+1 (555) 000-0000" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Organization</label>
                                            <input className="w-full bg-slate-50 border border-slate-200 p-3 outline-none focus:border-emerald-500 transition-all text-sm font-medium text-slate-900 placeholder:text-slate-400" placeholder="Company Name" />
                                        </div>
                                        <div>
                                            <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Role / Title</label>
                                            <input className="w-full bg-slate-50 border border-slate-200 p-3 outline-none focus:border-emerald-500 transition-all text-sm font-medium text-slate-900 placeholder:text-slate-400" placeholder="Facilities Manager" />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Technical Inputs */}
                                <div className="space-y-8">
                                    <h3 className="font-bold text-slate-950 text-xl border-b border-slate-100 pb-2">System Config</h3>

                                    <div className="space-y-6">
                                        <div>
                                            <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Industry Sector</label>
                                            <select className="w-full bg-slate-50 border border-slate-200 p-3 outline-none focus:border-emerald-500 transition-all text-sm font-medium text-slate-900">
                                                <option>Logistics & Warehousing</option>
                                                <option>Manufacturing & Industrial</option>
                                                <option>Data Centers / Critical Power</option>
                                                <option>Agriculture / Wineries</option>
                                                <option>Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-3">Primary Need (Select all that apply)</label>
                                            <div className="grid grid-cols-2 gap-3">
                                                <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-sm hover:border-emerald-500 cursor-pointer transition-colors bg-white">
                                                    <input type="checkbox" className="accent-emerald-600 w-4 h-4" />
                                                    <span className="text-sm font-medium text-slate-700">Fuel Production</span>
                                                </label>
                                                <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-sm hover:border-emerald-500 cursor-pointer transition-colors bg-white">
                                                    <input type="checkbox" className="accent-emerald-600 w-4 h-4" />
                                                    <span className="text-sm font-medium text-slate-700">Storage</span>
                                                </label>
                                                <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-sm hover:border-emerald-500 cursor-pointer transition-colors bg-white">
                                                    <input type="checkbox" className="accent-emerald-600 w-4 h-4" />
                                                    <span className="text-sm font-medium text-slate-700">Dispensing</span>
                                                </label>
                                                <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-sm hover:border-emerald-500 cursor-pointer transition-colors bg-white">
                                                    <input type="checkbox" className="accent-emerald-600 w-4 h-4" />
                                                    <span className="text-sm font-medium text-slate-700">Backup Power</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Est. Daily Demand (kg)</label>
                                                <input type="number" className="w-full bg-slate-50 border border-slate-200 p-3 outline-none focus:border-emerald-500 transition-all text-sm font-medium text-slate-900" placeholder="200" />
                                            </div>
                                            <div>
                                                <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Power Available (kW)</label>
                                                <input type="number" className="w-full bg-slate-50 border border-slate-200 p-3 outline-none focus:border-emerald-500 transition-all text-sm font-medium text-slate-900" placeholder="500" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Additional Site Details</label>
                                            <textarea rows={3} className="w-full bg-slate-50 border border-slate-200 p-3 outline-none focus:border-emerald-500 transition-all text-sm font-medium text-slate-900 placeholder:text-slate-400 resize-none" placeholder="Describe your inputs, outputs, and any constraints..."></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="text-xs text-slate-500 max-w-sm">
                                    By submitting, you agree to our privacy policy. Your data is used solely for engineering review.
                                </div>
                                <button className="w-full md:w-auto px-12 py-5 bg-slate-900 text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-emerald-600 transition-colors shadow-lg rounded-sm">
                                    Submit Engineering Request
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PROCESS TIMELINE */}
            <section className="bg-slate-50 py-20 border-y border-slate-200">
                <div className="container mx-auto px-6">
                    <SectionHeader title="How it works." subtitle="Workflow" className="mb-16" />

                    <div className="relative grid md:grid-cols-3 gap-8">
                        <div className="absolute top-8 left-0 w-full h-0.5 bg-slate-200 hidden md:block" />

                        <div className="relative pt-16 group">
                            <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center z-10 shadow-sm group-hover:scale-110 transition-transform">
                                <Clock className="text-emerald-600" />
                            </div>
                            <h4 className="font-bold text-slate-900 text-lg mb-2 text-left md:text-center mt-4 md:mt-0 ml-20 md:ml-0">1. Intake Review</h4>
                            <p className="text-sm text-slate-500 text-left md:text-center ml-20 md:ml-0">
                                We analyze your power availability and fuel demand to size the optimal PowerPod config. (24-48 hrs)
                            </p>
                        </div>

                        <div className="relative pt-16 group">
                            <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-white border-2 border-slate-200 group-hover:border-emerald-500 rounded-full flex items-center justify-center z-10 shadow-sm transition-colors">
                                <FileText className="text-slate-400 group-hover:text-emerald-600" />
                            </div>
                            <h4 className="font-bold text-slate-900 text-lg mb-2 text-left md:text-center mt-4 md:mt-0 ml-20 md:ml-0">2. Fit & ROI Snapshot</h4>
                            <p className="text-sm text-slate-500 text-left md:text-center ml-20 md:ml-0">
                                You receive a preliminary datasheet including CapEx estimate, incentive eligibility, and payback period.
                            </p>
                        </div>

                        <div className="relative pt-16 group">
                            <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-white border-2 border-slate-200 group-hover:border-emerald-500 rounded-full flex items-center justify-center z-10 shadow-sm transition-colors">
                                <CheckCircle2 className="text-slate-400 group-hover:text-emerald-600" />
                            </div>
                            <h4 className="font-bold text-slate-900 text-lg mb-2 text-left md:text-center mt-4 md:mt-0 ml-20 md:ml-0">3. Site Call</h4>
                            <p className="text-sm text-slate-500 text-left md:text-center ml-20 md:ml-0">
                                We review site logistics and grid interconnection to finalize your deployment plan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FAQ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h3 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Engineering FAQ</h3>
                    <div className="space-y-4">
                        <FAQItem q="Is hydrogen storage safe?" a="Yes. Our storage arrays are ASME certified with multiple levels of redundant pressure containment and automated leak detection." />
                        <FAQItem q="What footprint is required?" a="A standard 500kg/day production and fueling setup fits within approximately 4 standard parking spaces (ISO 40ft footprint)." />
                        <FAQItem q="Do I need on-site renewables?" a="Not strictly. While on-site solar/wind improves 45V credit eligibility, we can also utilize grid power during off-peak windows for arbitrage." />
                        <FAQItem q="What is the lead time?" a="Current lead times for Series-A PowerPods are 6-9 months from order to commissioning." />
                    </div>
                </div>
            </section>

            {/* 5. DIRECT CONTACT STRIP */}
            <div className="bg-slate-950 py-10 border-t border-slate-800">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-1 block">Sales & Support</span>
                        <h4 className="text-white font-bold text-lg">Prefer direct contact?</h4>
                    </div>
                    <div className="flex gap-8">
                        <div className="flex items-center gap-3 text-slate-300">
                            <Mail size={16} className="text-emerald-500" />
                            <span className="font-mono text-sm">info@rockwellh2.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-300">
                            <Phone size={16} className="text-emerald-500" />
                            <span className="font-mono text-sm">+1 (510) 900-8261</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
