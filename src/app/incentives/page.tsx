"use client";

import Link from "next/link";
import {
  Wallet,
  BarChart3,
  Zap,
  CheckCircle,
  ArrowRight,
  Calculator,
  FileText,
  Shield,
  Leaf,
  DollarSign
} from "lucide-react";
import { ROICalculator } from "@/components/calculator/ROICalculator";

// ============================================================
// INCENTIVES PAGE - "The Conversion Machine" Design
// Deep dive on federal tax benefits and qualification
// ============================================================

export default function IncentivesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">

      {/* ============================================================
          1. HERO SECTION
          ============================================================ */}
      <section className="relative bg-green-900 text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                <DollarSign size={12} /> Federal Incentives
              </div>

              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
                Get Paid <span className="text-green-400">$3/kg</span> to Produce Your Own Fuel
              </h1>

              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                The Inflation Reduction Act has fundamentally changed the economics of hydrogen. Stack federal and regional credits to drive near-zero effective fuel costs.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="#calculator" className="btn-cta inline-flex items-center gap-2">
                  Calculate Your Credits <ArrowRight size={18} />
                </Link>
                <Link href="#qualify" className="bg-white/10 border border-white/20 text-white font-bold px-6 py-3 rounded-md hover:bg-white/20 transition-colors">
                  Check Eligibility
                </Link>
              </div>
            </div>

            {/* Credit Stack Summary */}
            <div className="bg-white/10 backdrop-blur border border-white/20 p-8 rounded-xl">
              <p className="text-sm font-bold uppercase tracking-widest text-green-300 mb-6">Credit Stack Summary</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-500/20 rounded-lg">
                  <span className="font-bold text-white">45V Production Credit</span>
                  <span className="font-mono font-bold text-green-300 text-xl">$3.00/kg</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <span className="font-bold text-white">ITC Equipment Credit</span>
                  <span className="font-mono font-bold text-white text-xl">30%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <span className="font-bold text-white">LCFS (California)</span>
                  <span className="font-mono font-bold text-white text-xl">+ Stackable</span>
                </div>
                <div className="mt-6 pt-4 border-t border-white/20 text-center">
                  <span className="text-green-200 text-xs uppercase tracking-widest">Typical Payback</span>
                  <div className="text-4xl font-bold text-white mt-2">2-3 Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. KEY STATS STRIP
          ============================================================ */}
      <section className="bg-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center text-white">
            <div className="p-4">
              <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2">Payback Period</div>
              <div className="text-3xl font-bold">2-3 Years</div>
            </div>
            <div className="p-4">
              <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2">45V Credit</div>
              <div className="text-3xl font-bold">$3.00/kg</div>
            </div>
            <div className="p-4">
              <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2">Equipment ITC</div>
              <div className="text-3xl font-bold">30%+</div>
            </div>
            <div className="p-4">
              <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2">Credit Duration</div>
              <div className="text-3xl font-bold">10 Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. CREDIT BREAKDOWN
          ============================================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="heading-section text-center mb-4">Federal Tax Credits Explained</h2>
          <p className="text-center text-body mb-16 max-w-2xl mx-auto">
            Two powerful programs that stack together to make hydrogen economics work.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <CreditCard
              icon={<Wallet className="text-green-600" />}
              title="45V Production Tax Credit"
              code="IRC 45V"
              value="$3.00"
              unit="/kg"
              description="A direct cash payment or tax credit for every kilogram of low-carbon hydrogen produced for the first 10 years of operation."
              features={[
                "Max $3/kg for cleanest H2",
                "Paid annually for 10 years",
                "Transferable to project investor"
              ]}
            />
            <CreditCard
              icon={<BarChart3 className="text-blue-600" />}
              title="Investment Tax Credit"
              code="IRC 48"
              value="30%"
              unit="ITC"
              description="One-time credit against the total installed cost of the equipment, significantly reducing initial capital expenditure."
              features={[
                "30% base credit",
                "Up to 50% with adders",
                "Applies to full system cost"
              ]}
            />
            <CreditCard
              icon={<Zap className="text-orange-500" />}
              title="LCFS Credits"
              code="Regional"
              value="Stackable"
              unit=""
              description="In California? Stack Low Carbon Fuel Standard (LCFS) credits on top of federal incentives for additional revenue streams."
              features={[
                "Additional revenue stream",
                "Stacks with federal credits",
                "Market-rate pricing"
              ]}
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          4. ROI CALCULATOR
          ============================================================ */}
      <section id="calculator" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="heading-section text-center mb-4">Calculate Your Potential</h2>
          <p className="text-center text-body mb-12 max-w-2xl mx-auto">
            Enter your current fuel spend to see estimated savings and tax credits.
          </p>
          <ROICalculator variant="embedded" />
        </div>
      </section>

      {/* ============================================================
          5. QUALIFICATION CHECKLIST
          ============================================================ */}
      <section id="qualify" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="heading-section text-center mb-4">What Qualifies You?</h2>
          <p className="text-center text-body mb-16 max-w-2xl mx-auto">
            Simple criteria make qualification straightforward for most operations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <QualifyCard
              icon={<Leaf />}
              title="On-Site Renewables"
              description="Solar, wind, or hydro connection behind the meter (or renewable energy certificates)."
            />
            <QualifyCard
              icon={<Shield />}
              title="Clean Production"
              description="Documented carbon intensity of <0.45kg CO2e per kg H2 for maximum credits."
            />
            <QualifyCard
              icon={<FileText />}
              title="Operational Audit"
              description="Robust data logging for 10-year credit period (automated by PowerPod)."
            />
            <QualifyCard
              icon={<Calculator />}
              title="Daily H2 Demand"
              description="System sized to your actual fuel needs, typically 90-225 kg/day."
            />
            <QualifyCard
              icon={<Zap />}
              title="Power Availability"
              description="Sufficient electrical capacity to run the electrolyzer (200-500 kW)."
            />
            <QualifyCard
              icon={<BarChart3 />}
              title="Site Footprint"
              description="Space for 20' ISO containers (modular and stackable)."
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          6. EXAMPLE SCENARIO
          ============================================================ */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="heading-section text-center mb-4">What You'll Earn</h2>
          <p className="text-center text-body mb-12">
            Example: A 200 kg/day facility producing hydrogen for warehouse forklifts.
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-8">
              <ExampleStat label="Daily Production" value="200 kg" />
              <ExampleStat label="Annual Production" value="73,000 kg" />
              <ExampleStat label="Annual 45V Credit" value="$219,000" highlight />
              <ExampleStat label="10-Year Credits" value="$2.19M" highlight />
            </div>

            <div className="h-4 bg-slate-200 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-green-500 w-[68%]"></div>
            </div>
            <p className="text-center text-sm text-slate-500">
              68% of production costs covered by federal tax credits alone
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          7. FAQ
          ============================================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="heading-section text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <FAQItem
              question="Can ITC and 45V credits stack?"
              answer="Yes. We model the optimal stack based on your project structure and timeline. In most cases, you can claim both."
            />
            <FAQItem
              question="How is 45V verified?"
              answer="Lifecycle emissions are verified through integrated metering and certified audit trails. Our PowerPod systems include automated compliance tracking."
            />
            <FAQItem
              question="Do incentives apply outside California?"
              answer="Yes. Federal credits (45V and ITC) apply nationwide. LCFS credits are specific to California but other states have similar programs."
            />
            <FAQItem
              question="What data do you need from me?"
              answer="Daily fuel demand, power availability, site footprint, and operational profile. We handle all the incentive modeling."
            />
            <FAQItem
              question="How long does qualification take?"
              answer="We can provide a preliminary incentive estimate within 48 hours of receiving your site data."
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          8. FINAL CTA
          ============================================================ */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to see your incentive projection?
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Get a finance-ready ROI snapshot with incentive stacking, assumptions, and compliance guidance.
          </p>
          <Link href="/contact" className="btn-cta inline-flex items-center gap-2 text-lg">
            Request Custom Analysis <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}

