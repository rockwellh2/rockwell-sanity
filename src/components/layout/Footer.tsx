import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import Logo from "@/app/RockwellH2_logo.png";

export function Footer() {
    return (
        <footer className="bg-neutral-900 text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src={Logo}
                                alt="Rockwell H2"
                                width={180}
                                height={40}
                                className="h-8 w-auto object-contain brightness-0 invert opacity-80"
                            />
                        </Link>
                        <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                            Industrial-grade hydrogen infrastructure for a sustainable, resilient future. Proudly family-owned with 30+ years of engineering excellence.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-primary">Navigation</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="/" className="text-neutral-400 hover:text-white text-sm transition-colors">Home</Link>
                            <Link href="/platform" className="text-neutral-400 hover:text-white text-sm transition-colors">Platform Overview</Link>
                            <Link href="/solutions" className="text-neutral-400 hover:text-white text-sm transition-colors">Solutions</Link>
                            <Link href="/industries" className="text-neutral-400 hover:text-white text-sm transition-colors">Industries</Link>
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-primary">Company</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="/why-rockwell" className="text-neutral-400 hover:text-white text-sm transition-colors">Why Rockwell</Link>
                            <Link href="/contact" className="text-neutral-400 hover:text-white text-sm transition-colors">Contact Us</Link>
                            <Link href="/privacy" className="text-neutral-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-primary">Get in Touch</h4>
                        <div className="text-neutral-400 text-sm space-y-4">
                            <p>
                                <strong className="text-white block mb-1">Sales & Support</strong>
                                <a href="mailto:info@rockwellh2.com" className="hover:text-primary transition-colors">info@rockwellh2.com</a>
                            </p>
                            <div className="pt-2">
                                <Link href="/contact">
                                    <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-neutral-900 h-10 px-6 rounded-full">
                                        Contract Us
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-neutral-500 text-sm">
                    <p>© {new Date().getFullYear()} Rockwell Engineering and Equipment.</p>
                    <p>Designed for Resilience.</p>
                </div>
            </div>
        </footer>
    );
}
