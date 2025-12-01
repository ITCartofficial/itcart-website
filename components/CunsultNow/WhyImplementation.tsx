"use client"
import { useState } from "react";
import BodyText from "../typography/BodyText"
import GradientTitle from "../typography/GradientTitle"
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

function WhyImplementation() {

    const items = [
        {
            id: 1,
            title: "Fragmented Tool Approach",
            image: '/images/cunsultnow/Fragmented-Tool-Approach.png',
            content: 'Organizations deploy AI as isolated tools instead of unified systems. '
        },
        {
            id: 2,
            title: "Poor Business Alignment",
            image: '/images/cunsultnow/Poor-Business-Alignment.png',
            content: 'AI initiatives lack clear ties to revenue, cost reduction, or strategic priorities..'
        },
        {
            id: 3,
            title: "Data Integration Gaps",
            image: '/images/cunsultnow/Data-Integration-Gaps.png',
            content: 'Inconsistent governance and disconnected systems create bottlenecks before insights can be generated.'
        },
        {
            id: 4,
            title: "Organizational Silos",
            image: '/images/cunsultnow/Organizational-Silos.png',
            content: 'Business teams, IT, and data science operate in isolation without shared ownership.'
        },
        {
            id: 5,
            title: "Implementation Without Governance",
            image: '/images/cunsultnow/Implementation-Without-Governance.png',
            content: 'AI deployments lack embedded compliance frameworks and real-time policy enforcement mechanisms. '
        },
        {
            id: 6,
            title: "Manual Intervention Dependencies",
            image: '/images/cunsultnow/Manual-Intervention-Dependencies.png',
            content: 'Solutions require excessive human oversight, limiting scalability and automation impact.'
        },
    ];

    const [selected, setSelected] = useState(items[0]);

    return (
        <div className="">
            <GradientTitle
                text={'Why Most Enterprise AI Implementations Fail?'}
                theme="dark"
                className="text-[25px] lg:text-[48px] md:text-[44px] w-[70%] text-center  mx-auto leading-[1.2]"
            />

            <BodyText
                text={
                    "Enterprise AI failure rates reach up to 95%, mainly due to misalignment, integration gaps, and fragmented adoption. iTCart’s AI consulting practice addresses these challenges at the root."
                }
                color="#ffffff"
                className="text-sm sm:text-base md:text-lg  text-center w-[100%] md:w-[70%] mx-auto mt-3"
            />

            <div className="bg-black text-white p-6 md:p-10 rounded-2xl border border-[#29C1E2] max-w-5xl mx-auto flex flex-col md:flex-row gap-3 md:gap-7 mt-10">
                <div className="flex flex-col w-full md:w-1/2 lg:w-1/3">
                    {items.map((item, index) => (
                        <>

                            <button
                                key={index}
                                onClick={() => setSelected(item)}
                                className={`flex justify-between items-center text-left px-4 py-5 border-b border-[#45C2CC] md:border-none transition-all  ${selected.id === index + 1
                                    ? "bg-[#45C2CC] text-black font-semibold"
                                    : "hover:bg-cyan-500/10 text-gray-300"
                                    }`}
                            >
                                <h3 className="text-white">{item?.title}</h3>
                                {selected.id === index + 1 && (
                                    <FaArrowRight className="w-4 h-4 text-white" />
                                )}
                            </button>
                            {
                                selected.id === index + 1 &&
                                <div className="w-full md:w-2/3 flex flex-col items-start gap-4 mb-8 my-3  md:hidden">
                                    <div className="w-full relative rounded-lg overflow-hidden h-[300px] sm:h-[300px] lg:h-[400px]">
                                        <Image
                                            src={selected?.image || "/placeholder.jpg"} // fallback image
                                            alt="AI Concept"
                                            fill
                                            className="object-cover rounded-lg"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                                        />
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                                        {selected?.title}
                                    </h2>
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                        {selected?.content}
                                    </p>
                                </div>
                            }

                        </>
                    ))}
                </div>

                <div className="w-full md:w-[45%] lg:w-[60%] flex flex-col items-start gap-4 md:block  ml-3">
                    <div className="w-full relative rounded-lg overflow-hidden h-[300px] sm:h-[300px] lg:h-[300px]">
                        <Image
                            src={selected?.image || "/placeholder.jpg"} // fallback image
                            alt="AI Concept"
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                        />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-6" >
                        {selected?.title}
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-3">
                        {selected?.content}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhyImplementation