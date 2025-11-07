// import BodyText from '@/components/typography/BodyText'
// import GradientTitle from '@/components/typography/GradientTitle'
// import Image from 'next/image'
// import React from 'react'

// import patentImage from "@/public/images/home/patent-aix-framework.jpg"

// const PatentPendingSection = () => {
//     return (
//         <div className='container bg-black mt:pt-8  px-6 sm:px-8 lg:px-'>

//             <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:mt-10'>

//                 <div className='max-w-none lg:max-w-[540px] order-2 lg:order-1'>
//                     <GradientTitle
//                         text="Our Patent-Pending AI framework"
//                         // lineHeight="1.2"
//                         className="text-[30px] lg:text-[48px] mb-2 leading-[1.2] sm:mb-6 md:text-left text-center "
//                         theme='dark'
//                     />
//                     <p className='text-white text-[18px] text-black pb-2 sm:pb-4 leading-relaxed hover:cursor-default'>
//                         <span className='font-semibold hover:cursor-default'>AiXHub<sup>TM</sup> Framework</span> is iTCart's proprietary AI-native EOS (Enterprise Operating System), designed to unify data, human oversight, and automation into one adaptive, high-performance ecosystem to help enterprises build secure, scalable and responsible AI systems.
//                     </p>
//                     <BodyText
//                         text="Built for speed, scale, and self-learning, AiXHub powers intelligent transformation across industries turning complexity into clarity, and ideas into real-time impact."
//                         className="text-white text-base text-[18px] leading-relaxed"
//                     />
//                 </div>
//                 <div className="relative h-[250px] sm:h-[300px] md:h-[370px]  rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden order-1 lg:order-2 md:mt-4 mt-4">
//                     <Image
//                         src={patentImage}
//                         fill
//                         alt='AiXFramework'
//                         style={{ objectFit: 'cover' }}
//                         className="transition-transform duration-300 hover:scale-105"
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default PatentPendingSection


import BodyText from '@/components/typography/BodyText'
import GradientTitle from '@/components/typography/GradientTitle'
import Image from 'next/image'
import React from 'react'

import patentImage from "@/public/images/home/patent-aix-framework.jpg"

const PatentPendingSection = () => {
    return (
        <div className="container bg-black px-6 sm:px-8 py-10 sm:py-16">

            {/* Grid layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:mt-10 items-center">

                {/* Left side (text + heading) */}
                <div className="max-w-none lg:max-w-[540px] order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                    {/* Heading */}
                    <GradientTitle
                        text="Our Patent-Pending AI framework"
                        className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] mb-3 sm:mb-6 leading-[1.2]"
                        theme="dark"
                    />

                    {/* Image (visible only on small screens) */}
                    <div className="relative w-full h-[220px] sm:h-[280px] rounded-[20px] sm:rounded-[24px] overflow-hidden mt-4 mb-6 block lg:hidden">
                        <Image
                            src={patentImage}
                            fill
                            alt="AiXFramework"
                            style={{ objectFit: "cover" }}
                            className="transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Content paragraphs */}
                    <p className="text-white text-[16px] sm:text-[18px] pb-3 sm:pb-4 leading-relaxed">
                        <span className="font-semibold">AiXHub Framework</span> is iTCart's proprietary AI-native EOS (Enterprise Operating System), designed to unify data, human oversight, and automation into one adaptive, high-performance ecosystem to help enterprises build secure, scalable and responsible AI systems.
                    </p>

                    <BodyText
                        text="Built for speed, scale, and self-learning, AiXHub powers intelligent transformation across industries turning complexity into clarity and ideas into real-time impact."
                        className="text-white text-[16px] sm:text-[18px] leading-relaxed"
                    />
                </div>

                {/* Right side (image for large screens) */}
                <div className="relative h-[250px] sm:h-[300px] md:h-[370px] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden order-1 lg:order-2 hidden lg:block">
                    <Image
                        src={patentImage}
                        fill
                        alt="AiXFramework"
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>
        </div>
    )
}

export default PatentPendingSection
 