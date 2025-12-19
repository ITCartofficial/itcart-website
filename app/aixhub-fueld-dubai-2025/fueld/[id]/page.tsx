import OperativeSystem from "@/components/AixhubDetailpage/OperativeSystem";
import StrugglingPoint from "@/components/AixhubDetailpage/StrugglingPoint";
import OutlineBtn from "@/components/buttons/OutlineBtn";
import SolutionGrid from "@/components/DetailPageComponents/SolutionGrid";
import BodyText from "@/components/typography/BodyText";
import GradientTitle from "@/components/typography/GradientTitle"; 
import { FaArrowRight } from "react-icons/fa6";
;

const AixhubDetailpage = () => {

    const coreValues = [
        {
            icon: "/icons/respect.png",
            title: "Observation",
            description:
                "Real-time sensing of data, workflows, risks, opportunities, behaviours, and signals.",
        },
        {
            icon: "/icons/exceptional.png",
            title: "Reasoning",
            description:
                "Cross-functional interpretation and pattern-finding beyond traditional analytics.",
        },
        {
            icon: "/icons/authenticity.png",
            title: "Decisioning",
            description:
                "AI-augmented recommendations with human oversight, clear guardrails, and governance.",
        },
        {
            icon: "/icons/leadership.png",
            title: "Learning",
            description:
                "A memory layer that retains institutional knowledge so decisions get better every day.",
        },
    ]

    const solutionGridItems = [
        {
            title: "Water & Utilities",
            description: "Reduce knowledge loss, strengthen operational intelligence, and keep critical infrastructure resilient.",
            icon: '/images/vertical/icons/manicon.png',
            image: '/images/water.jpg'
        },
        {
            title: "Workforce & HR",
            description: "  Improve compliance, case governance, and employee support with AI-assisted decisions that stay fair and transparent. ",
            icon: '/images/vertical/icons/manicon.png',
            image: '/images/hr.jpg'
        },
        {
            title: " Steel & Manufacturing",
            description: "Optimise planning, remove bottlenecks, and eliminate operational chaos with  real-time intelligence.",
            icon: '/images/vertical/icons/manicon.png',
            image: '/images/steel.jpg'
        },
        {
            title: " Finance & Insurance",
            description: "  Elevate underwriting, risk assessment, and scenario reasoning with explainable, AI-supported decisions.",
            icon: '/images/vertical/icons/manicon.png',
            image: '/images/finance.jpg'
        },
        // {
        //     title: "  Sports & Entertainment",
        //     description: " Unlock unified revenue visibility, fan insights, and real-time decision support across league and club operations.",
        //     icon: '/images/vertical/icons/manicon.png',
        //     image: '/images/sports.jpg'
        // }
    ]

    return (
        <div className="min-h-screen text-slate-50">
            {/* Page wrapper */}
            {/* <div className='bg-black container mx-auto  md:py-0 lg:px-10'> */}
            <div className='bg-black container mx-auto  md:py-0 lg:px-10 mt-20'>

                {/* HERO */}
                <section className="mb-20 grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div className="">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2AADB7]">
                            AiXHub EOS
                        </p>
                        <GradientTitle
                            text={"The AI-Native Enterprise Operating System"}
                            theme="dark"
                            className="text-[28px] sm:text-[32px] md:text-[48px] leading-[1.2]"
                        />

                        <BodyText
                            text={"A new operating model for intelligent, human-centred enterprises. Most organisations don’t have an AI technology problem— they have an AI operating problem."}
                            color="#ffffff"
                            className="text-sm text-[18px] w-[90%] mt-4"
                        />

                        <BodyText
                            text={" AiXHub EOS helps leaders redesign how their enterprise thinks, decides, and executes with AI at the centre—and humans in control."}
                            color="#ffffff"
                            className="text-sm text-[18px] w-[90%] mt-4"
                        />

                    </div>

                    {/* Hero “video” / visual placeholder */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-900/40 p-4 shadow-2xl">
                            <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                                <span className="inline-flex items-center gap-1">
                                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                                    Live Concept
                                </span>
                                <span>AiXHub EOS • Keynote Teaser</span>
                            </div>
                            <div className="aspect-video w-full rounded-2xl bg-slate-900/80 ring-1 ring-slate-700/80 flex items-center justify-center">
                                <p className="px-6 text-center text-sm text-slate-300">
                                    “Why the World Has an AI Operating Problem”
                                    <span className="mt-1 block text-xs text-slate-500">
                                        Video placeholder – embed your FUELD teaser here
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROBLEM */}
                <section className="mb-16">
                    <div className='bg-black container mx-auto lg:px-10 '>
                        <StrugglingPoint />
                    </div>
                </section>


                <section className="mb-16">
                    <div className="bg-black py-10 md:py-10">
                        <OperativeSystem coreValues={coreValues} />
                    </div>
                </section>

                <div className='bg-black container mx-auto  md:py-0 lg:px-10'>

                    <div className=" border-b-zinc-600 ">
                        <SolutionGrid
                            capabilitiSectionHeading={" Enterprise impact across industries"}
                            capabilitiSectionDescription={""}
                            className="bg-[#1B1B1B]"
                            CapabilitySections={solutionGridItems}
                        />
                    </div>
                </div>

                <section className="w-full bg-black text-white px-6 mt-16">
                    <div
                        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-10 items-center`}
                    >
                        {/* Left Content */}
                        <div className={`space-y-3`}>

                            <GradientTitle
                                text={"The future of your enterprise is AI-native"}
                                theme="dark"
                                className={`${"text-[30px] sm:text-[25px] md:text-[38px] text-center md:text-start"}  w-full `}
                            />

                            <ul className="mb-4 space-y-2 text-[16px] text-slate-300">
                                <li>• How do we redesign our enterprise to think with AI?</li>
                                <li>• How do we scale AI safely and responsibly?</li>
                                <li>• How do we preserve human expertise in an AI-driven world?</li>
                                <li>• How do we move from pilots to enterprise-wide impact?</li>
                            </ul>

                        </div>



                        <div
                            className={`rounded-xl w-full h-[200px] md:h-[350px] bg-cover bg-center flex items-end justify-center`}
                            style={{
                                backgroundImage: `url(${"/images/industries/sectionabout.png"})`,
                            }}
                        >
                            <div className="sr-only">{""}</div>
                        </div>

                    </div>
                </section>

                <section className="mb-16 grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-start mt-20">

                    <div className="rounded-3xl flex flex-col items-center text-center p-5">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#2AADB7]">
                            FUELD Dubai 2025
                        </p>

                        <GradientTitle
                            text={"The AI-Native Enterprise Operating System"}
                            theme="dark"
                            className="text-[22px] sm:text-[22px] md:text-[30px] leading-[1.2]"
                        />
                        {/* <h4 className="mb-2 text-lg font-semibold text-slate-50">
                            AiXHub EOS – Global Stage Debut
                        </h4> */}

                        <p className="mb-3 text-[16px] text-slate-300 mt-2">
                            AiXHub EOS will make its first global-stage appearance at{" "}
                            <span className="font-medium text-slate-100">FUELD Dubai 2025</span>.
                        </p>

                        <p className="mb-4 text-[16px] text-slate-300">
                            Hear directly from: <br />
                            <span className="font-bold text-[20px] text-slate-100">
                                Mohammed Rohim Uddin
                            </span>{" "}
                            <br />
                            Inventor, AiXHub EOS &amp; Founder &amp; Global CTO, iTCart.
                        </p>

                        <div className="pt-4 border-slate-700 bg-red-400">
                            <OutlineBtn
                                url='/contact-us'
                                text="Connect with us around FUELD"
                                textColor='#ffffff'
                                icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                            />
                        </div>
                    </div>

                </section>









                {/* FINAL CTA */}
                <section className="rounded-3xl border border-sky-500/40 bg-sky-500/5 px-6 py-8 text-center">
                    <h2 className="mb-3 text-2xl font-semibold text-slate-50 md:text-3xl">
                        Ready to explore AiXHub EOS for your enterprise?
                    </h2>
                    <p className="mb-5 text-sm text-slate-200">
                        Start with a thoughtful conversation—not a demo carousel.
                        Share your context and we’ll help you explore if AiXHub EOS is the right fit.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="pt-4 border-t border-slate-700">
                            <OutlineBtn
                                url='/contact-us'
                                text="Request a Conversation"
                                textColor='#ffffff'
                                icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                            />
                        </div>
                        <div className="pt-4 border-t border-slate-700">
                            <OutlineBtn
                                url='/contact-us'
                                text=" Email our leadership team    "
                                textColor='#ffffff'
                                icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                            />
                        </div>
                        {/* <button className="rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400">
                            Request a Conversation
                        </button>
                        <a
                            href="mailto:contact@itcart.ai"
                            className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
                        >
                            Email our leadership team
                        </a> */}
                    </div>
                </section>
            </div>
        </div>

    )
}
export default AixhubDetailpage;
