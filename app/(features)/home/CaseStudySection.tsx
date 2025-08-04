// import OutlineBtn from "@/components/atoms/buttons/OutlineBtn";
// import BodyText from "@/components/atoms/typography/BodyText";
// import GradientTitle from "@/components/atoms/typography/GradientTitle";
// import CaseStudiesSlider from "@/components/molecules/slider/CaseStudiesSlider";
// import { CaseStudy } from "@/types/PropsTypes";

// const CaseStudySection = ({ caseStudies }: { caseStudies: CaseStudy[] }) => {
//   return (
//     <div className="flex flex-col lg:flex-row gap-4 justify-end items-center py-6 relative">
//       <div className="flex flex-col gap-4 w-full lg:w-[40%] px-4 lg:pl-24">
//         <GradientTitle
//           theme="light"
//           text="Case Studies That Inspire Digital Change"
//           className="text-[30px] text-center lg:text-left lg:text-[50px] leading-tight"
//         />
//         <BodyText
//           text="Explore our case studies for in-depth insights, expert analyses, and success stories."
//           className="text-black sm:text-[16px] text-center lg:text-left"
//         />
//         <div className="flex justify-center lg:justify-start">
//                  <OutlineBtn url='/case-study' text="Explore More" textColor="#000" theme="light" />
//                 </div>
//       </div>
//       <div className="w-full lg:w-[60%]">
//         <CaseStudiesSlider caseStudies={caseStudies} />
//       </div>
//     </div>
//   );
// };

// export default CaseStudySection;





import OutlineBtn from "@/app/components/buttons/OutlineBtn";
import BodyText from "@/app/components/typography/BodyText";
import GradientTitle from "@/app/components/typography/GradientTitle";
import CaseStudiesSlider from "@/app/components/slider/CaseStudiesSlider";
import { CaseStudyItem } from "@/types/PropsTypes";

const CaseStudySection = ({ caseStudies }: { caseStudies: CaseStudyItem[] }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-end items-center py-6 relative">
      <div className="flex flex-col gap-4 w-full lg:w-[40%] px-4 lg:pl-24">
        <GradientTitle
          theme="light"
          text="Case Studies That Inspire Digital Change"
          className="text-[30px] text-center lg:text-left lg:text-[50px] leading-tight"
        />
        <BodyText
          text="Explore our case studies for in-depth insights, expert analyses, and success stories."
          className="text-black sm:text-[16px] text-center lg:text-left"
        />
        <div className="flex justify-center lg:justify-start">
                 <OutlineBtn url='/case-study' text="Explore More" textColor="#000" theme="light" />
                </div>
      </div>
      <div className="w-full lg:w-[60%]">
        <CaseStudiesSlider caseStudies={caseStudies} />
      </div>
    </div>
  );
};

export default CaseStudySection;