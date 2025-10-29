"use client"
import { useState, useEffect } from "react";
import GradientTitle from "../typography/GradientTitle";
import Image from "next/image";

export default function SectionTeam({
    heading,
    discription,
    removeBorder,
}: {
    heading: string;
    discription: string;
    removeBorder: boolean;
}) {
    const slides = [
        { mainImg: "/images/csr/slide1.jpg" },
        { mainImg: "/images/csr/slide2.jpg" },
        { mainImg: "/images/csr/slide3.jpg" },
        { mainImg: "/images/csr/slide4.jpg" },
    ];

    const [current, setCurrent] = useState(0);

    // 🌀 Autoplay effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000); // change every 3 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="w-full  bg-black flex flex-col items-center justify-center px-4">
            {/* Title Section */}
            <div className="text-center mb-12 max-w-4xl">
                <div className="max-w-5xl mx-auto text-center mb-1">
                    <GradientTitle
                        text={heading}
                        theme="dark"
                        className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight"
                    />
                </div>
                <p className="text-gray-300 text-base sm:text-lg mt-4">{discription}</p>
            </div>

            {/* Slider Container */}
            <div className="relative w-full max-w-5xl">
                <div
                    className={`${removeBorder
                        ? ""
                        : "border-cyan-500/30 bg-gradient-to-br from-gray-900 to-black border"
                        } rounded-3xl p-6 sm:p-8 lg:p-12`}
                >
                    {/* Main Image */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative w-full max-w-[700px] aspect-video overflow-hidden rounded-2xl">
                            <Image
                                src={slides[current]?.mainImg || "/placeholder.jpg"}
                                alt="CSR Initiative"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 700px"
                                priority
                            />
                        </div>
                    </div>

                    {/* Thumbnail Grid */}
                    <div className="mb-6">
                        <div
                            className="flex gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible sm:grid sm:grid-cols-3 lg:grid-cols-4 scrollbar-hide scroll-smooth"
                        >
                            {slides.map((thumb, index) => (
                                <div
                                    key={index}
                                    className={`relative flex-shrink-0 h-20 md:h-30 w-40 md:w-50 xs:w-[55%] sm:w-auto aspect-[16/9] overflow-hidden rounded-xl border-2 transition-all duration-300 cursor-pointer ${current === index
                                        ? "border-cyan-400"
                                        : "border-gray-700 hover:border-cyan-400/40"
                                        }`}
                                    onClick={() => setCurrent(index)}
                                    ref={(el) => {
                                        // 👇 Auto-scroll the selected image into view
                                        if (index === current && el) {
                                            el.scrollIntoView({
                                                behavior: "smooth",
                                                inline: "center",
                                                block: "nearest",
                                            });
                                        }
                                    }}
                                >
                                    <Image
                                        src={thumb.mainImg}
                                        alt={`Thumbnail ${index + 1}`}
                                        fill
                                        className="object-cover w-full h-full"
                                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 33vw, 25vw"
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
                                    : "w-2 bg-transparent outline outline-1 outline-gray-400"
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
