"use client"
import HomeFaqSection from '@/app/(features)/home/HomeFaqSection'
import FutureSection from '@/components/DetailPageComponents/FutureSection'
import SolutionGrid from '@/components/DetailPageComponents/SolutionGrid'
import CapabilitySection from '@/components/verticalDetailPage/CapabilitySection'
import SectionAbout from '@/components/verticalDetailPage/SectionAbout'
import SkillGapSection from '@/components/verticalDetailPage/SkillGapSection'
import VerticalHeroBanner from '@/components/verticalDetailPage/VerticalHeroBanner'
import { industryData } from '@/lib/data/industryData'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import WhyChoose from '@/components/DetailPageComponents/WhyChoose'
import MobileVerticalHeroBanner from '@/components/verticalDetailPage/MobileVerticalHeroBanner'


const IndustryDetailPage = () => {

    const pathName = usePathname().split('/')[2].replace(/-&-/g, ' & ').replace(/-/g, ' ')

    const filterdItem = industryData.find(item => item.title.toLowerCase() === pathName);

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
                <title>{filterdItem?.detailPage?.metaTitle ?? ""}</title>
                <meta name="description" content={filterdItem?.detailPage?.metaDescription ?? ""} />
                <meta property="og:title" content={filterdItem?.detailPage?.metaTitle} />
                <meta property="og:description" content={filterdItem?.detailPage?.metaDescription ?? ""} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://itcart.ai/industry/${pathName}`} />
                <link rel="canonical" href={`https://itcart.ai/industry/${pathName}`}></link>
            </head>


            <>

                <div className='bg-black space-y-15 lg:space-y-25  mt-10'>

                    <div className='md:block hidden'>
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
                            className="mt-10"
                        />
                    </div>


                    <div className="md:hidden block">
                        <MobileVerticalHeroBanner
                            title={filterdItem?.detailPage?.bannerTitle ?? ""}
                            description={filterdItem?.detailPage?.bannerDescription ?? ""}
                            ctaText="Connect with Us"
                            ctaUrl="/contact-us"
                            mobileBanner={filterdItem?.detailPage?.mobileBannerImage ?? ""}
                            bannerButtonText="Get Started"
                        />

                    </div>

                    <div className='bg-black container mx-auto lg:px-10'>
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

                    <div className='bg-black container mx-auto  md:py-0 lg:px-10'>
                        <SkillGapSection
                            showShadedBackground={filterdItem?.detailPage?.showShadedBackground ?? false}
                            showDescription={true}
                            skillGapHeadingDescription={filterdItem?.detailPage?.skillGapHeadingDescription ?? ""}
                            skillGapSection={filterdItem?.detailPage?.skillGapSection ?? []}
                            skillGapSectionHeading={filterdItem?.detailPage?.skillGapSectionHeading ?? ""}
                        />
                    </div>

                    <div className=" border-b-zinc-600 ">
                        <SolutionGrid
                            capabilitiSectionHeading={filterdItem?.detailPage?.solutionGridHeading}
                            capabilitiSectionDescription={filterdItem?.detailPage?.solutionGridHeadingDiscription}
                            className="bg-[#1B1B1B]"
                            CapabilitySections={filterdItem?.detailPage?.solutionGridItems ?? []}
                        />
                    </div>

                    <div className='bg-black  container'>
                        <WhyChoose
                            whyChooseUsHeading={filterdItem?.detailPage?.whyChooseUsHeading ?? ""}
                            whyChooseUsHeadingDescription={filterdItem?.detailPage?.whyChooseUsHeadingDescription ?? ""}
                            whyChooseUsCards={Array.isArray(filterdItem?.detailPage?.whyChooseUsCards) ? filterdItem.detailPage.whyChooseUsCards : []}
                        />
                    </div>

                    <div className='bg-black  container'>
                        <CapabilitySection
                            isBackgroundImage={false}
                            textColor=""
                            itemePerRow={3}
                            capabilitiSectionDescription={filterdItem?.detailPage?.capabilitiSectionDescription ?? ""}
                            capabilitiSectionHeading={filterdItem?.detailPage?.capabilitiSectionHeading ?? ""}
                            CapabilitySections={(filterdItem?.detailPage?.CapabilitySections ?? []).map(item => ({
                                gradient: "from-[#45C2CC] to-[#000]",
                                ...item,
                            }))}
                        />
                    </div>

                    <div className='bg-black  container mx-auto lg:px-10'>
                        <SectionAbout
                            classNameTwo='md:text-[48px] text-[30px] leading-[1.3]'
                            showLogo={true}
                            aboutProduct={true}
                            contentOne={filterdItem?.detailPage?.aboutSection?.contentOne ?? ""}
                            contenttwo={filterdItem?.detailPage?.aboutSection?.contenttwo ?? ""}
                            contentthree={(filterdItem?.detailPage?.aboutSection as unknown as { contentthree?: string })?.contentthree ?? ""}
                            contentfour={(filterdItem?.detailPage?.aboutSection as unknown as { contentfour?: string })?.contentfour ?? ""}
                            aboutSectionHeading={filterdItem?.detailPage?.aboutSection2Heading ?? ""}
                            image={"/images/industries/aboutfinalimage.png"}
                            logo={filterdItem?.detailPage?.aboutSection?.logo ?? ""}
                        // contentfour={(filterdItem?.detailPage?.aboutSection as any)?.contentfour ?? ""}
                        />

                    </div>

                    <div className=" border-b-2 border-b-zinc-600">
                        <FutureSection
                            futurSectionHeading={filterdItem?.detailPage?.futurSectionHeading ?? ""}
                            futurSectionDescription={filterdItem?.detailPage?.futurSectionDescription ?? ""}
                        />
                    </div>

                </div >
                <div className="bg-[#131313] border-b-2 border-b-zinc-600">
                    <HomeFaqSection
                        FAQsHeading={filterdItem?.detailPage?.FAQsHeading}
                        faqs={filterdItem?.detailPage?.FAQs ?? []} />
                </div>
            </>



        </html>


        // 1B1B1B
    )
}

export default IndustryDetailPage