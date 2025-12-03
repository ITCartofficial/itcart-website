// "use client"
// // import HomeFaqSection from '@/app/(features)/home/HomeFaqSection'
// import HomeFaqSection from "@/app/(features)/home/HomeFaqSection";
// import AboutItCart from '@/components/verticalDetailPage/AboutItCart'
// import CapabilitySection from '@/components/verticalDetailPage/CapabilitySection'
// import MobileVerticalHeroBanner from '@/components/verticalDetailPage/MobileVerticalHeroBanner'
// import SectionAbout from '@/components/verticalDetailPage/SectionAbout'
// import SkillGapSection from '@/components/verticalDetailPage/SkillGapSection'
// import VerticalContentSection2 from '@/components/verticalDetailPage/verticalContentSection2'
// import VerticalHeroBanner from '@/components/verticalDetailPage/VerticalHeroBanner'
// import { verticalData } from '@/lib/data/verticalData'

// import { usePathname } from 'next/navigation'
// import React from 'react'


// const OurVerticalsDetailPage = () => {

//     const pathName = usePathname()?.split('/')[2] || '';
//     const [isClient, setIsClient] = React.useState(false);

//     React.useEffect(() => {
//         setIsClient(true);
//     }, []);

//     const filterdItem = verticalData.find(item =>
//         item.compenyName.toLowerCase() === pathName.toLowerCase()
//     );

//     if (!isClient) {
//         return null;
//     }

//     if (!filterdItem) {
//         return <div className="min-h-screen flex items-center justify-center">
//             <div>Vertical not found</div>
//         </div>;
//     }
//     console.log("pathName");


//     return (
//         <html lang="en">
//             <head>
//                 <title>{filterdItem?.detailPage?.metaTitle ?? ""}</title>
//                 <meta name="description" content={filterdItem?.detailPage?.metaDescription ?? ""} />
//                 <meta property="og:title" content={filterdItem?.detailPage?.metaTitle} />
//                 <meta property="og:description" content={filterdItem?.detailPage?.metaDescription ?? ""} />
//                 <meta property="og:type" content="website" />
//                 <meta property="og:url" content={`https://itcart.ai/products/${pathName}`} />
//                 <link rel="canonical" href={`https://itcart.ai/products/${pathName}`}></link>
//             </head>

