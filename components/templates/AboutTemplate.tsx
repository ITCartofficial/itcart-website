import CoreValueSection from "../organisms/sections/about/CoreValueSection"
import WhoWeAreSection from "../organisms/sections/about/WhoWeAreSection"
import HeroBanner from "../organisms/sections/HeroBanner"

import { coreValues } from '@/components/data/aboutPageData'

import MissionVisionSection from "../organisms/sections/about/MissionVisionSection"
import AIFrameworkSection from "../organisms/sections/about/AIFrameworkSection"

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


const AboutTemplate = () => {
    return (
        <div className="bg-black">
            <HeroBanner title="About Us"
                breadcrumbItems={[
                    { label: 'Home', url: '/' },
                    { label: 'About Us', url: '/about-us' }
                ]}
                backgroundImage="/images/about/about-hero-bg.jpg"
                className="bg-no-repeat"
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
                    className="border-2 border-[#565656] bg-[#181818] lg:py-10 lg:px-8 rounded-2xl"
                    button={{ text: "Read More", path: "/about-us" }}
                />
            </div>
        </div>
    )
}

export default AboutTemplate


