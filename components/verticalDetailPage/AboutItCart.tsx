import React from "react";
import GradientTitle from "../typography/GradientTitle";
import Image from "next/image";

const AboutItCart = ({ impactImage,
    // apropriectContentOne,
    // apropriectContenTwo,
    // apropriectContentThree,
    impacts, imgAlt, impactsAboutAlt
}:
    {
        impactImage: string,
        apropriectContentOne: string,
        apropriectContenTwo: string,
        apropriectContentThree: string,
        impacts: string[],
        imgAlt: string,
        impactsAboutAlt?: string
    }) => {

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
                        text="Why Choose iTCart?"
                        theme='dark'
                        className="text-[30px] sm:text-[25px] md:text-[38px] w-full"
                    />
                </div>

                <div className="w-full py-1">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-[linear-gradient(to_right,#117f98,#2aadb7)] text-white rounded-xl p-2 flex flex-col justify-center items-center"
                            >
                                <h3 className="text-[20px] md:text-[30px] font-bold">{stat.value}</h3>
                                <p className="text-sm md:text-base font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full md:px-6 py-16">
                    <div className="w-full flex justify-center text-center mb-5">
                        <GradientTitle
                            text="Impact"
                            theme="dark"
                            className="text-[28px] sm:text-[36px] md:text-[48px] text-center"
                        />
                    </div>

                    <div className="w-full mx-auto mb-10">
                        <Image
                            src={impactImage ? impactImage : "/images/vertical/about-it-cart-image.png"}
                            alt={imgAlt}
                            width={800}
                            height={400}
                            className="w-full rounded-xl md:h-[400px] h-[160px] object-cover "
                            priority
                        />
                    </div>

                    {/* Impact List */}
                    <div className="w-full mx-auto flex flex-col space-y-4 my-2">
                        {impacts.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center rounded-lg "
                            >

                                <div className="text-teal-500 mr-3 flex-shrink-0 text-xl font-bold">
                                    <Image
                                        src="/images/vertical/icons/leftarrow.png"
                                        alt={"Left arrow"}
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                </div>


                                {/* Text */}
                                <p className="text-white p-2 shadow-sm bg-[#151515] font-medium text-base text-[14px] md:text-[20px] pl-2 leading-relaxed w-full rounded-lg">
                                    <p className="ml-2 md:ml-0">{item}</p>
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
                        <div className={`space-y-3 md:order-1`}>

                            <GradientTitle
                                text="Our Proprietary AI Engine "
                                theme="dark"
                                className="text-[30px] sm:text-[25px] md:text-[38px]  text-center lg:w-[90%]"
                            />

                            <p className="text-white text-base md:text-lg leading-relaxed">
                                {/* {apropriectContentOne} */}
                            </p>

                            <p className="text-white text-base md:text-lg leading-relaxed">
                                {/* {apropriectContenTwo} */}
                                AiXHub™ is the world's first AI-Native Enterprise Operating System engineered to enable governed autonomy, SLA-driven intelligence, and explainable decision execution across business functions like IT, HR, Finance, Legal, and Operations.
                                The essence of AiXHub™ is core operating principle in all our solutions and services offered under different verticals across industries.
                            </p>

                            <p className="text-white text-base md:text-lg leading-relaxed">
                                {/* {apropriectContentThree} */}
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <div className="relative w-full max-w-md md:max-w-full aspect-[16/9]">
                                <Image
                                    src="/images/vertical/aipriorityimage.png"
                                    alt={impactsAboutAlt ?? ""}
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
