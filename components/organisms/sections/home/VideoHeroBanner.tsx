import OutlineBtn from "@/components/atoms/buttons/OutlineBtn";
import VideoContainer from "@/components/atoms/common/VideoContainer";
import BodyText from "@/components/atoms/typography/BodyText";
import GradientTitle from "@/components/atoms/typography/GradientTitle";
import { FaArrowRight } from "react-icons/fa6";

type VideoHeroBannerProps = {
    videoSrc: string;
    poster: string;
    heading: string;
    description: string;
    buttonText: string;
    className?: string;
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
                    <GradientTitle text={heading} className="leading-[1.3em] lg:text-[64px] text-[36px] text-center lg:text-left" />
                    <BodyText text={description} color="#ffffff" className="lg:w-2/3 w-[90%] text-base text-center lg:text-left" />
                    <OutlineBtn text={buttonText} icon={<FaArrowRight className="text-sm font-semibold text-white" />} textColor="#ffffff" />
                </div>
            </VideoContainer>

        </section>
    );
};

export default VideoHeroBanner;
