import BodyText from '@/components/typography/BodyText'
import GradientTitle from '@/components/typography/GradientTitle'
import Image from 'next/image'
import React from 'react'

import patentImage from "@/public/images/home/patent-aix-framework.png"

const PatentPendingSection = () => {
    return (
        <div className='container bg-black pt-8 sm:pt-12 md:pt-16 px-4 sm:px-6 lg:px-8'>
            <GradientTitle
                text="Our Patent-Pending AI framework"
                lineHeight="1.2"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] mb-4 sm:mb-6 text-left"
                theme='dark'
            />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
                <div className='max-w-none lg:max-w-[540px] order-2 lg:order-1'>
                    <p className='text-white sm:text-lg md:text-xl text-black pb-3 sm:pb-4 leading-relaxed'>
                        <span className='font-semibold'>AiXHub<sup>TM</sup> Framework</span> is iTCart's proprietary AI-native EOS (Enterprise Operating System), designed to unify data, human oversight, and automation into one adaptive, high-performance ecosystem to help enterprises build secure, scalable and responsible AI systems.
                    </p>
                    <BodyText 
                        text="Built for speed, scale, and self-learning, AiXHub powers intelligent transformation across industries turning complexity into clarity, and ideas into real-time impact." 
                        className="text-white text-base sm:text-lg md:text-xl leading-relaxed" 
                    />
                </div>
                <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[350px] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden order-1 lg:order-2">
                    <Image 
                        src={patentImage} 
                        fill 
                        alt='AiXFramework' 
                        style={{ objectFit: 'cover' }} 
                        className="transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>
        </div>
    )
}

export default PatentPendingSection

