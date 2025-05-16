// 'use client'
// import Accordion, { AccordionItem } from '@/components/atoms/common/Accordion';
// import BodyText from '@/components/atoms/typography/BodyText';
// import GradientTitle from '@/components/atoms/typography/GradientTitle';
// import React, { useState, useRef, useEffect } from 'react';
// import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

// // Props for the FAQ Section organism
// export interface FaqSectionProps {
//   label: string;
//   mainTitle: string;
//   faqs: AccordionItem[];
//   titleColor?: string;
//   accentColor?: string;
//   backgroundColor?: string;
//   maxVisible?: number;
//   className?: string;
// }

// const Faq: React.FC<FaqSectionProps> = ({
//   label,
//   mainTitle,
//   faqs,
//   titleColor = 'white',
//   accentColor = '#8FD7DA',
//   backgroundColor = 'black',
//   maxVisible = 7,
//   className = '',
// }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [contentHeight, setContentHeight] = useState(0);
//   const accordionRef = useRef<HTMLDivElement>(null);

//   // Calculate the height of the accordion content
//   useEffect(() => {
//     if (accordionRef.current) {
//       setContentHeight(accordionRef.current.scrollHeight);
//     }
//   }, [isExpanded, faqs]);

//   // Toggle the section expansion
//   const toggleExpansion = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <section
//       className={`w-full h-full ${className}`}
//       style={{ backgroundColor }}
//     >
//       {/* Title Section */}
//       <div className="container mx-auto px-4 text-center">
//         <div className="flex flex-col items-center mb-6">
//           <BodyText text={label} className='text-2xl pb-4' color='#ffffff' fontWeight='600' />
//           <GradientTitle text={mainTitle} lineHeight="1.2" className="max-w-xl text-[50px]" theme='dark' />
//         </div>
//         <button
//           onClick={toggleExpansion}
//           className="flex justify-center items-center w-10 h-10 mx-auto transition-transform duration-300 cursor-pointer"
//           aria-expanded={isExpanded}
//           aria-label={isExpanded ? "Collapse FAQs" : "Expand FAQs"}
//         >
//           {isExpanded ? (
//             <FiChevronUp size={32} color={accentColor} className="transform transition-transform duration-300" />
//           ) : (
//             <FiChevronDown size={32} color={accentColor} className="transform transition-transform duration-300" />
//           )}
//         </button>
//       </div>

//       {/* Accordion Section - Always rendered but with height transition */}
//       <div 
//         className="container mx-auto px-4 mt-4 overflow-hidden transition-all duration-500 ease-in-out" 
//         style={{ 
//           maxHeight: isExpanded ? `${contentHeight}px` : '0',
//           opacity: isExpanded ? 1 : 0,
//         }}
//       >
//         <div ref={accordionRef}>
//           <Accordion
//             items={faqs}
//             accentColor={accentColor}
//             textColor={titleColor}
//             maxVisible={maxVisible}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Faq;






'use client'
import Accordion, { AccordionItem } from '@/components/atoms/common/Accordion';
import BodyText from '@/components/atoms/typography/BodyText';
import GradientTitle from '@/components/atoms/typography/GradientTitle';
import React, { useState, useRef, useEffect } from 'react';
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
  const [contentHeight, setContentHeight] = useState(0);
  const accordionRef = useRef<HTMLDivElement>(null);
  
  // Create a state to track changes in the child accordion
  const [childAccordionChange, setChildAccordionChange] = useState(0);

  // Function to force height recalculation
  const updateHeight = () => {
    setChildAccordionChange(prev => prev + 1);
  };

  // Calculate the height of the accordion content
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateContentHeight = () => {
      if (accordionRef.current) {
        // Add extra padding to ensure everything is visible
        setContentHeight(accordionRef.current.scrollHeight + 50);
      }
    };

    // Initial update
    updateContentHeight();

    // Set timeout to recalculate height after animations
    timeoutId = setTimeout(updateContentHeight, 300);

    // Set an interval to continuously update height while expanded
    const intervalId = setInterval(() => {
      if (isExpanded) {
        updateContentHeight();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [isExpanded, faqs, childAccordionChange]);

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
            <FiChevronUp size={32} color={accentColor} className="transform transition-transform duration-300" />
          ) : (
            <FiChevronDown size={32} color={accentColor} className="transform transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Accordion Section - Always rendered but with height transition */}
      <div 
        className="container mx-auto px-4 mt-4 overflow-hidden transition-all duration-500 ease-in-out"
        style={{ 
          maxHeight: isExpanded ? `${contentHeight}px` : '0',
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div ref={accordionRef} className="pb-10">
          <Accordion
            items={faqs}
            accentColor={accentColor}
            textColor={titleColor}
            maxVisible={maxVisible}
            onItemToggle={updateHeight}
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;