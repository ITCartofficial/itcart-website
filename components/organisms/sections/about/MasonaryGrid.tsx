import Image from "next/image"

const MasonaryGrid = ({ }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-black text-white rounded-xl">

            {/* Mission Box (shown 3rd in mobile) */}
            <div className="order-3 md:order-none p-6 rounded-xl h-auto md:h-64 flex flex-col justify-between shrink-0"
                style={{
                    background: 'linear-gradient(116deg, rgba(69, 204, 249, 0.33) 10.92%, rgba(2, 58, 88, 0.14) 96.4%)',
                    backdropFilter: "blur(38%)"
                }}
            >
                <p className="text-[16px] md:text-left mb-4">
                    With a mission to deliver cutting-edge AI solutions, we're scaling globally — powered by a talented workforce and creating meaningful job opportunities worldwide.
                </p>
                <div className=" md:text-left">
                    <p className="text-[36px] font-semibold">6 countries</p>
                    <p className="text-[20px] text-white/80">85 employees</p>
                </div>
            </div>

            {/* AI-Tech Large Image (2nd in mobile) */}
            <div className="order-2 md:order-none bg-[#0F1D2D] p-6 rounded-xl overflow-hidden relative flex flex-col justify-between row-span-2 h-[300px] md:h-auto">
                <Image
                    src="/images/about/ai-tech.jpg"
                    alt="about us"
                    fill
                    className="w-full h-full object-cover"
                />
            </div>

            {/* AI-Image (4th in mobile) */}
            <div className="order-4 md:order-none bg-[#0F1D2D] p-6 rounded-xl overflow-hidden h-[300px] md:h-64 flex flex-col justify-between relative shrink-0">
                <Image
                    src="/images/about/ai-image.jpg"
                    alt="about us"
                    fill
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Team Image (1st in mobile) */}
            <div className="order-1 md:order-none bg-[#0F1D2D] p-6 rounded-xl overflow-hidden h-[300px] md:h-64 flex flex-col justify-between relative shrink-0">
                <Image
                    src="/images/about/team-img.jpg"
                    alt="about us"
                    fill
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Client Box (5th in mobile) */}
            <div className="order-5 md:order-none bg-[#0F1D2D] p-6 rounded-xl h-auto md:h-64 flex flex-col justify-between shrink-0"
                style={{
                    background: 'linear-gradient(116deg, rgba(69, 204, 249, 0.33) 10.92%, rgba(2, 58, 88, 0.14) 96.4%)',
                    backdropFilter: "blur(38%)"
                }}
            >
                <div className="flex flex-col md:text-left mb-2">
                    <p className="text-[36px] font-semibold">490+</p>
                    <p className="text-[16px]">Trusted client</p>
                </div>
                <p className="text-[16px] text-white/80 md:text-left">
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