import ImageContainer from "@/components/common/ImageContainer"
import BodyText from "@/components/typography/BodyText"
import HeadingText from "@/components/typography/HeadingText"
import StatCounter from "../common/StatCounter"
import { ExecutiveLeader } from "@/types/PropsTypes"
import OutlineBtn from "@/components/buttons/OutlineBtn"


const ExecutiveLeadersCard = ({ executiveLeader, theme, bgColor }: { executiveLeader: ExecutiveLeader, theme: 'dark' | 'light', bgColor: string }) => {




    return (
        <div className={`flex flex-col lg:flex-row items-center gap-8 relative h-250 lg:h-[400px]  ${theme === 'dark' ? 'bg-black' : ''}`}
        >
            {/* image container */}
            <div className="relative md:h-full w-full max-w-[360px]  rounded-3xl shadow-md overflow-hidden">
                <ImageContainer
                    src={executiveLeader.image}
                    alt=""
                    height={400}
                    width={340}
                    className="h-full w-full"
                />
            </div>
            {/* text container */}
            <div className="px-6 grow">
                <div className="w-full flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <HeadingText
                            text={executiveLeader.title}
                            className={`lg:text-[30px] text-[24px] lg:text-left`}
                            theme={theme}
                        />
                        <p className=" text-[#7F7F7F] text-[20px] text-[15px]">{executiveLeader.designation}</p>
                        {/* <BodyText
                            text={executiveLeader.designation}
                            className={`lg:text-[20px] text-[#7F7F7F]`}
                            theme={theme}
                        /> */}
                        <BodyText
                            text={executiveLeader.desciption}
                            className={`text-base md:mt-5 mt-3`}
                            lineClamp={5}
                            theme={theme}
                        />
                    </div>
                    <div className="flex gap-4 flex-wrap lg:flex-nowrap">
                        {
                            executiveLeader.matrics &&
                            executiveLeader.matrics.map((matric, i) => (
                                <StatCounter key={i} end={matric.numericValue} label={matric.title} theme={theme} />
                            ))
                        }
                    </div>
                    <div className="w-full">
                        <OutlineBtn text="Know More" icon={'default'} textColor={bgColor ? "white" : "#000000"} theme={theme} url={executiveLeader.profileRef} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExecutiveLeadersCard