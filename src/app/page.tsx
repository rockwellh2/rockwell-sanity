"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, Factory, Truck } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechnicalWindow } from "@/components/ui/TechnicalWindow";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Marquee } from "@/components/magicui/marquee";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { WordPullUp } from "@/components/magicui/word-pull-up";
import { ValueChain } from "@/components/homepage/ValueChain";

import { HomeShader } from "@/components/effects/HomeShader";
import { SystemFlow } from "@/components/homepage/SystemFlow";
import { ImpactBand } from "@/components/homepage/ImpactBand";
import { SafetyStrip } from "@/components/homepage/SafetyStrip";

export default function Home() {
  const features = [
    {
      Icon: Truck,
      name: "Logistics & Warehousing",
      description: "Replace lead-acid battery downtime with 3-minute hydrogen refueling. Keep your forklift fleet running 24/7 with zero emissions.",
      href: "/solutions#logistics",
      cta: "View Fleet Specs",
      background: <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-emerald-100 to-transparent" />,
      className: "lg:col-span-1",
    },
    {
      Icon: Factory,
      name: "Industrial & Utilities",
      description: "Decarbonize heavy processes and store massive amounts of renewable energy. Modular PowerPods scale from 200kW to 10MW+.",
      href: "/solutions#industrial",
      cta: "View Industrial Specs",
      background: <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-100 to-transparent" />,
      className: "lg:col-span-2",
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">

      {/* 1. HERO SECTION (w/ Shader) */}
      <section id="overview" className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* SHADER BACKGROUND */}
        <HomeShader />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Left: Headline & Client-Centric Copy */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <BlurFade delay={0.25} inView>
                  <div className="inline-flex items-center gap-3 border border-emerald-500/30 bg-emerald-500/5 px-4 py-2 rounded-sm backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-sm animate-pulse" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-600">
                      Modular Infrastructure
                    </span>
                  </div>
                </BlurFade>
              </div>

              <div className="mb-10">
                <WordPullUp
                  className="text-6xl md:text-[80px] font-bold tracking-tighter leading-[0.9] text-left text-slate-950 drop-shadow-sm"
                  words="Power Your Business with Green Hydrogen."
                />
              </div>

              <BlurFade delay={0.25 * 3} inView>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-12 font-light">
                  <strong className="text-slate-900 font-semibold block mb-2">Modular, on-site hydrogen production + storage + dispensing.</strong>
                  Stop paying for volatile diesel. Turn your renewable energy into fuel and assets.
                </p>
              </BlurFade>

              <BlurFade delay={0.2 * 4} inView>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button className="h-14 px-8 bg-emerald-600 text-white hover:bg-emerald-500 text-xs font-bold uppercase tracking-[0.2em] rounded-sm shadow-xl transition-all border-none">
                      Request Evaluation
                    </Button>
                  </Link>
                  <Link href="#system">
                    <Button variant="outline" className="h-14 px-8 border-slate-300 text-slate-600 hover:text-slate-950 hover:bg-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm bg-white/50 backdrop-blur-sm">
                      View System Map
                    </Button>
                  </Link>
                </div>
              </BlurFade>
            </div>

            {/* Right: Technical Window (Hidden on mobile for cleaner look, or kept if essential) */}
            <div className="hidden lg:flex lg:col-span-5 justify-end">
              {/* Optional: We can keep the TechnicalWindow here or simplify. Let's keep it as the "Snapshot" */}
              <FadeIn delay={0.4} className="w-full">
                <TechnicalWindow
                  title="Platform Status"
                  modId="SYS_01"
                  className="bg-white/80 backdrop-blur-md border-emerald-500/20"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                      <span className="text-xs uppercase tracking-widest text-slate-500 font-mono">Input</span>
                      <span className="text-sm font-bold text-slate-900">Renewable / Grid</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                      <span className="text-xs uppercase tracking-widest text-slate-500 font-mono">Output</span>
                      <span className="text-sm font-bold text-slate-900">30 Bar H2 @ 99.999%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs uppercase tracking-widest text-slate-500 font-mono">Capacity</span>
                      <span className="text-sm font-bold text-emerald-600">200 - 1,000 kg/day</span>
                    </div>
                  </div>
                </TechnicalWindow>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SYSTEM MAP (Narrative Step 2) */}
      <section id="system" className="relative bg-gradient-to-b from-white to-slate-50 pt-10 pb-20">
        <SystemFlow />
      </section>

      {/* 3. WHO WE SERVE (Narrative Step 3) */}
      <Section id="industries" className="bg-slate-50 py-32 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <SectionHeader
            subtitle="Deployment Pathways"
            title="Who We Serve."
            description="Tailored hydrogen solutions for high-demand operational environments."
          />

          <BentoGrid className="lg:grid-rows-1 auto-rows-auto">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </Section>

      {/* 4. IMPACT BAND (Narrative Step 4) */}
      <div id="impact">
        <ImpactBand />
      </div>

      {/* 5. VALUE CHAIN (Narrative Step 5) */}
      <div id="value">
        <ValueChain />
      </div>

      {/* 5.5 SAFETY STRIP */}
      <SafetyStrip />

      {/* 6. CREDIBILITY / TRUST (Narrative Step 6) */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center mb-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-4">
            Built by Industrial Engineers with 30+ Years Experience
          </p>
          <h3 className="text-2xl font-bold text-slate-900">Certified for Industry.</h3>
        </div>
        <Marquee className="[--duration:30s] opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="mx-12 text-xl font-bold text-slate-300">Inflation Reduction Act</div>
          <div className="mx-12 text-xl font-bold text-slate-300">Department of Energy</div>
          <div className="mx-12 text-xl font-bold text-slate-300">ASME Certified</div>
          <div className="mx-12 text-xl font-bold text-slate-300">ISO 9001</div>
          <div className="mx-12 text-xl font-bold text-slate-300">UL Listed</div>
          <div className="mx-12 text-xl font-bold text-slate-300">NFPA 2 Codes</div>
        </Marquee>
      </section>

      {/* 7. FINAL CTA (Narrative Step 7) */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-10" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Let's model your site.
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Get a preliminary feasibility snapshot including estimated ROI, site layout, and incentive eligibility.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link href="/contact">
              <Button className="h-16 px-12 bg-emerald-600 text-white hover:bg-emerald-500 text-sm font-bold uppercase tracking-[0.25em] rounded-sm shadow-2xl transition-all hover:scale-105">
                Start Feasibility Review
              </Button>
            </Link>
            <span className="text-slate-500 text-sm font-mono uppercase tracking-widest">
              No Cost • No Obligation
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
