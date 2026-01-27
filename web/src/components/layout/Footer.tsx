'use client'

import Link from 'next/link'
import { Instagram, Facebook, Mail } from 'lucide-react'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-slate-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo/Brand */}
                    <Link href="/" className="text-xl font-bold">
                        Your Brand
                    </Link>

                    {/* Social Links - TODO: Update with your social media */}
                    <div className="flex gap-6">
                        <a
                            href="https://instagram.com/yourbrand"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-slate-300 transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                        </a>
                        <a
                            href="https://facebook.com/yourbrand"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-slate-300 transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook size={20} />
                        </a>
                        <a
                            href="mailto:hello@yourbrand.com"
                            className="hover:text-slate-300 transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-slate-400 text-sm">
                        © {currentYear} Your Brand. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
