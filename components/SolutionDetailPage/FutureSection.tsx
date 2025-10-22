import Image from "next/image";
import BodyText from "../typography/BodyText";
import GradientTitle from "../typography/GradientTitle";

function FutureSectionSolution({
    futurSectionHeading,
    futurSectionDescription,
    futureItems
}: {
    futurSectionHeading: string;
    futurSectionDescription: string;
    futureItems: {
        title: string,
        description: string,
        icon: string    
    }[]
}) {


    return (
        <div className="bg-black text-white px-4">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <GradientTitle
                    text={
                        futurSectionHeading
                            ? futurSectionHeading
                            : "Secure Your Future - Act Now!"
                    }
                    theme="dark"
                    className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight"
                />
                <BodyText
                    text={
                        futurSectionDescription
                            ? futurSectionDescription
                            : "Guard your business from cyber threats with IT Cart's trusted cybersecurity services. Take action today to protect what matters most."
                    }
                    color="#ffffff"
                    className="text-[16px] mt-4"
                />
            </div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
                {futureItems.map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 group hover:translate-y-[-4px] transition-transform"
                    >
                        <div className="flex-shrink-0 flex justify-center items-center">
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                width={100}
                                height={100}
                                className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[80px] lg:h-[80px] object-contain brightness-125 transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                        </div>

                        {/* ✅ Text Content */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default FutureSectionSolution;
