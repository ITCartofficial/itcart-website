'use client';

import { useState } from "react";
import Accordion from "@/components/molecules/common/Accordion";
import ImageContainer from "@/components/atoms/common/ImageContainer";

import { FaqWithImageProps } from "@/types/PropsTypes";

const FaqWithImage: React.FC<FaqWithImageProps> = ({ faqsData, faqsCount, }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-start w-full max-w-screen lg:max-w-full lg:mx-auto py-10">
      {/* Left – Image */}
      <div className="hidden lg:flex justify-end pr-10">
        {activeIndex !== null && (
          <ImageContainer
            src={faqsData[activeIndex].image}
            alt={faqsData[activeIndex].title}
            width={400}
            height={300}
            className="rounded-xl shadow-lg object-cover w-[350px] h-auto border border-[#45C2CC]"
          />
        )}
      </div>

      {/* Right – Accordions */}
      <div className="flex flex-col gap-4">
        {faqsData.slice(0, faqsCount).map((faq, index) => (
          <Accordion
            key={index}
            title={faq.title}
            description={faq.description}
            active={activeIndex === index}
            onClick={() => handleToggle(index)}
            titleSize="20px"
            descriptionSize="16px"
            textAlign="left"
            lineClamp={3}
            imgUrl={activeIndex === index ? faq.image : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqWithImage;
