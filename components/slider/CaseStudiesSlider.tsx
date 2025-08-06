// "use client"

// import { useState, useEffect, useRef, useCallback } from "react"
// import CaseStudyCard from "../cards/CaseStudyCard"
// import type { CaseStudy } from "@/types/PropsTypes"

// export default function CaseStudiesSlider({caseStudies}:{caseStudies: CaseStudy[]}) {
//   // Create a truly infinite loop by duplicating the entire set multiple times
//   const items = [...caseStudies, ...caseStudies, ...caseStudies]
//   const totalItems = items.length
//   const startIndex = caseStudies.length // Start in the middle set

//   const [activeIndex, setActiveIndex] = useState(startIndex)
//   const [isTransitioning, setIsTransitioning] = useState(false)
//   const [isInitialized, setIsInitialized] = useState(false)
//   const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
//   const sliderRef = useRef<HTMLDivElement>(null)

//   const cardWidth = 320
//   const cardGap = 20
//   const totalWidth = cardWidth + cardGap

//   // Initialize the slider
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsInitialized(true)
//     }, 50)
//     return () => clearTimeout(timer)
//   }, [])

//   // Reset position when reaching boundaries without animation
//   const resetPosition = useCallback(() => {
//     // If we've gone too far forward, reset to the middle set
//     if (activeIndex >= startIndex + caseStudies.length) {
//       setIsTransitioning(false)
//       setActiveIndex(activeIndex - caseStudies.length)
//     }
//     // If we've gone too far backward, reset to the middle set
//     else if (activeIndex < startIndex) {
//       setIsTransitioning(false)
//       setActiveIndex(activeIndex + caseStudies.length)
//     }
//   }, [activeIndex, startIndex, caseStudies.length])

//   // Handle transition end
//   const handleTransitionEnd = useCallback(() => {
//     if (isTransitioning) {
//       resetPosition()
//       // Small delay before allowing next transition to ensure smooth reset
//       setTimeout(() => {
//         setIsTransitioning(false)
//       }, 50)
//     }
//   }, [isTransitioning, resetPosition])

//   // Go to a specific slide
//   const goToSlide = useCallback(
//     (index: number) => {
//       if (!isInitialized || isTransitioning) return
//       setIsTransitioning(true)
//       setActiveIndex(index)
//     },
//     [isInitialized, isTransitioning],
//   )

//   // Auto-advance the slider
//   useEffect(() => {
//     if (!isInitialized) return

//     const startAutoPlay = () => {
//       if (autoPlayRef.current) clearTimeout(autoPlayRef.current)

//       autoPlayRef.current = setTimeout(() => {
//         if (!isTransitioning) {
//           goToSlide(activeIndex + 1)
//         } else {
//           // If still transitioning, try again shortly
//           startAutoPlay()
//         }
//       }, 3000)
//     }

//     startAutoPlay()

//     return () => {
//       if (autoPlayRef.current) clearTimeout(autoPlayRef.current)
//     }
//   }, [activeIndex, goToSlide, isInitialized, isTransitioning])

//   // Calculate the real index for indicators
//   const getRealIndex = useCallback(() => {
//     return (activeIndex % totalItems) % caseStudies.length
//   }, [activeIndex, totalItems, caseStudies.length])

//   return (
//     <div className="relative w-full pl-4 overflow-hidden">
//       <div className="relative w-full overflow-hidden">
//         <div
//           ref={sliderRef}
//           className="flex"
//           style={{
//             transform: `translateX(-${activeIndex * totalWidth}px)`,
//             transition: isTransitioning ? "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
//             visibility: isInitialized ? "visible" : "hidden", // Hide until initialized
//           }}
//           onTransitionEnd={handleTransitionEnd}
//         >
//           {items.map((study, index) => {
//             const isFocused = index === activeIndex
//             return (
//               <div
//                 key={`${study.id}-${index}`}
//                 className="flex-shrink-0 transition-all duration-600 ease-in-out cursor-pointer"
//                 style={{
//                   width: `${cardWidth}px`,
//                   marginRight: `${cardGap}px`,
//                   transform: `scale(${isFocused ? 1 : 0.8})`,
//                   opacity: isFocused ? 1 : 0.5,
//                   zIndex: isFocused ? 10 : 5 - Math.min(Math.abs(index - activeIndex), 4),
//                 }}
//                 onClick={() => goToSlide(index)}
//               >
//                 <div
//                   className={`h-[450px] rounded-[30px] overflow-hidden ${isFocused ? "border border-blue-500" : "bg-gray-100"} transition-all duration-600`}
//                 >
//                   <CaseStudyCard card={study} />
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       <div className="flex justify-center mt-8 gap-2">
//         {caseStudies.map((_, index) => {
//           const realIndex = getRealIndex()
//           return (
//             <button
//               key={index}
//               onClick={() => goToSlide(startIndex + index)} // Go to the corresponding slide in the middle set
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 index === realIndex ? "w-8 bg-gradient-to-r from-[#29C1E2] to-black" : "bg-gray-300 hover:bg-gray-400"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           )
//         })}
//       </div>
//     </div>
//   )
// }














