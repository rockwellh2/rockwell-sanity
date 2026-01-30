"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export function HomeShader() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax effect: The shader container drifts slightly up as we scroll down
    const yRange = useTransform(scrollY, [0, 500], [0, -100]);
    const opacityRange = useTransform(scrollY, [0, 800], [1, 0]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        // Simplex-ish noise helper (simplified for caustics)
        // Uses a simple sine summation for efficiency
        const noise = (x: number, y: number, t: number) => {
            return (
                Math.sin(x * 0.01 + t * 0.5) * Math.cos(y * 0.01 + t * 0.3) * 0.5 +
                Math.sin(x * 0.02 - t * 0.2) * Math.cos(y * 0.02 + t * 0.4) * 0.25
            );
        };

        const render = () => {
            if (!canvas || !ctx) return;

            // Check for reduced motion
            const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            if (mediaQuery.matches) return;

            // Dimensions
            const width = canvas.width;
            const height = canvas.height;

            ctx.clearRect(0, 0, width, height);

            time += 0.01; // Slower time step for "slow caustic ripples"

            // Draw Caustic Field
            // We'll draw a grid of points displaced by noise
            const gridSize = 40; // Match global grid size roughly
            const cols = Math.ceil(width / gridSize) + 1;
            const rows = Math.ceil(height / gridSize) + 1;

            ctx.strokeStyle = "rgba(16, 185, 129, 0.08)"; // Very faint emerald
            ctx.lineWidth = 1;

            // Draw vertical distorted lines
            for (let i = 0; i < cols; i++) {
                ctx.beginPath();
                for (let j = 0; j < rows; j++) {
                    const x = i * gridSize;
                    const y = j * gridSize;

                    const distortionX = noise(x, y, time) * 20;
                    const distortionY = noise(x + 1000, y + 1000, time) * 20;

                    if (j === 0) ctx.moveTo(x + distortionX, y + distortionY);
                    else ctx.lineTo(x + distortionX, y + distortionY);
                }
                ctx.stroke();
            }

            // Draw horizontal distorted lines
            for (let j = 0; j < rows; j++) {
                ctx.beginPath();
                for (let i = 0; i < cols; i++) {
                    const x = i * gridSize;
                    const y = j * gridSize;

                    const distortionX = noise(x, y, time) * 20;
                    const distortionY = noise(x + 1000, y + 1000, time) * 20;

                    if (i === 0) ctx.moveTo(x + distortionX, y + distortionY);
                    else ctx.lineTo(x + distortionX, y + distortionY);
                }
                ctx.stroke();
            }

            // Add subtle "interference" particles
            ctx.fillStyle = "rgba(5, 150, 105, 0.2)"; // cyan-600
            for (let k = 0; k < 20; k++) {
                const x = (width * 0.5) + Math.cos(time * 0.2 + k) * (width * 0.4);
                const y = (height * 0.5) + Math.sin(time * 0.3 + k) * (height * 0.4);
                const size = (Math.sin(time + k) + 1) * 2;

                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        const handleResize = () => {
            if (containerRef.current && canvas) {
                canvas.width = containerRef.current.offsetWidth;
                canvas.height = containerRef.current.offsetHeight;
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <motion.div
            ref={containerRef}
            className="home-shader absolute inset-0 -z-10 bg-white overflow-hidden pointer-events-none"
            style={{ y: yRange, opacity: opacityRange }}
        >
            {/* Base static grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />

            {/* The canvas handles the waving/caustic layer */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-60 mix-blend-multiply"
            />

            {/* Vignette for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80" />
        </motion.div>
    );
}
