"use client";
import React from 'react'
import { usePathname } from 'next/navigation';
import { serviceData } from '@/lib/data/serviceData';
import VerticalHeroBanner from '@/components/verticalDetailPage/VerticalHeroBanner'
import SectionAbout from '@/components/verticalDetailPage/SectionAbout';
import SkillGapSection from '@/components/verticalDetailPage/SkillGapSection';
import CapabilitySection from '@/components/verticalDetailPage/CapabilitySection';
import ServiceCard from '@/components/DetailPageComponents/ServiceCard';
import WhyChoose from '@/components/DetailPageComponents/WhyChoose';
import HomeFaqSection from '@/app/(features)/home/HomeFaqSection';
import FutureSection from '@/components/DetailPageComponents/FutureSection';

const ServicesDetailPage = () => {

    const pathName = usePathname().split('/')[2].replace(/-&-/g, ' & ').replace(/-/g, ' ')

    const filterdItem = serviceData.find(item => item.title === pathName);

    const homeFAQs = [
        {
            id: '1',
            title: 'What is AiXHUB?',
            content: "AiXHub is iTCart's proprietary AI-native EOS (Enterprise Operating System), designed to unify data, decision-making, and automation into one adaptive, high-performance ecosystem. Built for speed, scale, and self-learning, AiXHub powers intelligent transformation across industries—turning complexity into clarity, and ideas into real-time impact. "
        },
        {
            id: '2',
            title: 'What are the services of iTCart?',
            content: 'Our services revolve around digital transformation and AI automation. Starting from technology integration to managing data analytics, we cater to each vertical in the AI landscape.'
        },
        {
            id: '3',
            title: 'What is the Unique Selling Proposition of iTCart?',
            content: 'Our USP is to deliver personalized AI-powered solutions that help businesses leverage AI and automation needs.'
        },
        {
            id: '4',
            title: 'What are the industries where iTCart serves?',
            content: 'iTCart offers services in various industries, including banking, real estate, healthcare, cybersecurity, and more.'
        },
        {
            id: '5',
            title: 'What makes iTCart the best AI automation company in the US?',
            content: "iTCart's commitment to innovation, customer-centric solutions, and robust data privacy is the quality that sets the company apart. The company’s AI automation tools streamline processes, reduce operational costs, and drive smarter decision-making."
        },
        {
            id: '6',
            title: 'How can iTCart help my company implement AI automation?',
            content: 'iTCart helps your company implement AI automation by offering end-to-end solutions that streamline workflows, reduce operational costs, and minimize human error. Their AI automation services include automating repetitive tasks and document management, as well as deploying chatbots and predictive analytics.'
        }
    ];

    

    return (
        <div className='bg-black'>
            <VerticalHeroBanner
                serviceName={filterdItem?.detailPage?.serviceName ?? ""}
                bannerButtonText={filterdItem?.detailPage?.bannerButtonText ?? ""}
                title={filterdItem?.detailPage?.bannerTitle ?? ""}
                description={filterdItem?.detailPage?.bannerDescription ?? ""}
                ctaText="Connect with Us"
                ctaUrl="/contact"
                breadcrumbItems={[
                    { label: 'Home', url: '/' },
                    { label: 'Our Verticals', url: '/services' }
                ]}
                backgroundImage={filterdItem?.detailPage?.bannerImage ?? ""}
            />

            <div className='bg-black py-16 container mx-auto lg:px-10'>
                <SectionAbout
                    showLogo={true}
                    aboutProduct={true}
                    contentOne={filterdItem?.detailPage?.aboutSection?.contentOne ?? ""}
                    contenttwo={filterdItem?.detailPage?.aboutSection?.contenttwo ?? ""}
                    image={filterdItem?.detailPage?.aboutSection?.aboutImage ?? ""}
                    logo={filterdItem?.detailPage?.aboutSection?.logo ?? ""}
                    contentthree={(filterdItem?.detailPage?.aboutSection as unknown as { contentthree?: string })?.contentthree ?? ""}
                    contentfour={(filterdItem?.detailPage?.aboutSection as unknown as { contentfour?: string })?.contentfour ?? ""}
                    aboutSectionHeading={filterdItem?.detailPage?.aboutSectionHeading ?? ""}
                />

            </div>

            <div className='bg-black py-16 container mx-auto lg:px-10'>
                <SkillGapSection
                    showShadedBackground={filterdItem?.detailPage?.showShadedBackground ?? false}
                    showDescription={true}
                    skillGapHeadingDescription={filterdItem?.detailPage?.skillGapHeadingDescription ?? ""}
                    skillGapSection={filterdItem?.detailPage?.skillGapSection ?? []}
                    skillGapSectionHeading={filterdItem?.detailPage?.skillGapSectionHeading ?? ""}
                />
            </div>

            <div className='bg-black py-0 container'>
                <CapabilitySection
                    isBackgroundImage={false}
                    textColor='#45C2CC'
                    itemePerRow={3}
                    capabilitiSectionDescription={filterdItem?.detailPage?.capabilitiSectionDescription ?? ""}
                    capabilitiSectionHeading={filterdItem?.detailPage?.capabilitiSectionHeading ?? ""}
                    CapabilitySections={filterdItem?.detailPage?.CapabilitySections ?? []}
                />
            </div>

            <div className='bg-black container py-10'>
                <ServiceCard
                    serviceCardItems={(filterdItem?.detailPage as any)?.serviceCardItems ?? []}
                    serviceCardHeading={(filterdItem?.detailPage as any)?.serviceCardHeading ?? ""}
                />
            </div>

            <div className='bg-black py-7 container'>
                <WhyChoose
                    whyChooseUsHeading={filterdItem?.detailPage?.whyChooseUsHeading ?? ""}
                    whyChooseUsHeadingDescription={filterdItem?.detailPage?.whyChooseUsHeadingDescription ?? ""}
                    whyChooseUsCards={Array.isArray(filterdItem?.detailPage?.whyChooseUsCards) ? filterdItem.detailPage.whyChooseUsCards : []}
                />
            </div>

            <div className='bg-black py-16 container mx-auto lg:px-10'>
                <SectionAbout
                    showLogo={true}
                    aboutProduct={true}
                    contentOne={filterdItem?.detailPage?.aboutSection?.contentOne ?? ""}
                    contenttwo={filterdItem?.detailPage?.aboutSection?.contenttwo ?? ""}
                    contentthree={(filterdItem?.detailPage?.aboutSection as unknown as { contentthree?: string })?.contentthree ?? ""}
                    contentfour={(filterdItem?.detailPage?.aboutSection as unknown as { contentfour?: string })?.contentfour ?? ""}
                    aboutSectionHeading={filterdItem?.detailPage?.aboutSection2Heading ?? ""}
                    image={filterdItem?.detailPage?.aboutSection?.aboutImage ?? ""}
                    logo={filterdItem?.detailPage?.aboutSection?.logo ?? ""}
                    // contentfour={(filterdItem?.detailPage?.aboutSection as any)?.contentfour ?? ""}
                />

            </div>

            <div className="py-10 border-b-2 border-b-zinc-600">
                <FutureSection />
            </div>

            <div className="bg-[#131313] py-10 border-b-2 border-b-zinc-600">
                <HomeFaqSection faqs={homeFAQs} />
            </div>

        </div>
    )
}

export default ServicesDetailPage