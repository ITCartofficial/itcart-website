// // import React from 'react';
// // import GradientTitle from '../typography/GradientTitle';
// // import OutlineBtn from '../buttons/OutlineBtn';
// // import { FaArrowRight } from 'react-icons/fa6';

// // const steps = [
// //     { number: "01", title: "Discover", desc: "Choose one high-value workflow" },
// //     { number: "02", title: "Digitise", desc: "Map data, tools, and human roles end-to-end" },
// //     { number: "03", title: "Design", desc: "Define how AiXHub™ EOS will observe, recommend, and escalate" },
// //     { number: "04", title: "Deploy", desc: "Run in co-pilot mode with clear governance" },
// //     { number: "05", title: "Prove", desc: "Measure real outcomes: time saved, errors reduced, revenue gained" },
// // ];

// // const AiRoadmap = () => {
// //     return (
// //         <div className=" text-white px-6 flex flex-col items-center h-fit">
// //             {/* <h2 className="text-3xl md:text-5xl font-bold text-[#63D2E0] mb-24 text-center">
// //                 A Proven 100-Day Path to Becoming AI-Native
// //             </h2> */}

// //             <GradientTitle
// //                 text=" A Proven 100-Day Path to Becoming AI-Native"
// //                 as="h2"
// //                 theme="dark"
// //                 className="text-[28px] sm:text-[36px] md:text-[36px] leading-tight"
// //             />

// //             <div className="relative w-full max-w-6xl mt-20">
// //                 {/* The Main Timeline Line */}
// //                 {/* Desktop: Horizontal | Mobile: Vertical */}
// //                 <div className="absolute top-[18px] left-[10%] right-[10%] h-[2px] bg-[#63D2E0] hidden md:block" />

// //                 {/* <div className="absolute top-[18px] left-0 w-full h-[2px] bg-[#63D2E0] hidden md:block" /> */}
// //                 <div className="absolute left-1/2 top-0 w-[2px] h-full bg-[#63D2E0] md:hidden transform -translate-x-1/2" />

// //                 {/* 0 and 100 Markers */}
// //                 <div className="absolute -top-10 left-[8%] text-xl font-semibold hidden md:block">
// //                     0
// //                 </div>
// //                 <div className="absolute -top-10 right-[8%] text-xl font-semibold hidden md:block">
// //                     100
// //                 </div>

// //                 <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4">
// //                     {steps.map((step, idx) => (
// //                         <div key={idx} className="relative flex flex-col items-center group  ">

// //                             {/* The "Node" Circle on the line */}
// //                             <div className="z-20 w-10 h-10 rounded-full bg-[#2BADB7]   flex items-center justify-center shadow-[0_0_10px_rgba(99,210,224,0.3)]">
// //                                 <div className="w-3 h-3 rounded-full bg-white transition-colors" />
// //                             </div>

// //                             <div className='w-[2px] h-[60px] bg-[#2BADB7]'>

// //                             </div>
// //                             {/* The Step Number Bubble */}
// //                             <div className="w-12 h-12 rounded-full bg-[#1A8B9D] flex items-center justify-center text-white font-black text-lg mb-6">
// //                                 {step.number}
// //                             </div>

// //                             {/* Content */}
// //                             <div className="text-center px-4">
// //                                 <h3 className="text-2xl font-bold mb-3 tracking-tight">{step.title}</h3>
// //                                 <p className="text-gray-400 text-sm leading-relaxed max-w-[200px] mx-auto">
// //                                     {step.desc}
// //                                 </p>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>

// //             <div className='mt-10'>
// //                 <OutlineBtn
// //                     url="/contact-us"
// //                     text="Download the Keynote Slides "
// //                     textColor="#ffffff"
// //                     icon={<FaArrowRight className="text-sm font-semibold text-white" />}
// //                 />
// //             </div>
// //         </div>
// //     );
// // };

// // export default AiRoadmap;



// import React from "react";
// import GradientTitle from "../typography/GradientTitle";
// import OutlineBtn from "../buttons/OutlineBtn";
// import { FaArrowRight } from "react-icons/fa6";

// const steps = [
//     { number: "01", title: "Discover", desc: "Choose one high-value workflow" },
//     { number: "02", title: "Digitise", desc: "Map data, tools, and human roles end-to-end" },
//     { number: "03", title: "Design", desc: "Define how AiXHub™ EOS will observe, recommend, and escalate" },
//     { number: "04", title: "Deploy", desc: "Run in co-pilot mode with clear governance" },
//     { number: "05", title: "Prove", desc: "Measure real outcomes: time saved, errors reduced, revenue gained" },
// ];

// const AiRoadmap = () => {
//     return (
//         <div className="bg-black text-white px-6 flex flex-col items-center h-fit pb-20">

//             <GradientTitle
//                 text="A Proven 100-Day Path to Becoming AI-Native"
//                 as="h2"
//                 theme="dark"
//                 className="text-[28px] sm:text-[36px] md:text-[36px] leading-tight mt-10"
//             />

//             {/* ---------------- DESKTOP TIMELINE ---------------- */}
//             <div className="relative w-full max-w-6xl mt-20 hidden md:block">

//                 {/* timeline line */}
//                 <div className="absolute top-[18px] left-[10%] right-[10%] h-[2px] bg-[#63D2E0]" />

//                 {/* 0 + 100 markers */}
//                 <div className="absolute -top-10 left-[8%] text-xl font-semibold">0</div>
//                 <div className="absolute -top-10 right-[8%] text-xl font-semibold">100</div>

//                 {/* grid */}
//                 <div className="grid grid-cols-5 gap-4">
//                     {steps.map((step, idx) => (
//                         <div key={idx} className="relative flex flex-col items-center">

