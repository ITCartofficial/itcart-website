import React from "react";
import GradientTitle from "../typography/GradientTitle";
import BodyText from "../typography/BodyText";

interface Capability {
    gradient?: string;
    title: string;
    description: string;
}

interface CapabilitySectionProps {
    CapabilitySections?: Capability[];
    capabilitiSectionHeading?: string;
    itemePerRow?: number;
    textColor?: string;
    isBackgroundImage?: boolean;
    capabilitiSectionDescription?: string;
}

const CapabilitySection: React.FC<CapabilitySectionProps> = ({
    CapabilitySections,
    capabilitiSectionHeading,
    itemePerRow = 2,
    isBackgroundImage,
    capabilitiSectionDescription,
}) => {
    return (
        <section
            className="w-full text-white bg-black bg-cover bg-center"
            style={{
                backgroundImage: isBackgroundImage
                    ? "url('/images/vertical/AiXQP_sectionbgimage.png')"
                    : "none",
            }}
        >
            <section className="w-full text-white px-6">
                {/* Section Heading */}
                <div className="max-w-7xl mx-auto text-center mb-7 md:mb-12">
                    <GradientTitle
                        text={capabilitiSectionHeading ?? ""}
                        theme="dark"
                        className="text-[28px] sm:text-[32px] md:text-[48px] font-bold"
                    />

                    {capabilitiSectionDescription && (
                        <BodyText
                            text={capabilitiSectionDescription}
                            color="#ffffff"
                            className="text-[16px] mt-4 max-w-2xl mx-auto"
                        />
                    )}
                </div>

                {/* Capability Cards Grid */}
                <div
                    className={`grid grid-cols-1 sm:grid-cols-${itemePerRow} gap-6 md:gap-8 max-w-7xl md:mx-10 `}
                >
                    {CapabilitySections?.map((cap, index) => (
                        <div
                            key={index}
                            className="relative rounded-xl p-6 md:p-8 border  text-[#45C2CC] hover:text-white border-[#45C2CC] hover:border-white shadow-lg overflow-hidden group transition-all duration-500 bg-[#151515]"
                        >
                            {/* Hover Gradient Overlay (FULL HEIGHT) */}
                            <div
                                className=" absolute inset-0  bg-gradient-to-b from-[#45C2CC]/80 via-[#1a1a1a]/60 to-black/10  opacity-0 group-hover:opacity-100 transition-all duration-100 "
                            ></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-[22px] sm:text-[20px] md:text-[24px] w-full leading-[1.3] font-bold">
                                    {cap.title}
                                </h3>
                                <BodyText
                                    text={cap.description}
                                    color="#ffffff"
                                    className="text-[16px] mt-3"
                                />
                            </div>
                        </div>

                    ))}

                </div>
            </section>
        </section>
    );
};

export default CapabilitySection;
