'use client';

import TestimonialCard from '@/components/molecules/cards/TestimonialCard'
import { TestimonialCardProps } from '@/types/PropsTypes'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type TestimonialSliderProps = {
    testimonialsData: TestimonialCardProps[]
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonialsData }) => {
    // console.log(testimonialsData);

    return (
        <div className='w-full overflow-hidden'>
            <Swiper
                modules={[Autoplay]}
                // slidesPerView={4}
                loop={true}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                speed={3000}
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 2.2 },
                    1440: { slidesPerView: 2.6 },
                }}
                className="flex items-center justify-center"
            >
                {
                    testimonialsData.map((testimonial, i) => (
                        <SwiperSlide key={i}>
                            <TestimonialCard rating={testimonial.rating} testimonialMessage={testimonial.testimonialMessage} userDesignation={testimonial.userDesignation} userImage={testimonial.userImage} userName={testimonial.userName} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default TestimonialSlider