"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AuroraBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full -z-20 overflow-hidden bg-slate-950">
            {/* 1. Base Gradient (Deep Industrial Slate) */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

            {/* 2. Animated Aurora Blobs */}
            <div className="absolute inset-0 opacity-40 blur-[100px] saturate-150">
                {/* Emerald Blob (Primary) */}
                <motion.div
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -50, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                    className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-emerald-600 rounded-full mix-blend-screen"
                />

                {/* Azure Blob (Secondary) */}
                <motion.div
                    animate={{
                        x: [0, -50, 100, 0],
                        y: [0, 50, -50, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-sky-700 rounded-full mix-blend-screen"
                />

                {/* White/Mint Highlight (Interactive) */}
                <motion.div
                    animate={{
                        x: mousePosition.x * 100,
                        y: mousePosition.y * 100,
                    }}
                    transition={{
                        type: "spring",
                        damping: 50,
                        stiffness: 100,
                    }}
                    className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] bg-emerald-400 opacity-30 rounded-full mix-blend-overlay"
                />
            </div>

            {/* 3. Grid Overlay (Technical Feel) */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem',
                    maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                }}
            />

            {/* 4. Noise Grain (Texture) */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />
        </div>
    );
}
