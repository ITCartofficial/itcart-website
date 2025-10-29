import Image from "next/image";
import BodyText from "../typography/BodyText"
import GradientTitle from "../typography/GradientTitle"
import { FaCheck } from "react-icons/fa6";

function BetterFutureSection() {

    const values = [
        {
            title: "Innovation with Responsibility",
            description: "At iTCart, we see innovation as a responsibility, not just progress."
        },
        {
            title: "CSR Focus Areas",
            description: "We support healthcare, education, sustainability, and community empowerment, fostering well-being and environmental action."
        },
        {
            title: "Ethical Innovation & Collaboration",
            description: "We promote ethical innovation and collaborate with communities to create a lasting impact."
        },
        {
            title: "Community Upliftment",
            description: "Supporting social programs that improve lives."
        }
    ];

    return (
        <div>
            <GradientTitle
                text={'Building a Better Future,Together'}
                theme="dark"
                className="text-[22px] sm:text-[25px] md:text-[44px] w-[60%] text-center  mx-auto"
            />

            <BodyText
                text={"At iTCart, innovation is a responsibility, not just advancement. Through CSR, we drive change in healthcare, education, sustainability, and community empowerment. By promoting ethical innovation and green initiatives, we use technology as a force for good."}
                color="#ffffff"
                className="text-sm sm:text-base md:text-lg my-2 text-center w-[70%] mx-auto"
            />

            <div className="bg-black flex items-center justify-center p-6 py-10">
                <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left side - Image */}
                    <div className="relative w-full h-[300px] md:h-[400px]">
                        <div className="relative w-full h-full overflow-hidden rounded-2xl">
                            <Image
                                src="/images/csr/future-image.png"
                                alt="Futuristic cityscape with digital elements"
                                fill
                                className="object-cover rounded-2xl"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="text-white">
                        <GradientTitle
                            text={'Our Core Values'}
                            theme="dark"
                            className="text-[22px] sm:text-[25px] md:text-[35px] w-[60%]"
                        />


                        <div className="space-y-6 mt-5">
                            {values.map((value, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 mt-1">

                                        <FaCheck className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <h3 className=""><span className="text-[18px] font-semibold">{value.title} -</span> {value.description}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default BetterFutureSection