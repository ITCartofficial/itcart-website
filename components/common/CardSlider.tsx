"use client";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import IconInfoCard from "../cards/IconInfoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { IconInfoCardProps } from "@/types/PropsTypes";
import type { Swiper as SwiperType } from "swiper";

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
            <div className="relative w-full overflow-hidden px-5">
                <Swiper
                    modules={[Autoplay]}
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
                    breakpoints={{
                        320: {
                            slidesPerView: 1.3,
                            slidesPerGroup: 1,
                            spaceBetween: 16,
                        },
                        480: {
                            slidesPerView: 1.5,
                            slidesPerGroup: 1,
                            spaceBetween: 16,
                        },
                        640: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            slidesPerGroup: 1,
                            spaceBetween: 20,
                        },
                        1440: {
                            slidesPerView: 4,
                            slidesPerGroup: 1,
                            spaceBetween: 20,
                        },
                    }}
                    className="py-8 px-4"
                >
                    {cardLists.map((card, index) => (
                        <SwiperSlide key={index}>
                            <IconInfoCard {...card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }
);

CardSlider.displayName = "CardSlider";

export default CardSlider;