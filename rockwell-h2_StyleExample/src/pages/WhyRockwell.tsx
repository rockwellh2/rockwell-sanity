import { Link } from 'react-router-dom'
import { Users, Award, Clock, Target, CheckCircle } from 'lucide-react'

export default function WhyRockwell() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-neutral-100 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-h1 font-bold text-neutral-900 mb-6">
              Why Rockwell H2
            </h1>
            <p className="text-xl text-neutral-500">
              With our green hydrogen system, we help to increase energy independence, decarbonize the world, and secure a future for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-semibold text-neutral-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-neutral-500">
              Experienced professionals dedicated to advancing hydrogen infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-24 h-24 bg-neutral-200 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-neutral-400" />
              </div>
              <h3 className="text-h3 font-medium text-neutral-900 mb-2">Brad Rockwell</h3>
              <p className="text-primary-500 font-medium mb-4">Co-Founder</p>
              <p className="text-neutral-500 text-sm mb-4">
                Leading the development and deployment of industrial-grade hydrogen solutions.
              </p>
              <a 
                href="tel:7143053300" 
                className="text-info hover:underline text-sm"
              >
                (714) 305-3300
              </a>
            </div>

            <div className="feature-card text-center">
              <div className="w-24 h-24 bg-neutral-200 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-neutral-400" />
              </div>
              <h3 className="text-h3 font-medium text-neutral-900 mb-2">Nick Rockwell</h3>
              <p className="text-primary-500 font-medium mb-4">Co-Founder</p>
              <p className="text-neutral-500 text-sm mb-4">
                Driving innovation in modular hydrogen systems and renewable energy integration.
              </p>
              <a 
                href="tel:5109600261" 
                className="text-info hover:underline text-sm"
              >
                (510) 960-0261
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-neutral-100 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-semibold text-neutral-900 mb-4">
              Our Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card">
              <Target className="w-8 h-8 text-primary-500 mb-4" />
              <h3 className="font-medium text-neutral-900 mb-2">Turnkey Solutions</h3>
              <p className="text-sm text-neutral-500">
                One-stop shopping for solar, energy storage, hydrogen equipment, and installation.
              </p>
            </div>
            <div className="feature-card">
              <Clock className="w-8 h-8 text-primary-500 mb-4" />
              <h3 className="font-medium text-neutral-900 mb-2">Rapid Deployment</h3>
              <p className="text-sm text-neutral-500">
                Deploy in days, not months or years with our modular approach.
              </p>
            </div>
            <div className="feature-card">
              <Award className="w-8 h-8 text-primary-500 mb-4" />
              <h3 className="font-medium text-neutral-900 mb-2">Proven Technology</h3>
              <p className="text-sm text-neutral-500">
                Industry-leading efficiency and reliability in hydrogen production.
              </p>
            </div>
            <div className="feature-card">
              <Users className="w-8 h-8 text-primary-500 mb-4" />
              <h3 className="font-medium text-neutral-900 mb-2">Expert Support</h3>
              <p className="text-sm text-neutral-500">
                Dedicated team supporting you from evaluation to operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 font-semibold text-neutral-900 mb-6">
                Benefits with Hydrogen
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Lower, stable energy costs and recovery of lost solar revenue from hydrogen production</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Production tax credits: $3/kg of green hydrogen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Flexibility in configuration with modular plug and play units</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Reducing your carbon footprint and monetizing carbon credits</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Integrated monitoring and control system for production tax credits, environmental reporting and financial metrics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Turning your energy needs into a financial asset</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="p-6 border border-neutral-200 bg-white">
                <div className="text-4xl font-bold text-primary-500 mb-2">$3</div>
                <div className="text-neutral-500">Per kg production tax credit</div>
              </div>
              <div className="p-6 border border-neutral-200 bg-white">
                <div className="text-4xl font-bold text-primary-500 mb-2">30%</div>
                <div className="text-neutral-500">Investment tax credit</div>
              </div>
              <div className="p-6 border border-neutral-200 bg-white">
                <div className="text-4xl font-bold text-primary-500 mb-2">Days</div>
                <div className="text-neutral-500">Deployment time, not months</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 bg-neutral-100 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="feature-card">
              <h3 className="text-h3 font-medium text-neutral-900 mb-4">The Problems</h3>
              <ul className="space-y-3 text-neutral-500">
                <li>Energy from fossil fuels is costly</li>
                <li>We are dependent on unreliable energy sources</li>
                <li>Diesel poses significant toxic and fire hazards</li>
                <li>Current energy systems produce greenhouse gasses</li>
                <li>Utility companies are paying less for solar power</li>
              </ul>
            </div>
            <div className="feature-card border-primary-500">
              <h3 className="text-h3 font-medium text-primary-500 mb-4">The Solution</h3>
              <ul className="space-y-3 text-neutral-500">
                <li>Turnkey modular solution to the reliable energy problem</li>
                <li>Store and use onsite renewable energy as H2</li>
                <li>One-stop shopping: solar equipment, energy storage, hydrogen equipment and installation</li>
              </ul>
            </div>
            <div className="feature-card">
              <h3 className="text-h3 font-medium text-neutral-900 mb-4">The Benefits</h3>
              <ul className="space-y-3 text-neutral-500">
                <li>Cleaner alternative to fossil fuels with significant financial gains</li>
                <li>Turning your energy needs into a financial asset</li>
                <li>Energy independence - Non-toxic and safer than diesel and batteries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-h1 font-bold text-white mb-6">
            Join the Hydrogen Revolution
          </h2>
          <p className="text-xl text-neutral-400 mb-8">
            Let's talk H2 and discuss how we can help transform your energy infrastructure.
          </p>
          <Link to="/contact" className="btn-primary">
            CONTACT US TODAY
          </Link>
        </div>
      </section>
    </div>
  )
}
