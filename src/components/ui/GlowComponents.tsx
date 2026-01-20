"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlowButtonProps {
    href: string;
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "default" | "lg";
    className?: string;
}

export function GlowButton({
    href,
    children,
    variant = "primary",
    size = "default",
    className = "",
}: GlowButtonProps) {
    const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 overflow-hidden";

    const sizeStyles = {
        default: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base",
    };

    const variantStyles = {
        primary: "bg-primary text-primary-foreground hover:brightness-110",
        secondary: "bg-secondary text-secondary-foreground hover:brightness-110",
        outline: "border-2 border-border bg-transparent text-foreground hover:border-primary hover:text-primary",
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
        >
            {/* Glow Effect */}
            {variant !== "outline" && (
                <div
                    className={cn(
                        "absolute -inset-1 rounded-xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70",
                        variant === "primary" ? "bg-primary" : "bg-secondary"
                    )}
                />
            )}

            <Link
                href={href}
                className={cn(baseStyles, sizeStyles[size], variantStyles[variant], "relative z-10", className)}
            >
                {/* Inner Gradient Shine */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <span className="relative">{children}</span>
            </Link>
        </motion.div>
    );
}

interface GlowCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: "primary" | "secondary" | "accent";
}

export function GlowCard({ children, className = "", glowColor = "secondary" }: GlowCardProps) {
    const glowStyles = {
        primary: "group-hover:shadow-[0_0_40px_rgba(5,150,105,0.25)]",
        secondary: "group-hover:shadow-[0_0_40px_rgba(14,165,233,0.25)]",
        accent: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]",
    };

    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="group relative"
        >
            <div
                className={cn(
                    "relative bg-background border border-border rounded-xl overflow-hidden transition-all duration-300",
                    "shadow-[0_4px_24px_rgba(0,0,0,0.06)]",
                    glowStyles[glowColor],
                    className
                )}
            >
                {/* Top Gradient Border */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-primary/50 transition-colors duration-300" />

                {children}
            </div>
        </motion.div>
    );
}
