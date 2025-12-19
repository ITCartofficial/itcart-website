import OperativeSystem from "@/components/AixhubDetailpage/OperativeSystem";
import StrugglingPoint from "@/components/AixhubDetailpage/StrugglingPoint";
import OutlineBtn from "@/components/buttons/OutlineBtn";
import SolutionGrid from "@/components/DetailPageComponents/SolutionGrid";
import BodyText from "@/components/typography/BodyText";
import GradientTitle from "@/components/typography/GradientTitle";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";


import VerticalHeroBanner from "@/components/verticalDetailPage/VerticalHeroBanner";
import AixHubVerticalBanner from "@/components/AixhubDetailpage/AixHubVerticalBanner";
import WhyAIFailingSection from "@/components/AixhubDetailpage/WhyAIFailingSection";
import LeadershipInsightSection from "@/components/AixhubDetailpage/LeadershipInsightSection ";
import DownloadKeynoteSection from "@/components/AixhubDetailpage/DownloadKeynoteSection";
import EosOperatingSystemSection from "@/components/AixhubDetailpage/EosOperatingSystemSection";
import Timeline100Day from "@/components/AixhubDetailpage/Timeline100Day";


const AixhubDetailpage = () => {

    return (
        <div className="bg-black pace-y-15 lg:space-y-25 mt-10">
            <AixHubVerticalBanner />

            <div className="bg-black container mx-auto lg:px-10">
                <WhyAIFailingSection />
            </div>

            <div className="bg-black container mx-auto lg:px-10">
                <LeadershipInsightSection />
            </div>

            <DownloadKeynoteSection
                title=""
                subTitle=""
                btnName=""
                btnUrl=""
                bgImage=""
            />

            <EosOperatingSystemSection />
            {/* LeadershipInsightSection */}

            <section className="mb-16">
                <div className="bg-black container mx-auto lg:px-10">
                    <StrugglingPoint />
                </div>
            </section>

            <Timeline100Day />

            <DownloadKeynoteSection
                title="Your Enterprise Already Has AI. Now It Needs an Operating System."
                subTitle=" Start with a conversation, not a demo."
                btnName="Request an Executive Discussion"
                btnUrl=""
                bgImage="/images/fueld2025/bgtwo.png"

            />
        </div>
    )
}
export default AixhubDetailpage;
