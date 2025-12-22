"use client"
import Image from "next/image"
import { FaUserCog } from "react-icons/fa";
import { FaArrowRight, FaIndustry, FaUserShield } from "react-icons/fa6";
import { useState } from "react";
import OutlineBtn from "../buttons/OutlineBtn";
import GradientTitle from "../typography/GradientTitle";

function StrugglingPoint() {

    const serviceCardItems = [
        {
            title: "Water & Utilities",
            description: "Capturing expert intuition into system memory ",
            gradient: "from-[#45C2CC] to-[#181919]", // teal to blue
            icon: '/images/fueld2025/watericon.png'
        },
        {
            title: "HR & Workforce",
            description: "Unified decision governance ",
            gradient: "from-[#222222] to-[#111111]", // dark
            icon: '/images/fueld2025/hricon.png'
        },
        {
            title: "Manufacturing",
            description: "Turning genius planners into scalable intelligence ",
            gradient: "from-[#222222] to-[#111111]", // dark
            icon: '/images/fueld2025/manufactureicon.png'
        },
        {
            title: "Finance & Underwriting",
            description: "Faster, explainable governed decisions ",
            gradient: "from-[#222222] to-[#111111]", // dark
            icon: '/images/fueld2025/financeicon.png'
        },
    ]

    const personas = [
        {
            name: "David: The Water Operator",
            role: "(Water & Utilities)",
            description: "",
            icon: <FaUserCog />,
            image: "/images/fueld2025/water.png",
            points: [
                "30 years of expert intuition, undocumented",
                "Retirement risk: knowledge walking out the door",
                "Captured invisible patterns — turned wisdom into system intelligence",
                "New operators guided by real-time AI suggestions"
            ]
        },
        {
            name: "Sara: The HR Manager",
            role: "(Workforce & HR)",
            description: "/images/fueld2025/hrr.png",
            icon: <FaUserShield />,
            image: "/images/fueld2025/hrr.png",
            points: [
                "Juggling 5 disconnected tools, drowning in confusion",
                "Stressed, afraid of making wrong decisions",
                "AiXHubTM EOS unified risk signals, audit trail, and recommendations onto one screen",
                "Outcome: Confident, supported decisions"
            ]
        },
        {
            name: "Quinn: The Steel Planner",
            role: "(Manufacturing)",
            description: "/images/fueld2025/finance.png",
            icon: <FaIndustry />,
            image: "/images/fueld2025/steel.png",
            points: [
                "Genius planner, running operations using spreadsheets and instinct",
                "10 screens open—high stress, unsustainable",
                "AiXHubTM EOS empowered real-time machine observations, auto-suggested schedules, bottleneck warnings",
                "NOutcome: Quinn gains superpowers; system turns genius into scalable intelligence"
            ]
        },
        {
            name: "Michael: The Underwriter ",
            role: "(Finance/Underwriting)",
            description: "",
            icon: <FaIndustry />,
            image: "/images/fueld2025/finance.png",
            points: [
                "Overwhelmed by hundreds of pages, high stakes decisions",
                "AiXHubTM EOS provided scenario views, risk assessments, audit trails",
                "Decisive, explainable, governed underwriting",
                "Outcome: Enhanced human judgment, faster and clearer decisions"
            ]
        }
    ];
    const [selected, setSelected] = useState(personas[0])

    return (
        <div className="w-full">
            <GradientTitle
                text={'Across Industries, the Pattern Is the Same. AiXHub EOS Fixes It. '}
                theme="dark"
                className="text-[25px] lg:text-[30px] md:text-[40px] w-[90%] text-center mx-auto  leading-[1.2]"
            />

            {/* <BodyText
                text={"Every enterprise is experimenting with AI—pilots, copilots, LLMs, and automation.But very few see scalable value across the business."}
                color="#ffffff"
                className="text-sm sm:text-base md:text-lg my-2 text-center  w-[70%] mx-auto"
            /> */}

            <main className="bg-black w-full mt-1">
                <div className="mx-auto w-full">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 my-10">
                        {(serviceCardItems ?? []).map((feature, index) => (
                            <div
                                key={index}
                                className={`rounded-lg p-8 bg-zinc-900  text-[#2BADB7] hover:text-[#FFFFFF] hover:bg-[#2BADB7]`}
                            >
                                <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#2BADB7] overflow-hidden">
                                    <Image
                                        src={feature?.icon || "/fallback-icon.png"}
                                        alt={feature?.title || "icon"}
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                </div>
                                <h3
                                    className={`mb-2 text-xl font-semibold text-[18px]`}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className={`text-sm leading-relaxed text-[#FFFFFF] `}
                                >
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>



            <section className="w-full bg-black text-white py-16 flex flex-col md:flex-row gap-16 items-center">

                {/* Left - clickable personas */}
                <div className="flex-1 space-y-6">
                    {personas.map((p, index) => (

                        <div className="">
                            <button
                                key={index}
                                onClick={() => setSelected(p)}
                                className={`flex w-full items-center gap-4 text-left transition 
                            ${selected.name === p.name ? "opacity-100" : "opacity-40 hover:opacity-60"}
                        `}
                            >
                                <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#2BADB7] overflow-hidden">
                                    <Image
                                        src={serviceCardItems[index].icon || "/fallback-icon.png"}
                                        alt={"icon"}
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                </div>
                                {/* <span className="text-teal-300 text-4xl">{p.icon}</span> */}
                                <div>
                                    <p className="text-2xl font-semibold">{p.name}</p>
                                    <p className="text-lg opacity-60">{p.role}</p>
                                </div>
                            </button>
                            {
                                selected?.image == p.image && (
                                    <div className="lg:hidden block my-8 ">
                                            <div className="flex justify-center">
                                                <Image
                                                    src={selected?.image}
                                                    alt="persona visual"
                                                    width={300}
                                                    height={200}
                                                    className="rounded-xl shadow-xl  h-auto"
                                                />
                                            </div>

                                        <div className="flex-1 mt-4">
                                            <ul className="space-y-4">
                                                {selected.points.map((pt, index) => (
                                                    <li key={index} className="text-lg flex gap-3 leading-relaxed">
                                                        • {pt}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            }

                        </div>


                    ))}
                </div>

                {/* Middle Image - dynamic */}
                <div className="flex-1 max-w-md hidden lg:block">
                    <Image
                        src={selected?.image}
                        alt="persona visual"
                        width={500}          // required
                        height={500}         // required
                        className="rounded-xl shadow-xl w-full h-auto"
                    />
                </div>

                {/* Right points - dynamic */}
                <div className="flex-1 hidden lg:block">
                    <ul className="space-y-6">
                        {selected.points.map((pt, index) => (
                            <li key={index} className="text-lg flex gap-3 leading-relaxed">
                                • {pt}
                            </li>
                        ))}
                    </ul>

                </div>



            </section>

        </div>
    )
}
export default StrugglingPoint