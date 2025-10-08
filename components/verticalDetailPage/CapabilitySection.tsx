import React from "react";
import GradientTitle from "../typography/GradientTitle";
import BodyText from "../typography/BodyText";

interface Capability {
    gradient: string;
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

const CapabilitySection: React.FC<CapabilitySectionProps> = ({ CapabilitySections,
    capabilitiSectionHeading, itemePerRow,
    isBackgroundImage, capabilitiSectionDescription }) => {

    console.log("capabilitiSectionDescription", capabilitiSectionDescription);


    return (
        <section
            className="w-full text-white bg-black bg-cover bg-center"
            style={{
                backgroundImage: isBackgroundImage ? "url('/images/vertical/AiXQP_sectionbgimage.png')" : "none"
            }}
        >
            <section className="w-full text-white px-6 py-12 md:py-12 p-2">
                <div className="max-w-7xl mx-auto text-center mb-10">
                    <GradientTitle
                        text={capabilitiSectionHeading ?? ""}
                        theme="dark"
                        className="text-[22px] sm:text-[25px] md:text-[48px] w-full"
                    />

                    <BodyText
                        text={capabilitiSectionDescription ?? ""}
                        color="#ffffff"
                        className="text-[16px] mt-3"
                    />
                </div>

                <div className={`grid grid-cols-1 sm:grid-cols-${itemePerRow ? itemePerRow : 2} gap-6 md:gap-8`}>
                    {CapabilitySections?.map((cap, index) => (
                        <div
                            key={index}
                            className={`rounded-xl p-6 md:p-3 bg-gradient-to-b border border-[#45C2CC]  hover:bg-gradient-to-b hover:${cap.gradient}  shadow-lg`}
                        >

                            <GradientTitle
                                text={cap.title}
                                theme="dark"
                                className="text-[22px] sm:text-[20px] md:text-[24px] w-full leading-[1.3]"
                            />

                            <BodyText
                                text={cap.description}
                                color="#ffffff"
                                className="text-[16px] mt-3"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default CapabilitySection;
