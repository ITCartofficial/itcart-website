// import OutlineBtn from "@/components/buttons/OutlineBtn";
// import BodyText from "@/components/typography/BodyText";
// import GradientTitle from "@/components/typography/GradientTitle";
// import CaseStudiesSlider from "@/components/slider/CaseStudiesSlider";
// import { CaseStudyItem } from "@/types/PropsTypes";

// const CaseStudySection = ({ caseStudies }: { caseStudies: CaseStudyItem[] }) => {
//   return (
//     <div className="flex flex-col lg:flex-row gap-4 justify-end items-center py-6  relative">
//       <div className="flex flex-col gap-4 w-full lg:w-[40%] px-4 lg:pl-24">
//         <GradientTitle
//           theme="dark"
//           text="Case Studies That Inspire Digital Change"
//           className="text-[30px] lg:text-[48px] text-center lg:text-left leading-tight"
//         />
//         <BodyText
//           text="Explore our case studies for in-depth insights, expert analyses, and success stories."
//           className="text-white sm:text-[16px] text-center lg:text-left"
//         />
//         <div className="flex justify-center lg:justify-start">
//           <OutlineBtn url='/case-study' text="Explore More" textColor="#01FFFF" theme="dark" className="" />
//         </div>
//       </div>
//       <div className="w-full lg:w-[60%] md:mt-0 mt-6">
//         <CaseStudiesSlider caseStudies={caseStudies} />
//       </div>
//     </div>
//   );
// };

// export default CaseStudySection;



"use client"
import { useState } from "react"
import OutlineBtn from "@/components/buttons/OutlineBtn"
import BodyText from "@/components/typography/BodyText"
import GradientTitle from "@/components/typography/GradientTitle"
import CaseStudiesSlider from "@/components/slider/CaseStudiesSlider"
import { CaseStudyItem } from "@/types/PropsTypes"
import { FaArrowRight } from "react-icons/fa6"

const CaseStudySection = ({ caseStudies }: { caseStudies: CaseStudyItem[] }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>

      <div className="container mx-auto flex flex-col lg:flex-row gap-4 items-center py-6 relative">
        {/* Left Text Section */}
        {/* px-4 lg:pl-24 */}
        <div className="flex flex-col gap-4 w-full lg:w-[40%] lg:min-w-[410px]">
          <GradientTitle
            theme="dark"
            text="Case Studies That Inspire Digital Change"
            className="text-[30px] lg:text-[48px] text-center lg:text-left leading-tight"
          />
          <BodyText
            text="Explore our case studies for in-depth insights, expert analysis, and success stories."
            className="text-white sm:text-[16px] text-center lg:text-left"
          />
          <div className="flex justify-center lg:justify-start">

            {/* <SearchButton /> */}
            <OutlineBtn
              text="Explore More"
              url="/case-study"
              textColor='#ffffff'
              icon={<FaArrowRight className="text-sm font-semibold text-white" />}
            />

            {/* <OutlineBtn
              url="/case-study"
              text="Explore More"
              textColor="#01FFFF"
              theme="dark"
            /> */}
          </div>

          {/* ✅ Pagination Dots */}

        </div>

        {/* Slider Section */}
        <div className="w-screen lg:w-[60%] md:mt-0 mt-6 xl:min-w-[70%]">
          <CaseStudiesSlider
            caseStudies={caseStudies}
            onSlideChange={(i) => setActiveIndex(i)}
            activeExternalIndex={activeIndex}
          />
        </div>
      </div>
      <div className="flex  justify-center  mt-6 gap-2">
        {caseStudies.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            style={
              i === activeIndex
                ? {
                  background: "linear-gradient(90deg, #29C1E2 0%, #FFF 100%)",
                }
                : {}
            }
            className={`h-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${i === activeIndex
              ? "w-8"
              : "w-2 bg-transparent outline outline-gray-200"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  )
}

export default CaseStudySection
