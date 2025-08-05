import OutlineBtn from "@/components/buttons/OutlineBtn"
import GradientTitle from "@/components/typography/GradientTitle"
// import FaqWithImage from "@/components/molecules/faqs/FaqWithImage"
import { FaArrowRight } from "react-icons/fa6"

import { FaqWithImageProps } from "@/types/PropsTypes"
import FaqWithImage from "@/components/faqs/FaqWithImage"
const FaqSection = ({ faqsData, faqsCount, title }: FaqWithImageProps) => {
    return (
        <div className="container mx-auto px-4 md:px-10 bg-black flex flex-col gap-[48px] items-center justify-center overflow-x-hidden">
            <GradientTitle text={title || ""} lineHeight="normal" className="text-[30px] lg:text-[50px] text-center lg:w-2/3" theme="dark" />
            <FaqWithImage
                faqsData={faqsData}
                faqsCount={faqsCount}
            />
            <OutlineBtn className="-mt-4" text="Show More" textColor="#ffffff" icon={<FaArrowRight className="text-sm font-semibold text-white" />} />
        </div>
    )
}

export default FaqSection