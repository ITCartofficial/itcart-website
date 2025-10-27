"use client";

import SlideCard from "@/components/common/SlideCard";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// import AwardCard from "@/components/atoms/common/AwardCard";
// // import SlideCard from "@/components/atoms/common/SlideCard";
// import React from "react";
// // import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

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
];

// const ImageSlider: React.FC = () => {
//   // console.log(testimonialsData);

//   return (
//     <div className="w-full overflow-hidden lg:px-0 px-4">
//       <Swiper
//         modules={[Autoplay]}
//         slidesPerView={1.8}
//         loop={true}
//         autoplay={{ delay: 0, disableOnInteraction: false }}
//         speed={3000}
//         spaceBetween={20}
//         // breakpoints={{
//         //   640: { slidesPerView: 1 },
//         //   1024: { slidesPerView: 1.9 },
//         //   1440: { slidesPerView:  3},
//         // }}
//         className="flex items-center justify-center"
//       >
//         {slides.map((slide, i) => (
//           <SwiperSlide key={i}>
//             <AwardCard
//               imgSrc={slide.imgSrc}
//               altText={slide.altText}
//               title={slide.description.title}
//               description={slide.description.text}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ImageSlider;










const ImageSlider: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  const getPosition = (
    index: number
  ): "left" | "center" | "right" | "hidden" => {
    if (index === current) return "center";
    if (index === (current - 1 + slides.length) % slides.length) return "left";
    if (index === (current + 1) % slides.length) return "right";
    return "hidden";
  };

  return (
    <div className="relative w-full h-[350px] flex items-center justify-center overflow-hidden mt-8 md:mt-15">
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
      <div className="absolute bottom-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${
              index === current
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










// "use client";

// import SlideCard from "@/components/atoms/common/SlideCard";
// import React, { useState } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const slides = [
//     {
//         imgSrc: "/images/home/awards/awards-2.png",
//         altText: "Beautiful interactive p5js with fish and nebulae",
//         title: "Interactive P5.js Experience",
//         description: "Beautiful interactive visualization featuring fish and nebulae with stunning visual effects and smooth animations."
//     },
//     {
//         imgSrc: "/images/home/awards/awards-3.png",
//         altText: "Make me an endless dinosaur runner game",
//         title: "Endless Dinosaur Runner",
//         description: "An exciting endless runner game featuring dinosaurs with challenging obstacles and engaging gameplay mechanics."
//     },
//     {
//         imgSrc: "/images/home/awards/awards-1.png",
//         altText: "p5js to explore a Mandelbrot set",
//         title: "Mandelbrot Set Explorer",
//         description: "Interactive exploration of the famous Mandelbrot set with zoom functionality and beautiful fractal visualizations."
//     },
// ];

// const ImageSlider: React.FC = () => {
//     const [current, setCurrent] = useState(0);

//     const prevSlide = () =>
//         setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//     const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

//     const getPosition = (index: number): "left" | "center" | "right" | "hidden" => {
//         if (index === current) return "center";
//         if (index === (current - 1 + slides.length) % slides.length) return "left";
//         if (index === (current + 1) % slides.length) return "right";
//         return "hidden";
//     };

//     return (
//         <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
//             <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
//                 {slides.map((slide, index) => (
//                     <SlideCard
//                         key={index}
//                         imgSrc={slide.imgSrc}
//                         altText={slide.altText}
//                         title={slide.title}
//                         description={slide.description}
//                         position={getPosition(index)}
//                     />
//                 ))}
//             </div>
//             <div className="absolute bottom-4 flex space-x-2">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrent(index)}
//                         className={`h-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${index === current ? "w-8" : "w-2 bg-transparent outline outline-gray-200"
//                             }`}
//                         style={
//                             index === current
//                                 ? { background: "linear-gradient(90deg, #29C1E2 0%, #FFF 100%)" }
//                                 : {}
//                         }
//                     />
//                 ))}
//             </div>
//             <button onClick={prevSlide} className="absolute left-4 text-white text-2xl cursor-pointer"><FiChevronLeft /></button>
//             <button onClick={nextSlide} className="absolute right-4 text-white text-2xl cursor-pointer"><FiChevronRight /></button>
//         </div>
//     );
// };

// export default ImageSlider;



















