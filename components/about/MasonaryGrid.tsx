import Image from "next/image";

const MasonaryGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-black text-white rounded-xl">
            {/* === Left Column === */}
            <div className="flex flex-col gap-4">
                <div className="relative block md:hidden h-[260px] rounded-xl overflow-hidden">
                    <Image
                        src="/images/about/team-img.jpg"
                        alt="Team"
                        fill
                        className="object-cover"
                    />
                </div>

                <div
                    className="p-6 rounded-xl flex flex-col justify-between h-[300px]"
                    style={{
                        background:
                            "linear-gradient(116deg, rgba(69,204,249,0.33) 10.92%, rgba(2,58,88,0.14) 96.4%)",
                        backdropFilter: "blur(38px)",
                    }}
                >
                    <p className="text-[16px] md:text-[18px] leading-relaxed mb-2">
                        With a mission to deliver cutting-edge AI solutions, we’re scaling
                        globally—powered by a talented workforce and creating meaningful job
                        opportunities worldwide.
                    </p>
                    <div className="py-2">
                        <p className="text-[32px] md:text-[48px] font-semibold">
                            6 countries
                        </p>
                        <p className="text-[16px] md:text-[20px] text-white/80">
                            85 employees
                        </p>
                    </div>
                </div>

                {/* Team Image */}
                <div className="relative md:block hidden h-[260px] rounded-xl overflow-hidden">
                    <Image
                        src="/images/about/team-img.jpg"
                        alt="Team"
                        fill
                        className="object-cover"
                    />
                </div>

            </div>

            <div className="relative rounded-xl overflow-hidden h-full">
                <Image
                    src="/images/about/ai-tech.jpg"
                    alt="AI Tech"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col gap-4">
                {/* AI Image */}
                <div className="relative h-[260px] rounded-xl overflow-hidden">
                    <Image
                        src="/images/about/ai-image.jpg"
                        alt="AI"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Client Box */}
                <div
                    className="px-6 py-3 rounded-xl flex flex-col justify-between h-[300px]"
                    style={{
                        background:
                            "linear-gradient(116deg, rgba(69,204,249,0.33) 10.92%, rgba(2,58,88,0.14) 96.4%)",
                        backdropFilter: "blur(38px)",
                    }}
                >
                    <div className="">
                        <p className="text-[32px] md:text-[48px] font-semibold">490+</p>
                        <p className="text-[16px] md:text-[20px] text-white/80">
                            Trusted client
                        </p>
                    </div>
                    <p className="text-[16px] md:text-[18px] text-white/80 leading-relaxed pt-4">
                        Our diversified clientele base has helped us deliver exceptional
                        quality at all times. As we move forward, we look to introduce new
                        technologies that will help us target a new audience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MasonaryGrid;
