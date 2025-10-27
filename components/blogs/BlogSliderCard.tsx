import OutlineBtn from '@/components/buttons/OutlineBtn';
import BodyText from '@/components/typography/BodyText';
import GradientTitle from '@/components/typography/GradientTitle';
import { Post } from '@/types/wordpress';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

// interface BlogSliderCardProps {
//     imageUrl: string;
//     title: string;
//     description: string;
//     author: string;
//     date: string;
//     buttonText?: string;
//     slug: string
// }

const BlogSliderCard: React.FC<Post> = ({ excerpt, slug, title, featuredImage }) => {
    return (
        <div className="flex flex-col md:flex-row bg-black text-white rounded-lg overflow-hidden shadow-lg h-96 md:h-[500px] gap-11">
            <div className="relative md:w-1/2 w-full h-96 md:h-[450px]">
                <Image
                    src={featuredImage?.node.sourceUrl || ''}
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
                        className="text-3xl sm:text-4xl mb-4"
                    />
                    <p
                        dangerouslySetInnerHTML={{ __html: excerpt }}
                        color="white"
                        className="text-base md:text-lg text-left"
                    />
                </div>
                <div className="text-sm text-gray-400">
                    {/* <p className='text-[#9A9A9A] font-medium'>
                        by <span>{author}</span> &nbsp;-&nbsp; {date}
                    </p> */}
                    <div className='mt-10 mb-5'>
                        <OutlineBtn
                            text="Learn More"
                            textColor="#FFFFFF"
                            url={`/blogs/${slug}`}
                            icon={<FaArrowRight size={16} color="#FFFFFF" />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSliderCard;




