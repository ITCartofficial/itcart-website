import ImageContainer from "@/components/atoms/common/ImageContainer"
import BodyText from "@/components/atoms/typography/BodyText";
import HeadingText from "@/components/atoms/typography/HeadingText"

interface LeaderCardProps {
    image: string,
    title: string,
    designation: string,
    description?: string,
    direction: "row" | "col",
    theme: "dark" | "light",
}

const LeaderCard = ({ image, title, designation, description, direction, theme }: LeaderCardProps) => {
    const textColor = theme == 'dark' ? 'text-white' : 'text-black';
    const designationColor = theme == 'dark' ? 'text-[#CDCDCD]' : 'text-[#7F7F7F]';
    return (
        <div
            className={`w-full h-full grid relative items-center justify-baseline ${direction == 'col' ? 'grid-cols-1 max-w-[304px] h-[400px] gap-4' : 'grid-cols-3'}`}
        >
            <div className={`relative bg-[#F2F2F2] rounded-3xl overflow-hidden min-h-[240px] ${direction == 'col' ? 'lg:h-[340px]' : 'w-full shrink-0'}`}>
                <ImageContainer
                    src={image}
                    alt={title}
                    className="object-cover"
                />
            </div>
            <div className={`${direction == 'col' ? 'col-span' : 'col-span-2 px-6'}`}>
                {
                    direction == 'col' && (
                        <div className="w-full flex flex-col gap-1 p-2">
                            <HeadingText
                                text={title}
                                className={`lg:text-2xl lg:text-left ${textColor}`}
                            />
                            <BodyText
                                text={designation}
                                className={`lg:text-[18px] ${designationColor}`}
                            />
                        </div>
                    ) || (
                        <div className="w-full flex flex-col gap-2">
                            <HeadingText
                                text={title}
                                className={`lg:text-[26px] lg:text-left ${textColor}`}
                            />
                            <BodyText
                                text={designation}
                                className={`lg:text-[20px] ${designationColor}`}
                            />
                            <BodyText
                                text={description || ""}
                                className={`text-base ${textColor}`}
                                lineClamp={4}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default LeaderCard