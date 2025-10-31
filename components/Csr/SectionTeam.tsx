// "use client"
// import { useState, useEffect } from "react";
// import GradientTitle from "../typography/GradientTitle";
// import Image from "next/image";

// export default function SectionTeam({
//     heading,
//     discription,
//     removeBorder,
// }: {
//     heading: string;
//     discription: string;
//     removeBorder: boolean;
// }) {
//     const slides = [
//         { mainImg: "/images/csr/slide1.jpg" },
//         { mainImg: "/images/csr/slide2.jpg" },
//         { mainImg: "/images/csr/slide3.jpg" },
//         { mainImg: "/images/csr/slide4.jpg" },
//         { mainImg: "/images/csr/slide1.jpg" },
//         { mainImg: "/images/csr/slide2.jpg" },
//         { mainImg: "/images/csr/slide3.jpg" },
//         { mainImg: "/images/csr/slide4.jpg" },
//         { mainImg: "/images/csr/slide1.jpg" },
//         { mainImg: "/images/csr/slide2.jpg" },
//         { mainImg: "/images/csr/slide3.jpg" },
//         { mainImg: "/images/csr/slide4.jpg" },
//         { mainImg: "/images/csr/slide1.jpg" },
//         { mainImg: "/images/csr/slide2.jpg" },
//         { mainImg: "/images/csr/slide3.jpg" },
//         { mainImg: "/images/csr/slide4.jpg" },
//     ];

//     const [current, setCurrent] = useState(0);

//     useEffect(() => {
//         if ("scrollRestoration" in history) {
//             history.scrollRestoration = "manual";
//         }
//     }, []);

//     // 🌀 Autoplay effect
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrent((prev) => (prev + 1) % slides.length);
//         }, 3000); // change every 3 seconds

//         return () => clearInterval(interval);
//     }, [slides.length]);

//     return (
//         <div className="w-full  bg-black flex flex-col items-center justify-center px-4">
//             {/* Title Section */}
//             <div className="text-center mb-12 max-w-4xl">
//                 <div className="max-w-5xl mx-auto text-center mb-1">
//                     <GradientTitle
//                         text={heading}
//                         theme="dark"
//                         className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight"
//                     />
//                 </div>
//                 <p className="text-gray-300 text-base sm:text-lg mt-4">{discription}</p>
//             </div>

//             {/* Slider Container */}
//             <div className="relative w-full max-w-5xl">
//                 <div
//                     className={`${removeBorder
//                         ? ""
//                         : "border-cyan-500/30 bg-gradient-to-br from-gray-900 to-black border"
//                         } rounded-3xl p-6 sm:p-8 lg:p-12`}
//                 >
//                     {/* Main Image */}
//                     <div className="mb-8 flex justify-center">
//                         <div className="relative w-full max-w-[700px] aspect-video overflow-hidden rounded-2xl">
//                             <Image
//                                 src={slides[current]?.mainImg || "/placeholder.jpg"}
//                                 alt="CSR Initiative"
//                                 fill
//                                 className="object-cover"
//                                 sizes="(max-width: 768px) 100vw, 700px"
//                                 priority
//                             />
//                         </div>
//                     </div>

//                     {/* Thumbnail Grid */}
//                     <div className="mb-6">
//                         <div
//                             className="flex gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible sm:grid sm:grid-cols-3 lg:grid-cols-4 scrollbar-hide scroll-smooth"
//                         >
//                             {slides.map((thumb, index) => (
//                                 <div
//                                     key={index}
//                                     className={`relative flex-shrink-0 h-20 md:h-30 w-40 md:w-50 xs:w-[55%] sm:w-auto aspect-[16/9] overflow-hidden rounded-xl border-2 transition-all duration-300 cursor-pointer ${current === index
//                                         ? "border-cyan-400"
//                                         : "border-gray-700 hover:border-cyan-400/40"
//                                         }`}
//                                     onClick={() => setCurrent(index)}
//                                 >
//                                     <Image
//                                         src={thumb.mainImg}
//                                         alt={`Thumbnail ${index + 1}`}
//                                         fill
//                                         className="object-cover w-full h-full"
//                                         sizes="(max-width: 640px) 80vw, (max-width: 1024px) 33vw, 25vw"
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>


//                     {/* Pagination Dots */}
//                     <div className="flex justify-center items-center space-x-2">
//                         {slides.map((_, index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => setCurrent(index)}
//                                 className={`h-2 rounded-full transition-all duration-300 ${index === current
//                                     ? "w-8"
//                                     : "w-2 bg-transparent outline outline-1 outline-gray-400"
//                                     }`}
//                                 style={
//                                     index === current
//                                         ? {
//                                             background:
//                                                 "linear-gradient(90deg, #29C1E2 0%, #FFF 100%)",
//                                         }
//                                         : {}
//                                 }
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }






"use client";
import { useState, useEffect, useRef } from "react";
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
        { mainImg: "/images/csr/Thumbnail-1.jpg" },
        { mainImg: "/images/csr/Thumbnail-2.jpg" },
        { mainImg: "/images/csr/Thumbnail-3.jpg" },
        { mainImg: "/images/csr/Thumbnail-4.jpg" },
        { mainImg: "/images/csr/Thumbnail-5.jpg" },
        { mainImg: "/images/csr/Thumbnail-6.jpg" },
        { mainImg: "/images/csr/Thumbnail-7.jpg" },
        { mainImg: "/images/csr/Thumbnail-8.jpg" },
        { mainImg: "/images/csr/Thumbnail-9.jpg" },
        { mainImg: "/images/csr/Thumbnail-10.jpg" },
    ];

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
                                        alt={`Thumbnail ${index + 1}`}
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
