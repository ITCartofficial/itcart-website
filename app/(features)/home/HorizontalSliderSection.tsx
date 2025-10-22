// import OutlineBtn from '@/components/atoms/buttons/OutlineBtn'
import GradientTitle from '@/components/typography/GradientTitle'
import CardSlider from '@/components/common/CardSlider'
import { IconInfoCardProps } from '@/types/PropsTypes'
import React from 'react'
// import { FaArrowRight } from 'react-icons/fa6'

type HorizontalSliderSectionProps = {
    cardLists: IconInfoCardProps[]
    text: string
}

const HorizontalSliderSection: React.FC<HorizontalSliderSectionProps> = ({ text, cardLists }) => {
    return (
        <div className='flex flex-col gap-8'>
            <div className="container mx-auto lg:px-10">
                <GradientTitle text={text} className=' text-[30px] lg:text-[50px] lg:w-[60%] leading-tight text-center lg:text-left' theme='dark' />
            </div>
            <CardSlider cardLists={cardLists} />
            <div className="w-full flex justify-center items-center">
                {/* <OutlineBtn text='Explore More' textColor='#000000' theme='light' icon={<FaArrowRight className="text-sm font-semibold text-black" />} /> */}
            </div>
        </div>
    )
}

export default HorizontalSliderSection