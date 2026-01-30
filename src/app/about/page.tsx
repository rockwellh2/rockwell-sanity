"use client";

import { motion } from 'framer-motion';
import {
    Users,
    Award,
    Target,
    TrendingUp,
} from 'lucide-react';

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

const values = [
    {
        icon: Users,
        title: 'Family-Owned',
        description: 'Over 30 years of industry experience with a commitment to personalized service.',
    },
    {
        icon: Award,
        title: 'Quality & Reliability',
        description: 'We prioritize quality in every system we design, build, and install.',
    },
    {
        icon: Target,
        title: 'Turnkey Solutions',
        description: 'From design to commissioning, we handle every aspect of your hydrogen project.',
    },
    {
        icon: TrendingUp,
        title: 'Innovation',
        description: 'Continuously advancing our technology to deliver cutting-edge solutions.',
    },
];

const milestones = [
    { year: '1993', event: 'Rockwell H2 Systems founded as a family business' },
    { year: '2005', event: 'Expanded into hydrogen fuel cell technology' },
    { year: '2015', event: 'Launched PowerPod modular hydrogen systems' },
    { year: '2020', event: 'Achieved 100+ successful installations' },
    { year: '2024', event: 'Leading provider of green hydrogen solutions in North America' },
];

export default function About() {
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
                            About Rockwell H2 Systems
                        </h1>
                        <p className="text-lg text-gray-600">
                            A family-owned company dedicated to delivering reliable, modular green hydrogen solutions for a sustainable future.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-12 lg:py-16 bg-[#F5F7FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A5F] mb-4">
                                Our Story
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Founded in 1993, Rockwell H2 Systems began as a small family business with a vision to make clean energy accessible to industries worldwide. Over three decades, we have grown into a trusted provider of modular hydrogen production, storage, and power systems.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Our commitment to quality, reliability, and personalized service has earned us the trust of clients across agriculture, manufacturing, municipal, and fleet management sectors.
                            </p>
                            <p className="text-gray-600">
                                Today, we continue to innovate and expand our solutions, helping businesses achieve energy independence while reducing their carbon footprint.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative rounded-xl overflow-hidden shadow-xl"
                        >
                            <img
                                src="/hero-home.jpg"
                                alt="Rockwell H2 Systems facility"
                                className="w-full h-[350px] object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A5F]">
                            Our Values
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="p-6 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-shadow text-center"
                            >
                                <div className="w-14 h-14 rounded-full bg-[#2E7D32]/20 flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-7 h-7 text-[#2E7D32]" />
                                </div>
                                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-12 lg:py-16 bg-[#F5F7FA]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A5F]">
                            Our Journey
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="flex items-start gap-4"
                            >
                                <div className="w-20 flex-shrink-0">
                                    <span className="text-xl font-bold text-[#2E7D32]">
                                        {milestone.year}
                                    </span>
                                </div>
                                <div className="flex-1 pb-6 border-l-2 border-[#2E7D32]/30 pl-6 relative">
                                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#2E7D32]"></div>
                                    <p className="text-gray-700">{milestone.event}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A5F]">
                            Meet Our Leadership
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Dedicated professionals committed to your success
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="text-center"
                        >
                            <div className="w-32 h-32 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center mx-auto mb-4">
                                <Users className="w-16 h-16 text-[#1E3A5F]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#1E3A5F]">Brad Rockwell</h3>
                            <p className="text-[#2E7D32] font-medium mb-2">Co-Founder & CEO</p>
                            <p className="text-gray-600 text-sm">
                                Over 30 years of experience in energy systems and hydrogen technology.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="text-center"
                        >
                            <div className="w-32 h-32 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center mx-auto mb-4">
                                <Users className="w-16 h-16 text-[#1E3A5F]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#1E3A5F]">Nick Rockwell</h3>
                            <p className="text-[#2E7D32] font-medium mb-2">Co-Founder & CTO</p>
                            <p className="text-gray-600 text-sm">
                                Leading innovation in modular hydrogen production and storage systems.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
