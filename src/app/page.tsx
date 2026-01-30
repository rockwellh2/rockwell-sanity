"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  ArrowRight,
  Factory,
  ShieldCheck,
  TrendingUp,
  Zap,
  Database,
  Droplets,
  ChevronRight,
  Boxes
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HUDLabel } from "@/components/ui/HUDLabel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn, StaggerChildren, FadeInItem } from "@/components/ui/FadeIn";
import ShaderBackground from "@/components/ShaderBackground";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">

      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-950">
        <ShaderBackground />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <FadeIn direction="up">
              <HUDLabel color="blue" className="mb-8">Energy Infrastructure for the Decarbonized Age</HUDLabel>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
                The Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Sales Machine.</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed mb-12">
                Modular hydrogen production, storage, and power systems. Scalable, containerized infrastructure designed for the toughest industrial operations.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <div className="flex flex-wrap gap-6">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-10 bg-white text-slate-950 hover:bg-emerald-500 hover:text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-all shadow-2xl">
                    Request Assessment
                  </Button>
                </Link>
                <Link href="/platform">
                  <Button size="lg" variant="outline" className="h-14 px-10 border-white/20 text-white hover:bg-white/10 text-xs font-bold uppercase tracking-[0.2em] rounded-sm backdrop-blur-sm">
                    View Platform
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
          <span className="font-mono text-[10px] text-white uppercase tracking-[0.4em]">Initialize Deep Dive</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* ========== STATS STRIP ========== */}
      <section className="bg-slate-900 border-y border-white/10 py-16">
        <div className="container mx-auto px-6">
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Uptime Requirement", value: "99.9%" },
              { label: "Deployment Speed", value: "12-16 Wks" },
              { label: "Tax Credit Value", value: "$3.00/kg" },
              { label: "Efficiency (LHV)", value: "82%+" },
            ].map((stat, i) => (
              <FadeInItem key={i}>
                <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-emerald-400 mb-2">{stat.label}</div>
                <div className="text-4xl font-bold text-white tracking-tighter">{stat.value}</div>
              </FadeInItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ========== THE PROCESS FLOW ========== */}
      <section className="bg-slate-50 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.12)_1px,transparent_0)] bg-[length:32px_32px]" />

        <div ref={containerRef} className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <SectionHeader
                subtitle="The Architecture"
                title="A Closed-Loop Energy System."
                description="Our PowerPod platform modularizes the entire hydrogen lifecycle into containerized blocks that connect and scale seamlessly."
              />

              <div className="space-y-8 mt-12">
                {[
                  { icon: Factory, title: "Production", desc: "PEM Electrolyzers convert water and renewable power to H2." },
                  { icon: Database, title: "Storage", desc: "PowerBank arrays store 300kg+ at high pressure indefinitely." },
                  { icon: Zap, title: "Dispatch", desc: "Modular Fuel Cells deliver zero-latency backup power." }
                ].map((item, i) => (
                  <FadeIn key={i} direction="right" delay={i * 0.1}>
                    <div className="flex gap-6 group">
                      <div className="w-12 h-12 shrink-0 bg-white border border-slate-200 flex items-center justify-center text-slate-950 group-hover:bg-slate-950 group-hover:text-white transition-all shadow-sm">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-950 uppercase tracking-widest text-sm mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 relative flex justify-center py-20">
              {/* Process Flow Visualization */}
              <div className="grid grid-cols-3 gap-12 items-center w-full max-w-lg">
                <div ref={inputRef} className="bg-white border border-slate-200 p-6 shadow-xl relative z-20">
                  <Droplets className="text-cyan-500 mb-4" size={32} />
                  <div className="font-mono text-[9px] uppercase tracking-widest text-slate-400">Input</div>
                  <div className="font-bold text-slate-950 text-xs">H2O + POWER</div>
                </div>

                <div ref={coreRef} className="bg-slate-950 p-8 shadow-2xl relative z-20 scale-125">
                  <Boxes className="text-emerald-400 mb-4" size={40} />
                  <div className="font-mono text-[9px] uppercase tracking-widest text-emerald-500">PowerPod</div>
                  <div className="font-bold text-white text-xs">ORCHESTRATOR</div>
                </div>

                <div ref={outputRef} className="bg-white border border-slate-200 p-6 shadow-xl relative z-20">
                  <Zap className="text-amber-500 mb-4" size={32} />
                  <div className="font-mono text-[9px] uppercase tracking-widest text-slate-400">Output</div>
                  <div className="font-bold text-slate-950 text-xs">ON-DEMAND H2</div>
                </div>
              </div>

              <div className="absolute inset-0 z-10">
                <AnimatedBeam containerRef={containerRef} fromRef={inputRef} toRef={coreRef} duration={3} />
                <AnimatedBeam containerRef={containerRef} fromRef={coreRef} toRef={outputRef} duration={3} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONVERSION TEASER ========== */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6">
          <div className="bg-slate-50 border border-slate-200 p-12 md:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] -translate-y-1/2 translate-x-1/2" />

            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <HUDLabel color="emerald">The Economic Engine</HUDLabel>
                <h3 className="text-5xl md:text-6xl font-bold text-slate-950 tracking-tighter leading-none mb-8">
                  Get Paid $3/kg <br />
                  To Power Your Fleet.
                </h3>
                <p className="text-lg text-slate-600 mb-10 max-w-xl">
                  The Inflation Reduction Act (45V) incentivizes clean hydrogen production with substantial credits. Combined with our PowerPod platform, the payback period averages less than 3 years.
                </p>
                <Link href="/incentives">
                  <Button variant="outline" className="h-12 border-slate-950 text-slate-950 hover:bg-slate-950 hover:text-white uppercase text-[10px] font-bold tracking-widest px-8">
                    View ROI Model <ArrowRight className="ml-2" size={14} />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "IRA 45V", value: "$3.00", unit: "/kg" },
                  { label: "Equip. ITC", value: "30-50%", unit: "" },
                  { label: "LCFS (CA)", value: "Stackable", unit: "" },
                  { label: "Diesel ROI", value: "24-36", unit: "Mos" },
                ].map((box, i) => (
                  <div key={i} className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">{box.label}</div>
                    <div className="text-3xl font-bold text-slate-950 tracking-tighter">
                      {box.value}<span className="text-sm font-normal text-slate-400">{box.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CALL TO ACTION ========== */}
      <section className="bg-slate-950 py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#10b981_1px,_transparent_1px)] bg-[length:40px_40px]" />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn direction="up">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-8 max-w-4xl mx-auto">
              Ready to Decarbonize <br />Your Operations?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
              Our engineering team handles the design, permitting, and installation. You focus on energy independence.
            </p>
            <div className="flex flex-center gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-12 bg-emerald-500 text-white hover:bg-emerald-600 text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm">
                  Start Engineering Assessment
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
