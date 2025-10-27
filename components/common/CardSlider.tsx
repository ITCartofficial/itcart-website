// // "use client";

// // import IconInfoCard from '../cards/IconInfoCard'

// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay } from "swiper/modules";
// // import "swiper/css";
// // import { IconInfoCardProps } from '@/types/PropsTypes';

// // type CardSliderProps = {
// //     cardLists: IconInfoCardProps[]
// // }

// // const CardSlider: React.FC<CardSliderProps> = ({ cardLists }) => {
// //     return (
// //         <div className='w-full overflow-hidden'>
// //             <Swiper
// //                 modules={[Autoplay]}
// //                 slidesPerView={4}
// //                 loop={true}
// //                 autoplay={{ delay: 0, disableOnInteraction: false }}
// //                 speed={3000}
// //                 spaceBetween={20}
// //                 breakpoints={{
// //                     320: { slidesPerView: 1 },
// //                     640: { slidesPerView: 2 },
// //                     1024: { slidesPerView: 3 },
// //                     1440: { slidesPerView: 4 },
// //                 }}
// //                 className="flex items-center justify-center"
// //             >
// //                 {
// //                     cardLists.map((card, i) => (
// //                         <SwiperSlide key={i}>
// //                             <IconInfoCard
// //                                 bgImage={card.bgImage}
// //                                 title={card.title}
// //                                 description={card.description}
// //                                 buttonUrl={card.buttonUrl}
// //                                 logo={card.logo}
// //                                 logoBg={card.logoBg}
// //                             />
// //                         </SwiperSlide>
// //                     ))
// //                 }
// //             </Swiper>
// //         </div>
// //     )
// // }

// // export default CardSlider









// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import IconInfoCard from '../cards/IconInfoCard';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { IconInfoCardProps } from '@/types/PropsTypes';
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// type CardSliderProps = {
//     cardLists: IconInfoCardProps[]
// }

// const CardSlider: React.FC<CardSliderProps> = ({ cardLists }) => {
//     const [isMounted, setIsMounted] = useState(false);
//     const swiperRef = useRef<any>(null);

//     // Ensure component is mounted before initializing Swiper
//     useEffect(() => {
//         setIsMounted(true);
//     }, []);

//     const handlePrev = () => {
//         if (swiperRef.current) {
//             swiperRef.current.slidePrev();
//         }
//     };

//     const handleNext = () => {
//         if (swiperRef.current) {
//             swiperRef.current.slideNext();
//         }
//     };

//     return (
//         <div className='relative w-full overflow-hidden'>
//             {/* Navigation Buttons */}
//             <button
//                 onClick={handlePrev}
//                 className="bg-red-400"
//             >
//                 <FaArrowLeft className="w-5 h-5" />
//             </button>
//             <button
//                 onClick={handleNext}
//                 className="bg-red-400"
//             >
//                 <FaArrowRight className="w-5 h-5" />
//             </button>

//             <Swiper
//                 modules={[Autoplay]}
//                 onSwiper={(swiper) => {
//                     swiperRef.current = swiper;
//                 }}
//                 slidesPerView={4}
//                 loop={true}
//                 spaceBetween={20}
//                 autoplay={{
//                     delay: 3000,
//                     disableOnInteraction: false,
//                 }}
//                 breakpoints={{
//                     320: {
//                         slidesPerView: 1,
//                         spaceBetween: 20
//                     },
//                     640: {
//                         slidesPerView: 2,
//                         spaceBetween: 20
//                     },
//                     1024: {
//                         slidesPerView: 3,
//                         spaceBetween: 30
//                     },
//                     1280: {
//                         slidesPerView: 4,
//                         spaceBetween: 30
//                     }
//                 }}
//                 className="py-8 px-4"
//             >
//                 {cardLists.map((card, index) => (
//                     <SwiperSlide key={index} className="h-auto">
//                         <IconInfoCard {...card} />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default CardSlider;



"use client";

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import IconInfoCard from "../cards/IconInfoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { IconInfoCardProps } from "@/types/PropsTypes";

export type CardSliderRef = {
    slidePrev: () => void;
    slideNext: () => void;
};

type CardSliderProps = {
    cardLists: IconInfoCardProps[];
};

const CardSlider = forwardRef<CardSliderRef, CardSliderProps>(({ cardLists }, ref) => {
    const swiperRef = useRef<any>(null);

    useImperativeHandle(ref, () => ({
        slidePrev: () => swiperRef.current?.slidePrev(),
        slideNext: () => swiperRef.current?.slideNext(),
    }));

    return (
        <div className="relative w-full overflow-hidden">
            <Swiper
                modules={[Autoplay]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1440: { slidesPerView: 4 },
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
});

CardSlider.displayName = "CardSlider";
export default CardSlider;
