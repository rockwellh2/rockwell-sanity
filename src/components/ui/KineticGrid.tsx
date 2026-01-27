"use client";

import React, { useEffect, useRef } from 'react';

export const KineticGrid = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: 0, y: 0 });
    const scrollY = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let frame: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const handleScroll = () => {
            // Use window.scrollY directly in the draw function to catch updates
            scrollY.current = window.scrollY;
        };


        const draw = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const gap = 60;

            // Industrial Slate dot color
            ctx.fillStyle = "rgba(15, 23, 42, 0.15)";

            for (let x = 0; x < canvas.width; x += gap) {
                for (let y = 0; y < canvas.height; y += gap) {
                    const dx = x - mouse.current.x;
                    const dy = y - mouse.current.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const force = Math.max(0, (150 - dist) / 150);

                    const offsetX = dx * force * 0.1;
                    const offsetY = (dy * force * 0.1) + (scrollY.current * 0.05 % gap);

                    ctx.beginPath();
                    // Adjust y position to move with scroll parallax or just stay fixed
                    // Here we use a modulo to keep dots in a grid relative to scroll for a subtle effect
                    const drawY = (y + offsetY) % canvas.height;

                    ctx.arc(x + offsetX, drawY, 1 + force * 2, 0, Math.PI * 2);
                    ctx.fill();

                    if (force > 0.5) {
                        // Energy Emerald line color
                        ctx.strokeStyle = `rgba(16, 185, 129, ${force * 0.3})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(x + offsetX, drawY);
                        ctx.lineTo(mouse.current.x, mouse.current.y);
                        ctx.stroke();
                    }
                }
            }
            frame = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(frame);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 -z-20 pointer-events-none" />;
};
