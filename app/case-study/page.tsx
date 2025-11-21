'use client'

import React, { useEffect, useState } from 'react'
import GradientTitle from '@/components/typography/GradientTitle';
import BodyText from '@/components/typography/BodyText';

import CaseStudy from '@/components/cards/CaseStudy';
import { caseStudyData } from '@/lib/data/caseStudyData';
import OutlineBtn from '@/components/buttons/OutlineBtn';
import { FaArrowRight } from 'react-icons/fa6';
import HeroBanner from '@/components/HeroBanner';



const CaseStudiesPage: React.FC = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }


    return (

        <html lang="en">
            <head>
                <title>Case Studies – iTCart</title>
                <meta name="description" content="See how iTCart delivers measurable business impact through AI, automation, and data-driven solutions. Explore real client stories and project outcomes." />
                <meta property="og:url" content={`https://itcart.ai/case-study`} />
                <link rel="canonical" href="https://itcart.ai/case-study"></link>
            </head>

            <div className="min-h-screen bg-black text-white">
                <HeroBanner
                    title="Case Studies"
                    description="Explore our case studies for in-depth insights, expert analyses, and success stories. Stay informed on how we're driving digital transformation with our comprehensive collection of client success stories."
                    ctaText="Connect with Us"
                    ctaUrl="/contact-us"
                    breadcrumbItems={[
                        { label: 'Home', url: '/' },
                        { label: 'Case Studies', url: '/case-study' }
                    ]}
                    backgroundImage="/images/case_studies/case-study-banner.png"
                />

                {/* Hero Section */}
                {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center pt-16 lg:pt-24">
                    <GradientTitle
                        text="Our Case Studies"
                        theme="dark"
                        className="text-[36px] lg:text-[64px] mb-8"
                    />
                    <BodyText
                        text="Discover how we've helped businesses transform their digital presence and achieve remarkable results through innovative solutions."
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    />
                </div>
            </section> */}

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
                <section className="md:py-20 py-10 px-4 sm:px-6 lg:px-8 bg-[#131313]">
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
                        <div className="flex  sm:flex-row gap-4 justify-center">
                            {/* <Link
                            href="/contact-us"
                            className="bg-gradient-to-r fbg-gradient-to-r from-[#29C1E2] to-white text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-white hover:to-[#29C1E2] transition-all duration-300">
                            Get Started
                        </Link> */}
                            <div

                            >
                                <OutlineBtn
                                    // showBorderaButton={changgeBtn}
                                    text="Our Services"
                                    textColor="#FFFFFF"
                                    icon={<FaArrowRight size={16} color="#FFFFFF" />}
                                    url='/services'
                                />
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        </html>


    );
};

export default CaseStudiesPage;