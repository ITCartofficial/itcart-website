import { FaArrowRight } from "react-icons/fa6"
import OutlineBtn from "../buttons/OutlineBtn"
import GradientTitle from "../typography/GradientTitle"

function SolutionAboutSection({ className, aboutSolutionHeading, aboutSolutionDiscription, aboutSolutionImage }:
    { className: string, aboutSolutionHeading: string, aboutSolutionDiscription: string, aboutSolutionImage: string }) {
    return (
        <section className="w-full bg-black text-white px-6 py-1">
            <div
                className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${className}`}
            >
                {/* Left Content aboutProduct ? "md:order-2" :*/}
                <div className={`space-y-6  ${"md:order-2"}`}>

                    <GradientTitle
                        text={aboutSolutionHeading}
                        theme="dark"
                        className="text-[28px] sm:text-[36px] md:text-[48px] w-full text-center md:text-start"
                    />


                    <p className="text-[16px] leading-relaxed text-center md:text-start">
                        {aboutSolutionDiscription}
                    </p>

                    <div className="w-fill flex justify-center md:justify-start" > 
                        <OutlineBtn
                            text={"Start Transformation"}
                            icon={<FaArrowRight size={16} />}
                            url={"contact-us"}
                            theme="dark"
                            className="mt-2"
                        />
                    </div>


                </div>

                <div
                    className={`rounded-xl w-full h-[200px] md:h-[400px] bg-cover bg-center flex items-end justify-center ${"md:order-1"}`}
                    style={{
                        backgroundImage: `url(${aboutSolutionImage})`,
                    }}
                >

                </div>



            </div>
        </section>
    )
}
export default SolutionAboutSection