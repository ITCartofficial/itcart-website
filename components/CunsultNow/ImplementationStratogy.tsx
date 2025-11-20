import Image from "next/image"
import BodyText from "../typography/BodyText"
import GradientTitle from "../typography/GradientTitle"

function ImplementationStratogy() {

    const serviceCardItems = [
        {
            title: "Unified Discovery Assessment",
            description: "Rationalize software portfolios by identifying redundant applications and mapping manual process inefficiencies.  ",
            gradient: "from-[#45C2CC] to-[#181919]", // teal to blue
            icon: '/images/cunsultnow/Autonomous-Operations-Achievement.png'
        },
        {
            title: "Business Case Development",
            description: "Define baseline metrics and project ROI over the planned implementation timeline. ",
            gradient: "from-[#222222] to-[#111111]", // dark
            icon: '/images/cunsultnow/Business-Case-Development.png'
        },
        {
            title: "Pilot Implementation",
            description: "Deploy controlled pilots to reduce completion time and improve compliance ",
            gradient: "from-[#222222] to-[#111111]", // dark
            icon: '/images/cunsultnow/Navigated-Implementation.png'
        },
        {
            title: "Cross-System Integration Planning ",
            description: "Design architecture for ERP, CRM, and HRMS integration that minimizes custom development.",
            gradient: "from-[#222222] to-[#111111]", // dark
            icon: '/images/cunsultnow/Cross-System-Integration-Planning.png'
        },
        {
            title: "Persona Deployment Strategy ",
            description: "Scale CoPilot and AutoPilot systems across functions with role-specific automation. ",
            gradient: "from-[#45C2CC] to-[#181919]", // teal to blue
            icon: '/images/cunsultnow/Persona-Deployment-Strategy.png'
        },
        {
            title: "Autonomous Operations Achievement",
            description: "Attain up to 70% autonomous execution while maintaining embedded governance and policy compliance.  ",
            gradient: "from-[#222222] to-[#111111]", // dark
            icon: '/images/cunsultnow/Autonomous-Operations-Achievement.png'
        },
        {
            title: "Experience Intelligence Optimization",
            description: "Enable continuous learning loops that improve performance with every interaction, reducing human intervention. ",
            gradient: "from-[#222222] to-[#111111]", // dark
            icon: '/images/cunsultnow/Experience-Intelligence-Optimization.png'
        },
        {
            title: "Competitive Advantage Establishment",
            description: "Leverage our patent-protected framework to achieve sustainable market leadership through unified AI execution.",
            gradient: "from-[#222222] to-[#111111]", // dark
            icon: '/images/cunsultnow/Competitive-Advantage-Establishment.png'
        }
    ]

    return (
        <div className="">
            <GradientTitle
                text={'Successful AI Implementation Strategy Roadmap'}
                theme="dark"
                className="text-[25px] lg:text-[48px] md:text-[44px] w-[90%] text-center mx-auto  leading-[1.2]"
            />

            <BodyText
                text={"Enterprise AI succeeds through systematic, phased transformation. iTCart enables full-scale Generative AI activation across the enterprise."}
                color="#ffffff"
                className="text-sm sm:text-base md:text-lg my-2 text-center  w-[70%] mx-auto"
            />

            <main className="bg-black px-4 mt-1">
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

        </div>
    )
}
export default ImplementationStratogy