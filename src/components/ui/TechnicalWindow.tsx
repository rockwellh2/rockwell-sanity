import { cn } from "@/lib/utils";

interface TechnicalWindowProps {
    children: React.ReactNode;
    title?: string;
    modId?: string;
    className?: string;
}

export function TechnicalWindow({ children, title, modId = "SYS_01", className }: TechnicalWindowProps) {
    return (
        <div className={cn("blueprint-card p-1", className)}>
            <div className="blueprint-card-inner h-full p-8 md:p-12 relative">
                {/* Identifier Label */}
                <div className="absolute top-4 right-4 font-mono text-[10px] text-slate-300 font-bold tracking-widest uppercase">
                    MOD_ID: {modId}
                </div>

                {/* Decorative corner bracket top-left */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-slate-300" />
                {/* Decorative corner bracket bottom-right */}
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-slate-300" />

                {title && (
                    <h3 className="text-xl font-bold mb-6 text-slate-950">{title}</h3>
                )}

                {children}
            </div>
        </div>
    );
}
