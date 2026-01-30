"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Factory,
    Tractor,
    Building2,
    Truck,
    Check,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

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

const useCases = [
    {
        icon: Factory,
        title: 'Industrial Decarbonization',
        description: 'Manufacturing facilities are reducing their carbon footprint by replacing fossil fuel-based processes with clean hydrogen power.',
        benefits: [
            'Reduce Scope 1 and 2 emissions',
            'Meet sustainability targets',
            'Lower energy costs',
            'Improve brand reputation',
        ],
        image: '/case-study-1.jpg',
    },
    {
        icon: Tractor,
        title: 'Agriculture & Food Processing',
        description: 'Farms and food processing plants use hydrogen to power equipment and generate clean energy for operations.',
        benefits: [
            'Power irrigation systems',
            'Fuel farm vehicles',
            'Reduce operational costs',
            'Sustainable food production',
        ],
        image: '/hero-solutions.jpg',
    },
    {
        icon: Building2,
        title: 'Municipal & Government',
        description: 'Cities and government facilities are adopting hydrogen for reliable, clean power and emergency backup systems.',
        benefits: [
            'Reliable backup power',
            'Reduce municipal emissions',
            'Energy independence',
            'Public safety enhancement',
        ],
        image: '/solution-storage.jpg',
    },
    {
        icon: Truck,
        title: 'Fleet & Logistics',
        description: 'Fleet operators are transitioning to hydrogen fuel cell vehicles for longer range and faster refueling than electric.',
        benefits: [
            'Fast refueling (3-5 minutes)',
            'Extended vehicle range',
            'Lower fuel costs',
            'Zero tailpipe emissions',
        ],
        image: '/case-study-2.jpg',
    },
];

const stats = [
    { value: '100+', label: 'Successful Installations' },
    { value: '50M+', label: 'kg H₂ Produced Annually' },
    { value: '30%', label: 'Average Cost Reduction' },
    { value: '99.9%', label: 'System Uptime' },
];

export default function Industries() {
    return (
        <div className="min-h-screen pt-16 lg:pt-20">
            {/* Hero Section */}
            <section className="relative py-12 lg:py-20 overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] leading-tight mb-4 text-balance">
                            Industries & Use Cases
                        </h1>
                        <p className="text-lg text-gray-600">
                            Discover how industries are transforming their operations with Rockwell H2 Systems' green hydrogen solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 lg:py-16 bg-[#1E3A5F]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="text-center"
                            >
                                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-white/70 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-12 lg:py-16 bg-[#F5F7FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {useCases.map((useCase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Image */}
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="relative rounded-xl overflow-hidden shadow-xl">
                                        <img
                                            src={useCase.image}
                                            alt={useCase.title}
                                            className="w-full h-[300px] lg:h-[350px] object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/40 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                <useCase.icon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A5F] mb-4">
                                        {useCase.title}
                                    </h2>
                                    <p className="text-gray-600 mb-6">{useCase.description}</p>
                                    <ul className="space-y-3 mb-6">
                                        {useCase.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#2E7D32]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Check className="w-3 h-3 text-[#2E7D32]" />
                                                </div>
                                                <span className="text-gray-700">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/contact">
                                        <Button
                                            variant="outline"
                                            className="border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white"
                                        >
                                            Learn More
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A5F] mb-4">
                            See How Hydrogen Can Work for You
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Contact our team to discuss your specific use case and get a customized solution.
                        </p>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="bg-[#2E7D32] hover:bg-[#246b27] text-white px-8"
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
