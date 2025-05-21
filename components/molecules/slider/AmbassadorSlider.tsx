'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { Ambassador } from "@/types/PropsTypes";
import InformaticImageCard from "../cards/InformaticImageCard";

const AmbassadorSlider = ({ ambassadorList }: { ambassadorList: Ambassador[] }) => {
    return (
        <div>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                pagination={{ el: ".custom-pagination", type: "bullets", clickable: true }}
                navigation={{
                    prevEl: ".exec-prev",
                    nextEl: ".exec-next",
                }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 1.4 },
                    1024: { slidesPerView: 2.2 },
                    1440: { slidesPerView: 3 },

                }}
                // slidesPerView={1}
                loop={true}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                speed={4000}
                spaceBetween={20}
                className="flex items-center justify-center mb-2"
            >
                {ambassadorList.map((ambassador, i) => (
                    <SwiperSlide key={i}>
                        <InformaticImageCard theme="dark" user={ambassador} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-pagination mt-8 flex justify-center gap-2 dark"></div>
        </div>
    )
}

export default AmbassadorSlider