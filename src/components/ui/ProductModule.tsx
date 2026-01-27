import { Settings } from "lucide-react";

interface ProductModuleProps {
    name: string;
    tag: string;
    specs: string;
    desc: string;
}

export function ProductModule({ name, tag, specs, desc }: ProductModuleProps) {
    return (
        <div className="bg-white border border-slate-200 p-10 hover:border-emerald-500 transition-all shadow-sm group">
            <div className="flex justify-between items-start mb-8">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 font-mono text-[9px] font-bold uppercase tracking-widest group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    {tag}
                </span>
                <Settings className="text-slate-200 group-hover:text-emerald-500 transition-colors" size={20} />
            </div>
            <h4 className="text-3xl font-bold tracking-tight mb-2 text-slate-950">{name}</h4>
            <p className="font-mono text-[10px] text-slate-400 font-bold mb-6 tracking-widest uppercase">
                {specs}
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
                {desc}
            </p>
        </div>
    );
}
