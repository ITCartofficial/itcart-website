'use-client'

import OutlineBtn from "@/components/atoms/buttons/OutlineBtn"
import GradientTitle from "@/components/atoms/typography/GradientTitle"
import ImageInfoCard from "@/components/molecules/cards/ImageInfoCard"
import { ImageInfoCardProps } from "@/types/PropsTypes"
import { FaArrowRight } from "react-icons/fa6"

type AboutInfoSectionProps = {
    title: string
    cardDetails: ImageInfoCardProps[]
}

const AboutInfoSection: React.FC<AboutInfoSectionProps> = ({ title, cardDetails }) => {
    return (
        <div className="container mx-auto px-4 md:px-10 flex flex-col gap-10 pb-14">
            <GradientTitle text={title} className="text-[30px] lg:text-[50px] lg:w-[70%] leading-tight text-center lg:text-left" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:min-h-[500px]">
                {cardDetails.map((card, i) => (
                    i == 1 && (
                        <div key={i} className="lg:-translate-y-16 flex flex-col gap-6">
                            <ImageInfoCard bgImage={card.bgImage} description={card.description} title={card.title} className="h-[360px]" />
                            <div className="pl-8 flex justify-center lg:justify-start">
                                <OutlineBtn text="Read More" textColor="#ffffff" icon={<FaArrowRight className="text-sm font-semibold text-white" />} />
                            </div>
                        </div>
                    ) || (
                        <ImageInfoCard bgImage={card.bgImage} description={card.description} title={card.title} key={i} />
                    )
                ))}
            </div>
        </div>
    )
}

export default AboutInfoSection