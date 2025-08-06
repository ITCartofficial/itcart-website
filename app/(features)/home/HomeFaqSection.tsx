import React from 'react';
import { AccordionItem } from '@/components/common/Accordion';
import Faq from '@/components/common/Faq';

// Props interface for the reusable component
export interface HomeFaqSectionProps {
  faqs: AccordionItem[];
  label?: string;
  mainTitle?: string;
  titleColor?: string;
  accentColor?: string;
  backgroundColor?: string;
  maxVisible?: number;
  className?: string;
}

const HomeFaqSection: React.FC<HomeFaqSectionProps> = ({
  faqs,
  label = "FAQs",
  mainTitle = "Everything you need to know about",
  titleColor = "white",
  accentColor = "#ffffff",
  backgroundColor = "#131313",
  maxVisible = 7,
  className = "",
}) => {
  return (
    <div className={`h-full ${className}`}>
      <Faq
        label={label}
        mainTitle={mainTitle}
        faqs={faqs}
        titleColor={titleColor}
        accentColor={accentColor}
        backgroundColor={backgroundColor}
        maxVisible={maxVisible}
      />
    </div>
  );
};

export default HomeFaqSection;

