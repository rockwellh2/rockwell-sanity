"use client";

import { ShieldCheck, Award, FileCheck, CheckCircle2 } from "lucide-react";

const certs = [
    {
        id: "ASME",
        label: "ASME Boiler & Pressure Vessel",
        code: "BPVC Section VIII",
        icon: ShieldCheck
    },
    {
        id: "NFPA",
        label: "Hydrogen Technologies Code",
        code: "NFPA 2",
        icon: FileCheck
    },
    {
        id: "ISO",
        label: "Quality Management",
        code: "ISO 9001:2015",
        icon: Award
    },
    {
        id: "UL",
        label: "Safety Certification",
        code: "UL Listed Components",
        icon: CheckCircle2
    }
];

export function CertificationGrid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certs.map((c) => (
                <div key={c.id} className="p-6 bg-slate-50 border border-slate-200 hover:border-cyan-500 transition-colors group">
                    <c.icon className="text-slate-400 group-hover:text-cyan-500 mb-4 transition-colors" size={24} />
                    <div className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                        {c.id}
                    </div>
                    <div className="text-sm font-bold text-slate-900 mb-2 leading-tight">
                        {c.label}
                    </div>
                    <div className="text-[10px] font-mono text-cyan-600 bg-cyan-50/50 inline-block px-2 py-1 rounded-sm">
                        {c.code}
                    </div>
                </div>
            ))}
        </div>
    );
}
