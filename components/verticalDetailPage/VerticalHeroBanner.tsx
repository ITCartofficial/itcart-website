'use client'
import React from 'react'
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
    text?: string;
    serviceName?: string;
    bannerButtonText?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
    title,
    description,
    backgroundImage = '/images/services/service-bg.png',
    className = '',
    serviceName,
    bannerButtonText
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
                <div className="container relative z-10 h-full flex items-center justify-center text-center lg:justify-start lg:text-left my-6">
                    <div className="w-full flex flex-col items-center lg:items-start">

                        {
                            serviceName &&
                            <div className="bg-white w-fit py-1 px-4 rounded-full my-1">
                                <p className='text-black text-[8px] sm:text-[10px] md:text-[14px]'>{serviceName}</p>
                            </div>
                        }


                        {/* Title */}
                        <GradientTitle
                            text={title}
                            theme="dark"
                            className="text-[26px] sm:text-[32px] md:text-[48px] w-full lg:w-[60%] leading-[1.2]"
                        />

                        <BodyText
                            text={description ?? ""}
                            color="#ffffff"
                            className="text-sm sm:text-[15px] md:text-[18px] mt-3 w-[60%]"
                        />

                        <div className="mt-8">
                            <OutlineBtn
                                url="/"
                                text={bannerButtonText ? bannerButtonText : "Book Free Demo"}
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
