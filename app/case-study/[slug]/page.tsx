'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GradientTitle from '@/components/typography/GradientTitle';
import BodyText from '@/components/typography/BodyText';
import ContentSection from '@/components/ContentSection';
import { CaseStudyItem } from '@/types/PropsTypes';
import { caseStudyData } from '@/lib/data/caseStudyData';
import { useParams } from 'next/navigation';
import OutlineBtn from '@/components/buttons/OutlineBtn';
import { FaArrowRight, FaFacebookF, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import CaseStudy from '@/components/cards/CaseStudy';


const CaseStudyDetailPage: React.FC = () => {


    const params = useParams();
    const slug = params?.slug;

    // Find the case study based on slug
    const caseStudy: CaseStudyItem | undefined = caseStudyData.find(
        (study) => study.slug === slug
    );

    // Handle loading state
    if (!slug) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <BodyText text="Loading case study..." className="text-gray-300" />
                </div>
            </div>
        );
    }

    // Handle case study not found
    if (!caseStudy) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <GradientTitle
                        text="Case Study Not Found"
                        theme="dark"
                        className="text-4xl mb-6"
                    />
                    <BodyText
                        text="The case study you're looking for doesn't exist or has been moved."
                        className="text-gray-300 mb-8"
                    />
                    <Link
                        href="/case-studies"
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                        Back to Case Studies
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Banner Section */}
            <section className="relative h-96 md:h-[550px] w-full">
                <Image
                    src={caseStudy.bannerImage}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                    priority
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

                {/* Breadcrumb */}
                {/* <div className="absolute top-8 left-4 sm:left-8 z-10">
                    <nav className="flex items-center space-x-2 text-sm text-gray-300">
                        <Link href="/" className="hover:text-white transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <Link href="/case-studies" className="hover:text-white transition-colors">
                            Case Studies
                        </Link>
                        <span>/</span>
                        <span className="text-white">{caseStudy.title}</span>
                    </nav>
                </div> */}
            </section>

            {/* Title and Meta Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <GradientTitle
                        text={caseStudy.title}
                        theme="dark"
                        className="text-4xl md:text-6xl mb-8"
                    />

                    {/* Meta Information */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-8 border-b border-gray-800">
                        <div className="flex items-center space-x-4 text-gray-400 mb-4 sm:mb-0">
                            <span>By {caseStudy.author}</span>
                            <span>•</span>
                            <span>{caseStudy.date}</span>
                        </div>

                        {/* Social Share Buttons */}
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-400 text-sm">Share:</span>
                            <button className="text-gray-400 hover:text-white transition-colors">

                                <FaXTwitter className='w-5 h-5 cursor-pointer' />
                            </button>
                            <button className="text-gray-400 hover:text-white transition-colors">
                                <FaLinkedin className='w-5 h-5 cursor-pointer' />
                            </button>
                            <button className="text-gray-400 hover:text-white transition-colors">
                                <FaFacebookF className='w-5 h-5 cursor-pointer' />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <ContentSection
                        items={caseStudy.content}
                        theme="dark"
                        className="space-y-12"
                        titleClassName="text-3xl md:text-4xl"
                        textClassName="text-base md:text-lg text-gray-300 leading-relaxed"
                    />
                </div>
            </section>

            {/* Related Case Studies */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#131313]">
                <div className="max-w-6xl mx-auto">
                    <GradientTitle
                        text="Other Case Studies"
                        theme="dark"
                        className="text-3xl md:text-4xl mb-12 text-center"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {caseStudyData
                            .filter(study => study.slug !== slug)
                            .slice(0, 2)
                            .map((study) => (
                                // <Link
                                //     key={study.id}
                                //     href={`/case-study/${study.slug}`}
                                //     className="group block"
                                // >
                                //     <div className="bg-black rounded-lg overflow-hidden hover:bg-gray-800 transition-colors duration-300">
                                //         <div className="relative h-48">
                                //             <Image
                                //                 src={study.imageUrl}
                                //                 alt={study.title}
                                //                 fill
                                //                 className="object-cover group-hover:scale-105 transition-transform duration-300"
                                //             />
                                //         </div>
                                //         <div className="p-6">
                                //             <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                //                 {study.title}
                                //             </h3>
                                //             <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                                //                 {study.description}
                                //             </p>
                                //             <div className="flex items-center text-xs text-gray-400">
                                //                 <span>by {study.author}</span>
                                //                 <span className="mx-2">•</span>
                                //                 <span>{study.date}</span>
                                //             </div>
                                //         </div>
                                //     </div>
                                // </Link>

                                <CaseStudy
                                    key={study.id}
                                    imageUrl={study.imageUrl}
                                    title={study.title}
                                    description={study.description}
                                    author={study.author}
                                    date={study.date}
                                    slug={`${study.slug}`}
                                />
                            ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <GradientTitle
                        text="Ready to Start Your Project?"
                        theme="dark"
                        className="text-3xl md:text-5xl mb-6"
                    />
                    <BodyText
                        text="Let's discuss how we can help you achieve similar results for your business."
                        className="text-lg text-gray-300 mb-8"
                    />
                    <div className='w-full flex items-center justify-center'>
                        <OutlineBtn
                            text="Get in Touch"
                            textColor="#FFFFFF"
                            icon={<FaArrowRight size={16} color="#FFFFFF" />}
                            url='/contact-us'
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyDetailPage;