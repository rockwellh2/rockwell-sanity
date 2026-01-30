import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  BadgePercent, 
  Leaf, 
  TrendingUp,
  Shield,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  Award
} from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Financial Benefits',
      color: 'green',
      items: [
        {
          title: 'Stable Energy Costs',
          description: 'Lock in predictable hydrogen production costs for 20+ years, insulating your business from volatile fossil fuel prices.',
          stat: '40-70%',
          statLabel: 'Cost Reduction'
        },
        {
          title: 'Energy Arbitrage',
          description: 'Produce hydrogen during low electricity rates, use or sell during peak demand periods.',
          stat: '2-3x',
          statLabel: 'Revenue Potential'
        },
        {
          title: 'Reduced OPEX',
          description: 'Lower maintenance costs compared to diesel generators and complex battery systems.',
          stat: '30%',
          statLabel: 'Lower Maintenance'
        }
      ]
    },
    {
      icon: BadgePercent,
      title: 'Tax Credits & Incentives',
      color: 'teal',
      items: [
        {
          title: 'IRA Production Credit',
          description: 'Up to $3/kg for clean hydrogen production under the Inflation Reduction Act Section 45V.',
          stat: '$3/kg',
          statLabel: 'Max Credit'
        },
        {
          title: 'Investment Tax Credit',
          description: '30% ITC for clean energy property including electrolyzers and fuel cells.',
          stat: '30%',
          statLabel: 'ITC Rate'
        },
        {
          title: 'State Incentives',
          description: 'Additional rebates and incentives available in California, Texas, New York, and other states.',
          stat: '$0.50-2/kg',
          statLabel: 'State Credits'
        }
      ]
    },
    {
      icon: Leaf,
      title: 'Carbon Credits',
      color: 'blue',
      items: [
        {
          title: 'LCFS Credits',
          description: 'Generate Low Carbon Fuel Standard credits in California and other participating states.',
          stat: '$100-200',
          statLabel: 'Per Tonne CO₂'
        },
        {
          title: 'Voluntary Carbon Markets',
          description: 'Sell verified carbon reductions to corporations seeking offset purchases.',
          stat: '$30-80',
          statLabel: 'Per Tonne CO₂'
        },
        {
          title: 'Compliance Markets',
          description: 'Participate in cap-and-trade programs in California, RGGI states, and EU ETS.',
          stat: '$15-90',
          statLabel: 'Per Allowance'
        }
      ]
    },
    {
      icon: TrendingUp,
      title: 'Energy Price Stability',
      color: 'purple',
      items: [
        {
          title: 'Hedge Against Volatility',
          description: 'Protect your business from unpredictable diesel and natural gas price swings.',
          stat: '±5%',
          statLabel: 'Price Variance'
        },
        {
          title: 'Long-term Contracts',
          description: 'Secure 10-20 year power purchase agreements with fixed hydrogen pricing.',
          stat: '20 Years',
          statLabel: 'Contract Terms'
        },
        {
          title: 'Budget Certainty',
          description: 'Predictable energy costs enable better financial planning and forecasting.',
          stat: '95%',
          statLabel: 'Cost Predictability'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Safety & Insurance',
      color: 'orange',
      items: [
        {
          title: 'Safer Than Diesel',
          description: 'Hydrogen dissipates rapidly in air, reducing fire risks compared to liquid fuels.',
          stat: '14x',
          statLabel: 'Faster Dissipation'
        },
        {
          title: 'Lower Insurance Premiums',
          description: 'Non-toxic, non-corrosive hydrogen storage may qualify for reduced insurance rates.',
          stat: '10-20%',
          statLabel: 'Premium Reduction'
        },
        {
          title: 'Automatic Safety Systems',
          description: 'Built-in leak detection, pressure relief, and emergency shutdown capabilities.',
          stat: '<1 sec',
          statLabel: 'Response Time'
        }
      ]
    },
    {
      icon: FileCheck,
      title: 'Compliance & Reporting',
      color: 'red',
      items: [
        {
          title: 'ESG Reporting',
          description: 'Automated data collection for sustainability reports and stakeholder communications.',
          stat: '100%',
          statLabel: 'Data Coverage'
        },
        {
          title: 'Regulatory Compliance',
          description: 'Meet emerging clean energy mandates and emissions reduction requirements.',
          stat: '50+',
          statLabel: 'Regulations Tracked'
        },
        {
          title: 'Audit Trail',
          description: 'Complete chain of custody documentation for carbon accounting and verification.',
          stat: '10 Years',
          statLabel: 'Data Retention'
        }
      ]
    }
  ];

  const colorClasses: Record<string, { bg: string; text: string; light: string; border: string }> = {
    green: { bg: 'bg-green-500', text: 'text-green-500', light: 'bg-green-50', border: 'border-green-200' },
    teal: { bg: 'bg-teal-500', text: 'text-teal-500', light: 'bg-teal-50', border: 'border-teal-200' },
    blue: { bg: 'bg-blue-500', text: 'text-blue-500', light: 'bg-blue-50', border: 'border-blue-200' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-500', light: 'bg-purple-50', border: 'border-purple-200' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-500', light: 'bg-orange-50', border: 'border-orange-200' },
    red: { bg: 'bg-red-500', text: 'text-red-500', light: 'bg-red-50', border: 'border-red-200' },
  };

  return (
    <main className="relative">
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cloud-100">
        <div className="section-padding">
          <div className="max-w-4xl">
            <span className="label-mono text-teal-500 mb-4 block">BENEFITS</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-500 mb-6">
              The CFO Page
            </h1>
            <p className="text-grey-500 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Financial and risk-focused benefits that make hydrogen a compelling investment for your organization.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full py-12 lg:py-20 bg-cloud-100">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const colors = colorClasses[benefit.color];

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 lg:p-8 border border-navy-500/8 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${colors.light} flex items-center justify-center mb-4`}>
                    <benefit.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>

                  <h2 className="font-heading text-xl font-semibold text-navy-500 mb-6">
                    {benefit.title}
                  </h2>

                  <div className="space-y-4">
                    {benefit.items.map((item, i) => (
                      <div key={i} className={`p-4 rounded-xl ${colors.light} border ${colors.border}`}>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-navy-500 text-sm">{item.title}</h3>
                          <div className="text-right">
                            <p className={`${colors.text} font-heading font-bold text-lg`}>{item.stat}</p>
                            <p className="text-grey-500 text-[10px]">{item.statLabel}</p>
                          </div>
                        </div>
                        <p className="text-grey-500 text-xs leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 lg:py-20 bg-navy-500">
        <div className="section-padding">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Award className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
                Typical ROI Summary
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Based on actual customer deployments across various industries and scales.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <TrendingDown className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                <p className="text-white font-heading text-3xl font-bold mb-1">3-5 Years</p>
                <p className="text-white/60 text-sm">Payback Period</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <DollarSign className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                <p className="text-white font-heading text-3xl font-bold mb-1">15-25%</p>
                <p className="text-white/60 text-sm">Internal Rate of Return</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <BadgePercent className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                <p className="text-white font-heading text-3xl font-bold mb-1">$2-5M</p>
                <p className="text-white/60 text-sm">Tax Credits (10-year)</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <Leaf className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                <p className="text-white font-heading text-3xl font-bold mb-1">10,000+</p>
                <p className="text-white/60 text-sm">Tonnes CO₂ Avoided/Year</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/calculator" className="btn-primary bg-teal-500 hover:bg-teal-400">
                Calculate Your ROI
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/contact" className="btn-secondary border-white/20 text-white hover:bg-white/10">
                Speak with Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 lg:py-20 bg-cloud-100">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-navy-500 mb-8 text-center">
              Risk Mitigation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-navy-500/8 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy-500 mb-2">Technology Risk</h3>
                    <p className="text-grey-500 text-sm">Proven PEM electrolyzer technology with 10+ years of commercial operation. 99.5% uptime guarantee.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-navy-500/8 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy-500 mb-2">Regulatory Risk</h3>
                    <p className="text-grey-500 text-sm">Bipartisan support for clean hydrogen incentives. IRA credits locked in through 2032.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-navy-500/8 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy-500 mb-2">Market Risk</h3>
                    <p className="text-grey-500 text-sm">Growing demand for clean hydrogen across transportation, industry, and power sectors.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-navy-500/8 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy-500 mb-2">Operational Risk</h3>
                    <p className="text-grey-500 text-sm">Turnkey EPC delivery with comprehensive training, support, and maintenance packages.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Benefits;
