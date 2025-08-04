import React from 'react'
import BlogsHero from '@/app/components/blogs2/BlogsHero'
import OutlineBtn from '@/app/components/buttons/OutlineBtn'
import { FaArrowRight } from 'react-icons/fa6';
import HomeFaqSection from '@/app/(features)/home/HomeFaqSection';
import { careersFaqs } from '@/lib/data/faqsData';
import HorizontalImageSlider from '@/app/components/slider/HorizontalImageSlider';
import WhyWorkWithUsSection from '@/app/components/careers/WhyWorkWithUsSection';
import JobSection from '@/app/components/careers/JobSection';
import WhoWeAre from '@/app/components/careers/WhoWeAre';




interface Careers {
    buttonText?: string;
}

const Careers: React.FC<Careers> = ({ buttonText = "View all open positions" }) => {
    return (
        <section className="w-full bg-black text-white pt-32 pb-20">
            <div className='pb-8'>
                <BlogsHero
                    title="Build Your Future with Us"
                    description="At iTCart, we're shaping the future with cutting-edge technology and a passion for innovation. Join us to transform industries, solve global challenges, and grow in a vibrant and inclusive workplace."
                    breadcrumbItems={[
                        { label: 'Home', url: '/' },
                        { label: 'Career', url: '/career' },
                    ]}
                    className='pb-20'
                />
                <div className='w-full flex justify-center py-10'>
                    <OutlineBtn text={buttonText} url='/careers/job-openings' icon={<FaArrowRight className="text-sm font-semibold text-white" />} textColor="#ffffff" />
                </div>
            </div>
            <div className='w-ful pb-16'>
                <HorizontalImageSlider />
            </div>
            <WhoWeAre/>
            <WhyWorkWithUsSection />
            <JobSection/>
            <div className="bg-[#131313] py-10 border-b-2 border-b-zinc-600">
                <HomeFaqSection faqs={careersFaqs} />
            </div>
        </section>
    )
}

export default Careers