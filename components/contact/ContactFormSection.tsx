import ImageContainer from "@/components/common/ImageContainer"
import BodyText from "@/components/typography/BodyText"
import ContactForm from "@/components/forms/ContactForm"
import GradientTitle from "../typography/GradientTitle"

const ContactFormSection = ({ image }: { image: string }) => {
    return (
        <div className="w-full border-[1px] border-[#45C2CC] p-6 sm:p-8 lg:p-16 rounded-2xl bg-[#131313] mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap- ">
                        <GradientTitle
                            text="Let's Connect "
                            lineHeight="1.2"
                            className="text-[48px]  text-center md:text-start whitespace-pre-line leading-[1.3]"
                            theme="dark"
                        />
                        {/* <HeadingText
                            text="Let&apos;s connect with us"
                            theme="dark"
                            className="text-[40px] whitespace-pre-line" /> */}
                        <BodyText
                            text="Accelerate enterprise operations with  AiX-intelligent automation that scales  your business and drives measurable ROI."
                            theme="dark"
                            className="text-base text-center md:text-start text-white mt-2" />
                    </div>
                    <div className={`relative w-full md:hidden block h-[250px] md-[400px] rounded-xl overflow-hidden`}>
                        <ImageContainer
                            src={image || "/images/contact/contact-form-img.png"}
                            alt="contact-us"
                            className="rounded-xl"
                        />
                    </div>
                    <ContactForm theme="dark" />
                </div>
                <div className="relative md:block hidden w-full h-[400px] sm:h-[400px] lg:h-full rounded-xl overflow-hidden">
                    <ImageContainer
                        src={image || "/images/contact/contact-form-img.png"}
                        alt="contact-us"
                        className="rounded-xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactFormSection