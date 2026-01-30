"use client";

import { useState } from "react";
import { ChevronDown, Factory, Truck, Wheat, Server } from "lucide-react";

interface Industry {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    stats: { label: string; value: string }[];
}

const industries: Industry[] = [
    {
        id: "farms",
        title: "Farm Operations",
        description: "Power irrigation equipment, grain dryers, and cold storage with on-site hydrogen from agricultural waste. Convert manure and crop residue into clean fuel while earning carbon credits.",
        icon: <Wheat className="text-cyan-400" size={24} />,
        stats: [
            { label: "Feedstock", value: "Biomass" },
            { label: "Application", value: "Equipment + Storage" },
            { label: "Payback", value: "4-6 Years" }
        ]
    },
    {
        id: "warehouses",
        title: "Industrial Warehouses",
        description: "Fuel hydrogen forklift fleets with 3-minute refueling. Eliminate charging infrastructure and downtime. Multi-shift operations without battery degradation.",
        icon: <Factory className="text-cyan-400" size={24} />,
        stats: [
            { label: "Refuel Time", value: "3 min" },
            { label: "Fleet Support", value: "20+ lifts" },
            { label: "Uptime", value: "24/7" }
        ]
    },
    {
        id: "logistics",
        title: "Logistics & Fleet Depots",
        description: "Central fueling hubs for hydrogen Class 8 trucks and delivery vehicles. Regional resilience with on-site production eliminates supply chain dependency.",
        icon: <Truck className="text-cyan-400" size={24} />,
        stats: [
            { label: "Capacity", value: "500 kg/day" },
            { label: "Vehicles", value: "50+ trucks" },
            { label: "Credit", value: "$3/kg" }
        ]
    },
    {
        id: "datacenters",
        title: "Data Center Backup",
        description: "Clean backup power for critical infrastructure. Hydrogen fuel cells provide 24+ hours of runtime without diesel emissions or noise.",
        icon: <Server className="text-cyan-400" size={24} />,
        stats: [
            { label: "Runtime", value: "24+ hrs" },
            { label: "Power", value: "500 kW" },
            { label: "Emissions", value: "Zero" }
        ]
    }
];

export function IndustryAccordion() {
    const [activeId, setActiveId] = useState<string | null>("farms");

    return (
        <div className="space-y-4">
            {industries.map((industry) => {
                const isActive = activeId === industry.id;

                return (
                    <div
                        key={industry.id}
                        className={`border rounded-xl overflow-hidden transition-all duration-300 ${isActive
                                ? "border-cyan-500/50 bg-slate-800"
                                : "border-slate-700 bg-slate-800/50 hover:bg-slate-800"
                            }`}
                    >
                        {/* Header */}
                        <button
                            onClick={() => setActiveId(isActive ? null : industry.id)}
                            className="w-full flex items-center justify-between p-6 text-left"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-slate-700 rounded-lg">
                                    {industry.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                            </div>
                            <ChevronDown
                                className={`text-slate-400 transition-transform duration-300 ${isActive ? "rotate-180" : ""
                                    }`}
                                size={24}
                            />
                        </button>

                        {/* Content */}
                        <div className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            }`}>
                            <div className="px-6 pb-6">
                                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                    {industry.description}
                                </p>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-4">
                                    {industry.stats.map((stat, i) => (
                                        <div key={i} className="bg-slate-700/50 rounded-lg p-4 text-center">
                                            <p className="text-cyan-400 font-bold text-xl">{stat.value}</p>
                                            <p className="text-slate-500 text-sm">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
