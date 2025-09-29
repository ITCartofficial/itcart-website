"use client"
import React from 'react';
import BodyText from '@/components/typography/BodyText';
import { FaArrowRight } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

interface VerticalCardProps {
    title: string;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
    linkText?: string;
    linkUrl?: string;
    className?: string;
    compenyName?: string;
    verticalCompenyLogo?: string;
    compenyLogo?: string
}

const VerticalCard: React.FC<VerticalCardProps> = ({
    title,
    description,
    imageSrc = "/images/default-service.jpg",
    imageAlt = "Service illustration",
    linkText = "Learn More",
    linkUrl = "#",
    className = "",
    compenyName,
    verticalCompenyLogo,
    compenyLogo
}) => {

    const router = useRouter();

    return (
        <div className="flex justify-center items-center  bg-black min-h-[420px]">

            <div className='w-full'>

                <BodyText
                    text={compenyName ?? ""}
                    color="rgba(255, 255, 255, 0.8)"
                    lineHeight="1.5"
                    className="text-sm mb-2 text-center"
                />

                <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full p-3 flex flex-col text-center min-h-[420px]">
                    {/* Top content */}
                    <div className="flex-grow">
                        <div className="w-full overflow-hidden rounded-xl mb-2">
                            <img
                                src={`/images/vertical/${compenyName}.png`}
                                alt={imageAlt}
                                className="w-full lg:h-[163px] h-[180] object-cover"
                            />
                        </div>

                        <div className="w-30 h-20 mx-auto mb-3 flex items-center justify-center">
                            <img
                                src={compenyLogo}
                                alt="Logo"
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <button onClick={() => router.push(`our-verticals/${compenyName}`)} className="mt-6 inline-block mx-auto group cursor-pointer" aria-label="Learn more">
                        <span className="inline-flex rounded-lg p-[1px] bg-gradient-to-r from-black to-[#2ac4c9]">
                            <span className="flex items-center gap-3 bg-white rounded-lg px-6 py-2 text-black font-medium">
                                <span>Learn More</span>
                                <FaArrowRight
                                    size={20}
                                    className="text-[#2ac4c9] transition-transform duration-200 group-hover:translate-x-1"
                                />
                            </span>
                        </span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default VerticalCard;