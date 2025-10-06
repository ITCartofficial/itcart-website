import React from "react";
import GradientTitle from "../typography/GradientTitle";
import Image from "next/image";

const AboutItCart = ({ impactImage }: { impactImage: string }) => {
    const impacts = [
        "Achieve 76% higher learning efficiency compared to traditional platforms through personalized AI",
        "Increase course completion rates from industry average 15% to 85% using engagement",
        "Reduce training time by 50% through adaptive learning paths and intelligent content.",
        "Enable 24/7 learning access with real-time AI tutoring across multiple languages",
        "Accelerate skill development with domain-specific tracks tailored to industry requirements and trends",
        "Enhance learner engagement through gamified elements and interactive AI-powered learning experiences",
        "Streamline content creation for educators with automated lesson generation and assessment tools",
    ];

    const stats = [
        { value: "40+", label: "Industries" },
        { value: "500+", label: "Solutions" },
        { value: "27+", label: "Products" },
        { value: "40+", label: "Years of experience" },
        { value: "300+", label: "Clients" },
        { value: "150+", label: "Global Partners" },
        { value: "18+", label: "Countries" },
    ];

    return (
        <section
            className="w-full text-white px-6 bg-cover bg-center rounded-lg">
            <section className="w-full text-white">
                {/* Added overlay (bg-black/80) to make text more readable */}
                <div className="max-w-7xl mx-auto text-center mb-5">
                    <GradientTitle
                        text="Why choose iTCart?  "
                        theme='dark'
                        className="text-[22px] sm:text-[25px] md:text-[30px] w-full"
                    />
                </div>

                <div className="w-full py-1">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-teal-500 text-white rounded-xl p-2 flex flex-col justify-center items-center"
                            >
                                <h3 className="text-[20px] md:text-[30px] font-bold">{stat.value}</h3>
                                <p className="text-sm md:text-base font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full px-6 py-16">
                    <div className="max-w-5xl mx-auto text-center mb-5">
                        <h2 className="text-[38px] md:text-[48px] font-bold text-white">Impact</h2>
                    </div>

                    <div className="w-full mx-auto mb-10">
                        <Image
                            src={impactImage ? impactImage : "/images/vertical/about-it-cart-image.png"}
                            alt="Students learning"
                            width={800}
                            height={400}
                            className="w-full rounded-xl md:h-[400px] h-[160px] object-cover"
                            priority
                        />
                    </div>

                    {/* Impact List */}
                    <div className="w-full mx-auto flex flex-col space-y-4 my-2">
                        {impacts.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center rounded-lg"
                            >

                                <div className="text-teal-500 mr-3 flex-shrink-0 text-xl font-bold">
                                    <Image
                                        src="/images/vertical/icons/leftarrow.png"
                                        alt="Left arrow"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                </div>


                                {/* Text */}
                                <p className="text-white p-2 shadow-sm bg-[#151515] font-medium text-base text-[17px] sm:text-[20px] md:text-[20px] leading-relaxed w-full rounded-lg">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>



                <section className="w-full  text-white px-6 py-1">
                    <div
                        className={`w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}
                    >
                        {/* Left Content */}
                        <div className={`space-y-6 md:order-1`}>

                            <GradientTitle
                                text="Our Proprietary AI Engine "
                                theme="dark"
                                className="text-[22px] sm:text-[25px] md:text-[30px] w-[50%] lg:w-[50%]"
                            />

                            <p className="text-white text-base md:text-lg leading-relaxed">
                                AiXQP runs on <span className="font-bold">AiXHub™</span>, the core of the{" "}
                                <span className="font-bold">AiX Framework</span>—bringing{" "}
                                <span className="font-bold">deep AI automation</span>,{" "}
                                <span className="font-bold">intelligent decision-making</span>, and{" "}
                                <span className="font-bold">scalable performance</span> to your learning
                                experience.
                            </p>

                            <p className="text-white text-base md:text-lg leading-relaxed">
                                Whether you're a solo learner, training a team, or scaling an
                                institution-wide learning program, AiXQP is ready to grow with you.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <div className="relative w-full max-w-md md:max-w-full aspect-[16/9]">
                                <Image
                                    src="/images/vertical/aipriorityimage.png"
                                    alt="VR Learning"
                                    fill
                                    className="rounded-xl object-cover"
                                    priority
                                />
                            </div>
                        </div>

                    </div>
                </section>


            </section>
        </section>


    );
};

export default AboutItCart;
