'use client';

import React, { useRef, useEffect, useState } from 'react';
import BodyText from '@/components/atoms/typography/BodyText';
import HeadingText from '@/components/atoms/typography/HeadingText';
import { AccordionProps } from '@/types/PropsTypes';
import ImageContainer from '@/components/atoms/common/ImageContainer';

const Accordion: React.FC<AccordionProps> = ({
  title,
  description,
  titleSize,
  descriptionSize,
  lineClamp = 3,
  textAlign,
  active = false,
  onClick,
  imgUrl
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
    <div className="group flex flex-col gap-2 w-full transition-all duration-300 ease-in-out">
      <button
        onClick={onClick}
        className={`text-left ${active ? 'text-[#2BADB7]' : ''} transition-colors duration-300 ease-in-out`}
      >
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
        />
      </div>
    </div>
  );
};

export default Accordion;
