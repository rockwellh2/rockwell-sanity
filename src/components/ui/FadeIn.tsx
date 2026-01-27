"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
}

export function FadeIn({ children, delay = 0, className, direction = "up" }: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const directionOffset = {
        up: 20,
        down: -20,
        left: 20,
        right: -20,
    };

    const axis = direction === "left" || direction === "right" ? "x" : "y";

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, [axis]: directionOffset[direction] }}
            animate={isInView ? { opacity: 1, [axis]: 0 } : { opacity: 0, [axis]: directionOffset[direction] }}
            transition={{
                duration: 0.5,
                delay: delay,
                ease: "easeOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerChildren({ children, className, staggerDelay = 0.1 }: { children: React.ReactNode, className?: string, staggerDelay?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function FadeInItem({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
