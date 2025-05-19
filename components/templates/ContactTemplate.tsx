import { AddressCardProps } from "@/types/PropsTypes"
import BodyText from "../atoms/typography/BodyText"
import GradientTitle from "../atoms/typography/GradientTitle"
import AddressSection from "../organisms/sections/contact/AddressSection"
import ContactFormSection from "../organisms/sections/contact/ContactFormSection"

const addressList: AddressCardProps[] = [
  {
    country: "India",
    phone: "+91 70196 67214",
    email: "sales@itcart.io",
    location: "WeWork Galaxy, Bengaluru, KA, India",
  },
  {
    country: "US",
    phone: "+1 (313) 790-2882",
    email: "ceo@itcart.io",
    location: "Toledo, Ohio, USA",
  },
  {
    country: "India",
    phone: "+91 70196 67214",
    email: "connect@itcart.io",
    location: "91Springboard, MG Road, Bengaluru",
  },
  {
    country: "India",
    phone: "+91 89518 06428",
    email: "neindiasales@itcart.io",
    location: "Prithvi Centre, Guwahati, India",
  },
]

const ContactTemplate = () => {
  return (
    <div className="flex flex-col h-full bg-black pt-16 lg:pt-24">
      <div className="container mx-auto lg:px-10 lg:w-1/2 flex flex-col items-center lg:py-16">
        <GradientTitle text="Get in Touch" theme="dark" className="lg:text-[64px]" />
        <BodyText text="Stay ahead with AI-powered solutions tailored to your needs. Connect with IT Cart experts through our contact form to explore what&apos;s possible." color="#ffffff" className="text-center" />
      </div>

      <div className="container mx-auto lg:px-10 lg:py-16">
        <ContactFormSection />
      </div>
      <div className="">
        <AddressSection addressList={addressList} />
      </div>
    </div>
  )
}

export default ContactTemplate

