"use client";

import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HUDLabel } from "@/components/ui/HUDLabel";
import { ProductModule } from "@/components/ui/ProductModule";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

export default function TechnologyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative pt-32 pb-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/70 via-white to-white" />
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.12)_1px,transparent_0)] bg-[length:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <FadeIn>
                <SectionHeader
                  subtitle="Modular Infrastructure"
                  title="The Hardware."
                  description="Deep dive into the specific modules that make up the PowerPod platform. Scalable, containerized, and built for industry."
                />
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="#system">
                    <Button className="h-12 px-8 bg-slate-950 text-white hover:bg-cyan-600 text-xs font-bold uppercase tracking-[0.2em] rounded-sm shadow-xl">
                      View System Map
                    </Button>
                  </Link>
                  <Link href="#specs">
                    <Button variant="outline" className="h-12 px-8 border-slate-300 text-slate-700 hover:text-slate-950 hover:bg-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm bg-white/70">
                      Download Spec Sheet
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-5">
              <FadeIn delay={0.3}>
                <div className="bg-white border border-slate-200 shadow-2xl p-8 md:p-10">
                  <div className="flex items-center justify-between mb-8">
                    <HUDLabel color="slate">Platform Snapshot</HUDLabel>
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-400">REV 4.2</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-2">Output Range</div>
                      <div className="text-3xl font-bold text-slate-950">200kW-10MW</div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-2">Storage</div>
                      <div className="text-3xl font-bold text-slate-950">300kg+</div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-2">Deployment</div>
                      <div className="text-3xl font-bold text-slate-950">12-16 Weeks</div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-2">Footprint</div>
                      <div className="text-3xl font-bold text-slate-950">20' ISO</div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500">
                    Modular blocks designed for staged deployment, on-site expansion, and serviceable uptime.
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div >
      </section >

      {/* PERFORMANCE STRIP */}
      < section className="bg-slate-950 text-white py-10" >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="border border-white/10 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-cyan-400">Uptime</div>
              <div className="text-3xl font-bold mt-3">99.5%</div>
            </div>
            <div className="border border-white/10 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-cyan-400">Refuel</div>
              <div className="text-3xl font-bold mt-3">3 Min</div>
            </div>
            <div className="border border-white/10 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-cyan-400">Modularity</div>
              <div className="text-3xl font-bold mt-3">4 Core Blocks</div>
            </div>
            <div className="border border-white/10 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-cyan-400">Compliance</div>
              <div className="text-3xl font-bold mt-3">ASME + UL</div>
            </div>
          </div>
        </div>
      </section >

      {/* SYSTEM MAP */}
      < section id="system" className="bg-slate-50 border-y border-slate-200 py-24 relative overflow-hidden" >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.12)_1px,transparent_0)] bg-[length:32px_32px]" />
        <div ref={containerRef} className="container mx-auto px-6 relative z-10">
          <div className="mb-12">
            <SectionHeader
              subtitle="System Map"
              title="PowerPod Architecture"
              description="Every module is a standalone block. Together, they form a closed-loop hydrogen system."
            />
          </div>

          <div className="relative grid lg:grid-cols-12 gap-6 items-center">
            <div className="hidden lg:block">
              <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={coreRef} duration={3} />
              <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={coreRef} duration={3} />
              <AnimatedBeam containerRef={containerRef} fromRef={coreRef} toRef={div3Ref} duration={3} />
              <AnimatedBeam containerRef={containerRef} fromRef={coreRef} toRef={div4Ref} duration={3} />
            </div>

            <div className="lg:col-span-4">
              <FadeIn delay={0.1}>
                <div ref={div1Ref} className="relative z-10 h-full bg-white">
                  <ProductModule
                    name="PowerPack"
                    tag="Electrolyzers"
                    specs="200kW / 500kW Variants"
                    desc="High-efficiency PEM stacks designed for 24/7 industrial production. Turns water and power into gas."
                  />
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-4">
              <FadeIn delay={0.2}>
                <div ref={coreRef} className="bg-slate-950 text-white border border-slate-800 p-8 md:p-10 shadow-2xl relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl" />
                  <HUDLabel color="emerald">PowerPod Core</HUDLabel>
                  <h3 className="text-3xl font-bold tracking-tight mt-4">Energy Orchestration</h3>
                  <p className="text-sm text-slate-300 mt-4">
                    Unified control stack coordinating production, storage, compression, and dispatch across modules.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-slate-400 font-mono uppercase tracking-widest">
                    <div>PLC Control</div>
                    <div>Remote SCADA</div>
                    <div>Redundant Safety</div>
                    <div>Telemetry API</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-4">
              <FadeIn delay={0.3}>
                <div ref={div2Ref} className="relative z-10 h-full bg-white">
                  <ProductModule
                    name="PowerBank"
                    tag="H2 Storage"
                    specs="300kg+ Capacity"
                    desc="Low-pressure containment arrays with multi-stage compression and monitoring. Stores energy indefinitely without degradation."
                  />
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-10">
            <FadeIn delay={0.35}>
              <div ref={div3Ref} className="relative z-10 h-full bg-white">
                <ProductModule
                  name="PowerOnDemand"
                  tag="Fuel Cells"
                  specs="60kW / 300kW Output"
                  desc="Modular fuel cell units that convert stored hydrogen back to electricity with zero latency. Seamless backup power."
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div ref={div4Ref} className="relative z-10 h-full bg-white">
                <ProductModule
                  name="Fueling Module"
                  tag="Dispensing"
                  specs="350 / 700 Bar"
                  desc="Industrial-grade dispensing systems for onsite heavy-duty fleets and equipment. Fill a forklift in 3 minutes."
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================
          TECHNOLOGY DEEP DIVES
          ============================================================ */}

      {/* BIOMASS GASIFICATION */}
      <section className="bg-white py-24 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <HUDLabel color="slate">Biomass Gasification</HUDLabel>
              <h3 className="text-3xl font-bold text-slate-950 mt-4 mb-6">Waste to Synthesis Gas</h3>
              <p className="text-slate-600 mb-6">
                Optional gasifier module converts agricultural waste, wood chips, or anaerobic digester biogas into synthesis gas (CO + H₂). The biochar byproduct is a carbon-negative soil amendment.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 font-mono text-sm mb-6">
                <p className="text-orange-800 font-bold mb-2">Process Chemistry</p>
                <p className="text-orange-700">Biomass + Heat → CO + H₂ + CO₂ + Biochar</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">• Feedstock: Manure, woodchips, pomace, corn stover</li>
                <li className="flex gap-3">• Output: Syngas for H₂ production or direct combustion</li>
                <li className="flex gap-3">• Byproduct: Biochar → soil carbon sequestration</li>
              </ul>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-10">
              <div className="text-xs font-mono uppercase tracking-widest text-orange-400 mb-4">Gasifier Module</div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-400 text-xs font-mono">Temp Range</p>
                  <p className="text-2xl font-bold">700-900°C</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-mono">Throughput</p>
                  <p className="text-2xl font-bold">500 kg/day</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-mono">Efficiency</p>
                  <p className="text-2xl font-bold">75-85%</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-mono">Biochar Yield</p>
                  <p className="text-2xl font-bold">15-20%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ELECTROLYSIS */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-blue-900 text-white rounded-xl p-10">
                <div className="text-xs font-mono uppercase tracking-widest text-blue-300 mb-4">PEM Electrolyzer</div>
                <div className="text-center py-8">
                  <p className="text-4xl font-bold font-mono">2H₂O(l) → 2H₂(g) + O₂(g)</p>
                  <p className="text-blue-300 text-sm mt-4">Proton Exchange Membrane Electrolysis</p>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div>
                    <p className="text-blue-300 text-xs font-mono">Output</p>
                    <p className="text-xl font-bold">30-225 kg/day</p>
                  </div>
                  <div>
                    <p className="text-blue-300 text-xs font-mono">Purity</p>
                    <p className="text-xl font-bold">99.999%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <HUDLabel color="emerald">Water Electrolysis</HUDLabel>
              <h3 className="text-3xl font-bold text-slate-950 mt-4 mb-6">Electricity to Hydrogen</h3>
              <p className="text-slate-600 mb-6">
                High-efficiency PEM electrolyzers split purified water into hydrogen and oxygen using renewable electricity. Dynamic load-following enables integration with intermittent solar and wind.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">• Load following: 10-100% capacity in seconds</li>
                <li className="flex gap-3">• Water consumption: ~9 L per kg H₂</li>
                <li className="flex gap-3">• Power input: 50-55 kWh per kg H₂</li>
                <li className="flex gap-3">• Oxygen byproduct: Available for industrial use</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPRESSION & STORAGE */}
      <section className="bg-white py-24 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <HUDLabel color="slate">Compression & Storage</HUDLabel>
              <h3 className="text-3xl font-bold text-slate-950 mt-4 mb-6">Long-Duration Energy Storage</h3>
              <p className="text-slate-600 mb-6">
                Multi-stage compressors boost hydrogen from electrolyzer output (30 bar) to storage pressure (350-700 bar). Unlike batteries, stored hydrogen maintains capacity indefinitely with zero degradation.
              </p>
              <div className="bg-slate-100 border border-slate-200 rounded-lg p-6 font-mono text-sm mb-6">
                <p className="text-slate-700 font-bold mb-2">Storage Advantage</p>
                <p className="text-slate-600">0% degradation over time vs. 2-3%/year for Li-ion</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">• Compression: 30 bar → 350/700 bar</li>
                <li className="flex gap-3">• Tank materials: Carbon fiber composite (Type IV)</li>
                <li className="flex gap-3">• Monitoring: Real-time pressure, temp, leak detection</li>
              </ul>
            </div>
            <div className="bg-slate-900 text-white rounded-xl p-10">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">PowerBank Storage</div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-400 text-xs font-mono">Capacity</p>
                  <p className="text-2xl font-bold">300+ kg H₂</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-mono">Pressure</p>
                  <p className="text-2xl font-bold">350-700 bar</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-mono">Equivalent</p>
                  <p className="text-2xl font-bold">~5 MWh</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-mono">Degradation</p>
                  <p className="text-2xl font-bold text-cyan-400">0%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUEL CELLS */}
      <section className="bg-cyan-900 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white/10 backdrop-blur rounded-xl p-10 border border-white/20">
                <div className="text-xs font-mono uppercase tracking-widest text-emerald-300 mb-4">Fuel Cell Reaction</div>
                <div className="text-center py-8">
                  <p className="text-3xl font-bold font-mono">2H₂ + O₂ → 2H₂O + Electricity</p>
                  <p className="text-emerald-200 text-sm mt-4">PEM Fuel Cell — 50-60% Electrical Efficiency</p>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div>
                    <p className="text-emerald-300 text-xs font-mono">Output</p>
                    <p className="text-xl font-bold">60-300 kW</p>
                  </div>
                  <div>
                    <p className="text-emerald-300 text-xs font-mono">Byproduct</p>
                    <p className="text-xl font-bold">Pure H₂O</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <HUDLabel color="emerald">Fuel Cell Power</HUDLabel>
              <h3 className="text-3xl font-bold mt-4 mb-6">Hydrogen to Electricity</h3>
              <p className="text-cyan-100 mb-6">
                PEM fuel cells convert stored hydrogen back to electricity on demand. Instant dispatch for backup power, peak shaving, or grid services. Only byproduct is pure water.
              </p>
              <ul className="space-y-3 text-sm text-emerald-200">
                <li className="flex gap-3">• Dispatch time: Milliseconds</li>
                <li className="flex gap-3">• Runtime: Limited only by H₂ supply</li>
                <li className="flex gap-3">• Emissions: Zero (water vapor only)</li>
                <li className="flex gap-3">• Combined heat+power efficiency: 80%+</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DISPENSING */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <HUDLabel color="slate">Dispensing</HUDLabel>
              <h3 className="text-3xl font-bold text-slate-950 mt-4 mb-6">Fast-Fill Refueling</h3>
              <p className="text-slate-600 mb-6">
                Industrial-grade dispensers deliver hydrogen to vehicles and equipment at 350 or 700 bar. SAE J2601 compliant for temperature-compensated fast fills.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">• Forklift refuel: 3 minutes</li>
                <li className="flex gap-3">• Heavy-duty vehicle: 5-10 minutes</li>
                <li className="flex gap-3">• Protocol: SAE J2601 / ISO 19880-1</li>
                <li className="flex gap-3">• Safety: Breakaway couplings, leak detection</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">Low Pressure</p>
                <p className="text-3xl font-bold text-slate-900">350 bar</p>
                <p className="text-xs text-slate-500 mt-2">Forklifts, light duty</p>
              </div>
              <div className="bg-slate-900 text-white rounded-xl p-6 text-center">
                <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">High Pressure</p>
                <p className="text-3xl font-bold">700 bar</p>
                <p className="text-xs text-slate-400 mt-2">Trucks, buses, cars</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTROL & INTEGRATION */}
      <section className="bg-slate-950 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <HUDLabel color="emerald">Control & Integration</HUDLabel>
            <h3 className="text-3xl font-bold mt-4">Industrial-Grade Automation</h3>
            <p className="text-slate-400 max-w-2xl mx-auto mt-4">
              Every PowerPod ships with enterprise-grade controls for safe, autonomous, and remotely-monitored operation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h4 className="font-bold text-lg mb-4">PLC & HMI</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Allen-Bradley / Siemens PLCs</li>
                <li>• Touchscreen HMI panels</li>
                <li>• Automated sequencing</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h4 className="font-bold text-lg mb-4">Remote SCADA</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• 24/7 cloud monitoring</li>
                <li>• Cellular + Ethernet</li>
                <li>• OPC-UA / Modbus TCP</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h4 className="font-bold text-lg mb-4">Safety Systems</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Redundant interlocks</li>
                <li>• H₂ leak detection</li>
                <li>• Emergency shutdown (ESD)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS TABLE */}
      < section id="specs" className="bg-white py-24" >
        <div className="container mx-auto px-6">
          <HUDLabel color="slate">System Specification Sheet</HUDLabel>

          <div className="bg-white border border-slate-200 p-8 md:p-12 overflow-x-auto shadow-xl mt-8">
            <table className="w-full text-left font-mono text-xs uppercase tracking-widest text-slate-500">
              <thead className="border-b-2 border-slate-950 text-slate-950">
                <tr>
                  <th className="pb-4 pt-2 pl-4">Metric</th>
                  <th className="pb-4 pt-2">Standard Unit</th>
                  <th className="pb-4 pt-2">Operational Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="group hover:bg-slate-50 transition-colors">
                  <td className="py-4 pl-4 font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">H2 Production</td>
                  <td className="py-4 text-cyan-600">90 - 225 kg/day</td>
                  <td className="py-4 text-slate-400">Variable Load</td>
                </tr>
                <tr className="group hover:bg-slate-50 transition-colors">
                  <td className="py-4 pl-4 font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">Purity</td>
                  <td className="py-4 text-cyan-600">99.999%</td>
                  <td className="py-4 text-slate-400">ISO 14687-2</td>
                </tr>
                <tr className="group hover:bg-slate-50 transition-colors">
                  <td className="py-4 pl-4 font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">Water Input</td>
                  <td className="py-4 text-cyan-600">Deionized</td>
                  <td className="py-4 text-slate-400">~2 gal/kg H2</td>
                </tr>
                <tr className="group hover:bg-slate-50 transition-colors">
                  <td className="py-4 pl-4 font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">Pressure Output</td>
                  <td className="py-4 text-cyan-600">30 Bar</td>
                  <td className="py-4 text-slate-400">Compressible to 700 Bar</td>
                </tr>
                <tr className="group hover:bg-slate-50 transition-colors">
                  <td className="py-4 pl-4 font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">Footprint</td>
                  <td className="py-4 text-cyan-600">20' ISO Container</td>
                  <td className="py-4 text-slate-400">Modular Stackable</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button className="h-14 px-10 bg-slate-950 text-white hover:bg-cyan-600 text-xs font-bold uppercase tracking-[0.2em] rounded-sm shadow-xl transition-all">
                Request Engineering Drawings
              </Button>
            </Link>
          </div>
        </div>
      </section >
    </div >
  );
}
