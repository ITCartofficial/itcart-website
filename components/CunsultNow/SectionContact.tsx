import ContactFormSection from "../contact/ContactFormSection"
import BodyText from "../typography/BodyText"
import GradientTitle from "../typography/GradientTitle"

function SectionContact() {
    return (
        <div className="w-full">

            <div className="flex justify-center text-center mb-8">
                <GradientTitle
                    text="Contact iTCart's transformation experts today for your personalized AiXHub assessment and implementation roadmap."
                    lineHeight="1.2"
                    className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] leading-tight w-full sm:w-[90%] md:w-[85%] lg:w-[75%]"
                    theme="dark"
                />
            </div>

            <div className="flex justify-center text-center mb-6">
                <GradientTitle
                    text="Schedule Your Executive Briefing"
                    lineHeight="1.2"
                    className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] leading-tight w-full sm:w-[90%] md:w-[60%] lg:w-[40%]"
                    theme="dark"
                />
            </div>

            <div className="flex justify-center text-center">
                <BodyText
                    text="Discover the transformative power of AiX and unlock a future brimming with infinite possibilities."
                    theme="dark"
                    className="text-sm sm:text-base md:text-lg text-gray-300 w-full sm:w-[90%] md:w-[70%] lg:w-[50%]"
                />
            </div>


            <div className="flex justify-center px-4 py-10 bg-black text-white">
                <div className="w-full max-w-7xl">
                    <ContactFormSection />
                </div>
            </div>

        </div>
    )
}
export default SectionContact