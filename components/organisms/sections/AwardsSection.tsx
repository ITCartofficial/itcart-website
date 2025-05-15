import BodyText from '@/components/atoms/typography/BodyText';
import GradientTitle from '@/components/atoms/typography/GradientTitle';
import ImageSlider from '@/components/molecules/slider/ImageSlider';
import React from 'react'

interface AwardsSectionProps {
  title?: string;
  description?:string;
  className?: string;
}

const AwardsSection: React.FC<AwardsSectionProps> = ({
  title = "AI Entrepreneur Of The Year 2024",
  description="Our visionary leader has been honoured with the 'AI Entrepreneur of The Year' award at the Bharat Leadership Excellence Award 2024, hosted by Leadership Federation at Delhi."
}) => {
  return (
    <div className='pt-20'>
      <GradientTitle
        text={title}
        lineHeight="1.2"
        className="text-[50px] mb-6 text-center"
      />
      <div className='flex justify-center'>
        <BodyText text={description} lineHeight="1.2" color='white' className="max-w-3xl text-base mb-[56px] text-center"/>
      </div>
      <ImageSlider/>
    </div>
  )
}

export default AwardsSection