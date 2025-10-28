// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css/pagination";
// import "swiper/css";
// import "swiper/css/navigation";
// import { ExecutiveLeader } from "@/types/PropsTypes";
// import ExecutiveLeadersCard from "../cards/ExecutiveLeadersCard";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import { useRef } from "react";
// import type { Swiper as SwiperType } from "swiper";

// const ExecutiveLeadersSlider = ({
//   execLeaders,
//   theme,
//   bgColor
// }: {
//   execLeaders: ExecutiveLeader[];
//   theme: "dark" | "light";
//   bgColor: string
// }) => {
//   const swiperRef = useRef<SwiperType | null>(null);

//   const handlePrev = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slidePrev();
//     }
//   };

//   const handleNext = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slideNext();
//     }
//   };


//   return (
//     <div className="relative pb-16">
//       <div className="absolute z-10 flex gap-4 bottom-0 right-0">
//         <button
//           onClick={handlePrev}
//           className="bg-[#2BADB7] p-4 rounded-full cursor-pointer hover:bg-[#248a93] transition-colors"
//           aria-label="Previous slide"
//         >
//           <FaArrowLeft className="text-base font-semibold text-white" />
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-[#2BADB7] p-4 rounded-full cursor-pointer hover:bg-[#248a93] transition-colors"
//           aria-label="Next slide"
//         >
//           <FaArrowRight className="text-base font-semibold text-white" />
//         </button>
//       </div>
//       <Swiper
//         modules={[Autoplay]}
//         onSwiper={(swiper) => {
//           swiperRef.current = swiper;
//         }}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 0, disableOnInteraction: false }}
//         speed={4000}
//         className="flex items-center justify-center mb-2"
//       >
//         {execLeaders.map((execLeader, i) => (
//           <SwiperSlide key={i}>
//             <ExecutiveLeadersCard executiveLeader={execLeader} bgColor={bgColor} theme={theme} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ExecutiveLeadersSlider;



"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ExecutiveLeader } from "@/types/PropsTypes";
import ExecutiveLeadersCard from "../cards/ExecutiveLeadersCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

const ExecutiveLeadersSlider = ({
  execLeaders,
  theme,
  bgColor,
}: {
  execLeaders: ExecutiveLeader[];
  theme: "dark" | "light";
  bgColor: string;
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className="relative pb-16">
      {/* --- Navigation Buttons --- */}
      <div className="absolute z-10 flex gap-4 bottom-0 right-0">
        <button
          onClick={handlePrev}
          className="bg-[#2BADB7] p-4 rounded-full cursor-pointer  border hover:bg-transparent hover:border-[#2BADB7] hover:text-[#2BADB7] text-white transition-colors 0"
          aria-label="Previous slide"
        >
          <FaArrowLeft className="text-base font-semibold  " />
        </button>
        <button
          onClick={handleNext}
          className="bg-[#2BADB7] p-4 rounded-full cursor-pointer  border hover:bg-transparent hover:border-[#2BADB7] hover:text-[#2BADB7] text-white transition-colors 0"
          aria-label="Next slide"
        >
          <FaArrowRight className="text-base font-semibold" />
        </button>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]} // ✅ include Navigation here
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        className="flex items-center justify-center"
      >
        {execLeaders.map((execLeader, i) => (
          <SwiperSlide key={i}>
            <ExecutiveLeadersCard
              executiveLeader={execLeader}
              bgColor={bgColor}
              theme={theme}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExecutiveLeadersSlider;
