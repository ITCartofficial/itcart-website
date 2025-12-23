"use client"
import StrugglingPoint from "@/components/AixhubDetailpage/StrugglingPoint";
import AixHubVerticalBanner from "@/components/AixhubDetailpage/AixHubVerticalBanner";
import WhyAIFailingSection from "@/components/AixhubDetailpage/WhyAIFailingSection";
import LeadershipInsightSection from "@/components/AixhubDetailpage/LeadershipInsightSection ";
import DownloadKeynoteSection from "@/components/AixhubDetailpage/DownloadKeynoteSection";
import EosOperatingSystemSection from "@/components/AixhubDetailpage/EosOperatingSystemSection";
import Timeline100Day from "@/components/AixhubDetailpage/Timeline100Day";
import DownloadSecetionTwo from "@/components/AixhubDetailpage/DownloadSecetionTwo";
import AiRoadmap from "@/components/AixhubDetailpage/AiRoadmap";


const AixhubDetailpage = () => {

    return (
        <div className="bg-black space-y-15 lg:space-y-25 mt-10">
            <AixHubVerticalBanner />

            <div className="bg-black container mx-auto lg:px-10">
                <WhyAIFailingSection />
            </div>

            <div className="bg-black container mx-auto lg:px-10">
                <LeadershipInsightSection />
            </div>

            <DownloadSecetionTwo
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

            {/* <Timeline100Day /> */}

            <AiRoadmap />

            <DownloadKeynoteSection
                title="Your Enterprise Already Has AI. Now It Needs the Operating System."
                subTitle=" Start with a conversation, not a demo."
                btnName="Request an Executive Discussion"
                btnUrl=""
                bgImage="/images/fueld2025/bgtwo.png"
            />
        </div>
    )
}
export default AixhubDetailpage;
