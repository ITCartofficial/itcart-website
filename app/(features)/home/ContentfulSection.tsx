import BodyText from '@/components/typography/BodyText'
import GradientTitle from '@/components/typography/GradientTitle'
import React from 'react'

type ContentfulSectionProps = {
    title: string
    description: string
    bgImage: string
}

const ContentfulSection: React.FC<ContentfulSectionProps> = ({ title, description, bgImage }) => {

    const descriptions = description.split('<br>');


    return (
        <div className='w-full h-max bg-cover bg-no-repeat md:px-10 px-4 lg:rounded-[48px] overflow-hidden' style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="w-full h-full " style={{ background: 'linear-gradient(-90deg, rgba(0, 0, 0, 0.00) 0%, #000 85%)' }}>
                <div className="container mx-auto py-6 lg:px-10 lg:py-16 flex flex-col gap-4 justify-center">
                    <GradientTitle text={title} theme='dark' className='text-[24px] lg:text-[30px] leading-tight lg:w-2/4' />

                    <div className="flex flex-col gap-2 lg:w-[50%]">
                        {
                            descriptions && descriptions.map((text, i) => (
                                <BodyText key={i} text={text.trim()} className={`text-[16px] lg:text-[18px] font-normal text-white my-1 ${descriptions?.length-1 == i && 'font-bold leading-tight'}`} />
                            )) || <BodyText text={description} className='text-[16px] lg:text-[18px] font-normal text-white' />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentfulSection