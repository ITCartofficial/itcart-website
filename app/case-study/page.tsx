// pages/case-studies/index.tsx or app/case-studies/page.tsx (depending on your Next.js version)
'use client'

import React from 'react';
import GradientTitle from '@/components/atoms/typography/GradientTitle';
import BodyText from '@/components/atoms/typography/BodyText';

import CaseStudy from '@/components/molecules/cards/CaseStudy';
import { caseStudyData } from '@/lib/data/caseStudyData';

const CaseStudiesPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <GradientTitle
                        text="Our Case Studies"
                        theme="dark"
                        className="text-4xl md:text-6xl mb-8"
                    />
                    <BodyText
                        text="Discover how we've helped businesses transform their digital presence and achieve remarkable results through innovative solutions."
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    />
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudyData.map((caseStudy) => (
                            <CaseStudy
                                key={caseStudy.id}
                                imageUrl={caseStudy.imageUrl}
                                title={caseStudy.title}
                                description={caseStudy.description}
                                author={caseStudy.author}
                                date={caseStudy.date}
                                slug={caseStudy.slug}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
                <div className="max-w-4xl mx-auto text-center">
                    <GradientTitle
                        text="Ready to Start Your Success Story?"
                        theme="dark"
                        className="text-3xl md:text-5xl mb-6"
                    />
                    <BodyText
                        text="Let's discuss how we can help transform your business with innovative technology solutions."
                        className="text-lg text-gray-300 mb-8"
                    />
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                        >
                            Get Started
                        </a>
                        <a
                            href="/services"
                            className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
                        >
                            Our Services
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudiesPage;