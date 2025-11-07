"use client"
import React from 'react';
import BodyText from '@/components/typography/BodyText';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
// import OutlineBtn from '../buttons/OutlineBtn';
import WhiteButton from '../buttons/WhiteButton';

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
    description,
    imageAlt = "Service illustration",
    compenyName,
    compenyLogo
}) => {

    // const router = useRouter();

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
                        {/* Main company image */}
                        <div className="w-full overflow-hidden rounded-xl mb-2 relative aspect-[16/9]">
                            <Image
                                src={`/images/vertical/${compenyName}.png`}
                                alt={imageAlt}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Company logo */}
                        <div className="w-30 h-20 mx-auto mb-1 relative">
                            <Image
                                src={compenyLogo ? compenyLogo : ''}
                                alt="Logo"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className='w-full flex justify-center mt-6 mb-4'>

                        <WhiteButton
                            url={`our-verticals/${compenyName?.toLowerCase()}`}
                            text={"View More"}
                            textColor='#ffffff'
                            icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                        />

                    </div>


                    {/* <button onClick={() => router.push(`our-verticals/${compenyName}`)} className="mt-6 mb-4 inline-block mx-auto group cursor-pointer" aria-label="Learn more">
                        <span className="inline-flex rounded-lg p-[1px] bg-gradient-to-r from-black to-[#2ac4c9]">
                            <span className="flex items-center gap-3 bg-white rounded-lg px-6 py-2 text-black font-medium">
                                <span>Learn More</span>
                                <FaArrowRight
                                    size={20}
                                    className="text-[#2ac4c9] transition-transform duration-200 group-hover:translate-x-1"
                                />
                            </span>
                        </span>
                    </button> */}

                </div>
            </div>
        </div>
    );
};

export default VerticalCard;