"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import CaseStudyCard from "../cards/CaseStudyCard"
import type {CaseStudyItem } from "@/types/PropsTypes"

export default function CaseStudiesSlider({ caseStudies }: { caseStudies: CaseStudyItem[] }) {
  // Create a truly infinite loop by duplicating the entire set multiple times
  const items = [...caseStudies, ...caseStudies, ...caseStudies]
  const totalItems = items.length
  const startIndex = caseStudies.length // Start in the middle set

  const [activeIndex, setActiveIndex] = useState(startIndex)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const cardWidth = 320
  const cardGap = 20
  const totalWidth = cardWidth + cardGap

  // Initialize the slider
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialized(true)
    }, 50)
    return () => clearTimeout(timer)
  }, [])

  // Reset position when reaching boundaries without animation
  const resetPosition = useCallback(() => {
    // If we've gone too far forward, reset to the middle set
    if (activeIndex >= startIndex + caseStudies.length) {
      setIsTransitioning(false)
      setActiveIndex(activeIndex - caseStudies.length)
    }
    // If we've gone too far backward, reset to the middle set
    else if (activeIndex < startIndex) {
      setIsTransitioning(false)
      setActiveIndex(activeIndex + caseStudies.length)
    }
  }, [activeIndex, startIndex, caseStudies.length])

  // Handle transition end
  const handleTransitionEnd = useCallback(() => {
    if (isTransitioning) {
      resetPosition()
      // Small delay before allowing next transition to ensure smooth reset
      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }
  }, [isTransitioning, resetPosition])

  // Go to a specific slide
  const goToSlide = useCallback(
    (index: number) => {
      if (!isInitialized || isTransitioning) return
      setIsTransitioning(true)
      setActiveIndex(index)
    },
    [isInitialized, isTransitioning],
  )

  // Auto-advance the slider
  useEffect(() => {
    if (!isInitialized) return

    const startAutoPlay = () => {
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current)

      autoPlayRef.current = setTimeout(() => {
        if (!isTransitioning) {
          goToSlide(activeIndex + 1)
        } else {
          // If still transitioning, try again shortly
          startAutoPlay()
        }
      }, 3000)
    }

    startAutoPlay()

    return () => {
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current)
    }
  }, [activeIndex, goToSlide, isInitialized, isTransitioning])

  // Calculate the real index for indicators
  const getRealIndex = useCallback(() => {
    return (activeIndex % totalItems) % caseStudies.length
  }, [activeIndex, totalItems, caseStudies.length])

  return (
    <div className="relative w-full pl-4 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div
          ref={sliderRef}
          className="flex"
          style={{
            transform: `translateX(-${activeIndex * totalWidth}px)`,
            transition: isTransitioning ? "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
            visibility: isInitialized ? "visible" : "hidden", // Hide until initialized
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {items.map((study, index) => {
            const isFocused = index === activeIndex
            return (
              <div
                key={`${study.id}-${index}`}
                className="flex-shrink-0 transition-all duration-600 ease-in-out cursor-pointer"
                style={{
                  width: `${cardWidth}px`,
                  marginRight: `${cardGap}px`,
                  transform: `scale(${isFocused ? 1 : 0.8})`,
                  opacity: isFocused ? 1 : 0.5,
                  zIndex: isFocused ? 10 : 5 - Math.min(Math.abs(index - activeIndex), 4),
                }}
                onClick={() => goToSlide(index)}
              >
                <div
                  className={`h-[450px] rounded-[30px] overflow-hidden ${isFocused ? "border border-blue-500" : "bg-gray-100"} transition-all duration-600`}
                >
                  <CaseStudyCard card={study} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {caseStudies.map((_, index) => {
          const realIndex = getRealIndex()
          return (
            <button
              key={index}
              onClick={() => goToSlide(startIndex + index)} // Go to the corresponding slide in the middle set
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === realIndex ? "w-8 bg-gradient-to-r from-[#29C1E2] to-black" : "bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          )
        })}
      </div>
    </div>
  )
}

