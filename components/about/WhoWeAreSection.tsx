import React from 'react'
import MasonaryGrid from './MasonaryGrid'
import GradientTitle from '@/components/typography/GradientTitle'
import BodyText from '@/components/typography/BodyText'

const WhoWeAreSection = () => {
    return (
        <div className='container mx-auto lg:px-10 flex flex-col gap-10 md:gap-16'>
            <div className="flex flex-col">
                <GradientTitle
                    text='Who We Are?'
                    theme='dark'
                    className='text-[30px] lg:text-[64px] text-center'
                />
                <BodyText
                    text='We are industry trailblazers, revolutionizing the technology landscape by pioneering accessible and innovative technology solutions.'
                    theme='dark'
                    className='text-[16px] lg:text-[20px] text-white text-center md:w-[70%] mx-auto'
                />
            </div>
            <MasonaryGrid />
        </div>
    )
}

export default WhoWeAreSection