"use client";

import { useState, useEffect, useRef } from "react";
import { Wallet, Calculator, ArrowRight, Zap, Fuel } from "lucide-react";
import Link from "next/link";

// ============================================================
// ROI CALCULATOR COMPONENT
// Interactive savings estimator with animated results
// ============================================================

interface ROICalculatorProps {
    variant?: "standalone" | "embedded";
}

export function ROICalculator({ variant = "standalone" }: ROICalculatorProps) {
    const [dieselSpend, setDieselSpend] = useState(5000);
    const [fleetSize, setFleetSize] = useState(5);
    const [animatedTotal, setAnimatedTotal] = useState(0);
    const resultRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // ============================================================
    // CALCULATION LOGIC
    // Based on realistic H2 economics
    // ============================================================

    // Assumptions:
    // - $5/gal average diesel price
    // - 1 kg H2 ≈ 1 gal diesel energy equivalent (conservative)
    // - $3/kg 45V production tax credit (max tier)
    // - 30% ITC on equipment (not included in annual calc)

    const estimatedH2KgPerYear = (dieselSpend / 5) * 12; // kg/year
    const annualTaxCredit = estimatedH2KgPerYear * 3;
    const annualDieselSavings = dieselSpend * 12;
    const totalAnnualBenefit = annualTaxCredit + annualDieselSavings;

    // Animate the number counting up
    useEffect(() => {
        if (!isVisible) return;

        const duration = 1500;
        const startTime = Date.now();
        const startValue = animatedTotal;
        const endValue = totalAnnualBenefit;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

            setAnimatedTotal(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [totalAnnualBenefit, isVisible]);

    // Intersection observer for visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (resultRef.current) {
            observer.observe(resultRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className={`${variant === "standalone" ? "py-24 bg-slate-50" : ""}`}>
            <div className={`${variant === "standalone" ? "max-w-4xl mx-auto px-6" : ""}`}>
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">

                    {/* Header */}
                    <div className="bg-slate-900 p-8 text-white text-center">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <Calculator className="text-green-400" size={24} />
                            <span className="text-sm font-bold uppercase tracking-widest text-slate-400">ROI Calculator</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Estimate Your Savings & Credits</h2>
                        <p className="text-slate-400">See how the numbers stack up for your operation.</p>
                    </div>

                    {/* Calculator Body */}
                    <div className="p-8 grid md:grid-cols-2 gap-12">

                        {/* Left: Inputs */}
                        <div className="space-y-8">

                            {/* Diesel Spend Slider */}
                            <div>
                                <label className="block font-bold text-slate-700 mb-2">
                                    Monthly Diesel/Fuel Spend
                                </label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="range"
                                        min="1000"
                                        max="50000"
                                        step="500"
                                        value={dieselSpend}
                                        onChange={(e) => setDieselSpend(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                                    />
                                    <div className="bg-slate-100 px-4 py-2 rounded font-bold min-w-[120px] text-center border border-slate-200">
                                        ${dieselSpend.toLocaleString()}
                                    </div>
                                </div>
                            </div>

                            {/* Fleet Size Slider */}
                            <div>
                                <label className="block font-bold text-slate-700 mb-2">
                                    Number of Vehicles / Equipment
                                </label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="range"
                                        min="1"
                                        max="50"
                                        step="1"
                                        value={fleetSize}
                                        onChange={(e) => setFleetSize(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                                    />
                                    <div className="bg-slate-100 px-4 py-2 rounded font-bold min-w-[120px] text-center border border-slate-200">
                                        {fleetSize} units
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <div className="flex items-center gap-2 text-blue-600 mb-1">
                                        <Fuel size={16} />
                                        <span className="text-xs font-bold uppercase">Est. H2 Needed</span>
                                    </div>
                                    <p className="text-lg font-bold text-slate-900">
                                        {Math.round(estimatedH2KgPerYear).toLocaleString()} kg/yr
                                    </p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <div className="flex items-center gap-2 text-orange-600 mb-1">
                                        <Zap size={16} />
                                        <span className="text-xs font-bold uppercase">Daily Output</span>
                                    </div>
                                    <p className="text-lg font-bold text-slate-900">
                                        {Math.round(estimatedH2KgPerYear / 365)} kg/day
                                    </p>
                                </div>
                            </div>

                            <p className="text-xs text-slate-400 italic">
                                *Estimates based on $5.00/gal diesel and full utilization of IRA Section 45V credits.
                            </p>
                        </div>

                        {/* Right: Results */}
                        <div
                            ref={resultRef}
                            className="bg-green-50 rounded-xl p-8 border border-green-100 flex flex-col justify-center relative overflow-hidden"
                        >
                            {/* Background Icon */}
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Wallet size={120} className="text-green-600" />
                            </div>

                            <div className="relative z-10">
                                <p className="text-green-800 font-bold uppercase tracking-wider text-xs mb-1">
                                    Est. Annual Benefit
                                </p>
                                <p className="text-4xl lg:text-5xl font-extrabold text-green-700 mb-6">
                                    ${animatedTotal.toLocaleString()}
                                </p>

                                {/* Breakdown */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-600">Fuel Savings</span>
                                        <span className="font-bold text-slate-900">${annualDieselSavings.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-600">Tax Credits (45V)</span>
                                        <span className="font-bold text-green-600">+ ${annualTaxCredit.toLocaleString()}</span>
                                    </div>
                                    <div className="border-t border-green-200 pt-3 flex justify-between text-sm">
                                        <span className="text-slate-600">10-Year Total</span>
                                        <span className="font-bold text-green-700">${(totalAnnualBenefit * 10).toLocaleString()}</span>
                                    </div>
                                </div>

                                <Link
                                    href="/contact"
                                    className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                                >
                                    Get Full Analysis Report <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ROICalculator;
