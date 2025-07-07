import React from 'react';
import Image from 'next/image';
import HeadingText from '@/components/atoms/typography/HeadingText';
import BodyText from '@/components/atoms/typography/BodyText';
import LinkButton from '@/components/atoms/buttons/LinkButton';

interface CaseStudyProps {
    imageUrl: string;
    title: string;
    description: string;
    author: string;
    date: string;
    slug: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
    imageUrl,
    title,
    description,
    author,
    date,
    slug,
}) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-black text-white">
            <div className="relative h-48 w-full">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover rounded-lg"
                    loading='lazy'
                />
            </div>

            <div className="space-y-3 pt-6">
                <HeadingText
                    text={title}
                    fontWeight="bold"
                    className="text-xl leading-tight"
                />

                <BodyText
                    text={description}
                    className="text-sm text-gray-300"
                    lineClamp={3}
                />

                <div className="flex items-center pt-3 text-xs text-gray-400">
                    <span>by {author}</span>
                    <span className="mx-2">•</span>
                    <span>{date}</span>
                </div>

                <LinkButton
                    text="Continue Reading"
                    url={`/case-studies/${slug}`}
                    className="pt-2"
                />
            </div>
        </div>
    );
};

export default CaseStudy;