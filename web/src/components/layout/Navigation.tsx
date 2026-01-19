'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

// TODO: Update navigation links for your site
const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    // Add more links as needed:
    // { label: 'Services', href: '/services' },
    // { label: 'Blog', href: '/blog' },
    // { label: 'Contact', href: '/contact' },
]

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const textColor = scrolled || isOpen ? 'text-neutral-900' : 'text-white'
    const bgColor = scrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'

    return (
        <nav className={`fixed left-0 w-full z-40 transition-all duration-500 ease-in-out ${bgColor} top-0`}>
            <div className="container mx-auto px-6 h-20 flex justify-between items-center">
                <Link href="/" className="z-50">
                    {/* TODO: Replace with your logo */}
                    <span className={`text-xl font-bold ${textColor} transition-colors`}>
                        Your Logo
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium hover:text-slate-500 transition-colors ${textColor}`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* TODO: Update this CTA button */}
                    <a
                        href="#contact"
                        className="bg-slate-900 text-white hover:bg-slate-700 px-6 py-2 rounded-lg text-sm font-medium transition-all"
                    >
                        Contact Us
                    </a>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-[110]"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="text-white" /> : <Menu className={textColor} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-slate-900 z-[100] flex flex-col items-center justify-center gap-8 h-[100dvh]"
                    >
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-serif text-white hover:text-slate-300 transition-colors text-center"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="w-12 h-px bg-white/20 my-4" />

                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="text-3xl font-serif text-slate-300 hover:text-white transition-colors text-center"
                        >
                            Contact Us
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
