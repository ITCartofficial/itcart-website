import { useState } from "react";
import Image from "next/image";
import GradientTitle from "../typography/GradientTitle";

interface CollaborationItem {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    highlight?: string;
}

interface CollaburationSectionProps {
    futurSectionHeading: string;
    futurSectionDescription: string;
    collaburationItems?: CollaborationItem[];
}

function CollaborationSection({
    futurSectionHeading,
    futurSectionDescription,
    collaburationItems = [],
}: CollaburationSectionProps
) {
    const [activeId, setActiveId] = useState<number | null>(1);

    return (
        <div className="bg-black text-white px-4">
            {/* Section Title */}
            <div className="max-w-5xl mx-auto text-center mb-8 lg:mb-14">
                <GradientTitle
                    text={futurSectionHeading || "Collaboration Excellence"}
                    theme="dark"
                    className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight"
                />
                {futurSectionDescription && (
                    <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-base sm:text-lg">
                        {futurSectionDescription}
                    </p>
                )}
            </div>

            {/* Interactive Grid */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-6">
                {collaburationItems.map((item) => {
                    const isActive = activeId === item.id;

                    return (
                        <div
                            key={item.id}
                            className={`relative cursor-pointer overflow-hidden rounded-[20px] shadow-[0_0_25px_rgba(0,255,255,0.15)] transition-all duration-500 ease-in-out
                                ${isActive ? "lg:flex-[2] flex-auto h-[600px] sm:h-[500px] md:h-[550px]" : "lg:flex-[1] flex-auto  h-[170px] sm:h-[500px] md:h-[550px]"} 
                                `}
                            onMouseEnter={() => setActiveId(item.id)}
                            onClick={() => setActiveId(item.id)}
                        >
                            {/* Image Background - Always visible */}
                            <Image
                                src={item.imageSrc}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />

                            {/* Teal overlay for active (semi-transparent to see image through) */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br from-[#4DB8C4]/90 to-[#2A9BA5]/90 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"
                                    }`}
                            ></div>

                            {/* Gradient overlay for inactive */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${isActive ? "opacity-0" : "opacity-100"
                                    }`}
                            ></div>

                            {/* Content - Vertically Centered */}
                            <div className={`absolute inset-0 z-20 flex flex-col ${isActive ? 'justify-center' : 'justify-end pb-6 sm:pb-8'} px-6 sm:px-8 my-9`}>
                                {
                                    isActive ?
                                        <div className={`${isActive ? "" : "mb-[-35px] md:mb-0"} `}>
                                            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight text-white">
                                                {item.title}
                                            </p>
                                        </div>
                                        :
                                        <div className="">
                                            <GradientTitle
                                                text={item.title || "Collaboration Excellence"}
                                                theme="dark"
                                                className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight"
                                            />

                                        </div>
                                }

                                {isActive && (
                                    <p className="text-white text-sm sm:text-base leading-relaxed mt-3 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[90%] ">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CollaborationSection;