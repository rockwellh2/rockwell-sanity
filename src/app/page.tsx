"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Sun,
  Droplets,
  Wallet,
  Truck,
  Zap,
  CheckCircle,
  Leaf,
  BarChart3,
  BatteryCharging,
  Phone,
  Calculator,
  ArrowRight
} from "lucide-react";

// ============================================================
// HOMEPAGE - "The Conversion Machine" Design
// Warm, approachable, conversion-focused
// ============================================================

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-white selection:bg-green-100 selection:text-green-900">

      {/* ============================================================
          1. HERO SECTION
          ============================================================ */}
      <header className="relative bg-slate-50 pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-grid-pattern"></div>

        {/* Animated Blobs */}
        <div className="blob-orange w-72 h-72 top-10 -right-10 animate-blob"></div>
        <div className="blob-blue w-72 h-72 -bottom-10 -left-10 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
              <Leaf size={12} /> Family-Owned Engineering
            </div>

            {/* Headline */}
            <h1 className="heading-hero mb-6">
              Turn Your Renewable Energy Into <span className="text-green-600">Reliable Hydrogen Fuel</span>
            </h1>

            {/* Subheadline */}
            <p className="text-body mb-8">
              Rockwell H2 helps farms and warehouses cut fuel costs, earn federal tax credits up to <strong className="text-slate-900">$3/kg</strong>, and achieve energy independence with modular green hydrogen solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/incentives" className="btn-primary flex items-center justify-center gap-2 text-lg">
                <Calculator size={20} /> Calculate Savings
              </Link>
              <Link href="#how-it-works" className="btn-secondary flex items-center justify-center gap-2 text-lg">
                See How It Works
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-1"><CheckCircle size={16} className="text-green-500" /> Turnkey Installation</span>
              <span className="flex items-center gap-1"><CheckCircle size={16} className="text-green-500" /> IRA Qualified</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-white p-2 rounded-2xl shadow-2xl rotate-1">
              <div className="bg-slate-200 rounded-xl overflow-hidden aspect-[4/3] relative">
                <Image
                  src="/images/hero/HydrogenTanks.png"
                  alt="Rockwell H2 hydrogen storage tanks"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-lg p-4 shadow-lg border-l-4 border-green-500">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">System Output</p>
                      <p className="text-lg font-bold text-slate-900">225 kg H2 / Day</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+ $675/day Tax Credit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================
          2. THE PROBLEM
          ============================================================ */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-500 font-bold uppercase tracking-widest mb-12 text-sm">Why businesses are making the switch</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Rising Diesel Costs", desc: "Fuel prices are volatile. Hydrogen stabilizes your operating costs permanently." },
              { title: "Wasted Solar Power", desc: "Stop selling power back to the grid for pennies. Store it as high-value fuel." },
              { title: "Equipment Downtime", desc: "Battery EVs take hours to charge. Hydrogen refuels in minutes." },
              { title: "Grid Reliability", desc: "Protect your cold storage or production lines from rolling blackouts." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 card-hover">
                <div className="w-2 h-2 bg-orange-400 rounded-full mb-4"></div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          3. HOW IT WORKS
          ============================================================ */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-section mb-4">How the Rockwell System Works</h2>
            <p className="text-body">We install a simple, closed-loop system that connects to your existing renewable energy.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 -translate-y-1/2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <ProcessStep
                number="1"
                icon={<Sun className="text-orange-500" />}
                title="Energy Input"
                desc="Connect to your existing solar, wind, or grid power."
              />
              <ProcessStep
                number="2"
                icon={<Droplets className="text-blue-500" />}
                title="Electrolyzer"
                desc="We convert water + electricity into pure hydrogen (90-225 kg/day)."
              />
              <ProcessStep
                number="3"
                icon={<BatteryCharging className="text-green-600" />}
                title="Safe Storage"
                desc="Store energy safely for weeks with zero loss."
              />
              <ProcessStep
                number="4"
                icon={<Truck className="text-slate-700" />}
                title="Flexible Output"
                desc="Power your forklift fleet or backup your facility."
              />
              <ProcessStep
                number="5"
                icon={<Wallet className="text-green-600" />}
                title="Financial Benefit"
                desc="Earn $3/kg tax credits while saving on diesel."
                highlight={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. FEDERAL INCENTIVES
          ============================================================ */}
      <section id="incentives" className="py-20 bg-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block bg-orange-500 text-white font-bold px-4 py-1 rounded-full text-sm mb-6 animate-pulse">
            Inflation Reduction Act (IRA)
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Get Paid up to <span className="text-green-400">$3.00 per kg</span> to produce your own fuel.
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            The federal government essentially pays for your fuel production. Combined with the 30% Investment Tax Credit on equipment, the system can pay for itself in record time.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <BenefitCard icon={<Wallet />} title="Production Credit" val="$3/kg" desc="Paid directly to you for 10 years." />
            <BenefitCard icon={<BarChart3 />} title="Equipment Credit" val="30%" desc="Immediate tax credit on installation." />
            <BenefitCard icon={<Zap />} title="Fuel Savings" val="100%" desc="Eliminate your diesel or propane bill." />
          </div>

          <div className="mt-12">
            <Link href="/incentives" className="btn-cta inline-flex items-center gap-2 text-lg">
              See Full Incentive Breakdown <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. USE CASES
          ============================================================ */}
      <section id="applications" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="heading-section text-center mb-16">Built for Real-World Operations</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <UseCaseCard
              title="Hydrogen Forklifts"
              image="/images/hero/LindeForklift.png"
              points={[
                "Refuel in 3 minutes vs. hours of charging",
                "No battery room required",
                "Constant power output until empty"
              ]}
            />
            <UseCaseCard
              title="Farm Equipment"
              image="https://images.unsplash.com/photo-1592860882379-3c35b757f5c5?q=80&w=800&auto=format&fit=crop"
              points={[
                "Eliminate 40,000+ gallons of diesel",
                "On-site fueling independence",
                "Non-toxic, safe storage"
              ]}
            />
            <UseCaseCard
              title="Reliable Backup Power"
              image="https://images.unsplash.com/photo-1565514020128-4033cc359648?q=80&w=800&auto=format&fit=crop"
              points={[
                "Protect cold storage during outages",
                "Months of storage capacity",
                "Zero degradation over time"
              ]}
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          6. CERTIFICATIONS STRIP
          ============================================================ */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs text-slate-400 uppercase tracking-widest mb-8">
            Certified & Trusted
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 text-slate-300 font-bold text-lg">
            <span>ASME Certified</span>
            <span>UL Listed</span>
            <span>DOE Partner</span>
            <span>NFPA 2 Compliant</span>
            <span>ISO 9001</span>
          </div>
        </div>
      </section>

      {/* ============================================================
          7. FINAL CTA
          ============================================================ */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-900 rounded-3xl p-8 lg:p-16 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to explore hydrogen?</h2>
                <p className="text-slate-300 text-lg mb-8">
                  We'll review your energy bills and fleet needs to give you a clear, honest feasibility assessment. No pressure, just numbers.
                </p>

                <div className="space-y-6">
                  <div>
                    <p className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-2">Call the founders directly</p>
                    <div className="flex flex-col gap-2">
                      <a href="tel:7143053300" className="flex items-center gap-3 text-xl font-bold hover:text-green-400 transition-colors">
                        <Phone className="text-green-500" /> (714) 305-3300 <span className="text-sm font-normal text-slate-500">(Brad)</span>
                      </a>
                      <a href="tel:5109600261" className="flex items-center gap-3 text-xl font-bold hover:text-green-400 transition-colors">
                        <Phone className="text-green-500" /> (510) 960-0261 <span className="text-sm font-normal text-slate-500">(Nick)</span>
                      </a>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-800">
                    <p className="text-sm text-slate-400 italic">
                      "We promise to never sell you a system that doesn't pay for itself."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
                    <input type="text" className="w-full border border-slate-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                    <input type="email" className="w-full border border-slate-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Application Type</label>
                    <select className="w-full border border-slate-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none text-slate-600">
                      <option>Agricultural / Farm Fleet</option>
                      <option>Warehouse Forklifts</option>
                      <option>Backup Power</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full btn-cta text-lg py-4 mt-2">
                    Request Free Consultation
                  </button>
                  <p className="text-xs text-center text-slate-500 mt-4">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// ============================================================
// SUB-COMPONENTS
// ============================================================

interface ProcessStepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  highlight?: boolean;
}

