import BodyText from "@/components/typography/BodyText"
import GradientTitle from "@/components/typography/GradientTitle"
import { ImageInfoCardProps } from "@/types/PropsTypes"
import React from "react"
import OutlineBtn from "../buttons/OutlineBtn"
import { FaArrowRight } from "react-icons/fa6"


const ImageInfoCard: React.FC<ImageInfoCardProps> = ({ bgImage, title, description, descriptionSize, className, showBtn }) => {
    return (
        <>
            <div
                style={{ backgroundImage: `url(${bgImage})` }}
                className={`bg-cover bg-center w-full rounded-[25px] overflow-hidden group hover:-translate-y-2 transition-all duration-500 ease-in-out 
  min-h-[400px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[580px] ${className || ""}`}
            >

                <div className="wrapper flex flex-col gap-4 justify-end p-8 w-full h-full" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000000df 80%)' }}>
                    <GradientTitle text={title} className="text-[24px] lg:text-[48px] pt-14" theme="dark" />
                    <BodyText text={description} color="#ffffff" fontSize={descriptionSize || "18px"} />



                </div>
            </div>

            {
                showBtn &&
                <div className="mt-3">
                    <OutlineBtn
                        url='/about-us'
                        text="Read More"
                        textColor='#ffffff'
                        icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                    />
                </div>

            }


        </>

    )
}

export default ImageInfoCard