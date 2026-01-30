import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle2,
  Building2,
  User,
  MessageSquare
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Thank you for your inquiry! Our team will contact you within 24 hours.');
    }, 1500);
  };

  const offices = [
    {
      city: 'Austin, TX',
      address: '500 W 2nd Street, Suite 1900',
      phone: '+1 (555) 014-2200',
      email: 'sales@rockwellh2.com',
      hours: 'Mon-Fri: 8AM-6PM CST'
    },
    {
      city: 'Rotterdam',
      address: 'Wilhelminakade 123, 3072 AP',
      phone: '+31 10 200 0000',
      email: 'eu@rockwellh2.com',
      hours: 'Mon-Fri: 9AM-5PM CET'
    },
    {
      city: 'Singapore',
      address: '1 Raffles Place, #44-01',
      phone: '+65 6123 4567',
      email: 'apac@rockwellh2.com',
      hours: 'Mon-Fri: 9AM-6PM SGT'
    }
  ];

  return (
    <main className="relative">
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cloud-100">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="label-mono text-teal-500 mb-4 block">CONTACT US</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-500 mb-6">
              Let's Build Your Hydrogen System
            </h1>
            <p className="text-grey-500 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
              Tell us about your site and energy goals. We'll recommend a configuration and provide a timeline.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full py-12 lg:py-20 bg-cloud-100">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl p-6 lg:p-8 border border-navy-500/8 shadow-card">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="font-heading text-2xl font-semibold text-navy-500 mb-3">
                        Thank You!
                      </h3>
                      <p className="text-grey-500 max-w-md mx-auto">
                        Your inquiry has been received. Our team will review your requirements and contact you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-heading text-xl font-semibold text-navy-500 mb-6">
                        Request a Consultation
                      </h2>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-navy-500">
                              <User className="w-4 h-4 inline mr-2" />
                              Full Name *
                            </Label>
                            <Input
                              id="name"
                              placeholder="John Smith"
                              required
                              className="rounded-xl border-navy-500/20 focus:border-teal-500 focus:ring-teal-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-navy-500">
                              <Mail className="w-4 h-4 inline mr-2" />
                              Email Address *
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="john@company.com"
                              required
                              className="rounded-xl border-navy-500/20 focus:border-teal-500 focus:ring-teal-500"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="company" className="text-navy-500">
                              <Building2 className="w-4 h-4 inline mr-2" />
                              Company Name *
                            </Label>
                            <Input
                              id="company"
                              placeholder="Your Company"
                              required
                              className="rounded-xl border-navy-500/20 focus:border-teal-500 focus:ring-teal-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-navy-500">
                              <Phone className="w-4 h-4 inline mr-2" />
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+1 (555) 000-0000"
                              className="rounded-xl border-navy-500/20 focus:border-teal-500 focus:ring-teal-500"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="country" className="text-navy-500">
                              <MapPin className="w-4 h-4 inline mr-2" />
                              Country *
                            </Label>
                            <Select required>
                              <SelectTrigger className="rounded-xl border-navy-500/20">
                                <SelectValue placeholder="Select country" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="us">United States</SelectItem>
                                <SelectItem value="ca">Canada</SelectItem>
                                <SelectItem value="uk">United Kingdom</SelectItem>
                                <SelectItem value="de">Germany</SelectItem>
                                <SelectItem value="nl">Netherlands</SelectItem>
                                <SelectItem value="sg">Singapore</SelectItem>
                                <SelectItem value="au">Australia</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="interest" className="text-navy-500">
                              <MessageSquare className="w-4 h-4 inline mr-2" />
                              Area of Interest *
                            </Label>
                            <Select required>
                              <SelectTrigger className="rounded-xl border-navy-500/20">
                                <SelectValue placeholder="Select interest" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="onsite">Onsite Hydrogen Production</SelectItem>
                                <SelectItem value="storage">Energy Storage & Backup</SelectItem>
                                <SelectItem value="fueling">Vehicle Fueling</SelectItem>
                                <SelectItem value="microgrid">Microgrids & Remote Power</SelectItem>
                                <SelectItem value="industrial">Industrial Decarbonization</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-navy-500">
                            <MessageSquare className="w-4 h-4 inline mr-2" />
                            Message
                          </Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us about your project, energy needs, and timeline..."
                            rows={4}
                            className="rounded-xl border-navy-500/20 focus:border-teal-500 focus:ring-teal-500 resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Request a Quote
                            </>
                          )}
                        </button>

                        <p className="text-grey-500 text-xs text-center">
                          By submitting this form, you agree to our Privacy Policy and Terms of Service.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="bg-navy-500 rounded-3xl p-6 text-white">
                  <h3 className="font-heading text-lg font-semibold mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <a href="mailto:sales@rockwellh2.com" className="flex items-center gap-3 hover:text-teal-400 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white/60 text-xs">Email</p>
                        <p className="text-sm">sales@rockwellh2.com</p>
                      </div>
                    </a>
                    <a href="tel:+15550142200" className="flex items-center gap-3 hover:text-teal-400 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white/60 text-xs">Phone</p>
                        <p className="text-sm">+1 (555) 014-2200</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white/60 text-xs">Response Time</p>
                        <p className="text-sm">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-navy-500/8 shadow-card">
                  <h3 className="font-heading text-lg font-semibold text-navy-500 mb-4">Our Offices</h3>
                  <div className="space-y-4">
                    {offices.map((office, index) => (
                      <div key={index} className="p-4 bg-navy-500/5 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-teal-500" />
                          <span className="font-medium text-navy-500">{office.city}</span>
                        </div>
                        <p className="text-grey-500 text-xs mb-1">{office.address}</p>
                        <p className="text-grey-500 text-xs">{office.hours}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-teal-500 rounded-3xl p-6 text-white">
                  <h3 className="font-heading text-lg font-semibold mb-4">Why Rockwell H2?</h3>
                  <ul className="space-y-3">
                    {[
                      'Turnkey EPC delivery',
                      '99.5% uptime guarantee',
                      '24/7 remote monitoring',
                      'Flexible financing options',
                      'Comprehensive training'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
