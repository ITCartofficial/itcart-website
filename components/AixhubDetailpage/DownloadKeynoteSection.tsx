"use client"
import React from "react";
import OutlineBtn from "../buttons/OutlineBtn";
import { FaArrowRight } from "react-icons/fa6";
import GradientTitle from "../typography/GradientTitle";

interface DownloadKeynoteSectionProps {
    title: string;
    subTitle?: string;
    btnName: string;
    btnUrl: string;
    bgImage?: string; // optional
}

const DownloadKeynoteSection: React.FC<DownloadKeynoteSectionProps> = ({
    title,
    subTitle,
    btnName,
    bgImage,
}) => {
    return (
        <section
            className="
        relative w-full h-[400px] 
        md:h-[350px] 
        flex items-center justify-center
        text-white
        bg-cover  bg-no-repeat
      "
            style={{
                backgroundImage: `url(${bgImage || "/images/fueld2025/downloadimage.jpg"})`,
            }}
        >
            {/* overlay */}
            <div className="absolute inset-0 "></div>

            {/* content */}
            <div className="relative text-center w-full px-6">
                <div className="w-full flex justify-center">

                    <div className="flex w-full justify-center" >
                        <GradientTitle
                            text={title ? title : "Download the Full FUELD Dubai Keynote"}
                            as="h1"
                            theme="dark"
                            className={`text-[26px] text-center  lg:items-center sm:text-[32px] md:text-[36px] w-[70%] [1.2]`}
                        />
                    </div>
                </div>


                <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 my-10">
                    {subTitle ? subTitle : "   12 minutes that reframe how enterprises should think about AI, governance, intelligence, and the future of work."}
                </p>


                <div className="w-full flex justify-center mt-3">
                    <button

                        onClick={() => window.open("https://wa.me/918088849174", "_blank")}
                    >
                        <OutlineBtn
                            text={btnName || "Download the Keynote"}
                            textColor="#ffffff"
                            icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                        />
                    </button>
                </div>

            </div>
        </section >
    );
};

export default DownloadKeynoteSection;
