import { faqsData } from "@/components/data/faqsData"
import FaqWithImage from "@/components/molecules/faqs/FaqWithImage"

const FaqSection = () => {
    return (
        <div>
            <FaqWithImage
                faqsData={faqsData}
                faqsCount={4}
            />
        </div>
    )
}

export default FaqSection