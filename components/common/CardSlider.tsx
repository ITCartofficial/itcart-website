"use client";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import IconInfoCard from "../cards/IconInfoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { IconInfoCardProps } from "@/types/PropsTypes";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css/pagination";
import OutlineBtn from "../buttons/OutlineBtn";
import { FaArrowRight } from "react-icons/fa6";

export type CardSliderRef = {
    slidePrev: () => void;
    slideNext: () => void;
};

type CardSliderProps = {
    cardLists: IconInfoCardProps[];
};

const CardSlider = forwardRef<CardSliderRef, CardSliderProps>(
    ({ cardLists }, ref) => {
        const swiperRef = useRef<SwiperType | null>(null);

        useImperativeHandle(ref, () => ({
            slidePrev: () => swiperRef.current?.slidePrev(),
            slideNext: () => swiperRef.current?.slideNext(),
        }));


        return (
            <div className="relative w-full overflow-hidden pl-5">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView={1.3}
                    slidesPerGroup={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={16}
                    centeredSlides={false}
                    pagination={{
                        el: ".custom-pagination",
                        clickable: true,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1.3, spaceBetween: 16 },
                        480: { slidesPerView: 1.5, spaceBetween: 16 },
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                        1440: { slidesPerView: 4, spaceBetween: 20 },
                    }}
                    className="py-8 px-4"
                >
                    {cardLists.map((card, index) => (
                        <SwiperSlide key={index}>
                            <IconInfoCard {...card} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center mt-10">
                    <OutlineBtn
                        url="/products"
                        text="Show More"
                        textColor="#ffffff"
                        icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                    />
                </div>
                {/* <div className="custom-pagination flex justify-center gap-2 md:mt-10 mt-5" /> */}

            </div>
        );
    }
);

CardSlider.displayName = "CardSlider";

export default CardSlider;