'use client'
import React, { useState } from 'react';
import HeadingText from '../typography/HeadingText';
import { FiMinus, FiPlus } from 'react-icons/fi';
import BodyText from '../typography/BodyText';


// Types for our FAQ items
export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

// Props for the Accordion molecule
export interface AccordionProps {
  items: AccordionItem[];
  accentColor?: string;
  textColor?: string;
  maxVisible?: number;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  accentColor = '#8FD7DA',
  textColor = 'white',
  maxVisible = 7,
  className = '',
}) => {
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  // Toggle a specific accordion item
  const toggleItem = (id: string) => {
    setActiveItemId(activeItemId === id ? null : id);
  };

  // Limit the number of visible items 
  const visibleItems = items.slice(0, maxVisible);

  return (
    <div className={`w-full ${className}`}>
      <div className="max-w-6xl mx-auto">
        {visibleItems.map((item) => (
          <div 
            key={item.id}
            className="border-b border-gray-700"
          >
            <button
              className="w-full flex justify-between items-center py-4 px-2 text-left cursor-pointer"
              onClick={() => toggleItem(item.id)}
              aria-expanded={activeItemId === item.id}
            >
              <HeadingText 
                text={item.title}
                color={textColor}
                fontSize="20px"
                fontWeight="medium"
              />
              {activeItemId === item.id ? (
                <FiMinus size={24} color={accentColor} />
              ) : (
                <FiPlus size={24} color={accentColor} />
              )}
            </button>
            
            {activeItemId === item.id && (
              <div className="pb-4 px-2 animate-fadeIn">
                <BodyText 
                  text={item.content}
                  color={textColor}
                  lineHeight="1.6"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;