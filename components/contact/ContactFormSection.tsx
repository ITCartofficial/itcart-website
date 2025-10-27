import ImageContainer from "@/components/common/ImageContainer"
import BodyText from "@/components/typography/BodyText"
import HeadingText from "@/components/typography/HeadingText"
import ContactForm from "@/components/forms/ContactForm"


const ContactFormSection = ({ image }: { image: string }) => {
    return (
        <div className="w-full border-[1px] border-[#45C2CC] p-6 sm:p-8 lg:p-16 rounded-2xl bg-[#131313]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <HeadingText
                            text="Let&apos;s connect with us"
                            theme="dark"
                            className="text-[30px] whitespace-pre-line" />
                        <BodyText
                            text="Discover the transformative power of AiX and unlock a future brimming with infinite possibilities."
                            theme="dark"
                            className="text-base text-white" />
                    </div>
                    <ContactForm theme="dark" />
                </div>
                <div className="relative w-full h-[400px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
                    <ImageContainer
                        src={image || "/images/contact/contact-form-img.jpg"}
                        alt="contact-us"
                        className="rounded-xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactFormSection