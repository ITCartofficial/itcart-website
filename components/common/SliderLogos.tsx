'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import LogoBadge from "@/components/common/LogoBadge";

type LogoSliderProps = {
    logos: string[]
}

const LogoSlider: React.FC<LogoSliderProps> = ({ logos }) => {
    return (
        <div className="w-full bg-black py-6 overflow-hidden">
            <Swiper
                modules={[Autoplay]}
                // slidesPerView={9}
                loop={true}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                speed={3000}
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 2.5 },
                    640: { slidesPerView: 5 },
                    1024: { slidesPerView: 7 },
                    1440: { slidesPerView: 8 },
                    
                }}
                className="flex items-center justify-center"
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <LogoBadge
                            src={logo}
                            alt={`logo-${index}`}
                            // className="shrink-0"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default LogoSlider;
