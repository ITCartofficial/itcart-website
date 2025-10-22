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
                    serviceCardItems={(filterdItem?.detailPage)?.serviceCardItems ?? []}
                    serviceCardHeading={(filterdItem?.detailPage)?.serviceCardHeading ?? ""}
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
                    contentOne={filterdItem?.detailPage?.aboutSection2?.contentOne ?? ""}
                    contenttwo={filterdItem?.detailPage?.aboutSection2?.contenttwo ?? ""}
                    contentthree={(filterdItem?.detailPage?.aboutSection2 as unknown as { contentthree?: string })?.contentthree ?? ""}
                    contentfour={(filterdItem?.detailPage?.aboutSection2 as unknown as { contentfour?: string })?.contentfour ?? ""}
                    aboutSectionHeading={filterdItem?.detailPage?.aboutSection2Heading ?? ""}
                    image={filterdItem?.detailPage?.aboutSection?.aboutImage ?? ""}
                    logo={filterdItem?.detailPage?.aboutSection?.logo ?? ""}
                // contentfour={(filterdItem?.detailPage?.aboutSection as any)?.contentfour ?? ""}
                />

            </div>

            <div className="py-10 border-b-2 border-b-zinc-600">
                <FutureSection
                    futurSectionHeading={filterdItem?.detailPage?.futurSectionHeading ?? ""}
                    futurSectionDescription={filterdItem?.detailPage?.futurSectionDescription ?? ""}
                />
            </div>

            <div className="bg-[#131313] py-10 border-b-2 border-b-zinc-600">
                <HomeFaqSection
                    FAQsHeading={filterdItem?.detailPage?.FAQsHeading}
                    faqs={filterdItem?.detailPage?.FAQs ?? []} />
            </div>

        </div>
    )
}

export default ServicesDetailPage

