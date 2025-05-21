import BodyText from '@/components/atoms/typography/BodyText';
import HeadingText from '@/components/atoms/typography/HeadingText';
import React from 'react';

interface NumberedCardProps {
  number: string;
  title: string;
  author: string;
  date: string;
  onClick?: () => void;
}

const NumberedCard: React.FC<NumberedCardProps> = ({
  number,
  title,
  author,
  date,
  onClick
}) => {
  return (
    <div 
      className="bg-black text-white pb-2 rounded-lg w-full max-w-sm cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex gap-3">
        {/* Left column - Number */}
        <div className="text-2xl font-bold text-gray-400 group-hover:text-[#45c2cc]">
          {number}
        </div>

        {/* Right column - Title, Author, Date */}
        <div className="flex-1">
          {/* Title */}
          <HeadingText 
            text={title}
            fontWeight="semibold"
            className="text-base leading-tight mb-3 group-hover:text-[#45c2cc]"
          />

          {/* Author and date info */}
          <div className="flex items-center text-xs text-gray-400">
            <BodyText text={author} className="text-xs" />
            <span className="mx-2">—</span>
            <BodyText text={date} className="text-xs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberedCard;
