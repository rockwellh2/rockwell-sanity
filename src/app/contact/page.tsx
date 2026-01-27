"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ q, a }: { q: string, a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-slate-100">
            <button onClick={() => setOpen(!open)} className="w-full py-6 flex justify-between items-center text-left hover:text-emerald-600 transition-colors">
                <span className="text-sm font-bold uppercase tracking-widest text-slate-950">{q}</span>
                <ChevronDown className={`transition-transform duration-300 text-slate-400 ${open ? 'rotate-180' : ''}`} size={16} />
            </button>
            {open && <p className="pb-6 text-slate-500 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2">{a}</p>}
        </div>
    );
};

export default function ContactPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <FadeIn>
                        <SectionHeader
                            subtitle="Technical Inquiry"
                            title="Let's build your future."
                            description="Reach out to the engineering team directly. No sales pressure, just technical feasibility."
                        />
                    </FadeIn>

                    <div className="grid lg:grid-cols-12 gap-20">
                        <div className="lg:col-span-7">
                            <FadeIn delay={0.2}>
                                <div className="bg-white border border-slate-200 p-8 md:p-12 shadow-2xl relative">
                                    <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-slate-300 font-bold uppercase tracking-widest">PROTO_ID: 994-A2</div>
                                    <form className="grid md:grid-cols-2 gap-10">
                                        <div className="space-y-4">
                                            <label className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 block">Operator Name</label>
                                            <input className="w-full bg-slate-50 border-b border-slate-200 p-4 outline-none focus:border-emerald-500 transition-all text-sm font-bold text-slate-900 placeholder:text-slate-300" placeholder="FULL NAME" />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 block">Organization</label>
                                            <input className="w-full bg-slate-50 border-b border-slate-200 p-4 outline-none focus:border-emerald-500 transition-all text-sm font-bold text-slate-900 placeholder:text-slate-300" placeholder="COMPANY NAME" />
                                        </div>
                                        <div className="space-y-4 md:col-span-2">
                                            <label className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 block">Industry Sector</label>
                                            <select className="w-full bg-slate-50 border-b border-slate-200 p-4 outline-none focus:border-emerald-500 transition-all text-sm font-bold text-slate-900 appearance-none">
                                                <option>Agriculture & Wineries</option>
                                                <option>Logistics & Warehousing</option>
                                                <option>Critical Facilities</option>
                                                <option>Heavy Industrial</option>
                                            </select>
                                        </div>
                                        <div className="space-y-4 md:col-span-2">
                                            <label className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 block">System Inquiry</label>
                                            <textarea rows={4} className="w-full bg-slate-50 border-b border-slate-200 p-4 outline-none focus:border-emerald-500 transition-all text-sm font-bold text-slate-900 placeholder:text-slate-300 resize-none font-mono" placeholder="DESCRIBE YOUR RESOURCE INPUTS AND ENERGY NEEDS..."></textarea>
                                        </div>
                                        <button className="md:col-span-2 py-6 bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-emerald-600 transition-all shadow-xl">
                                            Submit Engineering Request
                                        </button>
                                    </form>
                                </div>
                            </FadeIn>
                        </div>
                        <div className="lg:col-span-5">
                            <FadeIn delay={0.4}>
                                <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-10">Frequently Asked</h4>
                                <div className="space-y-4">
                                    <FAQItem q="Is hydrogen storage safe?" a="Yes. Our storage arrays are ASME certified with multiple levels of redundant pressure containment and automated leak detection." />
                                    <FAQItem q="What waste works for biomass?" a="Most organic waste from wineries, agricultural sites, and food processing plants can be converted using our PowerPod systems." />
                                    <FAQItem q="How much space is needed?" a="Our systems are containerized. A standard 225kg/d unit fits within the footprint of two standard parking stalls." />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
