import React, { useRef } from "react";
import GradientTitle from "@/components/typography/GradientTitle";
import CardSlider, { CardSliderRef } from "@/components/common/CardSlider";
import { IconInfoCardProps } from "@/types/PropsTypes";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

type HorizontalSliderSectionProps = {
    cardLists: IconInfoCardProps[];
    text: string;
};

const HorizontalSliderSection: React.FC<HorizontalSliderSectionProps> = ({ text, cardLists }) => {
    const sliderRef = useRef<CardSliderRef>(null);

    return (
        <div className="flex flex-col gap-8">
            <div className="container flex md:flex-row flex-col justify-between mx-auto lg:px-10 items-center">
                <GradientTitle
                    text={text}
                    className="text-[30px] lg:text-[48px] lg:w-[60%] leading-tight md:text-center lg:text-left  pl-4 md:pl-0"
                    theme="dark"
                />

                {/* Navigation Buttons */}
                <div className="flex  lg:flex items-center md:justify-center ml-auto md:ml-0 mt-4 md:mt-0 gap-2 md:gap-4">
                    <button
                        onClick={() => sliderRef.current?.slidePrev()}
                        className="flex items-center justify-center md:w-12 md:h-12 w-10 h-10 rounded-full bg-[#2BADB7] border border-transparent text-white hover:bg-transparent hover:border-[#2BADB7] hover:text-[#2BADB7] transition-all duration-300 shadow-md"
                        aria-label="Previous slide"
                    >
                        <FaArrowLeft className="text-lg" />
                    </button>

                    <button
                        onClick={() => sliderRef.current?.slideNext()}
                        className="flex items-center justify-center md:w-12 md:h-12 w-10 h-10 rounded-full bg-[#2BADB7] border border-transparent text-white hover:bg-transparent hover:border-[#2BADB7] hover:text-[#2BADB7] transition-all duration-300 shadow-md"
                        aria-label="Next slide"
                    >
                        <FaArrowRight className="text-lg" />
                    </button>
                </div>
            </div>

            <div className="md:mt-4 mt-2">
                <CardSlider ref={sliderRef} cardLists={cardLists} />
            </div>
        </div>
    );
};

export default HorizontalSliderSection;
