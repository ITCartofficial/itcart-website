import React from "react";
import Image from "next/image";


interface SlideCardProps {
    imgSrc: string;
    prompt: string;
    position: "left" | "center" | "right" | "hidden";
}

const SlideCard: React.FC<SlideCardProps> = ({ imgSrc, prompt, position }) => {
    const positionClasses = {
        left: "transform scale-90 rotate-[-6deg] -translate-x-[115%] translate-y-4 opacity-60 z-0",
        center: "transform scale-100 rotate-0 translate-x-0 translate-y-0 opacity-100 z-10",
        right: "transform scale-90 rotate-[6deg] translate-x-[115%] translate-y-4 opacity-60 z-0",
        hidden: "hidden",
    };


    return (
        <div
            className={`absolute top-0 transition-all duration-500 ease-in-out w-[70%] md:w-[40%] ${positionClasses[position]}`}
        >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                    src={imgSrc}
                    alt={prompt}
                    width={800}
                    height={400}
                    className="w-full h-[300px] object-cover"
                />
            </div>
        </div>
    );
};

export default SlideCard;









