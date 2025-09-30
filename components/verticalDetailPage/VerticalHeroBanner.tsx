'use client'

import React from 'react'
import Link from 'next/link'
import GradientTitle from '@/components/typography/GradientTitle';
import BodyText from '@/components/typography/BodyText';
import OutlineBtn from '@/components/buttons/OutlineBtn';
import { FaArrowRight } from 'react-icons/fa6';


interface BreadcrumbItem {
    label: string;
    url: string;
}

interface HeroBannerProps {
    title: string;
    description?: string;
    ctaText?: string;
    ctaUrl?: string;
    breadcrumbItems: BreadcrumbItem[];
    backgroundImage?: string;
    className?: string;
    text?: string
}

const HeroBanner: React.FC<HeroBannerProps> = ({
    title,
    description,
    ctaText,
    ctaUrl,
    breadcrumbItems,
    backgroundImage = '/images/services/service-bg.png',
    className = ''
}) => {
    return (
        <section className={`relative w-full bg-black text-white overflow-hidden ${className}`}>
            <div className="relative h-[80vh] sm:h-[80vh] md:h-[50vh] lg:h-[60vh] bg-gradient-to-t from-black/100">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                {/* Flexbox wrapper */}
                <div className="container relative z-10 h-full flex items-center justify-center text-center lg:justify-start lg:text-left">
                    <div className="w-full flex flex-col items-center lg:items-start">
                        {/* Logo */}
                        {/* <div className="w-30 h-20 mb-4">
                            <img
                                src={`/images/verticalLogos/AiXQP-whitelogo.png`}
                                alt="Logo"
                                className="max-h-full max-w-full object-contain mx-auto lg:mx-0"
                            />
                        </div> */}

                        {/* Title */}
                        <GradientTitle
                            text={title}
                            theme="dark"
                            className="text-[26px] sm:text-[32px] md:text-[48px] w-full lg:w-[50%]"
                        />

                        {/* Subtitle */}
                        <BodyText
                            text={description ?? ""}
                            color="#ffffff"
                            className="text-sm sm:text-base md:text-lg mt-3 w-[70%]"
                        />

                        <div className="mt-3">
                            <OutlineBtn
                                url="/"
                                text="Book Free Demo"
                                textColor="#ffffff"
                                icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner;



// {/* <section className={`relative w-full bg-black text-white overflow-hidden ${className}`}>
//   <div className="relative h-[30vh] sm:h-[30vh] md:h-[50vh] lg:h-[60vh] bg-gradient-to-t from-black/100">
//     <div
//       className="absolute inset-0 z-0"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     />

//     {/* Center content */}
//     <div className="container relative z-10 h-full flex items-center justify-center">
//       <GradientTitle
//         text={title}
//         theme="dark"
//         className="text-3xl sm:text-4xl md:text-[64px] text-center"
//       />
//     </div>
//   </div>
// </section> */}


//   {
//                 description && (
//                     <div className="container mx-auto px-4 ">
//                         <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
//                             {/* Description */}
//                             <BodyText
//                                 text={description}
//                                 color="#ffffff"
//                                 className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 lg:mb-10"
//                             />

//                             {/* CTA Button */}
//                             {
//                                 ctaText && (
//                                     <OutlineBtn
//                                         text={ctaText}
//                                         icon={<FaArrowRight size={16} />}
//                                         url={ctaUrl}
//                                         theme="dark"
//                                         className="mt-2"
//                                     />
//                                 )
//                             }
//                         </div>
//                     </div>
//                 )
//             }