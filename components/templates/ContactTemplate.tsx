import BodyText from "../atoms/typography/BodyText"
import GradientTitle from "../atoms/typography/GradientTitle"

const ContactTemplate = () => {
  return (
    <div className="flex flex-col h-full bg-black pt-40">
      <div className="w-full lg:w-1/2 mx-auto flex flex-col items-center">
        <GradientTitle text="Get in Touch" theme="dark" className="lg:text-[64px]" />
        <BodyText text="Stay ahead with AI-powered solutions tailored to your needs. Connect with IT Cart experts through our contact form to explore what&apos;s possible." color="#ffffff" className="text-center" />
      </div>
    </div>
  )
}

export default ContactTemplate

