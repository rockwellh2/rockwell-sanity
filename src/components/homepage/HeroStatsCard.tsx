"use client";

import { Zap, Activity, Box } from "lucide-react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/magicui/border-beam";



export function HeroStatsCard({ className }: { className?: string }) {
    return (
        <div className={cn("glass-card-strong p-6 rounded-xl max-w-sm w-full relative overflow-hidden", className)}>
            <BorderBeam size={250} duration={12} delay={5} />
            <h3 className="text-xs font-semibold text-neutral-500 tracking-widest uppercase mb-6 relative z-10">
                Current Deployment Specs
            </h3>

            <div className="space-y-6 relative z-10">
                {/* ... content ... */}
                <div className="flex items-center justify-between border-b border-black/5 pb-4">
                    <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium text-neutral-600">Daily Production</span>
                    </div>
                    <span className="text-lg font-bold text-neutral-900">1,500kg +</span>
                </div>

                <div className="flex items-center justify-between border-b border-black/5 pb-4">
                    <div className="flex items-center gap-3">
                        <Activity className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium text-neutral-600">Energy Resilience</span>
                    </div>
                    <span className="text-lg font-bold text-neutral-900">24/7</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Box className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium text-neutral-600">Containerized Fleet</span>
                    </div>
                    <span className="text-lg font-bold text-neutral-900">250</span>
                </div>
            </div>
        </div>
    );
}
