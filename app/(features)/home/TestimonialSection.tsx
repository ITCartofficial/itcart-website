import GradientTitle from '@/components/typography/GradientTitle'
import TestimonialSlider from '@/components/common/TestimonialSlider'
import { TestimonialCardProps } from '@/types/PropsTypes'
import React from 'react'

type TestimonialSectionProps = {
    testimonialsData: TestimonialCardProps[]
    bgColor?: string
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonialsData, bgColor }) => {
    return (
        <div className="flex flex-col gap-10">
            <GradientTitle text='What People Say About Us'
                theme={bgColor ? "dark" : "light"}
                className='text-[32px] lg:text-[50px] text-center' />
            <TestimonialSlider testimonialsData={testimonialsData} />
        </div>
    )
}

export default TestimonialSection