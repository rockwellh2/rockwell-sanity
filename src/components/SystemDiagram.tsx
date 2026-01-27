import { Sun, Wind, Droplets, Zap, Database, Fuel, BatteryCharging, ArrowRight } from "lucide-react";

export function SystemDiagram() {
    return (
        <div className="w-full overflow-x-auto py-8">
            <div className="min-w-[800px] px-8">
                {/* Desktop horizontal flow */}
                <div className="hidden md:flex items-center justify-between gap-6">
                    {/* Inputs */}
                    <div className="flex flex-col gap-3 p-6 border border-border/50 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm min-w-[200px]">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Energy Input</h4>
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-white border border-border/50">
                            <Sun className="w-5 h-5 text-amber-500" />
                            <span className="text-sm font-medium text-foreground">Solar Power</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-white border border-border/50">
                            <Wind className="w-5 h-5 text-blue-500" />
                            <span className="text-sm font-medium text-foreground">Wind Power</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-white border border-border/50">
                            <Droplets className="w-5 h-5 text-cyan-500" />
                            <span className="text-sm font-medium text-foreground">Hydropower</span>
                        </div>
                    </div>

                    <ArrowRight className="w-6 h-6 text-muted-foreground/30 flex-shrink-0" />

                    {/* Electrolyzer - Highlighted */}
                    <div className="p-6 border-2 border-primary/20 bg-primary/5 rounded-2xl shadow-md min-w-[200px] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full -mr-8 -mt-8" />

                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Production</h4>
                        <div className="flex items-center gap-3 mb-4">
                            <Zap className="w-8 h-8 text-primary fill-primary/20" />
                            <span className="text-lg font-bold text-foreground">Electrolyzer</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Convert water + renewable energy into hydrogen at 90-225 kg/day.
                        </p>
                    </div>

                    <ArrowRight className="w-6 h-6 text-muted-foreground/30 flex-shrink-0" />

                    {/* Storage */}
                    <div className="p-6 border border-border/50 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm min-w-[200px]">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Storage</h4>
                        <div className="flex items-center gap-3 mb-4">
                            <Database className="w-8 h-8 text-primary" />
                            <span className="text-lg font-bold text-foreground">H2 Storage</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Store safely until needed or sold. No energy loss over time.
                        </p>
                    </div>

                    <ArrowRight className="w-6 h-6 text-muted-foreground/30 flex-shrink-0" />

                    {/* Outputs */}
                    <div className="flex flex-col gap-3 p-6 border border-border/50 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm min-w-[200px]">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Output</h4>
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-white border border-border/50">
                            <BatteryCharging className="w-5 h-5 text-green-600" />
                            <span className="text-sm font-medium text-foreground">Fuel Cell Power</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-white border border-border/50">
                            <Fuel className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-medium text-foreground">Vehicle Fueling</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-white border border-border/50">
                            <Zap className="w-5 h-5 text-yellow-600" />
                            <span className="text-sm font-medium text-foreground">Grid Power</span>
                        </div>
                    </div>
                </div>

                {/* Mobile vertical flow */}
                <div className="md:hidden flex flex-col items-center gap-4">
                    <div className="p-6 border border-border/50 bg-white rounded-xl w-full">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Energy Input</h4>
                        <div className="flex gap-4">
                            <Sun className="w-6 h-6 text-amber-500" />
                            <Wind className="w-6 h-6 text-blue-500" />
                            <Droplets className="w-6 h-6 text-cyan-500" />
                        </div>
                    </div>

                    <ArrowRight className="w-6 h-6 text-muted-foreground/30 rotate-90" />

                    <div className="p-6 border-2 border-primary/20 bg-primary/5 rounded-xl w-full">
                        <div className="flex items-center gap-3 mb-2">
                            <Zap className="w-6 h-6 text-primary" />
                            <span className="font-bold">Electrolyzer</span>
                        </div>
                        <p className="text-sm text-muted-foreground">90-225 kg H2/day</p>
                    </div>

                    <ArrowRight className="w-6 h-6 text-muted-foreground/30 rotate-90" />

                    <div className="p-6 border border-border/50 bg-white rounded-xl w-full">
                        <div className="flex items-center gap-3 mb-2">
                            <Database className="w-6 h-6 text-primary" />
                            <span className="font-bold">Storage</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Long-term buffer</p>
                    </div>

                    <ArrowRight className="w-6 h-6 text-muted-foreground/30 rotate-90" />

                    <div className="p-6 border border-border/50 bg-white rounded-xl w-full">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Output</h4>
                        <div className="flex gap-4">
                            <BatteryCharging className="w-6 h-6 text-green-600" />
                            <Fuel className="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
