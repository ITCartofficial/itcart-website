'use client';
import React from 'react'
import BlogsHero from '@/components/blogs2/BlogsHero'
import OutlineBtn from '@/components/buttons/OutlineBtn'
import { FaArrowRight } from 'react-icons/fa6';
import HomeFaqSection from '@/app/(features)/home/HomeFaqSection';
import { careersFaqs } from '@/lib/data/faqsData';
import HorizontalImageSlider from '@/components/slider/HorizontalImageSlider';
import WhyWorkWithUsSection from '@/components/careers/WhyWorkWithUsSection';
import JobSection from '@/components/careers/JobSection';
import WhoWeAre from '@/components/careers/WhoWeAre';



const Careers: React.FC = () => {
    return (
        <>
            <section className="w-full bg-black text-white mt-20 md:mt-35 space-y-15 lg:space-y-25">
                <div className=''>
                    <BlogsHero
                        title="Build Your Future with Us"
                        description="At iTCart, we're shaping the future with cutting-edge technology and a passion for innovation. Join us to transform industries, solve global challenges, and grow in a vibrant and inclusive workplace."
                        breadcrumbItems={[
                            { label: 'Home', url: '/' },
                            { label: 'Career', url: '/career' },
                        ]}
                    />
                    <div className='w-full flex justify-center py-10'>
                        <OutlineBtn text={"View all open positions"} url='/careers/job-openings' icon={<FaArrowRight className="text-sm font-semibold text-white" />} textColor="#ffffff" />
                    </div>
                </div>
                <div className='w-full'>
                    <HorizontalImageSlider />
                </div>
                <WhoWeAre />
                <WhyWorkWithUsSection />
                <JobSection />

            </section>
            <div className="bg-[#131313] border-b-2 border-b-zinc-600">
                <HomeFaqSection faqs={careersFaqs} />
            </div>
        </>

    )
}

export default Careers