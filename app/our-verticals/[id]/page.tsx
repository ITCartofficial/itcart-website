"use client"
import HomeFaqSection from '@/app/(features)/home/HomeFaqSection'
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
        <>
            <div className='bg-black space-y-15 lg:space-y-25 mt-10'>
                <VerticalHeroBanner
                    title={filterdItem?.detailPage?.bannerTitle ?? ""}
                    description={filterdItem?.detailPage?.bannerDescription ?? ""}
                    ctaText="Connect with Us"
                    ctaUrl="/contact-us"
                    breadcrumbItems={[
                        { label: 'Home', url: '/' },
                        { label: 'Our Verticals', url: '/services' }
                    ]}
                    backgroundImage={filterdItem?.detailPage?.bannerImage ?? ""}
                />

                <div className='bg-black container mx-auto lg:px-10'>
                    <VerticalContentSection2
                        contentOne={filterdItem?.detailPage?.VerticalContentSection2?.contentOne ?? ""}
                        contenttwo={filterdItem?.detailPage?.VerticalContentSection2?.contenttwo ?? ""}
                        contentthree={filterdItem?.detailPage?.VerticalContentSection2?.contentthree ?? ""}
                        VerticalContentSection2Heading={filterdItem?.detailPage?.VerticalContentSection2Heading ?? ""}
                        image={filterdItem?.detailPage?.VerticalContentSection2?.sectionTwoFirstImage ?? ""}
                    />
                </div>

                <div className='bg-black container mx-auto lg:px-10'>
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


                <div className='bg-black container'>
                    <CapabilitySection
                        capabilitiSectionHeading={filterdItem?.detailPage?.capabilitiSectionHeading ?? ""}
                        CapabilitySections={filterdItem?.detailPage?.CapabilitySections ?? []}
                    />
                </div>

                <div className='bg-black container mx-auto lg:px-10'>
                    <SkillGapSection
                        skillGapSection={filterdItem?.detailPage?.skillGapSection}
                        skillGapSectionHeading={filterdItem?.detailPage?.skillGapSectionHeading}
                        showShadedBackground={true}
                    />
                </div>

                <div className='bg-black container mx-auto lg:px-10'>
                    <AboutItCart
                        impactImage={filterdItem?.detailPage?.impactImage ?? ""}
                        apropriectContentOne={filterdItem?.detailPage?.apropriectContentOne ?? ""}
                        apropriectContenTwo={filterdItem?.detailPage?.apropriectContenTwo ?? ""}
                        apropriectContentThree={""}
                    />
                </div>

            </div >
            <div className="bg-[#131313] border-b-2 border-b-zinc-600 mt-15">
                <HomeFaqSection faqs={filterdItem?.detailPage?.FAQs ?? []} />
            </div>
        </>

    )
}

export default OurVerticalsDetailPage