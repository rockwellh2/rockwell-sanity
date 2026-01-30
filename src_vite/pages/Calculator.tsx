import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator as CalculatorIcon,
  Leaf,
  Zap,
  Info,
  ArrowRight,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Calculator = () => {
  const [currentEnergyCost, setCurrentEnergyCost] = useState(0.12);
  const [annualConsumption, setAnnualConsumption] = useState(1000000);
  const [dieselConsumption, setDieselConsumption] = useState(50000);
  const [dieselPrice, setDieselPrice] = useState(4.5);
  const [electricityRate, setElectricityRate] = useState(0.08);
  const [systemSize, setSystemSize] = useState(2.5);
  const [taxCreditRate, setTaxCreditRate] = useState(3);

  const calculateResults = () => {
    const annualElectricityCost = annualConsumption * currentEnergyCost;
    const annualDieselCost = dieselConsumption * dieselPrice;
    const totalCurrentCost = annualElectricityCost + annualDieselCost;

    const hydrogenOutput = systemSize * 200 * 365;
    const electrolysisCost = systemSize * 1000 * electricityRate * 24 * 365;
    const hydrogenCostPerKg = electrolysisCost / hydrogenOutput;

    const annualTaxCredit = hydrogenOutput * taxCreditRate;

    const annualSavings = totalCurrentCost - electrolysisCost + annualTaxCredit;
    const co2Avoided = dieselConsumption * 22.4 + (annualConsumption * 0.4);

    const systemCost = systemSize * 2200000;
    const paybackPeriod = systemCost / (annualSavings > 0 ? annualSavings : 1);
    const tenYearSavings = annualSavings * 10 - systemCost;
    const irr = (annualSavings / systemCost) * 100;

    return {
      annualElectricityCost,
      annualDieselCost,
      totalCurrentCost,
      hydrogenOutput,
      electrolysisCost,
      hydrogenCostPerKg,
      annualTaxCredit,
      annualSavings,
      co2Avoided,
      systemCost,
      paybackPeriod,
      tenYearSavings,
      irr
    };
  };

  const results = calculateResults();

  const formatCurrency = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
    return `$${value.toFixed(0)}`;
  };

  const formatNumber = (value: number) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
    return value.toFixed(0);
  };

  return (
    <main className="relative">
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cloud-100">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="label-mono text-teal-500 mb-4 block">CALCULATOR</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-500 mb-6">
              Hydrogen ROI Calculator
            </h1>
            <p className="text-grey-500 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
              Estimate your potential savings, tax credits, and payback period with our interactive calculator.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full py-12 lg:py-20 bg-cloud-100">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white rounded-3xl p-6 lg:p-8 border border-navy-500/8 shadow-card">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-xl font-semibold text-navy-500">Your Inputs</h2>
                  <button
                    onClick={() => {
                      setCurrentEnergyCost(0.12);
                      setAnnualConsumption(1000000);
                      setDieselConsumption(50000);
                      setDieselPrice(4.5);
                      setElectricityRate(0.08);
                      setSystemSize(2.5);
                      setTaxCreditRate(3);
                    }}
                    className="flex items-center gap-2 text-grey-500 hover:text-navy-500 transition-colors text-sm"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-navy-500/5 rounded-xl">
                    <h3 className="font-medium text-navy-500 mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-teal-500" />
                      Current Energy Costs
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <Label className="text-sm text-grey-500">Electricity Rate</Label>
                          <span className="text-sm font-medium text-navy-500">${currentEnergyCost.toFixed(2)}/kWh</span>
                        </div>
                        <Slider
                          value={[currentEnergyCost]}
                          onValueChange={(v) => setCurrentEnergyCost(v[0])}
                          min={0.05}
                          max={0.30}
                          step={0.01}
                        />
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <Label className="text-sm text-grey-500">Annual Consumption</Label>
                          <span className="text-sm font-medium text-navy-500">{formatNumber(annualConsumption)} kWh</span>
                        </div>
                        <Slider
                          value={[annualConsumption]}
                          onValueChange={(v) => setAnnualConsumption(v[0])}
                          min={100000}
                          max={10000000}
                          step={50000}
                        />
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <Label className="text-sm text-grey-500">Diesel Consumption</Label>
                          <span className="text-sm font-medium text-navy-500">{formatNumber(dieselConsumption)} gal/yr</span>
                        </div>
                        <Slider
                          value={[dieselConsumption]}
                          onValueChange={(v) => setDieselConsumption(v[0])}
                          min={0}
                          max={200000}
                          step={5000}
                        />
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <Label className="text-sm text-grey-500">Diesel Price</Label>
                          <span className="text-sm font-medium text-navy-500">${dieselPrice.toFixed(2)}/gal</span>
                        </div>
                        <Slider
                          value={[dieselPrice]}
                          onValueChange={(v) => setDieselPrice(v[0])}
                          min={2}
                          max={8}
                          step={0.1}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-teal-50 rounded-xl border border-teal-100">
                    <h3 className="font-medium text-navy-500 mb-4 flex items-center gap-2">
                      <CalculatorIcon className="w-4 h-4 text-teal-500" />
                      Hydrogen System
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <Label className="text-sm text-grey-500">System Size</Label>
                          <span className="text-sm font-medium text-navy-500">{systemSize} MW</span>
                        </div>
                        <Slider
                          value={[systemSize]}
                          onValueChange={(v) => setSystemSize(v[0])}
                          min={0.5}
                          max={10}
                          step={0.5}
                        />
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <Label className="text-sm text-grey-500">Electrolysis Rate</Label>
                          <span className="text-sm font-medium text-navy-500">${electricityRate.toFixed(2)}/kWh</span>
                        </div>
                        <Slider
                          value={[electricityRate]}
                          onValueChange={(v) => setElectricityRate(v[0])}
                          min={0.03}
                          max={0.15}
                          step={0.01}
                        />
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <Label className="text-sm text-grey-500">
                            Tax Credit
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Info className="w-3 h-3 ml-1 text-grey-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">IRA Section 45V clean hydrogen production credit. Up to $3/kg for qualifying projects.</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </Label>
                          <span className="text-sm font-medium text-navy-500">${taxCreditRate}/kg</span>
                        </div>
                        <Slider
                          value={[taxCreditRate]}
                          onValueChange={(v) => setTaxCreditRate(v[0])}
                          min={0}
                          max={3}
                          step={0.5}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-navy-500 rounded-3xl p-6 lg:p-8 text-white">
                  <h2 className="font-heading text-xl font-semibold mb-6">Your Results</h2>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-white/10 rounded-xl">
                      <p className="text-white/60 text-xs mb-1">Annual Savings</p>
                      <p className="text-teal-400 font-heading text-2xl font-bold">{formatCurrency(results.annualSavings)}</p>
                    </div>
                    <div className="p-4 bg-white/10 rounded-xl">
                      <p className="text-white/60 text-xs mb-1">Payback Period</p>
                      <p className="text-teal-400 font-heading text-2xl font-bold">{results.paybackPeriod.toFixed(1)} Years</p>
                    </div>
                    <div className="p-4 bg-white/10 rounded-xl">
                      <p className="text-white/60 text-xs mb-1">10-Year NPV</p>
                      <p className="text-teal-400 font-heading text-2xl font-bold">{formatCurrency(results.tenYearSavings)}</p>
                    </div>
                    <div className="p-4 bg-white/10 rounded-xl">
                      <p className="text-white/60 text-xs mb-1">IRR</p>
                      <p className="text-teal-400 font-heading text-2xl font-bold">{results.irr.toFixed(1)}%</p>
                    </div>
                  </div>

                  <div className="p-4 bg-teal-500/20 rounded-xl border border-teal-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="w-5 h-5 text-teal-400" />
                      <span className="text-sm font-medium">Annual CO₂ Avoided</span>
                    </div>
                    <p className="text-teal-400 font-heading text-3xl font-bold">{formatNumber(results.co2Avoided)} <span className="text-lg">lbs</span></p>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-navy-500/8 shadow-card">
                  <h3 className="font-heading text-lg font-semibold text-navy-500 mb-4">Cost Breakdown</h3>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-navy-500/8">
                      <span className="text-grey-500 text-sm">Current Annual Energy Cost</span>
                      <span className="font-medium text-navy-500">{formatCurrency(results.totalCurrentCost)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-navy-500/8">
                      <span className="text-grey-500 text-sm">Hydrogen Production Cost</span>
                      <span className="font-medium text-navy-500">{formatCurrency(results.electrolysisCost)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-navy-500/8">
                      <span className="text-grey-500 text-sm">Annual Tax Credit</span>
                      <span className="font-medium text-green-500">-{formatCurrency(results.annualTaxCredit)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-navy-500/8">
                      <span className="text-grey-500 text-sm">System Investment</span>
                      <span className="font-medium text-navy-500">{formatCurrency(results.systemCost)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-teal-50 rounded-xl px-4">
                      <span className="font-medium text-navy-500">Net Annual Benefit</span>
                      <span className="font-heading font-bold text-teal-500">{formatCurrency(results.annualSavings)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-navy-500/8 shadow-card">
                  <h3 className="font-heading text-lg font-semibold text-navy-500 mb-4">Hydrogen Production</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-navy-500/5 rounded-xl">
                      <p className="text-grey-500 text-xs mb-1">Annual Output</p>
                      <p className="font-heading font-bold text-navy-500">{formatNumber(results.hydrogenOutput)} <span className="text-sm font-normal">kg</span></p>
                    </div>
                    <div className="p-4 bg-navy-500/5 rounded-xl">
                      <p className="text-grey-500 text-xs mb-1">Cost per kg</p>
                      <p className="font-heading font-bold text-navy-500">${results.hydrogenCostPerKg.toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-500 rounded-3xl p-6 text-white text-center">
                  <CheckCircle2 className="w-10 h-10 mx-auto mb-3" />
                  <h3 className="font-heading text-lg font-semibold mb-2">Ready to explore further?</h3>
                  <p className="text-white/80 text-sm mb-4">Get a detailed proposal tailored to your facility.</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-500 font-medium rounded-full hover:bg-white/90 transition-colors">
                    Request Detailed Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-grey-500 text-xs text-center mt-8 max-w-2xl mx-auto">
              This calculator provides estimates based on typical system performance and current incentive programs. 
              Actual results may vary based on site-specific conditions, installation costs, and regulatory changes. 
              Contact us for a detailed feasibility study.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Calculator;
