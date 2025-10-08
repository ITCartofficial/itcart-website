import Image from "next/image";
import BodyText from "../typography/BodyText";
import GradientTitle from "../typography/GradientTitle";

interface SolutionGridProps {
    className?: string;
    CapabilitySections?: {
        gradient?: string; // 👈 make optional
        title: string;
        description: string;
        icon: string;
    }[];
}

export default function SolutionGrid({ className = "", CapabilitySections = [] }: SolutionGridProps) {

    return (
        <>
            <div className={`w-full bg-black text-white px-6 py-0 ${className}`}>

                <div className="max-w-5xl mx-auto text-center mb-16">
                    <GradientTitle
                        text={"Our Airlines Software & Solutions"}
                        theme="dark"
                        className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight"
                    />

                    <BodyText
                        text={"Guard your business from cyber threats with IT Cart's trusted cybersecurity services. Take action today to protect what matters most."}
                        color="#ffffff"
                        className="text-[16px] mt-3"
                    />
                </div>

                <main className="bg-black py-2 px-4">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {CapabilitySections.map((service, index) => (
                            <div
                                key={index}
                                className="rounded-2xl overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-all duration-300 border border-[#45C2CC]"
                            >
                                {/* Image Section */}
                                <div className="relative w-full md:w-1/2 h-52 md:h-auto">
                                    <Image
                                        src={'/service.icon'}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>


                                {/* Text Section */}
                                <div className="p-6 flex flex-col  md:w-1/2">
                                    <div className="bg-teal-500 rounded-full w-10 h-10 flex items-center justify-center mb-0">
                                        <Image
                                            src={service.icon}
                                            alt="icon"
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex items-center gap-3 my-3">
                                        <h3 className="text-lg md:text-xl font-semibold text-[#45C2CC]">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>


            </div>
        </>
    )
}