"use client";

import IconInfoCard from '../cards/IconInfoCard'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { IconInfoCardProps } from '@/types/PropsTypes';

type CardSliderProps = {
    cardLists: IconInfoCardProps[]
}

const CardSlider: React.FC<CardSliderProps> = ({ cardLists }) => {
    return (
        <div className='w-full overflow-hidden'>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={4}
                loop={true}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                speed={3000}
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1440: { slidesPerView: 4 },
                }}
                className="flex items-center justify-center"
            >
                {
                    cardLists.map((card, i) => (
                        <SwiperSlide key={i}>
                            <IconInfoCard
                                bgImage={card.bgImage}
                                title={card.title}
                                description={card.description}
                                buttonUrl={card.buttonUrl}
                                logo={card.logo}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default CardSlider