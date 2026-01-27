import { cn } from "@/lib/utils";

interface HUDLabelProps {
    children: React.ReactNode;
    color?: "emerald" | "blue" | "slate";
    className?: string;
}

export function HUDLabel({ children, color = "emerald", className }: HUDLabelProps) {
    const colorMap = {
        emerald: "bg-primary text-primary",
        blue: "bg-accent text-accent",
        slate: "bg-slate-500 text-slate-500",
    };

    const textColorMap = {
        emerald: "text-primary",
        blue: "text-accent",
        slate: "text-slate-500",
    };

    const indicatorColorMap = {
        emerald: "bg-primary",
        blue: "bg-accent",
        slate: "bg-slate-500"
    };

    return (
        <div className={cn("flex items-center gap-3 mb-6", className)}>
            <div className={cn("w-10 h-px", indicatorColorMap[color])} />
            <span className={cn("font-mono text-[10px] font-bold uppercase tracking-[0.4em]", textColorMap[color])}>
                {children}
            </span>
        </div>
    );
}
