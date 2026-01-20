"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { path: "/", label: "Home" },
    { path: "/platform", label: "Platform" },
    { path: "/solutions", label: "Solutions" },
    { path: "/industries", label: "Industries" },
    { path: "/why-rockwell", label: "Why Rockwell" },
];

export function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-neutral-200 z-50">
            <div className="max-w-7xl mx-auto h-full px-4 lg:px-8 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-neutral-900 tracking-tight">
                    ROCKWELL H2
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`text-base font-medium transition-all duration-150 relative ${pathname === link.path
                                    ? "text-neutral-900"
                                    : "text-neutral-500 hover:text-neutral-900"
                                }`}
                        >
                            {link.label}
                            {pathname === link.path && (
                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00CC66]" />
                            )}
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <Link href="/contact" className="btn-primary">
                        REQUEST EVALUATION
                    </Link>
                </div>

                <button
                    className="lg:hidden p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {mobileOpen && (
                <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-neutral-200 p-4">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setMobileOpen(false)}
                                className={`text-base font-medium py-2 ${pathname === link.path
                                        ? "text-neutral-900 border-l-2 border-[#00CC66] pl-4"
                                        : "text-neutral-500"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setMobileOpen(false)}
                            className="btn-primary text-center mt-4"
                        >
                            REQUEST EVALUATION
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
