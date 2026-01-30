"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Linkedin,
  Twitter,
  Facebook,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          phone: formData.phone || '',
          industry: 'General Inquiry',
          system: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Request Received!',
          description: `Reference: ${data.reference}. We'll respond within 1-2 business days.`,
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
      } else {
        toast({
          title: 'Submission Failed',
          description: data.error || 'Please check your information and try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Network Error',
        description: 'Unable to submit. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] leading-tight mb-4 text-balance">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              Ready to transform your energy strategy? Get in touch with our team to discuss your hydrogen energy needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Speak directly with our principals, Brad or Nick, to discuss your project requirements and learn how Rockwell H2 Systems can help you achieve energy independence.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2E7D32]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#2E7D32]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-1">Address</h3>
                    <p className="text-gray-600">
                      118, C-300, 25K, 2620<br />
                      ElectroIndustrial Park, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2E7D32]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#2E7D32]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-1">Phone</h3>
                    <a
                      href="tel:+1-800-555-2600"
                      className="text-gray-600 hover:text-[#2E7D32] transition-colors"
                    >
                      1-800-555-2600
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Speak with Brad or Nick directly
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2E7D32]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#2E7D32]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-1">Email</h3>
                    <a
                      href="mailto:info@rockwellh2.com"
                      className="text-gray-600 hover:text-[#2E7D32] transition-colors"
                    >
                      info@rockwellh2.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2E7D32]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#2E7D32]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM PST
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="font-semibold text-[#1E3A5F] mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center hover:bg-[#2E7D32] transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center hover:bg-[#2E7D32] transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center hover:bg-[#2E7D32] transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-700">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project and energy needs..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-[#2E7D32] hover:bg-[#246b27] text-white h-12 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="mr-2 w-5 h-5" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-xl h-[400px]"
          >
            <img
              src="/hero-contact.jpg"
              alt="Rockwell H2 Systems facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/60 to-transparent flex items-end">
              <div className="p-6 lg:p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Visit Our Facility
                </h3>
                <p className="text-white/80">
                  Schedule a tour to see our hydrogen systems in action.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
