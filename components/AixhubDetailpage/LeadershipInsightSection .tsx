"use client"
import { useState } from "react";
import GradientTitle from "../typography/GradientTitle";


const LeadershipInsightSection = () => {

    const [mainImage, setMainImage] = useState("/images/fueld2025/founder-centerimage.png")

    return (
        <section className="bg-black text-white px-6 md:px-10">
            <div className="max-w-7xl mx-auto text-center">

                {/* Heading */}
                <GradientTitle
                    text="Leadership Insight from FUELD Dubai 2025"
                    as="h2"
                    theme="dark"
                    className="text-[28px] sm:text-[36px] md:text-[36px] leading-tight"
                />


                <div className="w-full mt-15 md:flex justify-center">

                    <div className="md:ml-7 flex flex-row md:flex-col justify-around md:justify-between mr-7 md:mb-0 mb-4">
                        <div
                            onClick={() => setMainImage('/images/fueld2025/founder2.png')}
                            className="md:w-30 md:h-30 w-35 h-25 aspect-[16/9] rounded-xl bg-cover bg-center bg-no-repeat md:ml-auto md:mt-2"
                            style={{
                                backgroundImage: "url('/images/fueld2025/founder2.png')",
                            }}
                        />

                        <div
                            onClick={() => setMainImage('/images/fueld2025/founder3.png')}
                            className="md:w-45 md:h-45 w-25 h-25 aspect-[16/9] rounded-xl bg-cover bg-center bg-no-repeat bg-green-400 md:mb-2"
                            style={{
                                backgroundImage: "url('/images/fueld2025/founder3.png')",
                                // backgroundImage: `url(${mainImage})`,
                            }}
                        />

                        {/* founder3 */}
                    </div>

                    <div
                        className="w-75 h-95 aspect-[16/9] rounded-xl bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${mainImage})`,

                        }}
                    />

                    <div className="md:ml-7 flex flex-row md:flex-col justify-around md:justify-between md:mt-0 mt-4">

                        <div
                            onClick={() => setMainImage('/images/fueld2025/founder4.png')}
                            className="md:w-45 md:h-45 w-25 h-25 aspect-[16/9] rounded-xl bg-cover bg-center bg-no-repeat bg-green-400 md:mt-2"
                            style={{
                                backgroundImage: "url('/images/fueld2025/founder4.png')",
                            }}
                        />

                        <div
                            onClick={() => setMainImage('/images/fueld2025/founder5.png')}
                            className="md:w-30 md:h-30 w-35 h-25 aspect-[16/9] rounded-xl bg-cover bg-center bg-no-repeat md:mr-auto md:mb-3"
                            style={{
                                backgroundImage: "url('/images/fueld2025/founder5.png')",
                            }}
                        />


                    </div>

                    {/* <div>
                        <div
                            className="w-30 h-30 aspect-[16/9] rounded-xl bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: "url('/images/fueld2025/founder-centerimage.png')",
                            }}
                        />

                        <div
                            className="w-30 h-30 aspect-[16/9] rounded-xl bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: "url('/images/fueld2025/founder-centerimage.png')",
                            }}
                        />
                    </div> */}
                </div>


                {/* Image Layout */}
                {/* <div className="w-full flex justify-center mt-10">
                    <div
                        className="w-full max-w-4xl h-auto aspect-[16/9] rounded-xl bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('/images/fueld2025/Groupimages.png')",
                        }}
                    />
                </div> */}

                {/* quote + person */}
                <div className="mt-16 text-center px-4 max-w-[80%] mx-auto">
                    <p className="italic text-gray-300 text-[20px] sm:text-base md:text-[20px] leading-relaxed w-[100%]">
                        “Enterprises don’t need another AI tools, <br />
                        They need a system where intelligence can live, learn, and govern decisions.”
                    </p>

                    {/* <div className="mx-auto w-20 border-b border-cyan-400 my-6"></div> */}

                    <p className="text-xl sm:text-2xl font-bold mt-4">
                        - Mohammed Rohim Uddin -
                    </p>

                    <p className=" mt-1 text-[15px] sm:text-base">
                        Inventor of AiXHub EOS
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LeadershipInsightSection;
