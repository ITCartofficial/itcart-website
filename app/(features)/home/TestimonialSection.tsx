import GradientTitle from '@/app/components/typography/GradientTitle'
import TestimonialSlider from '@/app/components/common/TestimonialSlider'
import { TestimonialCardProps } from '@/types/PropsTypes'
import React from 'react'

type TestimonialSectionProps = {
    testimonialsData: TestimonialCardProps[]
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonialsData }) => {
    return (
        <div className="flex flex-col gap-10">
            <GradientTitle text='What People Say About Us' theme="light" className='text-[32px] lg:text-[50px] text-center' />
            <TestimonialSlider testimonialsData={testimonialsData} />
        </div>
    )
}

export default TestimonialSection