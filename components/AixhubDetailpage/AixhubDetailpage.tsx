const AixhubDetailpage = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            {/* Page wrapper */}
            <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 lg:px-6">
                {/* HERO */}
                <section className="mb-20 grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                            AiXHub EOS
                        </p>
                        <h1 className="mb-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                            The AI-Native <span className="text-sky-400">Enterprise Operating System</span>
                        </h1>
                        <p className="mb-4 text-base text-slate-300">
                            A new operating model for intelligent, human-centred enterprises.
                            Most organisations don’t have an AI technology problem—{" "}
                            <span className="font-medium text-slate-100">
                                they have an AI operating problem.
                            </span>
                        </p>
                        <p className="mb-8 text-sm text-slate-400">
                            AiXHub EOS helps leaders redesign how their enterprise thinks, decides,
                            and executes with AI at the centre—and humans in control.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <button className="rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400">
                                Request a Conversation
                            </button>
                            <button className="rounded-full border border-slate-600 px-6 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-500 hover:text-sky-400">
                                Schedule a Briefing
                            </button>
                        </div>
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
                    <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                        The Real Problem
                    </h2>
                    <h3 className="mb-4 text-2xl font-semibold text-slate-50 md:text-3xl">
                        The world isn’t struggling with AI technology.
                        <br className="hidden md:block" />
                        It’s struggling with how to <span className="text-sky-400">operate with AI</span>.
                    </h3>
                    <p className="mb-4 max-w-3xl text-sm leading-relaxed text-slate-300">
                        Every enterprise is experimenting with AI—pilots, copilots, LLMs, and automation.
                        But very few see scalable value across the business.
                    </p>
                    <p className="mb-4 max-w-3xl text-sm leading-relaxed text-slate-300">
                        The challenge isn’t the models or the GPUs. The real gap is the{" "}
                        <span className="font-medium text-slate-100">operating model behind AI</span>:
                    </p>
                    <ul className="grid gap-3 text-sm text-slate-300 md:grid-cols-2">
                        <li className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3">
                            How decisions are made and revisited in real time.
                        </li>
                        <li className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3">
                            How workflows adapt when new intelligence appears.
                        </li>
                        <li className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3">
                            How governance keeps up with AI-driven operations.
                        </li>
                        <li className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3">
                            How human expertise and AI intelligence work together.
                        </li>
                        <li className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3">
                            How intelligence flows across business units.
                        </li>
                        <li className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3">
                            How the organisation learns instead of starting from zero every time.
                        </li>
                    </ul>
                </section>

                {/* INTRODUCING AIXHUB */}
                <section className="mb-16">
                    <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                        Introducing AiXHub EOS
                    </h2>
                    <h3 className="mb-4 text-2xl font-semibold text-slate-50 md:text-3xl">
                        The AI-Native Enterprise Operating System
                    </h3>
                    <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-300">
                        AiXHub EOS is a unified intelligence layer that sits above your existing systems—
                        ERP, CRM, HR, operations, finance, engineering—and turns them into an AI-native
                        enterprise without ripping and replacing what already works.
                    </p>

                    <div className="grid gap-4 md:grid-cols-4">
                        {[
                            {
                                title: "Observation",
                                desc: "Real-time sensing of data, workflows, risks, opportunities, behaviours, and signals."
                            },
                            {
                                title: "Reasoning",
                                desc: "Cross-functional interpretation and pattern-finding beyond traditional analytics."
                            },
                            {
                                title: "Decisioning",
                                desc: "AI-augmented recommendations with human oversight, clear guardrails, and governance."
                            },
                            {
                                title: "Learning",
                                desc: "A memory layer that retains institutional knowledge so decisions get better every day."
                            }
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-950/40 p-4"
                            >
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                                    {item.title}
                                </p>
                                <p className="text-sm text-slate-300">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* DESIGNED FOR ENTERPRISES */}
                <section className="mb-16">
                    <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                        For Enterprise Leaders
                    </h2>
                    <h3 className="mb-4 text-2xl font-semibold text-slate-50 md:text-3xl">
                        Designed for enterprises that want AI at scale
                    </h3>
                    <p className="mb-5 max-w-3xl text-sm leading-relaxed text-slate-300">
                        AiXHub EOS gives leaders a practical blueprint to go AI-native, not just AI-enabled.
                    </p>

                    <div className="grid gap-3 md:grid-cols-2">
                        {[
                            "More confident, faster decision-making.",
                            "Governed human + AI collaboration across teams.",
                            "Reduction in operational friction and chaos.",
                            "Consistent execution across functions and regions.",
                            "Preservation of institutional knowledge and expertise.",
                            "Rapid clarity in complex, high-stakes environments."
                        ].map((point, idx) => (
                            <div
                                key={idx}
                                className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3"
                            >
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                                <p className="text-sm text-slate-300">{point}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* INDUSTRY IMPACT */}
                <section className="mb-16">
                    <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                        Industry Impact
                    </h2>
                    <h3 className="mb-4 text-2xl font-semibold text-slate-50 md:text-3xl">
                        Enterprise impact across industries
                    </h3>

                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                                Water & Utilities
                            </p>
                            <p className="text-sm text-slate-300">
                                Reduce knowledge loss, strengthen operational intelligence, and keep critical
                                infrastructure resilient.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                                Workforce & HR
                            </p>
                            <p className="text-sm text-slate-300">
                                Improve compliance, case governance, and employee support with AI-assisted
                                decisions that stay fair and transparent.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                                Steel & Manufacturing
                            </p>
                            <p className="text-sm text-slate-300">
                                Optimise planning, remove bottlenecks, and eliminate operational chaos with
                                real-time intelligence.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                                Finance & Insurance
                            </p>
                            <p className="text-sm text-slate-300">
                                Elevate underwriting, risk assessment, and scenario reasoning with explainable,
                                AI-supported decisions.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                                Sports & Entertainment
                            </p>
                            <p className="text-sm text-slate-300">
                                Unlock unified revenue visibility, fan insights, and real-time decision support
                                across league and club operations.
                            </p>
                        </div>
                    </div>

                    <p className="mt-4 max-w-3xl text-sm text-slate-300">
                        Different sectors, same result: less chaos, more clarity, and teams finally able to
                        do their best work.
                    </p>
                </section>

                {/* FUTURE / FUELD */}
                <section className="mb-16 grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-start">
                    <div>
                        <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                            The Future
                        </h2>
                        <h3 className="mb-4 text-2xl font-semibold text-slate-50 md:text-3xl">
                            The future of your enterprise is AI-native
                        </h3>
                        <p className="mb-4 max-w-xl text-sm leading-relaxed text-slate-300">
                            AiXHub EOS helps leaders answer the real questions:
                        </p>
                        <ul className="mb-4 space-y-2 text-sm text-slate-300">
                            <li>• How do we redesign our enterprise to think with AI?</li>
                            <li>• How do we scale AI safely and responsibly?</li>
                            <li>• How do we preserve human expertise in an AI-driven world?</li>
                            <li>• How do we move from pilots to enterprise-wide impact?</li>
                        </ul>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-400">
                            FUELD Dubai 2025
                        </p>
                        <h4 className="mb-2 text-lg font-semibold text-slate-50">
                            AiXHub EOS – Global Stage Debut
                        </h4>
                        <p className="mb-3 text-sm text-slate-300">
                            AiXHub EOS will make its first global-stage appearance at{" "}
                            <span className="font-medium text-slate-100">FUELD Dubai 2025</span>.
                        </p>
                        <p className="mb-4 text-sm text-slate-300">
                            Hear directly from:
                            <br />
                            <span className="font-medium text-slate-100">
                                Mohammed Rohim Uddin
                            </span>{" "}
                            – Inventor, AiXHub EOS &amp; Founder &amp; Global CTO, iTCart.
                        </p>
                        <button className="w-full rounded-full border border-fuchsia-400/70 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-fuchsia-300 transition hover:border-fuchsia-300 hover:text-fuchsia-100">
                            Connect with us around FUELD
                        </button>
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
                        <button className="rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400">
                            Request a Conversation
                        </button>
                        <a
                            href="mailto:contact@itcart.ai"
                            className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
                        >
                            Email our leadership team
                        </a>
                    </div>
                </section>
            </div>
        </div>

        // <div className="bg-red-400 mt-20">
        //     AixhubDetailpage
        // </div>
    )
}
export default AixhubDetailpage;