//                             {/* node */}
//                             <div className="z-20 w-10 h-10 rounded-full bg-[#2BADB7]   flex items-center justify-center shadow-[0_0_10px_rgba(99,210,224,0.3)]">
//                                 <div className="w-3 h-3 rounded-full bg-white" />
//                             </div>

//                             {/* connector */}
//                             <div className="w-[2px] h-[60px] bg-[#63D2E0]" />

//                             {/* number bubble */}
//                             <div className="w-12 h-12 rounded-full bg-[#1A8B9D] flex items-center justify-center text-white font-bold text-lg mb-6">
//                                 {step.number}
//                             </div>

//                             {/* content */}
//                             <h3 className="text-2xl font-bold mb-3 tracking-tight text-center">{step.title}</h3>
//                             <p className="text-gray-400 text-sm leading-relaxed max-w-[200px] text-center">{step.desc}</p>

//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* ---------------- MOBILE TIMELINE ---------------- */}
//             {/* ---------------- MOBILE (Vertical timeline) ---------------- */}
//             <div className="relative w-full pt-14 pb-20 md:hidden mt-20">

//                 {/* vertical line */}
//                 <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#63D2E0] -translate-x-1/2"></div>

//                 {/* 100 top mark */}
//                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-white font-bold">
//                     100
//                 </div>

//                 <div className="flex flex-col gap-16">
//                     {steps.map((step, idx) => (
//                         <div key={idx} className="relative flex flex-col items-center w-full">

//                             {/* connector above except first */}
//                             {idx !== 0 && (
//                                 <div className="absolute top-0 left-1/2 w-[2px] h-16 bg-[#63D2E0] -translate-x-1/2"></div>
//                             )}

//                             {/* node */}
//                             <div className="relative">
//                                 <div className="w-12 h-12 rounded-full bg-[#2BADB7] flex items-center justify-center shadow-[0_0_10px_rgba(99,210,224,0.3)]">
//                                     <div className="w-3 h-3 rounded-full bg-white"></div>
//                                 </div>

//                                 {/* number bubble */}
//                                 {
//                                     idx % 2 === 0 ? <div className="absolute top-1/2 right-[70px] -translate-y-1/2 w-14 h-14 rounded-full bg-[#1A8B9D] flex items-center justify-center text-white font-bold">
//                                         {step.number}
//                                     </div> : ''
//                                 }

//                             </div>

//                             {
//                                 idx % 2 !== 0 ? <div className="absolute mt-10 right-[70px] -translate-y-1/2 w-14 h-14 rounded-full bg-[#1A8B9D] flex items-center justify-center text-white font-bold">
//                                     {step.number}
//                                 </div> : ''
//                             }

//                             {/* Text alternate left/right */}
//                             <div
//                                 className={`mt-6 px-4 w-[70%] ${idx % 2 === 0 ? "text-left self-start pl-0" : "text-right self-end pr-0"
//                                     }`}
//                             >
//                                 <h3 className="text-xl font-bold">{step.title}</h3>
//                                 <p className={`text-gray-400 text-sm mt-1 leading-5 w-[70%] ${idx % 2 === 0 ? "" : "ml-auto"}`}>{step.desc}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* bottom marker */}
//                 <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white font-bold">
//                     0
//                 </div>
//             </div>


//             {/* CTA Button */}
//             <div className="mt-10">
//                 <OutlineBtn
//                     url="/contact-us"
//                     text="Download the Keynote Slides"
//                     textColor="#ffffff"
//                     icon={<FaArrowRight className="text-sm font-semibold text-white" />}
//                 />
//             </div>

//         </div>
//     );
// };

// export default AiRoadmap;



import React from "react";
import GradientTitle from "../typography/GradientTitle";
import OutlineBtn from "../buttons/OutlineBtn";
import { FaArrowRight } from "react-icons/fa6";

const steps = [
    { number: "01", title: "Discover", desc: "Choose one high-value workflow" },
    { number: "02", title: "Digitise", desc: "Map data, tools, and human roles end-to-end" },
    { number: "03", title: "Design", desc: "Define how AiXHub™ EOS will observe, recommend, and escalate" },
    { number: "04", title: "Deploy", desc: "Run in co-pilot mode with clear governance" },
    { number: "05", title: "Prove", desc: "Measure real outcomes: time saved, errors reduced, revenue gained" },
];

const AiRoadmap = () => {
    return (
        <div className="bg-black text-white px-6 flex flex-col items-center h-fit pb-24">

            <GradientTitle
                text="A Proven 100-Day Path to Becoming AI-Native"
                as="h2"
                theme="dark"
                className="text-[28px] sm:text-[36px] md:text-[36px] leading-tight mt-10 text-center"
            />

            {/* ---------- DESKTOP (horizontal timeline) ---------- */}
            <div className="relative w-full max-w-6xl mt-20 hidden md:block">

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
                            <div className="w-[2px] h-[60px] bg-[#63D2E0]" />

                            {/* number bubble */}
                            <div className="w-12 h-12 rounded-full bg-[#1A8B9D] flex items-center justify-center text-white font-bold text-lg mb-6">
                                {step.number}
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
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
                    ${idx % 2 === 0 ? "right-[70px]" : "left-[70px]"}`}
                                >
                                    {step.number}
                                </div>
                            </div>

                            {/* content alternating */}
                            <div
                                className={`mt-6 w-full px-6  ${idx % 2 === 0 ? "text-left pl-0" : "text-right pr-0"
                                    }`}
                            >
                                <h3 className="text-xl font-bold ml-auto">{step.title}</h3>
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
                <OutlineBtn
                    url="/contact-us"
                    text="Download the Keynote Slides"
                    textColor="#ffffff"
                    icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                />
            </div>

        </div>
    );
};

export default AiRoadmap;
