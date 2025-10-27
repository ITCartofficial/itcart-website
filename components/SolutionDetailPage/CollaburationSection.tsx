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
    collaburationItems?: CollaborationItem[]; // ✅ array and optional
}

function CollaborationSection({
    futurSectionHeading,
    futurSectionDescription,
    collaburationItems = [], // default empty array
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
                ${isActive ? "lg:flex-[2] flex-auto" : "lg:flex-[1] flex-auto"}
                h-[400px] sm:h-[500px] md:h-[550px]`}

                            onMouseEnter={() => setActiveId(activeId === item.id ? null : item.id)}
                            onClick={() =>
                                setActiveId(activeId === item.id ? null : item.id)
                            }
                        >
                            {/* Image Background */}
                            <Image
                                src={item.imageSrc}
                                alt={item.title}
                                fill
                                className={`object-cover transition-transform duration-700 ease-out ${isActive ? "scale-105" : ""
                                    }`}
                            />

                            {/* Gradient overlay */}
                            <div
                                className={`absolute inset-0 transition-all duration-500 ${isActive
                                    ? "bg-black/30"
                                    : "bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                                    }`}
                            ></div>

                            {/* Bottom content */}
                            <div className="absolute w-full bottom-6 left-6 sm:bottom-8 sm:left-8 z-20">

                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">
                                    {item.title.split(" ")[0]}{" "}
                                    <span className="text-cyan-400">
                                        {item.highlight || item.title.split(" ")[1]}
                                    </span>
                                </h3>

                                {/* Description only for active item */}
                                {isActive && (
                                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed mt-1 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
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

