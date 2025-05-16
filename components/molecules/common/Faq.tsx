'use client'
import Accordion, { AccordionItem } from '@/components/atoms/common/Accordion';
import BodyText from '@/components/atoms/typography/BodyText';
import GradientTitle from '@/components/atoms/typography/GradientTitle';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

// Props for the FAQ Section organism
export interface FaqSectionProps {
  label: string;
  mainTitle: string;
  faqs: AccordionItem[];
  titleColor?: string;
  accentColor?: string;
  backgroundColor?: string;
  maxVisible?: number;
  className?: string;
}

const Faq: React.FC<FaqSectionProps> = ({
  label,
  mainTitle,
  faqs,
  titleColor = 'white',
  accentColor = '#8FD7DA',
  backgroundColor = 'black',
  maxVisible = 7,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the section expansion
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section
      className={`w-full h-full ${className}`}
      style={{ backgroundColor }}
    >
      {/* Title Section */}
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-6">
          <BodyText text={label} className='text-2xl pb-4' color='#ffffff' fontWeight='600' />
          <GradientTitle text={mainTitle} lineHeight="1.2" className="max-w-xl text-[50px]" theme='dark' />
        </div>
        <button
          onClick={toggleExpansion}
          className="flex justify-center items-center w-10 h-10 mx-auto transition-transform duration-300 cursor-pointer"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Collapse FAQs" : "Expand FAQs"}
        >
          {isExpanded ? (
            <FiChevronUp size={32} color={accentColor} />
          ) : (
            <FiChevronDown size={32} color={accentColor} />
          )}
        </button>
      </div>

      {/* Accordion Section - Conditionally rendered */}
      {isExpanded && (
        <div className="container mx-auto px-4 mt-8">
          <Accordion
            items={faqs}
            accentColor={accentColor}
            textColor={titleColor}
            maxVisible={maxVisible}
          />
        </div>
      )}
    </section>
  );
};

export default Faq;







