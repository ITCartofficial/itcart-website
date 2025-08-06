'use client';

import React, { useRef, useEffect, useState } from 'react';
// import BodyText from '@/components/atoms/typography/BodyText';
import BodyText from '../typography/BodyText';
// import HeadingText from '@/components/atoms/typography/HeadingText';
import HeadingText from '../typography/HeadingText';
import { AccordionProps } from '@/types/PropsTypes';
// import ImageContainer from '@/components/atoms/common/ImageContainer';
import ImageContainer from './ImageContainer';

const Accordion: React.FC<AccordionProps> = ({
  title,
  description,
  titleSize,
  descriptionSize,
  lineClamp = 3,
  textAlign,
  active = false,
  onClick,
  imgUrl,
  index
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (active && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [active]);

  return (
    <div className="group flex flex-col gap-4 w-full transition-all duration-300 ease-in-out">
      <button
        onClick={onClick}
        className={`text-left flex items-center ${active ? 'text-[#2BADB7]' : 'text-white'} transition-colors duration-300 ease-in-out`}
      >
        <div className="flex bg-[#2BADB7] text-white rounded-full w-6 h-6 items-center justify-center mr-2 font-bold md:hidden">
          {index}
        </div>
        <HeadingText text={title} fontSize={titleSize} textAlign={textAlign} />
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: `${height}px`,
          opacity: active ? 1 : 0,
          transition: 'max-height 0.4s ease, opacity 0.3s ease',
        }}
        className="overflow-hidden"
      >
        {imgUrl && <ImageContainer
          src={imgUrl}
          alt={title}
          width={200}
          height={150}
          className="lg:hidden rounded-lg shadow-lg object-cover w-full h-auto border border-[#45C2CC] mb-4"
        />}
        <BodyText
          text={description}
          fontSize={descriptionSize}
          lineClamp={lineClamp}
          textAlign={textAlign}
          color='#ffffff'
        />
      </div>
    </div>
  );
};

export default Accordion;
