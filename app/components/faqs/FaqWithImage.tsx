'use client';

import { useState } from "react";
import Accordion from "@/app/components/common/Accordion2";
import ImageContainer from "@/app/components/common/ImageContainer";

import { FaqWithImageProps } from "@/types/PropsTypes";

const FaqWithImage: React.FC<FaqWithImageProps> = ({ faqsData, faqsCount, }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="grid grid-cols-1 gap-8 items-start w-full lg:max-w-full lg:mx-auto">
      {/* Left – Image */}
      <div className="hidden lg:flex justify-end relative w-1/2">
        {activeIndex !== null && (
          <ImageContainer
            src={faqsData[activeIndex].image}
            alt={faqsData[activeIndex].title}
            width={400}
            height={300}
            className="absolute top-8 left-32 rounded-xl shadow-lg object-cover h-auto border border-[#45C2CC]"
          />
        )}
      </div>

      {faqsData.slice(0, faqsCount).map((faq, index) => (
        <div className="grid lg:grid-cols-2 gap-4 w-full border-b last:border-none border-[#333] pb-4" key={index}>
          <div className="px-8 hidden lg:block text-white">0{index + 1}</div>
          <Accordion
            title={faq.title}
            description={faq.description}
            active={activeIndex === index}
            onClick={() => handleToggle(index)}
            titleSize="20px"
            descriptionSize="16px"
            textAlign="left"
            lineClamp={3}
            imgUrl={activeIndex === index ? faq.image : undefined}
            index={index + 1}
          />
        </div>
      ))}
    </div>
  );
};

export default FaqWithImage;
