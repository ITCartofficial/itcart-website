import Image from "next/image"
import GradientTitle from "../typography/GradientTitle"


interface ResultItem {
    percentage: string,
    label: string,
}

function divResult({ resultHeading, results,
    resultImage }: { resultHeading: string, results: ResultItem[], resultImage: string }) {

    return (
        <div className="px-6  md:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left side - Image */}
                    <div className="flex justify-center items-center h-[200px] sm:h-[600px] md:h-[500px] rounded-3xl overflow-hidden bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${resultImage})`
                        }}
                    >
                    </div>

                    <div className="space-y-5 p-5">
                        {/* Heading */}
                        <div>
                            <div className="max-w-5xl mb-4 text-center md:text-start">
                                <GradientTitle
                                    text={resultHeading}
                                    theme="dark"
                                    className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-[1.3]"
                                />
                            </div>
                            {/* <h2 className="text-[28px] sm:text-[36px] md:text-[48px] text-center md:text-start font-bold text-white">
                                {resultHeading}
                            </h2> */}
                        </div>

                        <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 justify-center ">
                            {results.map((stat, index) => (
                                <div key={index} className="space-y-2 flex flex-col items-center md:items-start">
                                    <div className="text-5xl md:text-[30px] font-bold text-cyan-400">{stat.percentage}</div>
                                    <p style={{ lineHeight: '18px' }} className="md:text-start text-[14px] text-gray-300 leading-relaxed text-center md:text-start">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className=" bg-black text-white mt-10 mt-15 md:mt-25   flex items-center justify-center">
                <div className=" mx-auto w-full">
                    <div className="relative border border-[#45C2CC] rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 text-center">
                            <div className="max-w-5xl mx-auto text-center mb-4">
                                <GradientTitle
                                    text={"Trusted Excellence"}
                                    theme="dark"
                                    className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight"
                                />
                            </div>

                            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-16 lg:mb-12">
                                Built by iTCart, ISO-certified leaders in digital transformation delivering enterprise-grade digital workplace solution that drives organizational excellence and measurable business success.
                            </p>

                            <div className="flex sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
                                <div className="group relative w-25 h-25 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
                                    <Image
                                        src="/images/solutions/logo-01.png"
                                        alt="Team collaboration..."
                                        fill
                                        style={{ objectFit: "cover" }}
                                        priority
                                    />
                                </div>

                                <div className="group relative w-25 h-25 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
                                    <Image
                                        src="/images/solutions/logo-02.png"
                                        alt="Team collaboration..."
                                        fill
                                        style={{ objectFit: "cover" }}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default divResult