function ProcessStep({ number, icon, title, desc, highlight = false }: ProcessStepProps) {
  return (
    <div className={`flex flex-col items-center text-center p-6 rounded-xl border transition-all ${highlight
        ? 'bg-green-50 border-green-200 shadow-md transform scale-105'
        : 'bg-white border-slate-100 hover:border-green-200 card-hover'
      }`}>
      <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold text-sm mb-4">
        {number}
      </div>
      <div className={`mb-4 p-4 rounded-full ${highlight ? 'bg-green-100' : 'bg-slate-50'}`}>
        {icon}
      </div>
      <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  );
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  val: string;
  desc: string;
}

function BenefitCard({ icon, title, val, desc }: BenefitCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-xl">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-orange-400">{icon}</div>
        <span className="text-green-100 font-medium">{title}</span>
      </div>
      <p className="text-4xl font-bold text-white mb-2">{val}</p>
      <p className="text-sm text-green-100 opacity-80">{desc}</p>
    </div>
  );
}

interface UseCaseCardProps {
  title: string;
  image: string;
  points: string[];
}

function UseCaseCard({ title, image, points }: UseCaseCardProps) {
  const isExternal = image.startsWith('http');

  return (
    <div className="group rounded-xl overflow-hidden border border-slate-200 shadow-sm card-hover">
      <div className="h-48 overflow-hidden relative">
        {isExternal ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-slate-900 mb-4">{title}</h3>
        <ul className="space-y-3">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
              <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
