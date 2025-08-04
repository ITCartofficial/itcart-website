import React from 'react';
import Image from 'next/image';
import HeadingText from '@/app/components/typography/HeadingText';
import LinkButton from '@/app/components/buttons/LinkButton';

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
}) => {
    return (
        <div className={`w-full flex overflow-hidden p-2 text-white shadow-lg ${className}`}>
            {/* Image Section */}
            <div className={`relative ${imageWidth} ${imageHeight}`}>
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover rounded-sm"
                    loading="lazy"
                />
            </div>

            {/* Content Section */}
            <div className="flex-1 px-4 flex flex-col justify-center gap-1">
                <HeadingText
                    text={title}
                    className={`${titleSize} leading-tight mb-1 hover:text-[#45c2cc]`}
                />

                <div className="text-xs text-gray-400">
                    <p>{author}</p>
                    <p>{date}</p>
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

