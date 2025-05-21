import BodyText from '@/components/atoms/typography/BodyText'
import GradientTitle from '@/components/atoms/typography/GradientTitle'
import React from 'react'

type ContentfulSectionProps = {
    title: string
    description: string
    bgImage: string
}

const ContentfulSection: React.FC<ContentfulSectionProps> = ({ title, description, bgImage }) => {

    const descriptions = description.split('<br>');

    // console.log(descriptions);


    return (
        <div className='w-full h-max bg-cover bg-no-repeat rounded-[85px] overflow-hidden' style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="w-full h-full" style={{ background: 'linear-gradient(-90deg, rgba(0, 0, 0, 0.00) 0%, #000 85%)' }}>
                <div className="container mx-auto lg:px-10 lg:py-16 flex flex-col gap-4 justify-center">
                    <GradientTitle text={title} theme='dark' className='lg:text-[30px] leading-tight lg:w-2/3' />

                    <div className="flex flex-col gap-2 lg:w-2/3">
                        {
                            descriptions && descriptions.map((text, i) => (
                                <BodyText key={i} text={text.trim()} className='lg:text-[18px] font-normal text-white' />
                            )) || <BodyText text={description} className='lg:text-[18px] font-normal text-white' />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentfulSection