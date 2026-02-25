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
            <head>
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

            </head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(filteredItem?.detailPage?.schema),
                }}
            />
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
