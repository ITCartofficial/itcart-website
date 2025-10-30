import OutlineBtn from "@/components/buttons/OutlineBtn";
import BodyText from "@/components/typography/BodyText";
import GradientTitle from "@/components/typography/GradientTitle";
import CaseStudiesSlider from "@/components/slider/CaseStudiesSlider";
import { CaseStudyItem } from "@/types/PropsTypes";

const CaseStudySection = ({ caseStudies }: { caseStudies: CaseStudyItem[] }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-end items-center py-6 relative">
      <div className="flex flex-col gap-4 w-full lg:w-[40%] px-4 lg:pl-24">
        <GradientTitle
          theme="dark"
          text="Case Studies That Inspire Digital Change"
          className="text-[30px] lg:text-[48px] text-center lg:text-left leading-tight"
        />
        <BodyText
          text="Explore our case studies for in-depth insights, expert analyses, and success stories."
          className="text-white sm:text-[16px] text-center lg:text-left"
        />
        <div className="flex justify-center lg:justify-start">
          <OutlineBtn url='/case-study' text="Explore More" textColor="#01FFFF" theme="dark" className=""/>
        </div>
      </div>
      <div className="w-full lg:w-[60%] md:mt-0 mt-6">
        <CaseStudiesSlider caseStudies={caseStudies} />
      </div>
    </div>
  );
};

export default CaseStudySection;