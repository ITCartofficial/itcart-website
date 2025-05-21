import ImageContainer from "@/components/atoms/common/ImageContainer"
import { Ambassador, Theme } from "@/types/PropsTypes"
import StatCounter from "../common/StatCounter"
import HeadingText from "@/components/atoms/typography/HeadingText"
import BodyText from "@/components/atoms/typography/BodyText"
import LinkButton from "@/components/atoms/buttons/LinkButton"

const InformaticImageCard = ({ user, theme }: { user: Ambassador, theme: Theme }) => {
    const textColor = theme == 'dark' ? 'text-white' : 'text-black';
    const designationColor = theme == 'dark' ? 'text-[#CDCDCD]' : 'text-[#7F7F7F]';
    return (
        <div className="flex flex-col gap-4">
            <div className="relative lg:w-[280px] lg:h-[340px]">
                <ImageContainer
                    src={user.image}
                    alt={user.title}
                    className="z-10 rounded-2xl"
                />
                <div className="flex flex-col gap-4 bg-[#242424] absolute lg:w-36 pl-8 pr-4 py-6 rounded-tr-2xl rounded-br-2xl bottom-0 -right-32">
                    {
                        user.matrics.map((matric, i) => (
                            <StatCounter
                                key={i}
                                end={matric.numericValue}
                                suffix="+"
                                theme={theme}
                                label={matric.title}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="w-full flex flex-col gap-1 p-2">
                <HeadingText
                    text={user.title}
                    className={`lg:text-2xl lg:text-left ${textColor}`}
                />
                <BodyText
                    text={user.designation}
                    className={`lg:text-[18px] ${designationColor}`}
                />
                <LinkButton text="Know More" theme={theme} className={`mt-3 ${textColor}`} url={user.profileRef} />
            </div>
        </div>
    )
}

export default InformaticImageCard