import Image from "next/image";
import BodyText from "../typography/BodyText";
import GradientTitle from "../typography/GradientTitle";

interface SolutionGridProps {
    className?: string;
    CapabilitySections?: {
        gradient?: string;
        title: string;
        description: string;
        icon: string;
        image: string;
    }[];
    capabilitiSectionHeading?: string;
    capabilitiSectionDescription?: string;
}

export default function SolutionGrid({
    className = "",
    CapabilitySections = [],
    capabilitiSectionHeading,
    capabilitiSectionDescription
}: SolutionGridProps) {
    return (
        <div className={`w-full bg-black text-white px-4 sm:px-6 ${className}`}>
            {/* Header Section */}
            <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16">
                <GradientTitle
                    text={capabilitiSectionHeading ?? ''}
                    theme="dark"
                    className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight"
                />
                <BodyText
                    text={capabilitiSectionDescription ?? ''}
                    color="#ffffff"
                    className="text-[14px] sm:text-[16px] mt-3"
                />
            </div>

            {/* Grid Section */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 auto-rows-fr">
                {CapabilitySections.map((service, index) => (
                    <div
                        key={index}
                        className="rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#45C2CC] text-[#45C2CC] 
                        bg-[#1B1B1B] hover:text-white hover:bg-[#45C2CC]"
                    >
                        <div className="flex flex-col sm:flex-row h-full">
                            <div className="relative w-full sm:w-[45%] h-64 sm:h-auto flex-shrink-0 overflow-hidden ">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 45vw"
                                    className="object-cover"
                                    priority={index < 2}
                                />
                            </div>

                            <div className="w-full sm:w-[55%] p-6 sm:p-8 flex flex-col">
                                {/* <div className="bg-[#45C2CC] rounded-full w-14 h-14 flex items-center justify-center mb-4 flex-shrink-0">
                                    <Image
                                        src={service.icon}
                                        alt={`${service.title} icon`}
                                        width={28}
                                        height={28}
                                        className="object-contain"
                                    />
                                </div> */}

                                <h3 className="text-xl sm:text-2xl font-semibold  mb-4 leading-tight">
                                    {service.title}
                                </h3>

                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}