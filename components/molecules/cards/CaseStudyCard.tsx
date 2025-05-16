import LinkButton from '@/components/atoms/buttons/LinkButton'
import GradientTitle from '@/components/atoms/typography/GradientTitle'
import { CaseStudy } from '@/types/PropsTypes'
import Image from 'next/image'
import React from 'react'

interface CaseStudyCardProps {
    card: CaseStudy
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ card }) => {
    return (
        <div className="relative h-full">
            <div className="absolute inset-0 rounded-[30px] overflow-hidden">
                <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="380px"
                    loading='lazy'
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-gray-900/90 z-10 rounded-[30px]" />
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end rounded-[30px]">
                <GradientTitle text={card.title} theme="dark" className="text-xl font-bold text-white mb-2" />
                <LinkButton text={card.linkText} textColor='#ffffff' />
            </div>
        </div>
    )
}

export default CaseStudyCard