"use client";

import { usePathname } from "next/navigation";
import { Ripple } from "@/components/magicui/ripple";
import { GradientShader } from "./GradientShader";
import { KineticGrid } from "@/components/ui/KineticGrid";

export function BackgroundController() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <>
            {isHome ? (
                <Ripple />
            ) : (
                <>
                    <GradientShader />
                    <KineticGrid />
                </>
            )}
        </>
    );
}
