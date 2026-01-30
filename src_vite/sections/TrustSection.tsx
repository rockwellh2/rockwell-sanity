import { Quote, Building2, Factory, Truck, Zap } from 'lucide-react';

const TrustSection = () => {
  const stats = [
    { value: '50+', label: 'Installations', icon: Building2 },
    { value: '30+', label: 'Countries', icon: Zap },
    { value: '1M+', label: 'kg H₂ Produced', icon: Factory },
    { value: '99.5%', label: 'Uptime', icon: Truck },
  ];

  const testimonials = [
    {
      quote: "Rockwell H2's PowerPod system transformed our fleet operations. We've cut fuel costs by 40% and eliminated diesel emissions entirely.",
      author: 'Michael Chen',
      role: 'Fleet Director',
      company: 'GreenLine Logistics',
      industry: 'Transportation'
    },
    {
      quote: "The turnkey solution meant we were producing hydrogen within weeks, not years. Their engineering team made integration seamless.",
      author: 'Sarah Williams',
      role: 'VP of Operations',
      company: 'Pacific Steel Co.',
      industry: 'Manufacturing'
    },
    {
      quote: "Energy independence is now a reality for our facility. The tax credits made the ROI compelling from day one.",
      author: 'Robert Martinez',
      role: 'Plant Manager',
      company: 'Desert Industries',
      industry: 'Industrial'
    }
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 z-20 bg-cloud-100">
      <div className="section-padding">
        <div className="text-center mb-12">
          <span className="label-mono text-teal-500 mb-4 block">TRUSTED WORLDWIDE</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-500 mb-4">
            Proven Results
          </h2>
          <p className="text-grey-500 text-lg max-w-2xl mx-auto">
            Join industry leaders who have made the switch to green hydrogen.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center border border-navy-500/8 shadow-card"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-5 h-5 text-teal-500" />
              </div>
              <p className="font-heading text-2xl lg:text-3xl font-bold text-navy-500 mb-1">
                {stat.value}
              </p>
              <p className="text-grey-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 lg:p-8 border border-navy-500/8 shadow-card"
            >
              <Quote className="w-8 h-8 text-teal-500/30 mb-4" />
              <p className="text-navy-500 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-500/10 flex items-center justify-center">
                  <span className="text-navy-500 font-semibold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-navy-500 text-sm">{testimonial.author}</p>
                  <p className="text-grey-500 text-xs">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-navy-500/8">
                <span className="inline-flex items-center px-3 py-1 bg-navy-500/5 rounded-full text-xs text-grey-500">
                  {testimonial.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
