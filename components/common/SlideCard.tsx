import React from "react";
import Image from "next/image";

interface SlideCardProps {
  imgSrc: string;
  altText: string;
  position: "left" | "center" | "right" | "hidden";
  description?: {
    title?: string;
    text?: string;
  };
}

const SlideCard: React.FC<SlideCardProps> = ({
  imgSrc,
  altText,
  position,
  description,
}) => {
  const positionClasses = {
    left: "transform scale-90 rotate-[-6deg] -translate-x-[115%] translate-y-4 opacity-60 z-0 w-[70%] md:w-[40%] w-[300px]",
    center:
      "transform scale-110 rotate-0 translate-x-0 translate-y-0 opacity-100 z-10 w-[70%] md:w-[40%] py-3",
    right:
      "transform scale-90 rotate-[6deg] translate-x-[115%] translate-y-4 opacity-60 z-0  w-[70%] md:w-[40%] w-[300px]",
    hidden: "hidden",
  };

  return (
    <div
      className={`absolute top-0 transition-all duration-500 ease-in-out  ${positionClasses[position]}`}
    >
      <div className="relative rounded-3xl overflow-hidden shadow-xl ">
        <Image
          src={imgSrc}
          alt={altText}
          width={800}
          height={200}
          className="w-full h-50 md:h-70 object-cover rounded "
          loading="lazy"
        />
      </div>
      {description && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          {description.title && (
            <h3 className="text-white text-lg font-bold mb-2">
              {description.title}
            </h3>
          )}
        </div>
      )}
    </div>
  );
};

export default SlideCard;