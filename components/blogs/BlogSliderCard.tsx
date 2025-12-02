import OutlineBtn from '@/components/buttons/OutlineBtn';
import BodyText from '@/components/typography/BodyText';
import GradientTitle from '@/components/typography/GradientTitle';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

interface SubItem {
    item: string;
    content: string;
}

interface ContentItem {
    id: number | string;
    title: string;
    content: string[];
    subItems?: SubItem[];
    subItemTitle?: string;
    finalPoint?: string;
}

interface Posts {
    bannerTitle: string;
    bannerDiscription: string;
    image?: string;
    id?: number | string;
    type?: string;
    writtenBy?: string;
    writtenDate?: string;
    contents: ContentItem[];
}

const BlogSliderCard: React.FC<Posts> = ({ bannerTitle, id, bannerDiscription }) => {

    console.log("bannerTitle", bannerTitle);


    return (
        <div className="flex flex-col md:flex-row bg-black text-white rounded-2xl overflow-hidden shadow-lg gap-8 md:gap-11 h-auto">
            {/* Image Section */}
            <div className='block md:hidden'>
                <p className='text-[#9A9A9A] text-[16px] text-center md:texr-start'>Editor’s Pick</p>
                <GradientTitle
                    text={bannerTitle}
                    theme="dark"
                    className="text-2xl sm:text-3xl md:text-4xl mb-4 text-center md:texr-start mt-2"
                />
            </div>

            <div className="relative w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                    src={'/images/about/ai-image.jpg'}
                    alt={bannerTitle}
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between w-full md:w-1/2 p-4 md:p-6 ">
                <div>
                    <div className='md:block hidden'>
                        <BodyText
                            text="Editor’s Pick"
                            color="white"
                            textAlign="left"
                            className="text-base pb-4"
                        />
                    </div>

                    <div className='md:block hidden'>
                        <GradientTitle
                            text={bannerTitle}
                            theme="dark"
                            className="text-2xl sm:text-3xl md:text-4xl mb-4"
                        />
                    </div>


                    <p
                        // dangerouslySetInnerHTML={{ __html: excerpt }}
                        className="text-base md:text-lg text-center md:text-start text-gray-300"
                    >
                        {bannerDiscription}
                    </p>

                    {/* <div className="flex items-center justify-center md:justify-start text-xs text-gray-400 mt-5">
                        <BodyText text={author ?? ''} className="text-[17px]" />
                        <span className="mx-2">—</span>
                        <BodyText text={date} className="text-[17px]" />
                    </div> */}
                </div>

                <div className="mt-8 flex justify-center md:justify-start">
                    <OutlineBtn
                        showBorderaButton={true}
                        text="Read More"
                        textColor="#FFFFFF"
                        url={`/blogs/${`${bannerTitle}?id=${id}`}`}
                        icon={<FaArrowRight size={16} color="#FFFFFF" />}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogSliderCard;
