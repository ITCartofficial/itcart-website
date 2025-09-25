import OutlineBtn from "@/components/buttons/OutlineBtn";
import VideoContainer from "@/components/common/VideoContainer";
import BodyText from "@/components/typography/BodyText";
import GradientTitle from "@/components/typography/GradientTitle";
import { FaArrowRight } from "react-icons/fa6";

type VideoHeroBannerProps = {
    videoSrc: string;
    poster: string;
    heading: string;
    description: string;
    buttonText: string;
    className?: string;
    onButtonClick?: () => void; // Optional callback for button click
};

const VideoHeroBanner = ({ className, heading, description, buttonText }: VideoHeroBannerProps) => {
    return (
        <section className={`relative w-full ${className} border-b border-[#303030]`}>
            <VideoContainer
                src="/videos/home-banner.mp4"
                poster="/images/home-banner.jpg"
                bgClass="translate-y-[-20%] lg:translate-y-[-10%] w-[100%] h-auto lg:w-full lg:h-full"
            >
                <div className="h-full w-full flex flex-col items-center lg:items-start justify-between gap-6 pt-60 pb-16 lg:pt-4 lg:pb-24 lg:translate-y-[50%]">
                    <GradientTitle text={heading} className="text-[30px] lg:text-[64px] leading-[1.3em] text-center lg:text-left" />
                    <BodyText text={description} color="#ffffff" className="w-[90%] lg:w-2/3 text-[24px] sm:text-base text-center lg:text-left"/>
                    <OutlineBtn url="/contact-us" text={buttonText} icon={<FaArrowRight className="text-sm font-semibold text-white" />} textColor="#ffffff" />
                </div>
            </VideoContainer>

        </section>
    );
};

export default VideoHeroBanner;
