"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  ArrowRight, Wind, Zap, Factory, ShieldCheck,
  Activity, CircleDollarSign, CheckSquare, Truck, Warehouse, TrendingUp,
  Sun, Ship
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FadeIn, StaggerChildren, FadeInItem } from "@/components/ui/FadeIn";
import { HUDLabel } from "@/components/ui/HUDLabel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechnicalWindow } from "@/components/ui/TechnicalWindow";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Marquee } from "@/components/magicui/marquee";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { WordPullUp } from "@/components/magicui/word-pull-up";
import { ValueChain } from "@/components/homepage/ValueChain";
import OrbitingCircles from "@/components/magicui/orbiting-circles";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);

  const features = [
    {
      Icon: Truck,
      name: "Logistics & Warehousing",
      description: "Replace lead-acid battery downtime with 3-minute hydrogen refueling. Keep your forklift fleet running 24/7 with zero emissions.",
      href: "/solutions#logistics",
      cta: "Learn more",
      background: <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-emerald-100 to-transparent" />,
      className: "lg:col-span-1",
    },
    {
      Icon: Factory,
      name: "Industrial & Utilities",
      description: "Decarbonize heavy processes and store massive amounts of renewable energy. Modular PowerPods scale from 200kW to 10MW+.",
      href: "/solutions#industrial",
      cta: "Learn more",
      background: <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-100 to-transparent" />,
      className: "lg:col-span-2",
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 1. HERO SECTION - THE HOOK */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Left: Headline & Client-Centric Copy */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <BlurFade delay={0.25} inView>
                  <div className="inline-flex items-center gap-3 border border-emerald-500/30 bg-emerald-500/5 px-4 py-2 rounded-full backdrop-blur-sm">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse z-10 box-shadow-emerald" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-600">
                      Modular Energy Infrastructure
                    </span>
                  </div>
                </BlurFade>
              </div>

              <div className="mb-10">
                <WordPullUp
                  className="text-6xl md:text-[90px] font-bold tracking-tighter leading-[0.9] text-left text-slate-950 drop-shadow-sm"
                  words="Power Your Business with Green Hydrogen."
                />
              </div>

              <BlurFade delay={0.25 * 3} inView>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-12 drop-shadow-none">
                  Stop paying for volatile energy. Produce your own fuel on-site.
                  We provide modular, turnkey systems to turn renewable energy into usable hydrogen for your fleet or facility.
                </p>
              </BlurFade>

              <BlurFade delay={0.25 * 4} inView>
                <div className="flex flex-wrap gap-4">
                  <Link href="/solutions">
                    <Button className="h-14 px-8 bg-emerald-500 text-slate-950 hover:bg-emerald-400 text-xs font-bold uppercase tracking-[0.2em] rounded-none shadow-xl transition-all border-none">
                      View Our Solutions
                    </Button>
                  </Link>
                  <Link href="/incentives">
                    <Button variant="outline" className="h-14 px-8 border-slate-300 text-slate-600 hover:text-slate-950 hover:bg-white text-xs font-bold uppercase tracking-[0.2em] rounded-none bg-white/50 backdrop-blur-sm">
                      Get an ROI Estimate
                    </Button>
                  </Link>
                </div>
              </BlurFade>
            </div>

            {/* Right: ROI/Value Card */}
            <div className="lg:col-span-5 flex justify-end">
              <FadeIn delay={0.2} className="w-full">
                <TechnicalWindow
                  title="Financial Impact"
                  modId="ROI_EST"
                  className="transform rotate-1 hover:rotate-0 transition-transform duration-500 bg-white/95"
                >
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">Tax Credit (IRA)</div>
                      <div className="flex items-baseline text-4xl font-bold text-emerald-600">
                        $<NumberTicker value={3.00} decimalPlaces={2} />
                        <span className="text-lg text-slate-400 font-normal ml-2">/kg</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">CapEx Credit</div>
                      <div className="flex items-baseline text-4xl font-bold text-emerald-600">
                        <NumberTicker value={30} />%
                        <span className="text-lg text-slate-400 font-normal ml-2">ITC</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100">
                      <TrendingUp className="text-emerald-500" />
                      <div>
                        <div className="font-bold text-slate-900 text-sm">Turn Opex into Assets</div>
                        <div className="text-xs text-slate-500">Stop burning cash on diesel. Invest in infrastructure.</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100">
                      <ShieldCheck className="text-emerald-500" />
                      <div>
                        <div className="font-bold text-slate-900 text-sm">Energy Security</div>
                        <div className="text-xs text-slate-500">Immunity from grid outages and price spikes.</div>
                      </div>
                    </div>
                  </div>
                </TechnicalWindow>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHO WE SERVE (Pathways) - BentoGrid */}
      <Section className="bg-slate-50 py-32 border-y border-slate-200">
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

      {/* 2.5 ECOSYSTEM VISUALIZATION */}
      <section className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-white">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
          Ecosystem
        </span>

        {/* Inner Circles */}
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={80}
        >
          <Sun className="text-emerald-500" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={80}
        >
          <Wind className="text-emerald-500" />
        </OrbitingCircles>

        {/* Outer Circles (REVERSE) */}
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          reverse
        >
          <Ship className="text-slate-400" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          delay={20}
          reverse
        >
          <Factory className="text-slate-400" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          delay={10}
          reverse
        >
          <Truck className="text-slate-400" />
        </OrbitingCircles>
      </section>

      {/* 3. BUSINESS MODEL - VALUE CHAIN */}
      <ValueChain />

      {/* 4. TRUST BAR */}
      <section className="py-20 bg-slate-950 border-t border-slate-800 overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
            Compatible with Federal Incentives
          </p>
        </div>
        <Marquee className="[--duration:20s] opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="mx-8 text-2xl font-bold text-white">Inflation Reduction Act</div>
          <div className="mx-8 text-2xl font-bold text-white">Department of Energy</div>
          <div className="mx-8 text-2xl font-bold text-white">ASME Certified</div>
          <div className="mx-8 text-2xl font-bold text-white">ISO 9001</div>
          <div className="mx-8 text-2xl font-bold text-white">UL Listed</div>
        </Marquee>
      </section>

    </div>
  );
}
