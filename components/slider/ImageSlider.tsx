"use client";

import SlideCard from "@/components/common/SlideCard";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    imgSrc: "/images/home/awards/awards-2.png",
    altText: "Beautiful interactive p5js with fish and nebulae",
    description: {
      title: "AI Entrepreneur Of The Year 2024",
      text: "Our visionary leader has been honoured with the 'AI Entrepreneur of The Year' award at the Bharat Leadership Excellence Award 2024, hosted by Leadership Federation at Delhi.",
    },
  },
  {
    imgSrc: "/images/home/awards/awards-3.png",
    altText: "Make me an endless dinosaur runner game",
    description: {
      title: "Most Innovative Use of AI in Digital Transformation",
      text: "At the prestigious India AI Summit 2024, hosted by the Government of Karnataka, iTCart was honored with the award for “Most Innovative Use of AI in Digital Transformation.",
    },
  },
  {
    imgSrc: "/images/home/awards/awards-1.png",
    altText: "p5js to explore a Mandelbrot set",
    description: {
      title: "Most Innovative Use of AI in Digital Transformation",
      text: "At the prestigious India AI Summit 2024, hosted by the Government of Karnataka, iTCart was honored with the award for “Most Innovative Use of AI in Digital Transformation.",
    },
  },
  {
    imgSrc: "/images/home/awards/awards-3.png",
    altText: "Make me an endless dinosaur runner game",
    description: {
      title: "Most Innovative Use of AI in Digital Transformation",
      text: "At the prestigious India AI Summit 2024, hosted by the Government of Karnataka, iTCart was honored with the award for “Most Innovative Use of AI in Digital Transformation.",
    },
  },
   {
    imgSrc: "/images/home/awards/awards-4.png",
    altText: "Make me an endless dinosaur runner game",
    description: {
      title: "Mission Viksit Bharat CTO of the Year 2025",
      text: "At the prestigious India AI Summit 2024, hosted by the Government of Karnataka, iTCart was honored with the award for “Most Innovative Use of AI in Digital Transformation.",
    },
  },
];


// awards-4
const ImageSlider: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  // ✅ Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const getPosition = (
    index: number
  ): "left" | "center" | "right" | "hidden" => {
    if (index === current) return "center";
    if (index === (current - 1 + slides.length) % slides.length) return "left";
    if (index === (current + 1) % slides.length) return "right";
    return "hidden";
  };

  return (
    <div className="relative w-full h-[350px] flex items-center justify-center overflow-hidden ">
      <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
        {slides.map((slide, index) => (
          <SlideCard
            key={index}
            imgSrc={slide.imgSrc}
            altText={slide.altText}
            description={slide.description}
            position={getPosition(index)}
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-1 flex space-x-2 mt-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${index === current
              ? "w-8"
              : "w-2 bg-transparent outline outline-gray-200"
              }`}
            style={
              index === current
                ? {
                  background: "linear-gradient(90deg, #29C1E2 0%, #FFF 100%)",
                }
                : {}
            }
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 text-white text-2xl cursor-pointer"
      >
        <FiChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 text-white text-2xl cursor-pointer"
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;
