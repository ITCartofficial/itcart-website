'use client'

import GradientTitle from "@/components/typography/GradientTitle"
import { ImageInfoCardProps } from "@/types/PropsTypes"
import OutlineBtn from "@/components/buttons/OutlineBtn"
import { FaArrowRight } from "react-icons/fa6"
import Image from "next/image"
import { AiSectionData } from "@/lib/data/aiSectionData"
import { useState } from "react"

type AiSectionProps = {
    title: string
    cardDetails: ImageInfoCardProps[]
}

const AiSection: React.FC<AiSectionProps> = ({ title }) => {
    const [clickedImage, setClickedImage] = useState("/images/aiSection/AiXHub.png")

    return (
        <section className="w-full flex flex-col items-center text-center px-4 sm:px-8 md:px-12 lg:px-20 py-10 lg:py-20">
            {/* Section Title */}
            <GradientTitle
                text={title}
                className="text-[28px] sm:text-[36px] lg:text-[48px] leading-tight max-w-[90%] md:max-w-[70%] mb-8 lg:mb-12"
                theme="dark"
            />

            <div className="flex flex-col w-full max-w-7xl divide-y divide-[#333333]">
                {AiSectionData.map((item, index) => {
                    const isActive = clickedImage === item.image

                    return (
                        <div
                            key={index}
                            onClick={() => setClickedImage(item.image)}
                            className={`flex lg:flex-row items-start  py-6 gap-6 cursor-pointer transition-all duration-300 ${isActive ? "bg-[#0b0b0b]/20 " : ""}`}
                        >
                            {/* Left Column: ID */}
                            <div className="flex  justify-start lg:w-[6%] ">
                                <span className={`${isActive ? "text-[#2BADB7]" : "text-[#fff]"} font-bold text-[18px] sm:text-[20px] lg:text-[22px]`}>
                                    {item.id}
                                </span>
                            </div>

                            {/* Active Image (Left side) */}
                            {isActive && (
                                <div className="hidden lg:block w-[400px] xl:w-[500px] h-[240px] xl:h-[280px] rounded-[20px] overflow-hidden border border-[#2BADB7]">
                                    <Image
                                        src={clickedImage}
                                        alt={item.title}
                                        width={500}
                                        height={280}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            )}

                            {/* Right side: title + description in same line */}
                            <div className="flex flex-col lg:flex-1 text-left w-full ">
                                {isActive ? (
                                    <div className="flex flex-col lg:items-start lg:gap-4 mt-auto ">
                                        <h2 className="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] whitespace-nowrap text-[#2BADB7] font-bold ">
                                            {item.title}
                                        </h2>
                                        <p className="text-white text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed opacity-90 max-w-[700px] lg:max-w-none mt-2 lg:mt-0">
                                            {item.description}
                                        </p>
                                    </div>
                                ) : (
                                    <h3 className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] text-white">
                                        {item.title}
                                    </h3>
                                )}

                                {/* Mobile Image below for active */}
                                {isActive && (
                                    <div className="lg:hidden w-full h-[200px] sm:h-[240px] md:h-[280px] rounded-[20px] overflow-hidden border border-[#2BADB7] mt-4">
                                        <Image
                                            src={clickedImage}
                                            alt={item.title}
                                            width={550}
                                            height={300}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Button */}
            <div className="flex justify-center mt-10">
                <OutlineBtn
                    url="/solutions"
                    text="Show More"
                    textColor="#ffffff"
                    icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                />
            </div>
        </section>
    )
}

export default AiSection
