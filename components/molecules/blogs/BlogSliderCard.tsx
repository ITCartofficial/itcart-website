import OutlineBtn from '@/components/atoms/buttons/OutlineBtn';
import BodyText from '@/components/atoms/typography/BodyText';
import GradientTitle from '@/components/atoms/typography/GradientTitle';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

interface BlogSliderCardProps {
    imageUrl: string;
    title: string;
    description: string;
    author: string;
    date: string;
    buttonText?: string;
    slug: string
}

const BlogSliderCard: React.FC<BlogSliderCardProps> = ({ imageUrl, title, description, author, date, slug }) => {
    return (
        <div className="flex flex-col md:flex-row bg-black text-white rounded-lg overflow-hidden shadow-lg gap-11">
            <div className="relative md:w-1/2 w-full h-96 md:h-[370px]">
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col justify-between md:w-1/2">
                <div className='pb-7'>
                    <BodyText
                        text="Editor&apos;s Pick"
                        color="white"
                        textAlign="left"
                        className="text-base pb-4 pt-2"
                    />
                    <GradientTitle
                        text={title}
                        theme="dark"
                        className="text-4xl mb-4"
                    />
                    <BodyText
                        text={description}
                        color="white"
                        textAlign="left"
                        className="text-lg"
                    />
                </div>
                <div className="text-sm text-gray-400">
                    <p className='text-[#9A9A9A] font-medium'>
                        by <span>{author}</span> &nbsp;-&nbsp; {date}
                    </p>
                    <div className='mt-10 mb-5'>
                        <OutlineBtn
                            text="Learn More"
                            textColor="#FFFFFF"
                            url={slug}
                            icon={<FaArrowRight size={16} color="#FFFFFF" />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSliderCard;




