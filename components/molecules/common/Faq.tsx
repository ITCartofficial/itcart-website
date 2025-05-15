'use client'
import Accordion, { AccordionItem } from '@/components/atoms/common/Accordion';
import HeadingText from '@/components/atoms/typography/HeadingText';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

// Props for the FAQ Section organism
export interface FaqSectionProps {
  mainTitle: string;
  subtitle: string;
  faqs: AccordionItem[];
  titleColor?: string;
  subtitleColor?: string;
  accentColor?: string;
  backgroundColor?: string;
  maxVisible?: number;
  className?: string;
}

const Faq: React.FC<FaqSectionProps> = ({
  mainTitle,
  subtitle,
  faqs,
  titleColor = 'white',
  subtitleColor = '#8FD7DA', // Light teal color from the screenshot
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
      className={`w-full py-12 border-b-2 border-b-zinc-600 ${className}`} 
      style={{ backgroundColor }}
    >
      {/* Title Section */}
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <HeadingText 
            text={mainTitle}
            color={titleColor}
            textAlign="center"
            fontSize="2.5rem"
            className="mb-2"
          />
          <HeadingText 
            text={subtitle}
            color={subtitleColor}
            textAlign="center"
            fontSize="2.5rem"
            className="mb-8"
          />
        </div>
        
        {/* Chevron to expand/collapse */}
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







