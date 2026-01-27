import { HUDLabel } from "./HUDLabel";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle: string;
    description?: string;
    dark?: boolean;
    className?: string;
}

export function SectionHeader({ title, subtitle, description, dark = false, className }: SectionHeaderProps) {
    return (
        <div className={cn("mb-20 max-w-4xl", className)}>
            <HUDLabel color={dark ? "emerald" : "emerald"}>{subtitle}</HUDLabel>
            <h2 className={cn(
                "text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]",
                dark ? "text-white" : "text-slate-950"
            )}>
                {title}
            </h2>
            {description && (
                <p className={cn(
                    "text-xl leading-relaxed max-w-2xl",
                    dark ? "text-slate-400" : "text-slate-500"
                )}>
                    {description}
                </p>
            )}
        </div>
    );
}
