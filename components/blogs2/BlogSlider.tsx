'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import BlogSliderCard from '../blogs/BlogSliderCard';
// import { blogPosts } from '@/lib/data/blogsData';
import { Post } from '@/types/wordpress';

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

const BlogSlider = ({ posts }: { posts: Post[] }) => {
    const [current, setCurrent] = useState(0);

    // 🔹 Filter 5 Editor's Pick blogs
    const editorsPickPosts = posts.slice(0, 5);
    // .filter((blog) => blog.category === "Editor's Pick")

    return (
        <div className="w-full flex flex-col items-center">
            <div className="container relative">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}>
                    {editorsPickPosts.map((blog, index) => (
                        <SwiperSlide key={index}>
                            <BlogSliderCard {...blog} />
                        </SwiperSlide>
                    ))}
                    <SwiperController current={current} />
                </Swiper>
            </div>

            {/* Custom Pagination */}
            <div className="flex">
                {editorsPickPosts.map((_, index) => (
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
