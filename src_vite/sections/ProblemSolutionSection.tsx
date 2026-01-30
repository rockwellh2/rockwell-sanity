import { useState } from 'react';
import { 
  TrendingDown, 
  AlertTriangle, 
  Flame, 
  Cloud, 
  Sun,
  CheckCircle2,
  Battery,
  Zap,
  ArrowRight,
  DollarSign,
  Shield,
  Leaf,
  BadgeCheck,
  Droplets,
  Factory,
  Calculator,
  RotateCcw
} from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

const ProblemSolutionSection = () => {
  const [systemSize, setSystemSize] = useState(2.5);
  const [electricityRate, setElectricityRate] = useState(0.12);
  const [annualConsumption, setAnnualConsumption] = useState(500000);

  const hydrogenOutput = Math.round(systemSize * 200 * 365);
  const annualSavings = Math.round(annualConsumption * (electricityRate - 0.06));
  const paybackYears = ((systemSize * 2200000) / (annualSavings + hydrogenOutput * 2.5)).toFixed(1);
  const co2Avoided = Math.round(hydrogenOutput * 10);

  const problems = [
    { icon: TrendingDown, text: 'Energy from fossil fuels is costly and unpredictable' },
    { icon: AlertTriangle, text: 'Dependency on unreliable grid energy sources' },
    { icon: Flame, text: 'Diesel storage creates toxic and fire hazards' },
    { icon: Cloud, text: 'Greenhouse gas emissions from traditional power' },
    { icon: Sun, text: 'Declining solar power revenue from utilities' },
  ];

  const solutions = [
    { icon: CheckCircle2, text: 'Turnkey modular hydrogen systems' },
    { icon: Battery, text: 'Store onsite renewable energy as H₂' },
    { icon: Zap, text: 'One-stop: equipment + installation + support' },
    { icon: Shield, text: '24/7 remote monitoring and maintenance' },
  ];

  const benefits = [
    { icon: DollarSign, text: 'Lower, stable energy costs year over year' },
    { icon: BadgeCheck, text: 'Production tax credits up to $3/kg' },
    { icon: Shield, text: 'Complete energy independence' },
    { icon: Leaf, text: 'Safer than diesel and battery storage' },
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 z-20 bg-cloud-100">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-500 mb-4">
            From Challenge to Opportunity
          </h2>
          <p className="text-grey-500 text-lg max-w-2xl mx-auto">
            See how Rockwell H2 transforms your energy challenges into competitive advantages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Problems Column */}
          <div className="bg-white rounded-3xl p-6 border border-navy-500/10 shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-navy-500">The Challenge</h3>
            </div>
            <ul className="space-y-3">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-2">
                  <problem.icon className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-navy-500/80 text-sm leading-relaxed">{problem.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Column */}
          <div className="bg-white rounded-3xl p-6 border-2 border-emerald-500/30 shadow-card hover:shadow-card-hover transition-all duration-300 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 rounded-full">
              <span className="text-white text-xs font-medium">Our Solution</span>
            </div>
            <div className="flex items-center gap-3 mb-5 mt-1">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-navy-500">Rockwell H2</h3>
            </div>
            <ul className="space-y-3 mb-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-2">
                  <solution.icon className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-navy-500/80 text-sm leading-relaxed">{solution.text}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-cloud-100 rounded-xl p-3">
              <p className="text-xs text-grey-500 mb-2 text-center font-medium uppercase tracking-wider">How It Works</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center">
                    <Sun className="w-4 h-4 text-yellow-600" />
                  </div>
                  <span className="text-navy-500/70 text-[10px]">Solar</span>
                </div>
                <ArrowRight className="w-3 h-3 text-grey-300" />
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-navy-500/70 text-[10px]">H₂</span>
                </div>
                <ArrowRight className="w-3 h-3 text-grey-300" />
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Droplets className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-navy-500/70 text-[10px]">Store</span>
                </div>
                <ArrowRight className="w-3 h-3 text-grey-300" />
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
                    <Factory className="w-4 h-4 text-sky-600" />
                  </div>
                  <span className="text-navy-500/70 text-[10px]">Power</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Column */}
          <div className="bg-white rounded-3xl p-6 border border-navy-500/10 shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-navy-500">The Benefits</h3>
            </div>
            <ul className="space-y-3 mb-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <benefit.icon className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-navy-500/80 text-sm leading-relaxed">{benefit.text}</span>
                </li>
              ))}
            </ul>
            
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-2 mb-1">
                <BadgeCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-emerald-700 text-xs">IRA Tax Credit</span>
              </div>
              <p className="text-emerald-600 text-xs leading-relaxed">
                Up to $3/kg production credit available under the Inflation Reduction Act
              </p>
            </div>
          </div>

          {/* Calculator Column */}
          <div className="bg-white rounded-3xl p-6 border border-navy-500/10 shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-teal-500" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-navy-500">Quick Estimate</h3>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <Label className="text-xs text-grey-500">System Size</Label>
                  <span className="text-xs font-medium text-navy-500">{systemSize} MW</span>
                </div>
                <Slider
                  value={[systemSize]}
                  onValueChange={(v) => setSystemSize(v[0])}
                  min={0.5}
                  max={10}
                  step={0.5}
                  className="h-1.5"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <Label className="text-xs text-grey-500">Current Rate</Label>
                  <span className="text-xs font-medium text-navy-500">${electricityRate.toFixed(2)}/kWh</span>
                </div>
                <Slider
                  value={[electricityRate]}
                  onValueChange={(v) => setElectricityRate(v[0])}
                  min={0.05}
                  max={0.30}
                  step={0.01}
                  className="h-1.5"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <Label className="text-xs text-grey-500">Annual Usage</Label>
                  <span className="text-xs font-medium text-navy-500">{(annualConsumption / 1000).toFixed(0)}k kWh</span>
                </div>
                <Slider
                  value={[annualConsumption]}
                  onValueChange={(v) => setAnnualConsumption(v[0])}
                  min={100000}
                  max={2000000}
                  step={50000}
                  className="h-1.5"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="p-2 bg-teal-50 rounded-lg text-center">
                  <p className="text-[10px] text-teal-600 uppercase tracking-wider">H₂ Output</p>
                  <p className="text-lg font-bold text-teal-700">{(hydrogenOutput / 1000).toFixed(0)}k</p>
                  <p className="text-[10px] text-teal-500">kg/yr</p>
                </div>
                <div className="p-2 bg-emerald-50 rounded-lg text-center">
                  <p className="text-[10px] text-emerald-600 uppercase tracking-wider">Savings</p>
                  <p className="text-lg font-bold text-emerald-700">${(annualSavings / 1000).toFixed(0)}k</p>
                  <p className="text-[10px] text-emerald-500">/yr</p>
                </div>
                <div className="p-2 bg-sky-50 rounded-lg text-center">
                  <p className="text-[10px] text-sky-600 uppercase tracking-wider">Payback</p>
                  <p className="text-lg font-bold text-sky-700">{paybackYears}</p>
                  <p className="text-[10px] text-sky-500">years</p>
                </div>
                <div className="p-2 bg-navy-500/5 rounded-lg text-center">
                  <p className="text-[10px] text-navy-500/60 uppercase tracking-wider">CO₂</p>
                  <p className="text-lg font-bold text-navy-500">{(co2Avoided / 1000).toFixed(0)}k</p>
                  <p className="text-[10px] text-navy-400">lbs/yr</p>
                </div>
              </div>

              <button
                onClick={() => {
                  setSystemSize(2.5);
                  setElectricityRate(0.12);
                  setAnnualConsumption(500000);
                }}
                className="flex items-center gap-1 text-grey-400 hover:text-navy-500 transition-colors text-xs"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
