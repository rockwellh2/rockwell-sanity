"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

const timelineEvents = [
    {
        year: "1994",
        title: "Rockwell Engineering Founded",
        desc: "Brad Rockwell establishes the firm in Oakland, CA, specializing in industrial hydraulics and compressed gas systems for port infrastructure."
    },
    {
        year: "2008",
        title: "First Hydrogen Prototype",
        desc: "Contracted by the DOE to build a high-pressure electrolyzer balance-of-plant for experimental grid storage."
    },
    {
        year: "2015",
        title: "Modular Patent Awarded",
        desc: "Rockwell files the core patent for the 'PowerPod' modular containerized enclosure design, standardizing safety setbacks."
    },
    {
        year: "2024",
        title: "National Deployment",
        desc: "Rockwell H2 Systems scales to 20+ states, deploying infrastructure for Fortune 500 logistics fleets."
    }
];

export function HeritageTimeline() {
    return (
        <div className="relative py-20 border-l border-slate-200 ml-6 md:ml-10 space-y-16">
            {timelineEvents.map((event, i) => (
                <div key={event.year} className="relative pl-8 md:pl-16">
                    {/* Dot */}
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white border-2 border-slate-950 rounded-full z-10" />

                    <FadeIn delay={i * 0.1}>
                        <div className="flex flex-col md:flex-row gap-4 md:items-baseline">
                            <span className="font-mono text-3xl font-bold text-emerald-600 tracking-tighter">
                                {event.year}
                            </span>
                            <h4 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 md:pb-0 md:border-0">
                                {event.title}
                            </h4>
                        </div>
                        <p className="mt-2 text-slate-500 max-w-xl leading-relaxed">
                            {event.desc}
                        </p>
                    </FadeIn>
                </div>
            ))}
        </div>
    );
}
