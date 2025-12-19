import React from "react";
import GradientTitle from "../typography/GradientTitle";
import OutlineBtn from "../buttons/OutlineBtn";
import { FaArrowRight } from "react-icons/fa6";


const AixHubVerticalBanner: React.FC = () => {
    return (
        <section className="relative w-full min-h-[80vh] flex items-center justify-center">
            {/* Background overlay image */}
            <div
                className="absolute inset-0 bg-cover bg-center "
                style={{
                    backgroundImage:
                        "url('/images/fueld2025/fueldannerIMage.jpg')", // <-- replace with your image path
                }}
            ></div>

            {/* Content */}
            <div className="relative max-w-5xl mx-auto px-4 text-center text-white ">

                <GradientTitle
                    text={"AI Alone Doesn’t Transform Enterprises. "}
                    as="h1"
                    theme="dark"
                    className={`text-[26px]  lg:items-center sm:text-[32px] md:text-[48px] [1.2]`}
                />

                <h2 className="mt-4 text-[15] md:text-[19px] font-bold">
                    AiXHub unveiled at FUELD Dubai 2025 by Mohammed Rohim Uddin
                </h2>

                {/* <p className="mt-6 italic font-medium text-[18px] md:text-lg">
                    Unveiled at FUELD Dubai 2025 by Mohammed Rohim Uddin
                </p> */}

                {/* <p className="mt-2 text-sm text-[18px] opacity-90">
                    Why enterprises don’t fail at AI technology, they fail at AI operating problem.
                </p> */}

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
{/* 
                    <OutlineBtn
                        url="/contact-us"
                        text=" Explore AiXHub EOS "
                        textColor="#ffffff"
                        icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                    /> */}

                    <OutlineBtn
                        url="/contact-us"
                        text=" Download the Keynote Slides "
                        textColor="#ffffff"
                        icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                    />

                </div>
            </div>
        </section>
    );
};

export default AixHubVerticalBanner;