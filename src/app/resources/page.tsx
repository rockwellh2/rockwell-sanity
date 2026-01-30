"use client";

import { motion } from 'framer-motion';
import {
    FileText,
    Download,
    Video,
    BookOpen,
    ExternalLink,
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

const resources = [
    {
        icon: FileText,
        title: 'Product Brochure',
        description: 'Complete overview of Rockwell H2 Systems products and specifications.',
        type: 'PDF',
        size: '2.4 MB',
    },
    {
        icon: FileText,
        title: 'ROI Calculator Guide',
        description: 'Learn how to estimate your savings with our hydrogen solutions.',
        type: 'PDF',
        size: '1.1 MB',
    },
    {
        icon: FileText,
        title: 'Safety Data Sheet',
        description: 'Comprehensive safety information for hydrogen systems.',
        type: 'PDF',
        size: '856 KB',
    },
    {
        icon: FileText,
        title: 'Installation Guide',
        description: 'Step-by-step guide for PowerPod system installation.',
        type: 'PDF',
        size: '3.2 MB',
    },
];

const videos = [
    {
        title: 'Introduction to Green Hydrogen',
        duration: '5:30',
        description: 'Learn the basics of green hydrogen production and its benefits.',
    },
    {
        title: 'PowerPod System Overview',
        duration: '8:45',
        description: 'Detailed walkthrough of our modular hydrogen systems.',
    },
    {
        title: 'Customer Success Story: Vineyard Operations',
        duration: '4:20',
        description: 'See how a vineyard achieved energy independence with hydrogen.',
    },
];

const articles = [
    {
        title: 'The Future of Hydrogen in Industrial Applications',
        date: 'January 2024',
        category: 'Industry Insights',
    },
    {
        title: 'Understanding Hydrogen Tax Credits',
        date: 'December 2023',
        category: 'Financial',
    },
    {
        title: 'Hydrogen Safety Best Practices',
        date: 'November 2023',
        category: 'Safety',
    },
    {
        title: 'Comparing Hydrogen vs. Battery Storage',
        date: 'October 2023',
        category: 'Technology',
    },
];

const faqs = [
    {
        question: 'What is green hydrogen?',
        answer: 'Green hydrogen is hydrogen produced using renewable energy sources like solar or wind power to electrolyze water, resulting in zero carbon emissions during production.',
    },
    {
        question: 'How long does installation take?',
        answer: 'PowerPod systems can be installed and commissioned within 2-4 weeks, depending on site preparation and local permitting requirements.',
    },
    {
        question: 'What maintenance is required?',
        answer: 'Our systems require minimal maintenance with quarterly inspections and annual servicing. Remote monitoring is included for proactive support.',
    },
    {
        question: 'Are there financing options available?',
        answer: 'Yes, we offer various financing options including leases, power purchase agreements (PPAs), and traditional financing to fit your budget.',
    },
];

export default function Resources() {
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
                            Resources
                        </h1>
                        <p className="text-lg text-gray-600">
                            Explore our library of documents, videos, and articles to learn more about hydrogen energy solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Downloads */}
            <section className="py-12 lg:py-16 bg-[#F5F7FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A5F]">
                            Downloads
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Access product documentation and guides
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {resources.map((resource, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center mb-4">
                                    <resource.icon className="w-6 h-6 text-[#1E3A5F]" />
                                </div>
                                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">
                                    {resource.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {resource.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500">
                                        {resource.type} • {resource.size}
                                    </span>
                                    <button className="text-[#2E7D32] hover:text-[#246b27] transition-colors">
                                        <Download className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Videos */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A5F]">
                            Video Library
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Watch tutorials and customer stories
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {videos.map((video, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="group relative rounded-lg overflow-hidden bg-[#1E3A5F] aspect-video cursor-pointer"
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                        <Video className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-white font-semibold mb-1">{video.title}</h3>
                                    <p className="text-white/70 text-sm mb-2">{video.description}</p>
                                    <span className="text-white/60 text-xs">{video.duration}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Articles */}
            <section className="py-12 lg:py-16 bg-[#F5F7FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A5F]">
                            Latest Articles
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Stay informed with industry insights
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 gap-6"
                    >
                        {articles.map((article, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#2E7D32]/20 flex items-center justify-center flex-shrink-0">
                                        <BookOpen className="w-5 h-5 text-[#2E7D32]" />
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-xs text-[#2E7D32] font-medium">
                                            {article.category}
                                        </span>
                                        <h3 className="text-lg font-semibold text-[#1E3A5F] mt-1 mb-2">
                                            {article.title}
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500">{article.date}</span>
                                            <ExternalLink className="w-4 h-4 text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A5F]">
                            Frequently Asked Questions
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="p-6 bg-[#F5F7FA] rounded-lg"
                            >
                                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