// ============================================================
// SUB-COMPONENTS
// ============================================================

interface CreditCardProps {
  icon: React.ReactNode;
  title: string;
  code: string;
  value: string;
  unit: string;
  description: string;
  features: string[];
}

function CreditCard({ icon, title, code, value, unit, description, features }: CreditCardProps) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 card-hover">
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 bg-white rounded-lg shadow-sm">{icon}</div>
        <span className="text-xs font-bold bg-slate-200 text-slate-600 px-2 py-1 rounded">{code}</span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>

      <div className="text-4xl font-bold text-green-600 mb-4">
        {value}<span className="text-lg font-normal text-slate-400">{unit}</span>
      </div>

      <p className="text-slate-600 text-sm mb-6">{description}</p>

      <ul className="space-y-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
            <CheckCircle size={14} className="text-green-500" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface QualifyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function QualifyCard({ icon, title, description }: QualifyCardProps) {
  return (
    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
      <div className="text-green-600 mb-3">{icon}</div>
      <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}

interface ExampleStatProps {
  label: string;
  value: string;
  highlight?: boolean;
}

function ExampleStat({ label, value, highlight = false }: ExampleStatProps) {
  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{label}</div>
      <div className={`text-2xl font-bold ${highlight ? 'text-green-600' : 'text-slate-900'}`}>{value}</div>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="bg-slate-50 border border-slate-200 rounded-lg p-6 group">
      <summary className="cursor-pointer font-bold text-slate-900 flex items-center justify-between">
        {question}
        <ArrowRight size={16} className="transform group-open:rotate-90 transition-transform text-slate-400" />
      </summary>
      <p className="mt-4 text-slate-600">{answer}</p>
    </details>
  );
}
