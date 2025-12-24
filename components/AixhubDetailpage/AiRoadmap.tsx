


"use client"
import React, { useState } from "react";
import GradientTitle from "../typography/GradientTitle";
import OutlineBtn from "../buttons/OutlineBtn";
import { FaArrowRight } from "react-icons/fa6";
import FueldModal from "./FueldModal";

const steps = [
    { number: "01", title: "Discover", desc: "Choose one high-value workflow" },
    { number: "02", title: "Digitise", desc: "Map data, tools, and human roles end-to-end" },
    { number: "03", title: "Design", desc: "Define how AiXHub™ EOS will observe, recommend, and escalate" },
    { number: "04", title: "Deploy", desc: "Run in co-pilot mode with clear governance" },
    { number: "05", title: "Prove", desc: "Measure real outcomes: time saved, errors reduced, revenue gained" },
];




const AiRoadmap = () => {

    const [openModal, setOpenModal] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();
        // if (!validate()) return;

        // setOpenModal(false);

        const link = document.createElement("a");
        link.href = "/Fueld Keynote Presentation 1.pdf";
        link.download = "keynote.pdf";
        link.click();
    };

    return (
        <>
            {openModal && (
                <FueldModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
            )}
            <div className="bg-black text-white px-6 flex flex-col items-center h-fit pb-24">

                <GradientTitle
                    text="A Proven 100-Day Path to Becoming AI-Native"
                    as="h2"
                    theme="dark"
                    className="text-[28px] sm:text-[36px] md:text-[36px] leading-tight mt-10 text-center"
                />

                {/* ---------- DESKTOP (horizontal timeline) ---------- */}
                <div className="relative w-full max-w-7xl mt-20 hidden md:block">

                    {/* main horizontal line */}
                    <div className="absolute top-[18px] left-[8%] right-[8%] h-[2px] bg-[#63D2E0]" />

                    {/* markers */}
                    <div className="absolute -top-10 left-[7%] text-xl font-semibold">0</div>
                    <div className="absolute -top-10 right-[7%] text-xl font-semibold">100</div>

                    <div className="grid grid-cols-5 gap-4">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative flex flex-col items-center">

                                {/* node */}
                                <div className="z-20 w-10 h-10 rounded-full bg-[#2BADB7] flex items-center justify-center shadow-[0_0_10px_rgba(99,210,224,0.4)]">
                                    <div className="w-3 h-3 rounded-full bg-white" />
                                </div>

                                {/* connector */}
                                <div className="w-[2px] h-[70px] bg-[#63D2E0]" />

                                {/* number bubble */}
                                <div className="w-12 h-12 rounded-full bg-[#1A8B9D] flex items-center justify-center text-white font-bold text-lg mb-6">
                                    {step.number}
                                </div>

                                <h3 className="text-[30px] font-bold mb-2 text-center">{step.title}</h3>
                                <p className="text-gray-300 text-sm max-w-[200px] text-center leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ---------- MOBILE (vertical timeline) ---------- */}
                <div className="relative w-full pt-16 pb-16 md:hidden mt-20">

                    {/* main vertical line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#63D2E0] -translate-x-1/2"></div>

                    {/* markers */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xl font-semibold">100</div>

                    <div className="flex flex-col gap-20">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative flex flex-col items-center w-full">

                                {/* connector except first */}
                                {idx !== 0 && (
                                    <div className="absolute top-[-48px] left-1/2 w-[2px] h-12 bg-[#63D2E0] -translate-x-1/2"></div>
                                )}

                                {/* node */}
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full bg-[#2BADB7] flex items-center justify-center shadow-[0_0_10px_rgba(99,210,224,0.4)]">
                                        <div className="w-3 h-3 rounded-full bg-white"></div>
                                    </div>

                                    {/* number bubble */}
                                    <div className={`absolute top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#1A8B9D] flex items-center justify-center text-white font-bold 
                    ${idx % 2 === 0 ? "right-[8ss0px]" : "right-[8ss0px]"}`}
                                    >
                                        {step.number}
                                    </div>
                                </div>

                                {/* content alternating */}
                                <div
                                    className={`mt-6 w-full px-6  ${idx % 2 === 0 ? "text-left pl-0" : "text-right pr-0"
                                        }`}
                                >
                                    <h3 className="text-[20px] font-bold ml-auto">{step.title}</h3>
                                    <p className={`text-gray-300 text-sm leading-5 ${idx % 2 === 0 ? "mr-auto " : "ml-auto"} w-[50%]`}>
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xl font-semibold">
                        0
                    </div>
                </div>

                <div className="mt-10">
                    <div onClick={() => setOpenModal(true)}>
                        <OutlineBtn
                            // url="/contact-us"
                            text="Download the Keynote Slides"
                            textColor="#ffffff"
                            icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                        />
                    </div>

                </div>

            </div>
        </>

    );
};

export default AiRoadmap;
