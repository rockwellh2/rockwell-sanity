import Link from "next/link";
import { Leaf, Sun, Battery, ArrowRight, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Solutions | Rockwell H2",
    description: "Hydrogen solutions for biomass, renewable energy storage, and reliable backup power.",
};

export default function SolutionsPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="py-24 bg-[#F3F4F6] border-b border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-h1 font-bold text-[#111827] mb-6">
                            Hydrogen Solutions
                        </h1>
                        <p className="text-xl text-[#6B7280]">
                            Much of the power production and storage to date is unsustainable. Our hydrogen solution delivers cleaner, more economical energy than fossil fuels.
                        </p>
                    </div>
                </div>
            </section>

            {/* Biomass Solution */}
            <section id="biomass" className="py-24 border-b border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 text-[#00CC66] mb-4">
                                <Leaf className="w-6 h-6" />
                                <span className="text-label uppercase tracking-wider">Biomass Solution</span>
                            </div>
                            <h2 className="text-h2 font-semibold text-[#111827] mb-6">
                                Turn Waste Into Value
                            </h2>
                            <p className="text-lg text-[#6B7280] mb-6">
                                Convert organic waste and biomass into valuable hydrogen fuel. Reduce disposal costs while generating clean energy for your operations.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#00CC66] mt-0.5 flex-shrink-0" />
                                    <span className="text-[#374151]">Eliminate waste disposal costs</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#00CC66] mt-0.5 flex-shrink-0" />
                                    <span className="text-[#374151]">Generate revenue from byproducts</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#00CC66] mt-0.5 flex-shrink-0" />
                                    <span className="text-[#374151]">Reduce carbon footprint significantly</span>
                                </li>
                            </ul>
                            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                                DISCUSS YOUR WASTE <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="bg-gradient-to-br from-[#00CC66]/10 to-[#0057B7]/10 p-12 flex items-center justify-center min-h-[400px]">
                            <Leaf className="w-32 h-32 text-[#00CC66] opacity-50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Renewables Solution */}
            <section id="renewables" className="py-24 border-b border-[#E5E7EB] bg-[#F3F4F6]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 bg-gradient-to-br from-[#0057B7]/10 to-[#00CC66]/10 p-12 flex items-center justify-center min-h-[400px]">
                            <Sun className="w-32 h-32 text-[#00CC66] opacity-50" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 text-[#00CC66] mb-4">
                                <Sun className="w-6 h-6" />
                                <span className="text-label uppercase tracking-wider">Renewables Solution</span>
                            </div>
                            <h2 className="text-h2 font-semibold text-[#111827] mb-6">
                                Maximize Your Solar & Wind
                            </h2>
                            <p className="text-lg text-[#6B7280] mb-6">
                                Utility companies are paying less and less for solar power. Store and use onsite renewable energy as H2 instead of selling back at declining rates.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#00CC66] mt-0.5 flex-shrink-0" />
                                    <span className="text-[#374151]">Recover lost solar revenue from hydrogen production</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#00CC66] mt-0.5 flex-shrink-0" />
                                    <span className="text-[#374151]">Production tax credits: $3/kg of green hydrogen</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#00CC66] mt-0.5 flex-shrink-0" />
                                    <span className="text-[#374151]">Investment tax credit of 30%</span>
                                </li>
                            </ul>
                            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                                OPTIMIZE YOUR RENEWABLES <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resilience Solution */}
            <section id="resilience" className="py-24">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 text-[#00CC66] mb-4">
                                <Battery className="w-6 h-6" />
                                <span className="text-label uppercase tracking-wider">Resilience Solution</span>
                            </div>
                            <h2 className="text-h2 font-semibold text-[#111827] mb-6">
                                Reliable Backup Power
                            </h2>
                            <p className="text-lg text-[#6B7280] mb-6">
                                Fuel cells take hydrogen and convert it to electricity on demand. Hydrogen can be stored for weeks or months with no loss of energy, unlike batteries.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#00CC66] mt-0.5 flex-shrink-0" />
                                    <span className="text-[#374151]">Long-term storage without energy loss</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#00CC66] mt-0.5 flex-shrink-0" />
                                    <span className="text-[#374151]">Electricity easily conditioned to different voltages</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#00CC66] mt-0.5 flex-shrink-0" />
                                    <span className="text-[#374151]">Energy independence from the grid</span>
                                </li>
                            </ul>
                            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                                SECURE YOUR POWER <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="bg-gradient-to-br from-[#00CC66]/10 to-[#0057B7]/10 p-12 flex items-center justify-center min-h-[400px]">
                            <Battery className="w-32 h-32 text-[#00CC66] opacity-50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#111827]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-h1 font-bold text-white mb-6">
                        Which Solution Fits Your Needs?
                    </h2>
                    <p className="text-xl text-neutral-400 mb-8">
                        Let our team help you identify the right hydrogen solution for your situation.
                    </p>
                    <Link href="/contact" className="btn-primary">
                        GET PERSONALIZED RECOMMENDATION
                    </Link>
                </div>
            </section>
        </div>
    );
}