//             <script
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{
//                     __html: JSON.stringify(filterdItem?.detailPage?.schema),
//                 }}
//             />


//             {/* AixhubDetailpage */}
//             <>
// {}
//                 <>
//                     <div className='bg-black space-y-15 lg:space-y-25 mt-10'>

//                         <div className='md:block hidden'>
//                             <VerticalHeroBanner
//                                 title={filterdItem?.detailPage?.bannerTitle ?? ""}
//                                 description={filterdItem?.detailPage?.bannerDescription ?? ""}
//                                 ctaText="Connect with Us"
//                                 ctaUrl="/contact-us"
//                                 imgAlt={filterdItem?.detailPage?.banerAltImg ?? ""}
//                                 breadcrumbItems={[
//                                     { label: 'Home', url: '/' },
//                                     { label: 'Our Verticals', url: '/services' }
//                                 ]}
//                                 backgroundImage={filterdItem?.detailPage?.bannerImage ?? ""}
//                             />
//                         </div>

//                         <div className="md:hidden block">
//                             <MobileVerticalHeroBanner
//                                 title={filterdItem?.detailPage?.bannerTitle ?? ""}
//                                 description={filterdItem?.detailPage?.bannerDescription ?? ""}
//                                 ctaText="Connect with Us"
//                                 ctaUrl="/contact-us"
//                                 imgAlt={filterdItem?.detailPage?.banerAltImg ?? ""}
//                                 mobileBanner={filterdItem?.detailPage?.mobileBannerImage ?? ""}
//                                 bannerButtonText="Get Started"
//                             />
//                         </div>


//                         <div className='bg-black container mx-auto lg:px-10'>
//                             <VerticalContentSection2
//                                 contentOne={filterdItem?.detailPage?.VerticalContentSection2?.contentOne ?? ""}
//                                 contenttwo={filterdItem?.detailPage?.VerticalContentSection2?.contenttwo ?? ""}
//                                 contentthree={filterdItem?.detailPage?.VerticalContentSection2?.contentthree ?? ""}
//                                 VerticalContentSection2Heading={filterdItem?.detailPage?.VerticalContentSection2Heading ?? ""}
//                                 image={filterdItem?.detailPage?.VerticalContentSection2?.sectionTwoFirstImage ?? ""}
//                                 imgAlt={filterdItem?.detailPage?.VerticalContentSection2?.imgAlt ?? ""}
//                             />
//                         </div>

//                         <div className='bg-black container mx-auto lg:px-10'>
//                             <SectionAbout
//                                 aboutProduct={true}
//                                 contentOne={filterdItem?.detailPage?.aboutSection?.contentOne ?? ""}
//                                 contenttwo={filterdItem?.detailPage?.aboutSection?.contenttwo ?? ""}
//                                 contentthree={filterdItem?.detailPage?.aboutSection?.contentthree ?? ""}
//                                 image={filterdItem?.detailPage?.aboutSection?.aboutImage ?? ""}
//                                 logo={filterdItem?.detailPage?.aboutSection?.logo ?? ""}
//                                 contentfour={filterdItem?.detailPage?.aboutSection?.contentfour ?? ""}
//                                 aboutSectionHeading={filterdItem?.detailPage?.aboutSectionHeading ?? ""}
//                                 imgAlt={filterdItem?.detailPage?.aboutSection?.imgAlt ?? ""}
//                             />

//                         </div>

//                         <div className='bg-black container'>
//                             <CapabilitySection
//                                 capabilitiSectionHeading={filterdItem?.detailPage?.capabilitiSectionHeading ?? ""}
//                                 CapabilitySections={filterdItem?.detailPage?.CapabilitySections ?? []}
//                             />
//                         </div>

//                         <div className='bg-black container mx-auto lg:px-10'>
//                             <SkillGapSection
//                                 skillGapSection={filterdItem?.detailPage?.skillGapSection}
//                                 skillGapSectionHeading={filterdItem?.detailPage?.skillGapSectionHeading}
//                                 showShadedBackground={true}
//                             />
//                         </div>

//                         <div className='bg-black container mx-auto lg:px-10'>
//                             <AboutItCart
//                                 impacts={filterdItem?.detailPage?.impacts ?? []}
//                                 impactImage={filterdItem?.detailPage?.impactImage ?? ""}
//                                 apropriectContentOne={filterdItem?.detailPage?.apropriectContentOne ?? ""}
//                                 apropriectContenTwo={filterdItem?.detailPage?.apropriectContenTwo ?? ""}
//                                 apropriectContentThree={""}
//                                 imgAlt={filterdItem?.detailPage?.impactImgAlt ?? ""}
//                                 impactsAboutAlt={filterdItem?.detailPage?.impactsAboutAlt ?? ""}
//                             />
//                         </div>

//                     </div >
//                     <div className="bg-[#131313] border-b-2 border-b-zinc-600 mt-15">
//                         <HomeFaqSection
//                             FAQsHeading={filterdItem?.detailPage?.FAQsHeading}
//                             faqs={filterdItem?.detailPage?.FAQs ?? []} />
//                     </div>
//                 </>
//                 {/* <div className="bg-[#131313] border-b-2 border-b-zinc-600">
//                     <HomeFaqSection
//                         FAQsHeading={filterdItem?.detailPage?.FAQsHeading}
//                         faqs={filterdItem?.detailPage?.FAQs ?? []} />
//                 </div> */}
//             </>
//         </html>
//     )
// }

// export default OurVerticalsDetailPage


"use client";

import HomeFaqSection from "@/app/(features)/home/HomeFaqSection";
import AboutItCart from "@/components/verticalDetailPage/AboutItCart";
import CapabilitySection from "@/components/verticalDetailPage/CapabilitySection";
import MobileVerticalHeroBanner from "@/components/verticalDetailPage/MobileVerticalHeroBanner";
import SectionAbout from "@/components/verticalDetailPage/SectionAbout";
import SkillGapSection from "@/components/verticalDetailPage/SkillGapSection";
import VerticalContentSection2 from "@/components/verticalDetailPage/verticalContentSection2";
import VerticalHeroBanner from "@/components/verticalDetailPage/VerticalHeroBanner";
import { verticalData } from "@/lib/data/verticalData";

import { usePathname } from "next/navigation";
import Head from "next/head";
import React from "react";
import AixhubDetailpage from "@/app/aixhub/page";

const OurVerticalsDetailPage = () => {
    const pathName = usePathname()?.split("/")[2] || "";
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    const filteredItem = verticalData.find(
        (item) => item.compenyName.toLowerCase() === pathName.toLowerCase()
    );

    if (!isClient) return null;

    if (!filteredItem) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div>Vertical not found</div>
            </div>
        );
    }

    return (
        <>
            {/* ----------- PROPER HEAD TAG ----------- */}
            <Head>
                <title>{filteredItem?.detailPage?.metaTitle ?? ""}</title>
                <meta
                    name="description"
                    content={filteredItem?.detailPage?.metaDescription ?? ""}
                />
                <meta
                    property="og:title"
                    content={filteredItem?.detailPage?.metaTitle}
                />
                <meta
                    property="og:description"
                    content={filteredItem?.detailPage?.metaDescription ?? ""}
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content={`https://itcart.ai/products/${pathName}`}
                />
                <link
                    rel="canonical"
                    href={`https://itcart.ai/products/${pathName}`}
                ></link>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(filteredItem?.detailPage?.schema),
                    }}
                />
            </Head>

            {/* ----------- PAGE CONTENT ----------- */}
            <>

                <>
                    <div className="bg-black space-y-15 lg:space-y-25 mt-10">
                        {/* Desktop Banner */}
                        <div className="md:block hidden">
                            <VerticalHeroBanner
                                title={filteredItem?.detailPage?.bannerTitle ?? ""}
                                description={
                                    filteredItem?.detailPage?.bannerDescription ?? ""
                                }
                                ctaText="Connect with Us"
                                ctaUrl="/contact-us"
                                imgAlt={filteredItem?.detailPage?.banerAltImg ?? ""}
                                breadcrumbItems={[
                                    { label: "Home", url: "/" },
                                    { label: "Our Verticals", url: "/services" },
                                ]}
                                backgroundImage={
                                    filteredItem?.detailPage?.bannerImage ?? ""
                                }
                            />
                        </div>

                        {/* Mobile Banner */}
                        <div className="md:hidden block">
                            <MobileVerticalHeroBanner
                                title={filteredItem?.detailPage?.bannerTitle ?? ""}
                                description={
                                    filteredItem?.detailPage?.bannerDescription ?? ""
                                }
                                ctaText="Connect with Us"
                                ctaUrl="/contact-us"
                                imgAlt={filteredItem?.detailPage?.banerAltImg ?? ""}
                                mobileBanner={
                                    filteredItem?.detailPage?.mobileBannerImage ?? ""
                                }
                                bannerButtonText="Get Started"
                            />
                        </div>

                        {/* Sections */}
                        <div className="bg-black container mx-auto lg:px-10">
                            <VerticalContentSection2
                                contentOne={
                                    filteredItem?.detailPage?.VerticalContentSection2
                                        ?.contentOne ?? ""
                                }
                                contenttwo={
                                    filteredItem?.detailPage?.VerticalContentSection2
                                        ?.contenttwo ?? ""
                                }
                                contentthree={
                                    filteredItem?.detailPage?.VerticalContentSection2
                                        ?.contentthree ?? ""
                                }
                                VerticalContentSection2Heading={
                                    filteredItem?.detailPage
                                        ?.VerticalContentSection2Heading ?? ""
                                }
                                image={
                                    filteredItem?.detailPage?.VerticalContentSection2
                                        ?.sectionTwoFirstImage ?? ""
                                }
                                imgAlt={
                                    filteredItem?.detailPage?.VerticalContentSection2
                                        ?.imgAlt ?? ""
                                }
                            />
                        </div>

                        <div className="bg-black container mx-auto lg:px-10">
                            <SectionAbout
                                aboutProduct={true}
                                contentOne={
                                    filteredItem?.detailPage?.aboutSection?.contentOne ?? ""
                                }
                                contenttwo={
                                    filteredItem?.detailPage?.aboutSection?.contenttwo ?? ""
                                }
                                contentthree={
                                    filteredItem?.detailPage?.aboutSection?.contentthree ?? ""
                                }
                                image={
                                    filteredItem?.detailPage?.aboutSection?.aboutImage ?? ""
                                }
                                logo={filteredItem?.detailPage?.aboutSection?.logo ?? ""}
                                contentfour={
                                    filteredItem?.detailPage?.aboutSection?.contentfour ?? ""
                                }
                                aboutSectionHeading={
                                    filteredItem?.detailPage?.aboutSectionHeading ?? ""
                                }
                                imgAlt={
                                    filteredItem?.detailPage?.aboutSection?.imgAlt ?? ""
                                }
                            />
                        </div>

                        <div className="bg-black container">
                            <CapabilitySection
                                capabilitiSectionHeading={
                                    filteredItem?.detailPage?.capabilitiSectionHeading ?? ""
                                }
                                CapabilitySections={
                                    filteredItem?.detailPage?.CapabilitySections ?? []
                                }
                            />
                        </div>

                        <div className="bg-black container mx-auto lg:px-10">
                            <SkillGapSection
                                skillGapSection={
                                    filteredItem?.detailPage?.skillGapSection ?? []
                                }
                                skillGapSectionHeading={
                                    filteredItem?.detailPage?.skillGapSectionHeading ?? ""
                                }
                                showShadedBackground={true}
                            />
                        </div>

                        <div className="bg-black container mx-auto lg:px-10">
                            <AboutItCart
                                impacts={filteredItem?.detailPage?.impacts ?? []}
                                impactImage={
                                    filteredItem?.detailPage?.impactImage ?? ""
                                }
                                apropriectContentOne={
                                    filteredItem?.detailPage?.apropriectContentOne ?? ""
                                }
                                apropriectContenTwo={
                                    filteredItem?.detailPage?.apropriectContenTwo ?? ""
                                }
                                apropriectContentThree=""
                                imgAlt={
                                    filteredItem?.detailPage?.impactImgAlt ?? ""
                                }
                                impactsAboutAlt={
                                    filteredItem?.detailPage?.impactsAboutAlt ?? ""
                                }
                            />
                        </div>
                    </div>

                    <div className="bg-[#131313] border-b-2 border-b-zinc-600 mt-15">
                        <HomeFaqSection
                            FAQsHeading={
                                filteredItem?.detailPage?.FAQsHeading ?? ""
                            }
                            faqs={filteredItem?.detailPage?.FAQs ?? []}
                        />
                    </div>
                </>

            </>
        </>
    );
};

export default OurVerticalsDetailPage;
