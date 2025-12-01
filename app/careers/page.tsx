// 'use client';
// import React, { useEffect, useState } from 'react'
// import BlogsHero from '@/components/blogs2/BlogsHero'
// import OutlineBtn from '@/components/buttons/OutlineBtn'
// import { FaArrowRight } from 'react-icons/fa6';
// import HomeFaqSection from '@/app/(features)/home/HomeFaqSection';
// import { careersFaqs } from '@/lib/data/faqsData';
// import HorizontalImageSlider from '@/components/slider/HorizontalImageSlider';
// import WhyWorkWithUsSection from '@/components/careers/WhyWorkWithUsSection';
// import JobSection from '@/components/careers/JobSection';
// import WhoWeAre from '@/components/careers/WhoWeAre';



// const Careers: React.FC = () => {

//     const [isClient, setIsClient] = useState(false);

//     useEffect(() => {
//         setIsClient(true);
//     }, []);

//     if (!isClient) {
//         return null;
//     }


//     return (
//         <html lang="en">

//             <head>
//                 <title>Careers – iTCart</title>
//                 <meta name="description" content="Join iTCart and be part of an AI-driven journey shaping the future of technology. Discover opportunities where your ideas create real impact." />
//                 <meta property="og:url" content={`https://itcart.ai/careers`} />
//                 <link rel="canonical" href="https://itcart.ai/careers"></link>
//             </head>

//             <>
//                 <section className="w-full bg-black text-white mt-20 md:mt-35 space-y-15 lg:space-y-25">
//                     <div className=''>
//                         <BlogsHero
//                             title="Build Your Future with Us"
//                             description="At iTCart, we're shaping the future with cutting-edge technology and a passion for innovation. Join us to transform industries, solve global challenges, and grow in a vibrant and inclusive workplace."
//                             breadcrumbItems={[
//                                 { label: 'Home', url: '/' },
//                                 { label: 'Career', url: '/career' },
//                             ]}
//                         />
// <div className='w-full flex justify-center py-10'>
//     <OutlineBtn text={"View all open positions"} url='/careers/job-openings' icon={<FaArrowRight className="text-sm font-semibold text-white" />} textColor="#ffffff" />
// </div>
//                     </div>
//                     <div className='w-full'>
//                         <HorizontalImageSlider />
//                     </div>
//                     <WhoWeAre />
//                     <WhyWorkWithUsSection />
//                     <JobSection />

//                 </section>
//                 <div className="bg-[#131313] border-b-2 border-b-zinc-600">
//                     <HomeFaqSection faqs={careersFaqs} />
//                 </div>
//             </>
//         </html>


//     )
// }

// export default Careers


'use client';
import React, { useEffect, useState } from 'react'
import BlogsHero from '@/components/blogs2/BlogsHero'
import OutlineBtn from '@/components/buttons/OutlineBtn'
import { FaArrowRight } from 'react-icons/fa6';
import HomeFaqSection from '@/app/(features)/home/HomeFaqSection';
import { careersFaqs } from '@/lib/data/faqsData';
import HorizontalImageSlider from '@/components/slider/HorizontalImageSlider';
import WhyWorkWithUsSection from '@/components/careers/WhyWorkWithUsSection';
import JobSection from '@/components/careers/JobSection';
import WhoWeAre from '@/components/careers/WhoWeAre';
import { useRouter } from 'next/navigation';

const Careers: React.FC = () => {
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
    }, []);

    const scrollToJobSection = () => {
        const jobSection = document.getElementById('job-section');
        if (jobSection) {
            jobSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!isClient) {
        return null;
    }

    return (
        <html lang="en">
            <head>
                <title>Careers – iTCart</title>
                <meta name="description" content="Join iTCart and be part of an AI-driven journey shaping the future of technology. Discover opportunities where your ideas create real impact." />
                <meta property="og:url" content={`https://itcart.ai/careers`} />
                <link rel="canonical" href="https://itcart.ai/careers"></link>
            </head>

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

                        <div onClick={scrollToJobSection} className='w-full flex justify-center py-10'>
                            <OutlineBtn text={"View all open positions"} icon={<FaArrowRight className="text-sm font-semibold text-white" />} textColor="#ffffff" />
                        </div>
                        {/* <div className='w-full flex justify-center py-10'>
                            <button
                                onClick={scrollToJobSection}
                                className="px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2"
                            >
                                View all open positions
                                <FaArrowRight className="text-sm font-semibold" />
                            </button>
                        </div> */}
                    </div>
                    <div className='w-full'>
                        <HorizontalImageSlider />
                    </div>
                    <WhoWeAre />
                    <WhyWorkWithUsSection />
                    <div id="job-section">
                        <JobSection />
                    </div>
                </section>
                <div className="bg-[#131313] border-b-2 border-b-zinc-600">
                    <HomeFaqSection faqs={careersFaqs} />
                </div>
            </>
        </html>
    )
}

export default Careers;