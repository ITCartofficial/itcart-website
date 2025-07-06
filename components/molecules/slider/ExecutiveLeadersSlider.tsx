"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { ExecutiveLeader } from "@/types/PropsTypes";
import ExecutiveLeadersCard from "../cards/ExecutiveLeadersCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ExecutiveLeadersSlider = ({
  execLeaders,
  theme,
}: {
  execLeaders: ExecutiveLeader[];
  theme: "dark" | "light";
}) => {
  return (
    <div className="relative pb-16">
      <div className="absolute z-10 flex gap-4 bottom-0 right-0">
        <div className="exec-prev bg-[#2BADB7] p-4 rounded-full">
          <FaArrowLeft className="text-base font-semibold text-white" />
        </div>
        <div className="exec-next bg-[#2BADB7] p-4 rounded-full">
          <FaArrowRight className="text-base font-semibold text-white" />
        </div>
      </div>
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: ".exec-prev",
          nextEl: ".exec-next",
        }}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={4000}
        className="flex items-center justify-center mb-2"
      >
        {execLeaders.map((execLeader, i) => (
          <SwiperSlide key={i}>
            <ExecutiveLeadersCard executiveLeader={execLeader} theme={theme} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExecutiveLeadersSlider;
