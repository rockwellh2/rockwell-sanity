"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import type { Metadata } from "next";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, this would send to a backend
        console.log("Form submitted:", formData);
        setSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="py-24 bg-[#F3F4F6] border-b border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-h1 font-bold text-[#111827] mb-6">
                            Request Site Evaluation
                        </h1>
                        <p className="text-xl text-[#6B7280]">
                            Let&apos;s talk H2. Fill out the form below and we&apos;ll contact you to discuss how Rockwell H2 can transform your energy infrastructure.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-h2 font-semibold text-[#111827] mb-6">
                                    Get in Touch
                                </h2>
                                <p className="text-[#6B7280] mb-8">
                                    Our team is ready to help you evaluate your site and design the optimal hydrogen solution.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#00CC66]/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-[#00CC66]" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#111827] mb-1">Brad Rockwell</h3>
                                        <a href="tel:7143053300" className="text-[#0057B7] hover:underline">(714) 305-3300</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#00CC66]/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-[#00CC66]" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#111827] mb-1">Nick Rockwell</h3>
                                        <a href="tel:5109600261" className="text-[#0057B7] hover:underline">(510) 960-0261</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#00CC66]/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-[#00CC66]" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#111827] mb-1">Email</h3>
                                        <a href="mailto:info@rockwellh2.com" className="text-[#0057B7] hover:underline">info@rockwellh2.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#00CC66]/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-[#00CC66]" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#111827] mb-1">Website</h3>
                                        <a href="https://www.rockwellh2.com" target="_blank" rel="noopener noreferrer" className="text-[#0057B7] hover:underline">www.rockwellh2.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            {submitted ? (
                                <div className="feature-card text-center py-16">
                                    <div className="w-16 h-16 bg-[#00CC66]/10 flex items-center justify-center mx-auto mb-6">
                                        <Send className="w-8 h-8 text-[#00CC66]" />
                                    </div>
                                    <h3 className="text-h2 font-semibold text-[#111827] mb-4">
                                        Thank You!
                                    </h3>
                                    <p className="text-[#6B7280] max-w-md mx-auto">
                                        We&apos;ve received your request and will be in touch shortly to discuss your hydrogen infrastructure needs.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="feature-card">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-[#111827] mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full h-12 px-4 border border-[#E5E7EB] text-[#111827] focus:border-[#00CC66] focus:outline-none transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-[#111827] mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full h-12 px-4 border border-[#E5E7EB] text-[#111827] focus:border-[#00CC66] focus:outline-none transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-[#111827] mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full h-12 px-4 border border-[#E5E7EB] text-[#111827] focus:border-[#00CC66] focus:outline-none transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-[#111827] mb-2">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full h-12 px-4 border border-[#E5E7EB] text-[#111827] focus:border-[#00CC66] focus:outline-none transition-colors"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-[#111827] mb-2">
                                                What best describes your situation?
                                            </label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full h-12 px-4 border border-[#E5E7EB] text-[#111827] focus:border-[#00CC66] focus:outline-none transition-colors bg-white"
                                            >
                                                <option value="">Select an option</option>
                                                <option value="waste-biomass">I have waste/biomass</option>
                                                <option value="renewable-power">I have renewable power</option>
                                                <option value="need-fuel">I need reliable fuel</option>
                                                <option value="general">General inquiry</option>
                                            </select>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-[#111827] mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-[#E5E7EB] text-[#111827] focus:border-[#00CC66] focus:outline-none transition-colors resize-none"
                                                placeholder="Tell us about your energy needs and goals..."
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <button type="submit" className="btn-primary w-full md:w-auto">
                                                SUBMIT REQUEST
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Direct Contact CTA */}
            <section className="py-24 bg-[#00CC66]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-h1 font-bold text-[#111827] mb-6">
                        Prefer to Talk Directly?
                    </h2>
                    <p className="text-xl text-[#111827]/80 mb-8">
                        Call Brad or Nick directly to discuss your hydrogen infrastructure needs.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="tel:7143053300"
                            className="h-12 px-8 bg-[#111827] text-white font-bold text-label uppercase tracking-wider inline-flex items-center justify-center hover:bg-[#1f2937] transition-colors"
                        >
                            CALL BRAD: (714) 305-3300
                        </a>
                        <a
                            href="tel:5109600261"
                            className="h-12 px-8 bg-[#111827] text-white font-bold text-label uppercase tracking-wider inline-flex items-center justify-center hover:bg-[#1f2937] transition-colors"
                        >
                            CALL NICK: (510) 960-0261
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
