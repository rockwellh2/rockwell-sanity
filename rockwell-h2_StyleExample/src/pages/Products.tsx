import { Link } from 'react-router-dom'
import { Zap, Database, Fuel, BatteryCharging, Box, CheckCircle } from 'lucide-react'

const products = [
  {
    id: 'electrolyzer',
    icon: Zap,
    name: 'Electrolyzer',
    tagline: 'Convert water + renewable energy into hydrogen',
    description: 'Our electrolyzers efficiently convert water and renewable energy into hydrogen at 90-225 kg per day. Green power from solar, wind, and hydropower serves as input.',
    specs: [
      'Output: 90-225 kg H2/day',
      'Input: Solar, Wind, Hydropower',
      'Efficiency: Industry-leading conversion rates',
      'Modular design for scalability'
    ]
  },
  {
    id: 'storage',
    icon: Database,
    name: 'H2 Storage',
    tagline: 'Safe, long-term hydrogen storage',
    description: 'Store hydrogen safely until it\'s needed or sold. Unlike batteries, hydrogen can be stored for weeks or months with no loss of energy.',
    specs: [
      'Long-term storage capability',
      'No energy degradation over time',
      'Safe, non-toxic design',
      'Scalable capacity options'
    ]
  },
  {
    id: 'fuel-cell',
    icon: BatteryCharging,
    name: 'Fuel Cell',
    tagline: 'Convert H2 to electricity as needed',
    description: 'Fuel cells take hydrogen and convert it to electricity on demand. Electricity can easily be conditioned to different voltages and phases.',
    specs: [
      'On-demand power generation',
      'Multiple voltage outputs',
      'Clean operation - only water exhaust',
      'Grid-compatible power conditioning'
    ]
  },
  {
    id: 'fueling',
    icon: Fuel,
    name: 'Fueling Module',
    tagline: 'Dispense hydrogen for your fleet',
    description: 'Sell hydrogen for a profit and/or fill your hydrogen powered vehicles - trucks, tractors, forklifts, carts, and cars.',
    specs: [
      'Fast vehicle refueling',
      'Multiple dispenser options',
      'Fleet management integration',
      'Revenue generation capability'
    ]
  },
  {
    id: 'powerpod',
    icon: Box,
    name: 'Modular PowerPod',
    tagline: 'Complete integrated system',
    description: 'Integrated turnkey system that generates and stores green energy, with H2 or electricity as outputs. 200kW-1,000kW modules, stackable to 10+ MW.',
    specs: [
      '200kW - 1,000kW per module',
      'Stackable to 10+ MW',
      'Deploy in days, not months',
      'Complete turnkey solution'
    ]
  }
]

export default function Products() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-neutral-100 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-h1 font-bold text-neutral-900 mb-6">
              Product Catalog
            </h1>
            <p className="text-xl text-neutral-500">
              An integrated family of modules for green hydrogen production, storage, dispensing, and energy. One-stop shopping for your complete hydrogen infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div 
                key={product.id}
                id={product.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-2 text-primary-500 mb-4">
                    <product.icon className="w-6 h-6" />
                    <span className="text-label uppercase tracking-wider">Product</span>
                  </div>
                  <h2 className="text-h2 font-semibold text-neutral-900 mb-4">
                    {product.name}
                  </h2>
                  <p className="text-xl text-primary-500 mb-4">{product.tagline}</p>
                  <p className="text-lg text-neutral-500 mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary">
                    REQUEST QUOTE
                  </Link>
                </div>
                <div className={`feature-card flex items-center justify-center min-h-[300px] ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <product.icon className="w-24 h-24 text-primary-500 opacity-30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-h1 font-bold text-white mb-6">
            Configure Your System
          </h2>
          <p className="text-xl text-neutral-400 mb-8">
            Our team will help you select the right combination of products for your needs.
          </p>
          <Link to="/contact" className="btn-primary">
            START CONFIGURATION
          </Link>
        </div>
      </section>
    </div>
  )
}
