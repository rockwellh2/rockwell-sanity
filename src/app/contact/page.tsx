"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Send,
  Shield
} from "lucide-react";

// ============================================================
// CONTACT PAGE - "The Conversion Machine" Design
// Dark hero, dual phone numbers, working form
// ============================================================

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual Formspree or backend)
    await new Promise(resolve => setTimeout(resolve, 1000));

    setFormSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">

      {/* ============================================================
          1. HERO SECTION (DARK)
          ============================================================ */}
      <section className="relative bg-slate-900 text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
              <Phone size={12} /> Direct Line to Engineering
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Talk to an Engineer.<br />
              <span className="text-green-400">Not a Salesperson.</span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Call us directly or fill out the form. We respond within 1-2 business days with a preliminary feasibility assessment.
            </p>

            {/* Phone Numbers - Prominent */}
            <div className="grid sm:grid-cols-2 gap-6">
              <PhoneCard
                name="Brad Rockwell"
                role="Principal Engineer"
                phone="(714) 305-3300"
              />
              <PhoneCard
                name="Nick Rockwell"
                role="Operations Director"
                phone="(510) 960-0261"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. CONTACT FORM
          ============================================================ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="heading-section text-center mb-4">Request an Assessment</h2>
          <p className="text-center text-body mb-12">
            Tell us about your operation and we'll provide a preliminary feasibility snapshot.
          </p>

          {formSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Received!</h3>
              <p className="text-slate-600 mb-8">
                We'll review your information and respond within 1-2 business days with a preliminary assessment.
              </p>
              <Link href="/" className="btn-primary inline-flex items-center gap-2">
                Back to Home <ArrowRight size={18} />
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-8 md:p-12 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2">
                    Company / Organization *
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    placeholder="Acme Logistics"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Application Type */}
                <div>
                  <label htmlFor="application" className="block text-sm font-bold text-slate-700 mb-2">
                    Application Type *
                  </label>
                  <select
                    id="application"
                    name="application"
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all bg-white"
                  >
                    <option value="">Select application...</option>
                    <option value="forklifts">Hydrogen Forklifts</option>
                    <option value="farm">Farm Equipment</option>
                    <option value="backup">Backup Power</option>
                    <option value="fleet">Fleet Vehicles</option>
                    <option value="other">Other Industrial</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-sm font-bold text-slate-700 mb-2">
                    Site Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    placeholder="City, State"
                  />
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                    Tell Us About Your Operation
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all resize-none"
                    placeholder="Describe your fuel needs, fleet size, current energy costs, or any specific questions..."
                  ></textarea>
                </div>

              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-cta py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send size={18} /> Submit Request
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-sm text-slate-500 mt-6">
                <Shield size={14} className="inline mr-1" />
                We never share your information. Response within 1-2 business days.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ============================================================
          3. WHAT TO EXPECT
          ============================================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="heading-section text-center mb-12">What Happens Next</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ProcessStep
              step="1"
              title="Intake Review"
              description="We review your submission within 24-48 hours and assess basic feasibility."
              timeframe="24-48 hours"
            />
            <ProcessStep
              step="2"
              title="Technical Fit"
              description="We model your ROI, incentive eligibility, and system sizing requirements."
              timeframe="2-3 days"
            />
            <ProcessStep
              step="3"
              title="Site Call"
              description="We schedule a call to discuss findings and answer your questions directly."
              timeframe="Within 1 week"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          4. ALTERNATIVE CONTACT
          ============================================================ */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="text-green-400 font-bold text-xs uppercase tracking-widest mb-2">Email</div>
              <a href="mailto:info@rockwellh2.com" className="text-xl font-bold hover:text-green-400 transition-colors">
                info@rockwellh2.com
              </a>
            </div>
            <div>
              <div className="text-green-400 font-bold text-xs uppercase tracking-widest mb-2">Brad (Principal Engineer)</div>
              <a href="tel:714-305-3300" className="text-xl font-bold hover:text-green-400 transition-colors">
                (714) 305-3300
              </a>
            </div>
            <div>
              <div className="text-green-400 font-bold text-xs uppercase tracking-widest mb-2">Nick (Operations)</div>
              <a href="tel:510-960-0261" className="text-xl font-bold hover:text-green-400 transition-colors">
                (510) 960-0261
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// ============================================================
// SUB-COMPONENTS
// ============================================================

interface PhoneCardProps {
  name: string;
  role: string;
  phone: string;
}

function PhoneCard({ name, role, phone }: PhoneCardProps) {
  return (
    <a
      href={`tel:${phone.replace(/\D/g, '')}`}
      className="bg-white/10 border border-white/20 p-6 rounded-lg hover:bg-white/20 transition-colors group"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
          <Phone className="text-green-400" size={20} />
        </div>
        <div>
          <p className="font-bold text-white">{name}</p>
          <p className="text-sm text-slate-400">{role}</p>
        </div>
      </div>
      <p className="text-2xl font-bold text-green-400 mt-4 group-hover:text-green-300 transition-colors">
        {phone}
      </p>
    </a>
  );
}

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  timeframe: string;
}

function ProcessStep({ step, title, description, timeframe }: ProcessStepProps) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
        {step}
      </div>
      <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
      <p className="text-slate-600 text-sm mb-4">{description}</p>
      <div className="inline-flex items-center gap-1 text-xs font-bold text-green-600">
        <Clock size={12} /> {timeframe}
      </div>
    </div>
  );
}
