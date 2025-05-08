import BodyText from "@/components/atoms/typography/BodyText"
import GradientTitle from "@/components/atoms/typography/GradientTitle"
import { ImageInfoCardProps } from "@/types/PropsTypes"
import React from "react"



const ImageInfoCard: React.FC<ImageInfoCardProps> = ({ bgImage, title, description, height, width, titleSize, descriptionSize, lineClamp=3 }) => {
    return (
        <div style={{ backgroundImage: `url(${bgImage})`, height, width }} className="bg-cover h-full bg-center w-full max-w-max rounded-2xl group hover:-translate-y-4 transition-all duration-500 ease-in-out">
            <div className="wrapper flex flex-col gap-4 justify-end p-8 w-full h-full" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 85%)' }}>
                <GradientTitle text={title} fontSize={titleSize || "36px"} />
                <BodyText text={description} fontSize={descriptionSize || "18px"} lineClamp={lineClamp} />
            </div>
        </div>
    )
}

export default ImageInfoCard