"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import CaseStudyCard from "../cards/CaseStudyCard"
import { CaseStudy } from "@/types/PropsTypes"

const originalItems: CaseStudy[] = [
  {
    id: 1,
    title: "Case Studies That Inspire Digital Change",
    description: "Explore our case studies for in-depth insights, expert analysis, and success stories.",
    image: "/images/business-intelligence.webp",
    link: "#",
    linkText: "Explore More",
  },
  {
    id: 2,
    title: "AI Powered Digital Transformations at Ajmal Foundation",
    description: "How AI is revolutionizing operations and driving innovation at Ajmal Foundation.",
    image: "/images/business-intelligence.webp",
    link: "#",
    linkText: "Read Case Study",
  },
  {
    id: 3,
    title: "Building the Future: BIGGY's Success with Digital Solutions",
    description: "BIGGY's journey to digital excellence through innovative technology adoption.",
    image: "/images/business-intelligence.webp",
    link: "#",
    linkText: "Read Case Study",
  },
  {
    id: 4,
    title: "Transforming The Supply Chain with AI",
    description: "How AI is reshaping supply chain management for greater efficiency.",
    image: "/images/business-intelligence.webp",
    link: "#",
    linkText: "Read Case Study",
  },
]

// Add clones at beginning and end
// const getLoopedItems = (items: CaseStudy[]) => {
//   const first = items[0]
//   const last = items[items.length - 1]
//   return [last, ...items, first]
// }

export default function CaseStudiesSlider() {
  const items = [...originalItems, ...originalItems]
  const [activeIndex, setActiveIndex] = useState(1) // Start from the real first card
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const sliderRef = useRef<HTMLDivElement>(null)
  const cardWidth = 320
  const cardGap = 20
  const totalWidth = cardWidth + cardGap

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index)
    setTransitionEnabled(true)
  }, [])

  const handleTransitionEnd = () => {
    // If we're at the fake last slide, jump to the real first slide
    if (activeIndex === originalItems.length + 1) {
      setTransitionEnabled(false)
      setActiveIndex(1)
    }
    // If we're at the fake first slide, jump to real last
    if (activeIndex === 0) {
      setTransitionEnabled(false)
      setActiveIndex(items.length - 2)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide(activeIndex + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [activeIndex, goToSlide])

  return (
    <div className="relative w-full pl-4 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div
          ref={sliderRef}
          className="flex"
          style={{
            transform: `translateX(-${activeIndex * totalWidth}px)`,
            transition: transitionEnabled ? "transform 0.6s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {items.map((study, index) => {
            const isFocused = index === activeIndex
            return (
              <div
                key={index}
                className="flex-shrink-0 transition-all duration-600 ease-in-out cursor-pointer"
                style={{
                  width: `${cardWidth}px`,
                  marginRight: index == activeIndex + 1 ? 0 : '24px',
                  transform: `scale(${isFocused ? 1 : 0.8})`,
                  opacity: isFocused ? 1 : 0.5,
                  zIndex: isFocused ? 10 : 5 - Math.abs(index - activeIndex),
                }}
                onClick={() => goToSlide(index)}
              >
                <div className={`h-[450px] rounded-[30px] overflow-hidden ${isFocused ? "border border-blue-500" : "bg-gray-100"} transition-all duration-600`}>
                  <CaseStudyCard card={study} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {originalItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index + 1)} // +1 to account for leading clone
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index + 1 === activeIndex ? "w-8 bg-gradient-to-r from-[#29C1E2] to-black" : "bg-gray-300 hover:bg-gray-400"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
