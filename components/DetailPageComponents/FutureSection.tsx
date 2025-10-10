import BodyText from "../typography/BodyText";
import GradientTitle from "../typography/GradientTitle";


interface FutureSectionProps {
    futurSectionHeading?: string;
    futurSectionDescription?: string;
}

const FutureSection: React.FC<FutureSectionProps> = ({
    futurSectionHeading,
    futurSectionDescription,
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
        </div>

    );
}

export default FutureSection;

