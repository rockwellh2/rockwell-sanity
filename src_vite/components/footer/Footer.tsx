import { Link } from 'react-router-dom';
import { Droplets, Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    solutions: [
      { label: 'Onsite Green Hydrogen', href: '/solutions' },
      { label: 'Energy Storage & Backup', href: '/solutions' },
      { label: 'Hydrogen Vehicle Fueling', href: '/solutions' },
      { label: 'Microgrids & Remote Power', href: '/solutions' },
      { label: 'Industrial Decarbonization', href: '/solutions' },
    ],
    products: [
      { label: 'PowerPod Platform', href: '/products' },
      { label: 'PowerPod-200', href: '/products' },
      { label: 'PowerPod-500', href: '/products' },
      { label: 'PowerPod-1000', href: '/products' },
      { label: 'Stackable MW Systems', href: '/products' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Resources', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'News', href: '#' },
    ],
    support: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Technical Support', href: '/contact' },
      { label: 'Documentation', href: '#' },
      { label: 'FAQs', href: '#' },
    ],
  };

  return (
    <>
      {/* Gradient Shader Transition Section */}
      <div className="relative w-full h-32 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg,
                rgba(245,247,250,1) 0%,
                rgba(235,240,245,0.9) 20%,
                rgba(220,230,240,0.7) 40%,
                rgba(200,215,230,0.5) 60%,
                rgba(180,195,215,0.3) 80%,
                rgba(11,30,44,0.1) 100%
              )
            `
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-emerald-400/10 rounded-full blur-[80px]" />
      </div>

      <footer className="bg-navy-500 text-white relative">
        <div 
          className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(11,30,44,0.3) 0%, transparent 100%)'
          }}
        />

        <div className="section-padding py-16 lg:py-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-white text-xl leading-tight">
                    Rockwell H2
                  </span>
                  <span className="text-xs text-white/60 font-mono tracking-wider uppercase leading-tight">
                    Systems
                  </span>
                </div>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
                Turnkey modular systems for green hydrogen production, storage, dispensing, and power. Engineered for safety. Built to scale.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-white/70 hover:text-teal-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-white/70 hover:text-teal-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-white/70 hover:text-teal-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <a href="mailto:sales@rockwellh2.com" className="text-sm text-white/70 hover:text-teal-400 transition-colors">
                    sales@rockwellh2.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <a href="tel:+15550142200" className="text-sm text-white/70 hover:text-teal-400 transition-colors">
                    +1 (555) 014-2200
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/70">
                    Austin, TX • Rotterdam • Singapore
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="section-padding py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-white/50">
                © {new Date().getFullYear()} Rockwell H2 Systems. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link to="#" className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="#" className="text-sm text-white/50 hover:text-white transition-colors">Terms of Service</Link>
                <Link to="#" className="text-sm text-white/50 hover:text-white transition-colors">Cookie Settings</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
