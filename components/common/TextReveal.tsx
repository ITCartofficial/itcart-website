// 'use client';

// import { useEffect, useRef, useState, ReactNode } from 'react';

// interface TextRevealProps {
//   text?: ReactNode;
//   spotlightSize?: number;
//   textSize?: string;
//   backgroundColor?: string;
//   dimmedTextColor?: string;
//   revealedTextColor?: string;
//   containerHeight?: string;
// }

// export default function TextReveal({
//   text,
//   spotlightSize = 200,
//   textSize = "text-4xl md:text-[56px]",
//   backgroundColor = "bg-white", // Default to white background
//   dimmedTextColor = "text-[#E1E1E1]", // Default to light gray for dimmed text
//   revealedTextColor = "text-black", // Default to black for revealed text
//   containerHeight = "h-[350px] md:h-[400px]"
// }: TextRevealProps) {
//   // State for tracking mouse position
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 }); // Start offscreen
//   const [isHovering, setIsHovering] = useState(false);
  
//   // Set up mouse event listeners with throttling for performance
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     let rafId: number | null = null;
//     let lastMouseMoveTime = 0;
//     const throttleDelay = 10; // 10ms throttle for smoother performance

//     const handleMouseMove = (e: MouseEvent) => {
//       const currentTime = Date.now();
//       if (currentTime - lastMouseMoveTime < throttleDelay) return;
      
//       lastMouseMoveTime = currentTime;
//       if (rafId !== null) {
//         cancelAnimationFrame(rafId);
//       }
      
//       rafId = requestAnimationFrame(() => {
//         const rect = container.getBoundingClientRect();
//         setMousePosition({
//           x: e.clientX - rect.left,
//           y: e.clientY - rect.top
//         });
//       });
//     };

//     const handleMouseEnter = () => setIsHovering(true);
    
//     const handleMouseLeave = () => {
//       setIsHovering(false);
//       // Move spotlight off-screen when not hovering
//       setMousePosition({ x: -100, y: -100 });
//     };

//     container.addEventListener('mousemove', handleMouseMove);
//     container.addEventListener('mouseenter', handleMouseEnter);
//     container.addEventListener('mouseleave', handleMouseLeave);

//     // Clean up event listeners
//     return () => {
//       container.removeEventListener('mousemove', handleMouseMove);
//       container.removeEventListener('mouseenter', handleMouseEnter);
//       container.removeEventListener('mouseleave', handleMouseLeave);
//       if (rafId !== null) {
//         cancelAnimationFrame(rafId);
//       }
//     };
//   }, []);

//   // Default text if none is provided
//   const displayText = text || (
//     <>
//       Leverage AI automation with<br />
//       our robust AI systems, helping<br />
//       you gain a competitive edge<br />
//       in the AI market.
//     </>
//   );

//   // Spotlight gradient style - Only show when actually hovering
//   const spotlightGradient = isHovering 
//     ? `radial-gradient(circle ${spotlightSize}px at ${mousePosition.x}px ${mousePosition.y}px, white 0%, transparent 70%)` 
//     : 'radial-gradient(circle 0px at 0px 0px, white 0%, transparent 0%)';

//   // Text content component for reuse
//   const TextContent = () => (
//     <p>{displayText}</p>
//   );

//   return (
//     <div 
//       ref={containerRef}
//       className={`relative ${containerHeight} ${backgroundColor}`}
//     >
//       {/* Dimmed base layer */}
//       <div className={`absolute w-full text-center ${textSize} font-bold leading-tight ${dimmedTextColor}`}>
//         <TextContent />
//       </div>
      
//       {/* Revealed layer with mask */}
//       <div 
//         className={`absolute w-full text-center ${textSize} font-bold leading-tight ${revealedTextColor}`}
//         style={{
//           maskImage: spotlightGradient,
//           WebkitMaskImage: spotlightGradient,
//           transition: 'none' // Remove transition to avoid lag
//         }}
//       >
//         <TextContent />
//       </div>
      
