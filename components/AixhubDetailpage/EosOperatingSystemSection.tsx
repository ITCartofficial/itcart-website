"use client";
import React, { useState } from "react";
import GradientTitle from "../typography/GradientTitle";
import OutlineBtn from "../buttons/OutlineBtn";
import { FaArrowRight } from "react-icons/fa6";
import FueldModal from "./FueldModal";

const EosOperatingSystemSection = () => {

    const [openModal, setOpenModal] = useState(false);
    const features = [
        {
            title: "OBSERVE",
            subtitle: "See everything as it happens",
            icon: "/images/fueld2025/icon1.png",
        },
        {
            title: "REASON",
            subtitle: "Understand patterns and risks",
            icon: "/images/fueld2025/icon2.png",
        },
        {
            title: "DECIDE",
            subtitle: "Share decisions between humans + AI",
            icon: "/images/fueld2025/icon3.png",
        },
        {
            title: "LEARN",
            subtitle: "Improve every day with institutional memory",
            icon: "/images/fueld2025/icon4.png",
        },
    ];

    return (
        <>
            {openModal && (
                <FueldModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
            )}
            <section className="w-full text-center text-white px-6">
                {/* heading */}

                <div className="flex w-full justify-center" >
                    <GradientTitle
                        text={"AiXHub™ EOS-The Operating System for AI-Native Enterprises"}
                        as="h1"
                        theme="dark"
                        className={`text-[26px] text-center  lg:items-center sm:text-[32px] md:text-[36px] w-[70%] [1.2]`}
                    />
                </div>


                <p className="text-gray-300 mt-4 w-[70%] mx-auto text-sm sm:text-lg leading-relaxed">
                    AiXHub™ EOS connects your ERP, CRM, HRMS, Finance, Operations, Engineering,
                    enterprise tools and more into a single intelligence and governance layer —
                    without replacing what already works.
                </p>

                {/* feature container */}
                <div
                    className="
          mt-16 p-10 rounded-xl w-full max-w-6xl mx-auto
          bg-cover bg-center bg-no-repeat
          border border-white/20
        "
                    style={{
                        backgroundImage: "url('/images/fueld2025/eosbg.png')",
                    }}
                >
                    <div
                        className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
            gap-10 sm:gap-6 place-items-center
          "
                    >
                        {features.map((item) => (
                            <div key={item.title} className="text-center flex flex-col items-center">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-14 h-14 mb-3"
                                />

                                <p className="text-sm text-gray-200 mt-1">{item.subtitle}</p>

                                <div className="relative h-24 hidden lg:flex flex-col items-center mt-3">
                                    <div className="absolute top-0 w-4 h-4 bg-[#71E8F9] rounded-full"></div>
                                    <div className="absolute top-4 w-[2px] h-20 bg-[#71E8F9]"></div>
                                </div>



                                <span className="block text-xl font-bold mt-3 tracking-wide">
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="flex w-full justify-center mt-10" >
                    <div onClick={() => setOpenModal(true)}>
                        <OutlineBtn
                            // url='/contact-us'
                            text="Download the Keynote Slides "
                            textColor='#ffffff'
                            icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                        />

                    </div>

                </div>

            </section>
        </>
    );
};

export default EosOperatingSystemSection;
