"use client";
import React, { useEffect, useState } from 'react'
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
import MobileVerticalHeroBanner from '@/components/verticalDetailPage/MobileVerticalHeroBanner';

const ServicesDetailPage = () => {

    const pathName = usePathname().split('/')[2].replace(/-&-/g, ' & ').replace(/-/g, ' ')

    const filterdItem = serviceData.find(item => {

        return item.title.toLowerCase().replace(/™/g, '').trim() ==
            pathName.toLowerCase().replace(/™/g, '').trim()
    })

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
                <meta property="og:url" content={`https://itcart.ai/services/${pathName}`} />
                <link rel="canonical" href={`https://itcart.ai/services/${pathName}`}></link>
            </head>


            <>

                <div className='bg-black space-y-15 lg:space-y-25  mt-10 '>
                    <div className="md:block hidden">

                        <VerticalHeroBanner
                            serviceName={filterdItem?.detailPage?.serviceName ?? ""}
                            bannerButtonText={filterdItem?.detailPage?.bannerButtonText ? filterdItem?.detailPage?.bannerButtonText : "Get In Touch"}
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
                            // breadcrumbItems={[
                            //     { label: 'Home', url: '/' },
                            //     { label: 'Our Verticals', url: '/services' }
                            // ]}
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

                    <div className='bg-black container mx-auto lg:px-10'>
                        <SkillGapSection
                            showShadedBackground={filterdItem?.detailPage?.showShadedBackground ?? false}
                            showDescription={true}
                            skillGapHeadingDescription={filterdItem?.detailPage?.skillGapHeadingDescription ?? ""}
                            skillGapSection={filterdItem?.detailPage?.skillGapSection ?? []}
                            skillGapSectionHeading={filterdItem?.detailPage?.skillGapSectionHeading ?? ""}
                        />
                    </div>

                    <div className='bg-black container'>
                        <CapabilitySection
                            isBackgroundImage={false}
                            textColor='#45C2CC'
                            itemePerRow={3}
                            capabilitiSectionDescription={filterdItem?.detailPage?.capabilitiSectionDescription ?? ""}
                            capabilitiSectionHeading={filterdItem?.detailPage?.capabilitiSectionHeading ?? ""}
                            CapabilitySections={filterdItem?.detailPage?.CapabilitySections ?? []}
                        />
                    </div>

                    <div className='bg-black container'>
                        <ServiceCard
                            itemePerRow={4}
                            serviceCardItems={(filterdItem?.detailPage)?.serviceCardItems ?? []}
                            serviceCardHeading={(filterdItem?.detailPage)?.serviceCardHeading ?? ""}
                        />
                    </div>

                    <div className='bg-black container'>
                        <WhyChoose
                            whyChooseUsHeading={filterdItem?.detailPage?.whyChooseUsHeading ?? ""}
                            whyChooseUsHeadingDescription={filterdItem?.detailPage?.whyChooseUsHeadingDescription ?? ""}
                            whyChooseUsCards={Array.isArray(filterdItem?.detailPage?.whyChooseUsCards) ? filterdItem.detailPage.whyChooseUsCards : []}
                        />
                    </div>

                    <div className='bg-black container mx-auto lg:px-10'>
                        <SectionAbout

                            classNameTwo='md:text-[48px] text-[30px]'
                            showLogo={true}
                            aboutProduct={true}
                            contentOne={"AiXHub is the world's first AI-Native Enterprise Operating System engineered to enable governed autonomy, SLA-driven intelligence, and explainable decision execution across business functions like IT, HR, Finance, Legal, and Operations. The essence of AiXHub is core operating principle in all our solutions and services offered under different verticals across industries."}
                            // contentOne={filterdItem?.detailPage?.aboutSection2?.contentOne ?? ""}
                            contenttwo={""}
                            contentthree={""}
                            contentfour={""}
                            aboutSectionHeading={filterdItem?.detailPage?.aboutSection2Heading ?? ""}
                            image={"/images/services/serviceaboutfinal.png"}
                            logo={filterdItem?.detailPage?.aboutSection?.logo ?? ""}
                        // contentfour={(filterdItem?.detailPage?.aboutSection as any)?.contentfour ?? ""}
                        />

                    </div>

                    <div className=" border-b-2 border-b-zinc-600 pb-7">
                        <FutureSection
                            futurSectionHeading={filterdItem?.detailPage?.futurSectionHeading ?? ""}
                            futurSectionDescription={filterdItem?.detailPage?.futurSectionDescription ?? ""}
                        />
                    </div>

                </div>
                <div className="bg-[#131313] border-b-2 border-b-zinc-600 -10">
                    <HomeFaqSection
                        FAQsHeading={filterdItem?.detailPage?.FAQsHeading}
                        faqs={filterdItem?.detailPage?.FAQs ?? []} />
                </div>
            </>

        </html>


    )
}

export default ServicesDetailPage

