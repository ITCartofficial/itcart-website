'use client';
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

interface HorizontalImageSliderProps {
  images?: string[];
}

const HorizontalImageSlider: React.FC<HorizontalImageSliderProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const defaultImages = [
    '/images/career/slide-1.png',
    '/images/career/slide-2.webp',
    '/images/career/slide-3.jpg',
    '/images/career/slide-4.jpg',
    '/images/career/slide-5.jpg',
    '/images/career/slide-6.jpg',
  ];

  const slideImages = images || defaultImages;

  return (
    <div className="w-full mx-auto px-4 mt-[-10px] relative">
      <style jsx global>{`
        .swiper-slide {
          transition: transform 0.3s ease-in-out !important;
          transform: scale(0.75) !important;
        }

        .swiper-slide-active {
          transform: scale(1.01) scaleX(1.4) !important;
          z-index: 10 !important;
        }

        .swiper-slide-next,
        .swiper-slide-prev {
          transform: scale(0.85) !important;
          z-index: 5 !important;
        }

        .swiper-slide-duplicate-active {
          transform: scale(1.1) scaleX(1.3) !important;
          z-index: 10 !important;
        }
      `}</style>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 100,
          },
          1280: {
            slidesPerView: 2.5,
            spaceBetween: 110,
          },
        }}
        className="!pb-12"
      >
        {slideImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="scale-wrapper transition-transform duration-300 ease-in-out">
              <div className="relative w-full h-64 md:h-[350px] lg:h-[430px] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons (unchanged) */}
        <div className="swiper-button-prev !text-blue-500 !font-bold after:!text-2xl !left-2 !top-1/2 !transform !-translate-y-1/2"></div>
        <div className="swiper-button-next !text-blue-500 !font-bold after:!text-2xl !right-2 !top-1/2 !transform !-translate-y-1/2"></div>
      </Swiper>

      {/* Custom Tailwind Pagination */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`h-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${current === index
              ? 'w-8 bg-gradient-to-r from-[#29C1E2] to-white'
              : 'w-2 bg-transparent border border-gray-300'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalImageSlider;