//       {/* Invisible text for proper sizing */}
//       <div className={`invisible text-center ${textSize} font-bold`}>
//         <TextContent />
//       </div>
//     </div>
//   );
// }







'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface TextRevealProps {
  text?: ReactNode;
  spotlightSize?: number;
  textSize?: string;
  backgroundColor?: string;
  dimmedTextColor?: string;
  revealedTextColor?: string;
  containerHeight?: string;
  defaultHighlight?: boolean;
  defaultHighlightSize?: number;
}

export default function TextReveal({
  text,
  spotlightSize = 200,
  textSize = "text-4xl md:text-[56px]",
  backgroundColor = "bg-white",
  dimmedTextColor = "text-gray-300",
  revealedTextColor = "text-black",
  containerHeight = "h-[300px] md:h-[320px]",
  defaultHighlight = true, // Whether to show default center highlight
  defaultHighlightSize = 180 // Size of the default center highlight
}: TextRevealProps) {
  // State for tracking mouse position
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 }); // Start offscreen
  const [isHovering, setIsHovering] = useState(false);
  
  // Initialize container size and center position
  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerSize({ width, height });
        
        // If defaultHighlight is true, set the initial position to the center
        if (defaultHighlight) {
          setMousePosition({
            x: width / 2,
            y: height / 2
          });
        }
      }
    };
    
    // Initial measurement
    updateContainerSize();
    
    // Remeasure on resize
    window.addEventListener('resize', updateContainerSize);
    return () => window.removeEventListener('resize', updateContainerSize);
  }, [defaultHighlight]);
  
  // Set up mouse event listeners with throttling for performance
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number | null = null;
    let lastMouseMoveTime = 0;
    const throttleDelay = 10; // 10ms throttle for smoother performance

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastMouseMoveTime < throttleDelay) return;
      
      lastMouseMoveTime = currentTime;
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      });
      
      // When user starts moving mouse, consider it hovering
      if (!isHovering) setIsHovering(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    
    const handleMouseLeave = () => {
      // If defaultHighlight is true, move spotlight back to center
      // Otherwise, move it off-screen
      if (defaultHighlight) {
        setMousePosition({
          x: containerSize.width / 2,
          y: containerSize.height / 2
        });
      } else {
        setIsHovering(false);
        setMousePosition({ x: -100, y: -100 });
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Clean up event listeners
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [containerSize, defaultHighlight, isHovering]);

  // Default text if none is provided
  const displayText = text || (
    <>
      Leverage AI automation with<br />
      our robust AI systems, helping<br />
      you gain a competitive edge<br />
      in the AI market.
    </>
  );

  // Determine the spotlight size to use
  const currentSpotlightSize = isHovering ? spotlightSize : defaultHighlight ? defaultHighlightSize : 0;
  
  // Spotlight gradient style
  const spotlightGradient = `radial-gradient(circle ${currentSpotlightSize}px at ${mousePosition.x}px ${mousePosition.y}px, white 0%, transparent 70%)`;

  // Text content component for reuse
  const TextContent = () => (
    <p>{displayText}</p>
  );

  return (
    <div 
      ref={containerRef}
      className={`relative ${containerHeight} ${backgroundColor}`}
    >
      {/* Dimmed base layer */}
      <div className={`absolute w-full text-center ${textSize} font-bold leading-tight ${dimmedTextColor}`}>
        <TextContent />
      </div>
      
      {/* Revealed layer with mask */}
      <div 
        className={`absolute w-full text-center ${textSize} font-bold leading-tight ${revealedTextColor}`}
        style={{
          maskImage: spotlightGradient,
          WebkitMaskImage: spotlightGradient,
          transition: 'none' // Remove transition to avoid lag
        }}
      >
        <TextContent />
      </div>
      
      {/* Invisible text for proper sizing */}
      <div className={`invisible text-center ${textSize} font-bold`}>
        <TextContent />
      </div>
    </div>
  );
}