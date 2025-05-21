import Image from "next/image"

const MasonaryGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-black text-white rounded-xl">

            <div
                className="p-6 rounded-xl h-64 flex flex-col justify-between shrink-0"
                style={{ background: 'linear-gradient(116deg, rgba(69, 204, 249, 0.33) 10.92%, rgba(2, 58, 88, 0.14) 96.4%)', backdropFilter: "blur(38%)" }}
            >
                <p className="text-sm md:text-base mb-4">
                    With a mission to deliver cutting-edge AI solutions, we're scaling globally—
                    powered by a talented workforce and creating meaningful job opportunities worldwide.
                </p>
                <div>
                    <p className="text-3xl font-semibold">6 countries</p>
                    <p className="text-lg text-white/80">85 employees</p>
                </div>
            </div>
            <div className="bg-[#0F1D2D] p-6 rounded-xl overflow-hidden relative flex flex-col justify-between row-span-2">
                <Image
                    src="/images/about/ai-tech.jpg"
                    alt="about us"
                    fill
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="bg-[#0F1D2D] p-6 rounded-xl overflow-hidden h-64 flex flex-col justify-between relative shrink-0">
                <Image
                    src="/images/about/ai-image.jpg"
                    alt="about us"
                    fill
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="bg-[#0F1D2D] p-6 rounded-xl overflow-hidden h-64 flex flex-col justify-between relative shrink-0">
                <Image
                    src="/images/about/team-img.jpg"
                    alt="about us"
                    fill
                    className="w-full h-full object-cover"
                />
            </div>

            <div
                className="bg-[#0F1D2D] p-6 rounded-xl h-64 flex flex-col justify-between shrink-0"
                style={{ background: 'linear-gradient(116deg, rgba(69, 204, 249, 0.33) 10.92%, rgba(2, 58, 88, 0.14) 96.4%)', backdropFilter: "blur(38%)" }}
            >
                <div className="flex flex-col">
                    <p className="text-3xl font-semibold">490+</p>
                    <p className="text-lg">Trusted client</p>
                </div>
                <p className="text-sm md:text-base text-white/80">
                    Our diversified clientele base has helped us deliver exceptional quality at all times.
                    As we move forward, we look to introduce new technologies that will help us target a new audience.
                </p>
            </div>

        </div>
    )
}

export default MasonaryGrid

// border-radius: 15px;
// background: ;
// backdrop-filter: blur(38.07310485839844px);