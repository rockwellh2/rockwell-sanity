import { Link } from 'react-router-dom'
import { Zap, Shield, Clock, Leaf, ArrowRight, Battery, Fuel, Sun } from 'lucide-react'
import SystemDiagram from '../components/SystemDiagram'

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 ambient-shader" />
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-display font-bold text-neutral-900 mb-6">
              Industrial-Grade Hydrogen Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-neutral-500 mb-4">
              Modular. Reliable. Scalable.
            </p>
            <p className="text-lg text-neutral-500 mb-8 max-w-2xl">
              The solution to a hydrogen future is here. An integrated family of modules for green hydrogen production, storage, dispensing, and energy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                REQUEST SITE EVALUATION
              </Link>
              <Link 
                to="/platform" 
                className="h-12 px-8 border border-neutral-200 text-neutral-900 font-bold text-label uppercase tracking-wider inline-flex items-center justify-center hover:border-primary-500 transition-colors duration-150"
              >
                EXPLORE PLATFORM
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* System Snapshot */}
      <section className="py-24 bg-neutral-100 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-semibold text-neutral-900 mb-4">
              Complete Hydrogen System
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              From renewable energy input to hydrogen output, our integrated modules work seamlessly together.
            </p>
          </div>
          <SystemDiagram />
        </div>
      </section>

      {/* Self-Selection Doorways */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-semibold text-neutral-900 mb-4">
              Find Your Solution
            </h2>
            <p className="text-lg text-neutral-500">
              Select the path that matches your situation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/solutions" className="feature-card group cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-h3 font-medium text-neutral-900 mb-4">
                I have waste/biomass
              </h3>
              <p className="text-neutral-500 mb-6">
                Convert organic waste into valuable hydrogen fuel and reduce disposal costs.
              </p>
              <span className="inline-flex items-center text-primary-500 font-medium group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>

            <Link to="/solutions" className="feature-card group cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-h3 font-medium text-neutral-900 mb-4">
                I have renewable power
              </h3>
              <p className="text-neutral-500 mb-6">
                Store excess solar or wind energy as hydrogen instead of selling back at low rates.
              </p>
              <span className="inline-flex items-center text-primary-500 font-medium group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>

            <Link to="/solutions" className="feature-card group cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <Fuel className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-h3 font-medium text-neutral-900 mb-4">
                I need reliable fuel
              </h3>
              <p className="text-neutral-500 mb-6">
                Power your fleet with clean hydrogen fuel and eliminate diesel dependency.
              </p>
              <span className="inline-flex items-center text-primary-500 font-medium group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Rockwell Features */}
      <section className="py-24 bg-neutral-100 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-semibold text-neutral-900 mb-4">
              Why Rockwell H2
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Turnkey modular solutions delivering cleaner, more economical energy than fossil fuels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card">
              <Zap className="w-8 h-8 text-primary-500 mb-4" />
              <h3 className="text-h3 font-medium text-neutral-900 mb-2">Turnkey Solution</h3>
              <p className="text-neutral-500 text-sm">
                One-stop shopping: solar equipment, energy storage, hydrogen equipment and installation.
              </p>
            </div>

            <div className="feature-card">
              <Shield className="w-8 h-8 text-primary-500 mb-4" />
              <h3 className="text-h3 font-medium text-neutral-900 mb-2">Safety First</h3>
              <p className="text-neutral-500 text-sm">
                Non-toxic and safer than diesel and batteries. Only pure water as exhaust.
              </p>
            </div>

            <div className="feature-card">
              <Clock className="w-8 h-8 text-primary-500 mb-4" />
              <h3 className="text-h3 font-medium text-neutral-900 mb-2">Speed to Deploy</h3>
              <p className="text-neutral-500 text-sm">
                Deploy in days, not months or years. Modular plug-and-play design.
              </p>
            </div>

            <div className="feature-card">
              <Battery className="w-8 h-8 text-primary-500 mb-4" />
              <h3 className="text-h3 font-medium text-neutral-900 mb-2">Long-Term Storage</h3>
              <p className="text-neutral-500 text-sm">
                Hydrogen can be stored for weeks or months with no loss of energy, unlike batteries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Scale Metrics */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-semibold text-neutral-900 mb-4">
              Real-World Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-neutral-200">
              <div className="text-5xl font-bold text-primary-500 mb-2">225</div>
              <div className="text-sm uppercase tracking-wider text-neutral-500">kg H2/day production</div>
            </div>
            <div className="p-8 border border-neutral-200">
              <div className="text-5xl font-bold text-primary-500 mb-2">99.9%</div>
              <div className="text-sm uppercase tracking-wider text-neutral-500">System uptime</div>
            </div>
            <div className="p-8 border border-neutral-200">
              <div className="text-5xl font-bold text-primary-500 mb-2">Days</div>
              <div className="text-sm uppercase tracking-wider text-neutral-500">Not months to deploy</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-h1 font-bold text-white mb-6">
            Ready to evaluate your site?
          </h2>
          <p className="text-xl text-neutral-400 mb-8">
            Let's discuss how Rockwell H2 can transform your energy infrastructure.
          </p>
          <Link to="/contact" className="btn-primary">
            REQUEST EVALUATION
          </Link>
        </div>
      </section>
    </div>
  )
}
