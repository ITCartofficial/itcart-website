import Image from "next/image";
import { FC } from "react";
import GradientTitle from "../typography/GradientTitle";
import BodyText from "../typography/BodyText";
import OutlineBtn from "../buttons/OutlineBtn";
import { FaArrowRight } from "react-icons/fa6";

interface MobileVerticalHeroBannerProps {
    title: string;
    description?: string;
    ctaText?: string;
    ctaUrl?: string;
    bannerButtonText?: string;
    mobileBanner?: string;
}

const MobileVerticalHeroBanner: FC<MobileVerticalHeroBannerProps> = ({
    title, description, ctaText, mobileBanner, ctaUrl
}) => {

    console.log("mobileBannerImage", mobileBanner);


    return (
        <div className="bg-[#1a1a1a] text-white p-6 rounded-2xl mx-auto flex flex-col space-y-5 mt-10">
            {/* Image */}
            <div className="w-full overflow-hidden rounded-xl mt-4">
                <Image
                    src={mobileBanner ?? ""}
                    alt="Digital Workplace"
                    width={400}
                    height={200}
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>

            {/* Heading */}
            <GradientTitle
                text={title}
                theme="dark"
                className="text-[28px] sm:text-[32px] md:text-[38px] leading-[1.2]"
            />

            <BodyText
                text={description ?? ''}
                color="#ffffff"
                className="text-sm text-[15px] w-[90%]"
            />

            {/* Button */}
            <OutlineBtn
                url={ctaUrl}
                text={ctaText ?? "Learn More"}
                textColor="#ffffff"
                icon={<FaArrowRight className="text-sm font-semibold text-white" />}
            />
        </div>
    );
};

export default MobileVerticalHeroBanner;
