// import OutlineBtn from '@/components/buttons/OutlineBtn';
// import BodyText from '@/components/typography/BodyText';
// import GradientTitle from '@/components/typography/GradientTitle';
// import { Post } from '@/types/wordpress';
// import Image from 'next/image';
// import React from 'react';
// import { FaArrowRight } from 'react-icons/fa6';

// // interface BlogSliderCardProps {
// //     imageUrl: string;
// //     title: string;
// //     description: string;
// //     author: string;
// //     date: string;
// //     buttonText?: string;
// //     slug: string
// // }

// const BlogSliderCard: React.FC<Post> = ({ excerpt, slug, title, featuredImage }) => {
//     return (
//         <div className="flex flex-col md:flex-row bg-black text-white rounded-lg overflow-hidden shadow-lg h-96 md:h-[500px] gap-11">
//             <div className="relative md:w-1/2 w-full h-200 md:h-[450px]">
//                 <Image
//                     src={featuredImage?.node.sourceUrl || ''}
//                     alt={title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-2xl"
//                     loading="lazy"
//                 />
//             </div>
//             <div className="flex flex-col justify-between md:w-1/2">
//                 <div className='pb-7'>
//                     <BodyText
//                         text="Editor&apos;s Pick"
//                         color="white"
//                         textAlign="left"
//                         className="text-base pb-4 pt-2"
//                     />
//                     <GradientTitle
//                         text={title}
//                         theme="dark"
//                         className="text-3xl sm:text-4xl mb-4"
//                     />
//                     <p
//                         dangerouslySetInnerHTML={{ __html: excerpt }}
//                         color="white"
//                         className="text-base md:text-lg text-left"
//                     />
//                 </div>
//                 <div className="text-sm text-gray-400">
//                     {/* <p className='text-[#9A9A9A] font-medium'>
//                         by <span>{author}</span> &nbsp;-&nbsp; {date}
//                     </p> */}
//                     <div className='mt-10 mb-5'>
//                         <OutlineBtn
//                             text="Learn More"
//                             textColor="#FFFFFF"
//                             url={`/blogs/${slug}`}
//                             icon={<FaArrowRight size={16} color="#FFFFFF" />}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlogSliderCard;




import OutlineBtn from '@/components/buttons/OutlineBtn';
import BodyText from '@/components/typography/BodyText';
import GradientTitle from '@/components/typography/GradientTitle';
import { Post } from '@/types/wordpress';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const BlogSliderCard: React.FC<Post> = ({ excerpt, slug, title, featuredImage, author, date }) => {
    return (
        <div className="flex flex-col md:flex-row bg-black text-white rounded-2xl overflow-hidden shadow-lg gap-8 md:gap-11 h-auto">
            {/* Image Section */}
            <div className='block md:hidden'>
                <p className='text-[#9A9A9A] text-[16px] text-center md:texr-start'>Editor’s Pick</p>
                <GradientTitle
                    text={title}
                    theme="dark"
                    className="text-2xl sm:text-3xl md:text-4xl mb-4 text-center md:texr-start mt-2"
                />
            </div>
            <div className="relative w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                    src={featuredImage?.node.sourceUrl || '/images/placeholder.jpg'}
                    alt={title}
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
                            text={title}
                            theme="dark"
                            className="text-2xl sm:text-3xl md:text-4xl mb-4"
                        />
                    </div>


                    <p
                        dangerouslySetInnerHTML={{ __html: excerpt }}
                        className="text-base md:text-lg text-center md:text-start text-gray-300"
                    />

                    <div className="flex items-center justify-center md:justify-start text-xs text-gray-400 mt-5">
                        <BodyText text={author ?? ''} className="text-[17px]" />
                        <span className="mx-2">—</span>
                        <BodyText text={date} className="text-[17px]" />
                    </div>
                </div>

                <div className="mt-8 flex justify-center md:justify-start">
                    <OutlineBtn
                        showBorderaButton={true}
                        text="Read More"
                        textColor="#FFFFFF"
                        url={`/blogs/${slug}`}
                        icon={<FaArrowRight size={16} color="#FFFFFF" />}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogSliderCard;
