"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Image paths - assumes images are in /public/images/hero/
const images = [
    "/images/hero/LindeForklift.png",
    "/images/hero/HydrogenTanks.png",
    "/images/hero/06_hydro-forklift.png",
];

export function HeroImageCycle() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full -z-20 pointer-events-none overflow-hidden">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={images[index]}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.3, scale: 1 }} // Low opacity to blend with background
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={images[index]}
                        alt="Hero Background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Gradient overlay to ensure text readability and blend with shader */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white/90" />
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
