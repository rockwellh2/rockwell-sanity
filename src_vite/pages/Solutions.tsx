import { Link } from 'react-router-dom';
import { 
  Zap, 
  Battery, 
  Fuel, 
  Grid3X3, 
  Factory,
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  Shield,
  Leaf
} from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Zap,
      title: 'Onsite Green Hydrogen',
      subtitle: 'Produce hydrogen where you need it',
      description: 'Generate clean hydrogen directly at your facility using renewable energy. Eliminate transportation costs and ensure a reliable supply for your operations.',
      benefits: [
        'Eliminate hydrogen delivery costs',
        'Guaranteed supply security',
        'Customizable production capacity',
        'Remote monitoring included'
      ],
      replaces: 'Delivered hydrogen, gray hydrogen',
      savings: 'Up to 60% cost reduction',
      color: 'teal'
    },
    {
      icon: Battery,
      title: 'Energy Storage & Backup Power',
      subtitle: 'Store excess renewable energy',
      description: 'Convert surplus solar or wind power into hydrogen for long-term storage. Use stored hydrogen to generate electricity during peak demand or outages.',
      benefits: [
        'Long-duration energy storage',
        'Grid independence',
        'Peak shaving capabilities',
        'Emergency backup power'
      ],
      replaces: 'Diesel generators, battery banks',
      savings: '40-70% vs diesel backup',
      color: 'blue'
    },
    {
      icon: Fuel,
      title: 'Hydrogen Vehicle Fueling',
      subtitle: 'Fleet refueling infrastructure',
      description: 'Deploy fast, clean refueling stations for hydrogen-powered vehicles. Support your fleet transition with on-site fueling infrastructure.',
      benefits: [
        '3-5 minute refueling',
        '350-bar dispensing',
        'Fleet management integration',
        'Scalable capacity'
      ],
      replaces: 'Diesel/gasoline stations',
      savings: '30-50% fuel cost reduction',
      color: 'green'
    },
    {
      icon: Grid3X3,
      title: 'Microgrids & Remote Power',
      subtitle: 'Off-grid energy solutions',
      description: 'Power remote operations with self-sustaining hydrogen microgrids. Ideal for mining, telecom towers, and remote industrial sites.',
      benefits: [
        'Complete energy independence',
        'No fuel logistics',
        '24/7 reliable power',
        'Minimal maintenance'
      ],
      replaces: 'Diesel microgrids, generators',
      savings: '50-80% vs diesel delivery',
      color: 'purple'
    },
    {
      icon: Factory,
      title: 'Industrial Decarbonization',
      subtitle: 'Reduce Scope 1 & 2 emissions',
      description: 'Replace fossil fuel use in industrial processes with green hydrogen. Meet sustainability targets while maintaining operational efficiency.',
      benefits: [
        'Significant CO₂ reduction',
        'Regulatory compliance',
        'ESG reporting support',
        'Carbon credit eligibility'
      ],
      replaces: 'Natural gas, coal, fuel oil',
      savings: 'Tax credits + carbon offsets',
      color: 'orange'
    }
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string; light: string }> = {
    teal: { bg: 'bg-teal-500', text: 'text-teal-500', border: 'border-teal-200', light: 'bg-teal-50' },
    blue: { bg: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-200', light: 'bg-blue-50' },
    green: { bg: 'bg-green-500', text: 'text-green-500', border: 'border-green-200', light: 'bg-green-50' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-200', light: 'bg-purple-50' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-200', light: 'bg-orange-50' },
  };

  return (
    <main className="relative">
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cloud-100">
        <div className="section-padding">
          <div className="max-w-4xl">
            <span className="label-mono text-teal-500 mb-4 block">SOLUTIONS</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-500 mb-6">
              How do you use hydrogen?
            </h1>
            <p className="text-grey-500 text-lg lg:text-xl leading-relaxed max-w-2xl">
              From production to power generation, we provide complete hydrogen solutions tailored to your industry and operational needs.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full py-12 lg:py-20 bg-cloud-100">
        <div className="section-padding">
          <div className="space-y-12 lg:space-y-20">
            {solutions.map((solution, index) => {
              const colors = colorClasses[solution.color];
              const isReversed = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card bg-navy-500/5 flex items-center justify-center">
                      <div className={`w-24 h-24 rounded-2xl ${colors.light} flex items-center justify-center`}>
                        <solution.icon className={`w-12 h-12 ${colors.text}`} />
                      </div>
                    </div>
                  </div>

                  <div className={`${isReversed ? 'lg:order-1' : ''}`}>
                    <div className={`w-12 h-12 rounded-xl ${colors.light} flex items-center justify-center mb-4`}>
                      <solution.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>

                    <span className="label-mono text-grey-500 mb-2 block">{solution.subtitle}</span>
                    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-500 mb-4">
                      {solution.title}
                    </h2>
                    <p className="text-grey-500 leading-relaxed mb-6">
                      {solution.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                          <span className="text-navy-500/80 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className={`p-4 rounded-xl ${colors.light} border ${colors.border}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingDown className={`w-4 h-4 ${colors.text}`} />
                          <span className="text-xs text-grey-500">Replaces</span>
                        </div>
                        <p className="text-navy-500 text-sm font-medium">{solution.replaces}</p>
                      </div>
                      <div className={`p-4 rounded-xl ${colors.light} border ${colors.border}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <Shield className={`w-4 h-4 ${colors.text}`} />
                          <span className="text-xs text-grey-500">Savings</span>
                        </div>
                        <p className="text-navy-500 text-sm font-medium">{solution.savings}</p>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-teal-500 font-medium hover:text-teal-600 transition-colors"
                    >
                      Discuss your project
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 lg:py-20 bg-navy-500">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <Leaf className="w-12 h-12 text-teal-400 mx-auto mb-6" />
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
              Not sure which solution fits your needs?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Our engineers will analyze your energy profile and recommend the optimal hydrogen configuration for your facility.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary bg-teal-500 hover:bg-teal-400">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/calculator" className="btn-secondary border-white/20 text-white hover:bg-white/10">
                Try ROI Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Solutions;
