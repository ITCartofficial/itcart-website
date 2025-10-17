import { FaArrowRight } from "react-icons/fa6"
import OutlineBtn from "../buttons/OutlineBtn"
import GradientTitle from "../typography/GradientTitle"

function JoinSection({ className }: { className: string }) {
    return (
        <section className="w-full bg-black text-white px-6 py-1">
            <div
                className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${className}`}
            >

                <div
                    className={`rounded-xl w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-end justify-center ${"md:order-2"}`}
                    style={{
                        backgroundImage: `url(${"/images/solutions/about-image.png"})`,
                    }}
                >

                </div>

                {/* Left Content aboutProduct ? "md:order-2" :*/}
                <div className={`space-y-6 ${"md:order-1"}`}>

                    <GradientTitle
                        text={"Join hands with ITCart to Create a Lasting Impact."}
                        theme="dark"
                        className="text-[22px] sm:text-[25px] md:text-[48px] w-full "
                    />


                    <p className="text-[16px] leading-relaxed">
                        {"Want to be part of the change? Contact us today!"}
                    </p>

                    <OutlineBtn
                        text={"Get Involved"}
                        icon={<FaArrowRight size={16} />}
                        url={"ctaUrl"}
                        theme="dark"
                        className="mt-2"
                    />

                </div>





            </div>
        </section>
    )
}
export default JoinSection