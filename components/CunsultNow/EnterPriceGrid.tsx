import BodyText from "../typography/BodyText"
import GradientTitle from "../typography/GradientTitle"

function EnterPriceGrid() {

    const capabilities = [
        {
            title: "AI Decision Execution Engine",
            description:
                "Autonomous task completion based on trust parameters, SLA requirements, and policy frameworks with real-time risk assessment capabilities.",
            image: "/images/cunsultnow/AI-Decision.png",
        },
        {
            title: "Co-Pilot and Auto-Pilot Architecture",
            description:
                "Role-bound AI agents providing human-assisted and fully autonomous execution modes with intelligent escalation protocols and contextual understanding.",
            image: "/images/cunsultnow/co-pilot.png",
        },
        {
            title: "Experience Intelligence Loop",
            description:
                "Self-learning governance system that continuously optimizes performance, adapts policies based on outcomes, and identifies efficiency opportunities automatically.",
            image: "/images/cunsultnow/experions.png",
        },
        {
            title: "Embedded Governance Framework",
            description:
                "Real-time compliance enforcement across GDPR, HIPAA, and industry standards with automated audit trails and regulatory alignment capabilities.",
            image: "/images/cunsultnow/embedded.png",
        },
        {
            title: "Cross-System Orchestration Model",
            description:
                "Unified execution across ERP, CRM, HRMS systems creating single source of truth while eliminating data fragmentation issues.",
            image: "/images/cunsultnow/AI-Decision.png",
        },
        {
            title: "SLA-Aware Execution Switching",
            description:
                "Dynamic path selection optimizing resource allocation with intelligent queuing, time-bound execution, and fallback protocols maintaining operational continuity.",
            image: "/images/cunsultnow/sla-aware.png",
        },
    ];

    return (
        <div>
            <GradientTitle
                text={'AiXHub  - The Unified Solution for All Your Enterprise Issues'}
                theme="dark"
                className="text-[25px] lg:text-[48px] md:text-[44px] w-[90%] md:w-[60%] text-center  mx-auto leading-[1.2]"
            />

            <BodyText
                text={"The world's first AI-native Enterprise Operating System replacing fragmented software stacks with patent-protected unified intelligent execution. Our ai powered digital transformation platform represents the next evolution beyond traditional solutions offered by other artificial intelligence consulting companies."}
                color="#ffffff"
                className="text-sm sm:text-base md:text-lg my-2 text-center  md:w-[70%] w-[90%] mx-auto"
            />

            <section className="bg-black text-white mt-12 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((cap, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl overflow-hidden h-[400px] flex items-end p-6 bg-cover bg-center group transition-all duration-300"
                            style={{
                                backgroundImage: ` url(${cap.image})`,
                            }}
                        >
                            <div className="z-10">
                                <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                                    {cap.title}
                                </h3>
                                <p className="text-gray-300 text-base leading-relaxed">
                                    {cap.description}
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </section>
            
        </div>
    )
}
export default EnterPriceGrid