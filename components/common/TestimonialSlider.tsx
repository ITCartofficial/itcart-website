"use client";

import TestimonialCard from "@/components/cards/TestimonialCard";
import { TestimonialCardProps } from "@/types/PropsTypes";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type TestimonialSliderProps = {
  testimonialsData: TestimonialCardProps[];
};

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonialsData,
}) => {
  // console.log(testimonialsData);

  return (
    <div className="w-full overflow-hidden lg:px-0 px-4">
      <Swiper
        modules={[Autoplay]}
        // slidesPerView={4}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={3000}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },  // very small screens
          480: { slidesPerView: 1.2, spaceBetween: 15 }, // small mobile
          640: { slidesPerView: 1.5, spaceBetween: 20 }, // large mobile
          768: { slidesPerView: 2, spaceBetween: 25 },   // tablet
          1024: { slidesPerView: 3, spaceBetween: 30 },  // desktop
          1440: { slidesPerView: 4, spaceBetween: 35 },  // large desktop
          1920: { slidesPerView: 4.5, spaceBetween: 40 }, // extra large screen
        }}
        className="flex items-center justify-center"
      >
        {testimonialsData.map((testimonial, i) => (
          <SwiperSlide key={i}>
            <TestimonialCard
              rating={testimonial.rating}
              testimonialMessage={testimonial.testimonialMessage}
              userDesignation={testimonial.userDesignation}
              userImage={testimonial.userImage}
              userName={testimonial.userName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
