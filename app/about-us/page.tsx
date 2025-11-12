"use client"
import CoreValueSection from "../../components/about/CoreValueSection"
import WhoWeAreSection from "../../components/about/WhoWeAreSection"
import HeroBanner from "../../components/HeroBanner"

import { coreValues, foundingMembers, executiveLeadership, ambassadorsList, historyData } from '@/lib/data/aboutPageData'

import MissionVisionSection from "../../components/about/MissionVisionSection"
// import AIFrameworkSection from "../../components/about/AIFrameworkSection"
import FoundingMembersSection from "../../components/about/FoundingMembersSection"
import ExecutiveLeadersSection from "../../components/about/ExecutiveLeadersSection"
// import GlobalStrategistsSection from "../../components/about/GlobalStrategistsSection"
import AmbassadorSection from "@/components/about/AmbassadorSection"
import HistorySection from "@/components/about/HistorySection"
import BannerContainer from "@/components/common/BannerContainer"
import GradientTitle from "@/components/typography/GradientTitle"
import MultiParagraphs from "@/components/common/MultiParagraphs"
import { useLayoutEffect, useState, useEffect } from "react"



const missionVisionData = {
    title: "Our Mission & Vision",
    description: "To become a global AI industry disruptor who transforms businesses with proprietary AI solutions, helping streamline operations, reduce risks, and drive scalable growth. iTCart harnesses AI that transforms enterprises with future-ready technology.<br>To revolutionize industries and deliver scalable and adaptive AI-powered solutions that shape the digital economy. iTCart's commitment extends beyond transformation, offering sustainable AI systems that redefine business success.",
    imageUrl: "/images/about-card-1.jpg",

}
// const PatientSectionData = {
//     title: "Patent-Pending AI Framework",
//     description: "AiXHub is a patent-pending AI orchestration framework that unifies governance, automation, and human oversight to help enterprises build secure, scalable, and responsible AI systems. <br>We are industry trailblazers, revolutionizing the technology landscape by pioneering accessible and innovative technology solutions.",
//     imageUrl: "/images/about-card-2.jpg",
// }

const globalExpansionData = {
    title: "iTCart's Global Expansions",
    description: "The IT industry is not only central to modern businesses but also influences society as a whole. iTCart is designed to offer firms a journey that goes beyond the ordinary. <br> We are dedicated to transforming lives through innovative IT solutions, improving the lives of millions globally. iTCart, an AI automation company known for its global expansion has its footprints in UAE, KSA, USA, and UK along with other APAC and European regions.",
    bgImage: "/images/contact/contact-bg.jpg",
}


const AboutUs = () => {


    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }


    const [bgImage, setBgImage] = useState<string | null>(null);

    useLayoutEffect(() => {
        const updateBg = () => {
            if (window.innerWidth < 640) {
                setBgImage("/images/contact/contact-bg-small.jpg");
            } else {
                setBgImage("/images/contact/contact-bg.jpg");
            }
        };
        updateBg();

        window.addEventListener("resize", updateBg);
        return () => window.removeEventListener("resize", updateBg);
    }, []);

    if (!bgImage) return null;

    return (

        <html lang="en">

            <head>
                <title>About Us – iTCart</title>
                <meta name="description" content="Learn about iTCart, a technology company building intelligent, AI-driven solutions that empower businesses to innovate, automate, and scale with confidence." />
                <meta property="og:url" content={`https://itcart.ai/about-us`} />
            </head>

            <div className="bg-black">
                <HeroBanner title="About Us"
                    breadcrumbItems={[
                        { label: 'Home', url: '/' },
                        { label: 'About Us', url: '/about-us' }
                    ]}
                    backgroundImage="/images/about/about-hero-bg.jpg"
                    className="bg-no-repeat h-[400px] "
                />
                <div className="bg-black md:mt-10">
                    <WhoWeAreSection />
                </div>
                <div className="bg-black py-10 md:py-10">
                    <CoreValueSection coreValues={coreValues} />
                </div>
                <div className="bg-black md:py-16">
                    <MissionVisionSection
                        missionVision={missionVisionData}
                        theme={'dark'}
                    />
                </div>

                {/* <div className="bg-black py-16 pb-30">
                <AIFrameworkSection
                    aixFramework={PatientSectionData}
                    theme={'dark'}
                    reverse
                    className=" border-[#565656] bg-[#181818] py-5 px-5 lg:py-10 lg:px-8 rounded-[25px]"
                    button={{ text: "Read More", path: "/about-us" }}
                />
            </div> */}

                <div className="bg-white py-16 md:rounded-tl-[85px] rounded-tl-[25px] md:rounded-tr-[85px] rounded-tr-[25px]">
                    <FoundingMembersSection
                        direction="row"
                        members={foundingMembers}
                        theme="light"
                    />
                </div>

                <div className="bg-white py-6 rounded-bl-[30px] md:rounded-bl-[85px] md:rounded-br-[85px] rounded-br-[25px]">
                    <ExecutiveLeadersSection bgColor={""} execLeaders={executiveLeadership} />
                </div>

                {/* <div className="bg-black py-16">
                <GlobalStrategistsSection globalStrategists={globalStrategists} />
            </div> */}

                <div className="bg-black py-16">
                    <AmbassadorSection ambassador={ambassadorsList} />
                </div>

                <div className="bg-black md:py-16">
                    <HistorySection className="border-2  bg-[#181818] py-5 lg:py-10 lg:px-10 rounded-2xl" bgImage={historyData.bgImage} title={historyData.title} description={historyData.description} />
                </div>

                <div className="bg-black pt-16">
                    <BannerContainer
                        bgImage={bgImage}
                        className="bg-bottom bg-no-repeat bg-contain sm:bg-cover sm:bg-center pb-30 md:pb-0"
                    >
                        <div className="container flex flex-col items-center gap-1 mb-[-20px]">
                            <GradientTitle text={globalExpansionData.title} className="text-[30px] lg:text-[48px] text-center" theme="dark" />
                            <MultiParagraphs description={globalExpansionData.description} className="text-center" />
                        </div>
                    </BannerContainer>
                </div>

            </div>
        </html>


    )
}

export default AboutUs


