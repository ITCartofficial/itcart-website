import React from "react";
import GradientTitle from "../typography/GradientTitle";

const WhyAIFailingSection = () => {
    const WhyAIFailingSectionItems = [
        {
            name: "AI Chaos",
            title: "Everyone is talking about models, GPUs, agents — but not outcomes.",
        },
        {
            name: "Operating Gap",
            title: "74% struggle to scale. <20% reach enterprise-wide impact.",
        },
        {
            name: "Wrong Focus",
            title: "We buy technology. AI fails because of people, governance, and workflows.",
        },
        {
            name: "The Missing Piece",
            title:
                "Enterprises don’t have an intelligence layer connecting how they think, decide, and work.",
        },
    ];

    return (
        <section className="bg-black text-white px-6">
            <div className="">
                {/* Heading */}
                <GradientTitle
                    text="AI Isn’t Failing Because of Technology. It’s Failing Because of How Enterprises Operate."
                    as="h2"
                    theme="dark"
                    className="text-center text-[26px] sm:text-[32px] md:text-[36px]"
                />

                {/* <p className="text-center text-gray-300 mt-3 text-[14px] sm:text-base md:text-lg">
                    It’s Failing Because of How Enterprises Operate.
                </p> */}

                {/* Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14 items-start">
                    {/* Left list */}
                    <div className="space-y-4">
                        {WhyAIFailingSectionItems.map((data, index) => (
                            <div key={index} className="flex gap-5">
                                {/* Number */}
                                <p className="text-cyan-300 font-semibold text-[20px] md:text-[24px]">
                                    {String(index + 1).padStart(2, "0")}
                                </p>

                                {/* Content */}
                                <div>
                                    <GradientTitle
                                        text={data?.name ?? ""}
                                        as="h3"
                                        theme="dark"
                                        className="text-[18px] sm:text-[20px] md:text-[20px]"
                                    />
                                    <p className="text-gray-400 mt-1 text-[14px] md:text-[16px] leading-relaxed">
                                        {data?.title ?? ""}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right image */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="/images/fueld2025/failedimage.jpg"
                            alt="Failed system"
                            className="rounded-xl shadow-lg w-full max-w-md md:max-w-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyAIFailingSection;
