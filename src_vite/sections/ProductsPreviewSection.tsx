import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Database, Fuel, Layers } from 'lucide-react';

const ProductsPreviewSection = () => {
  const products = [
    {
      name: 'PowerPod-200',
      output: '200 kg H₂/day',
      power: '1 MW',
      icon: Zap,
      description: 'Entry-level modular system for small-scale operations and pilot projects.',
      scaleLabel: 'Typical Commercial Deployment'
    },
    {
      name: 'PowerPod-500',
      output: '500 kg H₂/day',
      power: '2.5 MW',
      icon: Database,
      description: 'Mid-range solution ideal for commercial fleets and industrial applications.',
      featured: true,
      scaleLabel: 'Common System Size'
    },
    {
      name: 'PowerPod-1000',
      output: '1,000 kg H₂/day',
      power: '5 MW',
      icon: Fuel,
      description: 'High-capacity system for large industrial sites and fueling stations.',
      scaleLabel: 'Representative Configuration'
    },
    {
      name: 'Stackable MW',
      output: '10+ MW',
      power: 'Scalable',
      icon: Layers,
      description: 'Multi-unit configurations for utility-scale hydrogen production.',
      scaleLabel: 'Utility Scale'
    }
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 z-20 bg-cloud-100">
      <div className="section-padding">
        <div className="text-center mb-16">
          <span className="label-mono text-teal-500 mb-4 block">PRODUCTS</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-500 mb-4">
            PowerPod Platform
          </h2>
          <p className="text-grey-500 text-lg max-w-2xl mx-auto">
            Modular hydrogen systems designed to scale with your energy needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                product.featured
                  ? 'border-teal-500 shadow-card-hover'
                  : 'border-navy-500/8 shadow-card hover:shadow-card-hover'
              }`}
            >
              {product.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-teal-500 rounded-full">
                  <span className="text-white text-xs font-medium">Most Popular</span>
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                product.featured ? 'bg-teal-50' : 'bg-navy-500/5'
              }`}>
                <product.icon className={`w-6 h-6 ${
                  product.featured ? 'text-teal-500' : 'text-navy-500'
                }`} />
              </div>

              <h3 className="font-heading text-lg font-semibold text-navy-500 mb-1">
                {product.name}
              </h3>
              <p className="text-teal-600 text-xs font-medium mb-3">{product.scaleLabel}</p>

              <div className="flex gap-4 mb-3">
                <div>
                  <p className="text-xs text-grey-500">Output</p>
                  <p className="text-sm font-medium text-navy-500">{product.output}</p>
                </div>
                <div>
                  <p className="text-xs text-grey-500">Power</p>
                  <p className="text-sm font-medium text-navy-500">{product.power}</p>
                </div>
              </div>

              <p className="text-grey-500 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy-500 text-white font-medium rounded-full hover:bg-navy-600 transition-colors"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreviewSection;
