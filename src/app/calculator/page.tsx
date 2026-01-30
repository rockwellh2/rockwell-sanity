"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    DollarSign,
    Clock,
    Leaf,
    Calculator as CalculatorIcon,
    Droplets,
    Zap,
    Car,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CalculatorResults {
    annualSavings: number;
    roiYears: number;
    co2Avoided: number;
    taxCredits: number;
    carbonCreditValue: number;
}

export default function Calculator() {
    const [formData, setFormData] = useState({
        monthlyEnergyCost: 35000,
        renewableGeneration: 20000,
        hydrogenVehicles: 10,
        hydrogenOutput: 100,
    });

    const [results, setResults] = useState<CalculatorResults | null>(null);
    const [showResults, setShowResults] = useState(false);

    const handleInputChange = (field: string, value: string) => {
        const numValue = parseFloat(value) || 0;
        setFormData((prev) => ({ ...prev, [field]: numValue }));
    };

    const calculateSavings = () => {
        // Simplified calculation logic
        const annualEnergyCost = formData.monthlyEnergyCost * 12;
        const hydrogenProductionValue = formData.hydrogenOutput * 365 * 5; // $5/kg approximate value
        const taxCreditAmount = formData.hydrogenOutput * 365 * 3; // $3/kg tax credit
        const fossilFuelSavings = annualEnergyCost * 0.4; // 40% savings assumption

        const annualSavings = fossilFuelSavings + taxCreditAmount + hydrogenProductionValue * 0.3;
        const roiYears = Math.round((annualEnergyCost * 2.5) / annualSavings * 10) / 10;
        const co2Avoided = Math.round(formData.hydrogenOutput * 365 * 0.014); // ~14kg CO2 per kg H2
        const carbonCreditValue = co2Avoided * 60; // $60 per ton CO2

        setResults({
            annualSavings: Math.round(annualSavings),
            roiYears,
            co2Avoided,
            taxCredits: Math.round(taxCreditAmount),
            carbonCreditValue: Math.round(carbonCreditValue),
        });
        setShowResults(true);
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(value);
    };

    const formatNumber = (value: number) => {
        return new Intl.NumberFormat('en-US').format(value);
    };

    return (
        <div className="min-h-screen pt-16 lg:pt-20">
            {/* Hero Section */}
            <section className="relative py-12 lg:py-20 overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] leading-tight mb-4 text-balance">
                                Hydrogen Savings & ROI Calculator
                            </h1>
                            <p className="text-lg text-gray-600 mb-6 max-w-xl">
                                See how much you can save by switching to green hydrogen solutions.
                            </p>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-[#2E7D32] hover:bg-[#246b27] text-white px-6"
                                >
                                    Get Started
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="relative rounded-xl overflow-hidden shadow-2xl">
                                <img
                                    src="/hero-calculator.jpg"
                                    alt="Hydrogen facility with financial charts"
                                    className="w-full h-[300px] lg:h-[400px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/20 to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Calculator Section */}
            <section className="py-12 lg:py-16 bg-[#F5F7FA]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A5F]">
                            Estimate Your Cost Savings & ROI
                        </h2>
                    </motion.div>

                    {/* Input Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl shadow-lg p-6 lg:p-8 mb-8"
                    >
                        <h3 className="text-xl font-semibold text-[#1E3A5F] mb-6">
                            Enter Your Info
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="monthlyCost" className="text-gray-700 font-medium">
                                    Current Monthly Energy Cost
                                </Label>
                                <p className="text-xs text-gray-500">(electricity/diesel)</p>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="monthlyCost"
                                        type="number"
                                        value={formData.monthlyEnergyCost}
                                        onChange={(e) => handleInputChange('monthlyEnergyCost', e.target.value)}
                                        className="pl-10 h-12"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="renewableGen" className="text-gray-700 font-medium">
                                    Average Monthly Renewable Energy
                                </Label>
                                <p className="text-xs text-gray-500">Generation (kWh)</p>
                                <div className="relative">
                                    <Zap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="renewableGen"
                                        type="number"
                                        value={formData.renewableGeneration}
                                        onChange={(e) => handleInputChange('renewableGeneration', e.target.value)}
                                        className="pl-10 h-12"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="vehicles" className="text-gray-700 font-medium">
                                    Number of Hydrogen-Powered Vehicles
                                </Label>
                                <p className="text-xs text-gray-500">(forklifts, trucks, etc.)</p>
                                <div className="relative">
                                    <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="vehicles"
                                        type="number"
                                        value={formData.hydrogenVehicles}
                                        onChange={(e) => handleInputChange('hydrogenVehicles', e.target.value)}
                                        className="pl-10 h-12"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="h2Output" className="text-gray-700 font-medium">
                                    Desired Hydrogen Output
                                </Label>
                                <p className="text-xs text-gray-500">(kg/day)</p>
                                <div className="relative">
                                    <Droplets className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="h2Output"
                                        type="number"
                                        value={formData.hydrogenOutput}
                                        onChange={(e) => handleInputChange('hydrogenOutput', e.target.value)}
                                        className="pl-10 h-12"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <Button
                                size="lg"
                                onClick={calculateSavings}
                                className="bg-[#2E7D32] hover:bg-[#246b27] text-white px-12"
                            >
                                <CalculatorIcon className="mr-2 w-5 h-5" />
                                Calculate Savings
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>

                        <p className="text-xs text-gray-500 text-center mt-4">
                            *Approximate savings based on current federal incentives and market data. For informational purposes only.
                        </p>
                    </motion.div>

                    {/* Results Section */}
                    {showResults && results && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-xl font-semibold text-[#1E3A5F] mb-6">
                                Estimated Savings & ROI
                            </h3>

                            <div className="grid sm:grid-cols-3 gap-4 mb-6">
                                <div className="bg-[#2E7D32] rounded-xl p-6 text-white text-center">
                                    <DollarSign className="w-8 h-8 mx-auto mb-2 opacity-80" />
                                    <div className="text-3xl lg:text-4xl font-bold mb-1">
                                        {formatCurrency(results.annualSavings)}
                                    </div>
                                    <div className="text-sm opacity-90">Annual Cost Savings</div>
                                    <p className="text-xs opacity-70 mt-2">
                                        Calculated savings from displaced fossil fuels and tax credits.
                                    </p>
                                </div>

                                <div className="bg-[#1E3A5F] rounded-xl p-6 text-white text-center">
                                    <Clock className="w-8 h-8 mx-auto mb-2 opacity-80" />
                                    <div className="text-3xl lg:text-4xl font-bold mb-1">
                                        {results.roiYears} years
                                    </div>
                                    <div className="text-sm opacity-90">Return on Investment</div>
                                    <p className="text-xs opacity-70 mt-2">
                                        Estimated time to achieve ROI from investment in hydrogen system.
                                    </p>
                                </div>

                                <div className="bg-[#4FC3F7] rounded-xl p-6 text-[#1E3A5F] text-center">
                                    <Leaf className="w-8 h-8 mx-auto mb-2 opacity-80" />
                                    <div className="text-3xl lg:text-4xl font-bold mb-1">
                                        {formatNumber(results.co2Avoided)} / year
                                    </div>
                                    <div className="text-sm opacity-90">CO₂ Emissions Avoided</div>
                                    <p className="text-xs opacity-70 mt-2">
                                        Calculated reduction in carbon emissions through green hydrogen.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-2xl font-bold text-[#2E7D32] mb-1">
                                            {formatCurrency(results.taxCredits)} / year
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Estimated tax credits: {formatCurrency(results.taxCredits)} / year for {formData.hydrogenOutput} kg/day of green hydrogen
                                        </p>
                                    </div>
                                    <div>
                                        <div className="text-lg font-semibold text-[#1E3A5F] mb-1">
                                            Estimated carbon credit value:
                                        </div>
                                        <div className="text-xl font-bold text-[#2E7D32]">
                                            {formatCurrency(results.carbonCreditValue)} / year
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            from avoided emissions and hydrogen production.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A5F] mb-4">
                            Maximize Your Savings With Green Hydrogen.
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Schedule a detailed feasibility study to explore the full potential of hydrogen energy for your business.
                        </p>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="bg-[#2E7D32] hover:bg-[#246b27] text-white px-12"
                            >
                                Contact Us
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
