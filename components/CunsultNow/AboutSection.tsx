import Image from "next/image";
import GradientTitle from "../typography/GradientTitle";

function AboutSection() {
    return (
        <section className=" text-white px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-6 md:mb-9">
                <GradientTitle
                    text={"Transform Your Enterprise with AI-Native Intelligence"}
                    lineHeight="1.2"
                    className="text-[30px] lg:text-[50px] leading-tight mb-6 w-full lg:w-[80%]"
                    theme="dark"
                />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Left Image Section */}
                <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] lg:h-[350px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/images/cunsultnow/aboutsection-img.png"
                        alt="AI Visualization"
                        fill
                        className="object-cover rounded-2xl"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    />
                </div>

                {/* Right Text Section */}
                <div className="w-full lg:w-1/2 space-y-6 text-left">
                    <p className="text-gray-300 text-base leading-relaxed">
                        Join organizations achieving up to 300% ROI through unified AI execution. The AiXHub framework delivers an end-to-end enterprise transformation. Our AI consulting methodology converts fragmented operations into intelligent, autonomous systems that coordinate across teams and continuously improve. Avoid falling behind competitors using AI-native operations while your organization relies on manual processes and software sprawl. Our AI consulting services enable Generative AI implementations that deliver measurable results. 
                    </p>

                    <p className="text-gray-300 text-base leading-relaxed">
                        Don’t let competitors gain irreversible advantages through AI-native operations while your organization
                        remains trapped in manual processes and software sprawl. Our AI consulting services ensure successful
                        generative AI for business implementation that delivers measurable results.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
