import LinkButton from '@/components/buttons/LinkButton'
import GradientTitle from '@/components/typography/GradientTitle'
import { CaseStudyItem } from '@/types/PropsTypes'
import Image from 'next/image'
import React from 'react'

interface CaseStudyCardProps {
    card: CaseStudyItem
    forSlide?: boolean
    isFocused?: boolean
    bgImage?: string
}

// const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ card, forSlide, isFocused }) => {
const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
    card,
    bgImage,
    forSlide,
    isFocused
}) => {

    const imageSrc = bgImage ?? card.imageUrl
    card.homeCaseStudyBanner ??
        card.imageUrl;


    return (

        <a href={`/case-study/${card.slug}`}>
            <div className="relative h-full">

                {
                    forSlide ?
                        <div className="absolute inset-0 rounded-[30px] overflow-hidden">
                            <Image
                                src={imageSrc}
                                alt={card.title}
                                fill
                                className="object-cover"
                                sizes="380px"
                                loading='lazy'
                            />
                        </div>
                        :
                        <div
                            className="absolute inset-0 rounded-[30px] bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${imageSrc})`
                            }}
                        />

                }
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />


                <div className={`absolute inset-0 z-20 p-6 flex flex-col justify-end rounded-[30px]`}>

                    {
                        forSlide ?
                            <p className={`${isFocused ? "text-[25px]" : "text-[20px]"} font-bold text-white mb-2`}>{card.title}</p>
                            :
                            <GradientTitle text={card.title} theme="dark" lineHeight="35px" className={`${isFocused ? "text-[25px]" : "text-[20px]"} font-bold text-white mb-2`} />
                    }
                    <div className='md:mt-0 mt-3'>
                        <LinkButton url={`/case-study/${card.slug}`} text="Read Case Study" textColor='#ffffff' />
                    </div>
                </div>

            </div>
        </a>

    )
}

export default CaseStudyCard