"use client";

import {
    Wallet,
    Wind,
    Factory,
    ShieldCheck,
    Leaf,
    BarChart3
} from "lucide-react";

export default function Benefits() {
    return (
        <div className="pt-32 pb-24 bg-white animate-in slide-in-from-right-8 duration-500 font-raleway">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 uppercase tracking-widest">Benefits</h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
                        Operational superiority, safety, and future-proofing your business.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {[
                        { icon: Wallet, title: "Financial Dominance", desc: "Lower stable energy costs. Production tax credits of $3/kg turn fuel cost into profit." },
                        { icon: Wind, title: "Environmental Impact", desc: "Reduce carbon footprint. Monetize carbon credits and meet ESG goals immediately." },
                        { icon: Factory, title: "Modular Flexibility", desc: "Plug and play units allow you to configure generation and storage exactly to needs." },
                        { icon: ShieldCheck, title: "Energy Security", desc: "Become an island. If the grid goes down, your operations continue." },
                        { icon: Leaf, title: "Indoor Health", desc: "Emit only water. Eliminate toxic battery acid fumes and improve indoor air quality." },
                        { icon: BarChart3, title: "Asset Utilization", desc: "Reclaim square footage used for battery charging rooms and reduce fleet size." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-sm hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 bg-white text-emerald-600 rounded-sm flex items-center justify-center mb-6 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-wide">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
