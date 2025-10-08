import React from 'react';
import Image from 'next/image';
import HeadingText from '@/components/typography/HeadingText';
import LinkButton from '@/components/buttons/LinkButton';

interface HorizontalCardProps {
    imageUrl: string;
    title: string;
    author: string;
    date: string;

    // Customizable styling props
    imageWidth?: string;
    imageHeight?: string;
    titleSize?: string;
    className?: string;

    // Optional "Continue Reading" button
    showButton?: boolean;
    buttonUrl?: string;
    buttonText?: string;

    showColumn?:boolean
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({
    imageUrl,
    title,
    author,
    date,
    imageWidth = 'w-1/4',
    imageHeight = 'h-20',
    titleSize = 'text-base',
    className = '',
    showButton = false,
    buttonUrl = '#',
    buttonText = 'Continue Reading',
    showColumn
}) => {
    return (
        <div className={`w-full ${showColumn ? 'lg:flex' : "flex"} overflow-hidden p-2 text-white shadow-lg ${showColumn} ${className}`}>
            {/* Image Section */}
            <div className={`relative ${imageWidth} ${imageHeight}`}>
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className={`object-cover rounded-sm`}
                    loading="lazy"
                />
            </div>

            {/* Content Section */}
            <div className={`flex-1 ${showColumn ? "lg:px-4 lg:mt-0 mt-4 md:mt-0" : "px-4"} flex flex-col justify-center`}>
                <HeadingText
                    text={title}
                    className={`${titleSize} leading-tight mb-1 hover:text-[#45c2cc]`}
                />

                <div className="text-xs text-gray-400">
                    <p>{author + "-" + date}</p>
                    {/* <p>{date}</p> */}
                </div>

                {/* Optional Button */}
                {showButton && (
                    <div className="mt-2">
                        <LinkButton text={buttonText} url={buttonUrl} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default HorizontalCard;

