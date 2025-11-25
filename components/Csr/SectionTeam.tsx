"use client";
import { useState, useEffect, useRef } from "react";
import GradientTitle from "../typography/GradientTitle";
import Image from "next/image";
import mediadata from "@/lib/data/mediadata.json"

export default function SectionTeam({
    heading,
    discription,
    removeBorder,
}: {
    heading: string;
    discription: string;
    removeBorder: boolean;
}) {

    const slides = (
        mediadata as {
            mainImg: string;
            desc?: string;
            altImage?: string;
        }[]
    );

    const [current, setCurrent] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);

    // 🌀 Disable scroll restoration
    useEffect(() => {
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }
    }, []);

    // 🌀 Autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    // 🧭 Center the current thumbnail
    useEffect(() => {
        const container = scrollContainerRef.current;
        const activeThumb = thumbRefs.current[current];
        if (container && activeThumb) {
            const containerRect = container.getBoundingClientRect();
            const thumbRect = activeThumb.getBoundingClientRect();
            const scrollLeft =
                activeThumb.offsetLeft -
                container.offsetLeft -
                containerRect.width / 2 +
                thumbRect.width / 2;

            container.scrollTo({
                left: scrollLeft,
                behavior: "smooth",
            });
        }
    }, [current]);

    return (
        <div className="w-full bg-black flex flex-col items-center justify-center px-4">
            {/* Title Section */}
            <div className="text-center mb-12 max-w-4xl">
                <GradientTitle
                    text={heading}
                    theme="dark"
                    className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight"
                />
                <p className="text-gray-300 text-base sm:text-lg mt-4">{discription}</p>
            </div>

            {/* Main Container */}
            <div className="relative w-full max-w-6xl">
                <div
                    className={`${removeBorder
                        ? ""
                        : "border-cyan-500/30 bg-gradient-to-br from-gray-900 to-black border"
                        } rounded-3xl p-6 sm:p-8 lg:p-12`}
                >
                    <div className="mb-8 flex justify-center">
                        <div className="relative w-full max-w-[700px] aspect-video overflow-hidden rounded-2xl">

                            {/* Background Image */}
                            <Image
                                src={slides[current]?.mainImg || "/placeholder.jpg"}
                                alt="CSR Initiative"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, 700px"
                                priority
                            />

                            {/* Gradient Overlay + Description */}
                            <div
                                className="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 80%)",
                                }}
                            >
                                <h3 className="text-white text-lg font-semibold sm:text-2xl">
                                    {slides[current]?.desc}
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Horizontal Thumbnail Row */}
                    <div className="mb-6">
                        <div
                            ref={scrollContainerRef}
                            className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth .no-scrollbar"
                        >
                            {slides.map((thumb, index) => (
                                <div
                                    key={index}
                                    ref={(el) => {
                                        thumbRefs.current[index] = el;
                                    }}
                                    // ref={(el) => (thumbRefs.current[index] = el)}
                                    className={`relative  my-3 mx-2 flex-shrink-0 w-40 h-24 md:w-48 md:h-28 overflow-hidden rounded-xl border-2 cursor-pointer transition-all duration-300 ${current === index
                                        ? "border-cyan-400 scale-105"
                                        : "border-gray-700 hover:border-cyan-400/40"
                                        }`}
                                    onClick={() => setCurrent(index)}
                                >
                                    <Image
                                        src={thumb.mainImg}
                                        alt={thumb.altImage ?? `Thumbnail ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 60vw, (max-width: 1024px) 30vw, 20vw"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center items-center space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === current
                                    ? "w-8"
                                    : "w-2 bg-transparent outline-1 outline-gray-400"
                                    }`}
                                style={
                                    index === current
                                        ? {
                                            background:
                                                "linear-gradient(90deg, #29C1E2 0%, #FFF 100%)",
                                        }
                                        : {}
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
