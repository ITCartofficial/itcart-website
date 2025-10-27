"use client"
import { useState } from "react";
import GradientTitle from "../typography/GradientTitle";
import Image from "next/image";

export default function SectionTeam({ heading, discription, removeBorder }: { heading: string, discription: string, removeBorder: boolean }) {

    const slides = [
        {
            mainImg: "/images/csr/slide1.jpg",
        },
        {
            mainImg: "/images/csr/slide2.jpg",
        },
        {
            mainImg: "/images/csr/slide3.jpg",
        },
        {
            mainImg: "/images/csr/slide4.jpg",
        }
    ];


    const [current, setCurrent] = useState(0);

    return (
        <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 py-12">
            {/* Title Section */}
            <div className="text-center mb-12 max-w-4xl">

                <div className="max-w-5xl mx-auto text-center mb-1">
                    <GradientTitle
                        text={heading}
                        theme="dark"
                        className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight"
                    />
                </div>
                <p className="text-gray-300 text-base sm:text-lg mt-4">
                    {discription}
                </p>
            </div>

            {/* Slider Container */}
            <div className="relative w-full max-w-5xl">
                <div className={` ${removeBorder ? "" : "border-cyan-500/30 bg-gradient-to-br from-gray-900 to-black border"} rounded-3xl p-6 sm:p-8 lg:p-12`}>
                    {/* Main Image */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative w-full max-w-[700px] aspect-video overflow-hidden rounded-2xl">
                            <Image
                                src={slides[current]?.mainImg || "/placeholder.jpg"} // fallback image
                                alt="CSR Initiative"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 700px"
                                priority // optional, for faster loading of first image
                            />
                        </div>
                    </div>

                    {/* Thumbnail Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
                        {slides?.map((thumb, index) => (
                            <div
                                key={index}
                                className={`relative aspect-video overflow-hidden rounded-xl border-2 transition-all duration-300 ${current === index ? "border-cyan-400" : "border-gray-700"
                                    }`}
                            >
                                <Image
                                    onClick={() => setCurrent(index)}
                                    src={thumb?.mainImg || "/placeholder.jpg"} // fallback image
                                    alt={`Thumbnail ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                            </div>
                        ))}
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
                                            background: "linear-gradient(90deg, #29C1E2 0%, #FFF 100%)",
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
