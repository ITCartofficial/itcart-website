import CoreValueSection from "../organisms/sections/about/CoreValueSection"
import WhoWeAreSection from "../organisms/sections/about/WhoWeAreSection"
import HeroBanner from "../organisms/sections/HeroBanner"

import { coreValues, foundingMembers, executiveLeadership, globalStrategists, ambassadorsList, historyData } from '@/lib/data/aboutPageData'

import MissionVisionSection from "../organisms/sections/about/MissionVisionSection"
import AIFrameworkSection from "../organisms/sections/about/AIFrameworkSection"
import FoundingMembersSection from "../organisms/sections/about/FoundingMembersSection"
import ExecutiveLeadersSection from "../organisms/sections/about/ExecutiveLeadersSection"
import GlobalStrategistsSection from "../organisms/sections/about/GlobalStrategistsSection"
import AmbassadorSection from "../organisms/sections/about/AmbassadorSection"
import HistorySection from "../organisms/sections/about/HistorySection"
import BannerContainer from "../atoms/common/BannerContainer"
import GradientTitle from "../atoms/typography/GradientTitle"
import MultiParagraphs from "../molecules/common/MultiParagraphs"

const missionVisionData = {
    title: "Our Mission & Vision",
    description: "To become a global AI industry disruptor who transforms businesses with proprietary AI solutions, helping streamline operations, reduce risks, and drive scalable growth. iTCart harnesses AI that transforms enterprises with future-ready technology.<br>To revolutionize industries and deliver scalable and adaptive AI-powered solutions that shape the digital economy. ITCart's commitment extends beyond transformation, offering sustainable AI systems that redefine business success.",
    imageUrl: "/images/about-card-1.jpg",

}
const PatientSectionData = {
    title: "Patent-Pending AI Framework",
    description: "AiXHub is a patent-pending AI orchestration framework that unifies governance, automation, and human oversight to help enterprises build secure, scalable, and responsible AI systems. <br>We are industry trailblazers, revolutionizing the technology landscape by pioneering accessible and innovative technology solutions.",
    imageUrl: "/images/about-card-2.jpg",
}

const globalExpansionData = {
    title: "iTCart's Global Expansions",
    description: "The IT industry is not only central to modern businesses but also influences society as a whole. iTCart is designed to offer firms with a journey that goes beyond the ordinary. <br> We are dedicated to transforming lives through innovative IT solutions, improving the lives of millions globally. iTCart, an AI automation company known for its global expansion has its footprints in UAE, KSA, USA, and UK along with other APAC and European regions.",
    bgImage: "/images/contact/contact-bg.jpg",
}


const AboutTemplate = () => {
    return (
        <div className="bg-black">
            <HeroBanner title="About Us"
                breadcrumbItems={[
                    { label: 'Home', url: '/' },
                    { label: 'About Us', url: '/about-us' }
                ]}
                backgroundImage="/images/about/about-hero-bg.jpg"
                className="bg-no-repeat lg:max-h-[400px]"
            />
            <div className="bg-black py-16">
                <WhoWeAreSection />
            </div>
            <div className="bg-black py-16">
                <CoreValueSection coreValues={coreValues} />
            </div>
            <div className="bg-black py-16">
                <MissionVisionSection
                    missionVision={missionVisionData}
                    theme={'dark'}
                />
            </div>
            <div className="bg-black py-16">
                <AIFrameworkSection
                    aixFramework={PatientSectionData}
                    theme={'dark'}
                    reverse
                    className="border-2 border-[#565656] bg-[#181818] py-5 px-5 lg:py-10 lg:px-8 rounded-2xl"
                    button={{ text: "Read More", path: "/about-us" }}
                />
            </div>
            <div className="bg-white py-16 rounded-tl-[85px] rounded-tr-[85px]">
                <FoundingMembersSection
                    direction="row"
                    members={foundingMembers}
                    theme="light"
                />
            </div>
            <div className="bg-white py-16 rounded-bl-[85px] rounded-br-[85px]">
                <ExecutiveLeadersSection execLeaders={executiveLeadership} />
            </div>
            <div className="bg-black py-16">
                <GlobalStrategistsSection globalStrategists={globalStrategists} />
            </div>
            <div className="bg-black py-16">
                <AmbassadorSection ambassador={ambassadorsList} />
            </div>
            <div className="bg-black py-16">
                <HistorySection bgImage={historyData.bgImage} title={historyData.title} description={historyData.description} />
            </div>
            <div className="bg-black pt-16">
                <BannerContainer bgImage="/images/contact/contact-bg.jpg" className="lg:h-[90vh]">
                    <div className="container flex flex-col items-center gap-4">
                        <GradientTitle text={globalExpansionData.title} className="text-[30px] lg:text-[50px] text-center" theme="dark" />
                        <MultiParagraphs description={globalExpansionData.description} className="text-center" />
                    </div>
                </BannerContainer>
            </div>

        </div>
    )
}

export default AboutTemplate


