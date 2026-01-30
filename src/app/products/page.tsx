"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Check,
    ArrowRight,
    Zap,
    Droplets,
    Battery,
    Fuel,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const powerPodData = [
    {
        module: 'PowerPod-200',
        powerCapacity: '200 kW',
        h2Output: '~30 kg/day',
        footprint: '2.3 × 44\' × 10\' × H',
        applications: [
            'Grid resilience',
            'Renewable energy storage',
            'Forklift & Commercial fleets',
            'Backup or remote power',
        ],
    },
    {
        module: 'PowerPod-500',
        powerCapacity: '500 kW',
        h2Output: '~150 kg/day',
        footprint: '2.4 × 21 × 11\' × H',
        applications: [
            'Industrial decarbonization',
            'Stackable configurations',
        ],
    },
    {
        module: 'PowerPod-1000',
        powerCapacity: '1 MW',
        h2Output: '~300 kg/day',
        footprint: '44\' × 29 × 19 × H',
        applications: [
            'Large-scale industrial',
            'Municipal applications',
            'Up to 10+ MW capacity',
        ],
    },
];

const components = [
    {
        icon: Zap,
        title: 'Electrolyzer Modules',
        features: [
            'Produce 99.999% pure hydrogen',
            'Renewable input power solar, wind, and grid',
            'Modular output scalable 250L to 10+ MW',
            'Proven PEM or Alkaline electrolyzer stacks',
            'Integrated water purification, compression and controls',
        ],
    },
    {
        icon: Droplets,
        title: 'Hydrogen Storage Tanks',
        features: [
            'High pressure, bulletproof ASME-certified multi-vessel systems',
            'Current options 700 and 10M and up on request',
            'Soluble for on-site hydrogen use or transportation',
        ],
    },
    {
        icon: Battery,
        title: 'Fuel Cell Power Modules',
        features: [
            'Hydrogen fuel cells convert H₂ into electricity',
            'Range from 200 kW to over 5 MW per Pod',
            'Packaged containerized modular design',
            'Smart controls for efficient power delivery',
        ],
    },
    {
        icon: Fuel,
        title: 'Hydrogen Fueling Station',
        features: [
            'Dispensing equipment delivers H₂ quickly and safely',
            'Pre-engineered, modular and scalable enclosures',
            'Fast refueling of FCEVs to 350 or 700 bar',
            'Ideal for fleets of forklifts, trucks, buses, and more',
        ],
    },
];

export default function Products() {
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
                                PowerPod Hydrogen Production, Storage & Power Modules
                            </h1>
                            <p className="text-lg text-gray-600 mb-6 max-w-xl">
                                Pre-engineered, scalable modules for green hydrogen production and power to meet today's energy demands.
                            </p>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-[#2E7D32] hover:bg-[#246b27] text-white px-6"
                                >
                                    View Products
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
                                    src="/hero-products.jpg"
                                    alt="PowerPod hydrogen modules"
                                    className="w-full h-[300px] lg:h-[400px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/20 to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Scalable PowerPod Modules */}
            <section className="py-12 lg:py-16 bg-[#F5F7FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A5F] mb-4">
                            Scalable PowerPod Modules
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our pre-engineered PowerPod platform offers modular solutions to produce, store, and utilize green hydrogen for any industrial or commercial application. Designed for rapid deployment and easy scalability, PowerPods combine to meet any demand from 200 kW to 10+ MW.
                        </p>
                    </motion.div>

                    {/* PowerPod Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden overflow-x-auto"
                    >
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-[#1E3A5F] hover:bg-[#1E3A5F]">
                                    <TableHead className="text-white font-semibold">Module</TableHead>
                                    <TableHead className="text-white font-semibold">Power Capacity</TableHead>
                                    <TableHead className="text-white font-semibold">H₂ Output</TableHead>
                                    <TableHead className="text-white font-semibold">Footprint (L × W × H)</TableHead>
                                    <TableHead className="text-white font-semibold">Typical Applications</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {powerPodData.map((pod, index) => (
                                    <TableRow key={index} className="hover:bg-gray-50">
                                        <TableCell className="font-semibold text-[#1E3A5F]">
                                            {pod.module}
                                        </TableCell>
                                        <TableCell className="text-gray-700">{pod.powerCapacity}</TableCell>
                                        <TableCell className="text-gray-700">{pod.h2Output}</TableCell>
                                        <TableCell className="text-gray-700">{pod.footprint}</TableCell>
                                        <TableCell>
                                            <ul className="space-y-1">
                                                {pod.applications.map((app, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                        <Check className="w-3 h-3 text-[#2E7D32] flex-shrink-0" />
                                                        {app}
                                                    </li>
                                                ))}
                                            </ul>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-8 p-6 bg-white rounded-lg shadow-md"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-1">
                                    Stackable configurations
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    For customizable storage solutions up to 10+ MW capacity and more
                                </p>
                            </div>
                            <div className="text-2xl font-bold text-[#2E7D32]">
                                Up to 10+ MW
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Key System Components */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A5F]">
                            Key System Components
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {components.map((component, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="p-6 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#4FC3F7]/20 flex items-center justify-center mb-4">
                                    <component.icon className="w-6 h-6 text-[#1E3A5F]" />
                                </div>
                                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">
                                    {component.title}
                                </h3>
                                <ul className="space-y-2">
                                    {component.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                            <Check className="w-3 h-3 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Customization Options */}
            <section className="py-12 lg:py-16 bg-[#F5F7FA]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A5F] mb-4">
                            Customization Options
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Tailor your PowerPod system to your exact needs. Rockwell H2 handles the design, permitting, installation, and commissioning from start to finish.
                        </p>
                        <div className="bg-[#2E7D32] rounded-xl p-8 text-white">
                            <h3 className="text-xl font-semibold mb-4">
                                Request a Detailed Spec Sheet
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <Button
                                        size="lg"
                                        className="bg-white text-[#2E7D32] hover:bg-gray-100 px-8"
                                    >
                                        Full Specs
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-white text-white hover:bg-white hover:text-[#2E7D32] px-8"
                                    >
                                        Commodity Values
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
