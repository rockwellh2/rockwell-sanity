import { Sun, Wind, Waves, Zap, Database, Battery, Fuel, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Energy Input',
      description: 'Solar, wind, or hydro power feeds the system with clean renewable electricity.',
      icons: [Sun, Wind, Waves],
      color: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      borderColor: 'border-yellow-200'
    },
    {
      number: '02',
      title: 'Electrolysis',
      description: 'Water is split into hydrogen and oxygen using PEM electrolyzer technology.',
      icons: [Zap],
      stats: '90-225 kg/day',
      color: 'bg-teal-50',
      iconColor: 'text-teal-600',
      borderColor: 'border-teal-200'
    },
    {
      number: '03',
      title: 'Storage',
      description: 'High-pressure composite tanks safely store hydrogen for on-demand use.',
      icons: [Database],
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      number: '04',
      title: 'Output',
      description: 'Hydrogen powers fuel cells for electricity or fuels vehicles directly.',
      icons: [Battery, Fuel],
      color: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 z-20 bg-cloud-100">
      <div className="section-padding">
        <div className="text-center mb-16">
          <span className="label-mono text-teal-500 mb-4 block">THE PROCESS</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-500 mb-4">
            How It Works
          </h2>
          <p className="text-grey-500 text-lg max-w-2xl mx-auto">
            From renewable energy to usable hydrogen power in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-6 border ${step.borderColor} shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-navy-500 flex items-center justify-center">
                <span className="text-white font-mono text-sm font-bold">{step.number}</span>
              </div>

              <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-4 mt-2`}>
                <div className="flex gap-1">
                  {step.icons.map((Icon, i) => (
                    <Icon key={i} className={`w-6 h-6 ${step.iconColor}`} />
                  ))}
                </div>
              </div>

              <h3 className="font-heading text-lg font-semibold text-navy-500 mb-2">
                {step.title}
              </h3>
              <p className="text-grey-500 text-sm leading-relaxed mb-3">
                {step.description}
              </p>

              {step.stats && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 rounded-lg">
                  <Zap className="w-4 h-4 text-teal-500" />
                  <span className="text-teal-700 text-sm font-medium">{step.stats}</span>
                </div>
              )}

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-navy-500 rounded-3xl p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-heading text-xl font-semibold">
                  200kW-1MW modules
                </p>
                <p className="text-white/70 text-sm">
                  Stackable to 10+ MW for any scale deployment
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
              <div className="text-center">
                <p className="text-teal-400 font-heading text-2xl font-bold">99.5%</p>
                <p className="text-white/60 text-xs">Uptime</p>
              </div>
              <div className="text-center">
                <p className="text-teal-400 font-heading text-2xl font-bold">&lt;5 min</p>
                <p className="text-white/60 text-xs">Refuel Time</p>
              </div>
              <div className="text-center">
                <p className="text-teal-400 font-heading text-2xl font-bold">24/7</p>
                <p className="text-white/60 text-xs">Monitoring</p>
              </div>
              <div className="text-center">
                <p className="text-teal-400 font-heading text-2xl font-bold">Zero</p>
                <p className="text-white/60 text-xs">Emissions</p>
              </div>
            </div>

            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white font-medium rounded-full hover:bg-teal-400 transition-colors"
            >
              Explore Our Solutions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
