import BodyText from "@/components/typography/BodyText"
import GradientTitle from "@/components/typography/GradientTitle"
import { ImageInfoCardProps } from "@/types/PropsTypes"
import React from "react"
import OutlineBtn from "../buttons/OutlineBtn"
import { FaArrowRight } from "react-icons/fa6"


const ImageInfoCard: React.FC<ImageInfoCardProps> = ({ bgImage, title, description, descriptionSize, className, showBtn }) => {
    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className={`bg-cover min-h-[100vh] lg:min-h-[580px] bg-center w-full rounded-2xl overflow-hidden group hover:-translate-y-4 transition-all duration-500 ease-in-out ${className && className}`}>
            <div className="wrapper flex flex-col gap-4 justify-end p-8 w-full h-full" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 85%)' }}>
                <GradientTitle text={title} className="text-[24px] lg:text-[36px]" theme="dark" />
                <BodyText text={description} color="#ffffff" fontSize={descriptionSize || "18px"} />

                {
                    showBtn &&
                    <OutlineBtn
                        url='/'
                        text="Read More"
                        textColor='#ffffff'
                        icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                    />
                }

            </div>
        </div>
    )
}

export default ImageInfoCard