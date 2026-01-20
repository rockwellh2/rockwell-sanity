"use client";

import Link from "next/link";
import { useState } from "react";
import { Factory, Warehouse, Building2, Truck, Tractor, CheckCircle } from "lucide-react";

const industries = [
    {
        id: "agriculture",
        icon: Tractor,
        name: "Agriculture",
        description: "Power your farming operations with clean hydrogen. From tractors to irrigation pumps, reduce diesel dependency and operating costs.",
        benefits: [
            "Lower fuel costs compared to diesel",
            "Zero emissions operation",
            "Energy independence for remote locations",
            "Production tax credits available"
        ]
    },
    {
        id: "warehousing",
        icon: Warehouse,
        name: "Warehousing & Logistics",
        description: "Hydrogen forklifts offer speedy refueling, allowing you to cut your electric forklift fleet in half. Quiet, no pollution - only pure water as exhaust.",
        benefits: [
            "Speedy refueling vs battery charging",
            "Reduce forklift fleet size by 50%",
            "Quiet, zero-emission operation",
            "Production tax credits mean free fuel"
        ]
    },
    {
        id: "municipal",
        icon: Building2,
        name: "Municipal",
        description: "Cities and municipalities can achieve sustainability goals while reducing long-term energy costs. Power public facilities and fleet vehicles with green hydrogen.",
        benefits: [
            "Meet sustainability mandates",
            "Reduce carbon footprint",
            "Energy security for critical facilities",
            "Long-term cost savings"
        ]
    },
    {
        id: "manufacturing",
        icon: Factory,
        name: "Manufacturing",
        description: "Reliable backup power and process energy for manufacturing facilities. Hydrogen storage provides weeks of backup unlike batteries.",
        benefits: [
            "Reliable backup power",
            "Process energy applications",
            "Energy cost stabilization",
            "Carbon footprint reduction"
        ]
    },
    {
        id: "transportation",
        icon: Truck,
        name: "Transportation",
        description: "Fleet operators can transition to hydrogen-powered vehicles with on-site fueling capabilities. Future-proof your fleet while reducing operating costs.",
        benefits: [
            "On-site hydrogen fueling",
            "Reduced fuel costs",
            "Fleet range flexibility",
            "Regulatory compliance"
        ]
    }
];

export default function IndustriesPage() {
    const [activeTab, setActiveTab] = useState("warehousing");
    const activeIndustry = industries.find(i => i.id === activeTab) || industries[0];

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="py-24 bg-[#F3F4F6] border-b border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-h1 font-bold text-[#111827] mb-6">
                            Industries We Serve
                        </h1>
                        <p className="text-xl text-[#6B7280]">
                            From warehousing to agriculture, our hydrogen solutions help organizations achieve energy independence and reduce their carbon footprint.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tabbed Content */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    {/* Tabs */}
                    <div className="flex flex-wrap gap-2 mb-12 border-b border-[#E5E7EB] pb-4">
                        {industries.map((industry) => {
                            const Icon = industry.icon;
                            return (
                                <button
                                    key={industry.id}
                                    onClick={() => setActiveTab(industry.id)}
                                    className={`px-6 py-3 text-sm font-medium transition-all duration-150 ${activeTab === industry.id
                                            ? "bg-[#00CC66] text-[#111827]"
                                            : "bg-white border border-[#E5E7EB] text-[#6B7280] hover:border-[#00CC66]"
                                        }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <Icon className="w-4 h-4" />
                                        {industry.name}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Tab Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 text-[#00CC66] mb-4">
                                <activeIndustry.icon className="w-6 h-6" />
                                <span className="text-label uppercase tracking-wider">Industry</span>
                            </div>
                            <h2 className="text-h2 font-semibold text-[#111827] mb-6">
                                {activeIndustry.name}
                            </h2>
                            <p className="text-lg text-[#6B7280] mb-8">
                                {activeIndustry.description}
                            </p>
                            <ul className="space-y-4 mb-8">
                                {activeIndustry.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#00CC66] mt-0.5 flex-shrink-0" />
                                        <span className="text-[#374151]">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="btn-primary">
                                DISCUSS YOUR INDUSTRY
                            </Link>
                        </div>
                        <div className="feature-card flex items-center justify-center min-h-[400px]">
                            <activeIndustry.icon className="w-32 h-32 text-[#00CC66] opacity-30" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Case: Forklifts */}
            <section className="py-24 bg-[#F3F4F6] border-y border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-h2 font-semibold text-[#111827] mb-4">
                            Featured: Hydrogen Forklifts
                        </h2>
                        <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                            Hydrogen forklifts are transforming warehouse operations across the country.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="feature-card text-center">
                            <div className="text-4xl font-bold text-[#00CC66] mb-2">50%</div>
                            <div className="text-sm text-[#6B7280]">Fleet reduction possible</div>
                        </div>
                        <div className="feature-card text-center">
                            <div className="text-4xl font-bold text-[#00CC66] mb-2">$3/kg</div>
                            <div className="text-sm text-[#6B7280]">Production tax credit</div>
                        </div>
                        <div className="feature-card text-center">
                            <div className="text-4xl font-bold text-[#00CC66] mb-2">30%</div>
                            <div className="text-sm text-[#6B7280]">Investment tax credit</div>
                        </div>
                        <div className="feature-card text-center">
                            <div className="text-4xl font-bold text-[#00CC66] mb-2">0</div>
                            <div className="text-sm text-[#6B7280]">Emissions</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#111827]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-h1 font-bold text-white mb-6">
                        See How We Can Help Your Industry
                    </h2>
                    <Link href="/contact" className="btn-primary">
                        SCHEDULE CONSULTATION
                    </Link>
                </div>
            </section>
        </div>
    );
}
