"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/app/RockwellH2_logo.png';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from '@/components/ui/sheet';

const navLinks = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Platform', href: '/platform' },
    { name: 'Technology', href: '/technology' },
    { name: 'Incentives', href: '/incentives' },
    { name: 'Why Rockwell', href: '/why-rockwell' },
    { name: 'Contact', href: '/contact' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => pathname === path;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-md'
                : 'bg-white/95 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src={Logo}
                            alt="Rockwell H2"
                            width={200}
                            height={50}
                            className="h-10 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-4 py-2 text-sm font-medium transition-colors relative group ${isActive(link.href)
                                    ? 'text-slate-950'
                                    : 'text-slate-500 hover:text-slate-950'
                                    }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-emerald-500 transition-transform origin-left ${isActive(link.href)
                                        ? 'scale-x-100'
                                        : 'scale-x-0 group-hover:scale-x-100'
                                        }`}
                                />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link href="/contact">
                            <Button
                                className="bg-slate-950 hover:bg-emerald-600 text-white px-6 rounded-sm text-xs font-bold uppercase tracking-widest"
                            >
                                Request Quote
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <div className="flex flex-col gap-6 mt-8">
                                <Link href="/" className="flex items-center mb-4">
                                    <Image
                                        src={Logo}
                                        alt="Rockwell H2"
                                        width={180}
                                        height={45}
                                        className="h-10 w-auto object-contain"
                                        priority
                                    />
                                </Link>

                                <nav className="flex flex-col gap-2">
                                    {navLinks.map((link) => (
                                        <SheetClose asChild key={link.name}>
                                            <Link
                                                href={link.href}
                                                className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${isActive(link.href)
                                                    ? 'bg-slate-100 text-slate-950'
                                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </nav>

                                <SheetClose asChild>
                                    <Link href="/contact">
                                        <Button
                                            className="w-full bg-slate-950 hover:bg-emerald-600 text-white mt-4 rounded-sm text-xs font-bold uppercase tracking-widest"
                                        >
                                            Request Quote
                                        </Button>
                                    </Link>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
