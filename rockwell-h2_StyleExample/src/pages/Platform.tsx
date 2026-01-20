import { Link } from 'react-router-dom'
import { Box, Layers, Settings, Shield, Gauge, Wifi } from 'lucide-react'

export default function Platform() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-neutral-100 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-h1 font-bold text-neutral-900 mb-6">
              Modular PowerPod Platform
            </h1>
            <p className="text-xl text-neutral-500">
              Integrated turnkey systems that generate and store green energy, with H2 or electricity as outputs. Deploy in days, not months or years.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 font-semibold text-neutral-900 mb-6">
                Plug-and-Play Architecture
              </h2>
              <p className="text-lg text-neutral-500 mb-6">
                Our modular design allows you to scale from 200kW to 10+ MW by stacking standardized modules. Each unit handles power input, H2 generation (electrolyzers, pyrolysis, SMR), storage, and energy dispatch.
              </p>
              <p className="text-lg text-neutral-500 mb-8">
                The lineup connects easily to renewable energy sources and can be tailored to meet any demand through our modular design.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn-primary">
                  VIEW PRODUCTS
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="feature-card">
                <Box className="w-8 h-8 text-primary-500 mb-4" />
                <h3 className="font-medium text-neutral-900 mb-2">Modular Units</h3>
                <p className="text-sm text-neutral-500">200kW - 1,000kW modules</p>
              </div>
              <div className="feature-card">
                <Layers className="w-8 h-8 text-primary-500 mb-4" />
                <h3 className="font-medium text-neutral-900 mb-2">Stackable</h3>
                <p className="text-sm text-neutral-500">Scale to 10+ MW</p>
              </div>
              <div className="feature-card">
                <Settings className="w-8 h-8 text-primary-500 mb-4" />
                <h3 className="font-medium text-neutral-900 mb-2">Configurable</h3>
                <p className="text-sm text-neutral-500">Flexible configurations</p>
              </div>
              <div className="feature-card">
                <Wifi className="w-8 h-8 text-primary-500 mb-4" />
                <h3 className="font-medium text-neutral-900 mb-2">Connected</h3>
                <p className="text-sm text-neutral-500">Integrated monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-24 bg-neutral-100 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-h2 font-semibold text-neutral-900 mb-12 text-center">
            Technical Specifications
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-neutral-200">
                  <th className="border border-neutral-300 px-6 py-4 text-left text-sm font-bold text-neutral-900">Specification</th>
                  <th className="border border-neutral-300 px-6 py-4 text-left text-sm font-bold text-neutral-900">Value</th>
                  <th className="border border-neutral-300 px-6 py-4 text-left text-sm font-bold text-neutral-900">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-neutral-200 px-6 py-4 text-sm text-neutral-900">Power Input Range</td>
                  <td className="border border-neutral-200 px-6 py-4 text-sm font-mono text-neutral-900">200kW - 10+ MW</td>
                  <td className="border border-neutral-200 px-6 py-4 text-sm text-neutral-500">Scalable via module stacking</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 px-6 py-4 text-sm text-neutral-900">H2 Output Range</td>
                  <td className="border border-neutral-200 px-6 py-4 text-sm font-mono text-neutral-900">90 - 225 kg/day</td>
                  <td className="border border-neutral-200 px-6 py-4 text-sm text-neutral-500">Per electrolyzer module</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-neutral-200 px-6 py-4 text-sm text-neutral-900">Module Size</td>
                  <td className="border border-neutral-200 px-6 py-4 text-sm font-mono text-neutral-900">200kW - 1,000kW</td>
                  <td className="border border-neutral-200 px-6 py-4 text-sm text-neutral-500">Standard container format</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 px-6 py-4 text-sm text-neutral-900">Deployment Time</td>
                  <td className="border border-neutral-200 px-6 py-4 text-sm font-mono text-neutral-900">Days</td>
                  <td className="border border-neutral-200 px-6 py-4 text-sm text-neutral-500">Not months or years</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-neutral-200 px-6 py-4 text-sm text-neutral-900">Energy Sources</td>
                  <td className="border border-neutral-200 px-6 py-4 text-sm font-mono text-neutral-900">Solar, Wind, Hydro</td>
                  <td className="border border-neutral-200 px-6 py-4 text-sm text-neutral-500">Green power inputs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-semibold text-neutral-900 mb-4">
              Safety & Monitoring
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Unlike diesel and batteries, H2 storage is safer and non-toxic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card text-center">
              <Shield className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-h3 font-medium text-neutral-900 mb-2">Non-Toxic</h3>
              <p className="text-neutral-500">
                Only pure water as exhaust. No harmful emissions or toxic materials.
              </p>
            </div>
            <div className="feature-card text-center">
              <Gauge className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-h3 font-medium text-neutral-900 mb-2">Continuous Monitoring</h3>
              <p className="text-neutral-500">
                Integrated monitoring and control system for real-time oversight.
              </p>
            </div>
            <div className="feature-card text-center">
              <Settings className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-h3 font-medium text-neutral-900 mb-2">Fire Safety</h3>
              <p className="text-neutral-500">
                Advanced fire safety protocols built into every module.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-h1 font-bold text-white mb-6">
            See Our Platform in Action
          </h2>
          <Link to="/contact" className="btn-primary">
            SCHEDULE A DEMO
          </Link>
        </div>
      </section>
    </div>
  )
}
