"use client";

import { User } from "lucide-react";

export function EngineerProfile({ name, role, id, phone }: { name: string, role: string, id: string, phone: string }) {
    return (
        <div className="flex gap-6 p-6 bg-white border border-slate-200 hover:shadow-xl transition-all duration-500 group">
            {/* ID Badge Photo Placeholder */}
            <div className="w-24 h-32 bg-slate-100 border border-slate-200 shrink-0 flex items-center justify-center relative overflow-hidden">
                <User className="text-slate-300" size={40} />
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
                <div className="absolute bottom-2 right-2 font-mono text-[8px] text-slate-400 rotate-0">NO PHOTO</div>
            </div>

            <div className="flex flex-col justify-between py-1">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            ID: {id}
                        </span>
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">
                        {name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-4">
                        {role}
                    </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                    <p className="text-xs font-mono text-slate-500">
                        DIR: {phone}
                    </p>
                </div>
            </div>
        </div>
    );
}
