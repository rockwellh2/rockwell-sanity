"use client";

import Link from 'next/link';
import { Zap, Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const quickLinks = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Use Cases', href: '/industries' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
];

export function Footer() {
    return (
        <footer className="bg-[#1E3A5F] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="relative w-10 h-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-lg"></div>
                                <Zap className="w-6 h-6 text-white relative z-10" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-white leading-tight">
                                    Rockwell H2
                                </span>
                                <span className="text-[10px] text-white/60 leading-tight">
                                    SYSTEMS
                                </span>
                            </div>
                        </Link>
                        <p className="text-white/70 text-sm mb-4">
                            Family-owned provider of modular, on-site green hydrogen production and energy systems for over 30 years.
                        </p>
                        <div className="flex items-center gap-2 text-white/70 text-sm">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span>118, C-300, 25K, 2620<br />ElectroIndustrial Park, CA</span>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-3">
                            <a
                                href="tel:+1-800-555-2600"
                                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                            >
                                <Phone className="w-4 h-4" />
                                <span>1-800-555-2600</span>
                            </a>
                            <a
                                href="mailto:info@rockwellh2.com"
                                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                            >
                                <Mail className="w-4 h-4" />
                                <span>info@rockwellh2.com</span>
                            </a>
                            <p className="text-white/50 text-xs mt-4">
                                Speak with Brad or Nick directly
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <nav className="space-y-2">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block text-white/70 hover:text-white transition-colors text-sm"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Social & CTA */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex gap-3 mb-6">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-block bg-[#2E7D32] hover:bg-[#246b27] text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm"
                        >
                            Request a Quote
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/50 text-sm">
                        © {new Date().getFullYear()} Rockwell H2 Systems. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
