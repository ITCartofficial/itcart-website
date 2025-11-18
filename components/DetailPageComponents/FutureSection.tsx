import { FaArrowRight } from "react-icons/fa6";
import OutlineBtn from "../buttons/OutlineBtn";
import BodyText from "../typography/BodyText";
import GradientTitle from "../typography/GradientTitle";


interface FutureSectionProps {
    futurSectionHeading?: string;
    futurSectionDescription?: string;
    futureSectionBtnTxt?: string;
}

const FutureSection: React.FC<FutureSectionProps> = ({
    futurSectionHeading,
    futurSectionDescription,
    futureSectionBtnTxt
}) => {
    return (
        <div className="max-w-5xl mx-auto text-center mb-0">
            <GradientTitle
                text={futurSectionHeading ? futurSectionHeading : "Secure Your Future - Act Now!"}
                theme="dark"
                className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight"
            />

            <BodyText
                text={futurSectionDescription ? futurSectionDescription : "Guard your business from cyber threats with IT Cart's trusted cybersecurity services. Take action today to protect what matters most."}
                color="#ffffff"
                className="text-[16px] mt-3"
            />

            <div className="w-full flex justify-center my-10">
                <OutlineBtn
                    url="/contact-us"
                    text={futureSectionBtnTxt ? futureSectionBtnTxt : "Start your upgrade today"}
                    textColor="#ffffff"
                    icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                />
            </div>


        </div>

    );
}

export default FutureSection;

