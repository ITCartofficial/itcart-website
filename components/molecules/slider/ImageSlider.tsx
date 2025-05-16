"use client";

import SlideCard from "@/components/atoms/common/SlideCard";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
    {
        imgSrc: "/images/home/awards/awards-2.png",
        prompt: "Beautiful interactive p5js with fish and nebulae",
    },
    {
        imgSrc: "/images/home/awards/awards-3.png",
        prompt: "Make me an endless dinosaur runner game",
    },
    {
        imgSrc: "/images/home/awards/awards-1.png",
        prompt: "p5js to explore a Mandelbrot set",
    },
];


const ImageSlider: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

    const getPosition = (index: number): "left" | "center" | "right" | "hidden" => {
        if (index === current) return "center";
        if (index === (current - 1 + slides.length) % slides.length) return "left";
        if (index === (current + 1) % slides.length) return "right";
        return "hidden";
    };

    return (
        <div className="relative w-full h-[350px] flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
                {slides.map((slide, index) => (
                    <SlideCard
                        key={index}
                        imgSrc={slide.imgSrc}
                        prompt={slide.prompt}
                        position={getPosition(index)}
                    />
                ))}
            </div>
            <div className="absolute bottom-4 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${index === current ? "w-8" : "w-2 bg-transparent outline outline-gray-200"
                            }`}
                        style={
                            index === current
                                ? { background: "linear-gradient(90deg, #29C1E2 0%, #FFF 100%)" }
                                : {}
                        }
                    />
                ))}
            </div>
            <button onClick={prevSlide} className="absolute left-4 text-white text-2xl cursor-pointer"><FiChevronLeft /></button>
            <button onClick={nextSlide} className="absolute right-4 text-white text-2xl cursor-pointer"><FiChevronRight /></button>
        </div>
    );
};

export default ImageSlider;









