"use client";

import Link from "next/link";
import { ShieldCheck, TrendingUp, Calculator, FileText, CheckSquare, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const CreditCard = ({ title, value, desc, sub, code }: { title: string; value: string; desc: string; sub?: string; code?: string }) => (
  <div className="blueprint-card p-8 group h-full flex flex-col justify-between">
    <div>
      <div className="flex justify-between items-start mb-6">
        <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">{title}</h4>
        {code && <span className="hud-chip text-[8px]">{code}</span>}
      </div>
      <div className="text-5xl font-bold tracking-tighter text-slate-950 mb-3 group-hover:text-emerald-600 transition-colors">
        {value} <span className="text-xl font-normal text-slate-400">{sub}</span>
      </div>
      <p className="text-slate-500 text-sm leading-relaxed mb-6">{desc}</p>
    </div>
    <div className="w-full h-1 bg-slate-100 group-hover:bg-emerald-500 transition-colors duration-500" />
  </div>
);

export default function IncentivesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="font-mono text-emerald-600 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                Financial Engineering
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-950 mb-6 heading-xl">
                Turn OpEx into Assets.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-10">
                The Inflation Reduction Act (IRA) has fundamentally changed the economics of hydrogen.
                We stack federal and regional credits to drive near-zero effective fuel costs.
              </p>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button className="h-14 px-8 bg-slate-950 text-white hover:bg-emerald-600 text-xs font-bold uppercase tracking-[0.2em] rounded-sm shadow-xl transition-all">
                    Request ROI Calculator
                  </Button>
                </Link>
                <Button variant="outline" className="h-14 px-8 border-slate-300 text-slate-600 bg-white hover:text-slate-950 text-xs font-bold uppercase tracking-[0.2em] rounded-sm">
                  View Eligibility
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="blueprint-card p-8 bg-white shadow-2xl">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 block">Stack Summary</span>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-100 rounded-sm">
                    <span className="text-sm font-bold text-emerald-900">45V Production Credit</span>
                    <span className="font-mono font-bold text-emerald-600">$3.00/kg</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-sm">
                    <span className="text-sm font-bold text-slate-700">ITC CapEx Credit</span>
                    <span className="font-mono font-bold text-slate-900">30% - 50%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-sm">
                    <span className="text-sm font-bold text-slate-700">LCFS (California)</span>
                    <span className="font-mono font-bold text-slate-900">Market Rate</span>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                    <span className="text-slate-500 text-xs uppercase tracking-widest">Typical Payback</span>
                    <div className="text-3xl font-bold text-slate-900 mt-1">2 - 3 Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI SNAPSHOT */}
      <section className="bg-slate-950 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="border border-white/10 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-emerald-400">Payback</div>
              <div className="text-3xl font-bold mt-3">2-3 Years</div>
            </div>
            <div className="border border-white/10 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-emerald-400">45V Credit</div>
              <div className="text-3xl font-bold mt-3">$3.00/kg</div>
            </div>
            <div className="border border-white/10 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-emerald-400">ITC</div>
              <div className="text-3xl font-bold mt-3">30%+</div>
            </div>
            <div className="border border-white/10 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-emerald-400">Uptime</div>
              <div className="text-3xl font-bold mt-3">99.5%</div>
            </div>
          </div>
        </div>
      </section>

      {/* INCENTIVE STRIP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <CreditCard
              title="Production Tax Credit"
              code="IRC 45V"
              value="$3.00"
              sub="/kg"
              desc="A direct cash payment or tax credit for every kilogram of low-carbon hydrogen produced for the first 10 years of operation."
            />
            <CreditCard
              title="Investment Tax Credit"
              code="IRC 48"
              value="30%"
              sub="ITC"
              desc="One-time credit against the total installed cost of the equipment, significantly reducing initial capital expenditure."
            />
            <CreditCard
              title="LCFS Credits"
              code="Regional"
              value="Stackable"
              sub="Revenue"
              desc="In California? Stack Low Carbon Fuel Standard (LCFS) credits on top of federal incentives for additional revenue streams."
            />
          </div>
        </div>
      </section>

      {/* FINANCIAL MODEL PANEL */}
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">How it stacks up.</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-emerald-500/20 p-2 rounded-sm h-fit">
                    <TrendingUp className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Incentives Offset Fuel Cost</h4>
                    <p className="text-slate-400 text-sm">For a 200kg/day facility, incentives can offset nearly 100% of production OpEx.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-emerald-500/20 p-2 rounded-sm h-fit">
                    <ShieldCheck className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Audit-Ready Compliance</h4>
                    <p className="text-slate-400 text-sm">Our systems include integrated metering to verify lifecycle emissions for 45V compliance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-emerald-500/20 p-2 rounded-sm h-fit">
                    <FileText className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">ROI Documentation</h4>
                    <p className="text-slate-400 text-sm">We deliver a finance-ready ROI snapshot with assumptions and compliance references.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link href="/contact">
                  <Button className="h-14 px-8 bg-emerald-600 text-white hover:bg-white hover:text-emerald-900 text-xs font-bold uppercase tracking-[0.2em] rounded-sm">
                    Model Your ROI <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-slate-900/50 p-10 border border-slate-800 rounded-sm">
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500 mb-8">Cost per kg Comparison</h4>
              <div className="flex items-end gap-12 h-64">
                <div className="w-1/2 flex flex-col justify-end h-full group">
                  <div className="text-white font-bold text-2xl mb-2 text-center">$6.50</div>
                  <div className="bg-slate-700 w-full relative overflow-hidden" style={{ height: "80%" }}>
                    <div className="absolute inset-0 bg-slate-600/50" />
                  </div>
                  <div className="text-center mt-4 text-xs font-mono uppercase tracking-wider text-slate-400">Diesel / Market H2</div>
                </div>
                <div className="w-1/2 flex flex-col justify-end h-full relative">
                  <div className="text-emerald-400 font-bold text-2xl mb-2 text-center">$2.10</div>
                  <div className="bg-emerald-600 w-full relative transition-all duration-1000" style={{ height: "30%" }} />
                  <div className="text-center mt-4 text-xs font-mono uppercase tracking-wider text-white">Rockwell H2 (Post-Tax)</div>
                  <div className="absolute top-[20%] right-[110%] text-slate-500 text-xs hidden sm:block w-32 text-right">
                    68% Reduction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALIFICATION + INPUTS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <SectionHeader title="What Qualifies You?" subtitle="Eligibility" description="A simple set of criteria and data inputs make qualification straightforward." />

          <div className="grid lg:grid-cols-2 gap-10 mt-12">
            <div className="grid gap-6">
              <div className="bg-white p-8 border-l-4 border-emerald-500 shadow-sm">
                <CheckSquare className="text-emerald-600 mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">On-Site Renewables</h4>
                <p className="text-sm text-slate-500">Solar, wind, or hydro connection behind the meter (or RECs).</p>
              </div>
              <div className="bg-white p-8 border-l-4 border-emerald-500 shadow-sm">
                <CheckSquare className="text-emerald-600 mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">Clean Production</h4>
                <p className="text-sm text-slate-500">Documented carbon intensity of &lt;0.45kg CO2e per kg H2.</p>
              </div>
              <div className="bg-white p-8 border-l-4 border-emerald-500 shadow-sm">
                <CheckSquare className="text-emerald-600 mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">Operational Audit</h4>
                <p className="text-sm text-slate-500">Robust data logging for 10-year credit period (automated by PowerPod).</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="text-emerald-600" />
                <h4 className="font-bold text-slate-900">Required Inputs</h4>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-500">Daily H2 Demand</span>
                  <span className="font-mono text-slate-900">kg/day</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-500">Power Availability</span>
                  <span className="font-mono text-slate-900">kW / MW</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-500">Site Footprint</span>
                  <span className="font-mono text-slate-900">20' ISO Blocks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Interconnection</span>
                  <span className="font-mono text-slate-900">Grid / On-Site</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLE SCENARIO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionHeader
                subtitle="Example Scenario"
                title="200kg/day facility"
                description="A typical logistics operation using 200kg of hydrogen per day.
                Incentives reduce net fuel cost and accelerate payback."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-200 p-10">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Baseline Cost</div>
                    <div className="text-3xl font-bold text-slate-900 mt-3">$6.50/kg</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Post Incentive</div>
                    <div className="text-3xl font-bold text-emerald-600 mt-3">$2.10/kg</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Payback</div>
                    <div className="text-3xl font-bold text-slate-900 mt-3">2-3 Years</div>
                  </div>
                </div>
                <div className="mt-8 h-3 bg-slate-200 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-[32%] bg-emerald-500" />
                </div>
                <div className="mt-4 text-xs text-slate-500 font-mono uppercase tracking-widest">Net fuel cost after credits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <SectionHeader title="Frequently Asked" subtitle="Incentive FAQ" description="Direct answers for financial and compliance teams." />
          <div className="mt-10 grid gap-4">
            {[
              { q: "Can ITC and 45V stack?", a: "Yes. We model the optimal stack based on your project structure and timeline." },
              { q: "How is 45V verified?", a: "Lifecycle emissions are verified through metering and certified audit trails." },
              { q: "Do incentives apply outside CA?", a: "Yes. Federal credits apply nationwide. LCFS is region-specific." },
              { q: "What data is required?", a: "Daily demand, power availability, site footprint, and operational profile." },
            ].map((item) => (
              <details key={item.q} className="bg-white border border-slate-200 p-6">
                <summary className="cursor-pointer font-bold text-slate-900">{item.q}</summary>
                <p className="mt-3 text-sm text-slate-500">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let’s model your facility.</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Get a finance-ready ROI snapshot with incentive stacking, assumptions, and compliance guidance.
          </p>
          <Link href="/contact">
            <Button className="h-14 px-10 bg-emerald-600 text-white hover:bg-emerald-500 text-xs font-bold uppercase tracking-[0.2em] rounded-sm shadow-xl">
              Request ROI Calculator
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
