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
            <div className="container flex justify-between mx-auto lg:px-10 items-center">
                <GradientTitle
                    text={text}
                    className="text-[30px] lg:text-[50px] lg:w-[60%] leading-tight md:text-center lg:text-left"
                    theme="dark"
                />

                {/* Navigation Buttons */}
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={() => sliderRef.current?.slidePrev()}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2BADB7] border border-transparent text-white hover:bg-transparent hover:border-[#2BADB7] hover:text-[#2BADB7] transition-all duration-300 shadow-md"
                        aria-label="Previous slide"
                    >
                        <FaArrowLeft className="text-lg" />
                    </button>

                    <button
                        onClick={() => sliderRef.current?.slideNext()}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2BADB7] border border-transparent text-white hover:bg-transparent hover:border-[#2BADB7] hover:text-[#2BADB7] transition-all duration-300 shadow-md"
                        aria-label="Next slide"
                    >
                        <FaArrowRight className="text-lg" />
                    </button>
                </div>
            </div>

            <CardSlider ref={sliderRef} cardLists={cardLists} />
        </div>
    );
};

export default HorizontalSliderSection;
