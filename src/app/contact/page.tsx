"use client";

import Link from "next/link";
import { ShieldCheck, MapPin, Wrench, FileText, Phone } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pb-28 overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                <SectionHeader
                  subtitle="Technical Inquiry"
                  title="Let’s design your system."
                  description="Reach the engineering team directly. We review feasibility, model ROI, and guide your site plan."
                />
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="flex items-center gap-3 text-sm text-slate-500 mt-6">
                  <ShieldCheck className="text-emerald-600" size={18} />
                  Response in 1-2 business days
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-5">
              <FadeIn delay={0.3}>
                <div className="bg-white border border-slate-200 shadow-xl p-8">
                  <div className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Intake Snapshot</div>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-emerald-600 mt-0.5" size={16} />
                      <div>
                        <div className="font-bold text-slate-900">What we need</div>
                        <div className="text-slate-500">Daily H2 demand, power availability, site constraints.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Wrench className="text-emerald-600 mt-0.5" size={16} />
                      <div>
                        <div className="font-bold text-slate-900">What you get</div>
                        <div className="text-slate-500">Engineering review, ROI snapshot, deployment plan.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="text-emerald-600 mt-0.5" size={16} />
                      <div>
                        <div className="font-bold text-slate-900">Documentation</div>
                        <div className="text-slate-500">Compliance-ready input and lifecycle reporting.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-white border border-slate-200 shadow-2xl p-8 md:p-12">
            <div className="flex items-center justify-between mb-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400">PROTO_ID: 994-A2</div>
              <div className="text-xs text-slate-500">Engineering Intake Form</div>
            </div>

            <form className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">
                  Operator Name
                </label>
                <input id="name" name="name" required className="w-full bg-slate-50 border-b border-slate-200 p-4 outline-none focus:border-emerald-500 transition-all text-sm font-bold text-slate-900" placeholder="FULL NAME" />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">
                  Email
                </label>
                <input id="email" name="email" type="email" required className="w-full bg-slate-50 border-b border-slate-200 p-4 outline-none focus:border-emerald-500 transition-all text-sm font-bold text-slate-900" placeholder="NAME@COMPANY.COM" />
              </div>
              <div>
                <label htmlFor="company" className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">
                  Organization
                </label>
                <input id="company" name="company" required className="w-full bg-slate-50 border-b border-slate-200 p-4 outline-none focus:border-emerald-500 transition-all text-sm font-bold text-slate-900" placeholder="COMPANY NAME" />
              </div>
              <div>
                <label htmlFor="phone" className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">
                  Phone
                </label>
                <input id="phone" name="phone" type="tel" className="w-full bg-slate-50 border-b border-slate-200 p-4 outline-none focus:border-emerald-500 transition-all text-sm font-bold text-slate-900" placeholder="(000) 000-0000" />
              </div>
              <div>
                <label htmlFor="industry" className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">
                  Industry Sector
                </label>
                <select id="industry" name="industry" className="w-full bg-slate-50 border-b border-slate-200 p-4 outline-none focus:border-emerald-500 transition-all text-sm font-bold text-slate-900 appearance-none">
                  <option>Logistics & Warehousing</option>
                  <option>Critical Facilities</option>
                  <option>Heavy Industrial</option>
                  <option>Agriculture & Wineries</option>
                </select>
              </div>
              <div>
                <label htmlFor="location" className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">
                  Site Location
                </label>
                <input id="location" name="location" className="w-full bg-slate-50 border-b border-slate-200 p-4 outline-none focus:border-emerald-500 transition-all text-sm font-bold text-slate-900" placeholder="CITY, STATE" />
              </div>
              <div>
                <label htmlFor="h2" className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">
                  Daily H2 Demand
                </label>
                <input id="h2" name="daily_h2" className="w-full bg-slate-50 border-b border-slate-200 p-4 outline-none focus:border-emerald-500 transition-all text-sm font-bold text-slate-900" placeholder="KG / DAY" />
              </div>
              <div>
                <label htmlFor="power" className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">
                  Power Availability
                </label>
                <input id="power" name="power" className="w-full bg-slate-50 border-b border-slate-200 p-4 outline-none focus:border-emerald-500 transition-all text-sm font-bold text-slate-900" placeholder="kW / MW" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="system" className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">
                  System Inquiry
                </label>
                <textarea id="system" name="system" rows={4} className="w-full bg-slate-50 border-b border-slate-200 p-4 outline-none focus:border-emerald-500 transition-all text-sm font-bold text-slate-900 resize-none font-mono" placeholder="DESCRIBE YOUR RESOURCE INPUTS AND ENERGY NEEDS..."></textarea>
              </div>
              <button className="md:col-span-2 py-6 bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-emerald-600 transition-all shadow-xl">
                Submit Engineering Request
              </button>
              <p className="md:col-span-2 text-xs text-slate-500 text-center">
                We respond within 1-2 business days with a preliminary feasibility snapshot.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <SectionHeader title="How it works" subtitle="Process" description="A fast, engineering-led intake with clear next steps." />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { title: "Intake Review", detail: "24-48 hours", icon: ShieldCheck },
              { title: "Technical Fit", detail: "ROI + compliance", icon: FileText },
              { title: "Site Call", detail: "Deployment plan", icon: Wrench },
            ].map((step) => (
              <div key={step.title} className="bg-white border border-slate-200 p-8">
                <step.icon className="text-emerald-600 mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader title="Frequently Asked" subtitle="FAQ" description="Direct answers for operations and compliance teams." />
          <div className="mt-10 grid gap-4">
            {[
              { q: "Is hydrogen storage safe?", a: "Yes. Our storage arrays are ASME certified with redundant containment and automated leak detection." },
              { q: "How much space is needed?", a: "A standard 225kg/day unit fits within the footprint of two parking stalls." },
              { q: "Do we need on-site renewables?", a: "Not required, but they improve eligibility and ROI. Grid or hybrid is common." },
              { q: "What data do you need?", a: "Daily demand, power availability, site layout, and operating schedule." },
            ].map((item) => (
              <details key={item.q} className="bg-slate-50 border border-slate-200 p-6">
                <summary className="cursor-pointer font-bold text-slate-900">{item.q}</summary>
                <p className="mt-3 text-sm text-slate-500">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-400 mb-3">Direct Contact</div>
              <h3 className="text-2xl font-bold">Prefer a direct line?</h3>
              <p className="text-slate-400 mt-2">Sales & Support: info@rockwellh2.com</p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-3 text-emerald-400">
              <Phone size={18} />
              <span className="font-mono text-xs uppercase tracking-widest">(714) 305-3300</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
