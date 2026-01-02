import ContactFormSection from "../contact/ContactFormSection"
import BodyText from "../typography/BodyText"
import GradientTitle from "../typography/GradientTitle"

function SectionContact({ showContent }: { showContent: string, image: string }) {
    return (
        <div className="w-full">

            {
                showContent != "noShow" &&
                <>
                    <div className="flex justify-center text-center mb-8 md:px-0 px-10">
                        <GradientTitle
                            text="Contact iTCart’s transformation experts today for a personalized AiXHub™ assessment and implementation roadmap."
                            lineHeight="1.2"
                            className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] leading-tight w-full sm:w-[90%] md:w-[70%]"
                            theme="dark"
                        />
                    </div>

                    <div className="flex justify-center text-center mb-6 md:px-0 px-10">
                        <GradientTitle
                            text="Schedule Your Executive Briefing "
                            as="h3"
                            lineHeight="1.2"
                            className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] leading-tight w-full sm:w-[90%] md:w-[60%] lg:w-[40%]"
                            theme="dark"
                        />
                    </div>

                    <div className="flex justify-center text-center md:px-0 px-10">
                        <BodyText
                            text="Receive a personalized ROI analysis and implementation roadmap within 48 hours."
                            theme="dark"
                            className="text-sm sm:text-base md:text-lg text-gray-300 w-full sm:w-[90%] md:w-[70%] lg:w-[50%]"
                        />
                    </div>
                </>

            }

            <div className="flex justify-center px-4 md:py-7 bg-black text-white">
                <div className="w-full max-w-7xl">
                    <ContactFormSection image={"/images/contact/contact-form-img.png"} />
                </div>
            </div>

        </div>
    )
}
export default SectionContact