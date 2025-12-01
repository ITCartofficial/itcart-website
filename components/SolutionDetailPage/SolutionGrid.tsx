import Image from "next/image";
import GradientTitle from "../typography/GradientTitle";

interface SolutionItem {
    title: string;
    description: string;
    image: string;
}

interface SolutionGridProps {
    futurSectionHeading: string;
    futurSectionDescription: string;
    solutionItems?: SolutionItem[]; // ✅ array and optional
}


function SolutionGrid({ futurSectionHeading, solutionItems }: SolutionGridProps) {

    return (

        <div className="bg-black text-white px-4">
            {/* Section Title */}
            <div className="max-w-5xl mx-auto text-center mb-8 lg:mb-14">
                <GradientTitle
                    text={futurSectionHeading || "Collaboration Excellence"}
                    theme="dark"
                    className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight"
                />
            </div>

            <div className="bg-black text-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-15">
                        {solutionItems && solutionItems?.map((industry, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden from-gray-900 to-black transition-all duration-500 hover:shadow-2xl"
                            >
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden rounded-lg">
                                    <Image
                                        src={industry?.image || "/placeholder.jpg"} // fallback image
                                        alt={industry?.title || "Industry Image"}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700 rounded-lg"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Content Container */}
                                <div className="relative z-20 mt-5">
                                    <h3 className="text-[20px] md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                        {industry.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-base">
                                        {industry.description}
                                    </p>

                                </div>


                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>


    )
}

export default SolutionGrid