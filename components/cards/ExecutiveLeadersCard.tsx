import ImageContainer from "@/components/common/ImageContainer"
import BodyText from "@/components/typography/BodyText"
import HeadingText from "@/components/typography/HeadingText"
import StatCounter from "../common/StatCounter"
import { ExecutiveLeader } from "@/types/PropsTypes"
import OutlineBtn from "@/components/buttons/OutlineBtn"


const ExecutiveLeadersCard = ({ executiveLeader, theme }: { executiveLeader: ExecutiveLeader, theme: 'dark' | 'light' }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-8 relative lg:h-[400px]">
            {/* image container */}
            <div className="relative h-full w-full max-w-[360px] border border-[#F2F2F2] rounded-3xl shadow-md overflow-hidden">
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
                            className={`lg:text-[26px] lg:text-left`}
                            theme={theme}
                        />
                        <BodyText
                            text={executiveLeader.designation}
                            className={`lg:text-[20px]`}
                            theme={theme}
                        />
                        <BodyText
                            text={executiveLeader.desciption}
                            className={`text-base`}
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
                        <OutlineBtn text="Know More" icon={'default'} textColor="#000000" theme={theme} url={executiveLeader.profileRef} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExecutiveLeadersCard