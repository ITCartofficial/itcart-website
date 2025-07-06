import React from 'react'
import MasonaryGrid from './MasonaryGrid'
import GradientTitle from '@/components/atoms/typography/GradientTitle'
import BodyText from '@/components/atoms/typography/BodyText'

const WhoWeAreSection = () => {
    return (
        <div className='container mx-auto lg:px-10 flex flex-col gap-16'>
            <div className="flex flex-col">
                <GradientTitle
                    text='Who We Are?'
                    theme='dark'
                    className='text-[30px] lg:text-[50px] text-center'
                />
                <BodyText
                    text='We are industry trailblazers, revolutionizing the technology landscape by pioneering accessible and innovative technology solutions.'
                    theme='dark'
                    className='text-[16px] lg:text-2xl text-white text-center md:w-[80%] mx-auto'
                />
            </div>
            <MasonaryGrid />
        </div>
    )
}

export default WhoWeAreSection