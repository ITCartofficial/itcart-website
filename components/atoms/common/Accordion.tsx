// 'use client'
// import React, { useState, useRef, useEffect } from 'react';
// import HeadingText from '../typography/HeadingText';
// import { FiMinus, FiPlus } from 'react-icons/fi';
// import BodyText from '../typography/BodyText';

// // Types for our FAQ items
// export interface AccordionItem {
//   id: string;
//   title: string;
//   content: string;
// }

// // Props for the Accordion molecule
// export interface AccordionProps {
//   items: AccordionItem[];
//   accentColor?: string;
//   textColor?: string;
//   maxVisible?: number;
//   className?: string;
// }

// const Accordion: React.FC<AccordionProps> = ({
//   items,
//   accentColor = '#8FD7DA',
//   textColor = 'white',
//   maxVisible = 7,
//   className = '',
// }) => {
//   const [activeItemId, setActiveItemId] = useState<string | null>(null);
//   const [heights, setHeights] = useState<Record<string, number>>({});
//   const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

//   // Initialize refs for each item
//   useEffect(() => {
//     const newHeights: Record<string, number> = {};
    
//     items.forEach(item => {
//       if (contentRefs.current[item.id]) {
//         newHeights[item.id] = contentRefs.current[item.id]?.scrollHeight || 0;
//       }
//     });
    
//     setHeights(newHeights);
//   }, [items, activeItemId]);

//   // Toggle a specific accordion item
//   const toggleItem = (id: string) => {
//     setActiveItemId(activeItemId === id ? null : id);
//   };

//   // Function to set ref that fixes the TypeScript error
//   const setItemRef = (id: string) => (element: HTMLDivElement | null) => {
//     contentRefs.current[id] = element;
//   };

//   // Limit the number of visible items 
//   const visibleItems = items.slice(0, maxVisible);

//   return (
//     <div className={`w-full ${className}`}>
//       <div className="max-w-6xl mx-auto">
//         {visibleItems.map((item) => (
//           <div 
//             key={item.id}
//             className="border-b border-gray-700"
//           >
//             <button
//               className="w-full flex justify-between items-center py-4 px-2 text-left cursor-pointer"
//               onClick={() => toggleItem(item.id)}
//               aria-expanded={activeItemId === item.id}
//             >
//               <HeadingText 
//                 text={item.title}
//                 color={textColor}
//                 fontSize="20px"
//                 fontWeight="medium"
//               />
//               <div className="transition-transform duration-300">
//                 {activeItemId === item.id ? (
//                   <FiMinus size={24} color={accentColor} className="transform transition-opacity duration-300" />
//                 ) : (
//                   <FiPlus size={24} color={accentColor} className="transform transition-opacity duration-300" />
//                 )}
//               </div>
//             </button>
            
//             {/* Content container with smooth height transition */}
//             <div 
//               className="overflow-hidden transition-all duration-500 ease-in-out"
//               style={{ 
//                 maxHeight: activeItemId === item.id ? `${heights[item.id] || 1000}px` : '0',
//                 opacity: activeItemId === item.id ? 1 : 0,
//               }}
//             >
//               <div 
//                 ref={setItemRef(item.id)}
//                 className="pb-4 px-2"
//               >
//                 <BodyText 
//                   text={item.content}
//                   color={textColor}
//                   lineHeight="1.6"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Accordion;








'use client'
import React, { useState, useRef, useEffect } from 'react';
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
  onItemToggle?: (id: string) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  accentColor = '#8FD7DA',
  textColor = 'white',
  maxVisible = 7,
  className = '',
  onItemToggle,
}) => {
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [heights, setHeights] = useState<Record<string, number>>({});
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Initialize refs for each item
  useEffect(() => {
    const newHeights: Record<string, number> = {};
    
    items.forEach(item => {
      if (contentRefs.current[item.id]) {
        newHeights[item.id] = contentRefs.current[item.id]?.scrollHeight || 0;
      }
    });
    
    setHeights(newHeights);
  }, [items, activeItemId]);

  // Toggle a specific accordion item
  const toggleItem = (id: string) => {
    setActiveItemId(activeItemId === id ? null : id);
    
    // Call the onItemToggle callback if provided
    if (onItemToggle) {
      onItemToggle(id);
    }
  };

  // Function to set ref that fixes the TypeScript error
  const setItemRef = (id: string) => (element: HTMLDivElement | null) => {
    contentRefs.current[id] = element;
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
              <div className="transition-transform duration-300">
                {activeItemId === item.id ? (
                  <FiMinus size={24} color={accentColor} className="transform transition-opacity duration-300" />
                ) : (
                  <FiPlus size={24} color={accentColor} className="transform transition-opacity duration-300" />
                )}
              </div>
            </button>
            
            {/* Content container with smooth height transition */}
            <div 
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ 
                maxHeight: activeItemId === item.id ? `${heights[item.id] || 1000}px` : '0',
                opacity: activeItemId === item.id ? 1 : 0,
              }}
            >
              <div 
                ref={setItemRef(item.id)}
                className="pb-4 px-2"
              >
                <BodyText 
                  text={item.content}
                  color={textColor}
                  lineHeight="1.6"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;