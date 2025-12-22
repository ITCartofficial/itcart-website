import React from "react";
import GradientTitle from "../typography/GradientTitle";

// interface AixHubVerticalBannerProps {
//     // label: string;
//     // onClick?: () => void;
//     // disabled?: boolean;
//     // className?: string;
// }


const AixHubVerticalBanner: React.FC = () => {
    return (
        <section className="relative w-full min-h-[80vh] flex items-center justify-center">
            {/* Background overlay image */}
            <div
                className="absolute inset-0 bg-cover bg-center "
                style={{
                    backgroundImage:
                        "url('/images/fueld2025/fueldannerIMage.jpg')", // <-- replace with your image path
                }}
            ></div>

            {/* Content */}
            <div className="relative max-w-5xl mx-auto px-4 text-center text-white ">

                <GradientTitle
                    text={"AI Alone Doesn’t Transform Enterprises. "}
                    as="h1"
                    theme="dark"
                    className={`text-[26px]  lg:items-center sm:text-[32px] md:text-[48px] [1.2]`}
                />

                <h2 className="mt-4 text-[25] md:text-[30px] font-semibold">
                    The Operating System Behind It Does
                </h2>

                <p className="mt-6 italic font-medium text-[18px] md:text-lg">
                    Unveiled at FUELD Dubai 2025 by Mohammed Rohim Uddin
                </p>

                <p className="mt-2 text-sm text-[18px] opacity-90">
                    Why enterprises don’t fail at AI technology, they fail at AI operating problem.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                    <button className="bg-[#01FFFF] hover:bg-cyan-600 text-black px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2">
                        Explore AiXHub EOS →
                    </button>

                    <button className="bg-[#01FFFF] hover:bg-cyan-600 text-black px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2">
                        Download the Keynote Slides →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AixHubVerticalBanner;