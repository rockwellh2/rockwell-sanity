import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#111827] text-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-xl font-bold mb-4">ROCKWELL H2</h3>
                        <p className="text-neutral-400 text-sm">
                            Industrial-grade hydrogen infrastructure for a sustainable future.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#00CC66]">Navigation</h4>
                        <nav className="flex flex-col gap-2">
                            <Link href="/" className="text-neutral-400 hover:text-white text-sm">Home</Link>
                            <Link href="/platform" className="text-neutral-400 hover:text-white text-sm">Platform</Link>
                            <Link href="/solutions" className="text-neutral-400 hover:text-white text-sm">Solutions</Link>
                            <Link href="/industries" className="text-neutral-400 hover:text-white text-sm">Industries</Link>
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#00CC66]">Company</h4>
                        <nav className="flex flex-col gap-2">
                            <Link href="/why-rockwell" className="text-neutral-400 hover:text-white text-sm">Why Rockwell</Link>
                            <Link href="/contact" className="text-neutral-400 hover:text-white text-sm">Contact</Link>
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#00CC66]">Contact</h4>
                        <div className="text-neutral-400 text-sm space-y-2">
                            <p>Brad Rockwell: (714) 305-3300</p>
                            <p>Nick Rockwell: (510) 960-0261</p>
                            <p>
                                <a href="mailto:info@rockwellh2.com" className="text-[#0057B7] hover:underline">
                                    info@rockwellh2.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500 text-sm">
                    Copyright {new Date().getFullYear()} Rockwell Engineering and Equipment. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
