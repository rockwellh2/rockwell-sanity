import { Link } from 'react-router-dom';
import { Download, Calendar, Mail, Phone, MapPin } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 z-20 bg-white">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="label-mono text-teal-500 mb-4 block">GET STARTED</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-500 mb-6">
                Ready to deploy green hydrogen?
              </h2>
              <p className="text-grey-500 text-lg leading-relaxed mb-8">
                Tell us about your site and energy goals. We'll recommend a configuration and provide a timeline for your hydrogen future.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/contact" className="btn-primary">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Link>
                <button className="btn-secondary">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </button>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:sales@rockwellh2.com"
                  className="flex items-center gap-3 text-navy-500 hover:text-teal-500 transition-colors"
                >
                  <Mail className="w-5 h-5 text-teal-500" />
                  <span className="text-sm">sales@rockwellh2.com</span>
                </a>
                <a
                  href="tel:+15550142200"
                  className="flex items-center gap-3 text-navy-500 hover:text-teal-500 transition-colors"
                >
                  <Phone className="w-5 h-5 text-teal-500" />
                  <span className="text-sm">+1 (555) 014-2200</span>
                </a>
                <div className="flex items-center gap-3 text-navy-500">
                  <MapPin className="w-5 h-5 text-teal-500" />
                  <span className="text-sm">Austin, TX • Rotterdam • Singapore</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card bg-navy-500/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-2xl bg-teal-500 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-heading text-3xl font-bold">R</span>
                  </div>
                  <p className="text-navy-500 font-heading text-xl font-semibold mb-2">Rockwell H2 Systems</p>
                  <p className="text-grey-500 text-sm">Turnkey Hydrogen Solutions</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-teal-500 rounded-2xl p-5 shadow-lg">
                <p className="text-white/80 text-xs font-mono uppercase tracking-wider mb-1">
                  Average ROI
                </p>
                <p className="text-white font-heading text-3xl font-bold">
                  3-5 Years
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
