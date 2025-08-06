import React from "react";
import Image from "next/image";
import GradientTitle from "../typography/GradientTitle";
import BodyText from "../typography/BodyText";

interface AwardCardProps {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
}

const AwardCard: React.FC<AwardCardProps> = ({
  imgSrc,
  altText,
  title,
  description,
}) => (
  <div className="bg-black rounded-2xl p-4 md:p-8 mx-auto shadow-lg flex flex-col items-center">
    <div className="w-full rounded-xl overflow-hidden aspect-[2/1] bg-neutral-900">
      <Image
        src={imgSrc}
        alt={altText}
        width={600}
        height={300}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="mt-8 flex flex-col items-center gap-2">
      <GradientTitle
        text={title}
        lineHeight="1.2"
        className="text-[24px] md:text-[28px] text-center"
        theme="dark"
      />
      <BodyText
        text={description}
        color="white"
        className="text-sm md:text-sm text-center"
      />
    </div>
  </div>
);

export default AwardCard;
