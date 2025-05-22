import OutlineBtn from "@/components/atoms/buttons/OutlineBtn"
import BodyText from "@/components/atoms/typography/BodyText"
import GradientTitle from "@/components/atoms/typography/GradientTitle"
import CaseStudiesSlider from "@/components/molecules/slider/CaseStudiesSlider"
import { CaseStudy } from "@/types/PropsTypes"

const CaseStudySection = ({caseStudies}:{caseStudies: CaseStudy[]}) => {
    return (
        <div className="flex gap-4 justify-end items-center py-6 relative">
            <div className="flex flex-col gap-4 lg:w-[40%] pl-24">
                <GradientTitle theme="light" text="Case Studies That Inspire Digital Change" className="lg:text-[50px] leading-tight" />
                <BodyText text="Explore our case studies for in-depth insights, expert analyses, and success stories." className="text-black" />
                <OutlineBtn text="Explore More" textColor="#000" theme="light" />
            </div>
            <div className="lg:w-[60%]">
                <CaseStudiesSlider caseStudies={caseStudies} />
            </div>
        </div>
    )
}

export default CaseStudySection