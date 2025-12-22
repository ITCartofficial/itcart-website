"use client";

import Image from "next/image";
import GradientTitle from "../typography/GradientTitle";
import OutlineBtn from "../buttons/OutlineBtn";
import { FaArrowRight } from "react-icons/fa6";

export default function Timeline100Day() {
    return (
        <section className="w-full bg-black flex flex-col items-center">
            <div className="flex w-full justify-center" >
                <GradientTitle
                    text={"A Proven 100-Day Path to Becoming AI-Native "}
                    as="h1"
                    theme="dark"
                    className={`text-[26px] text-center  lg:items-center sm:text-[32px] md:text-[36px] w-[70%] [1.2]`}
                />
            </div>

            {/* Responsive image wrapper */}
            <div className="relative w-full max-w-5xl mx-auto mt-10 px-4">
                <div className="relative w-full h-auto">
                    <Image
                        src="/images/fueld2025/timeline.png"
                        alt="100-Day AI Path timeline"
                        width={2100}   // increase intrinsic width
                        height={1300}  // increase intrinsic height
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>
            </div>

            <div className="w-ful flex justify-center">
                <OutlineBtn
                    url='/contact-us'
                    text="Transform Enterprise AI"
                    textColor='#ffffff'
                    icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                />
            </div>
        </section>
    );
}
