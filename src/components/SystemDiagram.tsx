import { Sun, Wind, Droplets, Zap, Database, Fuel, BatteryCharging, ArrowRight } from "lucide-react";

export function SystemDiagram() {
    return (
        <div className="w-full overflow-x-auto">
            <div className="min-w-[800px] p-8">
                {/* Desktop horizontal flow */}
                <div className="hidden md:flex items-center justify-between gap-4">
                    {/* Inputs */}
                    <div className="flex flex-col gap-4 p-6 border border-[#E5E7EB] bg-white min-w-[180px]">
                        <h4 className="text-label uppercase tracking-wider text-[#6B7280] mb-2">Energy Input</h4>
                        <div className="flex items-center gap-3">
                            <Sun className="w-6 h-6 text-[#00CC66]" />
                            <span className="text-sm text-[#111827]">Solar Power</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Wind className="w-6 h-6 text-[#00CC66]" />
                            <span className="text-sm text-[#111827]">Wind Power</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Droplets className="w-6 h-6 text-[#00CC66]" />
                            <span className="text-sm text-[#111827]">Hydropower</span>
                        </div>
                    </div>

                    <ArrowRight className="w-8 h-8 text-[#E5E7EB] flex-shrink-0" />

                    {/* Electrolyzer */}
                    <div className="p-6 border-2 border-[#00CC66] bg-white min-w-[180px]">
                        <h4 className="text-label uppercase tracking-wider text-[#00CC66] mb-2">Production</h4>
                        <div className="flex items-center gap-3 mb-4">
                            <Zap className="w-8 h-8 text-[#00CC66]" />
                            <span className="text-lg font-medium text-[#111827]">Electrolyzer</span>
                        </div>
                        <p className="text-sm text-[#6B7280]">
                            Convert water + renewable energy into hydrogen at 90-225 kg/day
                        </p>
                    </div>

                    <ArrowRight className="w-8 h-8 text-[#E5E7EB] flex-shrink-0" />

                    {/* Storage */}
                    <div className="p-6 border border-[#E5E7EB] bg-white min-w-[180px]">
                        <h4 className="text-label uppercase tracking-wider text-[#6B7280] mb-2">Storage</h4>
                        <div className="flex items-center gap-3 mb-4">
                            <Database className="w-8 h-8 text-[#00CC66]" />
                            <span className="text-lg font-medium text-[#111827]">H2 Storage</span>
                        </div>
                        <p className="text-sm text-[#6B7280]">
                            Store safely until needed or sold. No energy loss over time.
                        </p>
                    </div>

                    <ArrowRight className="w-8 h-8 text-[#E5E7EB] flex-shrink-0" />

                    {/* Outputs */}
                    <div className="flex flex-col gap-4 p-6 border border-[#E5E7EB] bg-white min-w-[180px]">
                        <h4 className="text-label uppercase tracking-wider text-[#6B7280] mb-2">Output</h4>
                        <div className="flex items-center gap-3">
                            <BatteryCharging className="w-6 h-6 text-[#00CC66]" />
                            <span className="text-sm text-[#111827]">Fuel Cell Power</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Fuel className="w-6 h-6 text-[#00CC66]" />
                            <span className="text-sm text-[#111827]">Vehicle Fueling</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Zap className="w-6 h-6 text-[#00CC66]" />
                            <span className="text-sm text-[#111827]">Grid Power</span>
                        </div>
                    </div>
                </div>

                {/* Mobile vertical flow */}
                <div className="md:hidden flex flex-col items-center gap-4">
                    <div className="w-full p-6 border border-[#E5E7EB] bg-white">
                        <h4 className="text-label uppercase tracking-wider text-[#6B7280] mb-4">Energy Input</h4>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2">
                                <Sun className="w-5 h-5 text-[#00CC66]" />
                                <span className="text-sm">Solar</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Wind className="w-5 h-5 text-[#00CC66]" />
                                <span className="text-sm">Wind</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Droplets className="w-5 h-5 text-[#00CC66]" />
                                <span className="text-sm">Hydro</span>
                            </div>
                        </div>
                    </div>

                    <ArrowRight className="w-6 h-6 text-[#E5E7EB] rotate-90" />

                    <div className="w-full p-6 border-2 border-[#00CC66] bg-white">
                        <h4 className="text-label uppercase tracking-wider text-[#00CC66] mb-2">Electrolyzer</h4>
                        <p className="text-sm text-[#6B7280]">90-225 kg H2/day</p>
                    </div>

                    <ArrowRight className="w-6 h-6 text-[#E5E7EB] rotate-90" />

                    <div className="w-full p-6 border border-[#E5E7EB] bg-white">
                        <h4 className="text-label uppercase tracking-wider text-[#6B7280] mb-2">H2 Storage</h4>
                        <p className="text-sm text-[#6B7280]">Long-term, no loss</p>
                    </div>

                    <ArrowRight className="w-6 h-6 text-[#E5E7EB] rotate-90" />

                    <div className="w-full p-6 border border-[#E5E7EB] bg-white">
                        <h4 className="text-label uppercase tracking-wider text-[#6B7280] mb-4">Output</h4>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2">
                                <BatteryCharging className="w-5 h-5 text-[#00CC66]" />
                                <span className="text-sm">Power</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Fuel className="w-5 h-5 text-[#00CC66]" />
                                <span className="text-sm">Fueling</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
