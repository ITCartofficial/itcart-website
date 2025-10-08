"use client"
import AboutItCart from '@/components/verticalDetailPage/AboutItCart'
import CapabilitySection from '@/components/verticalDetailPage/CapabilitySection'
import SectionAbout from '@/components/verticalDetailPage/SectionAbout'
import SkillGapSection from '@/components/verticalDetailPage/SkillGapSection'
import VerticalContentSection2 from '@/components/verticalDetailPage/verticalContentSection2'
import VerticalHeroBanner from '@/components/verticalDetailPage/VerticalHeroBanner'
import { verticalData } from '@/lib/data/verticalData'
import { usePathname } from 'next/navigation'
import React from 'react'


const OurVerticalsDetailPage = () => {

    const pathName = usePathname().split('/')[2]

    const filterdItem = verticalData.find(item => item.compenyName === pathName);

    return (
        <div className='bg-black'>
            <VerticalHeroBanner
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
                <VerticalContentSection2
                    contentOne={filterdItem?.detailPage?.VerticalContentSection2?.contentOne ?? ""}
                    contenttwo={filterdItem?.detailPage?.VerticalContentSection2?.contenttwo ?? ""}
                    contentthree={filterdItem?.detailPage?.VerticalContentSection2?.contentthree ?? ""}
                    VerticalContentSection2Heading={filterdItem?.detailPage?.VerticalContentSection2Heading ?? ""}
                    image={filterdItem?.detailPage?.VerticalContentSection2?.sectionTwoFirstImage ?? ""}
                />
            </div>

            <div className='bg-black py-16 container mx-auto lg:px-10'>
                <SectionAbout
                    aboutProduct={true}
                    contentOne={filterdItem?.detailPage?.aboutSection?.contentOne ?? ""}
                    contenttwo={filterdItem?.detailPage?.aboutSection?.contenttwo ?? ""}
                    contentthree={filterdItem?.detailPage?.aboutSection?.contentthree ?? ""}
                    image={filterdItem?.detailPage?.aboutSection?.aboutImage ?? ""}
                    logo={filterdItem?.detailPage?.aboutSection?.logo ?? ""}
                    contentfour={filterdItem?.detailPage?.aboutSection?.contentfour ?? ""}
                    aboutSectionHeading={filterdItem?.detailPage?.aboutSectionHeading ?? ""}
                />

            </div>


            <div className='bg-black py-3 container'>
                <CapabilitySection
                    capabilitiSectionHeading={filterdItem?.detailPage?.capabilitiSectionHeading ?? ""}
                    CapabilitySections={filterdItem?.detailPage?.CapabilitySections ?? []}
                />
            </div>

            <div className='bg-black py-16 container mx-auto lg:px-10'>
                <SkillGapSection
                    skillGapSection={filterdItem?.detailPage?.skillGapSection ?? []}
                    skillGapSectionHeading={filterdItem?.detailPage?.skillGapSectionHeading ?? ""}
                />
            </div>

            <div className='bg-black py-10 container mx-auto lg:px-10'>
                <AboutItCart
                    impactImage={filterdItem?.detailPage?.impactImage ?? ""}
                />
            </div>

        </div >
    )
}

export default OurVerticalsDetailPage