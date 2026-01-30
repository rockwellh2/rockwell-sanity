import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Database, 
  Fuel, 
  Layers,
  ArrowRight,
  CheckCircle2,
  Download,
  Settings,
  Gauge,
  Thermometer,
  Wind,
  Calculator
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Products = () => {
  const [activeTab, setActiveTab] = useState('powerpod');

  const powerPodModels = [
    {
      name: 'PowerPod-200',
      subtitle: 'Modular stack of Rockwell Power Pack units producing ~200 kg H₂ per day',
      scaleLabel: 'Typical Commercial Deployment',
      output: '200 kg H₂/day',
      power: '1 MW',
      dimensions: '6m × 2.4m × 2.9m',
      weight: '12,000 kg',
      pressure: '350 bar',
      purity: '99.99%',
      efficiency: '65% LHV',
      features: [
        'Compact footprint for limited space',
        'Ideal for pilot projects',
        'Single-unit deployment',
        'Basic monitoring included'
      ],
      ideal: 'Small fleets, R&D facilities, pilot programs'
    },
    {
      name: 'PowerPod-500',
      subtitle: 'Modular stack of Rockwell Power Pack units producing ~500 kg H₂ per day',
      scaleLabel: 'Common System Size',
      output: '500 kg H₂/day',
      power: '2.5 MW',
      dimensions: '12m × 2.4m × 2.9m',
      weight: '28,000 kg',
      pressure: '350-700 bar',
      purity: '99.999%',
      efficiency: '68% LHV',
      features: [
        'Most popular configuration',
        'Redundant safety systems',
        'Advanced monitoring dashboard',
        'Remote diagnostics'
      ],
      ideal: 'Commercial fleets, industrial sites, fueling stations',
      featured: true
    },
    {
      name: 'PowerPod-1000',
      subtitle: 'Modular stack of Rockwell Power Pack units producing ~1,000 kg H₂ per day',
      scaleLabel: 'Representative Configuration',
      output: '1,000 kg H₂/day',
      power: '5 MW',
      dimensions: '24m × 2.4m × 2.9m',
      weight: '52,000 kg',
      pressure: '350-700 bar',
      purity: '99.999%',
      efficiency: '70% LHV',
      features: [
        'Maximum single-unit output',
        'Full redundancy options',
        'Predictive maintenance AI',
        '24/7 support included'
      ],
      ideal: 'Large industrial, ports, utility-scale projects'
    }
  ];

  const components = [
    {
      category: 'Electrolyzers',
      icon: Zap,
      items: [
        { name: 'PEM-200', spec: '200 kW', description: 'Proton exchange membrane electrolyzer' },
        { name: 'PEM-500', spec: '500 kW', description: 'Mid-scale hydrogen production' },
        { name: 'PEM-1000', spec: '1 MW', description: 'Large-scale industrial electrolyzer' }
      ]
    },
    {
      category: 'Storage',
      icon: Database,
      items: [
        { name: 'Tank-2000', spec: '2,000 kg', description: 'High-pressure composite storage' },
        { name: 'Tank-5000', spec: '5,000 kg', description: 'Bulk hydrogen storage system' },
        { name: 'Tank-10000', spec: '10,000 kg', description: 'Utility-scale storage solution' }
      ]
    },
    {
      category: 'Fuel Cells',
      icon: Fuel,
      items: [
        { name: 'FC-100', spec: '100 kW', description: 'Power generation module' },
        { name: 'FC-250', spec: '250 kW', description: 'Industrial power output' },
        { name: 'FC-500', spec: '500 kW', description: 'Large-scale power generation' }
      ]
    },
    {
      category: 'Fueling',
      icon: Wind,
      items: [
        { name: 'Dispense-350', spec: '350 bar', description: 'Standard vehicle fueling' },
        { name: 'Dispense-700', spec: '700 bar', description: 'Heavy-duty vehicle fueling' },
        { name: 'Station-Module', spec: 'Modular', description: 'Complete fueling station' }
      ]
    }
  ];

  return (
    <main className="relative">
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cloud-100">
        <div className="section-padding">
          <div className="max-w-4xl">
            <span className="label-mono text-teal-500 mb-4 block">PRODUCTS</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-500 mb-6">
              PowerPod Platform
            </h1>
            <p className="text-grey-500 text-lg lg:text-xl leading-relaxed max-w-2xl mb-8">
              Modular hydrogen infrastructure designed for rapid deployment and seamless scaling. From 200 kg to 10+ MW configurations.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-secondary">
                <Download className="w-4 h-4 mr-2" />
                Download Spec Sheet
              </button>
              <Link to="/contact" className="btn-primary">
                Request Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-12 lg:py-20 bg-cloud-100">
        <div className="section-padding">
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {[
              { id: 'powerpod', label: 'PowerPod Systems' },
              { id: 'components', label: 'Components' },
              { id: 'stackable', label: 'Stackable MW' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-navy-500 text-white'
                    : 'bg-white text-navy-500 hover:bg-navy-500/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'powerpod' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {powerPodModels.map((model, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
                    model.featured
                      ? 'border-teal-500 shadow-card-hover'
                      : 'border-navy-500/8 shadow-card hover:shadow-card-hover'
                  }`}
                >
                  {model.featured && (
                    <div className="bg-teal-500 text-white text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}

                  <div className="p-6 lg:p-8">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-teal-500" />
                    </div>

                    <h3 className="font-heading text-xl font-semibold text-navy-500 mb-2">
                      {model.name}
                    </h3>
                    <p className="text-grey-500 text-sm mb-1">{model.subtitle}</p>
                    <p className="text-teal-600 text-xs font-medium mb-4">{model.scaleLabel}</p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="p-3 bg-navy-500/5 rounded-xl">
                        <p className="text-xs text-grey-500 mb-1">Output</p>
                        <p className="text-navy-500 font-medium text-sm">{model.output}</p>
                      </div>
                      <div className="p-3 bg-navy-500/5 rounded-xl">
                        <p className="text-xs text-grey-500 mb-1">Power</p>
                        <p className="text-navy-500 font-medium text-sm">{model.power}</p>
                      </div>
                      <div className="p-3 bg-navy-500/5 rounded-xl">
                        <p className="text-xs text-grey-500 mb-1">Pressure</p>
                        <p className="text-navy-500 font-medium text-sm">{model.pressure}</p>
                      </div>
                      <div className="p-3 bg-navy-500/5 rounded-xl">
                        <p className="text-xs text-grey-500 mb-1">Purity</p>
                        <p className="text-navy-500 font-medium text-sm">{model.purity}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {model.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                          <span className="text-navy-500/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-grey-500 text-xs mb-4">
                      <span className="font-medium">Ideal for:</span> {model.ideal}
                    </p>

                    <p className="text-grey-400 text-xs mb-4 italic">
                      Built from Rockwell Power Pack electrolyzers, Power Bank storage, and Power OnDemand fuel cells.
                    </p>

                    <div className="flex gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="flex-1 py-3 bg-navy-500 text-white rounded-full font-medium hover:bg-navy-600 transition-colors">
                            View Full Specs
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="font-heading text-2xl">{model.name} Specifications</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6 pt-4">
                            <p className="text-grey-500 text-sm">{model.subtitle}</p>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div className="p-4 bg-navy-500/5 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                  <Gauge className="w-4 h-4 text-teal-500" />
                                  <span className="text-sm text-grey-500">Output</span>
                                </div>
                                <p className="text-navy-500 font-semibold">{model.output}</p>
                              </div>
                              <div className="p-4 bg-navy-500/5 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                  <Zap className="w-4 h-4 text-teal-500" />
                                  <span className="text-sm text-grey-500">Power Input</span>
                                </div>
                                <p className="text-navy-500 font-semibold">{model.power}</p>
                              </div>
                              <div className="p-4 bg-navy-500/5 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                  <Settings className="w-4 h-4 text-teal-500" />
                                  <span className="text-sm text-grey-500">Dimensions</span>
                                </div>
                                <p className="text-navy-500 font-semibold">{model.dimensions}</p>
                              </div>
                              <div className="p-4 bg-navy-500/5 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                  <Thermometer className="w-4 h-4 text-teal-500" />
                                  <span className="text-sm text-grey-500">Operating Temp</span>
                                </div>
                                <p className="text-navy-500 font-semibold">-20°C to +45°C</p>
                              </div>
                            </div>
                            
                            <p className="text-grey-400 text-xs italic">
                              Built from Rockwell Power Pack electrolyzers, Power Bank storage, and Power OnDemand fuel cells.
                            </p>

                            <Link 
                              to="/calculator" 
                              className="w-full btn-primary justify-center"
                            >
                              <Calculator className="w-4 h-4 mr-2" />
                              Get Project Estimate
                            </Link>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Link 
                        to="/calculator" 
                        className="flex-1 py-3 bg-teal-50 text-teal-600 rounded-full font-medium hover:bg-teal-100 transition-colors text-center flex items-center justify-center gap-2"
                      >
                        <Calculator className="w-4 h-4" />
                        Estimate
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'components' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {components.map((category, index) => (
                <div key={index} className="bg-white rounded-3xl p-6 border border-navy-500/8 shadow-card">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy-500 mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="p-3 bg-navy-500/5 rounded-xl">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-navy-500 text-sm">{item.name}</span>
                          <span className="text-teal-500 text-xs">{item.spec}</span>
                        </div>
                        <p className="text-grey-500 text-xs">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'stackable' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-navy-500 rounded-3xl p-8 lg:p-12 text-center mb-8">
                <Layers className="w-16 h-16 text-teal-400 mx-auto mb-6" />
                <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-white mb-4">
                  Stackable Multi-Megawatt Systems
                </h3>
                <p className="text-white/70 max-w-2xl mx-auto mb-8">
                  Combine multiple PowerPod units to create utility-scale hydrogen production facilities. Our modular architecture scales seamlessly from 5 MW to 100+ MW.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="p-4 bg-white/10 rounded-xl">
                    <p className="text-teal-400 font-heading text-2xl font-bold">5 MW</p>
                    <p className="text-white/60 text-xs">Entry Scale</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl">
                    <p className="text-teal-400 font-heading text-2xl font-bold">25 MW</p>
                    <p className="text-white/60 text-xs">Industrial</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl">
                    <p className="text-teal-400 font-heading text-2xl font-bold">50 MW</p>
                    <p className="text-white/60 text-xs">Utility</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl">
                    <p className="text-teal-400 font-heading text-2xl font-bold">100+ MW</p>
                    <p className="text-white/60 text-xs">Hub Scale</p>
                  </div>
                </div>
                <Link to="/contact" className="btn-primary bg-teal-500 hover:bg-teal-400 inline-flex">
                  Discuss Large-Scale Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-2xl border border-navy-500/8">
                  <CheckCircle2 className="w-8 h-8 text-teal-500 mb-3" />
                  <h4 className="font-heading font-semibold text-navy-500 mb-2">Parallel Operation</h4>
                  <p className="text-grey-500 text-sm">Multiple units operate in parallel with intelligent load balancing.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-navy-500/8">
                  <CheckCircle2 className="w-8 h-8 text-teal-500 mb-3" />
                  <h4 className="font-heading font-semibold text-navy-500 mb-2">Shared Infrastructure</h4>
                  <p className="text-grey-500 text-sm">Common utilities, control systems, and maintenance protocols.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-navy-500/8">
                  <CheckCircle2 className="w-8 h-8 text-teal-500 mb-3" />
                  <h4 className="font-heading font-semibold text-navy-500 mb-2">Phased Deployment</h4>
                  <p className="text-grey-500 text-sm">Start small and expand capacity as demand grows.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Products;
