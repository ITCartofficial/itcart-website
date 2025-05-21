'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import BlogSliderCard from '../../../molecules/blogs/BlogSliderCard';
import { blogPosts } from '@/components/data/blogsData';

// Syncs dot-clicks with slide changes
const SwiperController = ({ current }: { current: number }) => {
    const swiper = useSwiper();

    useEffect(() => {
        if (swiper && swiper.activeIndex !== current) {
            swiper.slideTo(current);
        }
    }, [current, swiper]);

    return null;
};

const BlogSlider = () => {
    const [current, setCurrent] = useState(0);

    return (
        <div className="w-full flex flex-col items-center space-y-6">
            <div className="container relative">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}>
                    {blogPosts.map((blog, index) => (
                        <SwiperSlide key={index}>
                            <BlogSliderCard {...blog} />
                        </SwiperSlide>
                    ))}
                    <SwiperController current={current} />
                </Swiper>
            </div>

            {/* Custom Pagination */}
            <div className="flex space-x-2">
                {blogPosts.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${index === current
                                ? 'w-8'
                                : 'w-2 bg-transparent outline outline-gray-200'
                            }`}
                        style={
                            index === current
                                ? {
                                    background: 'linear-gradient(90deg, #29C1E2 0%, #FFF 100%)',
                                }
                                : {}
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogSlider;
