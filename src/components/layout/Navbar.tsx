"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/app/RockwellH2_logo.png";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { ShinyButton } from "@/components/magicui/shiny-button";

const navLinks = [
    { path: "/", label: "Overview" },
    { path: "/solutions", label: "Solutions" },
    { path: "/technology", label: "Technology" },
    { path: "/incentives", label: "Incentives" },
    { path: "/why-rockwell", label: "About" },
];

export function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300">
            <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm" />

            <div className="max-w-7xl mx-auto h-full px-4 lg:px-8 flex items-center justify-between relative z-10">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src={Logo}
                        alt="Rockwell H2 Logo"
                        width={260}
                        height={64}
                        className="h-16 w-auto object-contain"
                        priority
                    />
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`text-sm font-medium transition-all duration-150 relative ${pathname === link.path
                                ? "text-primary"
                                : "text-muted-foreground hover:text-primary"
                                }`}
                        >
                            {link.label}
                            {pathname === link.path && (
                                <motion.span
                                    layoutId="nav-underline"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                />
                            )}
                        </Link>
                    ))}
                </nav>


                <div className="hidden lg:block">
                    <Link href="/contact">
                        <ShinyButton className="bg-primary hover:bg-primary/90">
                            Request Evaluation
                        </ShinyButton>
                    </Link>
                </div>

                <button
                    className="lg:hidden p-2 text-muted-foreground hover:text-primary"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {mobileOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-neutral-200 p-4 shadow-lg rounded-b-2xl"
                >
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setMobileOpen(false)}
                                className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${pathname === link.path
                                    ? "bg-primary/5 text-primary"
                                    : "text-muted-foreground hover:bg-neutral-50"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setMobileOpen(false)}
                            className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center mt-2"
                        >
                            Request Evaluation
                        </Link>
                    </nav>
                </motion.div>
            )}
        </header>
    );
}
