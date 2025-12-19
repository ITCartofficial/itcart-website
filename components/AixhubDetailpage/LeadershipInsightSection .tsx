import React from "react";
import GradientTitle from "../typography/GradientTitle";

const LeadershipInsightSection = () => {
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

                {/* Image Layout */}
                <div className="w-full flex justify-center mt-10">
                    <div
                        className="w-full max-w-4xl h-auto aspect-[16/9] rounded-xl bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('/images/fueld2025/Groupimages.png')",
                        }}
                    />
                </div>

                {/* quote + person */}
                <div className="mt-16 text-center px-4 max-w-[80%] mx-auto">
                    <p className="italic text-gray-300 text-[25px] sm:text-base md:text-[25px] leading-relaxed w-[100%]">
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
