import Image from "next/image";
import BodyText from "../typography/BodyText"
import GradientTitle from "../typography/GradientTitle"

interface ServiceCardItem {
    title: string;
    image: string;
    content?: string;
    // Add other properties if needed
}

interface WhyChooseProps {
    whyChooseUsHeading?: string;
    className?: string;
    whyChooseUsHeadingDescription?: string;
    whyChooseUsCards?: ServiceCardItem[]
}

const WhyChoose: React.FC<WhyChooseProps> = ({ whyChooseUsHeading, className, whyChooseUsHeadingDescription, whyChooseUsCards }) => {


    return (
        <section className={`w-full bg-black text-white px-6 py-0 ${className}`}>
            {/* Section Title */}
            <div className="max-w-5xl mx-auto text-center mb-16">
                <GradientTitle
                    text={whyChooseUsHeading ?? ""}
                    theme="dark"
                    className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight"
                />

                <BodyText
                    text={whyChooseUsHeadingDescription ?? ""}
                    color="#ffffff"
                    className="text-[16px] mt-3"
                />
            </div>

            <main className=" bg-black py-0">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Tailored Solutions Card */}
                        {whyChooseUsCards?.map((data, index) => (
                            <div key={index} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
                                <div className="relative h-64 w-full">
                                    <Image src={data.image} alt={data.title} fill className="object-cover" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-[#45C2CC] mb-3">{data.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{data.content}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </main>


        </section>
    )
}
export default WhyChoose